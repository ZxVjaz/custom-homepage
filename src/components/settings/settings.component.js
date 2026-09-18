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
class Settings extends Component {
  constructor() {
    super();
  }
}
