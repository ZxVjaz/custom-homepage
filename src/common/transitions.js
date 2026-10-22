// Pure Vanilla JS Chevron Transition Engine
// Unified Catppuccin Theme:
// 1. Search Enter -> Smooth SVG Wave + Diagonal Marquee + Native-HD Glowing Center Badge
// 2. :settings   -> Portal-to-Modal Morph Transition into <settings-modal>
// 3. Bookmark    -> Vector clip-path: circle Radial Expansion + Native-HD Glowing Center Badge

class TransitionAnimator {
  static isAnimating = false;
  static activeOverlay = null;
  static rafId = null;
  static _iconCache = new Map();

  /**
   * Resolve speed multiplier for a specific transition type ('bookmark', 'search', or fallback)
   * @param {string} [type] - 'bookmark' | 'search'
   * @returns {number}
   */
  static getSpeedMultiplier(type) {
    if (typeof CONFIG === 'undefined') return 1.0;
    const cfgSpeed = CONFIG.animationSpeed;
    if (typeof cfgSpeed === 'number') {
      return cfgSpeed;
    }
    if (cfgSpeed && typeof cfgSpeed === 'object') {
      if (type && typeof cfgSpeed[type] === 'number') {
        return cfgSpeed[type];
      }
      if (typeof cfgSpeed.search === 'number' && (type === 'search' || type === 'modal')) {
        return cfgSpeed.search;
      }
      if (typeof cfgSpeed.bookmark === 'number' && type === 'bookmark') {
        return cfgSpeed.bookmark;
      }
    }
    return 1.0;
  }

  /**
   * Calculate adjusted duration in milliseconds based on CONFIG.animationSpeed
   * If animationSpeed is 0, returns 0 for instant execution
   * @param {number} baseMs
   * @param {string} [type] - 'bookmark' | 'search'
   * @returns {number}
   */
  static getDuration(baseMs, type) {
    const speed = TransitionAnimator.getSpeedMultiplier(type);
    if (speed <= 0) return 0;
    return Math.round(baseMs * speed);
  }

  /**
   * Determine whether transition animations should be played or bypassed instantly
   * @param {string} [type] - 'bookmark' | 'search'
   * @returns {boolean}
   */
  static isAnimationDisabled(type) {
    return TransitionAnimator.getSpeedMultiplier(type) <= 0;
  }

  /**
   * Check whether a Tabler icon class actually has a glyph in tabler-icons.min.css
   * @param {string} iconClass - e.g. 'ti-brand-duckduckgo' or 'brand-google'
   * @returns {boolean}
   */
  static hasIconGlyph(iconClass) {
    if (!iconClass) return false;
    const clean = String(iconClass).trim().replace(/^(ti\s+ti-|ti-)/, '').trim();
    if (!clean) return false;
    if (TransitionAnimator._iconCache.has(clean)) {
      return TransitionAnimator._iconCache.get(clean);
    }
    const probe = document.createElement('i');
    probe.className = `ti ti-${clean}`;
    probe.style.cssText = 'position:fixed;left:-9999px;top:-9999px;visibility:hidden;pointer-events:none;';
    document.body.appendChild(probe);
    const content = window.getComputedStyle(probe, '::before').content;
    probe.remove();
    const exists = Boolean(
      content &&
      content !== 'none' &&
      content !== 'normal' &&
      content !== '""' &&
      content !== "''"
    );
    TransitionAnimator._iconCache.set(clean, exists);
    return exists;
  }

  /**
   * Get the uppercase initial letter for fallback display inside round logo badges
   * @param {string} text
   * @returns {string}
   */
  static getFallbackLetter(text) {
    const clean = String(text || '').trim().replace(/^[!:]+/, '').trim();
    return (clean.charAt(0) || '?').toUpperCase();
  }

