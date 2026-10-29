# AAYAM Innovation — Official Website

> **“Smart Apps. Simple Tools. Better Everyday Work.”**  
> Official static portal for AAYAM Innovation, showcasing Android applications and free, privacy-first client-side web utilities.

---

## 🌟 Overview

The **AAYAM Innovation** website is a lightweight, responsive, and secure static web application built using **HTML5, CSS3, and modern Vanilla JavaScript**. It is engineered specifically for instantaneous local browser execution and seamless zero-configuration deployment to **Cloudflare Pages**.

### Core Highlights
- 📱 **Mobile Application Suite:** Displays 10 purposeful Android applications with categorized filtering and authentic Play Store status indicators.
- 🛠️ **Client-Side Productivity Tools:** Instant image conversion, resizing, compression, PDF generation, and text case manipulation running 100% locally in browser memory.
- 🔒 **Privacy-First Guarantee:** Zero files, photos, or documents are ever uploaded to remote servers. All active tools operate via native HTML5 Canvas, Blob, and client-side JavaScript APIs.
- 🎨 **Premium Shaded Office Theme:** Coordinated, subtle background shades per section (Hero: soft ice-blue with blue-to-lavender tint; Online Tools: light blue-gray `#F1F5F9`; Android Apps: pale blue with lavender tint; Why Us: warm light blue-gray; About: lavender-blue; Contact: pale blue; Footer: deep navy `#0B0F19`), translucent tilted document paper background decorations (Word docs, spreadsheets, folded-corner PDF sheets), and elevated paper cards.
- ⚡ **No Framework Overheads:** Pure HTML/CSS/JS with zero npm build step, zero backend server requirement, and zero subscription paywalls.

---

## 📁 File Structure

```
AAYAM-Innovation-Website/
├── assets/
│   └── branding/
│       ├── aayam-logo-original.png   # Authentic original brand reference
│       ├── aayam-wordmark-dark.png   # Transparent dark wordmark for light header
│       ├── aayam-wordmark-white.png  # Transparent white wordmark for dark footer
│       ├── favicon.svg               # Vector brand chevron favicon
│       └── favicon.png               # High-DPI raster brand favicon
├── index.html                        # Main semantic HTML structure & accessible layout
├── style.css                         # Custom responsive stylesheet & design system
├── script.js                         # Interactive tools, app configuration & modal engine
└── README.md                         # Documentation & deployment guide
```

---

## 🛠️ Free Online Productivity Tools Status

Positioned prominently above Android Apps for rapid browser access. All active tools run **100% locally in browser memory** without server uploads.

| # | Tool Name | Status | Processing Mechanism |
|---|---|---|---|
| 1 | **Text Case Converter** | ✅ **Active Tool** | Client-side JS (Upper, Lower, Title, Sentence, camelCase, PascalCase, snake_case, kebab-case, whitespace cleaner, live counters, copy & `.txt` download) |
| 2 | **JPG to PNG** | ✅ **Active Tool** | Client-side HTML5 Canvas lossless PNG blob export |
| 3 | **PNG to JPG** | ✅ **Active Tool** | Client-side HTML5 Canvas with custom background fill & quality slider |
| 4 | **Image Resizer** | ✅ **Active Tool** | Client-side Canvas with width/height scaling, aspect ratio lock & presets |
| 5 | **Image Compressor** | ✅ **Active Tool** | Client-side JPEG/WebP quality compressor with live byte savings calculation |
| 6 | **Image to PDF** | ✅ **Active Tool** | Self-contained, dependency-free client-side PDF 1.4 synthesizer |
| 7 | **Word to PDF** | ⏳ *In Development* | Client-side DOCX parser in active engineering |
| 8 | **Excel to PDF** | ⏳ *In Development* | Client-side spreadsheet engine in progress |
| 9 | **PDF to Images** | ⏳ *In Development* | Client-side page renderer via WebAssembly in development |
| 10 | **Merge PDF** | ⏳ *In Development* | Client-side concatenation engine in development |
| 11 | **Split PDF** | ⏳ *In Development* | Client-side page extractor in development |
| 12 | **Compress PDF** | ⏳ *In Development* | Raster stream optimizer in development |

> 🛡️ **Zero-Deception Guarantee:** Tools marked *In Development* open an informative development notice modal. The site never fakes progress bars or pretends an unsupported conversion succeeded.

