// Global cities database for the searchable combobox with aliases and country names
const CITIES_DATABASE = [
  // Europe
  { name: 'Moscow', country: 'Russia', aliases: ['moskow', 'moskva', 'moscow', 'russia'] },
  { name: 'Saint Petersburg', country: 'Russia', aliases: ['st petersburg', 'leningrad'] },
  { name: 'London', country: 'United Kingdom', aliases: ['uk', 'england', 'britain'] },
  { name: 'Paris', country: 'France', aliases: ['paris', 'france'] },
  { name: 'Berlin', country: 'Germany', aliases: ['deutschland', 'germany'] },
  { name: 'Munich', country: 'Germany', aliases: ['munchen', 'bavaria'] },
  { name: 'Frankfurt', country: 'Germany', aliases: ['frankfurt'] },
  { name: 'Amsterdam', country: 'Netherlands', aliases: ['holland', 'netherlands'] },
  { name: 'Rome', country: 'Italy', aliases: ['roma', 'italia', 'italy'] },
  { name: 'Milan', country: 'Italy', aliases: ['milano'] },
  { name: 'Madrid', country: 'Spain', aliases: ['espana', 'spain'] },
  { name: 'Barcelona', country: 'Spain', aliases: ['catalonia'] },
  { name: 'Vienna', country: 'Austria', aliases: ['wien', 'austria'] },
  { name: 'Zurich', country: 'Switzerland', aliases: ['zuerich', 'swiss'] },
  { name: 'Geneva', country: 'Switzerland', aliases: ['geneve'] },
  { name: 'Kyiv', country: 'Ukraine', aliases: ['kiev', 'ukraine'] },
  { name: 'Warsaw', country: 'Poland', aliases: ['warszawa', 'poland'] },
  { name: 'Prague', country: 'Czechia', aliases: ['praha', 'czech'] },
  { name: 'Budapest', country: 'Hungary', aliases: ['hungary'] },
  { name: 'Athens', country: 'Greece', aliases: ['athena', 'greece'] },
  { name: 'Stockholm', country: 'Sweden', aliases: ['sverige', 'sweden'] },
  { name: 'Oslo', country: 'Norway', aliases: ['norge', 'norway'] },
  { name: 'Helsinki', country: 'Finland', aliases: ['suomi', 'finland'] },
  { name: 'Copenhagen', country: 'Denmark', aliases: ['danmark', 'denmark'] },
  { name: 'Dublin', country: 'Ireland', aliases: ['eire', 'ireland'] },
  { name: 'Brussels', country: 'Belgium', aliases: ['bruxelles', 'belgium'] },
  { name: 'Lisbon', country: 'Portugal', aliases: ['lisboa', 'portugal'] },
  { name: 'Istanbul', country: 'Turkey', aliases: ['turkiye', 'constantinople', 'turkey'] },
  { name: 'Ankara', country: 'Turkey', aliases: ['turkey'] },

  // Asia
  { name: 'Tokyo', country: 'Japan', aliases: ['nippon', 'nihon', 'japan'] },
  { name: 'Osaka', country: 'Japan', aliases: ['osaka'] },
  { name: 'Kyoto', country: 'Japan', aliases: ['kyoto'] },
  { name: 'Seoul', country: 'South Korea', aliases: ['korea'] },
  { name: 'Busan', country: 'South Korea', aliases: ['pusan'] },
  { name: 'Beijing', country: 'China', aliases: ['peking', 'china'] },
  { name: 'Shanghai', country: 'China', aliases: ['shanghai'] },
  { name: 'Guangzhou', country: 'China', aliases: ['canton'] },
  { name: 'Shenzhen', country: 'China', aliases: ['shenzhen'] },
  { name: 'Hong Kong', country: 'Hong Kong', aliases: ['hk'] },
  { name: 'Taipei', country: 'Taiwan', aliases: ['taiwan'] },
  { name: 'Singapore', country: 'Singapore', aliases: ['sg', 'singapura'] },
  { name: 'Bangkok', country: 'Thailand', aliases: ['krung thep', 'thailand'] },
  { name: 'Kuala Lumpur', country: 'Malaysia', aliases: ['kl', 'malaysia'] },
  { name: 'Manila', country: 'Philippines', aliases: ['philippines'] },
  { name: 'Hanoi', country: 'Vietnam', aliases: ['vietnam'] },
  { name: 'Ho Chi Minh City', country: 'Vietnam', aliases: ['saigon'] },
  { name: 'Mumbai', country: 'India', aliases: ['bombay', 'india'] },
  { name: 'New Delhi', country: 'India', aliases: ['delhi', 'india'] },
  { name: 'Bengaluru', country: 'India', aliases: ['bangalore'] },
  { name: 'Dubai', country: 'United Arab Emirates', aliases: ['uae'] },
  { name: 'Abu Dhabi', country: 'United Arab Emirates', aliases: ['uae'] },
  { name: 'Riyadh', country: 'Saudi Arabia', aliases: ['ksa', 'saudi'] },
  { name: 'Doha', country: 'Qatar', aliases: ['qatar'] },

  // Indonesia
  { name: 'Jakarta', country: 'Indonesia', aliases: ['dki', 'indonesia', 'batavia'] },
  { name: 'Surabaya', country: 'Indonesia', aliases: ['jatim'] },
  { name: 'Bandung', country: 'Indonesia', aliases: ['jabar'] },
  { name: 'Medan', country: 'Indonesia', aliases: ['sumut'] },
  { name: 'Semarang', country: 'Indonesia', aliases: ['jateng'] },
  { name: 'Yogyakarta', country: 'Indonesia', aliases: ['jogja', 'diy'] },
  { name: 'Denpasar', country: 'Indonesia', aliases: ['bali'] },
  { name: 'Makassar', country: 'Indonesia', aliases: ['ujung pandang', 'sulsel'] },
  { name: 'Palembang', country: 'Indonesia', aliases: ['sumsel'] },
  { name: 'Batam', country: 'Indonesia', aliases: ['kepri'] },
  { name: 'Malang', country: 'Indonesia', aliases: ['malang'] },
  { name: 'Balikpapan', country: 'Indonesia', aliases: ['kaltim'] },
  { name: 'Banjarmasin', country: 'Indonesia', aliases: ['kalsel'] },
  { name: 'Padang', country: 'Indonesia', aliases: ['sumbar'] },
  { name: 'Pekanbaru', country: 'Indonesia', aliases: ['riau'] },
  { name: 'Pontianak', country: 'Indonesia', aliases: ['kalbar'] },
  { name: 'Manado', country: 'Indonesia', aliases: ['sulut'] },

  // Americas
  { name: 'New York', country: 'United States', aliases: ['nyc', 'usa', 'america'] },
  { name: 'Los Angeles', country: 'United States', aliases: ['la', 'california'] },
  { name: 'Chicago', country: 'United States', aliases: ['illinois'] },
  { name: 'San Francisco', country: 'United States', aliases: ['sf', 'bay area'] },
  { name: 'Seattle', country: 'United States', aliases: ['washington'] },
  { name: 'Miami', country: 'United States', aliases: ['florida'] },
  { name: 'Toronto', country: 'Canada', aliases: ['ontario', 'canada'] },
  { name: 'Vancouver', country: 'Canada', aliases: ['bc'] },
  { name: 'Montreal', country: 'Canada', aliases: ['quebec'] },
  { name: 'Mexico City', country: 'Mexico', aliases: ['cdmx', 'mexico'] },
  { name: 'Sao Paulo', country: 'Brazil', aliases: ['brasil', 'brazil'] },
  { name: 'Rio de Janeiro', country: 'Brazil', aliases: ['rio'] },
  { name: 'Buenos Aires', country: 'Argentina', aliases: ['argentina'] },
  { name: 'Santiago', country: 'Chile', aliases: ['chile'] },
  { name: 'Bogota', country: 'Colombia', aliases: ['colombia'] },
  { name: 'Lima', country: 'Peru', aliases: ['peru'] },

  // Oceania & Africa
  { name: 'Sydney', country: 'Australia', aliases: ['nsw', 'aus', 'australia'] },
  { name: 'Melbourne', country: 'Australia', aliases: ['victoria'] },
  { name: 'Brisbane', country: 'Australia', aliases: ['queensland'] },
  { name: 'Perth', country: 'Australia', aliases: ['wa'] },
  { name: 'Auckland', country: 'New Zealand', aliases: ['nz', 'new zealand'] },
  { name: 'Cairo', country: 'Egypt', aliases: ['misr', 'egypt'] },
  { name: 'Cape Town', country: 'South Africa', aliases: ['rsa', 'south africa'] },
  { name: 'Johannesburg', country: 'South Africa', aliases: ['joburg'] },
  { name: 'Nairobi', country: 'Kenya', aliases: ['kenya'] },
];

function escapeHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const CATPPUCCIN_ACCENTS = [
  'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon',
  'peach', 'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'
];

function capitalizeFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getEngineIcon(data, key = '') {
  if (Array.isArray(data) && data[2]) {
    const raw = String(data[2]).trim().replace(/^(ti\s+ti-|ti-)/, '').trim();
    if (raw) return raw;
  }
  const name = Array.isArray(data) ? data[1] : (typeof data === 'string' ? data : '');
  const str = (String(name) + ' ' + String(key)).toLowerCase();
  if (str.includes('google')) return 'brand-google';
  if (str.includes('duck')) return 'shield-check';
  if (str.includes('perp')) return 'sparkles';
  if (str.includes('bing')) return 'brand-bing';
  if (str.includes('yahoo')) return 'brand-yahoo';
  if (str.includes('youtube')) return 'brand-youtube';
  if (str.includes('git')) return 'brand-github';
  if (str.includes('wiki')) return 'book';
  return 'adjustments-horizontal';
}

function resolveColourKey(iconColor) {
  if (!iconColor) return 'blue';
  if (typeof iconColor === 'string' && iconColor.startsWith('palette.')) {
    const key = iconColor.replace('palette.', '');
    if (CATPPUCCIN_ACCENTS.includes(key)) return key;
  }
  // Match against active palette
  if (typeof CONFIG !== 'undefined' && CONFIG.palette) {
    for (const col of CATPPUCCIN_ACCENTS) {
      if (CONFIG.palette[col] && CONFIG.palette[col].toLowerCase() === String(iconColor).toLowerCase()) {
        return col;
      }
    }
  }
  // Match against all palettes (latte, frappe, macchiato, mocha)
  const palettes = [
    typeof latte !== 'undefined' ? latte : null,
    typeof frappe !== 'undefined' ? frappe : null,
    typeof macchiato !== 'undefined' ? macchiato : null,
    typeof mocha !== 'undefined' ? mocha : null,
  ];
  for (const pal of palettes) {
    if (!pal) continue;
    for (const col of CATPPUCCIN_ACCENTS) {
      if (pal[col] && pal[col].toLowerCase() === String(iconColor).toLowerCase()) {
        return col;
      }
    }
  }
  return 'blue';
}

// Settings modal component - hidden GUI settings for homepage configuration
class Settings extends Component {
  refs = {
    modal: '#settings-modal',
    dialog: '.modal-dialog',
    closeBtn: '#btn-close',
    footerCloseBtn: '#btn-footer-close',
    saveBtn: '#btn-save',
    tabButtons: '.nav-item',
    tabPanels: '.tab-panel',
    contentArea: '.modal-content',
    toast: '#settings-toast',
    confirmModal: '#confirm-modal',
    sidebar: '.modal-sidebar',
    sidebarToggle: '#btn-sidebar-toggle',
  };

  draftConfig = null;
  draftLight = 'latte';
  draftDark = 'mocha';
  activeTab = 'general';
  escapeHandler = null;
  toastTimeout = null;

  constructor() {
    super();
  }

  imports() {
    return [
      this.getResource('icons', 'tabler'),
      this.getResource('fonts', 'roboto'),
      this.getResource('fonts', 'raleway'),
      this.getResource('libs', 'awoo'),
    ];
  }

