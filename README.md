# Dezire Decore - Decoration & Event Planner 🎈✨

Official responsive business website and verified business data repository for **Dezire Decore - Decoration & Event Planner**, based in Ghaziabad, Uttar Pradesh, serving Delhi-NCR.

🌐 **Live Website (GitHub Pages):** [https://abhi266raj.github.io/dezire-decore/](https://abhi266raj.github.io/dezire-decore/)  
🖼️ **Dedicated Photo Gallery:** [https://abhi266raj.github.io/dezire-decore/gallery.html](https://abhi266raj.github.io/dezire-decore/gallery.html)  
📍 **Google Maps Profile & Reviews:** [Dezire Decore on Google Maps](https://www.google.com/maps/place/Dezire+Decore+-+Decoration+%26+Event+Planner/@28.6676137,77.4800782,17z/data=!4m8!3m7!1s0x390cf3f0faf988bb:0xb8de77d788648f0a!8m2!3d28.6676137!4d77.4800782!9m1!1b1!16s%2Fg%2F11ydsvkggp)  
🚗 **Google Maps Turn-by-Turn Directions:** [Get Directions to Office](https://www.google.com/maps/dir//28.6676137,77.4800782/@28.6676137,77.4800782,15z)  
📱 **Official Facebook Page & Reels:** [Dezire Decore Facebook Reels Tab](https://www.facebook.com/profile.php?id=61586389556980&sk=reels_tab)

---

## 🏢 Verified Information Sources

All details and offerings are cross-verified directly with the Google Maps business listing and the official Facebook page (`id=61586389556980`):

- **Business Name:** Dezire Decore - Decoration & Event Planner
- **Category:** Event Planner / Balloon Decoration & Party Stylist
- **Official Facebook Page:** [https://www.facebook.com/profile.php?id=61586389556980](https://www.facebook.com/profile.php?id=61586389556980)
- **Official Logo:** Extracted directly from Facebook page (`assets/images/facebook-logo.jpg`)
- **Real Event Photos:** Crawled directly from Facebook video reels (`assets/images/reels/reel-1.jpg` to `reel-10.jpg`)
- **Direct Event Reel Links:** Every service card links directly to its specific video reel URL on Facebook.
- **Registered Google Maps Address:** Second Floor, Krishna Tanushree Kunj, Plot R1, Near Mahagunpuram, Raispur, Ghaziabad, Uttar Pradesh — 201002
- **Branch Office:** F-39, Arora Shoppers Park, Shakti Khand II, Indirapuram, Ghaziabad, UP — 201014
- **Coordinates:** `28.6676137° N, 77.4800782° E`
- **Place CID:** `13321151609355177738`
- **Phone Lines:** `+91 82797 31933` / `+91 95553 13027`
- **WhatsApp Contact Link:** [https://wa.me/918279731933](https://wa.me/918279731933) (All "Contact Us" actions directly launch WhatsApp)
- **Coverage Area:** Delhi-NCR (Ghaziabad, Mahagunpuram, Indirapuram, Crossings Republik, Raj Nagar Extension, Siddharth Vihar, Noida)

---

## 🎈 Verified Services (From Facebook Page Bio & Google Maps)

1. **Balloon Decoration** (Direct Reel: [Watch on Facebook](https://www.facebook.com/reel/1395880162570768/))
2. **Flower Decoration** (Direct Reel: [Watch on Facebook](https://www.facebook.com/reel/1449663507112205/))
3. **Birthday Party Decoration** (Direct Reel: [Watch on Facebook](https://www.facebook.com/reel/39425234773787886/))
4. **Anniversary & Romantic Surprises** (Direct Reel: [Watch on Facebook](https://www.facebook.com/reel/1778955269817385/))
5. **Baby Shower & Welcome Baby** (Direct Reel: [Watch on Facebook](https://www.facebook.com/reel/2816737288698868/))
6. **Haldi & Traditional Functions** (Direct Reel: [Watch on Facebook](https://www.facebook.com/reel/1611335570597093/))

---

## 🌟 Key Features

- **No Hardcoded Review Numbers:** Generic Google Maps review integration linking directly to live reviews and ratings.
- **No Unverified Event Setups:** Removed arbitrary setup tiers.
- **Direct Reel Links:** Rather than a generic profile link, event cards link directly to specific Facebook reels.
- **WhatsApp-First Contact:** Every contact action opens direct WhatsApp communication.
- **100% Crawled Authentic Visuals:** Only real event photos and reel thumbnails crawled directly from official Facebook Reels and Google Maps client reviews.
- **Ultra-Fast Loading Gallery & Lightbox:** Dual-tier image pipeline (`thumb-*.jpg` under 35KB each for instant grid rendering, lazy-loaded; `item-*.jpg` loaded only on clicking an image into the fast lightbox viewer).
- **Dedicated Gallery Page:** Independent `gallery.html` with instant category filtering.
- **Live Google Maps Embed:** Centered at coordinates `28.6676137, 77.4800782`.

---

## 📁 Repository Structure

```
.
├── index.html           # Main semantic landing page with verified details, direct reel links & gallery preview
├── gallery.html         # Dedicated standalone event decor gallery with category filters & lightbox
├── styles.css           # Responsive modern styling with Facebook logo, reel cards, gallery grid & lightbox
├── script.js            # Client logic for mobile nav, category filters, fast lightbox modal & WhatsApp booking
├── business_data.json   # Machine-readable verified profile data and crawled direct reels
├── assets/
│   └── images/
│       ├── facebook-logo.jpg      # Official logo fetched from Facebook page
│       ├── reels/                 # Real event thumbnails crawled from Facebook reels (reel-1.jpg to reel-10.jpg)
│       └── gallery/               # Dual-tier optimized gallery assets (item-*.jpg full & thumb-*.jpg fast thumbs)
└── README.md            # Verified business documentation and links
```

---

## 🚀 Running Locally

```bash
# Python 3
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000
```
