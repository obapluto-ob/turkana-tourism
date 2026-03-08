// Turkana County tourist attractions with Wikimedia Commons images
const turkanaPlaces = [
    {
        name: "Lake Turkana (Jade Sea)",
        lat: 3.5983,
        lng: 36.0409,
        type: "attraction",
        description: "UNESCO World Heritage Site - World's largest permanent desert lake with stunning jade-green waters",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lake_Turkana_in_Kenya_01.jpg/400px-Lake_Turkana_in_Kenya_01.jpg"
    },
    {
        name: "Koobi Fora Museum",
        lat: 3.9500,
        lng: 36.1833,
        type: "historical",
        description: "Cradle of Mankind - Archaeological site with human fossils dating 1.5-4 million years",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Koobi_Fora_Spit.jpg/400px-Koobi_Fora_Spit.jpg"
    },
    {
        name: "Central Island National Park",
        lat: 3.5000,
        lng: 36.0333,
        type: "recreational",
        description: "Active volcanic island with crater lakes, home to world's largest Nile crocodile population",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Central_Island_-_Lake_Turkana.jpg/400px-Central_Island_-_Lake_Turkana.jpg"
    },
    {
        name: "South Island National Park",
        lat: 2.9833,
        lng: 36.0333,
        type: "recreational",
        description: "Volcanic island breeding ground for crocodiles and migratory birds",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/LakeTurkanaSouthIsland.jpg/400px-LakeTurkanaSouthIsland.jpg"
    },
    {
        name: "Eliye Springs Resort",
        lat: 3.2167,
        lng: 35.9333,
        type: "hotel",
        description: "Premier beach resort with natural hot springs on Lake Turkana's western shore",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Eliye_Springs%2C_Lake_Turkana.jpg/400px-Eliye_Springs%2C_Lake_Turkana.jpg"
    },
    {
        name: "Lodwar Town",
        lat: 3.1167,
        lng: 35.5833,
        type: "attraction",
        description: "Turkana County capital - Gateway to all tourist destinations with local markets",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lodwar_Town_Centre.jpg/400px-Lodwar_Town_Centre.jpg"
    },
    {
        name: "Turkana Basin Institute",
        lat: 3.9500,
        lng: 36.1800,
        type: "historical",
        description: "World-renowned research center for human evolution and paleontology studies",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Turkana_Basin_Institute_Turkwel.jpg/400px-Turkana_Basin_Institute_Turkwel.jpg"
    },
    {
        name: "Kalokol Fishing Village",
        lat: 3.4833,
        lng: 35.8667,
        type: "attraction",
        description: "Traditional fishing community with authentic Turkana culture and lake views",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fishing_boats_Lake_Turkana.jpg/400px-Fishing_boats_Lake_Turkana.jpg"
    },
    {
        name: "Loiyangalani Oasis",
        lat: 2.7667,
        lng: 36.7000,
        type: "attraction",
        description: "Desert oasis town on southeastern shore - Home to El Molo people",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Loiyangalani_town.jpg/400px-Loiyangalani_town.jpg"
    },
    {
        name: "Namoratunga Standing Stones",
        lat: 2.5000,
        lng: 36.5000,
        type: "historical",
        description: "Ancient megalithic site with 19 stone pillars - Astronomical calendar from 300 BC",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Namoratunga_II.jpg/400px-Namoratunga_II.jpg"
    },
    {
        name: "Desert Museum Loiyangalani",
        lat: 2.7650,
        lng: 36.7020,
        type: "historical",
        description: "Cultural museum showcasing Turkana, El Molo, Rendille and Samburu heritage",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Desert_Museum_Loiyangalani.jpg/400px-Desert_Museum_Loiyangalani.jpg"
    },
    {
        name: "Turkwel Gorge Dam",
        lat: 1.9167,
        lng: 35.3500,
        type: "recreational",
        description: "Spectacular gorge with Kenya's second largest hydroelectric dam and scenic landscapes",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Turkwel_Gorge_Dam.jpg/400px-Turkwel_Gorge_Dam.jpg"
    },
    {
        name: "Sibiloi National Park",
        lat: 4.0833,
        lng: 36.2500,
        type: "recreational",
        description: "Remote wilderness park with fossils, wildlife and stunning desert landscapes",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sibiloi_National_Park_landscape.jpg/400px-Sibiloi_National_Park_landscape.jpg"
    },
    {
        name: "Ferguson's Gulf",
        lat: 3.7500,
        lng: 36.1000,
        type: "recreational",
        description: "Prime fishing spot and bird watching area on Lake Turkana's eastern shore"
    },
    {
        name: "Kerio River Delta",
        lat: 2.3500,
        lng: 36.0500,
        type: "recreational",
        description: "Lush delta where Kerio River meets Lake Turkana - Bird paradise"
    },
    {
        name: "Turkana Cultural Centre",
        lat: 3.1200,
        lng: 35.5900,
        type: "historical",
        description: "Experience authentic Turkana culture, traditional dances and crafts in Lodwar"
    },
    {
        name: "Nabuyatom Crater",
        lat: 2.0500,
        lng: 36.4500,
        type: "attraction",
        description: "Extinct volcanic crater with unique geological formations"
    },
    {
        name: "Lake Turkana Lodges",
        lat: 2.7700,
        lng: 36.7100,
        type: "hotel",
        description: "Comfortable lodging facilities near Loiyangalani with lake views"
    },
    {
        name: "Lothagam Archaeological Site",
        lat: 2.6500,
        lng: 35.9500,
        type: "historical",
        description: "Ancient site with fossils and evidence of early human settlements"
    },
    {
        name: "Turkana Boy Site",
        lat: 3.9400,
        lng: 36.1900,
        type: "historical",
        description: "Discovery site of the famous 1.6 million year old Homo erectus skeleton"
    },
    {
        name: "Mount Porr",
        lat: 3.0000,
        lng: 35.3000,
        type: "recreational",
        description: "Scenic mountain offering hiking and panoramic views of Turkana landscape"
    },
    {
        name: "Lokitaung Gorge",
        lat: 4.2500,
        lng: 35.7500,
        type: "recreational",
        description: "Dramatic gorge with stunning rock formations and desert scenery"
    },
    {
        name: "Kaputir Mountains",
        lat: 1.7500,
        lng: 35.5000,
        type: "recreational",
        description: "Mountain range with hiking trails and traditional Turkana villages"
    },
    {
        name: "Turkana Traditional Village",
        lat: 3.1500,
        lng: 35.6500,
        type: "attraction",
        description: "Authentic Turkana village experience with traditional manyattas and cultural activities"
    },
    {
        name: "Katilu Hot Springs",
        lat: 3.3000,
        lng: 35.8000,
        type: "recreational",
        description: "Natural hot springs with therapeutic waters in scenic desert setting"
    },
    {
        name: "Turkana Wind Power Station",
        lat: 2.6000,
        lng: 36.8000,
        type: "attraction",
        description: "Africa's largest wind farm - Engineering marvel in the desert"
    },
    {
        name: "Nariokotome Site",
        lat: 3.9300,
        lng: 36.1700,
        type: "historical",
        description: "Famous paleontological site where Turkana Boy was discovered"
    },
    {
        name: "Lobolo Campsite",
        lat: 3.2500,
        lng: 35.9500,
        type: "hotel",
        description: "Eco-friendly camping site on Lake Turkana shores with beach access"
    },
    {
        name: "Turkana Fishing Camps",
        lat: 3.6000,
        lng: 36.0500,
        type: "recreational",
        description: "Traditional fishing camps offering authentic lake fishing experiences"
    },
    {
        name: "Lokori Trading Centre",
        lat: 2.5500,
        lng: 35.7500,
        type: "attraction",
        description: "Bustling local market showcasing Turkana crafts and traditional goods"
    }
];

