# Turkana Tourism Website

A tourism platform showcasing Turkana County's attractions, hotels, historical sites, and recreational areas.

## Features
- Interactive Google Maps centered on Turkana
- Filter by: Hotels, Historical Sites, Recreation, Attractions
- Responsive design for mobile and desktop
- Revenue streams: Hotel bookings, tours, affiliate links

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Google Maps API Key
1. Go to: https://console.cloud.google.com/
2. Create a new project
3. Enable "Maps JavaScript API"
4. Create credentials (API Key)
5. Copy your API key

### 3. Add API Key
Open `public/index.html` and replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_KEY&callback=initMap" async defer></script>
```

### 4. Run Locally
```bash
npm run dev
```
Visit: http://localhost:3000

### 5. Test on Mobile (Cloudflare Tunnel)

Install Cloudflare Tunnel:
```bash
# Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/

# Or on Linux:
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

Run tunnel:
```bash
cloudflared tunnel --url http://localhost:3000
```

You'll get a public URL like: `https://xxxxx.trycloudflare.com` - use this on your mobile!

## Revenue Monetization

### Current Implementation:
1. **Booking.com Affiliate** - Link in "Book Hotels" section
2. **Tour Packages** - Contact form for inquiries
3. **Photo Gallery** - Placeholder for future content sales

### To Add More Revenue:
1. Sign up for Booking.com affiliate program
2. Replace booking link with your affiliate link
3. Add Google AdSense code to `index.html`
4. Create tour packages with pricing

## Locations Included
- Lake Turkana (UNESCO World Heritage)
- Koobi Fora Museum (Cradle of Mankind)
- Central Island National Park
- Eliye Springs Resort
- Lodwar Town
- And more!

## Next Steps
1. Get domain: turkana.com
2. Add more hotels and attractions
3. Integrate booking system
4. Add blog for SEO
5. Deploy to AWS Amplify or Lightsail

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Maps: Google Maps API
- Backend: Node.js + Express
- Hosting: Can deploy to AWS, Vercel, or Netlify