  style() {
    const p = CONFIG.palette;
    return `
      *:not(:defined) { display: none; }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
      }

      #settings-modal {
        position: fixed;
        inset: 0;
        background: rgba(17, 17, 27, 0.75);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 99999;
      }

      #settings-modal.active {
        display: flex;
        animation: modalBackdropFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      #settings-modal.closing {
        display: flex;
        pointer-events: none;
        animation: modalBackdropFadeOut 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .modal-dialog {
        background: ${p.base};
        color: ${p.text};
        width: 950px;
        max-width: 95vw;
        height: 82vh;
        max-height: 850px;
        border-radius: 12px;
        border: 1px solid ${p.surface1};
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        will-change: transform, opacity;
      }

      #settings-modal.active .modal-dialog {
        animation: modalDialogFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      #settings-modal.closing .modal-dialog {
        animation: modalDialogFadeOut 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 24px;
        background: ${p.mantle};
        border-bottom: 1px solid ${p.surface0};
        user-select: none;
      }

      .header-title-group {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .header-icon {
        font-size: 20px;
        color: ${p.blue};
      }

      .modal-title {
        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 600;
        color: ${p.text};
        letter-spacing: 0.5px;
      }

      .btn-close {
        background: transparent;
        border: none;
        color: ${p.subtext0};
        font-size: 20px;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .btn-close:hover {
        background: ${p.surface0};
        color: ${p.red};
      }

      .modal-body {
        display: flex;
        flex: 1;
        overflow: hidden;
      }

      .modal-sidebar {
        width: 230px;
        flex-shrink: 0;
        background: ${p.mantle};
        border-right: 1px solid ${p.surface0};
        padding: 16px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        user-select: none;
        overflow: hidden;
        box-sizing: border-box;
        transition: width 0.25s cubic-bezier(0.2, 0, 0, 1);
      }

      .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
      }

      .nav-item,
      .sidebar-toggle-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 8px;
        border: none;
        background: transparent;
        color: ${p.subtext0};
        cursor: pointer;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        transition: background 0.15s ease, color 0.15s ease;
      }

      .nav-item i,
      .sidebar-toggle-btn i {
        font-size: 19px;
        width: 20px;
        height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        line-height: 1;
      }

      .nav-item span,
      .sidebar-toggle-btn span {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.2s cubic-bezier(0.2, 0, 0, 1), transform 0.2s cubic-bezier(0.2, 0, 0, 1);
      }

      .sidebar-toggle-btn span {
        font-size: 13px;
      }

      .nav-item:hover,
      .sidebar-toggle-btn:hover {
        background: ${p.surface0};
        color: ${p.text};
      }

      .sidebar-toggle-btn:hover {
        color: ${p.blue};
      }

      .nav-item.active {
        background: ${p.surface0};
        color: ${p.blue};
        font-weight: 500;
        box-shadow: inset 3px 0 0 ${p.blue};
      }

      /* Compact Mode (Icon-Only, 64px) */
      .modal-sidebar.compact {
        width: 64px;
      }

      .modal-sidebar.compact .nav-item span,
      .modal-sidebar.compact .sidebar-toggle-btn span {
        opacity: 0;
        transform: translateX(-8px);
        pointer-events: none;
      }

      /* Sidebar Toggle (Compact / Full) */
      .sidebar-toggle-wrap {
        margin-top: auto;
        padding-top: 8px;
        border-top: 1px solid ${p.surface0};
        width: 100%;
      }

      .modal-content {
        flex: 1;
        padding: 24px 30px;
        overflow-y: auto;
        background: ${p.base};
        min-width: 0;
      }

      .modal-content::-webkit-scrollbar {
        width: 8px;
      }
      .modal-content::-webkit-scrollbar-track {
        background: ${p.mantle};
      }
      .modal-content::-webkit-scrollbar-thumb {
        background: ${p.surface1};
        border-radius: 4px;
      }
      .modal-content::-webkit-scrollbar-thumb:hover {
        background: ${p.surface2};
      }

      .tab-panel {
        display: none;
        animation: fadeIn 0.2s ease-in-out;
      }

      .tab-panel.active {
        display: block;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .ti-spin {
        animation: spin 1s linear infinite;
        display: inline-block;
      }

      @keyframes modalBackdropFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes modalBackdropFadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }

      @keyframes modalDialogFadeIn {
        from {
          opacity: 0;
          transform: scale(0.96) translateY(10px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @keyframes modalDialogFadeOut {
        from {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        to {
          opacity: 0;
          transform: scale(0.96) translateY(10px);
        }
      }

      .section-title {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: ${p.lavender};
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .section-desc {
        font-size: 13px;
        color: ${p.subtext0};
        margin-bottom: 20px;
        line-height: 1.4;
      }

      .card {
        background: ${p.mantle};
        border: 1px solid ${p.surface0};
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 20px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 16px;
      }

      .form-group:last-child {
        margin-bottom: 0;
      }

      .form-label {
        font-size: 13px;
        font-weight: 500;
        color: ${p.subtext1};
      }

      .form-hint {
        font-size: 12px;
        color: ${p.overlay1};
      }

      .form-input {
        background: ${p.surface0};
        border: 1px solid ${p.surface1};
        color: ${p.text};
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 13px;
        outline: none;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
        width: 100%;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      .form-input:focus {
        border-color: ${p.blue};
        box-shadow: 0 0 0 3px ${p.blue}25;
      }
      .form-input::selection,
      input::selection,
      textarea::selection {
        background: ${p.surface2};
        color: ${p.text};
      }

      .form-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: ${p.surface0};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(p.subtext0)}' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 14px;
        border: 1px solid ${p.surface1};
        color: ${p.text};
        padding: 8px 36px 8px 12px;
        border-radius: 6px;
        font-size: 13px;
        outline: none;
        cursor: pointer;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
        width: 100%;
      }
      .form-select:hover {
        border-color: ${p.surface2};
      }
      .form-select:focus {
        border-color: ${p.blue};
        box-shadow: 0 0 0 3px ${p.blue}25;
      }
      .form-select option {
        background-color: ${p.mantle};
        color: ${p.text};
        padding: 10px 14px;
      }

      .form-grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .switch-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid ${p.surface0};
      }

      .switch-group:last-child {
        border-bottom: none;
      }

      .switch-label-group {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .toggle-switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
      }

      .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .toggle-slider {
        position: absolute;
        cursor: pointer;
        inset: 0;
        background-color: ${p.surface1};
        transition: .2s;
        border-radius: 24px;
      }

      .toggle-slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: ${p.text};
        transition: .2s;
        border-radius: 50%;
      }

      input:checked + .toggle-slider:before {
        transform: translateX(20px);
        background-color: ${p.base};
      }

      input:checked + .toggle-slider {
        background-color: ${p.blue};
      }

      /* Bookmarks editor tree */
      .tree-tab-card {
        background: ${p.mantle};
        border: 1px solid ${p.surface1};
        border-radius: 8px;
        margin-bottom: 20px;
      }

      .tree-tab-header {
        background: ${p.surface0};
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }

      .tree-tab-body {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .tree-cat-card {
        background: ${p.base};
        border: 1px solid ${p.surface0};
        border-radius: 6px;
        padding: 14px;
      }

      .tree-cat-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
      }

      .link-item-row {
        background: ${p.mantle};
        border: 1px solid ${p.surface0};
        border-radius: 6px;
        padding: 10px 12px;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 135px 1fr 125px 135px 36px;
        gap: 10px;
        align-items: center;
      }

      .link-item-row:has(.custom-dropdown.open),
      .link-item-row.has-open-dropdown {
        z-index: 50;
        position: relative;
      }

      .icon-preview-box {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .icon-preview-display {
        font-size: 20px;
        width: 26px;
        text-align: center;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 8px 14px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease, opacity 0.15s ease;
        user-select: none;
        white-space: nowrap;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .btn-sm {
        padding: 6px 10px;
        font-size: 12px;
      }

      .btn-primary {
        background: ${p.blue};
        color: ${p.base};
      }
      .btn-primary:hover {
        filter: brightness(1.15);
      }

      .btn-success {
        background: ${p.green};
        color: ${p.base};
      }
      .btn-success:hover {
        filter: brightness(1.15);
      }

      .btn-danger {
        background: ${p.red};
        color: ${p.base};
      }
      .btn-danger:hover {
        filter: brightness(1.15);
      }

      .btn-secondary {
        background: ${p.surface0};
        color: ${p.text};
        border: 1px solid ${p.surface1};
      }
      .btn-secondary:hover {
        background: ${p.surface1};
      }

      .btn-icon-only {
        width: 34px;
        height: 34px;
        padding: 0;
        border-radius: 6px;
      }

      .link-external {
        color: ${p.blue};
        font-size: 12px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .link-external:hover {
        text-decoration: underline;
      }

      .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
        padding: 14px 24px;
        background: ${p.mantle};
        border-top: 1px solid ${p.surface0};
        user-select: none;
      }

      /* In-App Toast Notification */
      #settings-toast {
        position: absolute;
        bottom: 75px;
        right: 30px;
        background: ${p.surface0};
        color: ${p.text};
        border: 1px solid ${p.green};
        box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        padding: 10px 18px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        opacity: 0;
        pointer-events: none;
        transform: translateY(10px);
        transition: all 0.2s ease-in-out;
        z-index: 100000;
      }

      #settings-toast.show {
        opacity: 1;
        transform: translateY(0);
      }

      #settings-toast.toast-error {
        border-color: ${p.red};
      }
      #settings-toast.toast-error i {
        color: ${p.red};
      }

      #settings-toast.toast-success {
        border-color: ${p.green};
      }
      #settings-toast.toast-success i {
        color: ${p.green};
      }

      #settings-toast.toast-info {
        border-color: ${p.blue};
      }
      #settings-toast.toast-info i {
        color: ${p.blue};
      }

      /* In-App Confirmation Sub-Modal */
      #confirm-modal {
        position: absolute;
        inset: 0;
        background: rgba(17, 17, 27, 0.75);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 100005;
        border-radius: 12px;
      }

      #confirm-modal.active {
        display: flex;
        animation: modalBackdropFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      #confirm-modal.closing {
        display: flex;
        pointer-events: none;
        animation: modalBackdropFadeOut 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .confirm-dialog {
        background: ${p.mantle};
        border: 1px solid ${p.surface1};
        border-radius: 10px;
        padding: 24px 28px;
        width: 420px;
        max-width: 90%;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        will-change: transform, opacity;
      }

      #confirm-modal.active .confirm-dialog {
        animation: modalDialogFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      #confirm-modal.closing .confirm-dialog {
        animation: modalDialogFadeOut 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .confirm-icon {
        font-size: 38px;
        color: ${p.yellow};
        margin-bottom: 12px;
      }

      .confirm-title {
        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 600;
        color: ${p.text};
        margin-bottom: 8px;
      }

      .confirm-message {
        font-size: 13px;
        color: ${p.subtext0};
        line-height: 1.5;
        margin-bottom: 22px;
      }

      .confirm-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: 100%;
      }

      .confirm-actions .btn {
        flex: 1;
      }

      /* Sub-Modal (Search Engine Add/Edit, etc.) */
      .sub-modal {
        position: absolute;
        inset: 0;
        background: rgba(17, 17, 27, 0.75);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 100001;
        border-radius: 12px;
      }

      .sub-modal.active {
        display: flex;
        animation: modalBackdropFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .sub-modal.closing {
        display: flex;
        pointer-events: none;
        animation: modalBackdropFadeOut 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .sub-modal-dialog {
        background: ${p.mantle};
        border: 1px solid ${p.surface1};
        border-radius: 10px;
        width: 540px;
        max-width: 92%;
        max-height: 80vh;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        will-change: transform, opacity;
      }

      .sub-modal.active .sub-modal-dialog {
        animation: modalDialogFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .sub-modal.closing .sub-modal-dialog {
        animation: modalDialogFadeOut 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .sub-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 20px;
        background: ${p.base};
        border-bottom: 1px solid ${p.surface0};
      }

      .sub-modal-title {
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        font-weight: 600;
        color: ${p.text};
      }

      .sub-modal-body {
        padding: 18px 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        overflow-y: auto;
      }

      .sub-modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        padding: 14px 20px;
        background: ${p.base};
        border-top: 1px solid ${p.surface0};
      }

      /* Search Engines List Items */
      .search-engine-item {
        background: ${p.base};
        border: 1px solid ${p.surface0};
        border-radius: 8px;
        padding: 10px 14px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        transition: border-color 0.15s ease;
      }

      .search-engine-item:hover {
        border-color: ${p.surface1};
      }

      .search-engine-item:last-child {
        margin-bottom: 0;
      }

      .engine-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
        min-width: 0;
      }

      .engine-badge-group {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }

      .engine-key-badge {
        background: ${p.mantle};
        border: 1px solid ${p.surface1};
        color: ${p.blue};
        font-family: monospace;
        font-weight: 700;
        font-size: 12px;
        padding: 2px 7px;
        border-radius: 4px;
        letter-spacing: 0.5px;
      }

      .engine-name {
        font-weight: 600;
        font-size: 13.5px;
        color: ${p.text};
      }

      .engine-url {
        font-size: 12px;
        color: ${p.subtext0};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: monospace;
      }

      .engine-actions {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }

      .engine-form-card {
        background: ${p.surface0};
        border: 1px solid ${p.surface1};
        border-radius: 8px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .combobox-wrapper {
        position: relative;
        width: 100%;
      }

      .combobox-input-wrap {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      }

      .combobox-input {
        width: 100%;
        padding-right: 64px;
      }

      .combobox-actions {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        gap: 2px;
      }

      .combobox-action-btn {
        background: transparent;
        border: none;
        color: ${p.subtext0};
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: all 0.15s ease;
        font-size: 14px;
      }

      .combobox-action-btn:hover {
        color: ${p.text};
        background: ${p.surface1};
      }

      .combobox-toggle-btn i {
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .combobox-toggle-btn.open i {
        transform: rotate(180deg);
        color: ${p.blue};
      }

      .combobox-clear-btn {
        display: none;
      }
      .combobox-clear-btn.visible {
        display: flex;
      }

      @keyframes comboboxFadeIn {
        from {
          opacity: 0;
          transform: translateY(-5px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .combobox-dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        max-height: 250px;
        overflow-y: auto;
        background: ${p.surface0};
        border: 1px solid ${p.surface2};
        border-radius: 8px;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: none;
      }

      .combobox-dropdown::-webkit-scrollbar {
        width: 6px;
      }
      .combobox-dropdown::-webkit-scrollbar-track {
        background: ${p.surface0};
        border-radius: 8px;
      }
      .combobox-dropdown::-webkit-scrollbar-thumb {
        background: ${p.surface2};
        border-radius: 4px;
      }
      .combobox-dropdown::-webkit-scrollbar-thumb:hover {
        background: ${p.overlay0};
      }

      .combobox-dropdown.open {
        display: block;
        animation: comboboxFadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .combobox-header {
        padding: 8px 12px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: ${p.subtext0};
        background: ${p.mantle};
        border-bottom: 1px solid ${p.surface1};
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
      }

      .combobox-nav-hint {
        font-size: 10px;
        color: ${p.overlay1};
        text-transform: none;
        font-weight: 400;
      }

      .combobox-item {
        padding: 9px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-size: 13px;
        color: ${p.text};
        transition: background-color 0.12s ease;
        border-left: 3px solid transparent;
      }

      .combobox-item:hover,
      .combobox-item.active {
        background: ${p.surface1};
        color: ${p.blue};
        border-left-color: ${p.blue};
      }

      .combobox-item.selected {
        background: ${p.surface1}80;
        font-weight: 500;
      }

      .combobox-item-name {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .combobox-item-name i {
        color: ${p.subtext0};
        font-size: 14px;
        flex-shrink: 0;
      }

      .combobox-item.active .combobox-item-name i {
        color: ${p.blue};
      }

      .combobox-highlight {
        color: ${p.blue};
        font-weight: 700;
        background: transparent;
      }

      .combobox-tags {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }

      .combobox-item-country {
        font-size: 11px;
        color: ${p.subtext0};
        background: ${p.surface2};
        padding: 2px 7px;
        border-radius: 4px;
        font-weight: 500;
      }

      .combobox-alias-badge {
        font-size: 10px;
        color: ${p.yellow};
        background: ${p.surface2};
        border: 1px solid ${p.yellow}30;
        padding: 1px 6px;
        border-radius: 4px;
      }

      .combobox-item-check {
        color: ${p.green};
        font-size: 14px;
        margin-left: 4px;
      }

      .combobox-empty {
        padding: 16px 14px;
        font-size: 12px;
        color: ${p.subtext0};
        text-align: center;
        line-height: 1.5;
      }

      .combobox-empty-icon {
        font-size: 22px;
        color: ${p.peach};
        margin-bottom: 4px;
        display: block;
      }

      /* Pure Custom Dropdowns */
      .custom-dropdown {
        position: relative;
        width: 100%;
        user-select: none;
      }

      .dropdown-trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${p.surface0};
        border: 1px solid ${p.surface1};
        border-radius: 6px;
        padding: 8px 12px;
        color: ${p.text};
        font-size: 13px;
        cursor: pointer;
        transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
        outline: none;
      }

      .dropdown-trigger:hover {
        border-color: ${p.surface2};
      }

      .custom-dropdown.open .dropdown-trigger,
      .dropdown-trigger:focus {
        border-color: ${p.blue};
        box-shadow: 0 0 0 3px ${p.blue}25;
      }

      .dropdown-selected-content {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .dropdown-arrow {
        color: ${p.subtext0};
        font-size: 14px;
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        margin-left: 8px;
        flex-shrink: 0;
      }

      .custom-dropdown.open .dropdown-arrow {
        transform: rotate(180deg);
        color: ${p.blue};
      }

      @keyframes dropdownMenuFadeIn {
        from {
          opacity: 0;
          transform: translateY(-5px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .dropdown-menu {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        background: ${p.surface0};
        border: 1px solid ${p.surface2};
        border-radius: 8px;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
        z-index: 1001;
        max-height: 240px;
        overflow-y: auto;
        padding: 5px;
        display: none;
      }

      .dropdown-menu::-webkit-scrollbar {
        width: 6px;
      }
      .dropdown-menu::-webkit-scrollbar-track {
        background: ${p.surface0};
        border-radius: 6px;
      }
      .dropdown-menu::-webkit-scrollbar-thumb {
        background: ${p.surface2};
        border-radius: 3px;
      }
      .dropdown-menu::-webkit-scrollbar-thumb:hover {
        background: ${p.overlay0};
      }

      .custom-dropdown.open {
        z-index: 1002;
      }

      .custom-dropdown.open .dropdown-menu {
        display: block;
        animation: dropdownMenuFadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .custom-dropdown.dropup .dropdown-menu {
        top: auto;
        bottom: calc(100% + 4px);
        animation: dropdownMenuFadeInUp 0.15s cubic-bezier(0.16, 1, 0.3, 1);
      }

      @keyframes dropdownMenuFadeInUp {
        from {
          opacity: 0;
          transform: translateY(5px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .color-dropdown {
        position: relative;
        width: 100%;
      }

      .color-dropdown .dropdown-trigger {
        padding: 8px 10px;
      }

      .color-dropdown .dropdown-menu {
        min-width: 155px;
        max-height: 200px;
        right: auto;
      }

      .dropdown-item {
        padding: 8px 10px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${p.text};
        font-size: 13px;
        cursor: pointer;
        transition: background-color 0.12s ease, color 0.12s ease;
        margin-bottom: 2px;
      }

      .dropdown-item:last-child {
        margin-bottom: 0;
      }

      .dropdown-item:hover,
      .dropdown-item.highlighted {
        background: ${p.surface1};
        color: ${p.blue};
      }

      .dropdown-item.selected {
        background: ${p.surface1}90;
        font-weight: 500;
      }

      .dropdown-item-left {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .dropdown-icon {
        font-size: 16px;
        color: ${p.subtext0};
        flex-shrink: 0;
      }

      .dropdown-item.selected .dropdown-icon,
      .dropdown-item:hover .dropdown-icon {
        color: ${p.blue};
      }

      .dropdown-item-right {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }

      .dropdown-badge {
        font-size: 11px;
        padding: 2px 7px;
        border-radius: 4px;
        background: ${p.surface2};
        color: ${p.subtext0};
        font-weight: 400;
      }

      .dropdown-check {
        color: ${p.green};
        font-size: 14px;
        opacity: 0;
        transition: opacity 0.15s ease;
      }

      .dropdown-item.selected .dropdown-check {
        opacity: 1;
      }

      /* Theme dots */
      .theme-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid ${p.surface2};
        flex-shrink: 0;
      }
      .dot-latte { background: #eff1f5; border-color: #ccd0da; }
      .dot-frappe { background: #303446; border-color: #51576d; }
      .dot-macchiato { background: #24273a; border-color: #494d64; }
      .dot-mocha { background: #1e1e2e; border-color: #45475a; }

      /* Colour dots for bookmarks editor */
      .color-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        flex-shrink: 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    `;
  }

