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
            <div class="modal-sidebar">
              <button class="nav-item active" data-tab="general">
                <i class="ti ti-adjustments"></i>
                <span>General</span>
              </button>
              <button class="nav-item" data-tab="weather-clock">
                <i class="ti ti-clock-hour-4"></i>
                <span>Weather & Clock</span>
              </button>
              <button class="nav-item" data-tab="bookmarks">
                <i class="ti ti-bookmarks"></i>
                <span>Bookmarks Editor</span>
              </button>
              <button class="nav-item" data-tab="backup">
                <i class="ti ti-database"></i>
                <span>Backup & Sync</span>
              </button>
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
                  <div class="form-group">
                    <label class="form-label">Default Search Engine</label>
                    <div class="custom-dropdown" data-id="gen-search-default">
                      <input type="hidden" id="gen-search-default" value="d">
                      <button type="button" class="dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                        <span class="dropdown-selected-content">
                          <i class="ti ti-shield-check dropdown-icon"></i>
                          <span>DuckDuckGo</span>
                        </span>
                        <i class="ti ti-chevron-down dropdown-arrow"></i>
                      </button>
                      <div class="dropdown-menu">
                        <div class="dropdown-item selected" data-value="d">
                          <div class="dropdown-item-left">
                            <i class="ti ti-shield-check dropdown-icon"></i>
                            <span>DuckDuckGo</span>
                          </div>
                          <div class="dropdown-item-right">
                            <span class="dropdown-badge">!d</span>
                            <i class="ti ti-check dropdown-check"></i>
                          </div>
                        </div>
                        <div class="dropdown-item" data-value="g">
                          <div class="dropdown-item-left">
                            <i class="ti ti-brand-google dropdown-icon"></i>
                            <span>Google</span>
                          </div>
                          <div class="dropdown-item-right">
                            <span class="dropdown-badge">!g</span>
                            <i class="ti ti-check dropdown-check"></i>
                          </div>
                        </div>
                        <div class="dropdown-item" data-value="p">
                          <div class="dropdown-item-left">
                            <i class="ti ti-sparkles dropdown-icon"></i>
                            <span>PerplexityAI</span>
                          </div>
                          <div class="dropdown-item-right">
                            <span class="dropdown-badge">!p</span>
                            <i class="ti ti-check dropdown-check"></i>
                          </div>
                        </div>
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
}