  // Mathematical easings ported from Chevron (src/functions/animUtils/easings.js)
  static easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  static easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  }

  static easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  }

  static easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
      ? 0
      : x === 1
        ? 1
        : Math.pow(2, -12.5 * x) * Math.sin((x * 7.5 - 0.75) * c4) + 1;
  }

  /**
   * Build an SVG path string from numeric parameters for QuickLook wave stages
   * @param {number[]} p - [c1x, c1y, c2x, c2y, ex1, c3x, c3y, c4x, c4y, ex2]
   * @returns {string} SVG d attribute string
   */
  static buildWavePath(p) {
    return (
      `M0,0.5c0,0,0,0,0,0.5c${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},-0.5` +
      `M0,0.5c0,0,0,0,0,-0.5c${p[5]},${p[6]},${p[7]},${p[8]},${p[9]},0.5`
    );
  }

  /**
   * Interpolate between two numeric arrays and apply to SVG path elements via rAF
   */
  static animateParams(fromParams, toParams, durationMs, easingFn, onFrame) {
    if (TransitionAnimator.rafId) {
      cancelAnimationFrame(TransitionAnimator.rafId);
      TransitionAnimator.rafId = null;
    }

    return new Promise((resolve) => {
      const startTime = performance.now();
      const len = fromParams.length;
      const current = new Array(len);

      const tick = (now) => {
        const elapsed = now - startTime;
        const rawT = durationMs > 0 ? Math.min(1, elapsed / durationMs) : 1;
        const t = easingFn(rawT);

        for (let i = 0; i < len; i++) {
          current[i] = fromParams[i] + (toParams[i] - fromParams[i]) * t;
        }

        onFrame(TransitionAnimator.buildWavePath(current), t, rawT);

        if (rawT < 1) {
          TransitionAnimator.rafId = requestAnimationFrame(tick);
        } else {
          TransitionAnimator.rafId = null;
          resolve();
        }
      };

      TransitionAnimator.rafId = requestAnimationFrame(tick);
    });
  }

  /**
   * Immediately remove any active transition overlay and cancel pending rAF
   */
  static cleanup() {
    if (TransitionAnimator.rafId) {
      cancelAnimationFrame(TransitionAnimator.rafId);
      TransitionAnimator.rafId = null;
    }
    if (TransitionAnimator.activeOverlay) {
      TransitionAnimator.activeOverlay.remove();
      TransitionAnimator.activeOverlay = null;
    }
    TransitionAnimator.isAnimating = false;
  }

  /**
   * Smoothly fade out and remove the active overlay
   * @param {number} durationMs
   * @returns {Promise<void>}
   */
  static async fadeOutAndCleanup(durationMs = 220) {
    const overlay = TransitionAnimator.activeOverlay;
    if (!overlay) {
      TransitionAnimator.cleanup();
      return;
    }
    const scaledDuration = TransitionAnimator.getDuration(durationMs);
    if (scaledDuration === 0) {
      TransitionAnimator.cleanup();
      return;
    }
    try {
      const anim = overlay.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: scaledDuration, easing: 'ease-out', fill: 'forwards' }
      );
      await anim.finished;
    } catch (_) {
      // Ignore if element was already removed
    }
    TransitionAnimator.cleanup();
  }

  /**
   * Open URL using window.open (matching Chevron's useRedirect.js)
   * @param {string} url
   * @param {boolean} newTab
   */
  static openUrl(url, newTab = false) {
    const target = newTab ? '_blank' : '_self';
    const win = window.open(url, target);
    if (!win && target === '_self') {
      window.location.href = url;
    }
    if (newTab) {
      TransitionAnimator.fadeOutAndCleanup(250);
    }
  }

  /**
   * Play Chevron's QuickLook SVG Wave + Diagonal Marquee + Unified Glowing Center Badge
   * @param {Object} options
   * @param {string} options.label - Centered badge title (e.g. 'GOOGLE', 'GITHUB.COM')
   * @param {string} [options.subtitle] - Query or URL subtitle shown in a pill below the title
   * @param {string} options.marqueeText - Diagonal repeating background text
   * @param {string} options.accentColor - Primary Catppuccin color
   * @param {string} [options.secondaryColor] - Secondary gradient color
   * @param {string} [options.iconClass] - Tabler icon class (e.g. 'ti-brand-google')
   * @param {boolean} [options.dissolveAfter] - Fade out overlay after calling onComplete
   * @param {Function} options.onComplete - Callback fired when wave fills the viewport
   */
  static async playWaveRedirect({
    label = '',
    subtitle = '',
    marqueeText = '',
    accentColor,
    secondaryColor,
    iconClass = 'ti-search',
    dissolveAfter = false,
    onComplete,
  }) {
    if (TransitionAnimator.isAnimating) return;
    if (TransitionAnimator.isAnimationDisabled('search')) {
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    TransitionAnimator.cleanup();
    TransitionAnimator.isAnimating = true;

    const palette = (typeof CONFIG !== 'undefined' && CONFIG.palette) ? CONFIG.palette : {};
    const primary = accentColor || palette.blue || '#89b4fa';
    const secondary = secondaryColor || palette.mantle || '#181825';
    const strokeColor = palette.lavender || primary;
    const fgColor = palette.crust || '#11111b';
    const thickness = 14;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const minDim = Math.min(width, height);
    const ratio = width / height;
    const diagonal = Math.ceil(Math.sqrt(width * width + height * height));

    // Native HD target sizes (matching playCardRedirect centerpiece)
    const targetIconFontPx = Math.round(Math.max(64, Math.min(104, minDim * 0.105)));
    const badgeRingSizePx = Math.round(targetIconFontPx * 1.65);
    const titleFontPx = Math.round(Math.max(18, Math.min(30, minDim * 0.028)));

    // Curvature constants from Chevron settings.js
    const topCurvature = 0.32;
    const bottomCurvature = 0.42;

    const stage0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const stage1 = [
      0, -bottomCurvature, 0.52, -topCurvature, 0.55,
      0, bottomCurvature, 0.52, topCurvature, 0.55,
    ];
    const stage2 = [
      0, -bottomCurvature * 0.5, ratio * 0.9, -topCurvature * 0.4, ratio * 1.45,
      0, bottomCurvature * 0.5, ratio * 0.9, topCurvature * 0.4, ratio * 1.45,
    ];
    const stage3 = [
      ratio * 4, 0, ratio * 2, 0, ratio * 2,
      ratio * 4, 0, ratio * 2, 0, ratio * 2,
    ];

    // Diagonal Marquee
    const cleanMarquee = (marqueeText || label || 'SEARCH').trim().toUpperCase();
    const repeatCount = cleanMarquee.length < 6 ? 18 : 10;
    const rowCount = 7;
    const marqueeUnit = Array.from(
      { length: repeatCount },
      () => `<span>${TransitionAnimator.escapeHtml(cleanMarquee)}</span>`
    ).join('');
    const marqueeRowsHtml = Array.from({ length: rowCount }, (_, idx) => `
      <div class="chevron-marquee-row ${idx % 2 === 1 ? 'odd' : ''}">
        <div class="chevron-marquee-track">${marqueeUnit}${marqueeUnit}</div>
      </div>
    `).join('');

    const cleanSubtitle = (subtitle || '').trim();
    const truncatedSubtitle =
      cleanSubtitle.length > 48 ? cleanSubtitle.slice(0, 45) + '...' : cleanSubtitle;

    const overlay = document.createElement('div');
    overlay.className = 'chevron-wave-overlay';
    overlay.innerHTML = `
      <style>
        @keyframes chevron-bg-pan {
          from { background-position: 0% 0%; }
          to { background-position: 100% 100%; }
        }
        @keyframes chevron-marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .chevron-wave-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 99999;
          pointer-events: all;
          overflow: hidden;
          user-select: none;
        }
        .chevron-wave-clip-container {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          clip-path: url(#chevron-quicklook-clip);
          transform: translateX(-1px);
          z-index: 1;
        }
        .chevron-wave-viewport {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 25% 50%, ${primary} 0%, ${primary}ee 55%, ${secondary} 150%);
          background-size: 130% 130%;
          animation: chevron-bg-pan 6s infinite alternate ease-in-out;
        }
        .chevron-marquee-diagonal {
          min-width: ${diagonal}px;
          min-height: ${diagonal}px;
          transform: rotate(330deg);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          opacity: 0.13;
          color: ${fgColor};
          font-family: 'Raleway', 'Roboto', sans-serif;
          font-weight: 800;
          font-size: 4.8vmin;
          text-transform: uppercase;
          pointer-events: none;
        }
        .chevron-marquee-row {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        .chevron-marquee-row.odd .chevron-marquee-track {
          animation-direction: reverse;
        }
        .chevron-marquee-track {
          display: inline-flex;
          width: max-content;
          animation: chevron-marquee-scroll 14s linear infinite;
        }
        .chevron-marquee-track span {
          margin-right: 1.5ch;
        }
        .chevron-wave-centerpiece {
          position: absolute;
          top: 50%;
          left: ${Math.round(height * 0.24)}px;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          z-index: 3;
          pointer-events: none;
        }
        .chevron-wave-badge-ring {
          width: ${badgeRingSizePx}px;
          height: ${badgeRingSizePx}px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(17, 17, 27, 0.14);
          border: 2px solid rgba(17, 17, 27, 0.22);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.25);
          color: ${fgColor};
          transform: scale(0.45);
        }
        .chevron-wave-badge-icon {
          font-size: ${targetIconFontPx}px;
          color: ${fgColor};
          line-height: 1;
          -webkit-font-smoothing: antialiased;
        }
        .chevron-wave-badge-letter {
          font-family: 'Raleway', 'Roboto', sans-serif;
          font-weight: 800;
          font-size: ${Math.round(targetIconFontPx * 0.85)}px;
          color: ${fgColor};
          line-height: 1;
          text-transform: uppercase;
          -webkit-font-smoothing: antialiased;
        }
        .chevron-wave-title {
          color: ${fgColor};
          font-family: 'Raleway', 'Roboto', sans-serif;
          font-weight: 800;
          font-size: ${titleFontPx}px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
          text-align: center;
        }
        .chevron-wave-subtitle {
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(17, 17, 27, 0.14);
          border: 1px solid rgba(17, 17, 27, 0.18);
          color: ${fgColor};
          font-family: 'Roboto', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.04em;
          max-width: 60vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .chevron-wave-svg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          overflow: visible;
          margin-left: calc((${thickness}px / -2) - 1px);
          padding-right: calc(${thickness}px / 2);
          z-index: 2;
          pointer-events: none;
        }
      </style>
      <div class="chevron-wave-clip-container">
        <div class="chevron-wave-centerpiece">
          <div class="chevron-wave-badge-ring">
            ${
              TransitionAnimator.hasIconGlyph(iconClass)
                ? `<i class="ti ${TransitionAnimator.escapeHtml(iconClass)} chevron-wave-badge-icon"></i>`
                : `<span class="chevron-wave-badge-letter">${TransitionAnimator.escapeHtml(TransitionAnimator.getFallbackLetter(label))}</span>`
            }
          </div>
          <div class="chevron-wave-title">${TransitionAnimator.escapeHtml(label)}</div>
          ${truncatedSubtitle ? `<div class="chevron-wave-subtitle">${TransitionAnimator.escapeHtml(truncatedSubtitle)}</div>` : ''}
        </div>
        <div class="chevron-wave-viewport">
          <div class="chevron-marquee-diagonal">
            ${marqueeRowsHtml}
          </div>
        </div>
      </div>
      <svg class="chevron-wave-svg" viewBox="0 0 1 1">
        <path
          class="chevron-wave-stroke"
          d="${TransitionAnimator.buildWavePath(stage0)}"
          fill="#0000"
          stroke="${strokeColor}"
          stroke-width="${thickness}"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
        />
        <clipPath id="chevron-quicklook-clip" clipPathUnits="objectBoundingBox">
          <path
            class="chevron-wave-clip"
            transform="scale(${height / width}, 1)"
            d="${TransitionAnimator.buildWavePath(stage0)}"
            stroke-width="${thickness}"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </clipPath>
      </svg>
    `;

    document.body.appendChild(overlay);
    TransitionAnimator.activeOverlay = overlay;

    const strokePath = overlay.querySelector('.chevron-wave-stroke');
    const clipPath = overlay.querySelector('.chevron-wave-clip');
    const centerPiece = overlay.querySelector('.chevron-wave-centerpiece');
    const badgeRing = overlay.querySelector('.chevron-wave-badge-ring');

    const updatePaths = (d) => {
      strokePath.setAttribute('d', d);
      clipPath.setAttribute('d', d);
    };

    const startX = Math.round(height * 0.22);

    // Centerpiece smoothly glides from the left wave bulge into the exact screen center
    centerPiece.animate(
      [
        { left: '0px', transform: 'translate(-100%, -50%)', opacity: 0.4 },
        { left: `${startX}px`, transform: 'translate(-50%, -50%)', opacity: 1, offset: 0.38 },
        { left: `${width / 2}px`, transform: 'translate(-50%, -50%)', opacity: 1 },
      ],
      { duration: TransitionAnimator.getDuration(640, 'search'), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    // Reverse-scale badge ring up to native scale(1) for 100% vector-sharp icon
    badgeRing.animate(
      [
        { transform: 'scale(0.45)' },
        { transform: 'scale(1.05)', offset: 0.75 },
        { transform: 'scale(1)' },
      ],
      { duration: TransitionAnimator.getDuration(600, 'search'), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    // Phase 1: Wave springs out from left edge (240ms)
    await TransitionAnimator.animateParams(
      stage0,
      stage1,
      TransitionAnimator.getDuration(240, 'search'),
      TransitionAnimator.easeOutCubic,
      updatePaths
    );

    if (!TransitionAnimator.isAnimating) return;

    // Phase 2: Wave sweeps across viewport (220ms)
    await TransitionAnimator.animateParams(
      stage1,
      stage2,
      TransitionAnimator.getDuration(220, 'search'),
      TransitionAnimator.easeInOutQuad,
      updatePaths
    );

    if (!TransitionAnimator.isAnimating) return;

    // Phase 3: Flatten wave curves into screen corners (200ms)
    await TransitionAnimator.animateParams(
      stage2,
      stage3,
      TransitionAnimator.getDuration(200, 'search'),
      TransitionAnimator.easeOutCubic,
      updatePaths
    );

    if (!TransitionAnimator.isAnimating) return;

    if (typeof onComplete === 'function') {
      onComplete();
    }

    if (dissolveAfter) {
      await TransitionAnimator.fadeOutAndCleanup(220);
    }
  }

  /**
   * Play "Portal-to-Modal" transition specifically tailored for :settings
   * Smoothly dims/blurs the backdrop, pops the Glowing Settings Badge with a gear spin,
   * and expands directly into the <settings-modal> window dimensions without a jarring bright flash.
   * @param {Object} options
   * @param {HTMLElement} [options.originEl] - Optional element to originate from
   * @param {Function} options.onComplete - Callback that activates settings-modal
   */
  static async playSettingsPortal({ originEl, onComplete } = {}) {
    if (TransitionAnimator.isAnimating) return;
    if (TransitionAnimator.isAnimationDisabled('search')) {
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    TransitionAnimator.cleanup();
    TransitionAnimator.isAnimating = true;

    const palette = (typeof CONFIG !== 'undefined' && CONFIG.palette) ? CONFIG.palette : {};
    const accent = palette.mauve || '#cba6f7';
    const blue = palette.blue || '#89b4fa';
    const base = palette.base || '#1e1e2e';
    const mantle = palette.mantle || '#181825';
    const surface1 = palette.surface1 || '#45475a';
    const text = palette.text || '#cdd6f4';

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const minDim = Math.min(vw, vh);

    const originRect = originEl ? originEl.getBoundingClientRect() : null;
    const startX = originRect ? originRect.left + originRect.width / 2 : vw / 2;
    const startY = originRect ? originRect.top + originRect.height / 2 : vh / 2;

    const targetIconFontPx = Math.round(Math.max(56, Math.min(88, minDim * 0.09)));
    const badgeRingSizePx = Math.round(targetIconFontPx * 1.65);

    // Exact target dimensions of #settings-modal .modal-dialog (width: min(950px, 95vw), height: min(82vh, 850px))
    const targetModalW = Math.min(950, Math.round(vw * 0.95));
    const targetModalH = Math.min(850, Math.round(vh * 0.82));

    const overlay = document.createElement('div');
    overlay.className = 'chevron-settings-portal';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99998;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(17, 17, 27, 0);
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
      pointer-events: all;
      user-select: none;
      overflow: hidden;
    `;

    // Morphing card shell that starts as a glowing circle and expands into the Settings Modal box
    const shell = document.createElement('div');
    shell.className = 'chevron-settings-shell';
    shell.style.cssText = `
      position: absolute;
      left: ${startX}px;
      top: ${startY}px;
      width: ${badgeRingSizePx}px;
      height: ${badgeRingSizePx}px;
      transform: translate(-50%, -50%) scale(0.4);
      border-radius: ${badgeRingSizePx}px;
      background: linear-gradient(145deg, ${mantle}, ${base});
      border: 2px solid ${accent};
      box-shadow: 0 0 50px ${accent}55, 0 25px 50px -12px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      overflow: hidden;
    `;

    const iconWrap = document.createElement('div');
    iconWrap.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${accent};
      font-size: ${targetIconFontPx}px;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
    `;
    iconWrap.innerHTML = `<i class="ti ti-settings" style="display:block;"></i>`;

    const badgeTitle = document.createElement('div');
    badgeTitle.style.cssText = `
      color: ${text};
      font-family: 'Raleway', 'Roboto', sans-serif;
      font-weight: 800;
      font-size: 15px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      opacity: 0;
    `;
    badgeTitle.textContent = 'SETTINGS';

    shell.appendChild(iconWrap);
    shell.appendChild(badgeTitle);
    overlay.appendChild(shell);
    document.body.appendChild(overlay);
    TransitionAnimator.activeOverlay = overlay;

    // 1. Fade in dark blurred backdrop matching #settings-modal
    overlay.animate(
      [
        { background: 'rgba(17, 17, 27, 0)', backdropFilter: 'blur(0px)' },
        { background: 'rgba(17, 17, 27, 0.75)', backdropFilter: 'blur(10px)' },
      ],
      { duration: TransitionAnimator.getDuration(300, 'search'), easing: 'ease-out', fill: 'forwards' }
    );

    // 2. Spin gear icon 120deg in native HD resolution
    iconWrap.animate(
      [
        { transform: 'rotate(-90deg) scale(0.7)', color: accent },
        { transform: 'rotate(30deg) scale(1.05)', color: blue, offset: 0.7 },
        { transform: 'rotate(60deg) scale(0.9)', color: blue, opacity: 0 },
      ],
      { duration: TransitionAnimator.getDuration(520, 'search'), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    badgeTitle.animate(
      [
        { opacity: 0, transform: 'translateY(6px)' },
        { opacity: 1, transform: 'translateY(0px)', offset: 0.5 },
        { opacity: 0, transform: 'translateY(-6px)' },
      ],
      { duration: TransitionAnimator.getDuration(480, 'search'), easing: 'ease-in-out', fill: 'forwards' }
    );

    // 3. Stage A: Pop badge to center (280ms), Stage B: Expand badge into Settings Modal dimensions (240ms)
    const shellAnim = shell.animate(
      [
        {
          left: `${startX}px`,
          top: `${startY}px`,
          width: `${badgeRingSizePx}px`,
          height: `${badgeRingSizePx}px`,
          borderRadius: `${badgeRingSizePx}px`,
          borderColor: accent,
          transform: 'translate(-50%, -50%) scale(0.45)',
        },
        {
          left: `${vw / 2}px`,
          top: `${vh / 2}px`,
          width: `${badgeRingSizePx + 36}px`,
          height: `${badgeRingSizePx + 36}px`,
          borderRadius: `${badgeRingSizePx}px`,
          borderColor: blue,
          transform: 'translate(-50%, -50%) scale(1)',
          offset: 0.54,
        },
        {
          left: `${vw / 2}px`,
          top: `${vh / 2}px`,
          width: `${targetModalW}px`,
          height: `${targetModalH}px`,
          borderRadius: '12px',
          borderColor: surface1,
          borderWidth: '1px',
          transform: 'translate(-50%, -50%) scale(1)',
        },
      ],
      { duration: TransitionAnimator.getDuration(520, 'search'), easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    try {
      await shellAnim.finished;
    } catch (_) {
      return;
    }

    if (!TransitionAnimator.isAnimating) return;

    if (typeof onComplete === 'function') {
      onComplete();
    }

    await TransitionAnimator.fadeOutAndCleanup(160);
  }

  /**
   * Play Idea 1: Crisp Vector Radial (clip-path: circle) + Native-HD Glowing Center Badge
   * Renders icon at native target font-size (scale 1.0 at finish) to eliminate GPU bitmap blur
   */
  static async playCardRedirect({
    sourceEl,
    iconEl,
    labelText = '',
    accentColor,
    onComplete,
  }) {
    if (TransitionAnimator.isAnimating) return;
    if (TransitionAnimator.isAnimationDisabled('bookmark')) {
      if (typeof onComplete === 'function') {
        onComplete();
      }
      return;
    }

    TransitionAnimator.cleanup();
    TransitionAnimator.isAnimating = true;

    const palette = (typeof CONFIG !== 'undefined' && CONFIG.palette) ? CONFIG.palette : {};
    const bgColor = accentColor || palette.blue || '#89b4fa';
    const fgColor = palette.crust || '#11111b';
    const mantleColor = palette.mantle || '#181825';

    const cardRect = sourceEl.getBoundingClientRect();
    const iconRect = iconEl ? iconEl.getBoundingClientRect() : cardRect;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const originX = cardRect.left + cardRect.width / 2;
    const originY = cardRect.top + cardRect.height / 2;
    const iconOriginX = iconRect.left + iconRect.width / 2;
    const iconOriginY = iconRect.top + iconRect.height / 2;

    const maxDx = Math.max(originX, vw - originX);
    const maxDy = Math.max(originY, vh - originY);
    const maxRadius = Math.ceil(Math.sqrt(maxDx * maxDx + maxDy * maxDy)) + 32;
    const startRadius = Math.max(Math.min(cardRect.width, cardRect.height) / 2, 16);

    const minDim = Math.min(vw, vh);
    const targetIconFontPx = Math.round(Math.max(64, Math.min(108, minDim * 0.11)));
    const badgeRingSizePx = Math.round(targetIconFontPx * 1.65);
    const startIconPx = Math.max(iconRect.height || 27, 24);
    const initialScale = Math.max(0.18, Math.min(0.6, startIconPx / targetIconFontPx));

    const overlay = document.createElement('div');
    overlay.className = 'chevron-card-portal';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999;
      pointer-events: all;
      overflow: hidden;
      user-select: none;
    `;

    const plate = document.createElement('div');
    plate.className = 'chevron-card-plate';
    plate.style.cssText = `
      position: absolute;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle at ${originX}px ${originY}px, ${bgColor} 0%, ${bgColor}ee 55%, ${mantleColor} 155%);
      clip-path: circle(${startRadius}px at ${originX}px ${originY}px);
      z-index: 100000;
    `;

    const centerPiece = document.createElement('div');
    centerPiece.className = 'chevron-card-centerpiece';
    centerPiece.style.cssText = `
      position: absolute;
      left: ${iconOriginX}px;
      top: ${iconOriginY}px;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      z-index: 100001;
      pointer-events: none;
    `;

    const badgeRing = document.createElement('div');
    badgeRing.className = 'chevron-card-badge-ring';
    badgeRing.style.cssText = `
      width: ${badgeRingSizePx}px;
      height: ${badgeRingSizePx}px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(17, 17, 27, 0.14);
      border: 2px solid rgba(17, 17, 27, 0.22);
      box-shadow: 0 18px 45px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.25);
      color: ${fgColor};
      transform: scale(${initialScale});
    `;

    const iconClassMatch = iconEl && iconEl.className
      ? (iconEl.className.match(/ti-([a-z0-9-]+)/i)?.[0] || '')
      : '';
    const canShowIcon = Boolean(iconEl && iconClassMatch && TransitionAnimator.hasIconGlyph(iconClassMatch));

    if (canShowIcon) {
      const clonedIcon = iconEl.cloneNode(true);
      clonedIcon.style.color = fgColor;
      clonedIcon.style.fontSize = `${targetIconFontPx}px`;
      clonedIcon.style.width = 'auto';
      clonedIcon.style.height = 'auto';
      clonedIcon.style.lineHeight = '1';
      clonedIcon.style.margin = '0';
      clonedIcon.style.animation = 'none';
      clonedIcon.style.webkitFontSmoothing = 'antialiased';
      badgeRing.appendChild(clonedIcon);
    } else {
      badgeRing.style.fontFamily = "'Raleway', 'Roboto', sans-serif";
      badgeRing.style.fontWeight = '800';
      badgeRing.style.fontSize = `${Math.round(targetIconFontPx * 0.82)}px`;
      badgeRing.style.lineHeight = '1';
      badgeRing.style.textTransform = 'uppercase';
      badgeRing.style.webkitFontSmoothing = 'antialiased';
      badgeRing.textContent = TransitionAnimator.getFallbackLetter(labelText);
    }

    centerPiece.appendChild(badgeRing);

    let badgeLabel = null;
    if (labelText) {
      badgeLabel = document.createElement('div');
      badgeLabel.className = 'chevron-card-badge-label';
      badgeLabel.style.cssText = `
        color: ${fgColor};
        font-family: 'Raleway', 'Roboto', sans-serif;
        font-weight: 800;
        font-size: ${Math.round(Math.max(18, Math.min(30, minDim * 0.028)))}px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        white-space: nowrap;
        opacity: 0;
        transform: translateY(10px);
      `;
      badgeLabel.textContent = labelText;
      centerPiece.appendChild(badgeLabel);
    }

    overlay.appendChild(plate);
    overlay.appendChild(centerPiece);
    document.body.appendChild(overlay);
    TransitionAnimator.activeOverlay = overlay;

    const plateAnim = plate.animate(
      [
        { clipPath: `circle(${startRadius}px at ${originX}px ${originY}px)` },
        { clipPath: `circle(${maxRadius}px at ${originX}px ${originY}px)` },
      ],
      {
        duration: TransitionAnimator.getDuration(620, 'bookmark'),
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards',
      }
    );

    const moveAnim = centerPiece.animate(
      [
        { left: `${iconOriginX}px`, top: `${iconOriginY}px` },
        { left: `${vw / 2}px`, top: `${vh / 2}px` },
      ],
      {
        delay: TransitionAnimator.getDuration(90, 'bookmark'),
        duration: TransitionAnimator.getDuration(360, 'bookmark'),
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      }
    );

    const ringAnim = badgeRing.animate(
      [
        {
          transform: `scale(${initialScale})`,
          backgroundColor: 'rgba(17, 17, 27, 0)',
          borderColor: 'rgba(17, 17, 27, 0)',
          boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        },
        {
          transform: 'scale(1.06)',
          backgroundColor: 'rgba(17, 17, 27, 0.14)',
          borderColor: 'rgba(17, 17, 27, 0.22)',
          boxShadow: '0 18px 45px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          offset: 0.78,
        },
        {
          transform: 'scale(1)',
          backgroundColor: 'rgba(17, 17, 27, 0.14)',
          borderColor: 'rgba(17, 17, 27, 0.22)',
          boxShadow: '0 18px 45px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        },
      ],
      {
        delay: TransitionAnimator.getDuration(90, 'bookmark'),
        duration: TransitionAnimator.getDuration(380, 'bookmark'),
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards',
      }
    );

    if (badgeLabel) {
      badgeLabel.animate(
        [
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0px)' },
        ],
        {
          delay: TransitionAnimator.getDuration(220, 'bookmark'),
          duration: TransitionAnimator.getDuration(240, 'bookmark'),
          easing: 'ease-out',
          fill: 'forwards',
        }
      );
    }

    try {
      await Promise.all([plateAnim.finished, moveAnim.finished, ringAnim.finished]);
    } catch (_) {
      return;
    }

    if (!TransitionAnimator.isAnimating) return;

    if (typeof onComplete === 'function') {
      onComplete();
    }
  }

  static escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

window.addEventListener('pageshow', () => {
  TransitionAnimator.cleanup();
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && TransitionAnimator.activeOverlay) {
    TransitionAnimator.fadeOutAndCleanup(200);
  }
});