  template() {
    const p = CONFIG.palette;
    return `
      <div id="settings-modal">
        <div class="modal-dialog">
          <!-- Header -->
          <div class="modal-header">
            <div class="header-title-group">
              <i class="ti ti-settings header-icon"></i>
              <span class="modal-title">~/.config/settings</span>
            </div>
            <button class="btn-close" id="btn-close" title="Close (Esc)">
              <i class="ti ti-x"></i>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- Sidebar -->
            <div class="modal-sidebar" id="modal-sidebar">
              <div class="sidebar-nav">
                <button class="nav-item active" data-tab="general" title="General">
                  <i class="ti ti-adjustments"></i>
                  <span>General</span>
                </button>
                <button class="nav-item" data-tab="weather-clock" title="Weather & Clock">
                  <i class="ti ti-clock-hour-4"></i>
                  <span>Weather & Clock</span>
                </button>
                <button class="nav-item" data-tab="bookmarks" title="Bookmarks Editor">
                  <i class="ti ti-bookmarks"></i>
                  <span>Bookmarks Editor</span>
                </button>
                <button class="nav-item" data-tab="backup" title="Backup & Sync">
                  <i class="ti ti-database"></i>
                  <span>Backup & Sync</span>
                </button>
              </div>

              <!-- Sidebar Toggle Button (Compact / Full) -->
              <div class="sidebar-toggle-wrap">
                <button type="button" class="sidebar-toggle-btn" id="btn-sidebar-toggle" title="Collapse sidebar (Compact)">
                  <i class="ti ti-layout-sidebar-left-collapse" id="sidebar-toggle-icon"></i>
                  <span id="sidebar-toggle-label">Collapse</span>
                </button>
              </div>
            </div>

            <!-- Content -->
            <div class="modal-content">
              <!-- Tab 1: General -->
              <div class="tab-panel active" id="tab-general">
                <div class="section-title"><i class="ti ti-adjustments"></i> General Settings</div>
                <div class="section-desc">Customise Catppuccin palettes, typography preferences, and basic navigation.</div>

                <div class="card">
                  <div class="form-grid-2">
                    <div class="form-group">
                      <label class="form-label">Preferred Light Theme</label>
                      <div class="custom-dropdown" data-id="gen-theme-light">
                        <input type="hidden" id="gen-theme-light" value="latte">
                        <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                          <span class="dropdown-selected-content">
                            <span class="theme-dot dot-latte"></span>
                            <span>Latte</span>
                          </span>
                          <i class="ti ti-chevron-down dropdown-arrow"></i>
                        </button>
                        <div class="dropdown-menu">
                          <div class="dropdown-item selected" data-value="latte">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-latte"></span>
                              <span>Latte</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Warm Light</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="frappe">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-frappe"></span>
                              <span>Frappé</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Low Contrast</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="macchiato">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-macchiato"></span>
                              <span>Macchiato</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Medium Dark</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="mocha">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-mocha"></span>
                              <span>Mocha</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Deep Dark</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Preferred Dark Theme</label>
                      <div class="custom-dropdown" data-id="gen-theme-dark">
                        <input type="hidden" id="gen-theme-dark" value="mocha">
                        <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                          <span class="dropdown-selected-content">
                            <span class="theme-dot dot-mocha"></span>
                            <span>Mocha</span>
                          </span>
                          <i class="ti ti-chevron-down dropdown-arrow"></i>
                        </button>
                        <div class="dropdown-menu">
                          <div class="dropdown-item selected" data-value="mocha">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-mocha"></span>
                              <span>Mocha</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Deep Dark</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="macchiato">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-macchiato"></span>
                              <span>Macchiato</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Medium Dark</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="frappe">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-frappe"></span>
                              <span>Frappé</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Low Contrast</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="latte">
                            <div class="dropdown-item-left">
                              <span class="theme-dot dot-latte"></span>
                              <span>Latte</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Warm Light</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div class="card">
                  <div class="form-group">
                    <label class="form-label">Fastlink URL</label>
                    <input type="text" class="form-input" id="gen-fastlink" placeholder="https://example.com">
                    <span class="form-hint">URL opened when clicking the logo button at the bottom-left of the statusbar.</span>
                  </div>
                </div>

                <div class="card">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
                    <div>
                      <div class="form-label" style="font-size: 14px; font-weight: 600; color: ${p.text};">Default Search Engine</div>
                      <div class="form-hint">Choose your default search provider or manage engine shortcuts.</div>
                    </div>
                    <button type="button" class="btn btn-secondary btn-sm" id="btn-configure-engines">
                      <i class="ti ti-settings"></i> Configure Engines
                    </button>
                  </div>

                  <div class="form-group">
                    <div class="custom-dropdown" data-id="gen-search-default">
                      <input type="hidden" id="gen-search-default" value="d">
                      <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                        <span class="dropdown-selected-content">
                          <i class="ti ti-search dropdown-icon"></i>
                          <span>DuckDuckGo</span>
                        </span>
                        <i class="ti ti-chevron-down dropdown-arrow"></i>
                      </button>
                      <div class="dropdown-menu">
                        <!-- Populated dynamically -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab 2: Weather & Clock -->
              <div class="tab-panel" id="tab-weather-clock">
                <div class="section-title"><i class="ti ti-cloud-sun"></i> Weather Widget</div>
                <div class="section-desc">Configure weather display and OpenWeatherMap location.</div>

                <div class="card">
                  <div class="switch-group" style="margin-bottom: 14px;">
                    <div class="switch-label-group">
                      <span class="form-label">Enable Weather Widget</span>
                      <span class="form-hint">Display temperature and weather conditions in the statusbar.</span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" id="weather-enabled" checked>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div id="weather-controls">
                    <div class="form-grid-2">
                      <div class="form-group">
                        <label class="form-label">Location / City Name</label>
                        <div class="combobox-wrapper" id="city-combobox-wrapper">
                          <div class="combobox-input-wrap">
                            <input type="text" class="form-input combobox-input" id="weather-location" placeholder="Search city or enter custom location..." autocomplete="off">
                            <div class="combobox-actions">
                              <button type="button" class="combobox-action-btn combobox-clear-btn" id="combobox-clear-btn" title="Clear input">
                                <i class="ti ti-x"></i>
                              </button>
                              <button type="button" class="combobox-action-btn combobox-toggle-btn" id="combobox-toggle-btn" title="Toggle cities dropdown">
                                <i class="ti ti-chevron-down"></i>
                              </button>
                            </div>
                          </div>
                          <div class="combobox-dropdown" id="city-combobox-dropdown"></div>
                        </div>
                        <span class="form-hint">Search 100+ cities with aliases (e.g. "moskow", "tokyo", "nyc") or type any custom city.</span>
                      </div>

                      <div class="form-group">
                        <label class="form-label">Temperature Scale</label>
                        <div class="custom-dropdown" data-id="weather-scale">
                          <input type="hidden" id="weather-scale" value="C">
                          <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                            <span class="dropdown-selected-content">
                              <i class="ti ti-temperature-celsius dropdown-icon"></i>
                              <span>Celsius (°C)</span>
                            </span>
                            <i class="ti ti-chevron-down dropdown-arrow"></i>
                          </button>
                          <div class="dropdown-menu">
                            <div class="dropdown-item selected" data-value="C">
                              <div class="dropdown-item-left">
                                <i class="ti ti-temperature-celsius dropdown-icon"></i>
                                <span>Celsius (°C)</span>
                              </div>
                              <div class="dropdown-item-right">
                                <span class="dropdown-badge">Metric</span>
                                <i class="ti ti-check dropdown-check"></i>
                              </div>
                            </div>
                            <div class="dropdown-item" data-value="F">
                              <div class="dropdown-item-left">
                                <i class="ti ti-temperature-fahrenheit dropdown-icon"></i>
                                <span>Fahrenheit (°F)</span>
                              </div>
                              <div class="dropdown-item-right">
                                <span class="dropdown-badge">Imperial</span>
                                <i class="ti ti-check dropdown-check"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group" style="margin-top: 14px;">
                      <label class="form-label">OpenWeatherMap API Key (Optional)</label>
                      <input type="password" class="form-input" id="weather-appid" placeholder="Enter OpenWeatherMap API key...">
                      <span class="form-hint">Leave empty to keep the placeholder and skip network requests.</span>
                    </div>
                  </div>
                </div>

                <div class="section-title" style="margin-top: 24px;"><i class="ti ti-clock"></i> Clock Widget</div>
                <div class="section-desc">Main clock format and multi-timezone configurations.</div>

                <div class="card">
                  <div class="switch-group" style="margin-bottom: 14px;">
                    <div class="switch-label-group">
                      <span class="form-label">Enable Clock Widget</span>
                      <span class="form-hint">Display the clock widget in the statusbar.</span>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" id="clock-enabled" checked>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div id="clock-controls">
                    <div class="form-group">
                      <label class="form-label">Main Clock Format</label>
                      <div class="custom-dropdown" data-id="clock-format">
                        <input type="hidden" id="clock-format" value="k:i p">
                        <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                          <span class="dropdown-selected-content">
                            <i class="ti ti-clock dropdown-icon"></i>
                            <span>12-hour AM/PM</span>
                          </span>
                          <i class="ti ti-chevron-down dropdown-arrow"></i>
                        </button>
                        <div class="dropdown-menu">
                          <div class="dropdown-item selected" data-value="k:i p">
                            <div class="dropdown-item-left">
                              <i class="ti ti-clock dropdown-icon"></i>
                              <span>12-hour AM/PM</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">02:30 PM</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="K:i p">
                            <div class="dropdown-item-left">
                              <i class="ti ti-clock dropdown-icon"></i>
                              <span>12-hour (no zero)</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">2:30 PM</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="h:i">
                            <div class="dropdown-item-left">
                              <i class="ti ti-clock-24 dropdown-icon"></i>
                              <span>24-hour standard</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">14:30</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="H:i">
                            <div class="dropdown-item-left">
                              <i class="ti ti-clock-24 dropdown-icon"></i>
                              <span>24-hour (no zero)</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">14:30</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="k:i:s p">
                            <div class="dropdown-item-left">
                              <i class="ti ti-clock-play dropdown-icon"></i>
                              <span>12-hour with Seconds</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">02:30:45 PM</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="h:i:s">
                            <div class="dropdown-item-left">
                              <i class="ti ti-clock-play dropdown-icon"></i>
                              <span>24-hour with Seconds</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">14:30:45</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                          <div class="dropdown-item" data-value="a, d b Y - h:i">
                            <div class="dropdown-item-left">
                              <i class="ti ti-calendar-time dropdown-icon"></i>
                              <span>Day, Date & Time</span>
                            </div>
                            <div class="dropdown-item-right">
                              <span class="dropdown-badge">Thu, 15 Oct - 14:30</span>
                              <i class="ti ti-check dropdown-check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style="margin-top: 20px;">
                      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                        <span class="form-label">Additional Clocks (Multiple Timezones)</span>
                        <button class="btn btn-secondary btn-sm" id="btn-add-additional-clock">
                          <i class="ti ti-plus"></i> Add Timezone
                        </button>
                      </div>
                      <div id="additional-clocks-container"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab 3: Bookmarks Editor -->
              <div class="tab-panel" id="tab-bookmarks">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
                  <div>
                    <div class="section-title"><i class="ti ti-bookmarks"></i> Visual Bookmarks Editor</div>
                    <div class="section-desc" style="margin-bottom: 0;">Manage tabs, categories, and quick links directly.</div>
                  </div>
                  <button class="btn btn-primary btn-sm" id="btn-add-tab">
                    <i class="ti ti-plus"></i> Add New Tab
                  </button>
                </div>

                <div id="bookmarks-tree-container"></div>
              </div>

              <!-- Tab 4: Backup & Sync -->
              <div class="tab-panel" id="tab-backup">
                <div class="section-title"><i class="ti ti-database"></i> Backup & Sync</div>
                <div class="section-desc">Export or import configuration backups (JSON), or restore defaults.</div>

                <div class="card">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
                    <div style="flex: 1; min-width: 0;">
                      <div class="form-label" style="font-size: 14px; margin-bottom: 4px;">Export Backup (JSON)</div>
                      <div class="form-hint">Export your personalised bookmarks and settings as a portable JSON backup file.</div>
                    </div>
                    <button class="btn btn-secondary" id="btn-export-json" style="flex-shrink: 0; white-space: nowrap;">
                      <i class="ti ti-file-export"></i> Export JSON
                    </button>
                  </div>
                </div>

                <div class="card">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
                    <div style="flex: 1; min-width: 0;">
                      <div class="form-label" style="font-size: 14px; margin-bottom: 4px;">Import Configuration (JS / JSON)</div>
                      <div class="form-hint">Load configuration from a userconfig.js file or a previously saved JSON file.</div>
                    </div>
                    <div style="flex-shrink: 0;">
                      <input type="file" id="file-import-input" accept=".js,.json" style="display: none;">
                      <button class="btn btn-secondary" id="btn-trigger-import" style="white-space: nowrap;">
                        <i class="ti ti-upload"></i> Choose File
                      </button>
                    </div>
                  </div>
                </div>

                <div class="card" style="border-color: ${p.red}40;">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
                    <div style="flex: 1; min-width: 0;">
                      <div class="form-label" style="font-size: 14px; color: ${p.red}; margin-bottom: 4px;">Reset to Default userconfig.js</div>
                      <div class="form-hint">Clear local browser storage and restore configuration from the project's userconfig.js file.</div>
                    </div>
                    <button class="btn btn-danger" id="btn-reset-default" style="flex-shrink: 0; white-space: nowrap;">
                      <i class="ti ti-refresh"></i> Reset to Default
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button class="btn btn-secondary" id="btn-footer-close">
              <i class="ti ti-x"></i> Close (Esc)
            </button>
            <button class="btn btn-primary" id="btn-save">
              <i class="ti ti-device-floppy"></i> Save & Reload
            </button>
          </div>

          <!-- Confirmation Sub-Modal -->
          <div id="confirm-modal">
            <div class="confirm-dialog">
              <i class="ti ti-alert-triangle confirm-icon" id="confirm-icon"></i>
              <div class="confirm-title" id="confirm-title">Confirm Action</div>
              <div class="confirm-message" id="confirm-message">Are you sure you want to proceed?</div>
              <div class="confirm-actions">
                <button class="btn btn-secondary" id="btn-confirm-cancel">Cancel</button>
                <button class="btn btn-danger" id="btn-confirm-ok">Confirm</button>
              </div>
            </div>
          </div>

          <!-- Configure Search Engines Sub-Modal -->
          <div id="configure-engines-modal" class="sub-modal">
            <div class="sub-modal-dialog">
              <div class="sub-modal-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <i class="ti ti-settings" style="font-size: 18px; color: ${p.blue};"></i>
                  <span class="sub-modal-title">Configure Search Engines</span>
                </div>
                <button type="button" class="btn-close" id="btn-config-engines-close"><i class="ti ti-x"></i></button>
              </div>
              <div class="sub-modal-body">
                <!-- Action bar -->
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <span style="font-size: 12.5px; color: ${p.subtext0};">Manage shortcut prefixes and search query URLs.</span>
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-open-add-engine">
                    <i class="ti ti-plus"></i> Add Engine
                  </button>
                </div>

                <!-- Configured Engines List -->
                <div id="modal-engines-list">
                  <!-- Rendered dynamically -->
                </div>
              </div>
              <div class="sub-modal-footer">
                <button type="button" class="btn btn-primary" id="btn-config-engines-done">Done</button>
              </div>
            </div>
          </div>

          <!-- Add / Edit Search Engine Sub-Modal -->
          <div id="engine-editor-modal" class="sub-modal" style="z-index: 100002;">
            <div class="sub-modal-dialog" style="width: 480px;">
              <div class="sub-modal-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <i class="ti ti-search" style="font-size: 18px; color: ${p.blue};"></i>
                  <span class="sub-modal-title" id="engine-editor-title">Add Search Engine</span>
                </div>
                <button type="button" class="btn-close" id="btn-engine-editor-close"><i class="ti ti-x"></i></button>
              </div>
              <div class="sub-modal-body">
                <input type="hidden" id="engine-edit-old-key" value="">
                <div class="form-group">
                  <label class="form-label">Keyword / Prefix <span style="color: ${p.red};">*</span></label>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-family: monospace; font-size: 14px; font-weight: 700; color: ${p.blue}; padding: 7px 11px; background: ${p.surface0}; border: 1px solid ${p.surface1}; border-radius: 6px;">!</span>
                    <input type="text" class="form-input" id="engine-key-input" placeholder="e.g. g, d, yt, wiki" style="flex: 1;" autocomplete="off">
                  </div>
                  <span class="form-hint">Shortcut prefix in the search bar (e.g. "!yt query" will search YouTube).</span>
                </div>
                <div class="form-group">
                  <label class="form-label">Engine Name <span style="color: ${p.red};">*</span></label>
                  <input type="text" class="form-input" id="engine-name-input" placeholder="e.g. Google, YouTube, Wikipedia" autocomplete="off">
                </div>
                <div class="form-group">
                  <label class="form-label">Search Query URL <span style="color: ${p.red};">*</span></label>
                  <input type="text" class="form-input" id="engine-url-input" placeholder="https://example.com/search?q=" autocomplete="off">
                  <span class="form-hint">Endpoint URL where your search terms will be appended.</span>
                </div>
                <div class="form-group">
                  <label class="form-label">Engine Icon</label>
                  <div class="icon-preview-box" style="display: flex; align-items: center; gap: 8px;">
                    <i class="ti ti-adjustments-horizontal icon-preview-display" id="engine-icon-preview" style="font-size: 20px; width: 28px; text-align: center; color: ${p.blue};"></i>
                    <input type="text" class="form-input" id="engine-icon-input" placeholder="adjustments-horizontal" autocomplete="off" style="flex: 1;">
                  </div>
                  <span class="form-hint">Tabler icon name (defaults to <code>adjustments-horizontal</code> if left empty).</span>
                  <div style="margin-top: 4px;">
                    <a href="https://tabler.io/icons" target="_blank" class="link-external">
                      <i class="ti ti-external-link"></i> Browse icon names on tabler.io/icons
                    </a>
                  </div>
                </div>
              </div>
              <div class="sub-modal-footer">
                <button type="button" class="btn btn-secondary" id="btn-engine-editor-cancel">Cancel</button>
                <button type="button" class="btn btn-primary" id="btn-engine-editor-save">Save Engine</button>
              </div>
            </div>
          </div>
        </div>

        <!-- In-App Toast Notification -->
        <div id="settings-toast" class="toast-success">
          <i class="ti ti-check" id="toast-icon"></i>
          <span id="toast-message">Settings saved successfully!</span>
        </div>
      </div>
    `;
  }