---

## 📱 Android Applications Catalog

All 10 applications are centralized inside `script.js` in the `APPS_CONFIG` array:

| # | Application Name | Category | Current Status | Description |
|---|---|---|---|---|
| 1 | **AAYAM Office Pro** | Productivity | In Development | Mobile document suite with advanced editor, spreadsheet viewer & presentation tools |
| 2 | **AAYAM Logo Maker** | Creative & Media | In Development | Vector logo design & watermark creator |
| 3 | **AAYAM OCR** | Utility | In Development | Optical character recognition & text extractor |
| 4 | **AAYAM Office Lite** | Productivity | In Development | Fast, low-memory document & spreadsheet reader |
| 5 | **AAYAM Scanner** | Utility | In Development | Pocket document scanner with auto edge-detection |
| 6 | **AAYAM Snap Studio** | Creative & Media | In Development | Photo filter studio, retouching & collage maker |
| 7 | **AAYAM Ringtone Maker** | Creative & Media | In Development | Waveform audio trimmer & custom ringtone editor |
| 8 | **AAYAM Video Editor** | Creative & Media | In Development | Video cutter, transitions, aspect resizer & mixer |
| 9 | **AAYAMSkyMap** | Specialized | In Development | Real-time celestial star and constellation tracker |
| 10 | **Meri Mandi Mera Bhav** | Specialized | In Development | APMC agricultural commodity rates & price trends |

### 🔧 How to Add Google Play Store URLs Later
Open `script.js` and locate `APPS_CONFIG`. When an app is published and verified on Google Play:
```javascript
// BEFORE (Unverified):
{
  id: 'aayam-office-pro',
  name: 'AAYAM Office Pro',
  ...
  playStoreUrl: null, // Shows non-clickable "Link coming soon"
}

// AFTER (Live on Google Play):
{
  id: 'aayam-office-pro',
  name: 'AAYAM Office Pro',
  ...
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aayam.officepro',
}
```
*The website will automatically switch the card badge to **“● Google Play Live”** and render an active **“View App →”** button.*

---

## 💻 How to Preview Locally on Your PC

You can preview the website instantly using any of these standard methods:

### Method 1: Direct File Open (Easiest)
1. Open File Explorer and navigate to:  
   `C:\Users\kumar\.gemini\antigravity\scratch\AAYAM-Innovation-Website`
2. Double-click **`index.html`** to launch it directly in your default browser (Chrome, Edge, Firefox, Brave).

### Method 2: Python Local Server
Open PowerShell in the project directory:
```powershell
cd C:\Users\kumar\.gemini\antigravity\scratch\AAYAM-Innovation-Website
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Method 3: VS Code / Live Server Extension
1. Open the folder in VS Code or your preferred editor.
2. Right-click `index.html` and select **“Open with Live Server”**.

---

## 🚀 Deployment Guide: GitHub & Cloudflare Pages

### Step 1: Push to your existing GitHub Repository (`aayamininnovations-oss/aayam-innovation`)
Open PowerShell and run:

```powershell
# Navigate into the project folder
cd C:\Users\kumar\.gemini\antigravity\scratch\AAYAM-Innovation-Website

# Initialize git if not already initialized
git init

# Add all project files
git add .

# Create initial commit
git commit -m "Initial release of AAYAM Innovation official website"

# Rename branch to main
git branch -M main

# Link to your existing repository
git remote add origin https://github.com/aayamininnovations-oss/aayam-innovation.git

# Push changes
git push -u origin main
```
*(If the remote repository already contains an initial commit or README, run `git pull origin main --rebase` before pushing).*

---

### Step 2: Deploy to Cloudflare Pages (Free & Fast)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation menu, click **Workers & Pages** → **Create application** → **Pages** tab.
3. Click **Connect to Git** and authorize your GitHub account.
4. Select the repository: **`aayamininnovations-oss/aayam-innovation`**.
5. Configure the build settings:
   - **Project Name:** `aayam-innovation` (or your preferred name)
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` *(or leave empty)*
6. Click **Save and Deploy**.

Within seconds, Cloudflare Pages will build and issue your live URL (e.g., `https://aayam-innovation.pages.dev`). You can also attach your custom domain anytime under **Custom Domains**.

---

## 📄 License & Attribution

Designed and developed for **AAYAM Innovation**.  
All rights reserved © 2026.
