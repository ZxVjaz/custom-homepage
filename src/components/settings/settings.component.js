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

// Settings modal component - hidden GUI settings for startpage configuration
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
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }

      #settings-modal.active {
        display: flex;
        opacity: 1;
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
        background: ${p.mantle};
        border-right: 1px solid ${p.surface0};
        padding: 16px 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        user-select: none;
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 11px 14px;
        border-radius: 8px;
        border: none;
        background: transparent;
        color: ${p.subtext0};
        font-size: 14px;
        cursor: pointer;
        text-align: left;
        width: 100%;
        transition: all 0.15s ease;
      }

      .nav-item i {
        font-size: 18px;
      }

      .nav-item:hover {
        background: ${p.surface0};
        color: ${p.text};
      }

      .nav-item.active {
        background: ${p.surface0};
        color: ${p.blue};
        font-weight: 500;
        box-shadow: inset 3px 0 0 ${p.blue};
      }

      .modal-content {
        flex: 1;
        padding: 24px 30px;
        overflow-y: auto;
        background: ${p.base};
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
      }
      .form-input:focus {
        border-color: ${p.blue};
        box-shadow: 0 0 0 3px ${p.blue}25;
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
        transition: all 0.15s ease;
        user-select: none;
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
        z-index: 100001;
        border-radius: 12px;
        animation: fadeIn 0.15s ease-in-out;
      }

      #confirm-modal.active {
        display: flex;
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

      /* Custom City Combobox */
      .combobox-wrapper {
  connectedCallback() {
    this.render();
  }
}