  showToast(message, type = 'success') {
    const toast = this.refs.toast;
    const msgElem = toast.querySelector('#toast-message');
    const iconElem = toast.querySelector('#toast-icon');

    msgElem.textContent = message;
    toast.className = `toast-${type}`;

    if (type === 'error') {
      iconElem.className = 'ti ti-alert-circle';
    } else if (type === 'info') {
      iconElem.className = 'ti ti-info-circle';
    } else {
      iconElem.className = 'ti ti-check';
    }

    toast.classList.add('show');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  showConfirmModal({ title, message, confirmText = 'Confirm', confirmType = 'danger' }) {
    return new Promise((resolve) => {
      const modal = this.shadow.querySelector('#confirm-modal');
      const titleEl = modal.querySelector('#confirm-title');
      const msgEl = modal.querySelector('#confirm-message');
      const okBtn = modal.querySelector('#btn-confirm-ok');
      const cancelBtn = modal.querySelector('#btn-confirm-cancel');

      titleEl.textContent = title || 'Confirm Action';
      msgEl.textContent = message;
      okBtn.textContent = confirmText;
      okBtn.className = `btn btn-${confirmType}`;

      modal.classList.remove('closing');
      modal.classList.add('active');

      const cleanup = (confirmed) => {
        okBtn.onclick = null;
        cancelBtn.onclick = null;
        modal.classList.add('closing');
        setTimeout(() => {
          modal.classList.remove('active', 'closing');
          resolve(confirmed);
        }, 180);
      };

      okBtn.onclick = () => {
        cleanup(true);
      };

      cancelBtn.onclick = () => {
        cleanup(false);
      };
    });
  }

  activate() {
    if (this.deactivateTimer) {
      clearTimeout(this.deactivateTimer);
      this.deactivateTimer = null;
    }
    this.isDeactivating = false;
    this.refs.modal.classList.remove('closing');
    this.setAttribute('active', '');
    this.draftConfig = JSON.parse(JSON.stringify(CONFIG));
    this.draftLight = localStorage.getItem('preferredLightTheme') || 'latte';
    this.draftDark = localStorage.getItem('preferredDarkTheme') || 'mocha';

    this.populateGeneralForm();
    this.populateWeatherClockForm();
    this.renderBookmarksTree();

    this.refs.modal.classList.add('active');

    // Bind Escape key listener: cancel confirm dialog first if active, close open dropdowns, otherwise close modal
    this.escapeHandler = (e) => {
      if (e.key === 'Escape') {
        const confirmModal = this.shadow.querySelector('#confirm-modal');
        if (confirmModal && confirmModal.classList.contains('active') && !confirmModal.classList.contains('closing')) {
          this.shadow.querySelector('#btn-confirm-cancel').click();
          return;
        }
        const editorModal = this.shadow.querySelector('#engine-editor-modal');
        if (editorModal && editorModal.classList.contains('active') && !editorModal.classList.contains('closing')) {
          this.closeEngineEditorModal();
          return;
        }
        const engineModal = this.shadow.querySelector('#configure-engines-modal');
        if (engineModal && engineModal.classList.contains('active') && !engineModal.classList.contains('closing')) {
          this.closeConfigureEnginesModal();
          return;
        }
        const openDropdown = this.shadow.querySelector('.custom-dropdown.open');
        if (openDropdown) {
          this.closeAllDropdowns();
          return;
        }
        const comboboxDropdown = this.shadow.querySelector('.combobox-dropdown.open');
        if (comboboxDropdown) {
          comboboxDropdown.classList.remove('open');
          const toggleBtn = this.shadow.querySelector('#combobox-toggle-btn');
          if (toggleBtn) toggleBtn.classList.remove('open');
          return;
        }
        this.deactivate();
      }
    };
    window.addEventListener('keydown', this.escapeHandler);
  }

  deactivate() {
    if (this.isDeactivating) return;
    this.isDeactivating = true;

    if (this.escapeHandler) {
      window.removeEventListener('keydown', this.escapeHandler);
      this.escapeHandler = null;
    }

    const modal = this.refs.modal;
    modal.classList.add('closing');

    const finalize = () => {
      if (this.deactivateTimer) {
        clearTimeout(this.deactivateTimer);
        this.deactivateTimer = null;
      }
      modal.classList.remove('active', 'closing');
      const subModals = this.shadow.querySelectorAll('.sub-modal, #confirm-modal');
      subModals.forEach(m => m.classList.remove('active', 'closing'));
      this.removeAttribute('active');
      this.isDeactivating = false;
    };

    this.deactivateTimer = setTimeout(finalize, 180);
  }

  setDropdownValue(id, value) {
    const shadow = this.shadow;
    const wrap = shadow.querySelector(`.custom-dropdown[data-id="${id}"]`);
    if (!wrap) return;

    const input = wrap.querySelector(`#${id}`);
    if (input) input.value = value;

    const items = wrap.querySelectorAll('.dropdown-item');
    let matchedItem = null;
    items.forEach(it => {
      if (it.dataset.value === value) {
        it.classList.add('selected');
        matchedItem = it;
      } else {
        it.classList.remove('selected');
      }
    });

    const display = wrap.querySelector('.dropdown-selected-content');
    if (matchedItem) {
      const leftContent = matchedItem.querySelector('.dropdown-item-left');
      if (display && leftContent) {
        display.innerHTML = leftContent.innerHTML;
      }
    } else if (display) {
      display.innerHTML = `<span>${escapeHtml(value)}</span>`;
    }
  }

  populateGeneralForm() {
    const shadow = this.shadow;
    this.setDropdownValue('gen-theme-light', this.draftLight);
    this.setDropdownValue('gen-theme-dark', this.draftDark);
    shadow.querySelector('#gen-fastlink').value = this.draftConfig.fastlink || '';
    this.setDropdownValue('gen-search-default', this.draftConfig.search?.default || 'd');
  }

  populateWeatherClockForm() {
    const shadow = this.shadow;
    const disabled = this.draftConfig.disabled || [];

    const weatherEnabled = !disabled.includes('weather-forecast');
    shadow.querySelector('#weather-enabled').checked = weatherEnabled;
    const weatherControls = shadow.querySelector('#weather-controls');
    if (weatherControls) weatherControls.style.display = weatherEnabled ? 'block' : 'none';

    shadow.querySelector('#weather-location').value = this.draftConfig.temperature?.location || 'London';
    this.setDropdownValue('weather-scale', this.draftConfig.temperature?.scale || 'C');
    shadow.querySelector('#weather-appid').value = this.draftConfig.temperature?.appId || '';

    const clockEnabled = !disabled.includes('current-time');
    shadow.querySelector('#clock-enabled').checked = clockEnabled;
    const clockControls = shadow.querySelector('#clock-controls');
    if (clockControls) clockControls.style.display = clockEnabled ? 'block' : 'none';

    this.setDropdownValue('clock-format', this.draftConfig.clock?.format || 'k:i p');

    this.renderAdditionalClocks();
  }

  renderAdditionalClocks() {
    const container = this.shadow.querySelector('#additional-clocks-container');
    const clocks = this.draftConfig.additionalClocks || [];

    if (clocks.length === 0) {
      container.innerHTML = `<div style="font-size: 13px; color: ${CONFIG.palette.overlay0}; padding: 8px 0;">No additional timezone clocks configured.</div>`;
      return;
    }

    const TIMEZONES = [
      { tz: 'UTC', label: 'UTC (Coordinated Universal Time)' },
      { tz: 'Europe/London', label: 'London, UK (GMT/BST - UTC+0)' },
      { tz: 'Europe/Paris', label: 'Paris, France (CET - UTC+1)' },
      { tz: 'Europe/Berlin', label: 'Berlin, Germany (CET - UTC+1)' },
      { tz: 'Europe/Kyiv', label: 'Kyiv, Ukraine (EET - UTC+2)' },
      { tz: 'Europe/Moscow', label: 'Moscow, Russia (MSK - UTC+3)' },
      { tz: 'Asia/Dubai', label: 'Dubai, UAE (GST - UTC+4)' },
      { tz: 'Asia/Kolkata', label: 'New Delhi, India (IST - UTC+5:30)' },
      { tz: 'Asia/Jakarta', label: 'Jakarta, Bangkok (WIB - UTC+7)' },
      { tz: 'Asia/Makassar', label: 'Makassar, Bali (WITA - UTC+8)' },
      { tz: 'Asia/Jayapura', label: 'Jayapura, Papua (WIT - UTC+9)' },
      { tz: 'Asia/Singapore', label: 'Singapore, KL (SGT - UTC+8)' },
      { tz: 'Asia/Hong_Kong', label: 'Hong Kong, Beijing (HKT - UTC+8)' },
      { tz: 'Asia/Tokyo', label: 'Tokyo, Japan (JST - UTC+9)' },
      { tz: 'Asia/Seoul', label: 'Seoul, Korea (KST - UTC+9)' },
      { tz: 'Australia/Sydney', label: 'Sydney, Melbourne (AEST - UTC+10)' },
      { tz: 'Pacific/Auckland', label: 'Auckland, NZ (NZST - UTC+12)' },
      { tz: 'America/New_York', label: 'New York, Toronto (EST - UTC-5)' },
      { tz: 'America/Chicago', label: 'Chicago, Mexico (CST - UTC-6)' },
      { tz: 'America/Denver', label: 'Denver, Calgary (MST - UTC-7)' },
      { tz: 'America/Los_Angeles', label: 'Los Angeles, SF (PST - UTC-8)' },
      { tz: 'America/Sao_Paulo', label: 'São Paulo, Brazil (BRT - UTC-3)' },
    ];

    container.innerHTML = clocks.map((clk, idx) => {
      const hasCustom = clk.timezone && !TIMEZONES.some(t => t.tz === clk.timezone);
      const tzOptionsHtml = (hasCustom ? `<option value="${escapeHtml(clk.timezone)}" selected>${escapeHtml(clk.timezone)} (Custom)</option>` : '') +
        TIMEZONES.map(t => `<option value="${t.tz}" ${clk.timezone === t.tz ? 'selected' : ''}>${t.label}</option>`).join('');

      return `
        <div class="card" style="margin-bottom: 10px; padding: 12px 16px;">
          <div style="display: grid; grid-template-columns: 90px 1.2fr 1fr 34px; gap: 10px; align-items: center;">
            <input type="text" class="form-input clk-label" data-idx="${idx}" value="${escapeHtml(clk.label || '')}" placeholder="Label (UA)">
            <select class="form-select clk-tz" data-idx="${idx}">
              ${tzOptionsHtml}
            </select>
            <select class="form-select clk-fmt" data-idx="${idx}">
              <option value="k:i p" ${clk.format === 'k:i p' ? 'selected' : ''}>12-hour AM/PM (02:30 PM)</option>
              <option value="K:i p" ${clk.format === 'K:i p' ? 'selected' : ''}>12-hour without leading zero (2:30 PM)</option>
              <option value="h:i" ${clk.format === 'h:i' ? 'selected' : ''}>24-hour (14:30)</option>
              <option value="H:i" ${clk.format === 'H:i' ? 'selected' : ''}>24-hour without leading zero (14:30)</option>
              <option value="k:i:s p" ${clk.format === 'k:i:s p' ? 'selected' : ''}>12-hour with Seconds</option>
              <option value="h:i:s" ${clk.format === 'h:i:s' ? 'selected' : ''}>24-hour with Seconds</option>
            </select>
            <button class="btn btn-danger btn-icon-only btn-del-clock" data-idx="${idx}" title="Delete Clock">
              <i class="ti ti-trash"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Event listeners for clock inputs
    container.querySelectorAll('.clk-label').forEach(el => {
      el.oninput = (e) => { clocks[e.target.dataset.idx].label = e.target.value; };
    });
    container.querySelectorAll('.clk-tz').forEach(el => {
      el.onchange = (e) => { clocks[e.target.dataset.idx].timezone = e.target.value; };
    });
    container.querySelectorAll('.clk-fmt').forEach(el => {
      el.onchange = (e) => { clocks[e.target.dataset.idx].format = e.target.value; };
    });
    container.querySelectorAll('.btn-del-clock').forEach(el => {
      el.onclick = (e) => {
        const btn = e.target.closest('.btn-del-clock');
        const idx = parseInt(btn.dataset.idx);
        clocks.splice(idx, 1);
        this.renderAdditionalClocks();
      };
    });
  }

  renderBookmarksTree() {
    const container = this.shadow.querySelector('#bookmarks-tree-container');
    const tabs = this.draftConfig.tabs || [];

    if (tabs.length === 0) {
      container.innerHTML = `<div style="font-size: 13px; color: ${CONFIG.palette.overlay0};">No bookmark tabs found.</div>`;
      return;
    }

    container.innerHTML = tabs.map((tab, tIdx) => `
      <div class="tree-tab-card" data-tidx="${tIdx}">
        <div class="tree-tab-header">
          <div style="display: flex; align-items: center; gap: 10px; flex: 1;">
            <i class="ti ti-folder" style="font-size: 18px; color: ${CONFIG.palette.peach};"></i>
            <input type="text" class="form-input tab-name-input" data-tidx="${tIdx}" value="${escapeHtml(tab.name || '')}" placeholder="Tab Name (e.g. myself)" style="width: 150px;">
            <input type="text" class="form-input tab-bg-input" data-tidx="${tIdx}" value="${escapeHtml(tab.background_url || '')}" placeholder="Banner URL (e.g. src/img/banners/banner_01.gif)" style="flex: 1;">
          </div>
          <button class="btn btn-danger btn-sm btn-del-tab" data-tidx="${tIdx}">
            <i class="ti ti-trash"></i> Delete Tab
          </button>
        </div>

        <div class="tree-tab-body">
          ${(tab.categories || []).map((cat, cIdx) => `
            <div class="tree-cat-card" data-tidx="${tIdx}" data-cidx="${cIdx}">
              <div class="tree-cat-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <i class="ti ti-category" style="color: ${CONFIG.palette.blue};"></i>
                  <input type="text" class="form-input cat-name-input" data-tidx="${tIdx}" data-cidx="${cIdx}" value="${escapeHtml(cat.name || '')}" placeholder="Category Name (e.g. workspace)" style="width: 180px;">
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <button class="btn btn-secondary btn-sm btn-add-link" data-tidx="${tIdx}" data-cidx="${cIdx}">
                    <i class="ti ti-plus"></i> Add Link
                  </button>
                  <button class="btn btn-danger btn-sm btn-del-cat" data-tidx="${tIdx}" data-cidx="${cIdx}">
                    <i class="ti ti-trash"></i>
                  </button>
                </div>
              </div>

              <!-- Links -->
              <div class="links-list-container">
                ${(cat.links || []).map((link, lIdx) => {
                  const iconName = link.icon || 'link';
                  const selectedCol = resolveColourKey(link.icon_color);
                  const selectedHex = CONFIG.palette[selectedCol] || CONFIG.palette.text;
                  const iconColour = link.icon_color || selectedHex;
                  return `
                    <div class="link-item-row" data-tidx="${tIdx}" data-cidx="${cIdx}" data-lidx="${lIdx}">
                      <input type="text" class="form-input link-name-input" value="${escapeHtml(link.name || '')}" placeholder="Link Name" data-tidx="${tIdx}" data-cidx="${cIdx}" data-lidx="${lIdx}">
                      <input type="text" class="form-input link-url-input" value="${escapeHtml(link.url || '')}" placeholder="URL (https://...)" data-tidx="${tIdx}" data-cidx="${cIdx}" data-lidx="${lIdx}">

                      <!-- Icon input with live preview -->
                      <div class="icon-preview-box">
                        <i class="ti ti-${escapeHtml(iconName)} icon-preview-display" id="icon-preview-${tIdx}-${cIdx}-${lIdx}" style="color: ${iconColour};"></i>
                        <input type="text" class="form-input link-icon-input" value="${escapeHtml(link.icon || '')}" placeholder="Icon (droplet)" data-tidx="${tIdx}" data-cidx="${cIdx}" data-lidx="${lIdx}">
                      </div>

                      <!-- Icon colour custom dropdown -->
                      <div class="custom-dropdown color-dropdown" data-id="link-color-${tIdx}-${cIdx}-${lIdx}">
                        <input type="hidden" id="link-color-${tIdx}-${cIdx}-${lIdx}" class="link-color-input" data-tidx="${tIdx}" data-cidx="${cIdx}" data-lidx="${lIdx}" value="palette.${selectedCol}">
                        <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false" title="Select icon colour">
                          <span class="dropdown-selected-content">
                            <span class="color-dot" style="background: ${selectedHex}; box-shadow: 0 0 5px ${selectedHex}50;"></span>
                            <span>${capitalizeFirst(selectedCol)}</span>
                          </span>
                          <i class="ti ti-chevron-down dropdown-arrow"></i>
                        </button>
                        <div class="dropdown-menu">
                          ${CATPPUCCIN_ACCENTS.map(col => {
                            const isSel = col === selectedCol;
                            const colHex = CONFIG.palette[col] || '#89b4fa';
                            return `
                              <div class="dropdown-item ${isSel ? 'selected' : ''}" data-value="palette.${col}">
                                <div class="dropdown-item-left">
                                  <span class="color-dot" style="background: ${colHex}; box-shadow: 0 0 4px ${colHex}50;"></span>
                                  <span>${capitalizeFirst(col)}</span>
                                </div>
                                <div class="dropdown-item-right">
                                  <i class="ti ti-check dropdown-check"></i>
                                </div>
                              </div>
                            `;
                          }).join('')}
                        </div>
                      </div>

                      <button class="btn btn-danger btn-icon-only btn-del-link" data-tidx="${tIdx}" data-cidx="${cIdx}" data-lidx="${lIdx}" title="Delete Link">
                        <i class="ti ti-trash"></i>
                      </button>
                    </div>
                  `;
                }).join('')}
              </div>

              <div style="margin-top: 8px;">
                <a href="https://tabler.io/icons" target="_blank" class="link-external">
                  <i class="ti ti-external-link"></i> Browse icon names on Tabler Icons (tabler.io/icons)
                </a>
              </div>
            </div>
          `).join('')}

          <div>
            <button class="btn btn-secondary btn-sm btn-add-cat" data-tidx="${tIdx}">
              <i class="ti ti-folder-plus"></i> Add Category
            </button>
          </div>
        </div>
      </div>
    `).join('');

    this.bindBookmarkEvents();
  }

  bindBookmarkEvents() {
    const container = this.shadow.querySelector('#bookmarks-tree-container');
    const tabs = this.draftConfig.tabs;

    // Tab Name & Banner inputs
    container.querySelectorAll('.tab-name-input').forEach(el => {
      el.oninput = (e) => { tabs[e.target.dataset.tidx].name = e.target.value; };
    });
    container.querySelectorAll('.tab-bg-input').forEach(el => {
      el.oninput = (e) => { tabs[e.target.dataset.tidx].background_url = e.target.value; };
    });

    // Delete Tab with custom in-app confirmation modal
    container.querySelectorAll('.btn-del-tab').forEach(el => {
      el.onclick = async (e) => {
        const btn = e.target.closest('.btn-del-tab');
        const tIdx = parseInt(btn.dataset.tidx);
        const tabName = tabs[tIdx].name || 'this tab';
        const confirmed = await this.showConfirmModal({
          title: 'Delete Tab',
          message: `Are you sure you want to delete tab "${tabName}" and all its categories and links?`,
          confirmText: 'Delete Tab',
          confirmType: 'danger',
        });
        if (confirmed) {
          tabs.splice(tIdx, 1);
          this.renderBookmarksTree();
          this.showToast(`Tab "${tabName}" deleted.`, 'info');
        }
      };
    });

    // Category Name input
    container.querySelectorAll('.cat-name-input').forEach(el => {
      el.oninput = (e) => {
        const { tidx, cidx } = e.target.dataset;
        tabs[tidx].categories[cidx].name = e.target.value;
      };
    });

    // Add Category
    container.querySelectorAll('.btn-add-cat').forEach(el => {
      el.onclick = (e) => {
        const btn = e.target.closest('.btn-add-cat');
        const tIdx = parseInt(btn.dataset.tidx);
        if (!tabs[tIdx].categories) tabs[tIdx].categories = [];
        tabs[tIdx].categories.push({ name: 'new category', links: [] });
        this.renderBookmarksTree();
      };
    });

    // Delete Category with custom in-app confirmation modal
    container.querySelectorAll('.btn-del-cat').forEach(el => {
      el.onclick = async (e) => {
        const btn = e.target.closest('.btn-del-cat');
        const { tidx, cidx } = btn.dataset;
        const catName = tabs[tidx].categories[cidx].name || 'this category';
        const confirmed = await this.showConfirmModal({
          title: 'Delete Category',
          message: `Are you sure you want to delete category "${catName}"?`,
          confirmText: 'Delete Category',
          confirmType: 'danger',
        });
        if (confirmed) {
          tabs[tidx].categories.splice(parseInt(cidx), 1);
          this.renderBookmarksTree();
          this.showToast(`Category "${catName}" deleted.`, 'info');
        }
      };
    });

    // Link Inputs
    container.querySelectorAll('.link-name-input').forEach(el => {
      el.oninput = (e) => {
        const { tidx, cidx, lidx } = e.target.dataset;
        tabs[tidx].categories[cidx].links[lidx].name = e.target.value;
      };
    });

    container.querySelectorAll('.link-url-input').forEach(el => {
      el.oninput = (e) => {
        const { tidx, cidx, lidx } = e.target.dataset;
        tabs[tidx].categories[cidx].links[lidx].url = e.target.value;
      };
    });

    // Link Icon input with live preview
    container.querySelectorAll('.link-icon-input').forEach(el => {
      el.oninput = (e) => {
        const { tidx, cidx, lidx } = e.target.dataset;
        const iconVal = e.target.value.trim();
        tabs[tidx].categories[cidx].links[lidx].icon = iconVal;

        const preview = this.shadow.querySelector(`#icon-preview-${tidx}-${cidx}-${lidx}`);
        if (preview) {
          preview.className = `ti ti-${escapeHtml(iconVal || 'link')} icon-preview-display`;
        }
      };
    });

    // Link Colour input change listener
    container.querySelectorAll('.link-color-input').forEach(el => {
      el.onchange = (e) => {
        const { tidx, cidx, lidx } = e.target.dataset;
        const colKey = e.target.value.replace('palette.', '');
        const resolvedColour = CONFIG.palette[colKey] || e.target.value;
        tabs[tidx].categories[cidx].links[lidx].icon_color = resolvedColour;

        const preview = this.shadow.querySelector(`#icon-preview-${tidx}-${cidx}-${lidx}`);
        if (preview) preview.style.color = resolvedColour;
      };
    });

    // Add Link
    container.querySelectorAll('.btn-add-link').forEach(el => {
      el.onclick = (e) => {
        const btn = e.target.closest('.btn-add-link');
        const { tidx, cidx } = btn.dataset;
        if (!tabs[tidx].categories[cidx].links) tabs[tidx].categories[cidx].links = [];
        tabs[tidx].categories[cidx].links.push({
          name: 'New Link',
          url: 'https://',
          icon: 'link',
          icon_color: CONFIG.palette.blue,
        });
        this.renderBookmarksTree();
      };
    });

    // Delete Link
    container.querySelectorAll('.btn-del-link').forEach(el => {
      el.onclick = (e) => {
        const btn = e.target.closest('.btn-del-link');
        const { tidx, cidx, lidx } = btn.dataset;
        tabs[tidx].categories[cidx].links.splice(parseInt(lidx), 1);
        this.renderBookmarksTree();
      };
    });

    // Initialise custom dropdowns in bookmarks tree
    this.setupCustomDropdowns(container);
  }