let map;
let markers = [];
let currentFilter = 'all';

const PEXELS_API_KEY = 'GTPMdTHlpRE3XZlrfm9CrOcqDNSwxZXDtMFPA9TXwdr4nmSUpiPh55gS';
const imageCache = {};

async function getPlaceholderImage(type, name) {
    // Check cache first
    if (imageCache[name]) {
        return imageCache[name];
    }

    // Better search queries for each location
    const specificQueries = {
        'Lake Turkana': ['lake turkana kenya', 'jade sea kenya', 'desert lake africa'],
        'Koobi Fora': ['fossil site kenya', 'archaeological dig africa', 'paleontology site'],
        'Central Island': ['volcanic island lake', 'crater island', 'island volcano'],
        'South Island': ['kenya island wildlife', 'crocodile habitat', 'lake island'],
        'Eliye Springs': ['beach resort kenya', 'lake beach africa', 'resort waterfront'],
        'Lodwar': ['kenya town', 'african market town', 'desert town kenya'],
        'Turkana Basin': ['research station africa', 'scientific facility kenya', 'desert research'],
        'Kalokol': ['fishing village africa', 'lakeside village kenya', 'traditional fishing'],
        'Loiyangalani': ['oasis town africa', 'desert oasis kenya', 'palm trees desert'],
        'Namoratunga': ['standing stones africa', 'ancient stones kenya', 'megalithic site'],
        'Desert Museum': ['african museum', 'cultural museum kenya', 'heritage center'],
        'Turkwel Gorge': ['dam kenya', 'gorge canyon africa', 'hydroelectric dam'],
        'Sibiloi': ['national park kenya', 'wildlife park africa', 'savanna landscape'],
        'Ferguson': ['fishing area kenya', 'lake shore africa', 'waterfront kenya'],
        'Kerio': ['river delta africa', 'wetland kenya', 'river mouth'],
        'Cultural Centre': ['traditional dance kenya', 'african culture', 'tribal village'],
        'Nabuyatom': ['volcanic crater', 'extinct volcano africa', 'crater landscape'],
        'Lodges': ['safari lodge kenya', 'eco lodge africa', 'tourist accommodation'],
        'Lothagam': ['fossil site', 'excavation site africa', 'ancient ruins'],
        'Turkana Boy': ['fossil discovery', 'human evolution site', 'anthropology'],
        'Mount Porr': ['mountain kenya', 'hiking trail africa', 'mountain landscape'],
        'Lokitaung': ['gorge kenya', 'rock formations africa', 'canyon landscape'],
        'Kaputir': ['mountain range kenya', 'highlands africa', 'mountain village'],
        'Traditional Village': ['turkana people', 'african village huts', 'tribal settlement'],
        'Katilu': ['hot springs', 'thermal springs africa', 'natural springs'],
        'Wind Power': ['wind turbines', 'wind farm africa', 'renewable energy'],
        'Nariokotome': ['archaeological site', 'excavation kenya', 'fossil site'],
        'Lobolo': ['campsite kenya', 'lakeside camping', 'beach camp'],
        'Fishing Camps': ['fishing boats africa', 'traditional fishing', 'fishermen kenya'],
        'Lokori': ['market kenya', 'trading center africa', 'local market']
    };

    // Find matching query
    let queries = ['kenya landscape', 'africa nature', 'east africa'];
    for (const [key, value] of Object.entries(specificQueries)) {
        if (name.includes(key)) {
            queries = value;
            break;
        }
    }

    // Try each query with random page
    for (const query of queries) {
        try {
            const randomPage = Math.floor(Math.random() * 3) + 1;
            const randomPerPage = Math.floor(Math.random() * 5) + 1;
            const searchQuery = encodeURIComponent(query);
            const response = await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${randomPerPage}&page=${randomPage}`, {
                headers: {
                    'Authorization': PEXELS_API_KEY
                }
            });
            
            const data = await response.json();
            
            if (data.photos && data.photos.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.photos.length);
                const imageUrl = data.photos[randomIndex].src.medium;
                imageCache[name] = imageUrl;
                return imageUrl;
            }
        } catch (error) {
            console.log('Pexels search failed for:', query);
        }
    }

    // Final fallback - use location name as text overlay
    const fallbackImages = [
        'https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400'
    ];
    
    const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    imageCache[name] = randomFallback;
    return randomFallback;
}

async function initMap() {
    // Initialize Leaflet map centered on Turkana
    map = L.map('map').setView([3.1167, 35.8833], 8);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Add markers for all places
    turkanaPlaces.forEach(place => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: ${getMarkerColor(place.type)}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
            iconSize: [30, 30]
        });

        const marker = L.marker([place.lat, place.lng], { icon })
            .bindPopup(`
                <div style="max-width: 250px;">
                    <h3 style="color: #1e3c72; margin-bottom: 10px; font-size: 16px;">${place.name}</h3>
                    <p style="margin-bottom: 10px; font-size: 14px;">${place.description}</p>
                    <span style="background: #ff6b35; color: white; padding: 5px 10px; border-radius: 10px; font-size: 12px;">
                        ${place.type.toUpperCase()}
                    </span>
                </div>
            `)
            .addTo(map);

        marker.placeType = place.type;
        markers.push(marker);
    });

    populateAttractions();
}

function getMarkerColor(type) {
    const colors = {
        hotel: '#4285F4',
        historical: '#FBBC04',
        recreational: '#34A853',
        attraction: '#EA4335'
    };
    return colors[type] || colors.attraction;
}

function filterMarkers(type) {
    currentFilter = type;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    markers.forEach(marker => {
        if (type === 'all' || marker.placeType === type) {
            marker.addTo(map);
        } else {
            map.removeLayer(marker);
        }
    });

    populateAttractions();
}

function populateAttractions() {
    const container = document.getElementById('attractions-list');
    container.innerHTML = '';

    const filtered = currentFilter === 'all' 
        ? turkanaPlaces 
        : turkanaPlaces.filter(p => p.type === currentFilter);

    filtered.forEach(place => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.setAttribute('data-type', place.type);
        
        // Create mini map preview using OpenStreetMap static tiles
        const zoom = 10;
        const mapUrl = `https://tile.openstreetmap.org/${zoom}/${lon2tile(place.lng, zoom)}/${lat2tile(place.lat, zoom)}.png`;
        
        card.innerHTML = `
            ${place.image ? `<div class="attraction-image" style="background: url('${place.image}') center/cover no-repeat;"></div>` : `<div class="attraction-map-preview"></div>`}
            <div class="attraction-info">
                <div class="location-badge" style="background: ${getMarkerColor(place.type)}">
                    <span>📍 ${place.lat.toFixed(4)}°, ${place.lng.toFixed(4)}°</span>
                </div>
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <span class="attraction-type">${place.type}</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            map.setView([place.lat, place.lng], 12);
            document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
        });

        container.appendChild(card);
    });
}

function lon2tile(lon, zoom) {
    return Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
}

function lat2tile(lat, zoom) {
    return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
}

// Initialize map when page loads
window.addEventListener('load', initMap);

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
});