  collectCurrentDraft() {
    const shadow = this.shadow;
    this.draftLight = shadow.querySelector('#gen-theme-light').value;
    this.draftDark = shadow.querySelector('#gen-theme-dark').value;
    this.draftConfig.fastlink = shadow.querySelector('#gen-fastlink').value.trim();

    if (!this.draftConfig.search) this.draftConfig.search = {};
    this.draftConfig.search.default = shadow.querySelector('#gen-search-default').value;

    // Disabled components array
    const disabled = [];
    if (!shadow.querySelector('#weather-enabled').checked) {
      disabled.push('weather-forecast');
    }
    if (!shadow.querySelector('#clock-enabled').checked) {
      disabled.push('current-time');
    }
    this.draftConfig.disabled = disabled;

    // Weather
    if (!this.draftConfig.temperature) this.draftConfig.temperature = {};
    this.draftConfig.temperature.location = shadow.querySelector('#weather-location').value.trim() || 'London';
    this.draftConfig.temperature.scale = shadow.querySelector('#weather-scale').value;
    this.draftConfig.temperature.appId = shadow.querySelector('#weather-appid').value.trim();

    // Clock
    if (!this.draftConfig.clock) this.draftConfig.clock = {};
    this.draftConfig.clock.format = shadow.querySelector('#clock-format').value;

    return this.draftConfig;
  }

  saveAndReload() {
    const configToSave = this.collectCurrentDraft();

    // Persist to localStorage with GUI priority flag
    localStorage.setItem('guiModified', 'true');
    localStorage.setItem('preferredLightTheme', this.draftLight);
    localStorage.setItem('preferredDarkTheme', this.draftDark);
    localStorage.setItem('configuration', JSON.stringify(configToSave));

    this.showToast('Saving settings and reloading...', 'info');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  exportJson() {
    const cfg = this.collectCurrentDraft();
    const exportData = {
      ...cfg,
      preferredLightTheme: this.draftLight,
      preferredDarkTheme: this.draftDark,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'catppuccin-startpage.config.json';
    link.click();
    URL.revokeObjectURL(url);

    this.showToast('JSON backup exported successfully!', 'success');
  }

  importConfig(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      try {
        let imported = null;
        if (file.name.endsWith('.json')) {
          imported = JSON.parse(text);
        } else {
          // Parse JS file
          const match = text.match(/default_configuration\s*=\s*(\{[\s\S]*?\n\};)/);
          if (match) {
            const rawObj = match[1].replace(/;\s*$/, '');
            imported = (new Function(`return ${rawObj}`))();
          } else {
            throw new Error('Unrecognised JS configuration file format.');
          }

          const lightMatch = text.match(/preferredLightTheme\s*=\s*([a-zA-Z]+);/);
          if (lightMatch) this.draftLight = lightMatch[1];
          const darkMatch = text.match(/preferredDarkTheme\s*=\s*([a-zA-Z]+);/);
          if (darkMatch) this.draftDark = darkMatch[1];
        }

        if (imported) {
          this.draftConfig = { ...this.draftConfig, ...imported };
          this.populateGeneralForm();
          this.populateWeatherClockForm();
          this.renderBookmarksTree();
          this.showToast('Configuration imported successfully!', 'success');
        }
      } catch (err) {
        this.showToast('Failed to read file: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  }

  async resetToDefault() {
    const confirmed = await this.showConfirmModal({
      title: 'Reset Configuration',
      message: 'Are you sure you want to clear saved browser settings and reset to the default userconfig.js?',
      confirmText: 'Reset Defaults',
      confirmType: 'danger',
    });

    if (confirmed) {
      localStorage.removeItem('configuration');
      localStorage.removeItem('guiModified');
      localStorage.removeItem('preferredLightTheme');
      localStorage.removeItem('preferredDarkTheme');
      this.showToast('Restoring defaults...', 'info');
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  toggleSidebar(forceState = null) {
    const shadow = this.shadow;
    const sidebar = shadow.querySelector('.modal-sidebar');
    const toggleBtn = shadow.querySelector('#btn-sidebar-toggle');
    const toggleIcon = shadow.querySelector('#sidebar-toggle-icon');
    const toggleLabel = shadow.querySelector('#sidebar-toggle-label');

    if (!sidebar) return;

    const isCurrentlyCompact = sidebar.classList.contains('compact');
    const shouldBeCompact = forceState !== null 
      ? forceState === 'compact'
      : !isCurrentlyCompact;

    if (shouldBeCompact) {
      sidebar.classList.add('compact');
      if (toggleBtn) toggleBtn.title = 'Expand sidebar (Full)';
      if (toggleIcon) toggleIcon.className = 'ti ti-layout-sidebar-left-expand';
      if (toggleLabel) toggleLabel.textContent = 'Expand';
      localStorage.setItem('settings_sidebar_state', 'compact');
    } else {
      sidebar.classList.remove('compact');
      if (toggleBtn) toggleBtn.title = 'Collapse sidebar (Compact)';
      if (toggleIcon) toggleIcon.className = 'ti ti-layout-sidebar-left-collapse';
      if (toggleLabel) toggleLabel.textContent = 'Collapse';
      localStorage.setItem('settings_sidebar_state', 'full');
    }
  }

  setupSidebarToggle() {
    const shadow = this.shadow;
    const toggleBtn = shadow.querySelector('#btn-sidebar-toggle');

    // Restore saved state from localStorage (default: full)
    const savedState = localStorage.getItem('settings_sidebar_state');
    if (savedState === 'compact') {
      this.toggleSidebar('compact');
    }

    if (toggleBtn) {
      toggleBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleSidebar();
      };
    }
  }

  setEvents() {
    const shadow = this.shadow;

    // Sidebar navigation panel toggle (Compact / Full)
    this.setupSidebarToggle();

    // Close buttons (X and footer Close) - only close via X or Esc
    this.refs.closeBtn.onclick = () => this.deactivate();
    this.refs.footerCloseBtn.onclick = () => this.deactivate();

    // Backdrop click does NOT close modal per user requirement
    this.refs.modal.onclick = (e) => {
      // Do nothing on backdrop click
    };
    this.refs.dialog.onclick = (e) => {
      e.stopPropagation();
    };

    // Prevent wheel/scroll events inside settings modal from propagating to document and triggering tab switches
    this.refs.modal.onwheel = (e) => {
      e.stopPropagation();
    };
    this.refs.dialog.onwheel = (e) => {
      e.stopPropagation();
    };

    // Sidebar navigation tabs
    const tabButtons = this.refs.tabButtons.length !== undefined ? this.refs.tabButtons : [this.refs.tabButtons];
    const tabPanels = this.refs.tabPanels.length !== undefined ? this.refs.tabPanels : [this.refs.tabPanels];

    tabButtons.forEach(btn => {
      btn.onclick = () => {
        this.closeAllDropdowns();
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const tabKey = btn.dataset.tab;
        const panel = shadow.querySelector(`#tab-${tabKey}`);
        if (panel) panel.classList.add('active');
      };
    });

    // Save button (footer)
    this.refs.saveBtn.onclick = () => this.saveAndReload();

    // Export JSON
    shadow.querySelector('#btn-export-json').onclick = () => this.exportJson();

    // Import file
    const fileInput = shadow.querySelector('#file-import-input');
    shadow.querySelector('#btn-trigger-import').onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
      if (e.target.files && e.target.files[0]) {
        this.importConfig(e.target.files[0]);
        fileInput.value = '';
      }
    };

    // Reset default
    shadow.querySelector('#btn-reset-default').onclick = () => this.resetToDefault();

    // Add Tab button
    shadow.querySelector('#btn-add-tab').onclick = () => {
      if (!this.draftConfig.tabs) this.draftConfig.tabs = [];
      const newIndex = this.draftConfig.tabs.length + 1;
      const bannerNum = String((newIndex % 18) || 1).padStart(2, '0');
      this.draftConfig.tabs.push({
        name: `tab_${newIndex}`,
        background_url: `src/img/banners/banner_${bannerNum}.gif`,
        categories: [
          {
            name: 'category',
            links: [
              { name: 'Example', url: 'https://catppuccin.com', icon: 'palette', icon_color: CONFIG.palette.blue },
            ],
          },
        ],
      });
      this.renderBookmarksTree();
      this.showToast('New tab added!', 'success');
    };

    // Add Additional Clock button
    shadow.querySelector('#btn-add-additional-clock').onclick = () => {
      if (!this.draftConfig.additionalClocks) this.draftConfig.additionalClocks = [];
      this.draftConfig.additionalClocks.push({
        label: 'UA',
        timezone: 'Europe/Kyiv',
        format: 'h:i',
      });
      this.renderAdditionalClocks();
    };

    // Weather & Clock widget visibility toggle switches
    const weatherSwitch = shadow.querySelector('#weather-enabled');
    const weatherControls = shadow.querySelector('#weather-controls');
    if (weatherSwitch && weatherControls) {
      weatherSwitch.onchange = () => {
        weatherControls.style.display = weatherSwitch.checked ? 'block' : 'none';
      };
    }

    const clockSwitch = shadow.querySelector('#clock-enabled');
    const clockControls = shadow.querySelector('#clock-controls');
    if (clockSwitch && clockControls) {
      clockSwitch.onchange = () => {
        clockControls.style.display = clockSwitch.checked ? 'block' : 'none';
      };
    }

    // Open Configure Engines modal
    const btnConfigEngines = shadow.querySelector('#btn-configure-engines');
    if (btnConfigEngines) {
      btnConfigEngines.onclick = () => this.openConfigureEnginesModal();
    }

    // Configure Engines modal close & done buttons
    const btnConfigClose = shadow.querySelector('#btn-config-engines-close');
    if (btnConfigClose) btnConfigClose.onclick = () => this.closeConfigureEnginesModal();

    const btnConfigDone = shadow.querySelector('#btn-config-engines-done');
    if (btnConfigDone) btnConfigDone.onclick = () => this.closeConfigureEnginesModal();

    // Close configure engines modal on backdrop click
    const configEnginesModal = shadow.querySelector('#configure-engines-modal');
    if (configEnginesModal) {
      configEnginesModal.onclick = (e) => {
        if (e.target === configEnginesModal) this.closeConfigureEnginesModal();
      };
    }

    // Open Add Engine modal
    const btnOpenAddEngine = shadow.querySelector('#btn-open-add-engine');
    if (btnOpenAddEngine) {
      btnOpenAddEngine.onclick = () => this.openEngineEditorModal('add');
    }

    // Engine Editor modal close, cancel & save buttons
    const btnEditorClose = shadow.querySelector('#btn-engine-editor-close');
    if (btnEditorClose) btnEditorClose.onclick = () => this.closeEngineEditorModal();

    const btnEditorCancel = shadow.querySelector('#btn-engine-editor-cancel');
    if (btnEditorCancel) btnEditorCancel.onclick = () => this.closeEngineEditorModal();

    const btnEditorSave = shadow.querySelector('#btn-engine-editor-save');
    if (btnEditorSave) btnEditorSave.onclick = () => this.saveEngineFromEditor();

    // Close engine editor modal on backdrop click
    const engineEditorModal = shadow.querySelector('#engine-editor-modal');
    if (engineEditorModal) {
      engineEditorModal.onclick = (e) => {
        if (e.target === engineEditorModal) this.closeEngineEditorModal();
      };
    }

    // Engine Icon input live preview
    const engineIconInput = shadow.querySelector('#engine-icon-input');
    const engineIconPreview = shadow.querySelector('#engine-icon-preview');
    if (engineIconInput && engineIconPreview) {
      engineIconInput.oninput = (e) => {
        const iconVal = e.target.value.trim().replace(/^(ti\s+ti-|ti-)/, '').trim() || 'adjustments-horizontal';
        engineIconPreview.className = `ti ti-${escapeHtml(iconVal)} icon-preview-display`;
      };
    }

    // Enter key shortcuts inside engine editor modal inputs
    ['#engine-key-input', '#engine-name-input', '#engine-url-input', '#engine-icon-input'].forEach(sel => {
      const el = shadow.querySelector(sel);
      if (el) {
        el.onkeydown = (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            this.saveEngineFromEditor();
          }
        };
      }
    });

    // Default search dropdown change listener on front page
    const defaultSearchInput = shadow.querySelector('#gen-search-default');
    if (defaultSearchInput) {
      defaultSearchInput.addEventListener('change', (e) => {
        this.draftConfig.search.default = e.target.value;
      });
    }

    // Close any open custom dropdown when clicking outside
    this.refs.modal.addEventListener('click', (e) => {
      if (!e.target.closest('.custom-dropdown')) {
        this.closeAllDropdowns();
      }
    });

    // Also close custom dropdowns if combobox input is focused
    const cityInput = shadow.querySelector('#weather-location');
    if (cityInput) {
      cityInput.addEventListener('focus', () => this.closeAllDropdowns());
    }

    // Initialise pure custom dropdowns
    this.setupCustomDropdowns();

    // Initialise searchable City combobox
    this.setupCityCombobox();
  }

  closeAllDropdowns(exceptWrap = null) {
    const shadow = this.shadow;
    shadow.querySelectorAll('.custom-dropdown.open').forEach(w => {
      if (w !== exceptWrap) {
        w.classList.remove('open');
        w.classList.remove('dropup');
        const trig = w.querySelector('.dropdown-trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
        w.querySelectorAll('.dropdown-item').forEach(it => it.classList.remove('highlighted'));
        const row = w.closest('.link-item-row');
        if (row) row.classList.remove('has-open-dropdown');
      }
    });
  }

  initCustomDropdown(wrap) {
    if (!wrap || wrap.dataset.dropdownReady === 'true') return;
    wrap.dataset.dropdownReady = 'true';

    const shadow = this.shadow;
    const id = wrap.dataset.id;
    const trigger = wrap.querySelector('.dropdown-trigger');
    const menu = wrap.querySelector('.dropdown-menu');
    const items = Array.from(wrap.querySelectorAll('.dropdown-item'));
    let highlightedIndex = -1;

    const updateHighlight = () => {
      items.forEach((it, idx) => {
        if (idx === highlightedIndex) {
          it.classList.add('highlighted');
          it.scrollIntoView({ block: 'nearest' });
        } else {
          it.classList.remove('highlighted');
        }
      });
    };

    const openMenu = () => {
      // Close city combobox dropdown if open
      const cityDropdown = shadow.querySelector('#city-combobox-dropdown');
      if (cityDropdown) cityDropdown.classList.remove('open');
      const cityToggle = shadow.querySelector('#combobox-toggle-btn');
      if (cityToggle) cityToggle.classList.remove('open');

      this.closeAllDropdowns(wrap);

      // Check available space below to decide if dropup is needed
      if (menu && this.refs.contentArea) {
        const wrapRect = wrap.getBoundingClientRect();
        const contentRect = this.refs.contentArea.getBoundingClientRect();
        const spaceBelow = contentRect.bottom - wrapRect.bottom;
        const spaceAbove = wrapRect.top - contentRect.top;
        if (spaceBelow < 220 && spaceAbove > spaceBelow) {
          wrap.classList.add('dropup');
        } else {
          wrap.classList.remove('dropup');
        }
      }

      wrap.classList.add('open');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      const row = wrap.closest('.link-item-row');
      if (row) row.classList.add('has-open-dropdown');

      const selIdx = items.findIndex(it => it.classList.contains('selected'));
      highlightedIndex = selIdx >= 0 ? selIdx : 0;
      updateHighlight();
    };

    const closeMenu = () => {
      wrap.classList.remove('open');
      wrap.classList.remove('dropup');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      items.forEach(it => it.classList.remove('highlighted'));
      highlightedIndex = -1;
      const row = wrap.closest('.link-item-row');
      if (row) row.classList.remove('has-open-dropdown');
    };

    const selectItem = (val) => {
      this.setDropdownValue(id, val);
      const input = wrap.querySelector(`#${id}`);
      if (input) {
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      closeMenu();
      if (trigger) trigger.focus();
    };

    if (trigger) {
      trigger.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (wrap.classList.contains('open')) {
          closeMenu();
        } else {
          openMenu();
        }
      };

      trigger.onkeydown = (e) => {
        const isOpen = wrap.classList.contains('open');

        if (!isOpen) {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openMenu();
            return;
          }
        }

        if (isOpen) {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (items.length > 0) {
              highlightedIndex = (highlightedIndex + 1) % items.length;
              updateHighlight();
            }
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (items.length > 0) {
              highlightedIndex = (highlightedIndex - 1 + items.length) % items.length;
              updateHighlight();
            }
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (highlightedIndex >= 0 && highlightedIndex < items.length) {
              selectItem(items[highlightedIndex].dataset.value);
            } else {
              closeMenu();
            }
          } else if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
          } else if (e.key === 'Tab') {
            closeMenu();
          }
        }
      };
    }

    items.forEach((item, idx) => {
      item.onmouseenter = () => {
        highlightedIndex = idx;
        items.forEach((it, i) => it.classList.toggle('highlighted', i === idx));
      };

      item.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectItem(item.dataset.value);
      };
    });
  }

  setupCustomDropdowns(root = this.shadow) {
    if (!root) return;
    const dropdownWrappers = root.querySelectorAll('.custom-dropdown');
    dropdownWrappers.forEach(wrap => this.initCustomDropdown(wrap));
  }

  setupCityCombobox() {
    const shadow = this.shadow;
    const wrapper = shadow.querySelector('#city-combobox-wrapper');
    const input = shadow.querySelector('#weather-location');
    const toggleBtn = shadow.querySelector('#combobox-toggle-btn');
    const clearBtn = shadow.querySelector('#combobox-clear-btn');
    const dropdown = shadow.querySelector('#city-combobox-dropdown');

    if (!wrapper || !input || !dropdown) return;

    let highlightedIndex = -1;
    let filteredResults = []; // array of { city, matchedAlias }

    const updateClearBtnVisibility = () => {
      if (clearBtn) {
        if (input.value.trim().length > 0) {
          clearBtn.classList.add('visible');
        } else {
          clearBtn.classList.remove('visible');
        }
      }
    };

    const highlightMatch = (text, query) => {
      if (!query) return escapeHtml(text);
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');
      return escapeHtml(text).replace(regex, '<span class="combobox-highlight">$1</span>');
    };

    const closeDropdown = () => {
      dropdown.classList.remove('open');
      if (toggleBtn) toggleBtn.classList.remove('open');
      highlightedIndex = -1;
    };

    const openDropdown = () => {
      // Close open custom dropdowns when combobox opens
      this.closeAllDropdowns();
      dropdown.classList.add('open');
      if (toggleBtn) toggleBtn.classList.add('open');
    };

    const renderDropdown = (results, query = '') => {
      filteredResults = results;
      highlightedIndex = -1;

      if (results.length === 0) {
        dropdown.innerHTML = `
          <div class="combobox-empty">
            <i class="ti ti-map-pin-off combobox-empty-icon"></i>
            <div>No predefined city matched.</div>
            <div style="font-size: 11px; margin-top: 4px; color: ${CONFIG.palette.subtext0};">
              Press Enter to use "<strong>${escapeHtml(input.value)}</strong>" as custom location.
            </div>
          </div>
        `;
        openDropdown();
        return;
      }

      const q = query.trim().toLowerCase();
      const currentVal = input.value.trim().toLowerCase();

      const headerHtml = `
        <div class="combobox-header">
          <span>${q ? 'Matching Cities' : 'Suggested Cities'} (${results.length})</span>
          <span class="combobox-nav-hint">↑↓ navigate • ↵ select</span>
        </div>
      `;

      const itemsHtml = results.map((item, idx) => {
        const { city, matchedAlias } = item;
        const isCurrent = city.name.toLowerCase() === currentVal;
        const highlightedName = highlightMatch(city.name, q);

        return `
          <div class="combobox-item ${isCurrent ? 'selected' : ''}" data-index="${idx}" data-name="${escapeHtml(city.name)}">
            <div class="combobox-item-name">
              <i class="ti ti-map-pin"></i>
              <span>${highlightedName}</span>
            </div>
            <div class="combobox-tags">
              ${matchedAlias && matchedAlias !== city.name.toLowerCase() ? `<span class="combobox-alias-badge">via alias "${escapeHtml(matchedAlias)}"</span>` : ''}
              <span class="combobox-item-country">${escapeHtml(city.country)}</span>
              ${isCurrent ? '<i class="ti ti-check combobox-item-check"></i>' : ''}
            </div>
          </div>
        `;
      }).join('');

      dropdown.innerHTML = headerHtml + itemsHtml;

      dropdown.querySelectorAll('.combobox-item').forEach(itemEl => {
        itemEl.onmousedown = (e) => {
          e.preventDefault();
          selectCity(itemEl.dataset.name);
        };
      });

      openDropdown();
    };

    const filterCities = (query) => {
      const q = (query || '').trim().toLowerCase();
      updateClearBtnVisibility();

      if (!q) {
        const defaultList = CITIES_DATABASE.slice(0, 35).map(c => ({ city: c, matchedAlias: null }));
        renderDropdown(defaultList, '');
        return;
      }

      const matches = [];
      for (const city of CITIES_DATABASE) {
        const nameLower = city.name.toLowerCase();
        const countryLower = city.country.toLowerCase();

        if (nameLower.includes(q)) {
          matches.push({ city, matchedAlias: null });
        } else if (countryLower.includes(q)) {
          matches.push({ city, matchedAlias: city.country });
        } else if (city.aliases) {
          const foundAlias = city.aliases.find(a => a.toLowerCase().includes(q));
          if (foundAlias) {
            matches.push({ city, matchedAlias: foundAlias });
          }
        }
      }

      renderDropdown(matches, q);
    };

    const selectCity = (cityName) => {
      input.value = cityName;
      updateClearBtnVisibility();
      closeDropdown();
      highlightedIndex = -1;
    };

    const updateHighlight = () => {
      const items = dropdown.querySelectorAll('.combobox-item');
      items.forEach((item, idx) => {
        if (idx === highlightedIndex) {
          item.classList.add('active');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.classList.remove('active');
        }
      });
    };

    input.onfocus = () => {
      filterCities(input.value);
    };

    input.oninput = () => {
      filterCities(input.value);
    };

    input.onkeydown = (e) => {
      if (!dropdown.classList.contains('open')) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          filterCities(input.value);
          e.preventDefault();
          return;
        }
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (filteredResults.length > 0) {
          highlightedIndex = (highlightedIndex + 1) % filteredResults.length;
          updateHighlight();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (filteredResults.length > 0) {
          highlightedIndex = (highlightedIndex - 1 + filteredResults.length) % filteredResults.length;
          updateHighlight();
        }
      } else if (e.key === 'Enter') {
        if (highlightedIndex >= 0 && highlightedIndex < filteredResults.length) {
          e.preventDefault();
          selectCity(filteredResults[highlightedIndex].city.name);
        } else {
          closeDropdown();
        }
      } else if (e.key === 'Escape') {
        closeDropdown();
        e.stopPropagation();
      }
    };

    input.onblur = () => {
      setTimeout(() => {
        closeDropdown();
      }, 150);
    };

    if (toggleBtn) {
      toggleBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (dropdown.classList.contains('open')) {
          closeDropdown();
        } else {
          input.focus();
          filterCities(input.value);
        }
      };
    }

    if (clearBtn) {
      clearBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        input.value = '';
        input.focus();
        filterCities('');
      };
    }

    // Initial check for clear button
    updateClearBtnVisibility();
  }

  connectedCallback() {
    this.render().then(() => {
      this.setEvents();
    });
  }
}

