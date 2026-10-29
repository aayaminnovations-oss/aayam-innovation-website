/**
 * ===================================================================
 * AAYAM INNOVATION — OFFICIAL APPLICATION SCRIPT
 * Version: 2.0.0 — Premium Office UI Upgrade
 * Architecture: Vanilla JavaScript, modular configuration & client-side tools
 * ===================================================================
 */

(function () {
  'use strict';

  /* =================================================================
     1. ANDROID APPLICATIONS CONFIGURATION
     Central store for all apps with professional vector SVG icons.
     NOTE FOR OWNER: To activate an app once live on the Google Play Store,
     simply replace null with the verified URL string:
     e.g., playStoreUrl: "https://play.google.com/store/apps/details?id=com.aayam.officepro"
     ================================================================= */
  const APPS_CONFIG = [
    {
      id: 'aayam-office-pro',
      name: 'AAYAM Office Pro',
      category: 'Productivity',
      tagline: 'Professional mobile document suite with advanced editor, spreadsheet viewer, and presentation tools.',
      features: ['Full DOCX & XLSX editing', 'Offline document protection', 'Cloud sync export support'],
      playStoreUrl: null, // Replace null with verified Play Store URL when available
      iconColor: '#1d4ed8',
      iconBg: '#eff6ff',
      iconBorder: '#bfdbfe',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <path d="M14 2V8H20"></path>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="8" y1="15" x2="13" y2="15"></line>
          <path d="M14 18V16M16 18V14M18 18V17"></path>
        </svg>
      `
    },
    {
      id: 'aayam-logo-maker',
      name: 'AAYAM Logo Maker',
      category: 'Media',
      tagline: 'Craft high-resolution vector brand marks, digital signatures, and watermarks on your phone.',
      features: ['500+ vector graphic templates', 'Transparent PNG & SVG export', 'Custom typography controls'],
      playStoreUrl: null,
      iconColor: '#7c3aed',
      iconBg: '#f5f3ff',
      iconBorder: '#ddd6fe',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L19 9L14 14L10 10L12 2Z"></path>
          <path d="M10 10L5 15L3 21L9 19L14 14"></path>
          <circle cx="12" cy="12" r="1.5" fill="#7c3aed"></circle>
          <circle cx="19" cy="9" r="1"></circle>
          <circle cx="5" cy="15" r="1"></circle>
        </svg>
      `
    },
    {
      id: 'aayam-ocr',
      name: 'AAYAM OCR',
      category: 'Utility',
      tagline: 'Optical character recognition engine to scan, extract, and copy text from printed sheets and photos.',
      features: ['High-accuracy text extraction', 'Multi-language recognition', 'Direct copy & TXT export'],
      playStoreUrl: null,
      iconColor: '#0284c7',
      iconBg: '#f0f9ff',
      iconBorder: '#bae6fd',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7V4C3 3.4 3.4 3 4 3H7"></path>
          <path d="M17 3H20C20.6 3 21 3.4 21 4V7"></path>
          <path d="M21 17V20C21 20.6 20.6 21 20 21H17"></path>
          <path d="M7 21H4C3.4 21 3 20.6 3 20V17"></path>
          <line x1="7" y1="8" x2="17" y2="8"></line>
          <line x1="7" y1="12" x2="14" y2="12"></line>
          <line x1="7" y1="16" x2="16" y2="16"></line>
          <line x1="2" y1="12" x2="22" y2="12" stroke-width="2"></line>
        </svg>
      `
    },
    {
      id: 'aayam-office-lite',
      name: 'AAYAM Office Lite',
      category: 'Productivity',
      tagline: 'Streamlined, low-memory reader for documents, spreadsheets, and PDFs optimized for speed.',
      features: ['Under 15MB app footprint', 'Near-instant launch time', 'Battery friendly backgrounding'],
      playStoreUrl: null,
      iconColor: '#2563eb',
      iconBg: '#eff6ff',
      iconBorder: '#bfdbfe',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V9L13 2Z"></path>
          <path d="M13 2V9H20"></path>
          <polygon points="12 11 9 16 13 16 11 21 16 14 12 14 12 11" fill="#2563eb"></polygon>
        </svg>
      `
    },
    {
      id: 'aayam-scanner',
      name: 'AAYAM Scanner',
      category: 'Utility',
      tagline: 'Document camera scanner with automatic border detection, perspective flattening, and PDF export.',
      features: ['Auto edge-detection', 'Sharpen & contrast filters', 'Multi-page batch scanning'],
      playStoreUrl: null,
      iconColor: '#0369a1',
      iconBg: '#f0f9ff',
      iconBorder: '#bae6fd',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0369a1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <line x1="4" y1="10" x2="20" y2="10"></line>
          <circle cx="8" cy="7" r="1" fill="#0369a1"></circle>
          <path d="M7 14L10 12L13 15L17 12"></path>
        </svg>
      `
    },
    {
      id: 'aayam-snap-studio',
      name: 'AAYAM Snap Studio',
      category: 'Media',
      tagline: 'Photo enhancement studio with calibrated color grading, background cutout, and collage layouts.',
      features: ['Pro color-grading presets', 'Smart background cutout', 'HD export without watermarks'],
      playStoreUrl: null,
      iconColor: '#9333ea',
      iconBg: '#faf5ff',
      iconBorder: '#e9d5ff',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M23 19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V8C1 6.9 1.9 6 3 6H7L9 3H15L17 6H21C22.1 6 23 6.9 23 8V19Z"></path>
          <circle cx="12" cy="13" r="4"></circle>
          <path d="M12 9L15 13M15 13L13 17M13 17L9 15M9 15L11 10"></path>
        </svg>
      `
    },
    {
      id: 'aayam-ringtone-maker',
      name: 'AAYAM Ringtone Maker',
      category: 'Media',
      tagline: 'Precision waveform audio trimmer, volume booster, and custom contact ringtone assignment.',
      features: ['Millisecond wave zoom', 'Fade-in & fade-out curves', 'Supports MP3, AAC, WAV & M4A'],
      playStoreUrl: null,
      iconColor: '#d97706',
      iconBg: '#fffbeb',
      iconBorder: '#fde68a',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="3" y2="12.01" stroke-width="2.5"></line>
          <line x1="6" y1="8" x2="6" y2="16" stroke-width="2"></line>
          <line x1="9" y1="5" x2="9" y2="19" stroke-width="2"></line>
          <line x1="12" y1="10" x2="12" y2="14" stroke-width="2"></line>
          <line x1="15" y1="6" x2="15" y2="18" stroke-width="2"></line>
          <line x1="18" y1="9" x2="18" y2="15" stroke-width="2"></line>
          <line x1="21" y1="12" x2="21" y2="12.01" stroke-width="2.5"></line>
          <path d="M8 3L9 5L8 7"></path>
          <path d="M16 21L15 19L16 17"></path>
        </svg>
      `
    },
    {
      id: 'aayam-video-editor',
      name: 'AAYAM Video Editor',
      category: 'Media',
      tagline: 'Fast mobile video cutter, trimmer, audio overlay mixer, and aspect ratio converter for creators.',
      features: ['Lossless trimming & merging', 'Speed adjustment (0.25x - 4x)', 'Clean, ad-free workspace'],
      playStoreUrl: null,
      iconColor: '#e11d48',
      iconBg: '#fff1f2',
      iconBorder: '#fecdd3',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="M6 4V8M10 4V8M14 4V8M18 4V8"></path>
          <path d="M6 16V20M10 16V20M14 16V20M18 16V20"></path>
          <line x1="2" y1="8" x2="22" y2="8"></line>
          <line x1="2" y1="16" x2="22" y2="16"></line>
          <polygon points="11 10 15 12 11 14 11 10" fill="#e11d48"></polygon>
        </svg>
      `
    },
    {
      id: 'aayam-skymap',
      name: 'AAYAMSkyMap',
      category: 'Specialized',
      tagline: 'Point your smartphone at the night sky to explore stars, constellations, planets, and celestial orbits.',
      features: ['Gyroscope live celestial tracking', 'Deep-sky object catalog', 'Night-vision red mode'],
      playStoreUrl: null,
      iconColor: '#312e81',
      iconBg: '#eef2ff',
      iconBorder: '#c7d2fe',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#312e81" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9"></circle>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-25 12 12)"></ellipse>
          <circle cx="12" cy="7" r="1.5" fill="#312e81"></circle>
          <circle cx="7" cy="13" r="1" fill="#312e81"></circle>
          <circle cx="16" cy="15" r="1" fill="#312e81"></circle>
          <line x1="12" y1="7" x2="7" y2="13" stroke-dasharray="1.5 1.5"></line>
          <line x1="7" y1="13" x2="16" y2="15" stroke-dasharray="1.5 1.5"></line>
        </svg>
      `
    },
    {
      id: 'meri-mandi-mera-bhav',
      name: 'Meri Mandi Mera Bhav',
      category: 'Specialized',
      tagline: 'Empowering farmers with live APMC mandi commodity prices, historical trend graphs, and price alerts.',
      features: ['State & district mandi filters', 'Real-time MSP and arrival rates', 'Hindi & regional language support'],
      playStoreUrl: null,
      iconColor: '#059669',
      iconBg: '#ecfdf5',
      iconBorder: '#a7f3d0',
      iconSvg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 21C4 16 7 12 11 10"></path>
          <path d="M5 14C3.5 13 3 11 4 9C5.5 10 7 11.5 7 14"></path>
          <path d="M8 10C7 8 7 6 8.5 5C9.5 6.5 10 8.5 9.5 11"></path>
          <path d="M12 17L15 13L18 15L22 9"></path>
          <polyline points="18 9 22 9 22 13"></polyline>
          <line x1="12" y1="21" x2="22" y2="21"></line>
        </svg>
      `
    }
  ];

  /* =================================================================
     2. ONLINE TOOLS CONFIGURATION
     Professional vector icons mapped 1:1 to their actual function.
     All 12 tools feature pure in-browser client-side execution.
     ================================================================= */
  function createPaperIllustration(accentColor, watermarkContent) {
    return `
      <svg width="130" height="165" viewBox="0 0 110 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 8 0 H 84 L 108 24 V 137 A 8 8 0 0 1 100 145 H 8 A 8 8 0 0 1 0 137 V 8 A 8 8 0 0 1 8 0 Z" fill="rgba(255, 255, 255, 0.94)" stroke="${accentColor}" stroke-opacity="0.32" stroke-width="1.6"/>
        <path d="M 84 0 V 24 H 108 Z" fill="rgba(255, 255, 255, 0.72)" stroke="${accentColor}" stroke-opacity="0.38" stroke-width="1.6" stroke-linejoin="round"/>
        ${watermarkContent}
      </svg>
    `;
  }

  const TOOLS_CONFIG = [
    {
      id: 'text-case',
      title: 'Text Case Converter',
      category: 'text',
      theme: 'blue',
      status: 'live',
      desc: 'Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and clean spaces.',
      badgeText: 'Active Tool',
      iconColor: '#2563eb',
      iconBg: '#eff6ff',
      iconBorder: '#bfdbfe',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 18L7.5 5H8.5L13 18"></path>
          <path d="M5 14H11"></path>
          <circle cx="17.5" cy="14" r="3.5"></circle>
          <path d="M21 10.5V18"></path>
        </svg>
      `,
      paperSvg: createPaperIllustration('#3b82f6', `
        <text x="54" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="700" text-anchor="middle" fill="#3b82f6" fill-opacity="0.32">Aa</text>
      `)
    },
    {
      id: 'image-resizer',
      title: 'Image Resizer',
      category: 'image',
      theme: 'green',
      status: 'live',
      desc: 'Resize photos to custom pixel dimensions or preset scales with aspect ratio lock.',
      badgeText: 'Active Tool',
      iconColor: '#059669',
      iconBg: '#ecfdf5',
      iconBorder: '#a7f3d0',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#10b981', `
        <rect x="22" y="44" width="64" height="48" rx="4" fill="none" stroke="#10b981" stroke-width="2" stroke-opacity="0.35"/>
        <circle cx="38" cy="58" r="5" fill="#10b981" fill-opacity="0.35"/>
        <path d="M24 82 L42 66 L54 76 L66 68 L84 82" fill="none" stroke="#10b981" stroke-width="2" stroke-opacity="0.35" stroke-linejoin="round"/>
      `)
    },
    {
      id: 'background-remover',
      title: 'Background Remover',
      category: 'image',
      theme: 'emerald',
      status: 'live',
      desc: 'Remove backgrounds from portraits, photos, and product images with instant edge cutout and manual refinement.',
      badgeText: 'Active Tool',
      iconColor: '#059669',
      iconBg: '#ecfdf5',
      iconBorder: '#a7f3d0',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#10b981', `
        <rect x="22" y="44" width="64" height="48" rx="4" fill="none" stroke="#10b981" stroke-width="2" stroke-opacity="0.35"/>
        <path d="M40 56 C40 50, 48 50, 48 56 C48 62, 40 62, 40 56 Z" fill="#10b981" fill-opacity="0.35"/>
        <path d="M34 76 C34 66, 54 66, 54 76 Z" fill="none" stroke="#10b981" stroke-width="2" stroke-opacity="0.35"/>
        <path d="M64 54 L72 62 M72 54 L64 62" stroke="#10b981" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.45"/>
      `)
    },
    {
      id: 'pdf-editor',
      title: 'PDF Editor',
      category: 'pdf',
      theme: 'blue',
      status: 'live',
      desc: 'Edit existing text in-place, add new text, insert images, draw annotations, redact, and manage pages locally.',
      badgeText: 'Active Tool',
      iconColor: '#2563eb',
      iconBg: '#eff6ff',
      iconBorder: '#bfdbfe',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      `,
      paperSvg: createPaperIllustration('#2563eb', `
        <path d="M28 48 L76 48 M28 62 L60 62 M28 76 L70 76" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.35"/>
        <path d="M64 36 L78 50 M60 40 L74 54" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-opacity="0.45"/>
        <polygon points="68,32 78,42 56,64 46,64 46,54" stroke="#2563eb" stroke-width="2" fill="#dbeafe" fill-opacity="0.6"/>
      `)
    },
    {
      id: 'image-to-pdf',
      title: 'Image to PDF',
      category: 'pdf',
      theme: 'purple',
      status: 'live',
      desc: 'Create standard PDF documents from JPG or PNG images locally in your browser.',
      badgeText: 'Active Tool',
      iconColor: '#9333ea',
      iconBg: '#faf5ff',
      iconBorder: '#e9d5ff',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <circle cx="9.5" cy="12.5" r="1.2"></circle>
          <path d="M7 17L10.5 13.5L13 16L14.5 14.5L17 17"></path>
        </svg>
      `,
      paperSvg: createPaperIllustration('#a855f7', `
        <path d="M36 78 C26 78 26 64 36 64 C45 64 51 73 54 82 C57 69 64 62 72 62 C79 62 82 69 74 76 C64 85 46 80 36 78 Z" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-opacity="0.4" stroke-linecap="round"/>
      `)
    },
    {
      id: 'jpg-to-png',
      title: 'JPG to PNG',
      category: 'image',
      theme: 'orange',
      status: 'live',
      desc: 'Convert JPEG/JPG images to lossless PNG format in your browser memory.',
      badgeText: 'Active Tool',
      iconColor: '#ea580c',
      iconBg: '#fff7ed',
      iconBorder: '#fed7aa',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      `,
      paperSvg: createPaperIllustration('#f97316', `
        <rect x="22" y="44" width="64" height="48" rx="4" fill="none" stroke="#f97316" stroke-width="2" stroke-opacity="0.35"/>
        <circle cx="38" cy="58" r="5" fill="#f97316" fill-opacity="0.35"/>
        <path d="M24 82 L42 66 L54 76 L66 68 L84 82" fill="none" stroke="#f97316" stroke-width="2" stroke-opacity="0.35" stroke-linejoin="round"/>
      `)
    },
    {
      id: 'png-to-jpg',
      title: 'PNG to JPG',
      category: 'image',
      theme: 'blue',
      status: 'live',
      desc: 'Convert PNG images with optional background color fill and adjustable JPEG quality.',
      badgeText: 'Active Tool',
      iconColor: '#0284c7',
      iconBg: '#f0f9ff',
      iconBorder: '#bae6fd',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="7" y="3" width="14" height="14" rx="2"></rect>
          <path d="M3 7v12a2 2 0 0 0 2 2h12"></path>
          <circle cx="11.5" cy="7.5" r="1.2"></circle>
          <polyline points="21 13 17 9 10 16"></polyline>
        </svg>
      `,
      paperSvg: createPaperIllustration('#0284c7', `
        <rect x="32" y="42" width="52" height="42" rx="4" fill="none" stroke="#0284c7" stroke-width="1.8" stroke-opacity="0.25"/>
        <rect x="24" y="52" width="52" height="42" rx="4" fill="rgba(255,255,255,0.8)" stroke="#0284c7" stroke-width="2" stroke-opacity="0.38"/>
        <circle cx="38" cy="64" r="4.5" fill="#0284c7" fill-opacity="0.35"/>
        <path d="M26 86 L42 72 L52 80 L62 72 L74 86" fill="none" stroke="#0284c7" stroke-width="2" stroke-opacity="0.38"/>
      `)
    },
    {
      id: 'word-to-pdf',
      title: 'Word to PDF',
      category: 'pdf',
      theme: 'pink',
      status: 'live',
      desc: 'Convert DOCX documents into clean, standard A4 PDF files in local browser memory.',
      badgeText: 'Active Tool',
      iconColor: '#db2777',
      iconBg: '#fdf2f8',
      iconBorder: '#fbcfe8',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      `,
      paperSvg: createPaperIllustration('#ec4899', `
        <rect x="24" y="44" width="28" height="6" rx="2" fill="#ec4899" fill-opacity="0.38"/>
        <line x1="24" y1="60" x2="84" y2="60" stroke="#ec4899" stroke-width="3" stroke-linecap="round" stroke-opacity="0.32"/>
        <line x1="24" y1="72" x2="84" y2="72" stroke="#ec4899" stroke-width="3" stroke-linecap="round" stroke-opacity="0.32"/>
        <line x1="24" y1="84" x2="68" y2="84" stroke="#ec4899" stroke-width="3" stroke-linecap="round" stroke-opacity="0.32"/>
      `)
    },
    {
      id: 'image-compressor',
      title: 'Image Compressor',
      category: 'image',
      theme: 'teal',
      status: 'live',
      desc: 'Reduce image file sizes instantly. Adjust target quality and inspect real-time byte savings.',
      badgeText: 'Active Tool',
      iconColor: '#0d9488',
      iconBg: '#f0fdfa',
      iconBorder: '#99f6e4',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <line x1="12" y1="7" x2="12" y2="13"></line>
          <polyline points="9 10.5 12 13.5 15 10.5"></polyline>
          <line x1="8" y1="17" x2="16" y2="17"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#0d9488', `
        <rect x="24" y="46" width="60" height="46" rx="4" fill="none" stroke="#0d9488" stroke-width="2" stroke-opacity="0.35"/>
        <circle cx="40" cy="60" r="4.5" fill="#0d9488" fill-opacity="0.35"/>
        <path d="M26 82 L42 68 L52 76 L62 68 L78 82" fill="none" stroke="#0d9488" stroke-width="2" stroke-opacity="0.35"/>
        <path d="M15 68 H20M20 68 L18 65M20 68 L18 71" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
        <path d="M93 68 H88M88 68 L90 65M88 68 L90 71" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
      `)
    },
    {
      id: 'excel-to-pdf',
      title: 'Excel to PDF',
      category: 'pdf',
      theme: 'blue',
      status: 'live',
      desc: 'Convert spreadsheets (.xlsx, .xls, .csv) into clean, printable A4 PDF tables.',
      badgeText: 'Active Tool',
      iconColor: '#2563eb',
      iconBg: '#eff6ff',
      iconBorder: '#bfdbfe',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="8" y1="16" x2="16" y2="16"></line>
          <line x1="12" y1="10" x2="12" y2="18"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#2563eb', `
        <rect x="22" y="44" width="64" height="52" rx="3" fill="none" stroke="#2563eb" stroke-width="2" stroke-opacity="0.35"/>
        <line x1="22" y1="58" x2="86" y2="58" stroke="#2563eb" stroke-width="2" stroke-opacity="0.35"/>
        <line x1="22" y1="72" x2="86" y2="72" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.25"/>
        <line x1="22" y1="84" x2="86" y2="84" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.25"/>
        <line x1="43" y1="44" x2="43" y2="96" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.25"/>
        <line x1="64" y1="44" x2="64" y2="96" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.25"/>
      `)
    },
    {
      id: 'merge-pdf',
      title: 'Merge PDF',
      category: 'pdf',
      theme: 'red',
      status: 'live',
      desc: 'Combine multiple PDF files into a single document with easy reordering.',
      badgeText: 'Active Tool',
      iconColor: '#e11d48',
      iconBg: '#fff1f2',
      iconBorder: '#fecdd3',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#ef4444', `
        <path d="M36 78 C26 78 26 64 36 64 C45 64 51 73 54 82 C57 69 64 62 72 62 C79 62 82 69 74 76 C64 85 46 80 36 78 Z" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-opacity="0.4" stroke-linecap="round"/>
      `)
    },
    {
      id: 'split-pdf',
      title: 'Split PDF',
      category: 'pdf',
      theme: 'purple',
      status: 'live',
      desc: 'Extract specific page ranges or split individual pages from a PDF document.',
      badgeText: 'Active Tool',
      iconColor: '#9333ea',
      iconBg: '#faf5ff',
      iconBorder: '#e9d5ff',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="7" y1="14" x2="17" y2="14" stroke-dasharray="2 2"></line>
          <polyline points="10 11.5 12 9.5 14 11.5"></polyline>
          <polyline points="10 16.5 12 18.5 14 16.5"></polyline>
        </svg>
      `,
      paperSvg: createPaperIllustration('#9333ea', `
        <line x1="18" y1="70" x2="90" y2="70" stroke="#9333ea" stroke-width="2" stroke-dasharray="4 4" stroke-opacity="0.4"/>
        <path d="M30 56 L40 66 M40 56 L30 66" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-opacity="0.4"/>
        <path d="M68 74 L78 84 M78 74 L68 84" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-opacity="0.4"/>
      `)
    },
    {
      id: 'compress-pdf',
      title: 'Compress PDF',
      category: 'pdf',
      theme: 'orange',
      status: 'live',
      desc: 'Optimize PDF internal object streams and remove redundant metadata to reduce file size.',
      badgeText: 'Active Tool',
      iconColor: '#ea580c',
      iconBg: '#fff7ed',
      iconBorder: '#fed7aa',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="11" x2="12" y2="16"></line>
          <polyline points="9.5 13.5 12 16 14.5 13.5"></polyline>
          <line x1="8" y1="19" x2="16" y2="19"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#ea580c', `
        <rect x="28" y="44" width="52" height="52" rx="4" fill="none" stroke="#ea580c" stroke-width="2" stroke-opacity="0.35"/>
        <path d="M54 54 V74 M48 68 L54 74 L60 68" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.4"/>
        <line x1="38" y1="84" x2="70" y2="84" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.4"/>
      `)
    },
    {
      id: 'pdf-to-images',
      title: 'PDF to Images',
      category: 'pdf',
      theme: 'green',
      status: 'live',
      desc: 'Render PDF pages into crisp high-resolution PNG or JPG image files.',
      badgeText: 'Active Tool',
      iconColor: '#059669',
      iconBg: '#ecfdf5',
      iconBorder: '#a7f3d0',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <rect x="10" y="11" width="11" height="9" rx="1.5"></rect>
          <circle cx="13" cy="14" r="1"></circle>
          <polyline points="21 18 18 15 13 20"></polyline>
        </svg>
      `,
      paperSvg: createPaperIllustration('#059669', `
        <rect x="20" y="42" width="36" height="28" rx="2" fill="none" stroke="#059669" stroke-width="1.8" stroke-opacity="0.35"/>
        <circle cx="28" cy="50" r="2.5" fill="#059669" fill-opacity="0.35"/>
        <rect x="52" y="60" width="36" height="28" rx="2" fill="none" stroke="#059669" stroke-width="1.8" stroke-opacity="0.35"/>
        <circle cx="60" cy="68" r="2.5" fill="#059669" fill-opacity="0.35"/>
      `)
    },
    {
      id: 'add-signature-pdf',
      title: 'Add Signature to PDF',
      category: 'pdf',
      theme: 'blue',
      status: 'live',
      desc: 'Draw or upload your signature and place it with precision on any PDF page locally.',
      badgeText: 'Active Tool',
      iconColor: '#2563eb',
      iconBg: '#eff6ff',
      iconBorder: '#bfdbfe',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          <path d="M2 21c3-1.5 6-1.5 9 0 2 .8 4 .8 6 0"></path>
        </svg>
      `,
      paperSvg: createPaperIllustration('#2563eb', `
        <path d="M25 85 C35 70, 40 100, 50 78 C60 60, 65 92, 75 80 C82 72, 88 85, 95 82" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" fill="none" stroke-opacity="0.38"/>
        <line x1="22" y1="92" x2="92" y2="92" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="3 3" stroke-opacity="0.3"/>
      `)
    },
    {
      id: 'protect-pdf',
      title: 'Protect PDF',
      category: 'pdf',
      theme: 'red',
      status: 'live',
      desc: 'Encrypt your PDF document with strong password security and restrict unauthorized access.',
      badgeText: 'Active Tool',
      iconColor: '#e11d48',
      iconBg: '#fff1f2',
      iconBorder: '#fecdd3',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <rect x="8.5" y="13" width="9" height="7" rx="1.5"></rect>
          <path d="M10.5 13V10a2.5 2.5 0 0 1 5 0v3"></path>
          <circle cx="13" cy="16.5" r="0.75" fill="#e11d48"></circle>
        </svg>
      `,
      paperSvg: createPaperIllustration('#e11d48', `
        <rect x="36" y="65" width="38" height="30" rx="4" stroke="#e11d48" stroke-width="2" stroke-opacity="0.35" fill="none"/>
        <path d="M44 65 V54 a11 11 0 0 1 22 0 v11" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.35" fill="none"/>
        <circle cx="55" cy="78" r="3.5" fill="#e11d48" fill-opacity="0.35"/>
        <line x1="55" y1="81" x2="55" y2="87" stroke="#e11d48" stroke-width="2" stroke-opacity="0.35"/>
      `)
    },
    {
      id: 'verify-pdf-signature',
      title: 'Verify PDF Signature',
      category: 'pdf',
      theme: 'green',
      status: 'live',
      desc: 'Check PDF digital signatures, signer details, and document integrity.',
      badgeText: 'Active Tool',
      iconColor: '#059669',
      iconBg: '#ecfdf5',
      iconBorder: '#a7f3d0',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M12 11c3 0 4 1 4 3 0 3-2.5 4.5-4 5.5-1.5-1-4-2.5-4-5.5 0-2 1-3 4-3z"></path>
          <polyline points="10.5 14 11.5 15.2 13.5 13"></polyline>
        </svg>
      `,
      paperSvg: createPaperIllustration('#059669', `
        <path d="M55 45 C70 45, 78 52, 78 68 C78 85, 62 96, 55 102 C48 96, 32 85, 32 68 C32 52, 40 45, 55 45 Z" stroke="#059669" stroke-width="2.2" stroke-opacity="0.35" fill="none"/>
        <polyline points="44 70 51 78 67 60" stroke="#059669" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.4" fill="none"/>
      `)
    },
    {
      id: 'unlock-pdf',
      title: 'Unlock PDF',
      category: 'pdf',
      theme: 'teal',
      status: 'live',
      desc: 'Remove PDF password restrictions and unlock permissions for printing, editing, and copying.',
      badgeText: 'Active Tool',
      iconColor: '#0d9488',
      iconBg: '#f0fdfa',
      iconBorder: '#99f6e4',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <rect x="8.5" y="13" width="9" height="7" rx="1.5"></rect>
          <path d="M10.5 13V9a2.5 2.5 0 0 1 5 0"></path>
          <circle cx="13" cy="16.5" r="0.75" fill="#0d9488"></circle>
        </svg>
      `,
      paperSvg: createPaperIllustration('#0d9488', `
        <rect x="36" y="66" width="38" height="28" rx="4" stroke="#0d9488" stroke-width="2" stroke-opacity="0.35" fill="none"/>
        <path d="M44 66 V48 a11 11 0 0 1 22 0" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.35" fill="none"/>
        <circle cx="55" cy="78" r="3.5" fill="#0d9488" fill-opacity="0.35"/>
        <line x1="55" y1="81" x2="55" y2="86" stroke="#0d9488" stroke-width="2" stroke-opacity="0.35"/>
      `)
    },
    {
      id: 'ocr-pdf',
      title: 'OCR PDF',
      category: 'pdf',
      theme: 'purple',
      status: 'live',
      desc: 'Extract editable, searchable text from images and PDF documents using in-browser optical character recognition.',
      badgeText: 'Active Tool',
      iconColor: '#9333ea',
      iconBg: '#faf5ff',
      iconBorder: '#e9d5ff',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
          <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
          <path d="M3 17v2a2 2 0 0 0 2 2h2"></path>
          <path d="M17 21h2a2 2 0 0 0 2-2v-2"></path>
          <line x1="7" y1="8" x2="17" y2="8"></line>
          <line x1="7" y1="12" x2="17" y2="12"></line>
          <line x1="7" y1="16" x2="13" y2="16"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#9333ea', `
        <path d="M22 52 H32 M22 52 V62 M88 52 H78 M88 52 V62 M22 96 H32 M22 96 V86 M88 96 H78 M88 96 V86" stroke="#9333ea" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.4"/>
        <line x1="36" y1="62" x2="74" y2="62" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-opacity="0.35"/>
        <line x1="36" y1="74" x2="74" y2="74" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-opacity="0.35"/>
        <line x1="36" y1="86" x2="60" y2="86" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-opacity="0.35"/>
      `)
    },
    {
      id: 'pdf-watermark-pages',
      title: 'Watermark & Page Numbers',
      category: 'pdf',
      theme: 'orange',
      status: 'live',
      desc: 'Apply custom text or image watermarks and stamp sequential page numbering on PDF files.',
      badgeText: 'Active Tool',
      iconColor: '#ea580c',
      iconBg: '#fff7ed',
      iconBorder: '#fed7aa',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M7 13l3.5-3.5a2 2 0 0 1 2.8 0L17 13"></path>
          <path d="M9 17h6M11 15v4M14 15v4"></path>
        </svg>
      `,
      paperSvg: createPaperIllustration('#ea580c', `
        <text x="54" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="#ea580c" fill-opacity="0.3" transform="rotate(-25 54 70)">WATERMARK</text>
        <rect x="42" y="88" width="26" height="12" rx="3" stroke="#ea580c" stroke-width="1.6" stroke-opacity="0.35" fill="none"/>
        <text x="55" y="97" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#ea580c" fill-opacity="0.38"># 01</text>
      `)
    },
    {
      id: 'passport-photo-studio',
      title: 'Passport Photo & Print Studio',
      category: 'image',
      theme: 'indigo',
      status: 'live',
      desc: 'Create passport-size photos, adjust backgrounds, arrange multiple copies on A4 paper, and print with accurate dimensions.',
      badgeText: 'Active Tool',
      iconColor: '#4f46e5',
      iconBg: '#eef2ff',
      iconBorder: '#c7d2fe',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M7 18c0-2.5 2.5-4 5-4s5 1.5 5 4"></path>
          <line x1="3" y1="9" x2="5" y2="9"></line>
          <line x1="19" y1="9" x2="21" y2="9"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#4f46e5', `
        <rect x="25" y="45" width="28" height="36" rx="3" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-opacity="0.35"/>
        <circle cx="39" cy="56" r="4.5" fill="#4f46e5" fill-opacity="0.35"/>
        <path d="M30 75 C30 69 34 67 39 67 C44 67 48 69 48 75" stroke="#4f46e5" stroke-width="1.6" fill="none" stroke-opacity="0.35"/>
        <rect x="57" y="45" width="28" height="36" rx="3" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-opacity="0.35"/>
        <rect x="25" y="86" width="28" height="36" rx="3" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-opacity="0.35"/>
        <rect x="57" y="86" width="28" height="36" rx="3" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-opacity="0.35"/>
      `)
    },
    {
      id: 'id-card-print-studio',
      title: 'ID Card Print Studio',
      category: 'image',
      theme: 'teal',
      status: 'live',
      desc: 'Arrange ID card images, front and back sides, for accurate A4 printing.',
      badgeText: 'Active Tool',
      iconColor: '#0d9488',
      iconBg: '#f0fdfa',
      iconBorder: '#99f6e4',
      iconSvg: `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <circle cx="8" cy="11" r="2.5"></circle>
          <path d="M5.5 16c0-1.5 1.5-2.5 2.5-2.5s2.5 1 2.5 2.5"></path>
          <line x1="13" y1="9" x2="18" y2="9"></line>
          <line x1="13" y1="13" x2="18" y2="13"></line>
          <line x1="13" y1="16" x2="16" y2="16"></line>
        </svg>
      `,
      paperSvg: createPaperIllustration('#0d9488', `
        <rect x="22" y="44" width="64" height="38" rx="3" fill="none" stroke="#0d9488" stroke-width="1.8" stroke-opacity="0.4"/>
        <circle cx="35" cy="58" r="4.5" fill="#0d9488" fill-opacity="0.35"/>
        <line x1="46" y1="54" x2="76" y2="54" stroke="#0d9488" stroke-width="1.5" stroke-opacity="0.35" stroke-linecap="round"/>
        <line x1="46" y1="62" x2="70" y2="62" stroke="#0d9488" stroke-width="1.5" stroke-opacity="0.35" stroke-linecap="round"/>
        <rect x="22" y="88" width="64" height="38" rx="3" fill="none" stroke="#0d9488" stroke-width="1.8" stroke-opacity="0.4"/>
        <line x1="30" y1="98" x2="78" y2="98" stroke="#0d9488" stroke-width="1.5" stroke-opacity="0.35" stroke-linecap="round"/>
        <line x1="30" y1="106" x2="78" y2="106" stroke="#0d9488" stroke-width="1.5" stroke-opacity="0.35" stroke-linecap="round"/>
        <line x1="30" y1="114" x2="58" y2="114" stroke="#0d9488" stroke-width="1.5" stroke-opacity="0.35" stroke-linecap="round"/>
      `)
    }
  ];

  /* =================================================================
     3. DOM ELEMENTS INITIALIZATION
     ================================================================= */
  const dom = {
    header: document.getElementById('site-header'),
    mobileToggle: document.getElementById('mobile-toggle'),
    mobileMenu: document.getElementById('mobile-menu'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    desktopNavLinks: document.querySelectorAll('.nav-link'),
    appsGrid: document.getElementById('apps-grid'),
    appsFilterGroup: document.getElementById('apps-filter-group'),
    toolsGrid: document.getElementById('tools-grid'),
    toolSearchInput: document.getElementById('tool-search-input'),
    toolSearchClear: document.getElementById('tool-search-clear'),
    toolCategoryFilters: document.getElementById('tool-category-filters'),
    toolsNoResults: document.getElementById('tools-no-results'),
    resetToolSearchBtn: document.getElementById('reset-tool-search'),
    contactForm: document.getElementById('contact-form'),
    formSuccessAlert: document.getElementById('form-success-alert'),
    formErrorAlert: document.getElementById('form-error-alert'),
    contactSubmitBtn: document.getElementById('contact-submit-btn'),
    backToTopBtn: document.getElementById('back-to-top'),
    currentYearSpan: document.getElementById('current-year'),
    toastContainer: document.getElementById('toast-container'),
    // Modals
    toolModal: document.getElementById('tool-modal'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalToolTitle: document.getElementById('modal-tool-title'),
    modalToolIcon: document.getElementById('modal-tool-icon'),
    modalStatusBadge: document.getElementById('modal-status-badge'),
    modalBody: document.getElementById('modal-body'),
    privacyModal: document.getElementById('privacy-modal'),
    privacyModalBackdrop: document.getElementById('privacy-modal-backdrop'),
    privacyModalClose: document.getElementById('privacy-modal-close'),
    privacyPolicyLink: document.getElementById('privacy-policy-link')
  };

  /* =================================================================
     4. RENDERERS
     ================================================================= */

  if (dom.currentYearSpan) {
    dom.currentYearSpan.textContent = new Date().getFullYear();
  }

  /**
   * Render Android Apps Cards
   * @param {string} filterCategory - category name or 'all'
   */
  function renderApps() {
    // Single All Apps Promotional Banner is rendered directly in index.html
    return;
  }

  /**
   * Render Online Tools Cards
   * @param {string} categoryFilter
   * @param {string} searchQuery
   */
  function renderTools(categoryFilter = 'all', searchQuery = '') {
    if (!dom.toolsGrid) return;

    const query = searchQuery.trim().toLowerCase();

    const filtered = TOOLS_CONFIG.filter(tool => {
      const matchesCategory = (categoryFilter === 'all') || (tool.category.toLowerCase() === categoryFilter.toLowerCase());
      const matchesQuery = !query ||
        tool.title.toLowerCase().includes(query) ||
        tool.desc.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      dom.toolsGrid.style.display = 'none';
      if (dom.toolsNoResults) dom.toolsNoResults.style.display = 'block';
      return;
    }

    dom.toolsGrid.style.display = 'grid';
    if (dom.toolsNoResults) dom.toolsNoResults.style.display = 'none';

    dom.toolsGrid.innerHTML = filtered.map(tool => {
      const isLive = tool.status === 'live';
      const statusBadge = isLive
        ? `<span class="tool-status-pill status-live"><span class="status-dot-green"></span>Active Tool</span>`
        : `<span class="tool-status-pill status-soon"><span class="status-dot-gray"></span>In Development</span>`;
      const cardLiveClass = isLive ? 'tool-card-live' : 'tool-card-preview';

      return `
        <div class="tool-card ${cardLiveClass} card-theme-${tool.theme}" data-tool-id="${escapeHtml(tool.id)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(tool.title)}">
          <div class="card-paper-illustration" aria-hidden="true">
            ${tool.paperSvg || ''}
          </div>
          <div class="tool-card-header">
            <div class="tool-icon-wrapper" style="background-color: ${tool.iconBg}; border-color: ${tool.iconBorder};">
              ${tool.iconSvg}
            </div>
            ${statusBadge}
          </div>
          <h3 class="tool-title">${escapeHtml(tool.title)}</h3>
          <p class="tool-desc">${escapeHtml(tool.desc)}</p>
          <div class="tool-action-btn tool-action-live">
            <span class="tool-cat-pill">${escapeHtml(tool.category.toUpperCase())}</span>
            <span class="tool-action-label">Launch Tool &rarr;</span>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards
    dom.toolsGrid.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('click', () => {
        const toolId = card.getAttribute('data-tool-id');
        openToolWorkbench(toolId);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const toolId = card.getAttribute('data-tool-id');
          openToolWorkbench(toolId);
        }
      });
    });
  }

  /* =================================================================
     5. TOAST NOTIFICATION UTILITY (No emojis, crisp SVG icons)
     ================================================================= */
  function showToast(message, type = 'info') {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    let iconSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'success') {
      iconSvg = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    } else if (type === 'error') {
      iconSvg = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;
    }

    toast.innerHTML = `<span class="toast-icon">${iconSvg}</span><span>${escapeHtml(message)}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fading');
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  /* =================================================================
     6. INTERACTIVE TOOL WORKBENCH & FUNCTIONAL LOGIC
     ================================================================= */

  const MAX_IMAGE_FILE_SIZE = 25 * 1024 * 1024; // 25 MB file size protection limit
  const RESIZER_MIN_DIM = 10;
  const RESIZER_MAX_DIM = 10000;

  let currentWorkbenchCleanup = null;

  function openToolWorkbench(toolId) {
    const tool = TOOLS_CONFIG.find(t => t.id === toolId);
    if (!tool || !dom.toolModal) return;

    if (typeof currentWorkbenchCleanup === 'function') {
      try {
        currentWorkbenchCleanup();
      } catch (err) {
        console.error('Previous workbench cleanup error:', err);
      }
      currentWorkbenchCleanup = null;
    }

    dom.modalToolTitle.textContent = tool.title;
    dom.modalToolIcon.innerHTML = tool.iconSvg;
    dom.modalToolIcon.style.backgroundColor = tool.iconBg;
    dom.modalToolIcon.style.borderColor = tool.iconBorder;

    if (tool.status === 'live') {
      dom.modalStatusBadge.innerHTML = '<span class="status-dot-green"></span>Active In-Browser Tool';
      dom.modalStatusBadge.className = 'modal-status-badge';
    } else {
      dom.modalStatusBadge.innerHTML = '<span class="status-dot-gray"></span>In Active Development';
      dom.modalStatusBadge.className = 'modal-status-badge badge-soon';
    }

    // Populate workbench content
    if (tool.id === 'text-case') {
      renderTextCaseWorkbench();
    } else if (tool.id === 'jpg-to-png') {
      renderImageConversionWorkbench({ from: 'JPG', to: 'PNG', mimeTo: 'image/png' });
    } else if (tool.id === 'png-to-jpg') {
      renderImageConversionWorkbench({ from: 'PNG', to: 'JPG', mimeTo: 'image/jpeg', needsBg: true });
    } else if (tool.id === 'image-resizer') {
      renderImageResizerWorkbench();
    } else if (tool.id === 'image-compressor') {
      renderImageCompressorWorkbench();
    } else if (tool.id === 'image-to-pdf') {
      renderImageToPdfWorkbench();
    } else if (tool.id === 'merge-pdf') {
      renderMergePdfWorkbench();
    } else if (tool.id === 'split-pdf') {
      renderSplitPdfWorkbench();
    } else if (tool.id === 'compress-pdf') {
      renderCompressPdfWorkbench();
    } else if (tool.id === 'pdf-to-images') {
      renderPdfToImagesWorkbench();
    } else if (tool.id === 'word-to-pdf') {
      renderWordToPdfWorkbench();
    } else if (tool.id === 'excel-to-pdf') {
      dom.toolModal.classList.add('modal-excel-open');
      dom.toolModal.classList.remove('modal-passport-open');
      dom.toolModal.classList.remove('modal-idcard-open');
      renderExcelToPdfWorkbench();
    } else if (tool.id === 'add-signature-pdf') {
      dom.toolModal.classList.remove('modal-excel-open');
      renderAddSignaturePdfWorkbench();
    } else if (tool.id === 'protect-pdf') {
      dom.toolModal.classList.remove('modal-excel-open');
      renderProtectPdfWorkbench();
    } else if (tool.id === 'unlock-pdf') {
      dom.toolModal.classList.remove('modal-excel-open');
      renderUnlockPdfWorkbench();
    } else if (tool.id === 'ocr-pdf') {
      dom.toolModal.classList.remove('modal-excel-open');
      renderOcrPdfWorkbench();
    } else if (tool.id === 'pdf-watermark-pages') {
      dom.toolModal.classList.remove('modal-excel-open');
      renderPdfWatermarkPagesWorkbench();
    } else if (tool.id === 'verify-pdf-signature') {
      dom.toolModal.classList.remove('modal-excel-open');
      renderVerifyPdfSignatureWorkbench();
    } else if (tool.id === 'passport-photo-studio') {
      dom.toolModal.classList.add('modal-passport-open');
      dom.toolModal.classList.remove('modal-idcard-open');
      dom.toolModal.classList.remove('modal-excel-open');
      renderPassportPhotoStudioWorkbench();
    } else if (tool.id === 'id-card-print-studio') {
      dom.toolModal.classList.add('modal-idcard-open');
      dom.toolModal.classList.remove('modal-passport-open');
      dom.toolModal.classList.remove('modal-excel-open');
      dom.toolModal.classList.remove('modal-bgremove-open');
      renderIdCardPrintStudioWorkbench();
    } else if (tool.id === 'background-remover') {
      dom.toolModal.classList.add('modal-bgremove-open');
      dom.toolModal.classList.remove('modal-passport-open');
      dom.toolModal.classList.remove('modal-idcard-open');
      dom.toolModal.classList.remove('modal-excel-open');
      dom.toolModal.classList.remove('modal-pdfeditor-open');
      renderBackgroundRemoverWorkbench();
    } else if (tool.id === 'pdf-editor') {
      dom.toolModal.classList.add('modal-pdfeditor-open');
      dom.toolModal.classList.remove('modal-passport-open');
      dom.toolModal.classList.remove('modal-idcard-open');
      dom.toolModal.classList.remove('modal-excel-open');
      dom.toolModal.classList.remove('modal-bgremove-open');
      renderPdfEditorWorkbench();
    } else {
      dom.toolModal.classList.remove('modal-passport-open');
      dom.toolModal.classList.remove('modal-idcard-open');
      dom.toolModal.classList.remove('modal-excel-open');
      dom.toolModal.classList.remove('modal-bgremove-open');
      dom.toolModal.classList.remove('modal-pdfeditor-open');
      renderComingSoonWorkbench(tool);
    }

    dom.toolModal.classList.add('open');
    dom.toolModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeToolModal() {
    if (!dom.toolModal) return;

    dom.toolModal.classList.remove('modal-passport-open');
    dom.toolModal.classList.remove('modal-idcard-open');
    dom.toolModal.classList.remove('modal-excel-open');
    dom.toolModal.classList.remove('modal-bgremove-open');
    dom.toolModal.classList.remove('modal-pdfeditor-open');

    if (typeof currentWorkbenchCleanup === 'function') {
      try {
        currentWorkbenchCleanup();
      } catch (err) {
        console.error('Workbench cleanup error:', err);
      }
      currentWorkbenchCleanup = null;
    }

    dom.toolModal.classList.remove('open');
    dom.toolModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Expose global router helpers for navigation and automated testing
  window.openToolWorkbench = openToolWorkbench;
  window.closeToolModal = closeToolModal;

  /* =================================================================
     OPTION B GLOBAL IMPORT UI COMPONENT (Strict Visual Reference)
     Standardized two-column import view across all file-import tools.
     Left: Dashed pale-blue dropzone with upload icon & Browse button
     Right: Pastel security panel with stacked documents & checklist
     ================================================================= */

  let optbCounter = 0;

  function createOptionBIllustrationSvg(badgeText = 'PDF', badgeColor = '#ef4444') {
    const safeBadge = escapeHtml(badgeText || 'PDF');
    const safeColor = escapeHtml(badgeColor || '#ef4444');
    optbCounter++;
    const uid = 'optb' + optbCounter;
    return `
      <svg class="option-b-illustration-svg" viewBox="0 0 280 170" width="100%" height="170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="doc-shadow-${uid}" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.08"/>
          </filter>
          <filter id="shield-shadow-${uid}" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#1d4ed8" flood-opacity="0.3"/>
          </filter>
          <linearGradient id="shield-grad-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="50%" stop-color="#2563eb"/>
            <stop offset="100%" stop-color="#1d4ed8"/>
          </linearGradient>
          <linearGradient id="shield-highlight-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- Stacked Document 1 (Back, slightly tilted) -->
        <g transform="translate(48, 22) rotate(-8)">
          <rect width="84" height="114" rx="8" fill="#e0f2fe" stroke="#bfdbfe" stroke-width="1.5" opacity="0.8"/>
        </g>
        <!-- Stacked Document 2 (Middle) -->
        <g transform="translate(54, 18) rotate(-3)">
          <rect width="84" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" filter="url(#doc-shadow-${uid})"/>
        </g>
        <!-- Front Document -->
        <g transform="translate(60, 16)">
          <path d="M 8 0 H 60 L 84 24 V 110 A 8 8 0 0 1 76 118 H 8 A 8 8 0 0 1 0 110 V 8 A 8 8 0 0 1 8 0 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#doc-shadow-${uid})"/>
          <path d="M 60 0 V 24 H 84 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" stroke-linejoin="round"/>
          <rect x="12" y="32" width="38" height="18" rx="4" fill="${safeColor}"/>
          <text x="31" y="45" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#ffffff" letter-spacing="0.5">${safeBadge}</text>
          <rect x="12" y="58" width="58" height="4" rx="2" fill="#e2e8f0"/>
          <rect x="12" y="68" width="50" height="4" rx="2" fill="#e2e8f0"/>
          <rect x="12" y="78" width="54" height="4" rx="2" fill="#e2e8f0"/>
          <rect x="12" y="88" width="36" height="4" rx="2" fill="#e2e8f0"/>
        </g>
        <!-- Security Shield in Front -->
        <g transform="translate(116, 64)" filter="url(#shield-shadow-${uid})">
          <path d="M 28 0 C 44 0, 56 6, 56 6 C 56 32, 42 54, 28 64 C 14 54, 0 32, 0 6 C 0 6, 12 0, 28 0 Z" fill="url(#shield-grad-${uid})"/>
          <path d="M 28 3 C 41 3, 52 8, 52 8 C 52 30, 40 50, 28 59 C 16 50, 4 30, 4 8 C 4 8, 15 3, 28 3 Z" fill="none" stroke="url(#shield-highlight-${uid})" stroke-width="1.5"/>
          <path d="M 20 28 V 21 C 20 16.5, 36 16.5, 36 21 V 28" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
          <rect x="17" y="27" width="22" height="18" rx="3.5" fill="#ffffff"/>
          <circle cx="28" cy="34" r="2.2" fill="#1d4ed8"/>
          <path d="M 27 34 L 26.5 40 H 29.5 L 29 34 Z" fill="#1d4ed8"/>
        </g>
        <!-- Handwritten script & Arrow: "Your files stay on your device" -->
        <g transform="translate(176, 26)">
          <text x="0" y="0" font-family="'Caveat', 'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive" font-size="16" font-weight="700" fill="#1e40af" transform="rotate(-4)">Your files</text>
          <text x="-6" y="18" font-family="'Caveat', 'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive" font-size="15" font-weight="700" fill="#1e40af" transform="rotate(-4)">stay on your device</text>
          <path d="M 42 26 C 52 46, 22 58, 4 60" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
          <path d="M 4 60 L 11 55 M 4 60 L 9 67" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    `;
  }

  function getOptionBPrivacyBannerHTML(title, body) {
    return `
      <div class="option-b-privacy-banner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <div>
          <strong>${escapeHtml(title)}:</strong> ${escapeHtml(body)}
        </div>
      </div>
    `;
  }

  function getOptionBImportHTML({
    containerId,
    dropzoneId,
    fileInputId,
    browseBtnId,
    fileTypeLabel = 'PDF',
    formatHint = 'Supports single or multi-page PDF documents up to 25 MB',
    accept = '.pdf,application/pdf',
    multiple = false,
    badgeText = 'PDF',
    badgeColor = '#ef4444',
    privacyChecklist = ['Processed 100% locally', 'No files uploaded to any server', 'Secure and private']
  }) {
    const checklistHTML = privacyChecklist.map(item => `
      <div class="option-b-check-item">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#10b981"/>
          <path d="M6 10.5L8.5 13L14 7.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${escapeHtml(item)}</span>
      </div>
    `).join('');

    return `
      <div class="option-b-import-container" id="${containerId}">
        <div class="option-b-grid">
          <!-- Left Column: Dropzone -->
          <div class="option-b-dropzone" id="${dropzoneId}" tabindex="0" role="button" aria-label="Drop your ${escapeHtml(fileTypeLabel)} file here, or click to browse">
            <svg class="option-b-upload-icon" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6 C12 6, 10 8, 10 10 V46 C10 48, 12 50, 14 50 H42 C44 50, 46 48, 46 46 V18 L34 6 H14 Z" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
              <path d="M34 6 V18 H46" fill="#dbeafe" stroke="#93c5fd" stroke-width="2" stroke-linejoin="round"/>
              <circle cx="28" cy="33" r="13" fill="#2563eb"/>
              <path d="M28 25 L22 31 H26 V39 H30 V31 H34 L28 25 Z" fill="#ffffff"/>
            </svg>
            <div class="option-b-dropzone-title">Drop your ${escapeHtml(fileTypeLabel)} file here</div>
            <div class="option-b-dropzone-sub">or click to browse from your device</div>
            <button type="button" class="option-b-browse-btn" id="${browseBtnId}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              Browse files
            </button>
            <div class="option-b-format-hint">${escapeHtml(formatHint)}</div>
            <input type="file" id="${fileInputId}" class="file-hidden-input" accept="${escapeHtml(accept)}" ${multiple ? 'multiple' : ''} style="display:none;" />
          </div>

          <!-- Right Column: Info Panel -->
          <div class="option-b-info-col">
            <div class="option-b-illustration-wrap">
              ${createOptionBIllustrationSvg(badgeText, badgeColor)}
            </div>
            <div class="option-b-checklist">
              ${checklistHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function initOptionBImportHandlers({
    dropzoneId,
    fileInputId,
    browseBtnId,
    onFilesSelected
  }) {
    const dropzone = document.getElementById(dropzoneId);
    const fileInput = document.getElementById(fileInputId);
    const browseBtn = document.getElementById(browseBtnId);
    if (!dropzone || !fileInput) return;

    if (browseBtn) {
      browseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });
    }

    dropzone.addEventListener('click', (e) => {
      if (e.target !== browseBtn && !browseBtn?.contains(e.target)) {
        fileInput.click();
      }
    });

    dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fileInput.click();
      }
    });

    ['dragenter', 'dragover'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('drag-active');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('drag-active');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
        if (typeof onFilesSelected === 'function') {
          onFilesSelected(e.dataTransfer.files);
        }
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length) {
        if (typeof onFilesSelected === 'function') {
          onFilesSelected(e.target.files);
        }
      }
    });
  }

  // --- 6.1 Text Case Converter Functional Implementation ---
  function renderTextCaseWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        <p class="workbench-lead">
          Type or paste text below to convert character case, format variables, or clean whitespace. All counts update in real time.
        </p>

        <textarea id="text-input" class="text-workbench-textarea" placeholder="Type or paste your text here to begin..."></textarea>

        <div class="text-stats-ribbon">
          <div class="stat-bubble">Characters: <strong id="stat-chars">0</strong></div>
          <div class="stat-bubble">Words: <strong id="stat-words">0</strong></div>
          <div class="stat-bubble">Lines: <strong id="stat-lines">0</strong></div>
          <div class="stat-bubble">Reading: <strong id="stat-reading">0s</strong></div>
        </div>

        <div class="case-buttons-grid">
          <button type="button" class="case-btn" data-transform="upper">UPPERCASE</button>
          <button type="button" class="case-btn" data-transform="lower">lowercase</button>
          <button type="button" class="case-btn" data-transform="title">Title Case</button>
          <button type="button" class="case-btn" data-transform="sentence">Sentence case</button>
          <button type="button" class="case-btn" data-transform="camel">camelCase</button>
          <button type="button" class="case-btn" data-transform="pascal">PascalCase</button>
          <button type="button" class="case-btn" data-transform="snake">snake_case</button>
          <button type="button" class="case-btn" data-transform="kebab">kebab-case</button>
          <button type="button" class="case-btn" data-transform="invert">iNVERT cASE</button>
          <button type="button" class="case-btn" data-transform="clean">Clean Spaces</button>
        </div>

        <div class="text-action-bar">
          <div class="action-group">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-sample-text">Load Sample</button>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-clear-text">Clear</button>
          </div>
          <div class="action-group">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-download-txt">Download .TXT</button>
            <button type="button" class="btn btn-primary btn-sm" id="btn-copy-text">Copy Text</button>
          </div>
        </div>
      </div>
    `;

    const textarea = document.getElementById('text-input');
    const statChars = document.getElementById('stat-chars');
    const statWords = document.getElementById('stat-words');
    const statLines = document.getElementById('stat-lines');
    const statReading = document.getElementById('stat-reading');

    function updateStats() {
      const val = textarea.value;
      statChars.textContent = val.length;

      const words = val.trim() ? val.trim().split(/\s+/).length : 0;
      statWords.textContent = words;

      const lines = val ? val.split(/\r\n|\r|\n/).length : 0;
      statLines.textContent = lines;

      const seconds = Math.ceil(words / 3.3);
      statReading.textContent = seconds > 60 ? `${Math.floor(seconds / 60)}m ${seconds % 60}s` : `${seconds}s`;
    }

    textarea.addEventListener('input', updateStats);

    dom.modalBody.querySelectorAll('.case-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-transform');
        const text = textarea.value;
        if (!text) {
          showToast('Please type or paste some text first.', 'info');
          return;
        }

        let result = text;
        if (type === 'upper') {
          result = text.toUpperCase();
        } else if (type === 'lower') {
          result = text.toLowerCase();
        } else if (type === 'title') {
          result = text.toLowerCase().replace(/(^|\s|\b)([a-z])/g, m => m.toUpperCase());
        } else if (type === 'sentence') {
          result = text.toLowerCase().replace(/(^\s*|\.\s*|\?\s*|\!\s*)([a-z])/g, m => m.toUpperCase());
        } else if (type === 'camel') {
          result = toCamelCase(text);
        } else if (type === 'pascal') {
          result = toPascalCase(text);
        } else if (type === 'snake') {
          result = toDelimitedCase(text, '_');
        } else if (type === 'kebab') {
          result = toDelimitedCase(text, '-');
        } else if (type === 'invert') {
          result = text.split('').map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join('');
        } else if (type === 'clean') {
          result = text.replace(/[ \t]+/g, ' ').replace(/^\s+|\s+$/gm, '').trim();
        }

        textarea.value = result;
        updateStats();
        showToast(`Converted to ${btn.textContent}!`, 'success');
      });
    });

    document.getElementById('btn-sample-text').addEventListener('click', () => {
      textarea.value = `AAYAM Innovation develops native Android office applications and free client-side productivity utilities.\nEvery tool operates 100% locally in browser memory for zero server transmission, speed, and privacy.`;
      updateStats();
    });

    document.getElementById('btn-clear-text').addEventListener('click', () => {
      textarea.value = '';
      updateStats();
      showToast('Text cleared', 'info');
    });

    document.getElementById('btn-copy-text').addEventListener('click', () => {
      if (!textarea.value) {
        showToast('Nothing to copy yet.', 'info');
        return;
      }
      navigator.clipboard.writeText(textarea.value).then(() => {
        showToast('Copied to clipboard!', 'success');
      }).catch(() => {
        textarea.select();
        document.execCommand('copy');
        showToast('Copied to clipboard!', 'success');
      });
    });

    document.getElementById('btn-download-txt').addEventListener('click', () => {
      if (!textarea.value) {
        showToast('Nothing to download yet.', 'info');
        return;
      }
      const blob = new Blob([textarea.value], { type: 'text/plain;charset=utf-8' });
      triggerDownload(blob, 'aayam-converted-text.txt');
      showToast('File downloaded!', 'success');
    });
  }

  // --- 6.2 JPG to PNG & PNG to JPG Converters ---
  function renderImageConversionWorkbench({ from, to, mimeTo, needsBg = false }) {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML(
          'Zero-Upload Image Conversion',
          `Your ${from} image is converted to ${to} 100% locally in your web browser memory. No files are uploaded to any server.`
        )}

        ${getOptionBImportHTML({
          containerId: 'img-dropzone',
          dropzoneId: 'img-option-b-dropzone',
          fileInputId: 'img-file-input',
          browseBtnId: 'img-browse-btn',
          fileTypeLabel: `${from} image`,
          formatHint: `Supports ${from} images up to 25 MB`,
          accept: from === 'JPG' ? 'image/jpeg,.jpg,.jpeg' : 'image/png,.png',
          badgeText: from,
          badgeColor: from === 'JPG' ? '#ea580c' : '#0284c7'
        })}

        <div id="conversion-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 600; color: #334155;">Preview (${from} &rarr; ${to})</span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-converted" style="font-size: 0.75rem; padding: 4px 10px;">Change ${from}</button>
          </div>
          <div class="preview-img-container">
            <img id="converted-preview-img" alt="Conversion preview">
          </div>

          ${needsBg ? `
            <div class="control-field">
              <label for="bg-color-picker">Background Fill Color (replaces transparency):</label>
              <input type="color" id="bg-color-picker" value="#ffffff" class="color-picker-input">
            </div>
            <div class="control-field">
              <label for="jpg-quality-slider">JPEG Quality: <span id="quality-display">92%</span></label>
              <input type="range" id="jpg-quality-slider" min="0.4" max="1.0" step="0.05" value="0.92">
            </div>
          ` : ''}

          <div class="stats-bar">
            <div class="stat-tag">Original: <strong id="orig-size">-</strong></div>
            <div class="stat-tag">Converted (${to}): <strong id="new-size">-</strong></div>
            <div class="stat-tag">Resolution: <strong id="res-size">-</strong></div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-download-converted">
            Download ${to} Image
          </button>
        </div>
      </div>
    `;

    const dropzone = document.getElementById('img-dropzone');
    const fileInput = document.getElementById('img-file-input');
    const workArea = document.getElementById('conversion-work-area');
    const previewImg = document.getElementById('converted-preview-img');
    const origSizeSpan = document.getElementById('orig-size');
    const newSizeSpan = document.getElementById('new-size');
    const resSizeSpan = document.getElementById('res-size');
    const downloadBtn = document.getElementById('btn-download-converted');
    const bgColorPicker = document.getElementById('bg-color-picker');
    const qualitySlider = document.getElementById('jpg-quality-slider');
    const qualityDisplay = document.getElementById('quality-display');

    let loadedImage = null;
    let originalFile = null;
    let currentBlob = null;
    let activePreviewUrl = null;

    function cleanupPreview() {
      if (activePreviewUrl) {
        URL.revokeObjectURL(activePreviewUrl);
        activePreviewUrl = null;
      }
    }

    currentWorkbenchCleanup = cleanupPreview;

    function processImage() {
      if (!loadedImage) return;

      const canvas = document.createElement('canvas');
      canvas.width = loadedImage.naturalWidth;
      canvas.height = loadedImage.naturalHeight;
      const ctx = canvas.getContext('2d');

      if (needsBg) {
        ctx.fillStyle = bgColorPicker ? bgColorPicker.value : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(loadedImage, 0, 0);

      const quality = qualitySlider ? parseFloat(qualitySlider.value) : 0.92;
      canvas.toBlob(blob => {
        if (!blob) return;
        currentBlob = blob;
        cleanupPreview();
        activePreviewUrl = URL.createObjectURL(blob);
        previewImg.src = activePreviewUrl;
        newSizeSpan.textContent = formatBytes(blob.size);
      }, mimeTo, quality);
    }

    function handleImageFile(file) {
      if (!file) return;

      const validation = validateImageFile(file);
      if (!validation.valid) {
        showToast(validation.error, 'error');
        fileInput.value = '';
        return;
      }

      cleanupPreview();
      originalFile = file;

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected image file.', 'error');
        fileInput.value = '';
        workArea.style.display = 'none';
        cleanupPreview();
        loadedImage = null;
      };

      reader.onload = (loadEvent) => {
        loadedImage = new Image();
        loadedImage.onerror = () => {
          showToast('Corrupted or unsupported image file format.', 'error');
          fileInput.value = '';
          workArea.style.display = 'none';
          cleanupPreview();
          loadedImage = null;
        };

        loadedImage.onload = () => {
          if (!loadedImage.naturalWidth || !loadedImage.naturalHeight) {
            showToast('Image has invalid dimensions or is corrupted.', 'error');
            fileInput.value = '';
            workArea.style.display = 'none';
            cleanupPreview();
            loadedImage = null;
            return;
          }
          dropzone.style.display = 'none';
          workArea.style.display = 'flex';
          origSizeSpan.textContent = formatBytes(originalFile.size);
          resSizeSpan.textContent = `${loadedImage.naturalWidth} × ${loadedImage.naturalHeight}`;
          processImage();
          showToast(`Loaded ${originalFile.name}`, 'info');
        };
        loadedImage.src = loadEvent.target.result;
      };
      reader.readAsDataURL(file);
    };

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handleImageFile(file);
    });

    const btnChange = document.getElementById('btn-change-converted');
    if (btnChange) {
      btnChange.addEventListener('click', () => {
        cleanupPreview();
        workArea.style.display = 'none';
        dropzone.style.display = 'block';
        fileInput.value = '';
        loadedImage = null;
      });
    }

    if (bgColorPicker) bgColorPicker.addEventListener('input', processImage);

    if (qualitySlider) {
      qualitySlider.addEventListener('input', () => {
        qualityDisplay.textContent = `${Math.round(qualitySlider.value * 100)}%`;
        processImage();
      });
    }

    downloadBtn.addEventListener('click', () => {
      if (!currentBlob) return;
      const baseName = originalFile ? originalFile.name.replace(/\.[^/.]+$/, '') : 'converted';
      const ext = to.toLowerCase();
      triggerDownload(currentBlob, `${baseName}-aayam.${ext}`);
      showToast(`Downloaded ${baseName}-aayam.${ext}!`, 'success');
    });

    initOptionBImportHandlers({
      dropzoneId: 'img-option-b-dropzone',
      fileInputId: 'img-file-input',
      browseBtnId: 'img-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) handleImageFile(files[0]);
      }
    });
  }

  // --- 6.3 Image Resizer Functional Implementation ---
  function renderImageResizerWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML(
          'Zero-Upload Image Resizing',
          'Image resizing and resampling execute 100% locally in your browser memory. No images are sent to any server.'
        )}

        ${getOptionBImportHTML({
          containerId: 'resize-dropzone',
          dropzoneId: 'resize-option-b-dropzone',
          fileInputId: 'resize-file-input',
          browseBtnId: 'resize-browse-btn',
          fileTypeLabel: 'image',
          formatHint: 'Supports JPG, PNG, WebP up to 25 MB',
          accept: 'image/*',
          badgeText: 'IMG',
          badgeColor: '#059669'
        })}

        <div id="resize-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 600; color: #334155;">Image Dimensions &amp; Presets</span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-resize" style="font-size: 0.75rem; padding: 4px 10px;">Change Image</button>
          </div>
          <div class="preview-img-container">
            <img id="resize-preview-img" alt="Resizer preview">
          </div>

          <div class="tool-controls-grid">
            <div class="control-field">
              <label for="resize-width">Width (px):</label>
              <input type="number" id="resize-width" class="form-control" min="10" max="10000">
            </div>
            <div class="control-field">
              <label for="resize-height">Height (px):</label>
              <input type="number" id="resize-height" class="form-control" min="10" max="10000">
            </div>
            <div class="control-field">
              <label for="resize-format">Export Format:</label>
              <select id="resize-format" class="form-control">
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPEG</option>
                <option value="image/webp">WebP</option>
              </select>
            </div>
          </div>

          <div class="controls-action-row">
            <label class="checkbox-label">
              <input type="checkbox" id="resize-lock-ratio" checked> Lock Aspect Ratio
            </label>
            <div class="preset-btn-group">
              <button type="button" class="btn btn-secondary-sm preset-scale" data-scale="0.25">25%</button>
              <button type="button" class="btn btn-secondary-sm preset-scale" data-scale="0.5">50%</button>
              <button type="button" class="btn btn-secondary-sm preset-scale" data-scale="0.75">75%</button>
              <button type="button" class="btn btn-secondary-sm preset-scale" data-scale="1.0">100%</button>
            </div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-download-resized">
            Download Resized Image
          </button>
        </div>
      </div>
    `;

    const dropzone = document.getElementById('resize-dropzone');
    const fileInput = document.getElementById('resize-file-input');
    const workArea = document.getElementById('resize-work-area');
    const previewImg = document.getElementById('resize-preview-img');
    const widthInput = document.getElementById('resize-width');
    const heightInput = document.getElementById('resize-height');
    const lockRatio = document.getElementById('resize-lock-ratio');
    const formatSelect = document.getElementById('resize-format');
    const downloadBtn = document.getElementById('btn-download-resized');

    let loadedImg = null;
    let originalName = 'resized';
    let aspectRatio = 1;

    function handleResizeFile(file) {
      if (!file) return;

      const validation = validateImageFile(file);
      if (!validation.valid) {
        showToast(validation.error, 'error');
        fileInput.value = '';
        return;
      }

      originalName = file.name.replace(/\.[^/.]+$/, '');

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected image file.', 'error');
        fileInput.value = '';
        workArea.style.display = 'none';
        loadedImg = null;
      };

      reader.onload = (evt) => {
        loadedImg = new Image();
        loadedImg.onerror = () => {
          showToast('Corrupted or unsupported image file format.', 'error');
          fileInput.value = '';
          workArea.style.display = 'none';
          loadedImg = null;
        };

        loadedImg.onload = () => {
          if (!loadedImg.naturalWidth || !loadedImg.naturalHeight) {
            showToast('Image has invalid dimensions or is corrupted.', 'error');
            fileInput.value = '';
            workArea.style.display = 'none';
            loadedImg = null;
            return;
          }
          aspectRatio = loadedImg.naturalWidth / loadedImg.naturalHeight;
          widthInput.value = Math.min(RESIZER_MAX_DIM, loadedImg.naturalWidth);
          heightInput.value = Math.min(RESIZER_MAX_DIM, loadedImg.naturalHeight);
          previewImg.src = evt.target.result;
          dropzone.style.display = 'none';
          workArea.style.display = 'flex';
          showToast(`Loaded ${file.name}`, 'info');
        };
        loadedImg.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handleResizeFile(file);
    });

    const btnChangeResize = document.getElementById('btn-change-resize');
    if (btnChangeResize) {
      btnChangeResize.addEventListener('click', () => {
        workArea.style.display = 'none';
        dropzone.style.display = 'block';
        fileInput.value = '';
        loadedImg = null;
      });
    }

    widthInput.addEventListener('input', () => {
      let w = parseInt(widthInput.value, 10);
      if (w > RESIZER_MAX_DIM) {
        widthInput.value = RESIZER_MAX_DIM;
        showToast(`Width capped at maximum ${RESIZER_MAX_DIM} px.`, 'info');
        w = RESIZER_MAX_DIM;
      }
      if (lockRatio.checked && loadedImg && w > 0) {
        const computedH = Math.min(RESIZER_MAX_DIM, Math.max(RESIZER_MIN_DIM, Math.round(w / aspectRatio)));
        heightInput.value = computedH;
      }
    });

    heightInput.addEventListener('input', () => {
      let h = parseInt(heightInput.value, 10);
      if (h > RESIZER_MAX_DIM) {
        heightInput.value = RESIZER_MAX_DIM;
        showToast(`Height capped at maximum ${RESIZER_MAX_DIM} px.`, 'info');
        h = RESIZER_MAX_DIM;
      }
      if (lockRatio.checked && loadedImg && h > 0) {
        const computedW = Math.min(RESIZER_MAX_DIM, Math.max(RESIZER_MIN_DIM, Math.round(h * aspectRatio)));
        widthInput.value = computedW;
      }
    });

    dom.modalBody.querySelectorAll('.preset-scale').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!loadedImg) return;
        const scale = parseFloat(btn.getAttribute('data-scale'));
        const targetW = Math.min(RESIZER_MAX_DIM, Math.max(RESIZER_MIN_DIM, Math.round(loadedImg.naturalWidth * scale)));
        const targetH = Math.min(RESIZER_MAX_DIM, Math.max(RESIZER_MIN_DIM, Math.round(loadedImg.naturalHeight * scale)));
        widthInput.value = targetW;
        heightInput.value = targetH;
        showToast(`Dimensions scaled to ${scale * 100}% (${targetW} × ${targetH})`, 'info');
      });
    });

    downloadBtn.addEventListener('click', () => {
      if (!loadedImg) return;
      const targetW = parseInt(widthInput.value, 10);
      const targetH = parseInt(heightInput.value, 10);
      if (!targetW || !targetH || isNaN(targetW) || isNaN(targetH)) {
        showToast('Please enter valid width and height dimensions.', 'error');
        return;
      }
      if (targetW < RESIZER_MIN_DIM || targetH < RESIZER_MIN_DIM) {
        showToast(`Minimum dimension is ${RESIZER_MIN_DIM} px.`, 'error');
        return;
      }
      if (targetW > RESIZER_MAX_DIM || targetH > RESIZER_MAX_DIM) {
        showToast(`Maximum dimension is ${RESIZER_MAX_DIM} px to prevent excessive memory usage.`, 'error');
        return;
      }

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(loadedImg, 0, 0, targetW, targetH);

      const mime = formatSelect.value;
      const ext = mime.split('/')[1] || 'png';

      canvas.toBlob(blob => {
        triggerDownload(blob, `${originalName}-${targetW}x${targetH}.${ext}`);
        showToast(`Saved ${originalName}-${targetW}x${targetH}.${ext}!`, 'success');
      }, mime, 0.95);
    });

    initOptionBImportHandlers({
      dropzoneId: 'resize-option-b-dropzone',
      fileInputId: 'resize-file-input',
      browseBtnId: 'resize-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) handleResizeFile(files[0]);
      }
    });
  }

  // --- 6.4 Image Compressor Functional Implementation ---
  function renderImageCompressorWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML(
          'Zero-Upload Image Compression',
          'Adjust compression quality in real time. All processing executes 100% locally in your browser with zero server upload.'
        )}

        ${getOptionBImportHTML({
          containerId: 'compress-dropzone',
          dropzoneId: 'compress-option-b-dropzone',
          fileInputId: 'compress-file-input',
          browseBtnId: 'compress-browse-btn',
          fileTypeLabel: 'image',
          formatHint: 'Supports JPEG, PNG, WebP up to 25 MB',
          accept: 'image/*',
          badgeText: 'IMG',
          badgeColor: '#d97706'
        })}

        <div id="compress-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 600; color: #334155;">Compression Settings &amp; Preview</span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-compress" style="font-size: 0.75rem; padding: 4px 10px;">Change Image</button>
          </div>
          <div class="preview-img-container">
            <img id="compress-preview-img" alt="Compressed image preview">
          </div>

          <div class="control-field">
            <label for="compress-slider">Target Quality: <span id="compress-val" style="font-weight: 700; color: #1d4ed8;">75%</span></label>
            <div class="slider-group">
              <input type="range" id="compress-slider" min="0.1" max="0.95" step="0.05" value="0.75">
            </div>
          </div>

          <div class="stats-bar">
            <div class="stat-tag">Original: <strong id="comp-orig-size">-</strong></div>
            <div class="stat-tag">Compressed: <strong id="comp-new-size">-</strong></div>
            <div class="stat-tag">Savings: <strong id="comp-reduction" style="color: #059669;">-</strong></div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-download-compressed">
            Download Compressed Image
          </button>
        </div>
      </div>
    `;

    const dropzone = document.getElementById('compress-dropzone');
    const fileInput = document.getElementById('compress-file-input');
    const workArea = document.getElementById('compress-work-area');
    const previewImg = document.getElementById('compress-preview-img');
    const slider = document.getElementById('compress-slider');
    const valDisplay = document.getElementById('compress-val');
    const origSpan = document.getElementById('comp-orig-size');
    const newSpan = document.getElementById('comp-new-size');
    const reductionSpan = document.getElementById('comp-reduction');
    const downloadBtn = document.getElementById('btn-download-compressed');

    let loadedImg = null;
    let originalSize = 0;
    let originalName = 'compressed';
    let currentBlob = null;
    let activePreviewUrl = null;

    function cleanupPreview() {
      if (activePreviewUrl) {
        URL.revokeObjectURL(activePreviewUrl);
        activePreviewUrl = null;
      }
    }

    currentWorkbenchCleanup = cleanupPreview;

    function compress() {
      if (!loadedImg) return;
      const canvas = document.createElement('canvas');
      canvas.width = loadedImg.naturalWidth;
      canvas.height = loadedImg.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(loadedImg, 0, 0);

      const quality = parseFloat(slider.value);
      canvas.toBlob(blob => {
        if (!blob) return;
        currentBlob = blob;
        cleanupPreview();
        activePreviewUrl = URL.createObjectURL(blob);
        previewImg.src = activePreviewUrl;
        newSpan.textContent = formatBytes(blob.size);

        const diff = originalSize - blob.size;
        const percent = Math.round((diff / originalSize) * 100);
        if (percent > 0) {
          reductionSpan.textContent = `-${percent}% saved`;
          reductionSpan.style.color = '#059669';
        } else {
          reductionSpan.textContent = `Optimal`;
          reductionSpan.style.color = '#1d4ed8';
        }
      }, 'image/jpeg', quality);
    }

    function handleCompressFile(file) {
      if (!file) return;

      const validation = validateImageFile(file);
      if (!validation.valid) {
        showToast(validation.error, 'error');
        fileInput.value = '';
        return;
      }

      cleanupPreview();
      originalSize = file.size;
      originalName = file.name.replace(/\.[^/.]+$/, '');

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected image file.', 'error');
        fileInput.value = '';
        workArea.style.display = 'none';
        cleanupPreview();
        loadedImg = null;
      };

      reader.onload = (evt) => {
        loadedImg = new Image();
        loadedImg.onerror = () => {
          showToast('Corrupted or unsupported image file format.', 'error');
          fileInput.value = '';
          workArea.style.display = 'none';
          cleanupPreview();
          loadedImg = null;
        };

        loadedImg.onload = () => {
          if (!loadedImg.naturalWidth || !loadedImg.naturalHeight) {
            showToast('Image has invalid dimensions or is corrupted.', 'error');
            fileInput.value = '';
            workArea.style.display = 'none';
            cleanupPreview();
            loadedImg = null;
            return;
          }
          dropzone.style.display = 'none';
          workArea.style.display = 'flex';
          origSpan.textContent = formatBytes(originalSize);
          compress();
          showToast(`Loaded ${file.name}`, 'info');
        };
        loadedImg.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) handleCompressFile(file);
    });

    const btnChangeCompress = document.getElementById('btn-change-compress');
    if (btnChangeCompress) {
      btnChangeCompress.addEventListener('click', () => {
        cleanupPreview();
        workArea.style.display = 'none';
        dropzone.style.display = 'block';
        fileInput.value = '';
        loadedImg = null;
      });
    }

    slider.addEventListener('input', () => {
      valDisplay.textContent = `${Math.round(slider.value * 100)}%`;
      compress();
    });

    downloadBtn.addEventListener('click', () => {
      if (!currentBlob) return;
      triggerDownload(currentBlob, `${originalName}-compressed.jpg`);
      showToast('Compressed file downloaded!', 'success');
    });

    initOptionBImportHandlers({
      dropzoneId: 'compress-option-b-dropzone',
      fileInputId: 'compress-file-input',
      browseBtnId: 'compress-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) handleCompressFile(files[0]);
      }
    });
  }

  // --- 6.5 Image to PDF Functional Implementation ---
  function renderImageToPdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML('Zero-Upload Guarantee', 'Your images are synthesized into A4 PDF documents 100% locally in your browser memory. No files are uploaded to any server.')}

        ${getOptionBImportHTML({
          containerId: 'img2pdf-import-box',
          dropzoneId: 'img2pdf-dropzone',
          fileInputId: 'img2pdf-file-input',
          browseBtnId: 'img2pdf-browse-btn',
          fileTypeLabel: 'image',
          formatHint: 'Supports JPG and PNG images up to 25 MB',
          accept: 'image/jpeg,image/png,image/*',
          badgeText: 'IMG',
          badgeColor: '#3b82f6'
        })}

        <div id="pdf-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.5rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-img2pdf">
              Change Image
            </button>
          </div>

          <div class="preview-img-container">
            <img id="pdf-preview-img" alt="PDF image source">
          </div>

          <div class="stats-bar">
            <div class="stat-tag">Page Size: <strong>A4 Portrait (595 × 842 pt)</strong></div>
            <div class="stat-tag">Source Dimensions: <strong id="pdf-src-dim">-</strong></div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-generate-pdf">
            Generate & Download PDF
          </button>
        </div>
      </div>
    `;

    const importBox = document.getElementById('img2pdf-import-box');
    const workArea = document.getElementById('pdf-work-area');
    const previewImg = document.getElementById('pdf-preview-img');
    const dimSpan = document.getElementById('pdf-src-dim');
    const generateBtn = document.getElementById('btn-generate-pdf');
    const changeBtn = document.getElementById('btn-change-img2pdf');

    let loadedImg = null;
    let originalName = 'document';

    function resetToUpload() {
      loadedImg = null;
      originalName = 'document';
      previewImg.removeAttribute('src');
      dimSpan.textContent = '-';
      workArea.style.display = 'none';
      importBox.style.display = 'block';
      const fileInput = document.getElementById('img2pdf-file-input');
      if (fileInput) fileInput.value = '';
    }

    if (changeBtn) {
      changeBtn.addEventListener('click', resetToUpload);
    }

    function handleImageFile(file) {
      if (!file) return;

      const validation = validateImageFile(file);
      if (!validation.valid) {
        showToast(validation.error, 'error');
        resetToUpload();
        return;
      }

      originalName = file.name.replace(/\.[^/.]+$/, '');

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected image file.', 'error');
        resetToUpload();
      };

      reader.onload = (evt) => {
        loadedImg = new Image();
        loadedImg.onerror = () => {
          showToast('Corrupted or unsupported image file format.', 'error');
          resetToUpload();
        };

        loadedImg.onload = () => {
          if (!loadedImg.naturalWidth || !loadedImg.naturalHeight) {
            showToast('Image has invalid dimensions or is corrupted.', 'error');
            resetToUpload();
            return;
          }
          importBox.style.display = 'none';
          workArea.style.display = 'flex';
          dimSpan.textContent = `${loadedImg.naturalWidth} × ${loadedImg.naturalHeight} px`;
          previewImg.src = evt.target.result;
          showToast(`Loaded ${file.name}`, 'info');
        };
        loadedImg.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }

    initOptionBImportHandlers({
      dropzoneId: 'img2pdf-dropzone',
      fileInputId: 'img2pdf-file-input',
      browseBtnId: 'img2pdf-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) handleImageFile(files[0]);
      }
    });

    generateBtn.addEventListener('click', () => {
      if (!loadedImg || !loadedImg.naturalWidth || !loadedImg.naturalHeight) {
        showToast('Please select a valid image first.', 'error');
        return;
      }
      generateImagePdf(loadedImg, originalName);
    });
  }

  function generateImagePdf(img, baseName) {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      const binaryString = atob(dataUrl.split(',')[1]);
      const imageBytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        imageBytes[i] = binaryString.charCodeAt(i);
      }

      const pageWidth = 595.28;
      const pageHeight = 841.89;
      const margin = 36;
      const maxWidth = pageWidth - margin * 2;
      const maxHeight = pageHeight - margin * 2;

      let drawWidth = maxWidth;
      let drawHeight = (img.naturalHeight / img.naturalWidth) * drawWidth;

      if (drawHeight > maxHeight) {
        drawHeight = maxHeight;
        drawWidth = (img.naturalWidth / img.naturalHeight) * drawHeight;
      }

      const posX = (pageWidth - drawWidth) / 2;
      const posY = (pageHeight - drawHeight) / 2;

      const parts = [];
      const offsets = [];

      let byteLength = 0;
      function recordOffset() { offsets.push(byteLength); }

      function append(str) {
        const enc = new TextEncoder().encode(str);
        byteLength += enc.length;
        parts.push(enc);
      }

      function appendBytes(bytes) {
        byteLength += bytes.length;
        parts.push(bytes);
      }

      append('%PDF-1.4\n%âãÏÓ\n');

      recordOffset();
      append('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

      recordOffset();
      append('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');

      recordOffset();
      append(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth.toFixed(2)} ${pageHeight.toFixed(2)}] /Resources << /XObject << /Im1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`);

      recordOffset();
      append(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${img.naturalWidth} /Height ${img.naturalHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageBytes.length} >>\nstream\n`);
      appendBytes(imageBytes);
      append('\nendstream\nendobj\n');

      const streamContent = `q\n${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${posX.toFixed(2)} ${posY.toFixed(2)} cm\n/Im1 Do\nQ\n`;
      const streamBytes = new TextEncoder().encode(streamContent);
      recordOffset();
      append(`5 0 obj\n<< /Length ${streamBytes.length} >>\nstream\n`);
      appendBytes(streamBytes);
      append('endstream\nendobj\n');

      const xrefOffset = byteLength;
      append('xref\n0 6\n');
      append('0000000000 65535 f \n');
      for (let i = 0; i < offsets.length; i++) {
        append(String(offsets[i]).padStart(10, '0') + ' 00000 n \n');
      }

      append(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

      const pdfBlob = new Blob(parts, { type: 'application/pdf' });
      triggerDownload(pdfBlob, `${baseName}-aayam.pdf`);
      showToast('PDF created successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Failed to generate PDF. Please try another image.', 'error');
    }
  }

  // --- 6.6 Merge PDF Functional Implementation ---
  function renderMergePdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML('Privacy First', 'Combine multiple PDF files locally in browser memory. No files are uploaded to any server.')}

        ${getOptionBImportHTML({
          containerId: 'merge-import-box',
          dropzoneId: 'merge-dropzone',
          fileInputId: 'merge-file-input',
          browseBtnId: 'merge-browse-btn',
          fileTypeLabel: 'PDF',
          formatHint: 'Select multiple PDF documents up to 25 MB each',
          accept: 'application/pdf',
          multiple: true,
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <div id="merge-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: #1e293b;">Selected Documents (Drag or use arrows to order)</span>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-reset-merge" style="font-size: 0.75rem; padding: 4px 10px;">
              Reset / Change Files
            </button>
          </div>

          <div class="merge-files-list" id="merge-files-list"></div>

          <div class="stats-bar">
            <div class="stat-tag">Files: <strong id="merge-stat-files">0</strong></div>
            <div class="stat-tag">Total Pages: <strong id="merge-stat-pages">0</strong></div>
            <div class="stat-tag">Combined Size: <strong id="merge-stat-size">0 B</strong></div>
          </div>

          <div style="display: flex; gap: 0.75rem; width: 100%;">
            <button type="button" class="btn btn-secondary" id="btn-add-more-merge" style="flex: 1;">
              + Add More Files
            </button>
            <button type="button" class="btn btn-primary" id="btn-do-merge" style="flex: 2;">
              Merge & Download Combined PDF
            </button>
          </div>
        </div>
      </div>
    `;

    const importBox = document.getElementById('merge-import-box');
    const fileInput = document.getElementById('merge-file-input');
    const workArea = document.getElementById('merge-work-area');
    const filesList = document.getElementById('merge-files-list');
    const statFiles = document.getElementById('merge-stat-files');
    const statPages = document.getElementById('merge-stat-pages');
    const statSize = document.getElementById('merge-stat-size');
    const addMoreBtn = document.getElementById('btn-add-more-merge');
    const mergeBtn = document.getElementById('btn-do-merge');
    const resetBtn = document.getElementById('btn-reset-merge');

    let pdfEntries = [];

    function resetMergeState() {
      pdfEntries = [];
      workArea.style.display = 'none';
      importBox.style.display = 'block';
      if (fileInput) fileInput.value = '';
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', resetMergeState);
    }

    async function addFiles(files) {
      if (!files || !files.length) return;
      for (const file of Array.from(files)) {
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
          showToast(`Skipped "${file.name}" (not a PDF file).`, 'error');
          continue;
        }
        if (file.size > MAX_IMAGE_FILE_SIZE) {
          showToast(`"${file.name}" exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
          continue;
        }
        if (file.size === 0) {
          showToast(`"${file.name}" is empty (0 bytes).`, 'error');
          continue;
        }

        try {
          const buf = await file.arrayBuffer();
          const doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
          if (doc.isEncrypted) {
            showToast(`"${file.name}" is password-protected. Please unlock it first.`, 'error');
            continue;
          }
          const pageCount = doc.getPageCount();
          pdfEntries.push({ file, buf, pageCount });
        } catch (err) {
          console.error('Error loading PDF:', err);
          showToast(`Failed to parse "${file.name}". File may be corrupted.`, 'error');
        }
      }

      renderList();
    }

    function renderList() {
      if (!pdfEntries.length) {
        workArea.style.display = 'none';
        importBox.style.display = 'block';
        return;
      }
      importBox.style.display = 'none';
      workArea.style.display = 'flex';
      let totalP = 0;
      let totalS = 0;
      filesList.innerHTML = pdfEntries.map((entry, idx) => {
        totalP += entry.pageCount;
        totalS += entry.file.size;
        return `
          <div class="merge-file-item" data-idx="${idx}">
            <div class="merge-file-info">
              <span style="font-weight: 700; color: #2563eb; width: 20px;">#${idx + 1}</span>
              <span class="merge-file-name" title="${escapeHtml(entry.file.name)}">${escapeHtml(entry.file.name)}</span>
              <span class="merge-file-meta">(${entry.pageCount} ${entry.pageCount === 1 ? 'page' : 'pages'} • ${formatBytes(entry.file.size)})</span>
            </div>
            <div class="merge-file-actions">
              <button type="button" class="merge-btn-icon move-up" title="Move Up" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:default;"' : ''}>&uarr;</button>
              <button type="button" class="merge-btn-icon move-down" title="Move Down" ${idx === pdfEntries.length - 1 ? 'disabled style="opacity:0.3;cursor:default;"' : ''}>&darr;</button>
              <button type="button" class="merge-btn-icon remove" title="Remove File">&times;</button>
            </div>
          </div>
        `;
      }).join('');

      statFiles.textContent = pdfEntries.length;
      statPages.textContent = totalP;
      statSize.textContent = formatBytes(totalS);

      // Event listeners for move and delete
      filesList.querySelectorAll('.move-up').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.closest('.merge-file-item').getAttribute('data-idx'), 10);
          if (idx > 0) {
            const temp = pdfEntries[idx];
            pdfEntries[idx] = pdfEntries[idx - 1];
            pdfEntries[idx - 1] = temp;
            renderList();
          }
        });
      });
      filesList.querySelectorAll('.move-down').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.closest('.merge-file-item').getAttribute('data-idx'), 10);
          if (idx < pdfEntries.length - 1) {
            const temp = pdfEntries[idx];
            pdfEntries[idx] = pdfEntries[idx + 1];
            pdfEntries[idx + 1] = temp;
            renderList();
          }
        });
      });
      filesList.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.closest('.merge-file-item').getAttribute('data-idx'), 10);
          pdfEntries.splice(idx, 1);
          renderList();
          showToast('File removed from list.', 'info');
        });
      });
    }

    initOptionBImportHandlers({
      dropzoneId: 'merge-dropzone',
      fileInputId: 'merge-file-input',
      browseBtnId: 'merge-browse-btn',
      onFilesSelected: (files) => {
        addFiles(files);
      }
    });

    addMoreBtn.addEventListener('click', () => fileInput.click());

    mergeBtn.addEventListener('click', async () => {
      if (pdfEntries.length < 2) {
        showToast('Please add at least 2 PDF files to merge.', 'info');
        return;
      }
      try {
        mergeBtn.disabled = true;
        mergeBtn.textContent = 'Merging Documents...';
        const mergedDoc = await PDFLib.PDFDocument.create();
        for (const entry of pdfEntries) {
          const srcDoc = await PDFLib.PDFDocument.load(entry.buf);
          const copiedPages = await mergedDoc.copyPages(srcDoc, srcDoc.getPageIndices());
          copiedPages.forEach(p => mergedDoc.addPage(p));
        }
        const mergedBytes = await mergedDoc.save();
        triggerDownload(new Blob([mergedBytes], { type: 'application/pdf' }), 'merged-document-aayam.pdf');
        showToast(`Successfully merged ${pdfEntries.length} files (${mergedDoc.getPageCount()} pages)!`, 'success');
      } catch (err) {
        console.error('Merge error:', err);
        showToast('Failed to merge documents. Please try again.', 'error');
      } finally {
        mergeBtn.disabled = false;
        mergeBtn.textContent = 'Merge & Download Combined PDF';
      }
    });
  }

  // --- 6.7 Split PDF Functional Implementation ---
  function renderSplitPdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML('Privacy First', 'Your PDF pages are extracted locally in browser memory. No documents are uploaded to any server.')}

        ${getOptionBImportHTML({
          containerId: 'split-import-box',
          dropzoneId: 'split-dropzone',
          fileInputId: 'split-file-input',
          browseBtnId: 'split-browse-btn',
          fileTypeLabel: 'PDF',
          formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
          accept: 'application/pdf',
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <div id="split-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.5rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-split-pdf" style="font-size: 0.75rem; padding: 4px 10px;">
              Change PDF
            </button>
          </div>

          <div class="stats-bar">
            <div class="stat-tag">File: <strong id="split-stat-name">-</strong></div>
            <div class="stat-tag">Total Pages: <strong id="split-stat-pages">0</strong></div>
            <div class="stat-tag">Size: <strong id="split-stat-size">0 B</strong></div>
          </div>

          <div class="control-field">
            <label for="split-range-input">Pages to Extract (e.g. 1-3, 5, 8-10):</label>
            <input type="text" id="split-range-input" class="form-control" placeholder="e.g. 1-2, 4">
            <small style="color: #64748b; font-size: 0.775rem; margin-top: 4px; display: block;">
              Use commas for distinct pages and hyphens for continuous ranges.
            </small>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-do-split">
            Extract & Download Split PDF
          </button>
        </div>
      </div>
    `;

    const importBox = document.getElementById('split-import-box');
    const workArea = document.getElementById('split-work-area');
    const statName = document.getElementById('split-stat-name');
    const statPages = document.getElementById('split-stat-pages');
    const statSize = document.getElementById('split-stat-size');
    const rangeInput = document.getElementById('split-range-input');
    const splitBtn = document.getElementById('btn-do-split');
    const changeBtn = document.getElementById('btn-change-split-pdf');

    let loadedPdfBytes = null;
    let loadedPdfDoc = null;
    let baseFileName = 'split-doc';
    let totalPageCount = 0;

    function resetSplitState() {
      loadedPdfBytes = null;
      loadedPdfDoc = null;
      baseFileName = 'split-doc';
      totalPageCount = 0;
      statName.textContent = '-';
      statPages.textContent = '0';
      statSize.textContent = '0 B';
      rangeInput.value = '';
      workArea.style.display = 'none';
      importBox.style.display = 'block';
      const fileInput = document.getElementById('split-file-input');
      if (fileInput) fileInput.value = '';
    }

    if (changeBtn) {
      changeBtn.addEventListener('click', resetSplitState);
    }

    async function loadPdf(file) {
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF file.', 'error');
        resetSplitState();
        return;
      }
      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        resetSplitState();
        return;
      }
      if (file.size === 0) {
        showToast('Selected file is empty.', 'error');
        resetSplitState();
        return;
      }

      baseFileName = file.name.replace(/\.[^/.]+$/, '');
      try {
        const buf = await file.arrayBuffer();
        const doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        if (doc.isEncrypted) {
          showToast('File is password-protected. Please unlock it before splitting.', 'error');
          resetSplitState();
          return;
        }
        loadedPdfBytes = buf;
        loadedPdfDoc = doc;
        totalPageCount = doc.getPageCount();

        statName.textContent = file.name;
        statPages.textContent = totalPageCount;
        statSize.textContent = formatBytes(file.size);
        rangeInput.value = totalPageCount > 1 ? `1-${Math.min(3, totalPageCount)}` : '1';
        importBox.style.display = 'none';
        workArea.style.display = 'flex';
        showToast(`Loaded "${file.name}" (${totalPageCount} pages)`, 'info');
      } catch (err) {
        console.error('Split load error:', err);
        showToast('Failed to load PDF file. It may be corrupt or encrypted.', 'error');
        resetSplitState();
      }
    }

    initOptionBImportHandlers({
      dropzoneId: 'split-dropzone',
      fileInputId: 'split-file-input',
      browseBtnId: 'split-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) loadPdf(files[0]);
      }
    });

    splitBtn.addEventListener('click', async () => {
      if (!loadedPdfDoc || !totalPageCount) return;
      const rangeStr = rangeInput.value.trim();
      if (!rangeStr) {
        showToast('Please specify the pages or page range to extract.', 'info');
        return;
      }

      const pagesToExtract = new Set();
      const parts = rangeStr.split(',');
      for (const part of parts) {
        const trimmed = part.trim();
        if (/^\d+$/.test(trimmed)) {
          const num = parseInt(trimmed, 10);
          if (num >= 1 && num <= totalPageCount) pagesToExtract.add(num - 1);
        } else if (/^\d+\s*-\s*\d+$/.test(trimmed)) {
          const [startStr, endStr] = trimmed.split('-');
          const start = parseInt(startStr.trim(), 10);
          const end = parseInt(endStr.trim(), 10);
          const low = Math.min(start, end);
          const high = Math.max(start, end);
          for (let p = low; p <= high; p++) {
            if (p >= 1 && p <= totalPageCount) pagesToExtract.add(p - 1);
          }
        }
      }

      const indices = Array.from(pagesToExtract).sort((a, b) => a - b);
      if (!indices.length) {
        showToast(`No valid pages selected. Document has ${totalPageCount} pages.`, 'error');
        return;
      }

      try {
        splitBtn.disabled = true;
        splitBtn.textContent = 'Extracting Pages...';
        const newDoc = await PDFLib.PDFDocument.create();
        const srcDoc = await PDFLib.PDFDocument.load(loadedPdfBytes);
        const copied = await newDoc.copyPages(srcDoc, indices);
        copied.forEach(p => newDoc.addPage(p));
        const splitBytes = await newDoc.save();
        triggerDownload(new Blob([splitBytes], { type: 'application/pdf' }), `${baseFileName}-extracted.pdf`);
        showToast(`Extracted ${indices.length} pages successfully!`, 'success');
      } catch (err) {
        console.error('Split error:', err);
        showToast('Error extracting PDF pages.', 'error');
      } finally {
        splitBtn.disabled = false;
        splitBtn.textContent = 'Extract & Download Split PDF';
      }
    });
  }

  // --- 6.8 Compress PDF Functional Implementation ---
  function renderCompressPdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML('Privacy First', 'Optimize PDF stream structure and compression locally in browser memory. No files are uploaded to any server.')}

        ${getOptionBImportHTML({
          containerId: 'comp-pdf-import-box',
          dropzoneId: 'comp-pdf-dropzone',
          fileInputId: 'comp-pdf-file-input',
          browseBtnId: 'comp-pdf-browse-btn',
          fileTypeLabel: 'PDF',
          formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
          accept: 'application/pdf',
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <div id="comp-pdf-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.5rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-comp-pdf" style="font-size: 0.75rem; padding: 4px 10px;">
              Change PDF
            </button>
          </div>

          <div class="stats-bar">
            <div class="stat-tag">Original: <strong id="cpdf-orig">-</strong></div>
            <div class="stat-tag">Optimized: <strong id="cpdf-opt">-</strong></div>
            <div class="stat-tag">Savings: <strong id="cpdf-savings" style="color: #059669;">-</strong></div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-download-cpdf">
            Download Optimized PDF
          </button>
        </div>
      </div>
    `;

    const importBox = document.getElementById('comp-pdf-import-box');
    const workArea = document.getElementById('comp-pdf-work-area');
    const origSpan = document.getElementById('cpdf-orig');
    const optSpan = document.getElementById('cpdf-opt');
    const savingsSpan = document.getElementById('cpdf-savings');
    const downloadBtn = document.getElementById('btn-download-cpdf');
    const changeBtn = document.getElementById('btn-change-comp-pdf');

    let originalFile = null;
    let optimizedBlob = null;

    function resetCompressState() {
      originalFile = null;
      optimizedBlob = null;
      origSpan.textContent = '-';
      optSpan.textContent = '-';
      savingsSpan.textContent = '-';
      workArea.style.display = 'none';
      importBox.style.display = 'block';
      const fileInput = document.getElementById('comp-pdf-file-input');
      if (fileInput) fileInput.value = '';
    }

    if (changeBtn) {
      changeBtn.addEventListener('click', resetCompressState);
    }

    async function processPdf(file) {
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF file.', 'error');
        resetCompressState();
        return;
      }
      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        resetCompressState();
        return;
      }
      if (file.size === 0) {
        showToast('Selected file is empty.', 'error');
        resetCompressState();
        return;
      }

      originalFile = file;
      try {
        const buf = await file.arrayBuffer();
        const doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        if (doc.isEncrypted) {
          showToast('File is password-protected. Please unlock it before compressing.', 'error');
          resetCompressState();
          return;
        }

        const optBytes = await doc.save({ useObjectStreams: true, addDefaultPage: false });
        origSpan.textContent = formatBytes(file.size);
        optSpan.textContent = formatBytes(optBytes.length);

        const diff = file.size - optBytes.length;
        if (diff > 0) {
          const percent = Math.round((diff / file.size) * 100);
          savingsSpan.textContent = `-${percent}% (${formatBytes(diff)} saved)`;
          savingsSpan.style.color = '#059669';
          optimizedBlob = new Blob([optBytes], { type: 'application/pdf' });
        } else {
          savingsSpan.textContent = 'Already structurally optimal';
          savingsSpan.style.color = '#1d4ed8';
          optimizedBlob = file;
        }

        importBox.style.display = 'none';
        workArea.style.display = 'flex';
        showToast(`Processed "${file.name}"`, 'info');
      } catch (err) {
        console.error('Compress PDF error:', err);
        showToast('Failed to optimize PDF file.', 'error');
        resetCompressState();
      }
    }

    initOptionBImportHandlers({
      dropzoneId: 'comp-pdf-dropzone',
      fileInputId: 'comp-pdf-file-input',
      browseBtnId: 'comp-pdf-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) processPdf(files[0]);
      }
    });

    downloadBtn.addEventListener('click', () => {
      if (!optimizedBlob || !originalFile) return;
      const baseName = originalFile.name.replace(/\.[^/.]+$/, '');
      triggerDownload(optimizedBlob, `${baseName}-optimized.pdf`);
      showToast('Downloaded optimized PDF!', 'success');
    });
  }

  // --- 6.9 PDF to Images Functional Implementation ---
  function renderPdfToImagesWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML('Privacy First', 'Render PDF pages into high-resolution images locally via HTML5 canvas rasterization. No files are uploaded to any server.')}

        ${getOptionBImportHTML({
          containerId: 'p2i-import-box',
          dropzoneId: 'p2i-dropzone',
          fileInputId: 'p2i-file-input',
          browseBtnId: 'p2i-browse-btn',
          fileTypeLabel: 'PDF',
          formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
          accept: 'application/pdf',
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <div id="p2i-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.5rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-p2i-pdf" style="font-size: 0.75rem; padding: 4px 10px;">
              Change PDF
            </button>
          </div>

          <div class="tool-controls-grid">
            <div class="control-field">
              <label for="p2i-format">Image Format:</label>
              <select id="p2i-format" class="form-control">
                <option value="image/png">PNG (Lossless High Fidelity)</option>
                <option value="image/jpeg">JPEG (Compressed)</option>
              </select>
            </div>
            <div class="control-field">
              <label for="p2i-scale">Rendering Quality:</label>
              <select id="p2i-scale" class="form-control">
                <option value="1.5">Standard Sharp (150 DPI)</option>
                <option value="2.0" selected>Crisp High-Res (200 DPI)</option>
              </select>
            </div>
            <div class="control-field">
              <label for="p2i-page-select">Select Page:</label>
              <select id="p2i-page-select" class="form-control"></select>
            </div>
          </div>

          <div class="preview-img-container" style="max-height: 290px; overflow: auto; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px; background: #f8fafc;">
            <canvas id="p2i-preview-canvas" style="max-width: 100%; height: auto; display: block; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.08);"></canvas>
          </div>

          <div class="stats-bar">
            <div class="stat-tag">Page: <strong id="p2i-stat-page">-</strong></div>
            <div class="stat-tag">Resolution: <strong id="p2i-stat-res">-</strong></div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-download-p2i">
            Download Page Image
          </button>
        </div>
      </div>
    `;

    const importBox = document.getElementById('p2i-import-box');
    const workArea = document.getElementById('p2i-work-area');
    const formatSelect = document.getElementById('p2i-format');
    const scaleSelect = document.getElementById('p2i-scale');
    const pageSelect = document.getElementById('p2i-page-select');
    const canvas = document.getElementById('p2i-preview-canvas');
    const statPage = document.getElementById('p2i-stat-page');
    const statRes = document.getElementById('p2i-stat-res');
    const downloadBtn = document.getElementById('btn-download-p2i');
    const changeBtn = document.getElementById('btn-change-p2i-pdf');

    let pdfDoc = null;
    let baseFileName = 'pdf-page';
    let currentPageNum = 1;

    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/libs/pdf.worker.min.js';
    }

    function resetP2iState() {
      pdfDoc = null;
      baseFileName = 'pdf-page';
      currentPageNum = 1;
      pageSelect.innerHTML = '';
      statPage.textContent = '-';
      statRes.textContent = '-';
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = 0;
      canvas.height = 0;
      workArea.style.display = 'none';
      importBox.style.display = 'block';
      const fileInput = document.getElementById('p2i-file-input');
      if (fileInput) fileInput.value = '';
    }

    if (changeBtn) {
      changeBtn.addEventListener('click', resetP2iState);
    }

    async function renderPage(pageNum) {
      if (!pdfDoc) return;
      try {
        const scale = parseFloat(scaleSelect.value);
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({ canvasContext: ctx, viewport }).promise;
        statPage.textContent = `Page ${pageNum} of ${pdfDoc.numPages}`;
        statRes.textContent = `${Math.round(canvas.width)} × ${Math.round(canvas.height)} px`;
      } catch (err) {
        console.error('Render error:', err);
        showToast('Error rendering page image.', 'error');
      }
    }

    async function loadPdf(file) {
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF file.', 'error');
        resetP2iState();
        return;
      }
      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        resetP2iState();
        return;
      }

      baseFileName = file.name.replace(/\.[^/.]+$/, '');
      try {
        const buf = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: buf });
        pdfDoc = await loadingTask.promise;

        pageSelect.innerHTML = '';
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const opt = document.createElement('option');
          opt.value = i;
          opt.textContent = `Page ${i} of ${pdfDoc.numPages}`;
          pageSelect.appendChild(opt);
        }

        currentPageNum = 1;
        importBox.style.display = 'none';
        workArea.style.display = 'flex';
        await renderPage(1);
        showToast(`Loaded "${file.name}" (${pdfDoc.numPages} pages)`, 'info');
      } catch (err) {
        console.error('PDF to Image error:', err);
        showToast('Could not load PDF document. File may be encrypted or corrupted.', 'error');
        resetP2iState();
      }
    }

    initOptionBImportHandlers({
      dropzoneId: 'p2i-dropzone',
      fileInputId: 'p2i-file-input',
      browseBtnId: 'p2i-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) loadPdf(files[0]);
      }
    });

    pageSelect.addEventListener('change', () => {
      currentPageNum = parseInt(pageSelect.value, 10);
      renderPage(currentPageNum);
    });

    scaleSelect.addEventListener('change', () => renderPage(currentPageNum));

    downloadBtn.addEventListener('click', () => {
      if (!canvas.width || !canvas.height) return;
      const mime = formatSelect.value;
      const ext = mime === 'image/jpeg' ? 'jpg' : 'png';
      canvas.toBlob(blob => {
        triggerDownload(blob, `${baseFileName}-page-${currentPageNum}.${ext}`);
        showToast(`Downloaded page ${currentPageNum} as ${ext.toUpperCase()}!`, 'success');
      }, mime, 0.95);
    });
  }

  // --- 6.10 Word to PDF Functional Implementation ---
  function renderWordToPdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel">
        ${getOptionBPrivacyBannerHTML('Privacy First', 'Your Word documents are parsed 100% locally in browser memory. No files are uploaded to any server.')}

        ${getOptionBImportHTML({
          containerId: 'word-import-box',
          dropzoneId: 'word-dropzone',
          fileInputId: 'word-file-input',
          browseBtnId: 'word-browse-btn',
          fileTypeLabel: 'Word (.docx)',
          formatHint: 'Supports Microsoft Word documents (.docx) up to 25 MB',
          accept: '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          badgeText: 'DOCX',
          badgeColor: '#2563eb'
        })}

        <div id="word-work-area" style="display: none;" class="preview-box">
          <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 0.5rem;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-change-word-file" style="font-size: 0.75rem; padding: 4px 10px;">
              Change Document
            </button>
          </div>

          <div class="docx-preview-sheet" id="word-preview-content"></div>

          <div class="stats-bar">
            <div class="stat-tag">File: <strong id="word-stat-name">-</strong></div>
            <div class="stat-tag">Size: <strong id="word-stat-size">-</strong></div>
            <div class="stat-tag">Status: <strong style="color: #059669;">Parsed Successfully</strong></div>
          </div>

          <button type="button" class="btn btn-primary btn-block" id="btn-do-word-pdf">
            Generate & Download A4 PDF
          </button>
        </div>
      </div>
    `;

    const importBox = document.getElementById('word-import-box');
    const workArea = document.getElementById('word-work-area');
    const previewContent = document.getElementById('word-preview-content');
    const statName = document.getElementById('word-stat-name');
    const statSize = document.getElementById('word-stat-size');
    const convertBtn = document.getElementById('btn-do-word-pdf');
    const changeBtn = document.getElementById('btn-change-word-file');

    let originalFileName = 'document';

    function resetWordState() {
      originalFileName = 'document';
      previewContent.innerHTML = '';
      statName.textContent = '-';
      statSize.textContent = '-';
      workArea.style.display = 'none';
      importBox.style.display = 'block';
      const fileInput = document.getElementById('word-file-input');
      if (fileInput) fileInput.value = '';
    }

    if (changeBtn) {
      changeBtn.addEventListener('click', resetWordState);
    }

    async function loadDocx(file) {
      if (!file) return;
      if (!file.name.toLowerCase().endsWith('.docx')) {
        showToast('Please select a valid Word (.docx) document.', 'error');
        resetWordState();
        return;
      }
      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        resetWordState();
        return;
      }
      if (file.size === 0) {
        showToast('Selected file is empty.', 'error');
        resetWordState();
        return;
      }

      originalFileName = file.name.replace(/\.[^/.]+$/, '');
      try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await window.mammoth.convertToHtml({ arrayBuffer });
        const html = result.value;

        previewContent.innerHTML = html || '<p><em>(Empty document)</em></p>';
        statName.textContent = file.name;
        statSize.textContent = formatBytes(file.size);
        importBox.style.display = 'none';
        workArea.style.display = 'flex';
        showToast(`Loaded "${file.name}"`, 'info');
      } catch (err) {
        console.error('Word parsing error:', err);
        showToast('Failed to parse Word document. Please ensure it is a valid .docx file.', 'error');
        resetWordState();
      }
    }

    initOptionBImportHandlers({
      dropzoneId: 'word-dropzone',
      fileInputId: 'word-file-input',
      browseBtnId: 'word-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) loadDocx(files[0]);
      }
    });

    convertBtn.addEventListener('click', async () => {
      try {
        convertBtn.disabled = true;
        convertBtn.textContent = 'Synthesizing PDF...';

        const pdfDoc = await PDFLib.PDFDocument.create();
        const pageWidth = 595.28;
        const pageHeight = 841.89;
        const margin = 48;
        let page = pdfDoc.addPage([pageWidth, pageHeight]);

        const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        const boldFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);

        let currentY = pageHeight - margin;

        page.drawText(originalFileName, { x: margin, y: currentY, size: 16, font: boldFont, color: PDFLib.rgb(0.1, 0.15, 0.25) });
        currentY -= 24;

        page.drawLine({
          start: { x: margin, y: currentY },
          end: { x: pageWidth - margin, y: currentY },
          thickness: 1,
          color: PDFLib.rgb(0.85, 0.9, 0.95)
        });
        currentY -= 24;

        const textElements = previewContent.querySelectorAll('h1, h2, h3, p, li, table');
        for (const el of textElements) {
          if (currentY < margin + 40) {
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            currentY = pageHeight - margin;
          }

          const isHeader = ['H1', 'H2', 'H3'].includes(el.tagName);
          const fontSize = isHeader ? 13 : 10;
          const currentFont = isHeader ? boldFont : font;
          const text = el.textContent.trim();
          if (!text) continue;

          const maxLineWidth = pageWidth - margin * 2;
          const words = text.split(/\s+/);
          let currentLine = '';

          for (const word of words) {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const textWidth = currentFont.widthOfTextAtSize(testLine, fontSize);

            if (textWidth > maxLineWidth) {
              page.drawText(currentLine, { x: margin, y: currentY, size: fontSize, font: currentFont, color: PDFLib.rgb(0.2, 0.25, 0.3) });
              currentY -= fontSize + 5;
              currentLine = word;
              if (currentY < margin + 40) {
                page = pdfDoc.addPage([pageWidth, pageHeight]);
                currentY = pageHeight - margin;
              }
            } else {
              currentLine = testLine;
            }
          }

          if (currentLine) {
            page.drawText(currentLine, { x: margin, y: currentY, size: fontSize, font: currentFont, color: PDFLib.rgb(0.2, 0.25, 0.3) });
            currentY -= fontSize + 10;
          }
        }

        const pdfBytes = await pdfDoc.save();
        triggerDownload(new Blob([pdfBytes], { type: 'application/pdf' }), `${originalFileName}-aayam.pdf`);
        showToast('Word document converted to PDF successfully!', 'success');
      } catch (err) {
        console.error('Word to PDF conversion error:', err);
        showToast('Error generating PDF from Word file.', 'error');
      } finally {
        convertBtn.disabled = false;
        convertBtn.textContent = 'Generate & Download A4 PDF';
      }
    });
  }

  // --- 6.11 Excel to PDF Functional Implementation (Interactive Spreadsheet Workspace, Visual Range Selection & Genuine PDF Preview) ---
  function renderExcelToPdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-panel excel-workbench-root">
        ${getOptionBPrivacyBannerHTML('Privacy First', 'Your spreadsheets are parsed 100% locally in browser memory. No financial or personal data leaves your device.')}

        ${getOptionBImportHTML({
          containerId: 'excel-import-box',
          dropzoneId: 'excel-dropzone',
          fileInputId: 'excel-file-input',
          browseBtnId: 'excel-browse-btn',
          fileTypeLabel: 'spreadsheet (.xlsx, .xls, .csv)',
          formatHint: 'Supports Excel and CSV spreadsheets up to 25 MB',
          accept: '.xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv',
          badgeText: 'XLSX',
          badgeColor: '#10b981'
        })}

        <div id="excel-work-area" style="display: none;" class="excel-studio-container">
          <!-- Top Header Bar -->
          <div class="excel-workbench-header">
            <div class="excel-file-meta-group">
              <div class="excel-file-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="8" y1="13" x2="16" y2="13"></line>
                  <line x1="8" y1="17" x2="13" y2="17"></line>
                </svg>
              </div>
              <div class="excel-file-info">
                <span class="excel-filename-text" id="excel-filename-text">spreadsheet.xlsx</span>
                <span class="excel-file-stats" id="excel-file-stats">0 Sheets · 0 Rows × 0 Cols</span>
              </div>
              <button type="button" class="btn btn-secondary btn-xs" id="btn-change-excel-file" title="Load another spreadsheet">
                Change File
              </button>
            </div>

            <!-- View Toggle Pills -->
            <div class="excel-view-toggle-pills" role="tablist">
              <button type="button" class="excel-toggle-pill active" id="btn-view-spreadsheet" role="tab" aria-selected="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="3" y1="15" x2="21" y2="15"></line>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                  <line x1="15" y1="3" x2="15" y2="21"></line>
                </svg>
                Spreadsheet Grid
              </button>
              <button type="button" class="excel-toggle-pill" id="btn-view-preview" role="tab" aria-selected="false">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                PDF Preview
              </button>
            </div>

            <!-- Header Action Buttons -->
            <div class="excel-header-actions">
              <button type="button" class="btn btn-secondary btn-sm" id="btn-toggle-print-settings" title="Toggle Print Settings Panel">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Print Settings
              </button>
              <button type="button" class="btn btn-primary btn-sm" id="btn-export-download-pdf">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download PDF
              </button>
            </div>
          </div>

          <!-- Main Workspace Body -->
          <div class="excel-workbench-body">
            <!-- Left Main Content Area -->
            <div class="excel-main-content">
              <!-- 1. Interactive Spreadsheet Grid View Pane -->
              <div id="excel-spreadsheet-view" class="excel-view-pane active">
                <!-- Selection Toolbar: Visual Selection Status Pill & Quick Selection Buttons -->
                <div class="excel-selection-bar">
                  <!-- Visual Selection Status Pill (Informational only, not text input) -->
                  <div class="excel-range-pill" id="excel-range-pill" title="Current Selected Cell Range">
                    <span class="range-pill-icon">⛶</span>
                    <span class="range-pill-label" id="excel-sel-range-name">A1</span>
                    <span class="range-pill-dot">•</span>
                    <span class="range-pill-dim" id="excel-sel-range-dim">1 row × 1 col</span>
                  </div>

                  <div class="excel-selection-hint">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <span>Drag mouse or touch across cells to select printable range</span>
                  </div>

                  <!-- Quick Selection Actions -->
                  <div class="excel-selection-btns">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-sel-used-data" title="Select all cells with data">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path>
                      </svg>
                      Select All Used Data
                    </button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-sel-entire-sheet" title="Select the entire sheet">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                      </svg>
                      Select Entire Sheet
                    </button>
                  </div>
                </div>

                <!-- Interactive Spreadsheet Grid -->
                <div class="excel-grid-container" id="excel-grid-container" tabindex="0">
                  <table class="excel-grid-table" id="excel-grid-table"></table>
                </div>

                <!-- Sheet Tabs Bar along the bottom of the grid -->
                <div class="excel-sheet-tabs-bar">
                  <div class="excel-sheet-tabs-scroll" id="excel-sheet-tabs-container"></div>
                  <div class="excel-export-scope-wrapper">
                    <label for="excel-export-scope">Include in PDF:</label>
                    <select id="excel-export-scope" class="form-control form-control-xs">
                      <option value="active" selected>Active Sheet Only</option>
                      <option value="all">All Worksheets</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- 2. Genuine PDF Preview Pane -->
              <div id="excel-pdf-preview-view" class="excel-view-pane" style="display: none;">
                <!-- PDF Navigation Bar -->
                <div class="excel-pdf-nav-bar">
                  <div class="excel-pdf-nav-group">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-excel-pdf-prev" title="Previous Page">◀ Prev</button>
                    <span class="excel-pdf-page-indicator" id="excel-pdf-page-indicator">Page 1 of 1</span>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-excel-pdf-next" title="Next Page">Next ▶</button>
                  </div>

                  <div class="excel-pdf-zoom-group">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-excel-pdf-zoom-out" title="Zoom Out">−</button>
                    <span class="excel-pdf-zoom-label" id="excel-pdf-zoom-label">100%</span>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-excel-pdf-zoom-in" title="Zoom In">+</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-excel-pdf-zoom-fit" title="Fit to View">Fit</button>
                  </div>

                  <div class="excel-pdf-action-group">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-excel-pdf-print" title="Print PDF">
                      🖨️ Print
                    </button>
                    <button type="button" class="btn btn-primary btn-xs" id="btn-excel-pdf-download" title="Download PDF">
                      ⬇️ Download PDF
                    </button>
                  </div>
                </div>

                <!-- PDF Canvas Viewport -->
                <div class="excel-pdf-viewport" id="excel-pdf-viewport">
                  <div class="excel-pdf-page-wrapper" id="excel-pdf-page-wrapper">
                    <canvas id="excel-pdf-render-canvas"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Print Settings Panel -->
            <aside class="excel-print-settings-panel" id="excel-print-settings-panel">
              <div class="settings-panel-header">
                <span class="settings-panel-title">Print Settings</span>
                <button type="button" class="settings-panel-close-btn" id="btn-close-settings-panel" title="Close Panel">✕</button>
              </div>

              <div class="settings-panel-content">
                <!-- Paper Size -->
                <div class="setting-row">
                  <label for="excel-setting-paper">Paper Size:</label>
                  <select id="excel-setting-paper" class="form-control form-control-sm">
                    <option value="A4" selected>A4 (210 × 297 mm)</option>
                    <option value="Letter">Letter (8.5 × 11 in)</option>
                    <option value="Legal">Legal (8.5 × 14 in)</option>
                  </select>
                </div>

                <!-- Orientation -->
                <div class="setting-row">
                  <label>Orientation:</label>
                  <div class="setting-btn-group">
                    <button type="button" class="setting-toggle-btn active" data-orientation="landscape" id="btn-orient-landscape">
                      Landscape
                    </button>
                    <button type="button" class="setting-toggle-btn" data-orientation="portrait" id="btn-orient-portrait">
                      Portrait
                    </button>
                  </div>
                </div>

                <!-- Scaling -->
                <div class="setting-row">
                  <label for="excel-setting-scaling">Scaling:</label>
                  <select id="excel-setting-scaling" class="form-control form-control-sm">
                    <option value="fit-width" selected>Fit to Page Width (Recommended)</option>
                    <option value="fit-page">Fit to One Page</option>
                    <option value="actual">Actual Size (100%)</option>
                  </select>
                </div>

                <!-- Margins -->
                <div class="setting-row">
                  <label for="excel-setting-margins">Margins:</label>
                  <select id="excel-setting-margins" class="form-control form-control-sm">
                    <option value="normal" selected>Normal (20 mm)</option>
                    <option value="narrow">Narrow (10 mm)</option>
                    <option value="wide">Wide (25 mm)</option>
                  </select>
                </div>

                <!-- Checkboxes -->
                <div class="setting-checkbox-group">
                  <label class="setting-checkbox-label">
                    <input type="checkbox" id="excel-setting-repeat-header" checked>
                    <span>Repeat header row on each page</span>
                  </label>
                  <label class="setting-checkbox-label">
                    <input type="checkbox" id="excel-setting-gridlines" checked>
                    <span>Print table gridlines</span>
                  </label>
                  <label class="setting-checkbox-label">
                    <input type="checkbox" id="excel-setting-page-footer" checked>
                    <span>Include sheet name & page numbers</span>
                  </label>
                </div>

                <!-- Legibility Warning Banner -->
                <div class="excel-setting-warning" id="excel-scale-warning" style="display: none;">
                  ⚠️ Large range selected. Fitting to 1 page may result in very small text. "Fit to Page Width" or Landscape is recommended.
                </div>

                <!-- Reset Defaults -->
                <div class="setting-action-row">
                  <button type="button" class="btn btn-secondary btn-xs btn-block" id="btn-reset-excel-settings">
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    `;

    // DOM Element References
    const importBox = document.getElementById('excel-import-box');
    const workArea = document.getElementById('excel-work-area');
    const fileNameEl = document.getElementById('excel-filename-text');
    const fileStatsEl = document.getElementById('excel-file-stats');
    const changeFileBtn = document.getElementById('btn-change-excel-file');
    const viewSpreadsheetBtn = document.getElementById('btn-view-spreadsheet');
    const viewPreviewBtn = document.getElementById('btn-view-preview');
    const spreadsheetView = document.getElementById('excel-spreadsheet-view');
    const pdfPreviewView = document.getElementById('excel-pdf-preview-view');
    const toggleSettingsBtn = document.getElementById('btn-toggle-print-settings');
    const closeSettingsBtn = document.getElementById('btn-close-settings-panel');
    const settingsPanel = document.getElementById('excel-print-settings-panel');
    const exportDownloadBtn = document.getElementById('btn-export-download-pdf');

    const selRangeNameEl = document.getElementById('excel-sel-range-name');
    const selRangeDimEl = document.getElementById('excel-sel-range-dim');
    const selUsedDataBtn = document.getElementById('btn-sel-used-data');
    const selEntireSheetBtn = document.getElementById('btn-sel-entire-sheet');
    const gridContainer = document.getElementById('excel-grid-container');
    const gridTable = document.getElementById('excel-grid-table');
    const sheetTabsContainer = document.getElementById('excel-sheet-tabs-container');
    const exportScopeSelect = document.getElementById('excel-export-scope');

    // Print Settings Controls
    const paperSelect = document.getElementById('excel-setting-paper');
    const orientLandscapeBtn = document.getElementById('btn-orient-landscape');
    const orientPortraitBtn = document.getElementById('btn-orient-portrait');
    const scalingSelect = document.getElementById('excel-setting-scaling');
    const marginsSelect = document.getElementById('excel-setting-margins');
    const repeatHeaderCheckbox = document.getElementById('excel-setting-repeat-header');
    const gridlinesCheckbox = document.getElementById('excel-setting-gridlines');
    const pageFooterCheckbox = document.getElementById('excel-setting-page-footer');
    const scaleWarningEl = document.getElementById('excel-scale-warning');
    const resetSettingsBtn = document.getElementById('btn-reset-excel-settings');

    // PDF Preview Controls
    const previewPrevBtn = document.getElementById('btn-excel-pdf-prev');
    const previewNextBtn = document.getElementById('btn-excel-pdf-next');
    const previewPageIndicator = document.getElementById('excel-pdf-page-indicator');
    const previewZoomOutBtn = document.getElementById('btn-excel-pdf-zoom-out');
    const previewZoomInBtn = document.getElementById('btn-excel-pdf-zoom-in');
    const previewZoomFitBtn = document.getElementById('btn-excel-pdf-zoom-fit');
    const previewZoomLabel = document.getElementById('excel-pdf-zoom-label');
    const previewCanvas = document.getElementById('excel-pdf-render-canvas');
    const previewPrintBtn = document.getElementById('btn-excel-pdf-print');
    const previewDownloadBtn = document.getElementById('btn-excel-pdf-download');

    // State Variables
    let workbook = null;
    let baseFileName = 'spreadsheet';
    let originalFileName = 'spreadsheet.xlsx';
    let activeSheetName = '';
    let sheetSelections = {}; // { [sheetName]: { startRow, startCol, endRow, endCol } }
    let sheetUsedRanges = {}; // { [sheetName]: { minR, minC, maxR, maxC, totalR, totalC, hasData } }
    let currentPdfBytes = null;
    let currentRenderedPages = [];
    let previewPdfDoc = null;
    let currentPreviewPage = 1;
    let totalPreviewPages = 1;
    let previewZoom = 1.0;
    let activeView = 'spreadsheet'; // 'spreadsheet' | 'preview'
    let isDragging = false;
    let dragType = 'cell'; // 'cell' | 'row' | 'col'
    let isGeneratingPdf = false;
    let isPreviewDirty = true;

    let printSettings = {
      paper: 'A4',
      orientation: 'landscape',
      scaling: 'fit-width',
      margins: 'normal',
      repeatHeader: true,
      gridlines: true,
      pageFooter: true,
      exportScope: 'active'
    };

    // Helper: Column index to Excel letter (0 -> A, 1 -> B, 26 -> AA)
    function colToLetter(colIndex) {
      let temp = colIndex;
      let letter = '';
      while (temp >= 0) {
        letter = String.fromCharCode((temp % 26) + 65) + letter;
        temp = Math.floor(temp / 26) - 1;
      }
      return letter;
    }

    // Helper: Format cell coordinate (r, c) -> A1
    function formatCellAddress(r, c) {
      return colToLetter(c) + (r + 1);
    }

    // Helper: Extract clean string value from an XLSX cell
    function getCellDisplayValue(cell) {
      if (!cell || cell.v === undefined || cell.v === null) return '';
      if (cell.w !== undefined) return String(cell.w).trim();
      if (cell.t === 'd' && cell.v instanceof Date) {
        return cell.v.toLocaleDateString();
      }
      if (typeof cell.v === 'number') {
        return Number.isInteger(cell.v) ? String(cell.v) : cell.v.toLocaleString(undefined, { maximumFractionDigits: 4 });
      }
      return String(cell.v).trim();
    }

    // Helper: Detect used data region on a worksheet
    function detectUsedRange(ws) {
      if (!ws || !ws['!ref']) {
        return { minR: 0, minC: 0, maxR: 0, maxC: 0, totalR: 1, totalC: 1, hasData: false };
      }
      const r = window.XLSX.utils.decode_range(ws['!ref']);
      let minR = -1, maxR = -1, minC = -1, maxC = -1;
      for (let row = r.s.r; row <= r.e.r; row++) {
        for (let col = r.s.c; col <= r.e.c; col++) {
          const addr = window.XLSX.utils.encode_cell({ r: row, c: col });
          const cell = ws[addr];
          if (cell && cell.v !== undefined && cell.v !== null && String(cell.v).trim() !== '') {
            if (minR === -1 || row < minR) minR = row;
            if (maxR === -1 || row > maxR) maxR = row;
            if (minC === -1 || col < minC) minC = col;
            if (maxC === -1 || col > maxC) maxC = col;
          }
        }
      }
      if (minR === -1) {
        return { minR: 0, minC: 0, maxR: 0, maxC: 0, totalR: Math.max(1, r.e.r + 1), totalC: Math.max(1, r.e.c + 1), hasData: false };
      }
      return {
        minR,
        minC,
        maxR,
        maxC,
        totalR: Math.max(r.e.r + 1, maxR + 1),
        totalC: Math.max(r.e.c + 1, maxC + 1),
        hasData: true
      };
    }

    // Helper: Check if cell (r, c) is inside a merged range
    function getCellMergeInfo(merges, r, c) {
      if (!merges || !merges.length) return null;
      for (let i = 0; i < merges.length; i++) {
        const m = merges[i];
        if (r >= m.s.r && r <= m.e.r && c >= m.s.c && c <= m.e.c) {
          const isOrigin = (r === m.s.r && c === m.s.c);
          return {
            isOrigin,
            rowSpan: m.e.r - m.s.r + 1,
            colSpan: m.e.c - m.s.c + 1
          };
        }
      }
      return null;
    }

    // Reset Workbench State
    function resetExcelState() {
      workbook = null;
      baseFileName = 'spreadsheet';
      originalFileName = 'spreadsheet.xlsx';
      activeSheetName = '';
      sheetSelections = {};
      sheetUsedRanges = {};
      currentPdfBytes = null;
      currentRenderedPages = [];
      previewPdfDoc = null;
      currentPreviewPage = 1;
      totalPreviewPages = 1;
      previewZoom = 1.0;
      activeView = 'spreadsheet';
      isDragging = false;
      isPreviewDirty = true;

      gridTable.innerHTML = '';
      sheetTabsContainer.innerHTML = '';
      workArea.style.display = 'none';
      importBox.style.display = 'block';

      const fileInput = document.getElementById('excel-file-input');
      if (fileInput) fileInput.value = '';
    }

    if (changeFileBtn) {
      changeFileBtn.addEventListener('click', resetExcelState);
    }

    // Toggle Settings Panel
    if (toggleSettingsBtn) {
      toggleSettingsBtn.addEventListener('click', () => {
        settingsPanel.classList.toggle('collapsed');
      });
    }
    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('collapsed');
      });
    }

    // Switch View between Spreadsheet Grid and PDF Preview
    async function switchView(targetView) {
      if (targetView === activeView) return;
      activeView = targetView;

      if (targetView === 'spreadsheet') {
        viewSpreadsheetBtn.classList.add('active');
        viewSpreadsheetBtn.setAttribute('aria-selected', 'true');
        viewPreviewBtn.classList.remove('active');
        viewPreviewBtn.setAttribute('aria-selected', 'false');

        spreadsheetView.style.display = 'flex';
        pdfPreviewView.style.display = 'none';
      } else {
        viewPreviewBtn.classList.add('active');
        viewPreviewBtn.setAttribute('aria-selected', 'true');
        viewSpreadsheetBtn.classList.remove('active');
        viewSpreadsheetBtn.setAttribute('aria-selected', 'false');

        spreadsheetView.style.display = 'none';
        pdfPreviewView.style.display = 'flex';

        if (isPreviewDirty || !previewPdfDoc) {
          await generateAndRenderPdfPreview();
        }
      }
    }

    viewSpreadsheetBtn.addEventListener('click', () => switchView('spreadsheet'));
    viewPreviewBtn.addEventListener('click', () => switchView('preview'));

    // Update Selection Visuals & Status Pill
    function updateSelectionVisuals() {
      if (!workbook || !activeSheetName) return;
      const sel = sheetSelections[activeSheetName];
      if (!sel) return;

      const minR = Math.min(sel.startRow, sel.endRow);
      const maxR = Math.max(sel.startRow, sel.endRow);
      const minC = Math.min(sel.startCol, sel.endCol);
      const maxC = Math.max(sel.startCol, sel.endCol);

      // Update cells
      const cells = gridTable.querySelectorAll('td[data-row]');
      cells.forEach(td => {
        const r = parseInt(td.getAttribute('data-row'), 10);
        const c = parseInt(td.getAttribute('data-col'), 10);
        const inSel = (r >= minR && r <= maxR && c >= minC && c <= maxC);
        if (inSel) {
          td.classList.add('excel-cell-selected');
          td.classList.toggle('sel-border-t', r === minR);
          td.classList.toggle('sel-border-b', r === maxR);
          td.classList.toggle('sel-border-l', c === minC);
          td.classList.toggle('sel-border-r', c === maxC);
          td.classList.toggle('excel-cell-active', r === sel.startRow && c === sel.startCol);
        } else {
          td.classList.remove('excel-cell-selected', 'sel-border-t', 'sel-border-b', 'sel-border-l', 'sel-border-r', 'excel-cell-active');
        }
      });

      // Update row headers
      const rowHeaders = gridTable.querySelectorAll('th[data-row-header]');
      rowHeaders.forEach(th => {
        const r = parseInt(th.getAttribute('data-row-header'), 10);
        th.classList.toggle('header-selected', r >= minR && r <= maxR);
      });

      // Update column headers
      const colHeaders = gridTable.querySelectorAll('th[data-col-header]');
      colHeaders.forEach(th => {
        const c = parseInt(th.getAttribute('data-col-header'), 10);
        th.classList.toggle('header-selected', c >= minC && c <= maxC);
      });

      // Update informational status pill (read-only)
      const startCell = formatCellAddress(minR, minC);
      const endCell = formatCellAddress(maxR, maxC);
      const rangeLabel = (minR === maxR && minC === maxC) ? startCell : `${startCell}:${endCell}`;
      const rowCount = maxR - minR + 1;
      const colCount = maxC - minC + 1;
      const dimLabel = `${rowCount} row${rowCount > 1 ? 's' : ''} × ${colCount} column${colCount > 1 ? 's' : ''}`;

      selRangeNameEl.textContent = rangeLabel;
      selRangeDimEl.textContent = dimLabel;

      // Check scale warning if "fit-page" is selected
      checkScaleWarning(rowCount, colCount);

      // Mark preview dirty
      isPreviewDirty = true;
    }

    function checkScaleWarning(rows, cols) {
      if (printSettings.scaling === 'fit-page' && (rows > 35 || cols > 10)) {
        scaleWarningEl.style.display = 'block';
      } else {
        scaleWarningEl.style.display = 'none';
      }
    }

    // Render Spreadsheet Grid for the Active Sheet
    function renderSpreadsheetGrid(sheetName) {
      if (!workbook || !workbook.Sheets[sheetName]) return;
      activeSheetName = sheetName;
      const ws = workbook.Sheets[sheetName];
      const used = sheetUsedRanges[sheetName] || detectUsedRange(ws);
      sheetUsedRanges[sheetName] = used;

      if (!sheetSelections[sheetName]) {
        sheetSelections[sheetName] = {
          startRow: used.minR,
          startCol: used.minC,
          endRow: used.maxR,
          endCol: used.maxC
        };
      }

      const totalRows = Math.min(used.totalR, Math.max(used.maxR + 10, 60));
      const totalCols = Math.min(used.totalC, Math.max(used.maxC + 5, 20));
      const merges = ws['!merges'] || [];

      // Build Table HTML
      let html = '<thead><tr>';
      // Corner header cell (click selects all)
      html += '<th class="excel-grid-corner-th" id="excel-corner-select-all" title="Click to select entire sheet">⛶</th>';

      // Column letters
      for (let c = 0; c < totalCols; c++) {
        html += `<th class="excel-col-th" data-col-header="${c}">${colToLetter(c)}</th>`;
      }
      html += '</tr></thead><tbody>';

      // Table rows
      for (let r = 0; r < totalRows; r++) {
        html += `<tr><th class="excel-row-th" data-row-header="${r}">${r + 1}</th>`;
        for (let c = 0; c < totalCols; c++) {
          const mergeInfo = getCellMergeInfo(merges, r, c);
          if (mergeInfo && !mergeInfo.isOrigin) {
            // Covered by a previous merged cell
            continue;
          }

          const addr = window.XLSX.utils.encode_cell({ r, c });
          const cell = ws[addr];
          const val = getCellDisplayValue(cell);
          const spanAttrs = mergeInfo ? ` rowspan="${mergeInfo.rowSpan}" colspan="${mergeInfo.colSpan}"` : '';

          html += `<td data-row="${r}" data-col="${c}"${spanAttrs}>${escapeHtml(val)}</td>`;
        }
        html += '</tr>';
      }
      html += '</tbody>';

      gridTable.innerHTML = html;
      updateSelectionVisuals();
    }

    // Render Sheet Tabs Bar
    function renderSheetTabs() {
      if (!workbook || !workbook.SheetNames) return;
      sheetTabsContainer.innerHTML = '';
      workbook.SheetNames.forEach(name => {
        const tabBtn = document.createElement('button');
        tabBtn.type = 'button';
        tabBtn.className = `excel-sheet-tab${name === activeSheetName ? ' active' : ''}`;
        tabBtn.setAttribute('data-sheet-name', name);
        tabBtn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          </svg>
          ${escapeHtml(name)}
        `;
        tabBtn.addEventListener('click', () => {
          if (name === activeSheetName) return;
          sheetTabsContainer.querySelectorAll('.excel-sheet-tab').forEach(b => b.classList.remove('active'));
          tabBtn.classList.add('active');
          renderSpreadsheetGrid(name);
        });
        sheetTabsContainer.appendChild(tabBtn);
      });
    }

    // Mouse & Touch Drag Range Selection Events on Grid
    function setupGridSelectionHandlers() {
      // Mouse Down on Grid Table
      gridTable.addEventListener('mousedown', (e) => {
        // Prevent default text selection during drag
        e.preventDefault();

        const corner = e.target.closest('#excel-corner-select-all');
        if (corner) {
          const used = sheetUsedRanges[activeSheetName];
          sheetSelections[activeSheetName] = {
            startRow: 0,
            startCol: 0,
            endRow: used.totalR - 1,
            endCol: used.totalC - 1
          };
          updateSelectionVisuals();
          return;
        }

        const thCol = e.target.closest('th[data-col-header]');
        if (thCol) {
          const c = parseInt(thCol.getAttribute('data-col-header'), 10);
          const used = sheetUsedRanges[activeSheetName];
          isDragging = true;
          dragType = 'col';
          sheetSelections[activeSheetName] = {
            startRow: 0,
            startCol: c,
            endRow: used.totalR - 1,
            endCol: c
          };
          updateSelectionVisuals();
          return;
        }

        const thRow = e.target.closest('th[data-row-header]');
        if (thRow) {
          const r = parseInt(thRow.getAttribute('data-row-header'), 10);
          const used = sheetUsedRanges[activeSheetName];
          isDragging = true;
          dragType = 'row';
          sheetSelections[activeSheetName] = {
            startRow: r,
            startCol: 0,
            endRow: r,
            endCol: used.totalC - 1
          };
          updateSelectionVisuals();
          return;
        }

        const td = e.target.closest('td[data-row]');
        if (td) {
          const r = parseInt(td.getAttribute('data-row'), 10);
          const c = parseInt(td.getAttribute('data-col'), 10);
          isDragging = true;
          dragType = 'cell';
          sheetSelections[activeSheetName] = {
            startRow: r,
            startCol: c,
            endRow: r,
            endCol: c
          };
          updateSelectionVisuals();
        }
      });

      // Mouse Over on Grid Table
      gridTable.addEventListener('mouseover', (e) => {
        if (!isDragging) return;

        if (dragType === 'cell') {
          const td = e.target.closest('td[data-row]');
          if (td) {
            const r = parseInt(td.getAttribute('data-row'), 10);
            const c = parseInt(td.getAttribute('data-col'), 10);
            const sel = sheetSelections[activeSheetName];
            if (sel.endRow !== r || sel.endCol !== c) {
              sel.endRow = r;
              sel.endCol = c;
              updateSelectionVisuals();
            }
          }
        } else if (dragType === 'row') {
          const thRow = e.target.closest('th[data-row-header]') || e.target.closest('td[data-row]');
          if (thRow) {
            const r = parseInt(thRow.getAttribute('data-row-header') || thRow.getAttribute('data-row'), 10);
            const sel = sheetSelections[activeSheetName];
            if (sel.endRow !== r) {
              sel.endRow = r;
              updateSelectionVisuals();
            }
          }
        } else if (dragType === 'col') {
          const thCol = e.target.closest('th[data-col-header]') || e.target.closest('td[data-col]');
          if (thCol) {
            const c = parseInt(thCol.getAttribute('data-col-header') || thCol.getAttribute('data-col'), 10);
            const sel = sheetSelections[activeSheetName];
            if (sel.endCol !== c) {
              sel.endCol = c;
              updateSelectionVisuals();
            }
          }
        }
      });

      // Window Mouse Up
      const onDocMouseUp = () => {
        if (isDragging) {
          isDragging = false;
        }
      };
      window.addEventListener('mouseup', onDocMouseUp);

      // Touch Selection Support (Mobile / Tablets)
      gridTable.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const elem = document.elementFromPoint(touch.clientX, touch.clientY);
        const td = elem?.closest('td[data-row]');
        if (td) {
          const r = parseInt(td.getAttribute('data-row'), 10);
          const c = parseInt(td.getAttribute('data-col'), 10);
          isDragging = true;
          dragType = 'cell';
          sheetSelections[activeSheetName] = {
            startRow: r,
            startCol: c,
            endRow: r,
            endCol: c
          };
          updateSelectionVisuals();
        }
      }, { passive: true });

      gridTable.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        const elem = document.elementFromPoint(touch.clientX, touch.clientY);
        const td = elem?.closest('td[data-row]');
        if (td) {
          const r = parseInt(td.getAttribute('data-row'), 10);
          const c = parseInt(td.getAttribute('data-col'), 10);
          const sel = sheetSelections[activeSheetName];
          if (sel && (sel.endRow !== r || sel.endCol !== c)) {
            sel.endRow = r;
            sel.endCol = c;
            updateSelectionVisuals();
          }
        }
      }, { passive: true });

      gridTable.addEventListener('touchend', () => {
        isDragging = false;
      }, { passive: true });

      // Clean up window listeners when modal closes or changes
      currentWorkbenchCleanup = () => {
        window.removeEventListener('mouseup', onDocMouseUp);
        if (previewPdfDoc) {
          try { previewPdfDoc.destroy(); } catch (e) {}
          previewPdfDoc = null;
        }
      };
    }

    setupGridSelectionHandlers();

    // Quick Selection Actions: "Select All Used Data" and "Select Entire Sheet"
    selUsedDataBtn.addEventListener('click', () => {
      if (!workbook || !activeSheetName) return;
      const used = sheetUsedRanges[activeSheetName];
      sheetSelections[activeSheetName] = {
        startRow: used.minR,
        startCol: used.minC,
        endRow: used.maxR,
        endCol: used.maxC
      };
      updateSelectionVisuals();
      showToast(`Selected all used data (${selRangeNameEl.textContent})`, 'info');
    });

    selEntireSheetBtn.addEventListener('click', () => {
      if (!workbook || !activeSheetName) return;
      const used = sheetUsedRanges[activeSheetName];
      sheetSelections[activeSheetName] = {
        startRow: 0,
        startCol: 0,
        endRow: used.totalR - 1,
        endCol: used.totalC - 1
      };
      updateSelectionVisuals();
      showToast(`Selected entire worksheet (${selRangeNameEl.textContent})`, 'info');
    });

    // Print Settings Controls Event Listeners
    paperSelect.addEventListener('change', () => {
      printSettings.paper = paperSelect.value;
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    orientLandscapeBtn.addEventListener('click', () => {
      orientLandscapeBtn.classList.add('active');
      orientPortraitBtn.classList.remove('active');
      printSettings.orientation = 'landscape';
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    orientPortraitBtn.addEventListener('click', () => {
      orientPortraitBtn.classList.add('active');
      orientLandscapeBtn.classList.remove('active');
      printSettings.orientation = 'portrait';
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    scalingSelect.addEventListener('change', () => {
      printSettings.scaling = scalingSelect.value;
      const sel = sheetSelections[activeSheetName];
      if (sel) {
        const rows = Math.abs(sel.endRow - sel.startRow) + 1;
        const cols = Math.abs(sel.endCol - sel.startCol) + 1;
        checkScaleWarning(rows, cols);
      }
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    marginsSelect.addEventListener('change', () => {
      printSettings.margins = marginsSelect.value;
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    repeatHeaderCheckbox.addEventListener('change', () => {
      printSettings.repeatHeader = repeatHeaderCheckbox.checked;
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    gridlinesCheckbox.addEventListener('change', () => {
      printSettings.gridlines = gridlinesCheckbox.checked;
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    pageFooterCheckbox.addEventListener('change', () => {
      printSettings.pageFooter = pageFooterCheckbox.checked;
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    exportScopeSelect.addEventListener('change', () => {
      printSettings.exportScope = exportScopeSelect.value;
      isPreviewDirty = true;
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    resetSettingsBtn.addEventListener('click', () => {
      paperSelect.value = 'A4';
      orientLandscapeBtn.classList.add('active');
      orientPortraitBtn.classList.remove('active');
      scalingSelect.value = 'fit-width';
      marginsSelect.value = 'normal';
      repeatHeaderCheckbox.checked = true;
      gridlinesCheckbox.checked = true;
      pageFooterCheckbox.checked = true;
      exportScopeSelect.value = 'active';

      printSettings = {
        paper: 'A4',
        orientation: 'landscape',
        scaling: 'fit-width',
        margins: 'normal',
        repeatHeader: true,
        gridlines: true,
        pageFooter: true,
        exportScope: 'active'
      };

      scaleWarningEl.style.display = 'none';
      isPreviewDirty = true;
      showToast('Print settings reset to recommended defaults.', 'info');
      if (activeView === 'preview') generateAndRenderPdfPreview();
    });

    // --- GENUINE PDF ENGINE & CANVAS-BASED UNICODE/HINDI/NUMERIC RENDERING ---
    // Generates a fully standard PDF with exact dimensions, borders, and crisp Unicode typography
    async function generatePdfFromSpreadsheet() {
      if (!workbook || !window.PDFLib) {
        throw new Error('Workbook or PDFLib is not available.');
      }

      // Paper Dimensions in points (1 pt = 1/72 inch)
      const paperDims = {
        A4: [595.28, 841.89],
        Letter: [612.00, 792.00],
        Legal: [612.00, 1008.00]
      };
      const [baseW, baseH] = paperDims[printSettings.paper] || paperDims.A4;
      const isLandscape = (printSettings.orientation === 'landscape');
      const pageWidthPt = isLandscape ? baseH : baseW;
      const pageHeightPt = isLandscape ? baseW : baseH;

      // Margins in points
      const marginMap = {
        narrow: 28.35, // ~10 mm
        normal: 45.00, // ~16 mm
        wide: 65.00    // ~23 mm
      };
      const marginPt = marginMap[printSettings.margins] || 45.00;

      const headerHeightPt = 32;
      const footerHeightPt = 24;
      const usableWidthPt = pageWidthPt - (marginPt * 2);
      const usableHeightPt = pageHeightPt - (marginPt * 2) - headerHeightPt - footerHeightPt;

      const sheetsToExport = (printSettings.exportScope === 'all')
        ? workbook.SheetNames
        : [activeSheetName];

      const pdfDoc = await window.PDFLib.PDFDocument.create();
      const scaleFactor = 2.0; // Render at 2x resolution (144 DPI) for crisp vector-like text

      // Create reusable offscreen canvas
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(pageWidthPt * scaleFactor);
      canvas.height = Math.round(pageHeightPt * scaleFactor);
      const ctx = canvas.getContext('2d');

      let globalTotalPages = 0;
      const renderedPageImages = [];

      for (let sIdx = 0; sIdx < sheetsToExport.length; sIdx++) {
        const sheetName = sheetsToExport[sIdx];
        const ws = workbook.Sheets[sheetName];
        if (!ws) continue;

        const sel = sheetSelections[sheetName] || (sheetUsedRanges[sheetName]
          ? { startRow: sheetUsedRanges[sheetName].minR, startCol: sheetUsedRanges[sheetName].minC, endRow: sheetUsedRanges[sheetName].maxR, endCol: sheetUsedRanges[sheetName].maxC }
          : { startRow: 0, startCol: 0, endRow: 0, endCol: 0 });

        const minR = Math.min(sel.startRow, sel.endRow);
        const maxR = Math.max(sel.startRow, sel.endRow);
        const minC = Math.min(sel.startCol, sel.endCol);
        const maxC = Math.max(sel.startCol, sel.endCol);

        const numCols = maxC - minC + 1;
        const numRows = maxR - minR + 1;

        // Calculate natural column widths based on cell content lengths
        const colNaturalWidths = [];
        for (let c = minC; c <= maxC; c++) {
          let maxCharLen = 4;
          for (let r = minR; r <= maxR; r++) {
            const addr = window.XLSX.utils.encode_cell({ r, c });
            const cell = ws[addr];
            const text = getCellDisplayValue(cell);
            if (text.length > maxCharLen) maxCharLen = text.length;
          }
          // Width heuristic: ~6.5 pt per char + 12 pt padding
          const calculatedPt = Math.max(40, Math.min(260, maxCharLen * 6.5 + 14));
          colNaturalWidths.push(calculatedPt);
        }

        const totalNaturalWidth = colNaturalWidths.reduce((a, b) => a + b, 0);

        // Compute actual column widths based on scaling setting
        const colWidths = [];
        let fontScale = 1.0;
        let baseRowHeight = 18;
        let headerRowHeight = 22;

        if (printSettings.scaling === 'fit-width') {
          const widthRatio = usableWidthPt / Math.max(totalNaturalWidth, 1);
          for (let i = 0; i < numCols; i++) {
            colWidths.push(colNaturalWidths[i] * widthRatio);
          }
          if (widthRatio < 0.75) {
            fontScale = Math.max(0.65, widthRatio);
            baseRowHeight = Math.max(14, 18 * fontScale);
            headerRowHeight = Math.max(16, 22 * fontScale);
          }
        } else if (printSettings.scaling === 'fit-page') {
          const widthRatio = usableWidthPt / Math.max(totalNaturalWidth, 1);
          for (let i = 0; i < numCols; i++) {
            colWidths.push(colNaturalWidths[i] * widthRatio);
          }
          const totalRowsHeight = headerRowHeight + (numRows - 1) * baseRowHeight;
          const heightRatio = usableHeightPt / Math.max(totalRowsHeight, 1);
          const minRatio = Math.min(widthRatio, heightRatio, 1.0);
          fontScale = Math.max(0.5, minRatio);
          baseRowHeight = Math.max(12, baseRowHeight * fontScale);
          headerRowHeight = Math.max(14, headerRowHeight * fontScale);
        } else {
          // 'actual' 100% scale
          for (let i = 0; i < numCols; i++) {
            colWidths.push(colNaturalWidths[i]);
          }
        }

        const fontSize = Math.max(6, Math.round(8.5 * fontScale));
        const fontBold = `bold ${fontSize}pt -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Nirmala UI", "Mangal", "Noto Sans Devanagari", Arial, sans-serif`;
        const fontRegular = `${fontSize}pt -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Nirmala UI", "Mangal", "Noto Sans Devanagari", Arial, sans-serif`;

        // Pagination loop
        let currentRow = minR;
        const isHeaderRepeated = printSettings.repeatHeader;
        let sheetPageCount = 0;
        const sheetPages = [];

        while (currentRow <= maxR) {
          sheetPageCount++;
          const pageRowIndices = [];

          let pageUsedHeight = 0;
          let hasHeaderOnThisPage = false;

          // Add header row
          if (isHeaderRepeated || sheetPageCount === 1) {
            pageRowIndices.push({ r: minR, isHeader: true });
            pageUsedHeight += headerRowHeight;
            hasHeaderOnThisPage = true;
          }

          // If header was row minR and this is first page, advance data row
          if (sheetPageCount === 1 && hasHeaderOnThisPage) {
            currentRow = minR + 1;
          }

          if (printSettings.scaling === 'fit-page') {
            // Include all remaining rows on this single page
            while (currentRow <= maxR) {
              pageRowIndices.push({ r: currentRow, isHeader: false });
              currentRow++;
            }
          } else {
            // Standard multi-page pagination based on usable height
            while (currentRow <= maxR && (pageUsedHeight + baseRowHeight <= usableHeightPt)) {
              pageRowIndices.push({ r: currentRow, isHeader: false });
              pageUsedHeight += baseRowHeight;
              currentRow++;
            }
            // Ensure at least 1 data row is added per page to prevent infinite loop
            if (pageRowIndices.filter(p => !p.isHeader).length === 0 && currentRow <= maxR) {
              pageRowIndices.push({ r: currentRow, isHeader: false });
              currentRow++;
            }
          }

          sheetPages.push(pageRowIndices);
        }

        // Render each page for this sheet
        for (let pIdx = 0; pIdx < sheetPages.length; pIdx++) {
          const rowList = sheetPages[pIdx];
          globalTotalPages++;

          ctx.save();
          ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);

          // Clear White Page Background
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, pageWidthPt, pageHeightPt);

          // Render Page Header
          let curY = marginPt;
          ctx.font = 'bold 11pt -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Nirmala UI", "Mangal", Arial, sans-serif';
          ctx.fillStyle = '#0f172a';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(originalFileName, marginPt, curY);

          ctx.font = '9pt -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Nirmala UI", "Mangal", Arial, sans-serif';
          ctx.fillStyle = '#64748b';
          ctx.textAlign = 'right';
          ctx.fillText(`Worksheet: ${sheetName}`, pageWidthPt - marginPt, curY);

          // Header separator line
          curY += 18;
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(marginPt, curY);
          ctx.lineTo(pageWidthPt - marginPt, curY);
          ctx.stroke();

          curY += 8;

          // Render Table Rows
          for (let rIdx = 0; rIdx < rowList.length; rIdx++) {
            const rowItem = rowList[rIdx];
            const r = rowItem.r;
            const isHeader = rowItem.isHeader;
            const rHeight = isHeader ? headerRowHeight : baseRowHeight;

            // Row background fill
            if (isHeader) {
              ctx.fillStyle = '#f1f5f9';
              ctx.fillRect(marginPt, curY, usableWidthPt, rHeight);
            } else if (r % 2 === 1) {
              ctx.fillStyle = '#f8fafc';
              ctx.fillRect(marginPt, curY, usableWidthPt, rHeight);
            }

            // Cell contents
            let cellX = marginPt;
            for (let cIdx = 0; cIdx < numCols; cIdx++) {
              const c = minC + cIdx;
              const cellW = colWidths[cIdx];
              const addr = window.XLSX.utils.encode_cell({ r, c });
              const cell = ws[addr];
              const text = getCellDisplayValue(cell);

              // Gridlines
              if (printSettings.gridlines) {
                ctx.strokeStyle = isHeader ? '#cbd5e1' : '#e2e8f0';
                ctx.lineWidth = 0.5;
                ctx.strokeRect(cellX, curY, cellW, rHeight);
              }

              // Text Drawing with Clipping
              if (text) {
                ctx.save();
                ctx.beginPath();
                ctx.rect(cellX + 2, curY, cellW - 4, rHeight);
                ctx.clip();

                ctx.font = isHeader ? fontBold : fontRegular;
                ctx.fillStyle = isHeader ? '#0f172a' : '#1e293b';
                ctx.textBaseline = 'middle';

                // Detect numeric / currency for right alignment
                const isNumeric = !isNaN(Number(text.replace(/[$,₹,€,%\s,]/g, ''))) && text.length > 0 && !text.includes('/');
                if (isNumeric && !isHeader) {
                  ctx.textAlign = 'right';
                  ctx.fillText(text, cellX + cellW - 4, curY + (rHeight / 2));
                } else {
                  ctx.textAlign = 'left';
                  ctx.fillText(text, cellX + 4, curY + (rHeight / 2));
                }
                ctx.restore();
              }

              cellX += cellW;
            }

            // Header bottom border
            if (isHeader) {
              ctx.strokeStyle = '#94a3b8';
              ctx.lineWidth = 1.0;
              ctx.beginPath();
              ctx.moveTo(marginPt, curY + rHeight);
              ctx.lineTo(marginPt + usableWidthPt, curY + rHeight);
              ctx.stroke();
            }

            curY += rHeight;
          }

          // Render Page Footer
          if (printSettings.pageFooter) {
            const footerY = pageHeightPt - marginPt + 8;
            ctx.font = '8pt -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Nirmala UI", "Mangal", Arial, sans-serif';
            ctx.fillStyle = '#64748b';

            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.fillText('Generated with AAYAM Innovation (100% In-Browser)', marginPt, footerY);

            ctx.textAlign = 'right';
            ctx.fillText(`Page ${pIdx + 1} of ${sheetPages.length}`, pageWidthPt - marginPt, footerY);
          }

          ctx.restore();

          // Convert canvas to image and collect
          const dataUrl = canvas.toDataURL('image/jpeg', 0.93);
          renderedPageImages.push({
            dataUrl,
            widthPt: pageWidthPt,
            heightPt: pageHeightPt
          });
        }
      }

      // Embed each page into PDFLib document
      for (let i = 0; i < renderedPageImages.length; i++) {
        const p = renderedPageImages[i];
        const base64Data = p.dataUrl.split(',')[1];
        const binaryStr = atob(base64Data);
        const bytes = new Uint8Array(binaryStr.length);
        for (let b = 0; b < binaryStr.length; b++) {
          bytes[b] = binaryStr.charCodeAt(b);
        }
        const embeddedImg = await pdfDoc.embedJpg(bytes);
        const page = pdfDoc.addPage([p.widthPt, p.heightPt]);
        page.drawImage(embeddedImg, {
          x: 0,
          y: 0,
          width: p.widthPt,
          height: p.heightPt
        });
      }

      const pdfBytes = await pdfDoc.save();
      currentPdfBytes = pdfBytes;
      currentRenderedPages = renderedPageImages;
      return pdfBytes;
    }

    // Render Real PDF Page onto Preview Canvas via pdfjsLib
    async function renderPreviewPage(pageNum) {
      if (!previewPdfDoc || !previewCanvas) return;
      currentPreviewPage = Math.max(1, Math.min(pageNum, totalPreviewPages));
      previewPageIndicator.textContent = `Page ${currentPreviewPage} of ${totalPreviewPages}`;
      previewZoomLabel.textContent = `${Math.round(previewZoom * 100)}%`;

      previewPrevBtn.disabled = (currentPreviewPage <= 1);
      previewNextBtn.disabled = (currentPreviewPage >= totalPreviewPages);

      const page = await previewPdfDoc.getPage(currentPreviewPage);
      const viewport = page.getViewport({ scale: previewZoom * 1.5 });

      previewCanvas.width = viewport.width;
      previewCanvas.height = viewport.height;
      const ctx = previewCanvas.getContext('2d');
      ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;
    }

    // Generate & Display Genuine PDF Preview
    async function generateAndRenderPdfPreview() {
      if (isGeneratingPdf) return;
      try {
        isGeneratingPdf = true;
        exportDownloadBtn.disabled = true;
        previewDownloadBtn.disabled = true;
        previewPrintBtn.disabled = true;

        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/libs/pdf.worker.min.js';
        }

        const pdfBytes = await generatePdfFromSpreadsheet();
        if (previewPdfDoc) {
          try { previewPdfDoc.destroy(); } catch (e) {}
          previewPdfDoc = null;
        }

        const loadingTask = window.pdfjsLib.getDocument({ data: pdfBytes.slice(0) });
        previewPdfDoc = await loadingTask.promise;
        totalPreviewPages = previewPdfDoc.numPages;
        currentPreviewPage = 1;

        await renderPreviewPage(1);
        isPreviewDirty = false;
      } catch (err) {
        console.error('PDF Preview Generation Error:', err);
        showToast('Error generating PDF preview: ' + (err.message || 'Unknown error'), 'error');
      } finally {
        isGeneratingPdf = false;
        exportDownloadBtn.disabled = false;
        previewDownloadBtn.disabled = false;
        previewPrintBtn.disabled = false;
      }
    }

    // PDF Preview Navigation & Zoom Events
    previewPrevBtn.addEventListener('click', () => {
      if (currentPreviewPage > 1) renderPreviewPage(currentPreviewPage - 1);
    });

    previewNextBtn.addEventListener('click', () => {
      if (currentPreviewPage < totalPreviewPages) renderPreviewPage(currentPreviewPage + 1);
    });

    previewZoomInBtn.addEventListener('click', () => {
      if (previewZoom < 2.5) {
        previewZoom = Math.min(2.5, previewZoom + 0.2);
        renderPreviewPage(currentPreviewPage);
      }
    });

    previewZoomOutBtn.addEventListener('click', () => {
      if (previewZoom > 0.4) {
        previewZoom = Math.max(0.4, previewZoom - 0.2);
        renderPreviewPage(currentPreviewPage);
      }
    });

    previewZoomFitBtn.addEventListener('click', () => {
      previewZoom = 1.0;
      renderPreviewPage(currentPreviewPage);
    });

    // Download PDF Action
    async function downloadPdf() {
      try {
        exportDownloadBtn.disabled = true;
        exportDownloadBtn.textContent = 'Preparing PDF...';

        if (isPreviewDirty || !currentPdfBytes) {
          await generatePdfFromSpreadsheet();
        }

        const scopeLabel = (printSettings.exportScope === 'all') ? 'all-sheets' : activeSheetName;
        const outFileName = `${baseFileName}-${scopeLabel}.pdf`;

        triggerDownload(new Blob([currentPdfBytes], { type: 'application/pdf' }), outFileName);
        showToast(`Downloaded "${outFileName}" successfully!`, 'success');
      } catch (err) {
        console.error('PDF Export Error:', err);
        showToast('Error generating PDF: ' + (err.message || 'Unknown error'), 'error');
      } finally {
        exportDownloadBtn.disabled = false;
        exportDownloadBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        `;
      }
    }

    exportDownloadBtn.addEventListener('click', downloadPdf);
    previewDownloadBtn.addEventListener('click', downloadPdf);

    // Fallback: Open generated PDF in new tab if iframe printing is blocked
    function fallbackPrintPdf() {
      if (!currentPdfBytes) return;
      try {
        const blob = new Blob([currentPdfBytes], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blob);
        const printWin = window.open(blobUrl, '_blank');
        if (printWin) {
          showToast('Opening PDF in new window for printing...', 'info');
        } else {
          showToast('Pop-up was blocked. Please click "Download PDF" to print.', 'warning');
        }
      } catch (e) {
        console.error('Fallback print error:', e);
        showToast('Unable to open print preview.', 'error');
      }
    }

    // Print PDF Action: Generates high-res same-origin print document
    async function printPdf() {
      try {
        if (previewPrintBtn) previewPrintBtn.disabled = true;

        if (isPreviewDirty || !currentRenderedPages || !currentRenderedPages.length) {
          await generatePdfFromSpreadsheet();
        }

        if (!currentRenderedPages || !currentRenderedPages.length) {
          showToast('No pages available to print.', 'error');
          return;
        }

        let printIframe = document.getElementById('excel-print-iframe');
        if (printIframe) printIframe.remove();

        printIframe = document.createElement('iframe');
        printIframe.id = 'excel-print-iframe';
        printIframe.style.position = 'fixed';
        printIframe.style.right = '0';
        printIframe.style.bottom = '0';
        printIframe.style.width = '0';
        printIframe.style.height = '0';
        printIframe.style.border = '0';
        printIframe.setAttribute('aria-hidden', 'true');
        document.body.appendChild(printIframe);

        const firstPage = currentRenderedPages[0];
        const paperSizeCss = `${firstPage.widthPt}pt ${firstPage.heightPt}pt`;

        let pagesHtml = '';
        currentRenderedPages.forEach((p, idx) => {
          pagesHtml += `
            <div class="print-page" style="width:${p.widthPt}pt; height:${p.heightPt}pt;">
              <img src="${p.dataUrl}" alt="Page ${idx + 1}" style="width:100%; height:100%; display:block;" />
            </div>
          `;
        });

        const iframeDoc = printIframe.contentDocument || printIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Print - ${escapeHtml(baseFileName || 'Spreadsheet')} - AAYAM Innovation</title>
            <style>
              @page {
                size: ${paperSizeCss};
                margin: 0;
              }
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }
              body {
                margin: 0;
                padding: 0;
                background: #ffffff;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .print-page {
                position: relative;
                page-break-after: always;
                break-after: page;
                background: #ffffff;
                overflow: hidden;
              }
              .print-page:last-child {
                page-break-after: auto;
                break-after: auto;
              }
              .print-page img {
                width: 100%;
                height: 100%;
                display: block;
              }
            </style>
          </head>
          <body>
            ${pagesHtml}
          </body>
          </html>
        `);
        iframeDoc.close();

        // Ensure all page images are loaded before invoking print
        const imgs = Array.from(iframeDoc.images);
        const imgPromises = imgs.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(res => {
            img.onload = () => res();
            img.onerror = () => res();
          });
        });

        await Promise.all(imgPromises);

        setTimeout(() => {
          try {
            printIframe.contentWindow.focus();
            printIframe.contentWindow.print();
          } catch (err) {
            console.warn('Iframe print error, invoking fallback:', err);
            fallbackPrintPdf();
          }
        }, 200);

        showToast('Print dialog opened. Select printer or "Save as PDF".', 'info');
      } catch (err) {
        console.error('Print Error:', err);
        fallbackPrintPdf();
      } finally {
        if (previewPrintBtn) previewPrintBtn.disabled = false;
      }
    }

    previewPrintBtn.addEventListener('click', printPdf);

    // Load & Parse Spreadsheet File
    async function loadSpreadsheet(file) {
      if (!file) return;
      const lower = file.name.toLowerCase();
      if (!lower.endsWith('.xlsx') && !lower.endsWith('.xls') && !lower.endsWith('.csv')) {
        showToast('Please select a valid spreadsheet (.xlsx, .xls, .csv).', 'error');
        resetExcelState();
        return;
      }
      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        resetExcelState();
        return;
      }
      if (file.size === 0) {
        showToast('Selected spreadsheet file is empty (0 bytes).', 'error');
        resetExcelState();
        return;
      }

      originalFileName = file.name;
      baseFileName = file.name.replace(/\.[^/.]+$/, '');

      try {
        const buf = await file.arrayBuffer();
        const bytes = new Uint8Array(buf);
        if (lower.endsWith('.xlsx')) {
          if (bytes.length < 4 || bytes[0] !== 0x50 || bytes[1] !== 0x4B) {
            showToast('Failed to parse spreadsheet file: Invalid or corrupt Excel format.', 'error');
            resetExcelState();
            return;
          }
        }
        workbook = window.XLSX.read(buf, { type: 'array', cellDates: true, cellStyles: true });

        if (!workbook.SheetNames || !workbook.SheetNames.length) {
          showToast('Workbook contains no worksheets.', 'error');
          resetExcelState();
          return;
        }

        // Initialize sheet used ranges and selections
        workbook.SheetNames.forEach(sheetName => {
          const ws = workbook.Sheets[sheetName];
          const used = detectUsedRange(ws);
          sheetUsedRanges[sheetName] = used;
          sheetSelections[sheetName] = {
            startRow: used.minR,
            startCol: used.minC,
            endRow: used.maxR,
            endCol: used.maxC
          };
        });

        activeSheetName = workbook.SheetNames[0];
        const initialUsed = sheetUsedRanges[activeSheetName];

        // Intelligent Orientation: Auto-set to Landscape if more than 5 columns
        const colCount = initialUsed.maxC - initialUsed.minC + 1;
        if (colCount > 5) {
          printSettings.orientation = 'landscape';
          orientLandscapeBtn.classList.add('active');
          orientPortraitBtn.classList.remove('active');
        } else {
          printSettings.orientation = 'portrait';
          orientPortraitBtn.classList.add('active');
          orientLandscapeBtn.classList.remove('active');
        }

        // Update header metadata
        fileNameEl.textContent = file.name;
        const totalSheets = workbook.SheetNames.length;
        fileStatsEl.textContent = `${totalSheets} Sheet${totalSheets > 1 ? 's' : ''} · ${initialUsed.totalR} Rows × ${initialUsed.totalC} Columns`;

        // Switch from import view to workspace
        importBox.style.display = 'none';
        workArea.style.display = 'flex';

        renderSheetTabs();
        renderSpreadsheetGrid(activeSheetName);

        showToast(`Loaded "${file.name}" with ${totalSheets} worksheet${totalSheets > 1 ? 's' : ''}`, 'info');
      } catch (err) {
        console.error('Excel load error:', err);
        showToast('Failed to parse spreadsheet file: ' + (err.message || 'Corrupt or unsupported format'), 'error');
        resetExcelState();
      }
    }

    // Initialize Option B Global Import Handler
    initOptionBImportHandlers({
      dropzoneId: 'excel-dropzone',
      fileInputId: 'excel-file-input',
      browseBtnId: 'excel-browse-btn',
      onFilesSelected: (files) => {
        if (files && files[0]) loadSpreadsheet(files[0]);
      }
    });
  }

  // --- 6.12 Add Signature to PDF Workbench ---
  function renderAddSignaturePdfWorkbench() {
    dom.modalBody.innerHTML = `
      <div class="workbench-container sig-workbench-root">
        ${getOptionBPrivacyBannerHTML('Zero-Upload Confidential Signing', 'Your PDF document and signature are processed 100% locally in your web browser. No files are uploaded to any server. This utility applies visual handwritten signature stamps.')}

        ${getOptionBImportHTML({
          containerId: 'sig-pdf-dropzone',
          dropzoneId: 'sig-optionb-dropzone',
          fileInputId: 'sig-pdf-file-input',
          browseBtnId: 'sig-optionb-browse',
          fileTypeLabel: 'PDF',
          formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
          accept: '.pdf,application/pdf',
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <!-- Main Signing Workspace -->
        <div class="sig-workbench-layout" id="sig-active-workspace" style="display:none;">
          <!-- Left: Preview Pane -->
          <div class="sig-preview-pane">
            <div class="sig-doc-toolbar">
              <div class="sig-page-nav">
                <button type="button" class="btn btn-secondary btn-sm" id="sig-prev-page" title="Previous Page" disabled>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <span style="font-size:0.8rem; font-weight:600; color:#334155;">Page</span>
                <select id="sig-page-select" class="form-select" style="width:auto; padding:2px 24px 2px 8px; font-size:0.8rem; height:28px;"></select>
                <span id="sig-total-pages-label" style="font-size:0.8rem; color:#64748b; font-weight:500;">of 1</span>
                <button type="button" class="btn btn-secondary btn-sm" id="sig-next-page" title="Next Page" disabled>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span id="sig-page-dims" style="font-size:0.75rem; color:#64748b; font-family:monospace;"></span>
                <button type="button" class="btn btn-secondary btn-sm" id="sig-btn-change-pdf" style="font-size:0.75rem; padding:3px 8px;">Change PDF</button>
              </div>
            </div>

            <div class="sig-stage-viewport" id="sig-stage-viewport">
              <div class="sig-canvas-wrapper" id="sig-canvas-wrapper">
                <canvas id="sig-pdf-canvas"></canvas>
                <!-- Draggable Signature Box -->
                <div class="sig-placement-box" id="sig-placement-box" style="display:none;">
                  <span class="sig-box-tag">Signature (Drag to move)</span>
                  <img id="sig-placement-img" class="sig-placement-img" alt="Signature preview" />
                  <div class="sig-resize-corner" id="sig-resize-corner" title="Drag corner to resize"></div>
                </div>
              </div>
            </div>
            <div style="font-size:0.72rem; color:#64748b; text-align:center;">
              Tip: Drag the signature box to position it anywhere on the document. Drag the blue corner handle or use the slider to resize.
            </div>
          </div>

          <!-- Right: Controls Pane -->
          <div class="sig-controls-pane">
            <div>
              <label class="form-label" style="font-size:0.825rem; font-weight:700; margin-bottom:0.4rem; display:block;">1. Create Signature</label>
              <div class="sig-tabs-bar">
                <button type="button" class="sig-tab-btn active" id="sig-tab-draw">Draw</button>
                <button type="button" class="sig-tab-btn" id="sig-tab-upload">Upload Image</button>
                <button type="button" class="sig-tab-btn" id="sig-tab-saved">Saved Signatures (<span id="sig-saved-count">0</span>)</button>
              </div>

              <!-- Draw Subpanel -->
              <div id="sig-panel-draw" style="margin-top:0.6rem;">
                <div class="sig-pad-header">
                  <h4 class="sig-pad-heading">Draw Your Signature Here</h4>
                  <p class="sig-pad-instruction">Use your mouse, finger, or stylus to sign in the box below.</p>
                </div>
                <div class="sig-pad-box" id="sig-pad-box-wrap">
                  <div class="sig-pad-sign-here-tag" id="sig-pad-sign-here-tag" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    <span>SIGN HERE</span>
                  </div>
                  <div class="sig-pad-placeholder" id="sig-pad-placeholder" aria-hidden="true">
                    <div class="sig-placeholder-icon-wrap">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        <path d="M2 21c3-1.5 6-1.5 9 0 2 .8 4 .8 6 0"></path>
                      </svg>
                    </div>
                    <div class="sig-placeholder-title">Start drawing your signature here</div>
                    <svg class="sig-placeholder-guide" width="130" height="26" viewBox="0 0 130 26" fill="none">
                      <path d="M6 18 C20 6, 28 22, 44 10 C58 0, 64 20, 78 12 C90 6, 98 18, 124 10" stroke="#93c5fd" stroke-width="1.8" stroke-dasharray="3 3" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="sig-pad-baseline" aria-hidden="true"></div>
                  <canvas id="sig-draw-pad"></canvas>
                </div>
                <div class="sig-ink-toolbar" style="margin-top:0.6rem;">
                  <div class="sig-colors-group" title="Ink Color">
                    <button type="button" class="sig-color-dot active" data-color="#0f172a" style="background:#0f172a;" title="Black"></button>
                    <button type="button" class="sig-color-dot" data-color="#1e3a8a" style="background:#1e3a8a;" title="Navy"></button>
                    <button type="button" class="sig-color-dot" data-color="#2563eb" style="background:#2563eb;" title="Blue"></button>
                  </div>
                  <div class="sig-pens-group" title="Pen Width">
                    <button type="button" class="sig-pen-pill" data-width="1.8">Fine</button>
                    <button type="button" class="sig-pen-pill active" data-width="2.8">Medium</button>
                    <button type="button" class="sig-pen-pill" data-width="4.2">Bold</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.35rem;">
                    <button type="button" class="btn btn-secondary btn-sm sig-btn-clear" id="sig-btn-clear-draw" title="Clear signature and redraw">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:2px; vertical-align:text-bottom;">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                      Clear
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm" id="sig-btn-save-drawn" title="Save this signature with PIN protection" style="font-size:0.75rem; padding:3px 9px; display:inline-flex; align-items:center; gap:3px;">
                      💾 Save Signature
                    </button>
                  </div>
                </div>
              </div>

              <!-- Upload Subpanel -->
              <div id="sig-panel-upload" style="display:none; margin-top:0.6rem;">
                <input type="file" id="sig-image-upload-input" accept="image/png,image/jpeg,image/webp" class="form-input" style="font-size:0.75rem; padding:4px;" />
                <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.75rem; color:#475569; margin-top:0.5rem; cursor:pointer;">
                  <input type="checkbox" id="sig-remove-white-bg" checked />
                  Make background transparent
                </label>
                <div id="sig-upload-thumb-wrap" style="display:none; margin-top:0.5rem; padding:0.4rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px; text-align:center;">
                  <img id="sig-upload-thumb" style="max-height:50px; max-width:100%; object-fit:contain;" alt="Uploaded signature thumbnail" />
                  <div style="margin-top:0.45rem;">
                    <button type="button" class="btn btn-secondary btn-sm" id="sig-btn-save-upload" title="Save this signature with PIN protection" style="font-size:0.75rem; padding:3px 9px; display:inline-flex; align-items:center; gap:3px;">
                      💾 Save Signature
                    </button>
                  </div>
                </div>
              </div>

              <!-- Saved Signatures Subpanel -->
              <div id="sig-panel-saved" style="display:none; margin-top:0.6rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                  <span style="font-size:0.78rem; font-weight:600; color:#334155;">My Protected Signatures</span>
                  <button type="button" class="btn btn-secondary btn-xs" id="sig-btn-manage-signatures" style="font-size:0.72rem; padding:2px 7px;">
                    ⚙️ Manage Signatures
                  </button>
                </div>
                <div id="sig-saved-list" class="sig-saved-list">
                  <!-- Populated dynamically -->
                </div>
                <div class="sig-pin-security-notice">
                  🔒 <strong>Local Privacy Note:</strong> Signatures and PIN verifiers are encrypted with salted SHA-256 and stored strictly in your browser. Client-side storage protects against casual unauthorized use on this device.
                </div>
              </div>
            </div>

            <!-- Position & Size Controls -->
            <div>
              <label class="form-label" style="font-size:0.825rem; font-weight:700; margin-bottom:0.25rem; display:block;">2. Quick Position & Size</label>
              <div class="sig-presets-row">
                <button type="button" class="sig-preset-btn" id="sig-preset-br">Bottom Right</button>
                <button type="button" class="sig-preset-btn" id="sig-preset-bl">Bottom Left</button>
                <button type="button" class="sig-preset-btn" id="sig-preset-center">Center</button>
              </div>
              <div style="margin-top:0.6rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#64748b; margin-bottom:2px;">
                  <span>Signature Width</span>
                  <span id="sig-width-display">160 px</span>
                </div>
                <input type="range" id="sig-width-slider" min="60" max="320" value="160" step="2" style="width:100%; cursor:pointer;" />
              </div>
            </div>

            <!-- Apply Scope Controls -->
            <div>
              <label class="form-label" style="font-size:0.825rem; font-weight:700; margin-bottom:0.25rem; display:block;">3. Apply To Pages</label>
              <select id="sig-target-scope" class="form-select" style="font-size:0.8rem; padding:6px 10px;">
                <option value="current">Current Page Only</option>
                <option value="all">All Pages</option>
                <option value="last">Last Page Only</option>
                <option value="custom">Custom Page Numbers...</option>
              </select>
              <div id="sig-custom-pages-group" style="display:none; margin-top:0.4rem;">
                <input type="text" id="sig-custom-pages-input" class="form-input" placeholder="e.g. 1, 3-5" style="font-size:0.78rem;" />
                <div style="font-size:0.7rem; color:#64748b; margin-top:2px;">Separate pages with commas or hyphens</div>
              </div>
            </div>

            <!-- Action Button -->
            <div style="margin-top:0.25rem;">
              <button type="button" class="btn btn-primary btn-block" id="sig-btn-generate" style="font-weight:600; padding:0.65rem 1rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.35rem; vertical-align:text-bottom;">
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  <path d="M2 21c3-1.5 6-1.5 9 0 2 .8 4 .8 6 0"></path>
                </svg>
                Sign & Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // References
    const pdfDropzone = document.getElementById('sig-pdf-dropzone');
    const pdfFileInput = document.getElementById('sig-pdf-file-input');
    const activeWorkspace = document.getElementById('sig-active-workspace');

    const prevPageBtn = document.getElementById('sig-prev-page');
    const nextPageBtn = document.getElementById('sig-next-page');
    const pageSelect = document.getElementById('sig-page-select');
    const totalPagesLabel = document.getElementById('sig-total-pages-label');
    const pageDimsLabel = document.getElementById('sig-page-dims');
    const btnChangePdf = document.getElementById('sig-btn-change-pdf');

    const stageViewport = document.getElementById('sig-stage-viewport');
    const canvasWrapper = document.getElementById('sig-canvas-wrapper');
    const pdfCanvas = document.getElementById('sig-pdf-canvas');
    const pdfCtx = pdfCanvas.getContext('2d');

    const placementBox = document.getElementById('sig-placement-box');
    const placementImg = document.getElementById('sig-placement-img');
    const resizeCorner = document.getElementById('sig-resize-corner');

    const tabDrawBtn = document.getElementById('sig-tab-draw');
    const tabUploadBtn = document.getElementById('sig-tab-upload');
    const tabSavedBtn = document.getElementById('sig-tab-saved');
    const panelDraw = document.getElementById('sig-panel-draw');
    const panelUpload = document.getElementById('sig-panel-upload');
    const panelSaved = document.getElementById('sig-panel-saved');
    const savedCountBadge = document.getElementById('sig-saved-count');
    const savedListContainer = document.getElementById('sig-saved-list');
    const btnManageSignatures = document.getElementById('sig-btn-manage-signatures');
    const btnSaveDrawn = document.getElementById('sig-btn-save-drawn');
    const btnSaveUpload = document.getElementById('sig-btn-save-upload');

    const drawPadCanvas = document.getElementById('sig-draw-pad');
    const drawPadCtx = drawPadCanvas.getContext('2d');
    const clearDrawBtn = document.getElementById('sig-btn-clear-draw');
    const padPlaceholder = document.getElementById('sig-pad-placeholder');
    const signHereTag = document.getElementById('sig-pad-sign-here-tag');
    const padBoxWrap = document.getElementById('sig-pad-box-wrap');

    function updatePlaceholderVisibility() {
      if (padHasStrokes) {
        if (padPlaceholder) padPlaceholder.classList.add('hidden');
        if (signHereTag) signHereTag.classList.add('hidden');
      } else {
        if (padPlaceholder) padPlaceholder.classList.remove('hidden');
        if (signHereTag) signHereTag.classList.remove('hidden');
      }
    }

    const imageUploadInput = document.getElementById('sig-image-upload-input');
    const removeWhiteBgCheckbox = document.getElementById('sig-remove-white-bg');
    const uploadThumbWrap = document.getElementById('sig-upload-thumb-wrap');
    const uploadThumb = document.getElementById('sig-upload-thumb');

    const presetBrBtn = document.getElementById('sig-preset-br');
    const presetBlBtn = document.getElementById('sig-preset-bl');
    const presetCenterBtn = document.getElementById('sig-preset-center');
    const widthSlider = document.getElementById('sig-width-slider');
    const widthDisplay = document.getElementById('sig-width-display');

    const targetScopeSelect = document.getElementById('sig-target-scope');
    const customPagesGroup = document.getElementById('sig-custom-pages-group');
    const customPagesInput = document.getElementById('sig-custom-pages-input');
    const generateBtn = document.getElementById('sig-btn-generate');

    // Storage Keys & PIN Protection State
    const STORAGE_SAVED_SIGS_KEY = 'aayam_pdf_saved_signatures_v1';
    const STORAGE_SYSTEM_PIN_KEY = 'aayam_pdf_system_pin_v1';
    const unlockedSignaturesSession = new Set(); // Stores strings: `${docFingerprint}_p${pageNum}_sig_${sigId}`
    const failedAttemptsMap = new Map(); // key -> { count, lockedUntil }
    let activeSavedSigId = null;

    // Document & Render State
    let originalPdfBytes = null;
    let baseFileName = 'document';
    let pdfDoc = null;
    let currentPageNum = 1;
    let activeRenderTask = null;

    let currentSignatureDataUrl = null;
    let signatureAspectRatio = 2.5; // width / height
    let activeInkColor = '#0f172a';
    let activePenWidth = 2.8;
    let isDrawingPad = false;
    let padHasStrokes = false;

    // Relative placement on the PDF page: 0.0 to 1.0
    let sigRel = {
      x: 0.62,
      y: 0.80,
      w: 0.28,
      h: 0.11
    };

    let isDraggingBox = false;
    let isResizingBox = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let boxStartX = 0;
    let boxStartY = 0;
    let resizeStartX = 0;
    let startBoxW = 0;

    // Helper: Register Cleanup
    currentWorkbenchCleanup = function() {
      if (activeRenderTask) {
        try { activeRenderTask.cancel(); } catch (e) {}
        activeRenderTask = null;
      }
      if (pdfDoc) {
        try { pdfDoc.destroy(); } catch (e) {}
        pdfDoc = null;
      }
      originalPdfBytes = null;
      currentSignatureDataUrl = null;
      activeSavedSigId = null;
      clearUnlockedSignaturesSession();
      failedAttemptsMap.clear();
      document.querySelectorAll('.sig-pin-dialog-overlay').forEach(el => el.remove());
    };

    // --- Cryptographic & Encoding Helpers ---
    function generateSaltHex(byteLength = 16) {
      const bytes = new Uint8Array(byteLength);
      window.crypto.getRandomValues(bytes);
      return bytesToHex(bytes);
    }

    function bytesToHex(bytes) {
      return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function hexToBytes(hex) {
      const bytes = new Uint8Array(hex.length / 2);
      for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
      }
      return bytes;
    }

    async function hashPinWithSalt(pin, saltHex) {
      const enc = new TextEncoder();
      const saltBytes = hexToBytes(saltHex);
      const pinBytes = enc.encode(String(pin).trim());
      const combined = new Uint8Array(saltBytes.length + pinBytes.length);
      combined.set(saltBytes, 0);
      combined.set(pinBytes, saltBytes.length);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', combined);
      return bytesToHex(new Uint8Array(hashBuffer));
    }

    // --- Local Storage Helpers ---
    function getSavedSignatures() {
      try {
        const raw = localStorage.getItem(STORAGE_SAVED_SIGS_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr : [];
      } catch (e) {
        console.error('Error reading saved signatures:', e);
        return [];
      }
    }

    function saveSavedSignatures(sigs) {
      try {
        localStorage.setItem(STORAGE_SAVED_SIGS_KEY, JSON.stringify(sigs));
        updateSavedCountBadge();
        return true;
      } catch (e) {
        console.error('Error saving signatures:', e);
        return false;
      }
    }

    function updateSavedCountBadge() {
      const list = getSavedSignatures();
      if (savedCountBadge) savedCountBadge.textContent = list.length;
    }

    function getSystemPinRecord() {
      try {
        const raw = localStorage.getItem(STORAGE_SYSTEM_PIN_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }

    function saveSystemPinRecord(record) {
      try {
        localStorage.setItem(STORAGE_SYSTEM_PIN_KEY, JSON.stringify(record));
        return true;
      } catch (e) {
        return false;
      }
    }

    // --- Temporary Unlock State (Document + Page Scoped) ---
    function getDocFingerprint() {
      if (!originalPdfBytes) return 'nodoc';
      const len = originalPdfBytes.length;
      const b0 = originalPdfBytes[0] || 0;
      const bEnd = originalPdfBytes[len - 1] || 0;
      return `doc_${baseFileName}_${len}_${b0}_${bEnd}`;
    }

    function isSignatureUnlockedForCurrentPage(sigId) {
      const key = `${getDocFingerprint()}_p${currentPageNum}_sig_${sigId}`;
      return unlockedSignaturesSession.has(key);
    }

    function markSignatureUnlockedForCurrentPage(sigId) {
      const key = `${getDocFingerprint()}_p${currentPageNum}_sig_${sigId}`;
      unlockedSignaturesSession.add(key);
    }

    function clearUnlockedSignaturesSession() {
      unlockedSignaturesSession.clear();
    }

    // --- Retry Throttling / Rate-limiting ---
    function checkThrottle(targetKey) {
      const record = failedAttemptsMap.get(targetKey);
      if (!record) return { isLocked: false, remainingSec: 0 };
      const now = Date.now();
      if (record.lockedUntil && record.lockedUntil > now) {
        return { isLocked: true, remainingSec: Math.ceil((record.lockedUntil - now) / 1000) };
      }
      return { isLocked: false, remainingSec: 0 };
    }

    function recordFailedAttempt(targetKey) {
      let record = failedAttemptsMap.get(targetKey) || { count: 0, lockedUntil: 0 };
      record.count++;
      if (record.count >= 3) {
        record.lockedUntil = Date.now() + 30000; // 30 second cooldown
      }
      failedAttemptsMap.set(targetKey, record);
      return checkThrottle(targetKey);
    }

    function resetFailedAttempts(targetKey) {
      failedAttemptsMap.delete(targetKey);
    }

    // --- Reusable Custom PIN Modal Builder ---
    function openCustomPinModal({
      title,
      iconSvg,
      subtitle,
      bodyHtml,
      submitLabel,
      submitClass = 'btn-primary',
      onInit,
      onSubmit
    }) {
      document.querySelectorAll('.sig-pin-dialog-overlay').forEach(el => el.remove());

      const overlay = document.createElement('div');
      overlay.className = 'sig-pin-dialog-overlay';
      overlay.innerHTML = `
        <div class="sig-pin-dialog-card" role="dialog" aria-modal="true" aria-labelledby="sig-pin-modal-title">
          <div class="sig-pin-dialog-header">
            <h3 class="sig-pin-dialog-title" id="sig-pin-modal-title">
              ${iconSvg || '🔒'}
              <span>${escapeHtml(title)}</span>
            </h3>
            <button type="button" class="sig-pin-dialog-close" id="sig-pin-modal-close" title="Close dialog">×</button>
          </div>
          <div class="sig-pin-dialog-body">
            ${subtitle ? `<p style="font-size:0.8rem; color:#64748b; margin:0 0 0.5rem 0; line-height:1.4;">${escapeHtml(subtitle)}</p>` : ''}
            <div class="sig-pin-error-box" id="sig-pin-error-box"></div>
            <div class="sig-pin-throttle-box" id="sig-pin-throttle-box"></div>
            ${bodyHtml}
          </div>
          <div class="sig-pin-dialog-footer">
            <button type="button" class="btn btn-secondary btn-sm" id="sig-pin-modal-cancel">Cancel</button>
            <button type="button" class="btn ${submitClass} btn-sm" id="sig-pin-modal-submit">${escapeHtml(submitLabel || 'Confirm')}</button>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      const closeBtn = overlay.querySelector('#sig-pin-modal-close');
      const cancelBtn = overlay.querySelector('#sig-pin-modal-cancel');
      const submitBtn = overlay.querySelector('#sig-pin-modal-submit');
      const errorBox = overlay.querySelector('#sig-pin-error-box');
      const throttleBox = overlay.querySelector('#sig-pin-throttle-box');

      function closeModal() {
        overlay.remove();
        document.removeEventListener('keydown', handleKeyDown);
      }

      function handleKeyDown(e) {
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'Enter' && e.target && e.target.tagName === 'INPUT') {
          e.preventDefault();
          submitBtn.click();
        }
      }
      document.addEventListener('keydown', handleKeyDown);

      closeBtn.addEventListener('click', closeModal);
      cancelBtn.addEventListener('click', closeModal);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });

      overlay.querySelectorAll('.sig-pin-eye-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const input = btn.previousElementSibling;
          if (!input) return;
          const isPw = input.type === 'password';
          input.type = isPw ? 'text' : 'password';
          btn.innerHTML = isPw ? `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          ` : `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          `;
        });
      });

      function showError(msg) {
        if (!errorBox) return;
        if (msg) {
          errorBox.textContent = msg;
          errorBox.classList.add('visible');
        } else {
          errorBox.textContent = '';
          errorBox.classList.remove('visible');
        }
      }

      function showThrottle(remainingSec) {
        if (!throttleBox) return;
        if (remainingSec > 0) {
          throttleBox.textContent = `Too many incorrect attempts. Please wait ${remainingSec}s before retrying.`;
          throttleBox.classList.add('visible');
          submitBtn.disabled = true;
        } else {
          throttleBox.textContent = '';
          throttleBox.classList.remove('visible');
          submitBtn.disabled = false;
        }
      }

      if (typeof onInit === 'function') {
        onInit({ overlay, showError, showThrottle, closeModal, submitBtn });
      }

      submitBtn.addEventListener('click', async () => {
        showError('');
        if (typeof onSubmit === 'function') {
          await onSubmit({ overlay, showError, showThrottle, closeModal, submitBtn });
        }
      });

      setTimeout(() => {
        const firstInput = overlay.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 50);

      return { overlay, closeModal, showError, showThrottle };
    }

    // --- Save Signature with PIN Setup Dialog ---
    function promptSaveSignatureWithPin(dataUrl, aspectRatio) {
      if (!dataUrl) {
        showToast('Please create or upload a signature first.', 'warning');
        return;
      }

      const existing = getSavedSignatures();
      const defaultName = `Signature ${existing.length + 1}`;

      openCustomPinModal({
        title: 'Save Signature with PIN Protection',
        iconSvg: '💾',
        subtitle: 'Set an individual PIN to protect this signature from unauthorized use on your device.',
        bodyHtml: `
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-input-save-name">Signature Name</label>
            <input type="text" id="sig-input-save-name" class="sig-pin-input" value="${escapeHtml(defaultName)}" placeholder="e.g. Personal Sign, Work Initial" />
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-input-save-pin">
              <span>Create PIN</span>
              <span style="font-size:0.68rem; color:#64748b; font-weight:normal;">Min 4 digits</span>
            </label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-input-save-pin" class="sig-pin-input" placeholder="Enter 4-8 digit PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-input-save-confirm">Confirm PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-input-save-confirm" class="sig-pin-input" placeholder="Re-enter PIN to confirm" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
          <div style="font-size:0.7rem; color:#64748b; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:6px 8px; line-height:1.35;">
            🔒 <strong>Security Note:</strong> The PIN is hashed using SHA-256 with a unique cryptographic salt. Plaintext PINs are never stored.
          </div>
        `,
        submitLabel: 'Save Protected Signature',
        submitClass: 'btn-primary',
        onSubmit: async ({ overlay, showError, closeModal, submitBtn }) => {
          const nameInput = overlay.querySelector('#sig-input-save-name');
          const pinInput = overlay.querySelector('#sig-input-save-pin');
          const confirmInput = overlay.querySelector('#sig-input-save-confirm');

          const name = nameInput ? nameInput.value.trim() : '';
          const pin = pinInput ? pinInput.value.trim() : '';
          const confirmPin = confirmInput ? confirmInput.value.trim() : '';

          if (!name) {
            showError('Please provide a name for this signature.');
            if (nameInput) nameInput.focus();
            return;
          }

          if (!pin || pin.length < 4) {
            showError('PIN must be at least 4 digits or characters.');
            if (pinInput) pinInput.focus();
            return;
          }

          if (pin !== confirmPin) {
            showError('PIN confirmation does not match. Please re-enter.');
            if (confirmInput) confirmInput.focus();
            return;
          }

          submitBtn.disabled = true;
          submitBtn.textContent = 'Securing & Saving...';

          try {
            const saltHex = generateSaltHex(16);
            const hashHex = await hashPinWithSalt(pin, saltHex);

            const newSig = {
              id: 'sig_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
              name: name,
              dataUrl: dataUrl,
              aspectRatio: aspectRatio || 2.5,
              createdAt: Date.now(),
              pinSalt: saltHex,
              pinHash: hashHex,
              isPinProtected: true
            };

            const sigs = getSavedSignatures();
            sigs.push(newSig);
            saveSavedSignatures(sigs);

            // Mark automatically unlocked for current document page
            markSignatureUnlockedForCurrentPage(newSig.id);

            closeModal();
            switchSigTab('saved');
            selectAndApplySavedSignature(newSig);
            showToast(`Saved "${name}" with individual PIN protection!`, 'success');
          } catch (err) {
            console.error('Error saving signature:', err);
            showError('Failed to save signature: ' + err.message);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Save Protected Signature';
          }
        }
      });
    }

    // --- Unlock Signature PIN Prompt ---
    function promptUnlockSignaturePin(sig, onUnlocked) {
      if (isSignatureUnlockedForCurrentPage(sig.id)) {
        if (typeof onUnlocked === 'function') onUnlocked();
        return;
      }

      const targetKey = 'sig_' + sig.id;
      let countdownTimer = null;

      openCustomPinModal({
        title: `Unlock "${sig.name}"`,
        iconSvg: '🔒',
        subtitle: `Enter the individual PIN set for this signature to use it on Page ${currentPageNum}.`,
        bodyHtml: `
          <div style="display:flex; align-items:center; gap:0.75rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.55rem 0.75rem; margin-bottom:0.75rem;">
            <div style="width:64px; height:36px; background:#ffffff; border:1px solid #cbd5e1; border-radius:4px; display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0;">
              <img src="${sig.dataUrl}" alt="Signature Thumbnail" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div>
              <div style="font-size:0.825rem; font-weight:700; color:#1e293b;">${escapeHtml(sig.name)}</div>
              <div style="font-size:0.7rem; color:#64748b;">Requires PIN for Page ${currentPageNum}</div>
            </div>
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-input-unlock-pin">Enter Signature PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-input-unlock-pin" class="sig-pin-input" placeholder="Enter PIN" maxlength="12" autocomplete="current-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
        `,
        submitLabel: 'Unlock & Place Signature',
        submitClass: 'btn-primary',
        onInit: ({ showThrottle, submitBtn }) => {
          const throttle = checkThrottle(targetKey);
          if (throttle.isLocked) {
            showThrottle(throttle.remainingSec);
            let sec = throttle.remainingSec;
            countdownTimer = setInterval(() => {
              sec--;
              if (sec <= 0) {
                clearInterval(countdownTimer);
                showThrottle(0);
              } else {
                showThrottle(sec);
              }
            }, 1000);
          }
        },
        onSubmit: async ({ overlay, showError, showThrottle, closeModal, submitBtn }) => {
          const throttle = checkThrottle(targetKey);
          if (throttle.isLocked) {
            showThrottle(throttle.remainingSec);
            return;
          }

          const pinInput = overlay.querySelector('#sig-input-unlock-pin');
          const pin = pinInput ? pinInput.value.trim() : '';

          if (!pin) {
            showError('Please enter the signature PIN.');
            if (pinInput) pinInput.focus();
            return;
          }

          submitBtn.disabled = true;
          submitBtn.textContent = 'Verifying...';

          try {
            const enteredHash = await hashPinWithSalt(pin, sig.pinSalt);
            if (enteredHash === sig.pinHash) {
              if (countdownTimer) clearInterval(countdownTimer);
              resetFailedAttempts(targetKey);
              markSignatureUnlockedForCurrentPage(sig.id);
              closeModal();
              if (typeof onUnlocked === 'function') onUnlocked();
              renderSavedSignaturesList();
              showToast(`"${sig.name}" unlocked for Page ${currentPageNum}.`, 'success');
            } else {
              const thr = recordFailedAttempt(targetKey);
              if (thr.isLocked) {
                showThrottle(thr.remainingSec);
                let sec = thr.remainingSec;
                if (countdownTimer) clearInterval(countdownTimer);
                countdownTimer = setInterval(() => {
                  sec--;
                  if (sec <= 0) {
                    clearInterval(countdownTimer);
                    showThrottle(0);
                  } else {
                    showThrottle(sec);
                  }
                }, 1000);
              } else {
                showError('Incorrect PIN. Please try again.');
                if (pinInput) {
                  pinInput.value = '';
                  pinInput.focus();
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'Unlock & Place Signature';
              }
            }
          } catch (err) {
            console.error('Error verifying PIN:', err);
            showError('Verification error: ' + err.message);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Unlock & Place Signature';
          }
        }
      });
    }

    // --- Place Selected Signature on Document Canvas ---
    function selectAndApplySavedSignature(sig) {
      currentSignatureDataUrl = sig.dataUrl;
      signatureAspectRatio = sig.aspectRatio || 2.5;
      activeSavedSigId = sig.id;
      applySignatureToPreview();
      renderSavedSignaturesList();
    }

    // --- Render Saved Signatures List ---
    function renderSavedSignaturesList() {
      if (!savedListContainer) return;
      const list = getSavedSignatures();
      updateSavedCountBadge();

      if (!list.length) {
        savedListContainer.innerHTML = `
          <div class="sig-saved-empty">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.8" style="margin-bottom:4px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            <div>No saved signatures found.</div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-top:2px;">Draw or upload a signature and click "Save Signature" to protect it with a PIN.</div>
          </div>
        `;
        return;
      }

      savedListContainer.innerHTML = '';
      list.forEach(sig => {
        const isLegacy = !sig.pinHash || sig.isPinProtected === false;
        const isUnlocked = isSignatureUnlockedForCurrentPage(sig.id);
        const isCurrentlyActive = (activeSavedSigId === sig.id);

        let badgeHtml = '';
        if (isLegacy) {
          badgeHtml = `<span class="sig-badge-unprotected">⚠️ Set PIN</span>`;
        } else if (isUnlocked) {
          badgeHtml = `<span class="sig-badge-unlocked">🔓 Unlocked (P.${currentPageNum})</span>`;
        } else {
          badgeHtml = `<span class="sig-badge-locked">🔒 PIN Protected</span>`;
        }

        const card = document.createElement('div');
        card.className = `sig-saved-card${isCurrentlyActive ? ' active' : ''}`;
        card.setAttribute('data-sig-id', sig.id);
        card.innerHTML = `
          <div class="sig-saved-card-left">
            <div class="sig-saved-thumb-wrap">
              <img src="${sig.dataUrl}" class="sig-saved-thumb" alt="${escapeHtml(sig.name)}" />
            </div>
            <div class="sig-saved-info">
              <div class="sig-saved-name" title="${escapeHtml(sig.name)}">${escapeHtml(sig.name)}</div>
              <div class="sig-saved-meta">
                ${badgeHtml}
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-secondary btn-xs btn-use-sig" title="Place on PDF">
            ${isUnlocked ? '✓ Use' : 'Unlock'}
          </button>
        `;

        card.querySelector('.btn-use-sig').addEventListener('click', (e) => {
          e.stopPropagation();
          handleSelectSavedSignature(sig);
        });
        card.addEventListener('click', () => {
          handleSelectSavedSignature(sig);
        });

        savedListContainer.appendChild(card);
      });
    }

    function handleSelectSavedSignature(sig) {
      if (!sig.pinHash || sig.isPinProtected === false) {
        promptMigrateLegacySignaturePin(sig, () => {
          selectAndApplySavedSignature(sig);
        });
        return;
      }

      if (isSignatureUnlockedForCurrentPage(sig.id)) {
        selectAndApplySavedSignature(sig);
      } else {
        promptUnlockSignaturePin(sig, () => {
          selectAndApplySavedSignature(sig);
        });
      }
    }

    // --- System PIN Setup & Verification ---
    function promptSetupSystemPin(onSuccess) {
      openCustomPinModal({
        title: 'Set Up System PIN',
        iconSvg: '⚙️',
        subtitle: 'A System PIN is required to manage saved signatures, change individual PINs, or delete records.',
        bodyHtml: `
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-syspin-create">
              <span>Create System PIN</span>
              <span style="font-size:0.68rem; color:#64748b; font-weight:normal;">Min 4 digits</span>
            </label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-syspin-create" class="sig-pin-input" placeholder="Enter System PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-syspin-confirm">Confirm System PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-syspin-confirm" class="sig-pin-input" placeholder="Re-enter System PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
        `,
        submitLabel: 'Create System PIN',
        submitClass: 'btn-primary',
        onSubmit: async ({ overlay, showError, closeModal, submitBtn }) => {
          const pinInput = overlay.querySelector('#sig-syspin-create');
          const confirmInput = overlay.querySelector('#sig-syspin-confirm');
          const pin = pinInput ? pinInput.value.trim() : '';
          const confirmPin = confirmInput ? confirmInput.value.trim() : '';

          if (!pin || pin.length < 4) {
            showError('System PIN must be at least 4 digits or characters.');
            if (pinInput) pinInput.focus();
            return;
          }

          if (pin !== confirmPin) {
            showError('PIN confirmation does not match.');
            if (confirmInput) confirmInput.focus();
            return;
          }

          submitBtn.disabled = true;
          try {
            const saltHex = generateSaltHex(16);
            const hashHex = await hashPinWithSalt(pin, saltHex);
            saveSystemPinRecord({ salt: saltHex, hash: hashHex, createdAt: Date.now() });
            closeModal();
            showToast('System PIN configured successfully!', 'success');
            if (typeof onSuccess === 'function') onSuccess(pin);
          } catch (err) {
            showError('Error saving System PIN: ' + err.message);
            submitBtn.disabled = false;
          }
        }
      });
    }

    function promptVerifySystemPin(onVerified) {
      const sysRecord = getSystemPinRecord();
      if (!sysRecord) {
        promptSetupSystemPin(onVerified);
        return;
      }

      const targetKey = 'system_pin';
      let countdownTimer = null;

      openCustomPinModal({
        title: 'System PIN Required',
        iconSvg: '🛡️',
        subtitle: 'Enter your System PIN to manage saved signatures, update PINs, or delete records.',
        bodyHtml: `
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-syspin-verify">System PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-syspin-verify" class="sig-pin-input" placeholder="Enter System PIN" maxlength="12" autocomplete="current-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
        `,
        submitLabel: 'Verify & Manage',
        submitClass: 'btn-primary',
        onInit: ({ showThrottle }) => {
          const throttle = checkThrottle(targetKey);
          if (throttle.isLocked) {
            showThrottle(throttle.remainingSec);
            let sec = throttle.remainingSec;
            countdownTimer = setInterval(() => {
              sec--;
              if (sec <= 0) {
                clearInterval(countdownTimer);
                showThrottle(0);
              } else {
                showThrottle(sec);
              }
            }, 1000);
          }
        },
        onSubmit: async ({ overlay, showError, showThrottle, closeModal, submitBtn }) => {
          const throttle = checkThrottle(targetKey);
          if (throttle.isLocked) {
            showThrottle(throttle.remainingSec);
            return;
          }

          const pinInput = overlay.querySelector('#sig-syspin-verify');
          const pin = pinInput ? pinInput.value.trim() : '';

          if (!pin) {
            showError('Please enter your System PIN.');
            if (pinInput) pinInput.focus();
            return;
          }

          submitBtn.disabled = true;
          submitBtn.textContent = 'Verifying...';

          try {
            const enteredHash = await hashPinWithSalt(pin, sysRecord.salt);
            if (enteredHash === sysRecord.hash) {
              if (countdownTimer) clearInterval(countdownTimer);
              resetFailedAttempts(targetKey);
              closeModal();
              if (typeof onVerified === 'function') onVerified(pin);
            } else {
              const thr = recordFailedAttempt(targetKey);
              if (thr.isLocked) {
                showThrottle(thr.remainingSec);
                let sec = thr.remainingSec;
                if (countdownTimer) clearInterval(countdownTimer);
                countdownTimer = setInterval(() => {
                  sec--;
                  if (sec <= 0) {
                    clearInterval(countdownTimer);
                    showThrottle(0);
                  } else {
                    showThrottle(sec);
                  }
                }, 1000);
              } else {
                showError('Incorrect System PIN. Please try again.');
                if (pinInput) {
                  pinInput.value = '';
                  pinInput.focus();
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'Verify & Manage';
              }
            }
          } catch (err) {
            showError('Verification error: ' + err.message);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Verify & Manage';
          }
        }
      });
    }

    // --- Signature Management Modal ---
    function openSignatureManagementModal(verifiedSystemPin) {
      const renderManageList = (container) => {
        const list = getSavedSignatures();
        if (!list.length) {
          container.innerHTML = `<div class="sig-saved-empty">No saved signatures to manage.</div>`;
          return;
        }

        container.innerHTML = '';
        list.forEach(sig => {
          const item = document.createElement('div');
          item.className = 'sig-manage-item';
          item.innerHTML = `
            <div style="display:flex; align-items:center; gap:0.6rem; min-width:0; flex:1;">
              <div class="sig-saved-thumb-wrap">
                <img src="${sig.dataUrl}" class="sig-saved-thumb" alt="${escapeHtml(sig.name)}" />
              </div>
              <div style="min-width:0;">
                <div class="sig-saved-name">${escapeHtml(sig.name)}</div>
                <div style="font-size:0.68rem; color:#64748b;">🔒 Protected</div>
              </div>
            </div>
            <div class="sig-manage-actions">
              <button type="button" class="btn btn-secondary btn-xs btn-change-pin" style="font-size:0.72rem; padding:3px 8px;">
                Change PIN
              </button>
              <button type="button" class="btn btn-secondary btn-xs btn-del-sig" style="font-size:0.72rem; padding:3px 8px; color:#dc2626; border-color:#fecaca;" title="Delete signature">
                Delete
              </button>
            </div>
          `;

          item.querySelector('.btn-change-pin').addEventListener('click', () => {
            promptChangeSignaturePin(sig, verifiedSystemPin, () => renderManageList(container));
          });

          item.querySelector('.btn-del-sig').addEventListener('click', () => {
            promptDeleteSignature(sig, verifiedSystemPin, () => renderManageList(container));
          });

          container.appendChild(item);
        });
      };

      openCustomPinModal({
        title: 'Manage Saved Signatures',
        iconSvg: '⚙️',
        subtitle: 'Authorized via System PIN. Change individual signature PINs, delete records, or update your System PIN.',
        bodyHtml: `
          <div style="display:flex; justify-content:flex-end; margin-bottom:0.6rem;">
            <button type="button" class="btn btn-secondary btn-xs" id="sig-btn-change-syspin" style="font-size:0.72rem; padding:3px 8px;">
              🔑 Change System PIN
            </button>
          </div>
          <div class="sig-manage-list" id="sig-manage-items-wrap"></div>
        `,
        submitLabel: 'Done',
        submitClass: 'btn-primary',
        onInit: ({ overlay, closeModal }) => {
          const wrap = overlay.querySelector('#sig-manage-items-wrap');
          renderManageList(wrap);

          const changeSysPinBtn = overlay.querySelector('#sig-btn-change-syspin');
          if (changeSysPinBtn) {
            changeSysPinBtn.addEventListener('click', () => {
              promptChangeSystemPin(verifiedSystemPin);
            });
          }
        },
        onSubmit: ({ closeModal }) => {
          closeModal();
          renderSavedSignaturesList();
        }
      });
    }

    // --- Change Individual Signature PIN Flow ---
    function promptChangeSignaturePin(sig, verifiedSystemPin, onDone) {
      openCustomPinModal({
        title: `Change PIN: "${sig.name}"`,
        iconSvg: '🔑',
        subtitle: `Authorized via System PIN. Enter a new individual PIN for "${sig.name}". Other signatures will remain unchanged.`,
        bodyHtml: `
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-change-pin">
              <span>New Individual PIN</span>
              <span style="font-size:0.68rem; color:#64748b; font-weight:normal;">Min 4 digits</span>
            </label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-change-pin" class="sig-pin-input" placeholder="Enter new PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-change-confirm">Confirm New PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-change-confirm" class="sig-pin-input" placeholder="Re-enter new PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
        `,
        submitLabel: 'Update PIN',
        submitClass: 'btn-primary',
        onSubmit: async ({ overlay, showError, closeModal, submitBtn }) => {
          const pinInput = overlay.querySelector('#sig-change-pin');
          const confirmInput = overlay.querySelector('#sig-change-confirm');
          const newPin = pinInput ? pinInput.value.trim() : '';
          const confirmPin = confirmInput ? confirmInput.value.trim() : '';

          if (!newPin || newPin.length < 4) {
            showError('New PIN must be at least 4 digits or characters.');
            if (pinInput) pinInput.focus();
            return;
          }

          if (newPin !== confirmPin) {
            showError('New PIN confirmation does not match.');
            if (confirmInput) confirmInput.focus();
            return;
          }

          submitBtn.disabled = true;
          try {
            const list = getSavedSignatures();
            const target = list.find(s => s.id === sig.id);
            if (!target) {
              showError('Signature not found in storage.');
              return;
            }

            const newSalt = generateSaltHex(16);
            const newHash = await hashPinWithSalt(newPin, newSalt);

            target.pinSalt = newSalt;
            target.pinHash = newHash;
            target.isPinProtected = true;

            saveSavedSignatures(list);

            // Invalidate any page-scoped unlocks for this signature
            Array.from(unlockedSignaturesSession).forEach(k => {
              if (k.includes(`_sig_${sig.id}`)) {
                unlockedSignaturesSession.delete(k);
              }
            });

            closeModal();
            showToast(`PIN updated successfully for "${sig.name}"!`, 'success');
            if (typeof onDone === 'function') onDone();
            renderSavedSignaturesList();
          } catch (err) {
            showError('Error updating PIN: ' + err.message);
            submitBtn.disabled = false;
          }
        }
      });
    }

    // --- Delete Signature with Explicit Confirmation ---
    function promptDeleteSignature(sig, verifiedSystemPin, onDone) {
      openCustomPinModal({
        title: `Delete Signature`,
        iconSvg: '⚠️',
        subtitle: `Authorized via System PIN. Are you sure you want to delete "${sig.name}"?`,
        bodyHtml: `
          <div style="display:flex; align-items:center; gap:0.75rem; background:#fff1f2; border:1px solid #fecdd3; border-radius:8px; padding:0.65rem 0.85rem;">
            <div style="width:64px; height:36px; background:#ffffff; border:1px solid #cbd5e1; border-radius:4px; display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0;">
              <img src="${sig.dataUrl}" alt="Signature Thumbnail" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <div>
              <div style="font-size:0.85rem; font-weight:700; color:#9f1239;">${escapeHtml(sig.name)}</div>
              <div style="font-size:0.72rem; color:#be123c;">This signature will be permanently removed from your device. Other saved signatures will remain intact.</div>
            </div>
          </div>
        `,
        submitLabel: 'Permanently Delete',
        submitClass: 'btn-danger',
        onSubmit: ({ closeModal }) => {
          const list = getSavedSignatures().filter(s => s.id !== sig.id);
          saveSavedSignatures(list);

          // Clear from unlocked session
          Array.from(unlockedSignaturesSession).forEach(k => {
            if (k.includes(`_sig_${sig.id}`)) {
              unlockedSignaturesSession.delete(k);
            }
          });

          if (activeSavedSigId === sig.id) {
            activeSavedSigId = null;
            currentSignatureDataUrl = null;
            if (placementBox) placementBox.style.display = 'none';
          }

          closeModal();
          showToast(`Deleted signature "${sig.name}".`, 'info');
          if (typeof onDone === 'function') onDone();
          renderSavedSignaturesList();
        }
      });
    }

    // --- Change System PIN Flow ---
    function promptChangeSystemPin(currentVerifiedPin) {
      openCustomPinModal({
        title: 'Change System PIN',
        iconSvg: '🔑',
        subtitle: 'Enter your new System PIN. This will protect future signature management operations.',
        bodyHtml: `
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-sys-new-pin">
              <span>New System PIN</span>
              <span style="font-size:0.68rem; color:#64748b; font-weight:normal;">Min 4 digits</span>
            </label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-sys-new-pin" class="sig-pin-input" placeholder="Enter new System PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-sys-confirm-pin">Confirm New System PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-sys-confirm-pin" class="sig-pin-input" placeholder="Re-enter new System PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
        `,
        submitLabel: 'Update System PIN',
        submitClass: 'btn-primary',
        onSubmit: async ({ overlay, showError, closeModal, submitBtn }) => {
          const pinInput = overlay.querySelector('#sig-sys-new-pin');
          const confirmInput = overlay.querySelector('#sig-sys-confirm-pin');
          const newPin = pinInput ? pinInput.value.trim() : '';
          const confirmPin = confirmInput ? confirmInput.value.trim() : '';

          if (!newPin || newPin.length < 4) {
            showError('System PIN must be at least 4 digits or characters.');
            if (pinInput) pinInput.focus();
            return;
          }

          if (newPin !== confirmPin) {
            showError('System PIN confirmation does not match.');
            if (confirmInput) confirmInput.focus();
            return;
          }

          submitBtn.disabled = true;
          try {
            const newSalt = generateSaltHex(16);
            const newHash = await hashPinWithSalt(newPin, newSalt);
            saveSystemPinRecord({ salt: newSalt, hash: newHash, updatedAt: Date.now() });
            closeModal();
            showToast('System PIN updated successfully!', 'success');
          } catch (err) {
            showError('Error updating System PIN: ' + err.message);
            submitBtn.disabled = false;
          }
        }
      });
    }

    // --- Migrate Legacy or Unprotected Signature PIN ---
    function promptMigrateLegacySignaturePin(sig, onUnlocked) {
      openCustomPinModal({
        title: `Set PIN for "${sig.name}"`,
        iconSvg: '🛡️',
        subtitle: `This saved signature does not have PIN protection yet. Please set an individual PIN to secure and use it.`,
        bodyHtml: `
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-legacy-pin">
              <span>Create PIN</span>
              <span style="font-size:0.68rem; color:#64748b; font-weight:normal;">Min 4 digits</span>
            </label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-legacy-pin" class="sig-pin-input" placeholder="Enter PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
          <div class="sig-pin-field-group">
            <label class="sig-pin-field-label" for="sig-legacy-confirm">Confirm PIN</label>
            <div class="sig-pin-input-wrap">
              <input type="password" id="sig-legacy-confirm" class="sig-pin-input" placeholder="Re-enter PIN" maxlength="12" autocomplete="new-password" />
              <button type="button" class="sig-pin-eye-btn" title="Toggle visibility">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
            </div>
          </div>
        `,
        submitLabel: 'Activate & Unlock',
        submitClass: 'btn-primary',
        onSubmit: async ({ overlay, showError, closeModal, submitBtn }) => {
          const pinInput = overlay.querySelector('#sig-legacy-pin');
          const confirmInput = overlay.querySelector('#sig-legacy-confirm');
          const pin = pinInput ? pinInput.value.trim() : '';
          const confirmPin = confirmInput ? confirmInput.value.trim() : '';

          if (!pin || pin.length < 4) {
            showError('PIN must be at least 4 digits or characters.');
            if (pinInput) pinInput.focus();
            return;
          }

          if (pin !== confirmPin) {
            showError('PIN confirmation does not match.');
            if (confirmInput) confirmInput.focus();
            return;
          }

          submitBtn.disabled = true;
          try {
            const list = getSavedSignatures();
            const target = list.find(s => s.id === sig.id);
            const saltHex = generateSaltHex(16);
            const hashHex = await hashPinWithSalt(pin, saltHex);

            if (target) {
              target.pinSalt = saltHex;
              target.pinHash = hashHex;
              target.isPinProtected = true;
              saveSavedSignatures(list);
            }

            markSignatureUnlockedForCurrentPage(sig.id);
            closeModal();
            showToast(`PIN set successfully for "${sig.name}"!`, 'success');
            if (typeof onUnlocked === 'function') onUnlocked();
            renderSavedSignaturesList();
          } catch (err) {
            showError('Error setting PIN: ' + err.message);
            submitBtn.disabled = false;
          }
        }
      });
    }

    // Helper: Parse page range string e.g. "1, 3-5, 8"
    function parsePageRanges(inputStr, totalPages) {
      if (!inputStr || !inputStr.trim()) return [];
      const parts = inputStr.split(',');
      const pageSet = new Set();
      for (let part of parts) {
        part = part.trim();
        if (!part) continue;
        if (part.includes('-')) {
          const rangeParts = part.split('-');
          const start = parseInt(rangeParts[0], 10);
          const end = parseInt(rangeParts[1], 10);
          if (!isNaN(start) && !isNaN(end) && start <= end) {
            for (let p = Math.max(1, start); p <= Math.min(totalPages, end); p++) {
              pageSet.add(p);
            }
          }
        } else {
          const p = parseInt(part, 10);
          if (!isNaN(p) && p >= 1 && p <= totalPages) {
            pageSet.add(p);
          }
        }
      }
      return Array.from(pageSet).sort((a, b) => a - b);
    }

    // Helper: Draw Signature with rotation handling in PDFLib
    function drawSignatureOnPage(page, img, relX, relY, relW, relH) {
      const rot = (page.getRotation().angle || 0) % 360;
      const pw = page.getWidth();
      const ph = page.getHeight();

      if (rot === 0) {
        const w = relW * pw;
        const h = relH * ph;
        const x = relX * pw;
        const y = ph - (relY * ph) - h;
        page.drawImage(img, { x, y, width: w, height: h });
      } else if (rot === 90) {
        const w = relW * ph;
        const h = relH * pw;
        const x = (1 - relY) * pw;
        const y = relX * ph;
        page.drawImage(img, { x, y, width: h, height: w, rotate: PDFLib.degrees(270) });
      } else if (rot === 180) {
        const w = relW * pw;
        const h = relH * ph;
        const x = (1 - relX) * pw;
        const y = (relY + relH) * ph;
        page.drawImage(img, { x, y, width: w, height: h, rotate: PDFLib.degrees(180) });
      } else if (rot === 270) {
        const w = relW * ph;
        const h = relH * pw;
        const x = relY * pw;
        const y = (1 - relX) * ph;
        page.drawImage(img, { x, y, width: h, height: w, rotate: PDFLib.degrees(90) });
      }
    }

    // Initialize Draw Pad with Retina High-DPI support
    function initDrawPad() {
      const dpr = window.devicePixelRatio || 1;
      const rect = drawPadCanvas.getBoundingClientRect();
      const displayW = rect.width > 0 ? rect.width : (panelDraw && panelDraw.clientWidth > 0 ? panelDraw.clientWidth : 320);
      const isMobile = window.innerWidth <= 640;
      const displayH = isMobile ? 195 : 215; // 200–240 CSS px desktop, 180–220 CSS px mobile

      drawPadCanvas.width = Math.round(displayW * dpr);
      drawPadCanvas.height = Math.round(displayH * dpr);
      drawPadCanvas.style.width = displayW + 'px';
      drawPadCanvas.style.height = displayH + 'px';

      drawPadCtx.scale(dpr, dpr);
      drawPadCtx.lineCap = 'round';
      drawPadCtx.lineJoin = 'round';
      drawPadCtx.strokeStyle = activeInkColor;
      drawPadCtx.lineWidth = activePenWidth;

      updatePlaceholderVisibility();
    }
    initDrawPad();

    // Crop Draw Pad to Strokes and Produce Crisp PNG Data URL
    function updateSignatureFromDrawPad() {
      if (!padHasStrokes) {
        currentSignatureDataUrl = null;
        placementBox.style.display = 'none';
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const w = drawPadCanvas.width;
      const h = drawPadCanvas.height;
      const imgData = drawPadCtx.getImageData(0, 0, w, h);
      const data = imgData.data;

      let minX = w, maxX = 0, minY = h, maxY = 0;
      let foundPixel = false;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const alpha = data[(y * w + x) * 4 + 3];
          if (alpha > 10) {
            foundPixel = true;
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (!foundPixel) {
        padHasStrokes = false;
        currentSignatureDataUrl = null;
        placementBox.style.display = 'none';
        return;
      }

      const padMargin = 12 * dpr;
      const cropX = Math.max(0, minX - padMargin);
      const cropY = Math.max(0, minY - padMargin);
      const cropW = Math.min(w - cropX, (maxX - minX) + padMargin * 2);
      const cropH = Math.min(h - cropY, (maxY - minY) + padMargin * 2);

      const offCanvas = document.createElement('canvas');
      offCanvas.width = cropW;
      offCanvas.height = cropH;
      const offCtx = offCanvas.getContext('2d');
      offCtx.drawImage(drawPadCanvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

      currentSignatureDataUrl = offCanvas.toDataURL('image/png');
      signatureAspectRatio = cropW / cropH;

      applySignatureToPreview();
    }

    // Apply active signature image to preview overlay box
    function applySignatureToPreview() {
      if (!currentSignatureDataUrl) {
        placementBox.style.display = 'none';
        return;
      }

      placementImg.src = currentSignatureDataUrl;
      placementBox.style.display = 'flex';

      // Keep height proportional to width based on aspect ratio
      const cw = pdfCanvas.clientWidth || 500;
      const ch = pdfCanvas.clientHeight || 700;
      const pxW = Math.max(60, sigRel.w * cw);
      const pxH = pxW / (signatureAspectRatio || 2.2);

      sigRel.w = pxW / cw;
      sigRel.h = pxH / ch;

      updatePlacementBoxDOM();
    }

    // Update Placement Box Position and Size in DOM
    function updatePlacementBoxDOM() {
      if (!pdfCanvas.clientWidth || !pdfCanvas.clientHeight) return;
      const cw = pdfCanvas.clientWidth;
      const ch = pdfCanvas.clientHeight;

      let pxW = sigRel.w * cw;
      let pxH = sigRel.h * ch;
      let pxX = sigRel.x * cw;
      let pxY = sigRel.y * ch;

      // Keep within bounds
      if (pxW > cw) pxW = cw;
      if (pxH > ch) pxH = ch;
      pxX = Math.max(0, Math.min(cw - pxW, pxX));
      pxY = Math.max(0, Math.min(ch - pxH, pxY));

      placementBox.style.left = Math.round(pxX) + 'px';
      placementBox.style.top = Math.round(pxY) + 'px';
      placementBox.style.width = Math.round(pxW) + 'px';
      placementBox.style.height = Math.round(pxH) + 'px';

      widthSlider.value = Math.round(pxW);
      widthDisplay.textContent = Math.round(pxW) + ' px';
    }

    // Render PDF page with PDF.js
    async function renderPdfPage(pageNum) {
      if (!pdfDoc) return;
      if (activeRenderTask) {
        try { activeRenderTask.cancel(); } catch (e) {}
        activeRenderTask = null;
      }

      try {
        const page = await pdfDoc.getPage(pageNum);
        const unscaledViewport = page.getViewport({ scale: 1 });

        // Calculate appropriate scale for viewport
        const targetWidth = stageViewport.clientWidth > 40 ? (stageViewport.clientWidth - 40) : 560;
        const scale = Math.min(1.6, Math.max(0.5, targetWidth / unscaledViewport.width));
        const viewport = page.getViewport({ scale });

        pdfCanvas.width = viewport.width;
        pdfCanvas.height = viewport.height;

        pdfCtx.fillStyle = '#ffffff';
        pdfCtx.fillRect(0, 0, pdfCanvas.width, pdfCanvas.height);

        activeRenderTask = page.render({ canvasContext: pdfCtx, viewport });
        await activeRenderTask.promise;
        activeRenderTask = null;

        currentPageNum = pageNum;
        pageDimsLabel.textContent = `${Math.round(unscaledViewport.width)} × ${Math.round(unscaledViewport.height)} pt`;
        pageSelect.value = pageNum;
        prevPageBtn.disabled = (pageNum <= 1);
        nextPageBtn.disabled = (pageNum >= pdfDoc.numPages);

        const currentOpt = targetScopeSelect.querySelector('option[value="current"]');
        if (currentOpt) currentOpt.textContent = `Current Page Only (Page ${pageNum})`;

        updatePlacementBoxDOM();
        if (panelSaved && panelSaved.style.display !== 'none') {
          renderSavedSignaturesList();
        }
      } catch (err) {
        if (err && err.name === 'RenderingCancelledException') return;
        console.error('PDF page render error:', err);
        showToast('Error displaying PDF page.', 'error');
      }
    }

    // Load PDF Document
    async function loadPdfDocument(file) {
      if (!file) return;

      if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF file.', 'error');
        return;
      }

      if (file.size === 0) {
        showToast('Selected PDF file is empty (0 bytes).', 'error');
        return;
      }

      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        return;
      }

      baseFileName = file.name.replace(/\.[^/.]+$/, '');

      try {
        const arrayBuf = await file.arrayBuffer();
        originalPdfBytes = new Uint8Array(arrayBuf);
        clearUnlockedSignaturesSession();
        activeSavedSigId = null;

        pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/libs/pdf.worker.min.js';
        const loadingTask = pdfjsLib.getDocument({ data: originalPdfBytes.slice() });
        pdfDoc = await loadingTask.promise;

        pageSelect.innerHTML = '';
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const opt = document.createElement('option');
          opt.value = i;
          opt.textContent = `Page ${i}`;
          pageSelect.appendChild(opt);
        }

        totalPagesLabel.textContent = `of ${pdfDoc.numPages}`;
        currentPageNum = 1;

        pdfDropzone.style.display = 'none';
        activeWorkspace.style.display = 'grid';

        initDrawPad();
        await renderPdfPage(1);
        updateSavedCountBadge();
        renderSavedSignaturesList();

        if (currentSignatureDataUrl) {
          applySignatureToPreview();
        }

        showToast(`Loaded "${file.name}" (${pdfDoc.numPages} ${pdfDoc.numPages === 1 ? 'page' : 'pages'})`, 'info');
      } catch (err) {
        console.error('PDF load error:', err);
        showToast('Could not open PDF. The file may be password-protected or corrupted.', 'error');
      }
    }

    // File Dropzone & Input Listeners
    initOptionBImportHandlers({
      dropzoneId: 'sig-optionb-dropzone',
      fileInputId: 'sig-pdf-file-input',
      browseBtnId: 'sig-optionb-browse',
      onFilesSelected: (files) => {
        if (files && files[0]) loadPdfDocument(files[0]);
      }
    });

    btnChangePdf.addEventListener('click', () => {
      pdfDropzone.style.display = 'block';
      activeWorkspace.style.display = 'none';
      pdfFileInput.value = '';
      currentSignatureDataUrl = null;
      activeSavedSigId = null;
      if (placementBox) placementBox.style.display = 'none';
      clearUnlockedSignaturesSession();
    });

    // Page Navigation Listeners
    prevPageBtn.addEventListener('click', () => {
      if (currentPageNum > 1) {
        currentPageNum--;
        renderPdfPage(currentPageNum);
      }
    });
    nextPageBtn.addEventListener('click', () => {
      if (pdfDoc && currentPageNum < pdfDoc.numPages) {
        currentPageNum++;
        renderPdfPage(currentPageNum);
      }
    });
    pageSelect.addEventListener('change', () => {
      currentPageNum = parseInt(pageSelect.value, 10);
      renderPdfPage(currentPageNum);
    });

    // Tab Switching: Draw vs Upload vs Saved
    function switchSigTab(activeTab) {
      tabDrawBtn.classList.toggle('active', activeTab === 'draw');
      tabUploadBtn.classList.toggle('active', activeTab === 'upload');
      if (tabSavedBtn) tabSavedBtn.classList.toggle('active', activeTab === 'saved');

      panelDraw.style.display = (activeTab === 'draw') ? 'block' : 'none';
      panelUpload.style.display = (activeTab === 'upload') ? 'block' : 'none';
      if (panelSaved) panelSaved.style.display = (activeTab === 'saved') ? 'block' : 'none';

      if (activeTab === 'draw') {
        if (padHasStrokes) updateSignatureFromDrawPad();
      } else if (activeTab === 'upload') {
        if (uploadThumb && uploadThumb.src) {
          currentSignatureDataUrl = uploadThumb.src;
          applySignatureToPreview();
        }
      } else if (activeTab === 'saved') {
        renderSavedSignaturesList();
      }
    }

    tabDrawBtn.addEventListener('click', () => switchSigTab('draw'));
    tabUploadBtn.addEventListener('click', () => switchSigTab('upload'));
    if (tabSavedBtn) tabSavedBtn.addEventListener('click', () => switchSigTab('saved'));

    // Save Signature Buttons Listeners
    if (btnSaveDrawn) {
      btnSaveDrawn.addEventListener('click', () => {
        if (!padHasStrokes || !currentSignatureDataUrl) {
          showToast('Please draw your signature before saving.', 'warning');
          return;
        }
        promptSaveSignatureWithPin(currentSignatureDataUrl, signatureAspectRatio);
      });
    }

    if (btnSaveUpload) {
      btnSaveUpload.addEventListener('click', () => {
        if (!uploadThumb || !uploadThumb.src || !currentSignatureDataUrl) {
          showToast('Please upload a signature image before saving.', 'warning');
          return;
        }
        promptSaveSignatureWithPin(currentSignatureDataUrl, signatureAspectRatio);
      });
    }

    if (btnManageSignatures) {
      btnManageSignatures.addEventListener('click', () => {
        promptVerifySystemPin((verifiedPin) => {
          openSignatureManagementModal(verifiedPin);
        });
      });
    }

    // Drawing Pad Pointer Events
    let lastPadX = 0;
    let lastPadY = 0;

    drawPadCanvas.addEventListener('pointerdown', (e) => {
      try { drawPadCanvas.setPointerCapture(e.pointerId); } catch (e) {}
      const rect = drawPadCanvas.getBoundingClientRect();
      lastPadX = e.clientX - rect.left;
      lastPadY = e.clientY - rect.top;
      isDrawingPad = true;
      padHasStrokes = true;

      // Automatically hide the empty-state placeholder on first stroke
      updatePlaceholderVisibility();
      if (padBoxWrap) padBoxWrap.classList.add('active-drawing');

      drawPadCtx.beginPath();
      drawPadCtx.moveTo(lastPadX, lastPadY);
    });

    drawPadCanvas.addEventListener('pointermove', (e) => {
      if (!isDrawingPad) return;
      const rect = drawPadCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      drawPadCtx.lineTo(x, y);
      drawPadCtx.stroke();
      lastPadX = x;
      lastPadY = y;
    });

    function finishDrawing() {
      if (isDrawingPad) {
        isDrawingPad = false;
        if (padBoxWrap) padBoxWrap.classList.remove('active-drawing');
        updateSignatureFromDrawPad();
        updatePlaceholderVisibility();
      }
    }

    drawPadCanvas.addEventListener('pointerup', finishDrawing);
    drawPadCanvas.addEventListener('pointercancel', finishDrawing);

    // Ink Color Buttons
    panelDraw.querySelectorAll('.sig-color-dot').forEach(btn => {
      btn.addEventListener('click', () => {
        panelDraw.querySelectorAll('.sig-color-dot').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeInkColor = btn.getAttribute('data-color');
        drawPadCtx.strokeStyle = activeInkColor;
      });
    });

    // Pen Width Buttons
    panelDraw.querySelectorAll('.sig-pen-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        panelDraw.querySelectorAll('.sig-pen-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activePenWidth = parseFloat(btn.getAttribute('data-width'));
        drawPadCtx.lineWidth = activePenWidth;
      });
    });

    // Clear Pad Button
    clearDrawBtn.addEventListener('click', () => {
      drawPadCtx.clearRect(0, 0, drawPadCanvas.width, drawPadCanvas.height);
      padHasStrokes = false;
      currentSignatureDataUrl = null;
      placementBox.style.display = 'none';
      updatePlaceholderVisibility();
    });

    // Signature Image Upload Handling
    imageUploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
      const isImageExt = /\.(png|jpe?g|webp)$/i.test(file.name);
      if (!validTypes.includes(file.type) && !isImageExt) {
        showToast('Please upload a PNG, JPG, or WebP image.', 'error');
        return;
      }

      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`Image exceeds 25 MB limit (${formatBytes(file.size)}).`, 'error');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const offCanvas = document.createElement('canvas');
          offCanvas.width = img.naturalWidth;
          offCanvas.height = img.naturalHeight;
          const offCtx = offCanvas.getContext('2d');
          offCtx.drawImage(img, 0, 0);

          if (removeWhiteBgCheckbox.checked) {
            const imgData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
            const d = imgData.data;
            for (let i = 0; i < d.length; i += 4) {
              const r = d[i], g = d[i + 1], b = d[i + 2];
              if (r > 218 && g > 218 && b > 218) {
                d[i + 3] = 0;
              } else if (r > 195 && g > 195 && b > 195) {
                const factor = (255 - ((r + g + b) / 3)) / 60;
                d[i + 3] = Math.round(d[i + 3] * factor);
              }
            }
            offCtx.putImageData(imgData, 0, 0);
          }

          currentSignatureDataUrl = offCanvas.toDataURL('image/png');
          signatureAspectRatio = offCanvas.width / offCanvas.height;

          uploadThumb.src = currentSignatureDataUrl;
          uploadThumbWrap.style.display = 'block';

          applySignatureToPreview();
          showToast('Signature image uploaded.', 'info');
        };
        img.onerror = () => showToast('Failed to load signature image.', 'error');
        img.src = event.target.result;
      };
      reader.onerror = () => showToast('Error reading uploaded image.', 'error');
      reader.readAsDataURL(file);
    });

    // Dragging the Overlay Box
    placementBox.addEventListener('pointerdown', (e) => {
      if (e.target === resizeCorner) return;
      e.preventDefault();
      placementBox.setPointerCapture(e.pointerId);
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      boxStartX = placementBox.offsetLeft;
      boxStartY = placementBox.offsetTop;
      isDraggingBox = true;
      placementBox.classList.add('active');
    });

    placementBox.addEventListener('pointermove', (e) => {
      if (!isDraggingBox) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      const cw = pdfCanvas.clientWidth;
      const ch = pdfCanvas.clientHeight;

      const newLeft = Math.max(0, Math.min(cw - placementBox.offsetWidth, boxStartX + dx));
      const newTop = Math.max(0, Math.min(ch - placementBox.offsetHeight, boxStartY + dy));

      sigRel.x = newLeft / cw;
      sigRel.y = newTop / ch;

      placementBox.style.left = Math.round(newLeft) + 'px';
      placementBox.style.top = Math.round(newTop) + 'px';
    });

    function finishBoxDrag() {
      if (isDraggingBox) {
        isDraggingBox = false;
        placementBox.classList.remove('active');
      }
    }
    placementBox.addEventListener('pointerup', finishBoxDrag);
    placementBox.addEventListener('pointercancel', finishBoxDrag);

    // Resizing via Corner Handle
    resizeCorner.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      resizeCorner.setPointerCapture(e.pointerId);
      resizeStartX = e.clientX;
      startBoxW = placementBox.offsetWidth;
      isResizingBox = true;
    });

    resizeCorner.addEventListener('pointermove', (e) => {
      if (!isResizingBox) return;
      const dx = e.clientX - resizeStartX;
      const cw = pdfCanvas.clientWidth;
      const ch = pdfCanvas.clientHeight;

      let newW = Math.max(60, Math.min(cw - placementBox.offsetLeft, startBoxW + dx));
      let newH = newW / (signatureAspectRatio || 2.2);

      if (placementBox.offsetTop + newH > ch) {
        newH = ch - placementBox.offsetTop;
        newW = newH * (signatureAspectRatio || 2.2);
      }

      sigRel.w = newW / cw;
      sigRel.h = newH / ch;

      updatePlacementBoxDOM();
    });

    function finishBoxResize() {
      if (isResizingBox) isResizingBox = false;
    }
    resizeCorner.addEventListener('pointerup', finishBoxResize);
    resizeCorner.addEventListener('pointercancel', finishBoxResize);

    // Width Slider
    widthSlider.addEventListener('input', () => {
      const desiredW = parseFloat(widthSlider.value);
      const cw = pdfCanvas.clientWidth;
      const ch = pdfCanvas.clientHeight;

      let newW = Math.max(60, Math.min(cw - placementBox.offsetLeft, desiredW));
      let newH = newW / (signatureAspectRatio || 2.2);

      if (placementBox.offsetTop + newH > ch) {
        newH = ch - placementBox.offsetTop;
        newW = newH * (signatureAspectRatio || 2.2);
      }

      sigRel.w = newW / cw;
      sigRel.h = newH / ch;

      updatePlacementBoxDOM();
    });

    // Preset Positions
    presetBrBtn.addEventListener('click', () => {
      sigRel.x = Math.max(0, 1.0 - sigRel.w - 0.06);
      sigRel.y = Math.max(0, 1.0 - sigRel.h - 0.08);
      updatePlacementBoxDOM();
    });

    presetBlBtn.addEventListener('click', () => {
      sigRel.x = 0.06;
      sigRel.y = Math.max(0, 1.0 - sigRel.h - 0.08);
      updatePlacementBoxDOM();
    });

    presetCenterBtn.addEventListener('click', () => {
      sigRel.x = Math.max(0, 0.5 - (sigRel.w / 2));
      sigRel.y = Math.max(0, 0.5 - (sigRel.h / 2));
      updatePlacementBoxDOM();
    });

    // Page Scope Selection
    targetScopeSelect.addEventListener('change', () => {
      if (targetScopeSelect.value === 'custom') {
        customPagesGroup.style.display = 'block';
      } else {
        customPagesGroup.style.display = 'none';
      }
    });

    // Window Resize Handler
    window.addEventListener('resize', () => {
      if (pdfDoc && activeWorkspace.style.display !== 'none') {
        renderPdfPage(currentPageNum);
        if (!padHasStrokes) {
          initDrawPad();
        }
      }
    });

    // Generate Signed PDF & Download
    generateBtn.addEventListener('click', async () => {
      if (!originalPdfBytes) {
        showToast('Please select or upload a PDF document first.', 'error');
        return;
      }

      if (!currentSignatureDataUrl) {
        showToast('Please draw or upload your signature before signing.', 'warning');
        return;
      }

      let targetPages = [];
      const scope = targetScopeSelect.value;
      const totalPages = pdfDoc ? pdfDoc.numPages : 1;

      if (scope === 'current') {
        targetPages = [currentPageNum];
      } else if (scope === 'all') {
        for (let i = 1; i <= totalPages; i++) targetPages.push(i);
      } else if (scope === 'last') {
        targetPages = [totalPages];
      } else if (scope === 'custom') {
        const customVal = customPagesInput.value.trim();
        targetPages = parsePageRanges(customVal, totalPages);
        if (!targetPages.length) {
          showToast('Invalid custom page range. Use format like "1, 3-5".', 'error');
          customPagesInput.focus();
          return;
        }
      }

      try {
        generateBtn.disabled = true;
        generateBtn.innerHTML = `
          <span class="spinner" style="width:14px; height:14px; border:2px solid #ffffff; border-top-color:transparent; border-radius:50%; display:inline-block; animation:spin 0.8s linear infinite; margin-right:0.35rem; vertical-align:middle;"></span>
          Embedding Signature...
        `;

        // Convert signature data URL to binary Uint8Array
        const base64Data = currentSignatureDataUrl.split(',')[1];
        const binaryStr = atob(base64Data);
        const sigBytes = new Uint8Array(binaryStr.length);
        for (let i = 0; i < binaryStr.length; i++) {
          sigBytes[i] = binaryStr.charCodeAt(i);
        }

        // Load document with PDFLib
        const pdfDocLib = await PDFLib.PDFDocument.load(originalPdfBytes);
        const embeddedSig = await pdfDocLib.embedPng(sigBytes);
        const pages = pdfDocLib.getPages();

        for (const pNum of targetPages) {
          const targetPage = pages[pNum - 1];
          if (targetPage) {
            drawSignatureOnPage(targetPage, embeddedSig, sigRel.x, sigRel.y, sigRel.w, sigRel.h);
          }
        }

        const signedBytes = await pdfDocLib.save();
        const signedBlob = new Blob([signedBytes], { type: 'application/pdf' });
        triggerDownload(signedBlob, `${baseFileName}_signed.pdf`);

        showToast(`Signed PDF generated successfully! (${targetPages.length} ${targetPages.length === 1 ? 'page signed' : 'pages signed'})`, 'success');
      } catch (err) {
        console.error('PDF signing error:', err);
        showToast('Error generating signed PDF document.', 'error');
      } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.35rem; vertical-align:text-bottom;">
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            <path d="M2 21c3-1.5 6-1.5 9 0 2 .8 4 .8 6 0"></path>
          </svg>
          Sign & Download PDF
        `;
      }
    });
  }

  // --- 6.13 Protect PDF Functional Implementation ---
  function renderProtectPdfWorkbench() {
    let currentFile = null;
    let currentPdfBytes = null;
    let currentPdfDoc = null;
    let lastEncryptedBlob = null;
    let lastDownloadFilename = '';

    currentWorkbenchCleanup = function() {
      currentFile = null;
      currentPdfBytes = null;
      currentPdfDoc = null;
      lastEncryptedBlob = null;
      lastDownloadFilename = '';
      const p1 = document.getElementById('protect-password');
      const p2 = document.getElementById('protect-password-confirm');
      const po = document.getElementById('protect-owner-password');
      if (p1) p1.value = '';
      if (p2) p2.value = '';
      if (po) po.value = '';
    };

    dom.modalBody.innerHTML = `
      <div class="workbench-container protect-workbench-root">
        ${getOptionBPrivacyBannerHTML('Zero-Upload Confidential Encryption', 'Your document is encrypted 100% locally in your web browser using modern ISO 32000-2 AES-256 encryption. Neither your files nor your passwords are ever uploaded or transmitted across the network.')}

        ${getOptionBImportHTML({
          containerId: 'protect-pdf-dropzone',
          dropzoneId: 'protect-optionb-dropzone',
          fileInputId: 'protect-pdf-file-input',
          browseBtnId: 'protect-optionb-browse',
          fileTypeLabel: 'PDF',
          formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
          accept: '.pdf,application/pdf',
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <!-- Protection Workspace (Hidden until file selected) -->
        <div id="protect-work-area" style="display:none;" class="protect-workbench-root">
          <!-- File Summary Bar -->
          <div class="protect-file-summary">
            <div class="protect-file-info">
              <div class="protect-file-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div>
                <div class="protect-file-name" id="protect-file-name-label">document.pdf</div>
                <div class="protect-file-meta">
                  <span id="protect-file-size-badge" class="protect-file-badge">0 KB</span>
                  <span id="protect-file-pages-badge" class="protect-file-badge">1 Page</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="protect-btn-change-file" style="font-size:0.75rem; padding:4px 10px;">
              Change PDF
            </button>
          </div>

          <!-- Password Setup Form -->
          <div class="protect-form-card" id="protect-form-box">
            <!-- Open Password Field -->
            <div class="protect-field-group">
              <label class="protect-field-label" for="protect-password">
                <span>Document Open Password <span style="color:#e11d48;">*</span></span>
                <span class="protect-field-hint">Required to view document</span>
              </label>
              <div class="protect-input-wrap">
                <input type="password" id="protect-password" class="protect-input" placeholder="Enter password (minimum 4 characters)..." autocomplete="new-password" />
                <button type="button" class="protect-eye-btn" id="protect-toggle-pw" title="Show or hide password" aria-label="Toggle password visibility">
                  <svg class="eye-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg class="eye-closed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
              <div class="protect-field-error" id="protect-pw-error">Please enter a password.</div>
            </div>

            <!-- Confirm Password Field -->
            <div class="protect-field-group">
              <label class="protect-field-label" for="protect-password-confirm">
                <span>Confirm Password <span style="color:#e11d48;">*</span></span>
              </label>
              <div class="protect-input-wrap">
                <input type="password" id="protect-password-confirm" class="protect-input" placeholder="Re-enter password to confirm..." autocomplete="new-password" />
                <button type="button" class="protect-eye-btn" id="protect-toggle-pw-confirm" title="Show or hide password" aria-label="Toggle password confirmation visibility">
                  <svg class="eye-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg class="eye-closed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
              <div class="protect-field-error" id="protect-pw-confirm-error">Passwords do not match.</div>
            </div>

            <!-- Optional Permissions Accordion -->
            <div>
              <div class="protect-advanced-toggle" id="protect-advanced-toggle" role="button" tabindex="0">
                <span>Permissions & Document Restrictions (Optional)</span>
                <span id="protect-toggle-icon">▾</span>
              </div>
              <div class="protect-advanced-panel" id="protect-advanced-panel" style="display:none;">
                <!-- Owner Password -->
                <div class="protect-field-group">
                  <label class="protect-field-label" for="protect-owner-password">
                    <span>Permissions (Owner) Password</span>
                    <span class="protect-field-hint">Optional</span>
                  </label>
                  <div class="protect-input-wrap">
                    <input type="password" id="protect-owner-password" class="protect-input" placeholder="Leave empty to use same password..." autocomplete="new-password" />
                    <button type="button" class="protect-eye-btn" id="protect-toggle-owner-pw" title="Show or hide owner password" aria-label="Toggle owner password visibility">
                      <svg class="eye-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <svg class="eye-closed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    </button>
                  </div>
                  <div class="protect-field-hint">Bypasses permission restrictions. Must differ from open password if specified.</div>
                  <div class="protect-field-error" id="protect-owner-error"></div>
                </div>

                <!-- Checkbox toggles for permissions -->
                <div>
                  <div style="font-size:0.75rem; font-weight:700; color:#334155; margin-bottom:0.4rem;">Reader Permissions:</div>
                  <div class="protect-permissions-grid">
                    <label class="protect-perm-checkbox">
                      <input type="checkbox" id="protect-perm-print" checked />
                      <span>Allow Printing</span>
                    </label>
                    <label class="protect-perm-checkbox">
                      <input type="checkbox" id="protect-perm-copy" />
                      <span>Allow Copying Text/Images</span>
                    </label>
                    <label class="protect-perm-checkbox">
                      <input type="checkbox" id="protect-perm-modify" />
                      <span>Allow Modifying Content</span>
                    </label>
                    <label class="protect-perm-checkbox">
                      <input type="checkbox" id="protect-perm-annotate" checked />
                      <span>Allow Comments & Annotations</span>
                    </label>
                    <label class="protect-perm-checkbox">
                      <input type="checkbox" id="protect-perm-forms" checked />
                      <span>Allow Filling Form Fields</span>
                    </label>
                  </div>
                  <div style="font-size:0.71rem; color:#64748b; margin-top:0.45rem; line-height:1.4;">
                    * Notice: Conforming PDF viewers (such as Adobe Acrobat) adhere to standard permissions flags. Some third-party or mobile viewers may ignore permissions. Strong open password encryption is the primary defense for document confidentiality.
                  </div>
                </div>
              </div>
            </div>

            <!-- Security Specs Tag -->
            <div class="protect-security-specs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Standard: <strong>ISO 32000-2 (AES-256)</strong> • Engine: <strong>Browser Web Crypto API</strong></span>
            </div>

            <!-- Submit Button -->
            <button type="button" class="protect-btn-submit" id="protect-btn-encrypt">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Protect & Encrypt PDF</span>
            </button>
          </div>

          <!-- Success Area (Hidden initially) -->
          <div class="protect-success-card" id="protect-success-area" style="display:none;">
            <div style="width:48px; height:48px; border-radius:50%; background:#dcfce7; color:#16a34a; display:flex; align-items:center; justify-content:center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 style="font-size:1.1rem; font-weight:700; color:#14532d; margin-bottom:0.25rem;">PDF Protected Successfully!</h3>
              <p style="font-size:0.825rem; color:#166534;" id="protect-success-desc">
                Your file has been encrypted using AES-256 security. The password will be required whenever this document is opened.
              </p>
            </div>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap; justify-content:center; margin-top:0.5rem;">
              <button type="button" class="btn btn-primary" id="protect-btn-download">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Protected PDF
              </button>
              <button type="button" class="btn btn-secondary" id="protect-btn-reset">
                Protect Another PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // DOM references
    const dropzone = document.getElementById('protect-pdf-dropzone');
    const fileInput = document.getElementById('protect-pdf-file-input');
    const workArea = document.getElementById('protect-work-area');
    const formBox = document.getElementById('protect-form-box');
    const successArea = document.getElementById('protect-success-area');
    const fileNameLabel = document.getElementById('protect-file-name-label');
    const fileSizeBadge = document.getElementById('protect-file-size-badge');
    const filePagesBadge = document.getElementById('protect-file-pages-badge');
    const btnChangeFile = document.getElementById('protect-btn-change-file');

    const pwInput = document.getElementById('protect-password');
    const pwConfirmInput = document.getElementById('protect-password-confirm');
    const ownerPwInput = document.getElementById('protect-owner-password');
    const pwError = document.getElementById('protect-pw-error');
    const pwConfirmError = document.getElementById('protect-pw-confirm-error');
    const ownerError = document.getElementById('protect-owner-error');

    const togglePwBtn = document.getElementById('protect-toggle-pw');
    const togglePwConfirmBtn = document.getElementById('protect-toggle-pw-confirm');
    const toggleOwnerPwBtn = document.getElementById('protect-toggle-owner-pw');

    const advancedToggle = document.getElementById('protect-advanced-toggle');
    const advancedPanel = document.getElementById('protect-advanced-panel');
    const toggleIcon = document.getElementById('protect-toggle-icon');

    const permPrint = document.getElementById('protect-perm-print');
    const permCopy = document.getElementById('protect-perm-copy');
    const permModify = document.getElementById('protect-perm-modify');
    const permAnnotate = document.getElementById('protect-perm-annotate');
    const permForms = document.getElementById('protect-perm-forms');

    const btnEncrypt = document.getElementById('protect-btn-encrypt');
    const btnDownload = document.getElementById('protect-btn-download');
    const btnReset = document.getElementById('protect-btn-reset');

    // Helper: Eye toggle
    function setupPasswordToggle(button, input) {
      if (!button || !input) return;
      button.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        const eyeOpen = button.querySelector('.eye-open');
        const eyeClosed = button.querySelector('.eye-closed');
        if (eyeOpen && eyeClosed) {
          eyeOpen.style.display = isPassword ? 'none' : 'block';
          eyeClosed.style.display = isPassword ? 'block' : 'none';
        }
      });
    }

    setupPasswordToggle(togglePwBtn, pwInput);
    setupPasswordToggle(togglePwConfirmBtn, pwConfirmInput);
    setupPasswordToggle(toggleOwnerPwBtn, ownerPwInput);

    // Advanced accordion toggle
    if (advancedToggle && advancedPanel) {
      advancedToggle.addEventListener('click', () => {
        const isHidden = advancedPanel.style.display === 'none';
        advancedPanel.style.display = isHidden ? 'flex' : 'none';
        if (toggleIcon) toggleIcon.textContent = isHidden ? '▴' : '▾';
      });
      advancedToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          advancedToggle.click();
        }
      });
    }

    // Helper: reset state
    function resetToDropzone() {
      currentFile = null;
      currentPdfBytes = null;
      currentPdfDoc = null;
      lastEncryptedBlob = null;
      lastDownloadFilename = '';

      if (pwInput) pwInput.value = '';
      if (pwConfirmInput) pwConfirmInput.value = '';
      if (ownerPwInput) ownerPwInput.value = '';
      clearErrors();

      dropzone.style.display = 'block';
      workArea.style.display = 'none';
      formBox.style.display = 'flex';
      successArea.style.display = 'none';
      fileInput.value = '';
    }

    if (btnChangeFile) btnChangeFile.addEventListener('click', resetToDropzone);
    if (btnReset) btnReset.addEventListener('click', resetToDropzone);

    if (btnDownload) {
      btnDownload.addEventListener('click', () => {
        if (lastEncryptedBlob && lastDownloadFilename) {
          triggerDownload(lastEncryptedBlob, lastDownloadFilename);
          showToast('Downloaded ' + lastDownloadFilename, 'info');
        }
      });
    }

    function clearErrors() {
      if (pwInput) pwInput.classList.remove('is-invalid');
      if (pwConfirmInput) pwConfirmInput.classList.remove('is-invalid');
      if (ownerPwInput) ownerPwInput.classList.remove('is-invalid');
      if (pwError) { pwError.textContent = ''; pwError.classList.remove('visible'); }
      if (pwConfirmError) { pwConfirmError.textContent = ''; pwConfirmError.classList.remove('visible'); }
      if (ownerError) { ownerError.textContent = ''; ownerError.classList.remove('visible'); }
    }

    [pwInput, pwConfirmInput, ownerPwInput].forEach(inp => {
      if (inp) inp.addEventListener('input', clearErrors);
    });

    // File Processing
    async function handleFile(file) {
      if (!file) return;

      // 1. Size bounds
      if (file.size === 0) {
        showToast('The selected file is empty (0 bytes).', 'error');
        return;
      }
      if (file.size > 25 * 1024 * 1024) {
        showToast('File size exceeds the 25 MB limit. Please select a smaller PDF.', 'error');
        return;
      }

      // 2. MIME / extension check
      const fileNameLower = file.name.toLowerCase();
      if (!fileNameLower.endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF file (.pdf).', 'error');
        return;
      }

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected PDF file.', 'error');
      };
      reader.onload = async (e) => {
        try {
          const buffer = e.target.result;

          // Check if PDFLib is available
          if (!window.PDFLib) {
            showToast('PDF processing engine is still initializing. Please try again.', 'error');
            return;
          }

          // Verify PDF validity and check if already encrypted
          let doc;
          try {
            doc = await window.PDFLib.PDFDocument.load(buffer);
          } catch (loadErr) {
            if (loadErr && (loadErr.name === 'EncryptedPDFError' || (loadErr.message && loadErr.message.toLowerCase().includes('encrypted')))) {
              showToast('This PDF is already password-protected. Please select an unencrypted PDF.', 'error');
              return;
            }
            throw loadErr;
          }

          currentPdfDoc = doc;
          currentPdfBytes = new Uint8Array(buffer);
          currentFile = file;

          // Update Summary UI
          fileNameLabel.textContent = file.name;
          fileNameLabel.title = file.name;
          fileSizeBadge.textContent = formatBytes(file.size);
          const pageCount = doc.getPageCount();
          filePagesBadge.textContent = `${pageCount} Page${pageCount === 1 ? '' : 's'}`;

          clearErrors();
          dropzone.style.display = 'none';
          workArea.style.display = 'flex';
          formBox.style.display = 'flex';
          successArea.style.display = 'none';

          if (pwInput) pwInput.focus();
        } catch (err) {
          console.error('PDF validation error:', err);
          showToast('Failed to parse PDF document. The file may be corrupt or invalid.', 'error');
        }
      };

      reader.readAsArrayBuffer(file);
    }

    // Dropzone events
    initOptionBImportHandlers({
      dropzoneId: 'protect-optionb-dropzone',
      fileInputId: 'protect-pdf-file-input',
      browseBtnId: 'protect-optionb-browse',
      onFilesSelected: (files) => {
        if (files && files[0]) handleFile(files[0]);
      }
    });

    // Encrypt & Protect Handler
    btnEncrypt.addEventListener('click', async () => {
      if (!currentPdfBytes || !currentFile) {
        showToast('Please select a PDF document first.', 'error');
        return;
      }

      clearErrors();

      const pw = pwInput.value;
      const pwConfirm = pwConfirmInput.value;
      const ownerPw = ownerPwInput.value.trim();

      // Validate Open Password
      if (!pw) {
        pwInput.classList.add('is-invalid');
        pwError.textContent = 'Please enter a document open password.';
        pwError.classList.add('visible');
        pwInput.focus();
        return;
      }

      if (pw.length < 4) {
        pwInput.classList.add('is-invalid');
        pwError.textContent = 'Password must be at least 4 characters long.';
        pwError.classList.add('visible');
        pwInput.focus();
        return;
      }

      // Validate Confirmation
      if (pw !== pwConfirm) {
        pwConfirmInput.classList.add('is-invalid');
        pwConfirmError.textContent = 'Passwords do not match. Please re-enter.';
        pwConfirmError.classList.add('visible');
        pwConfirmInput.focus();
        return;
      }

      // Validate Owner Password
      if (ownerPw && ownerPw === pw) {
        ownerPwInput.classList.add('is-invalid');
        ownerError.textContent = 'Permissions password must be different from open password.';
        ownerError.classList.add('visible');
        ownerPwInput.focus();
        return;
      }

      if (!window.PDFEncrypt || typeof window.PDFEncrypt.encryptPDF !== 'function') {
        showToast('PDF encryption module is not ready. Please refresh the page.', 'error');
        return;
      }

      // Proceed with encryption
      btnEncrypt.disabled = true;
      btnEncrypt.innerHTML = `
        <span class="spinner-sm" style="display:inline-block; width:14px; height:14px; border:2px solid #ffffff; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; vertical-align:middle; margin-right:6px;"></span>
        Encrypting with AES-256...
      `;

      try {
        const options = {
          algorithm: 'AES-256',
          allowPrinting: permPrint ? permPrint.checked : true,
          allowCopying: permCopy ? permCopy.checked : false,
          allowModifying: permModify ? permModify.checked : false,
          allowAnnotating: permAnnotate ? permAnnotate.checked : true,
          allowFillingForms: permForms ? permForms.checked : true
        };

        if (ownerPw) {
          options.ownerPassword = ownerPw;
        }

        let encryptedBytes;
        try {
          encryptedBytes = await window.PDFEncrypt.encryptPDF(currentPdfBytes, pw, options);
        } catch (encErr) {
          // If browser lacks crypto.subtle (e.g. non-secure context over plain HTTP), fallback to RC4
          if (encErr && encErr.message && (encErr.message.includes('SubtleCrypto') || encErr.message.includes('subtle'))) {
            options.algorithm = 'RC4';
            encryptedBytes = await window.PDFEncrypt.encryptPDF(currentPdfBytes, pw, options);
          } else {
            throw encErr;
          }
        }

        const blob = new Blob([encryptedBytes], { type: 'application/pdf' });
        lastEncryptedBlob = blob;

        const baseName = currentFile.name.replace(/\.[^/.]+$/, '');
        lastDownloadFilename = `${baseName}_protected.pdf`;

        // Automatically trigger download
        triggerDownload(blob, lastDownloadFilename);
        showToast('PDF protected successfully!', 'success');

        // Immediately clear passwords from DOM memory for security
        pwInput.value = '';
        pwConfirmInput.value = '';
        ownerPwInput.value = '';

        // Switch to success area
        formBox.style.display = 'none';
        successArea.style.display = 'flex';
      } catch (err) {
        console.error('Encryption failed:', err);
        showToast('Failed to encrypt PDF: ' + (err.message || 'Unknown error'), 'error');
      } finally {
        btnEncrypt.disabled = false;
        btnEncrypt.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>Protect & Encrypt PDF</span>
        `;
      }
    });
  }

  // --- 6.14 Unlock PDF Functional Implementation ---
  function renderUnlockPdfWorkbench() {
    let currentFile = null;
    let currentEncryptedBytes = null;
    let currentEncryptionInfo = null;
    let lastDecryptedBlob = null;
    let lastDecryptedFilename = '';

    currentWorkbenchCleanup = function() {
      currentFile = null;
      currentEncryptedBytes = null;
      currentEncryptionInfo = null;
      lastDecryptedBlob = null;
      lastDecryptedFilename = '';
      const pw = document.getElementById('unlock-password');
      if (pw) pw.value = '';
    };

    dom.modalBody.innerHTML = `
      <div class="workbench-container unlock-workbench-root">
        ${getOptionBPrivacyBannerHTML('Zero-Upload Confidential Decryption', 'Your document and password are processed 100% locally in your web browser. Nothing is ever sent to or processed by any external server.')}

        ${getOptionBImportHTML({
          containerId: 'unlock-pdf-dropzone',
          dropzoneId: 'unlock-optionb-dropzone',
          fileInputId: 'unlock-pdf-file-input',
          browseBtnId: 'unlock-optionb-browse',
          fileTypeLabel: 'PDF',
          formatHint: 'Supports AES-256 and RC4 password-protected PDF files up to 25 MB',
          accept: '.pdf,application/pdf',
          badgeText: 'PDF',
          badgeColor: '#ef4444'
        })}

        <!-- Unlock Workspace (Hidden until file selected) -->
        <div id="unlock-work-area" style="display:none;" class="unlock-workbench-root">
          <!-- File Summary Bar -->
          <div class="unlock-file-summary">
            <div class="unlock-file-info">
              <div class="unlock-file-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div>
                <div class="unlock-file-name" id="unlock-file-name-label">document.pdf</div>
                <div class="unlock-file-meta">
                  <span id="unlock-file-size-badge" class="unlock-file-badge">0 KB</span>
                  <span id="unlock-file-algo-badge" class="unlock-file-badge badge-algo">AES-256</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="unlock-btn-change-file" style="font-size:0.75rem; padding:4px 10px;">
              Change PDF
            </button>
          </div>

          <!-- Password Entry Form -->
          <div class="unlock-form-card" id="unlock-form-box">
            <div class="unlock-field-group">
              <label class="unlock-field-label" for="unlock-password">
                <span>Enter PDF Password <span style="color:#0d9488;">*</span></span>
                <span class="unlock-field-hint">User or Owner password</span>
              </label>
              <div class="unlock-input-wrap">
                <input type="password" id="unlock-password" class="unlock-input" placeholder="Type the document password..." autocomplete="current-password" />
                <button type="button" class="unlock-eye-btn" id="unlock-toggle-pw" title="Show or hide password" aria-label="Toggle password visibility">
                  <svg class="eye-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg class="eye-closed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
              <div class="unlock-field-hint">Enter either the password needed to open the PDF or the permissions password to remove all restrictions.</div>
              <div class="unlock-field-error" id="unlock-pw-error">Please enter the document password.</div>
            </div>

            <!-- Security Specs Tag -->
            <div class="unlock-security-specs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Security: <strong>ISO Standard Decryption</strong> • Decryption Engine: <strong>In-Browser Web Crypto</strong></span>
            </div>

            <!-- Submit Button -->
            <button type="button" class="unlock-btn-submit" id="unlock-btn-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
              </svg>
              <span>Unlock & Decrypt PDF</span>
            </button>
          </div>

          <!-- Success Area (Hidden initially) -->
          <div class="unlock-success-card" id="unlock-success-area" style="display:none;">
            <div style="width:48px; height:48px; border-radius:50%; background:#dcfce7; color:#16a34a; display:flex; align-items:center; justify-content:center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 style="font-size:1.1rem; font-weight:700; color:#14532d; margin-bottom:0.25rem;">PDF Unlocked Successfully!</h3>
              <p style="font-size:0.825rem; color:#166534;" id="unlock-success-desc">
                Password protection and restrictions have been completely removed. Your new document can now be opened without a password.
              </p>
            </div>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap; justify-content:center; margin-top:0.5rem;">
              <button type="button" class="btn btn-primary" id="unlock-btn-download">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Unlocked PDF
              </button>
              <button type="button" class="btn btn-secondary" id="unlock-btn-reset">
                Unlock Another PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // DOM references
    const dropzone = document.getElementById('unlock-pdf-dropzone');
    const fileInput = document.getElementById('unlock-pdf-file-input');
    const workArea = document.getElementById('unlock-work-area');
    const formBox = document.getElementById('unlock-form-box');
    const successArea = document.getElementById('unlock-success-area');
    const fileNameLabel = document.getElementById('unlock-file-name-label');
    const fileSizeBadge = document.getElementById('unlock-file-size-badge');
    const fileAlgoBadge = document.getElementById('unlock-file-algo-badge');
    const btnChangeFile = document.getElementById('unlock-btn-change-file');

    const pwInput = document.getElementById('unlock-password');
    const pwError = document.getElementById('unlock-pw-error');
    const togglePwBtn = document.getElementById('unlock-toggle-pw');

    const btnSubmit = document.getElementById('unlock-btn-submit');
    const btnDownload = document.getElementById('unlock-btn-download');
    const btnReset = document.getElementById('unlock-btn-reset');

    // Eye toggle
    if (togglePwBtn && pwInput) {
      togglePwBtn.addEventListener('click', () => {
        const isPassword = pwInput.type === 'password';
        pwInput.type = isPassword ? 'text' : 'password';
        const eyeOpen = togglePwBtn.querySelector('.eye-open');
        const eyeClosed = togglePwBtn.querySelector('.eye-closed');
        if (eyeOpen && eyeClosed) {
          eyeOpen.style.display = isPassword ? 'none' : 'block';
          eyeClosed.style.display = isPassword ? 'block' : 'none';
        }
      });
    }

    function clearErrors() {
      if (pwInput) pwInput.classList.remove('is-invalid');
      if (pwError) { pwError.textContent = ''; pwError.classList.remove('visible'); }
    }

    if (pwInput) pwInput.addEventListener('input', clearErrors);

    // Reset helper
    function resetToDropzone() {
      currentFile = null;
      currentEncryptedBytes = null;
      currentEncryptionInfo = null;
      lastDecryptedBlob = null;
      lastDecryptedFilename = '';

      if (pwInput) pwInput.value = '';
      clearErrors();

      dropzone.style.display = 'block';
      workArea.style.display = 'none';
      formBox.style.display = 'flex';
      successArea.style.display = 'none';
      fileInput.value = '';
    }

    if (btnChangeFile) btnChangeFile.addEventListener('click', resetToDropzone);
    if (btnReset) btnReset.addEventListener('click', resetToDropzone);

    if (btnDownload) {
      btnDownload.addEventListener('click', () => {
        if (lastDecryptedBlob && lastDecryptedFilename) {
          triggerDownload(lastDecryptedBlob, lastDecryptedFilename);
          showToast('Downloaded ' + lastDecryptedFilename, 'info');
        }
      });
    }

    // File Processing
    async function handleFile(file) {
      if (!file) return;

      // 1. Size limit checks
      if (file.size === 0) {
        showToast('The selected file is empty (0 bytes).', 'error');
        return;
      }
      if (file.size > 25 * 1024 * 1024) {
        showToast('File size exceeds the 25 MB limit. Please select a smaller PDF.', 'error');
        return;
      }

      // 2. MIME / extension check
      const fileNameLower = file.name.toLowerCase();
      if (!fileNameLower.endsWith('.pdf') && file.type !== 'application/pdf') {
        showToast('Please select a valid PDF file (.pdf).', 'error');
        return;
      }

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected PDF file.', 'error');
      };

      reader.onload = async (e) => {
        try {
          const buffer = e.target.result;
          const bytes = new Uint8Array(buffer);

          if (!window.PDFDecrypt || typeof window.PDFDecrypt.isEncrypted !== 'function') {
            showToast('Decryption module is still initializing. Please try again.', 'error');
            return;
          }

          // Check encryption status
          let encInfo;
          try {
            encInfo = await window.PDFDecrypt.isEncrypted(bytes);
          } catch (err) {
            console.error('isEncrypted check error:', err);
            showToast('Failed to parse PDF document. The file may be corrupt or invalid.', 'error');
            return;
          }

          if (!encInfo || !encInfo.encrypted) {
            showToast('This PDF is not password-protected. No decryption is needed.', 'info');
            return;
          }

          // Verify that algorithm is supported
          const algo = encInfo.algorithm || 'Unknown';
          if (algo !== 'AES-256' && algo !== 'RC4') {
            showToast(`Unsupported PDF encryption format (${algo}). Only standard AES-256 and RC4 password encryption are supported.`, 'error');
            return;
          }

          currentEncryptedBytes = bytes;
          currentFile = file;
          currentEncryptionInfo = encInfo;

          // Update summary bar
          fileNameLabel.textContent = file.name;
          fileNameLabel.title = file.name;
          fileSizeBadge.textContent = formatBytes(file.size);
          fileAlgoBadge.textContent = `${algo} (${encInfo.keyLength || 256}-bit)`;

          clearErrors();
          dropzone.style.display = 'none';
          workArea.style.display = 'flex';
          formBox.style.display = 'flex';
          successArea.style.display = 'none';

          if (pwInput) pwInput.focus();
        } catch (err) {
          console.error('PDF inspection error:', err);
          showToast('Failed to inspect PDF. The file may be corrupt or invalid.', 'error');
        }
      };

      reader.readAsArrayBuffer(file);
    }

    // Dropzone events
    initOptionBImportHandlers({
      dropzoneId: 'unlock-optionb-dropzone',
      fileInputId: 'unlock-pdf-file-input',
      browseBtnId: 'unlock-optionb-browse',
      onFilesSelected: (files) => {
        if (files && files[0]) handleFile(files[0]);
      }
    });

    // Decrypt Action Handler
    btnSubmit.addEventListener('click', async () => {
      if (!currentEncryptedBytes || !currentFile) {
        showToast('Please select an encrypted PDF document first.', 'error');
        return;
      }

      clearErrors();

      const pw = pwInput.value;
      if (!pw) {
        pwInput.classList.add('is-invalid');
        pwError.textContent = 'Please enter the password for this PDF document.';
        pwError.classList.add('visible');
        pwInput.focus();
        return;
      }

      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `
        <span class="spinner-sm" style="display:inline-block; width:14px; height:14px; border:2px solid #ffffff; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; vertical-align:middle; margin-right:6px;"></span>
        Decrypting locally...
      `;

      try {
        let decryptedBytes;
        try {
          decryptedBytes = await window.PDFDecrypt.decryptPDF(currentEncryptedBytes, pw);
        } catch (decErr) {
          const errMsg = (decErr && decErr.message) ? decErr.message.toLowerCase() : '';
          if (errMsg.includes('incorrect password') || errMsg.includes('password does not match') || errMsg.includes('neither user nor owner')) {
            pwInput.classList.add('is-invalid');
            pwError.textContent = 'Incorrect password. The password you entered does not match this document.';
            pwError.classList.add('visible');
            pwInput.focus();
            showToast('Incorrect password. Please try again.', 'error');
            return;
          }
          if (errMsg.includes('unsupported encryption')) {
            showToast('Unsupported PDF encryption standard in this file.', 'error');
            return;
          }
          if (errMsg.includes('not encrypted')) {
            showToast('This PDF is not encrypted.', 'info');
            return;
          }
          throw decErr;
        }

        // Verify decrypted document loads without errors
        let pageCount = 1;
        if (window.PDFLib) {
          try {
            const unlockedDoc = await window.PDFLib.PDFDocument.load(decryptedBytes);
            pageCount = unlockedDoc.getPageCount();
          } catch (e) {
            console.warn('PDFLib post-load verification check:', e);
          }
        }

        const blob = new Blob([decryptedBytes], { type: 'application/pdf' });
        lastDecryptedBlob = blob;

        const baseName = currentFile.name.replace(/\.[^/.]+$/, '').replace(/_protected$/i, '');
        lastDecryptedFilename = `${baseName}_unlocked.pdf`;

        // Automatically trigger download
        triggerDownload(blob, lastDecryptedFilename);
        showToast('PDF unlocked and downloaded successfully!', 'success');

        // Immediately clear password input from memory
        pwInput.value = '';

        // Switch to success view
        const descEl = document.getElementById('unlock-success-desc');
        if (descEl) {
          descEl.textContent = `All password security and restrictions removed. Downloaded ${pageCount} page${pageCount === 1 ? '' : 's'} without password requirements.`;
        }

        formBox.style.display = 'none';
        successArea.style.display = 'flex';
      } catch (err) {
        console.error('Decryption error:', err);
        showToast('Failed to unlock PDF: ' + (err.message || 'Unknown error'), 'error');
      } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
          </svg>
          <span>Unlock & Decrypt PDF</span>
        `;
      }
    });
  }

  /* ------------------------------------------------------------- */
  /* 6.16 OCR PDF & Image OCR Workbench                           */
  /* ------------------------------------------------------------- */
  function renderOcrPdfWorkbench() {
    let activeMode = 'image'; // 'image' or 'pdf'
    let selectedFile = null;
    let fileBytes = null;
    let imageObj = null;
    let imageRotation = 0; // 0, 90, 180, 270
    let imageZoom = 1.0;
    let pdfDoc = null;
    let pdfPageNum = 1;
    let pdfTotalPages = 1;
    let pdfZoom = 1.0;
    let hasDirectText = false;
    let directTextSample = '';
    let isOcrRunning = false;
    let cancelRequested = false;
    let activeWorker = null;
    let selectedLang = 'eng';
    let imgObjectUrl = null;

    currentWorkbenchCleanup = function() {
      cancelRequested = true;
      if (activeWorker) {
        try {
          activeWorker.terminate();
        } catch (e) {
          console.error('Worker termination error:', e);
        }
        activeWorker = null;
      }
      if (imgObjectUrl) {
        URL.revokeObjectURL(imgObjectUrl);
        imgObjectUrl = null;
      }
      imageObj = null;
      fileBytes = null;
      selectedFile = null;
      pdfDoc = null;
    };

    function getOcrPaths() {
      const baseUrl = window.location.href.split('?')[0].split('#')[0];
      const baseDir = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
      return {
        workerPath: new URL('assets/ocr/worker.min.js', baseDir).href,
        corePath: new URL('assets/ocr', baseDir).href,
        langPath: new URL('assets/ocr/lang', baseDir).href
      };
    }

    function getOcrErrorMessage(err) {
      if (!err) return 'Recognition failed';
      if (typeof err === 'string') return err;
      if (err.message) return err.message;
      if (err.error) {
        if (typeof err.error === 'string') return err.error;
        if (err.error.message) return err.error.message;
      }
      if (err.target && err.target.error) return err.target.error.message || String(err.target.error);
      return String(err);
    }

    function getOcrInputCanvas() {
      if (!imageObj) return null;
      const isRotated90or270 = imageRotation === 90 || imageRotation === 270;
      const origW = imageObj.naturalWidth || imageObj.width;
      const origH = imageObj.naturalHeight || imageObj.height;

      const drawW = isRotated90or270 ? origH : origW;
      const drawH = isRotated90or270 ? origW : origH;

      // Limit maximum dimension to 2400px to avoid memory overflow in WASM on 48MP photos
      const MAX_OCR_DIM = 2400;
      let scale = 1.0;
      if (Math.max(drawW, drawH) > MAX_OCR_DIM) {
        scale = MAX_OCR_DIM / Math.max(drawW, drawH);
      }

      const targetW = Math.round(drawW * scale);
      const targetH = Math.round(drawH * scale);

      const offCanvas = document.createElement('canvas');
      offCanvas.width = targetW;
      offCanvas.height = targetH;
      const ctx = offCanvas.getContext('2d');

      // Solid white background handles transparent PNGs cleanly
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, targetW, targetH);

      ctx.save();
      ctx.translate(targetW / 2, targetH / 2);
      ctx.rotate((imageRotation * Math.PI) / 180);
      const scaledOrigW = origW * scale;
      const scaledOrigH = origH * scale;
      ctx.drawImage(imageObj, -scaledOrigW / 2, -scaledOrigH / 2, scaledOrigW, scaledOrigH);
      ctx.restore();

      return offCanvas;
    }

    function renderBaseLayout() {
      dom.modalBody.innerHTML = `
        <div class="ocr-workbench-root">
          ${window.location.protocol === 'file:' ? `
            <div class="ocr-protocol-warning">
              <div class="ocr-protocol-warning-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div class="ocr-protocol-warning-text">
                <strong>Local Web Server Required for OCR</strong>
                <p>Modern browser security prevents Web Workers and WebAssembly from loading local OCR language data over the <code>file://</code> protocol. Please open this website through a local web server (e.g. VS Code Live Server, <code>npx serve</code>, or <code>python -m http.server</code>) to use OCR.</p>
              </div>
            </div>
          ` : ''}

          <!-- Top Mode Selector -->
          <div class="ocr-mode-nav" role="tablist">
            <button type="button" class="ocr-mode-btn ${activeMode === 'image' ? 'active' : ''}" id="btn-mode-image" role="tab" aria-selected="${activeMode === 'image'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Image to OCR</span>
            </button>
            <button type="button" class="ocr-mode-btn ${activeMode === 'pdf' ? 'active' : ''}" id="btn-mode-pdf" role="tab" aria-selected="${activeMode === 'pdf'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>PDF to OCR</span>
            </button>
          </div>

          <!-- Privacy & Engine Notice -->
          ${getOptionBPrivacyBannerHTML('Privacy First', '100% In-Browser Execution • Client-Side WASM OCR Engine • Zero Server Uploads')}

          <!-- Dynamic Container: Dropzone or Workspace -->
          <div id="ocr-dynamic-content"></div>
        </div>
      `;

      // Mode switch listeners
      document.getElementById('btn-mode-image').addEventListener('click', () => {
        if (activeMode === 'image') return;
        if (isOcrRunning) {
          if (!confirm('OCR is currently running. Switch modes and cancel current task?')) return;
          cancelRequested = true;
          if (activeWorker) activeWorker.terminate();
        }
        activeMode = 'image';
        resetState();
        renderBaseLayout();
      });

      document.getElementById('btn-mode-pdf').addEventListener('click', () => {
        if (activeMode === 'pdf') return;
        if (isOcrRunning) {
          if (!confirm('OCR is currently running. Switch modes and cancel current task?')) return;
          cancelRequested = true;
          if (activeWorker) activeWorker.terminate();
        }
        activeMode = 'pdf';
        resetState();
        renderBaseLayout();
      });

      if (!selectedFile) {
        renderDropzone();
      } else {
        renderWorkspace();
      }
    }

    function resetState() {
      selectedFile = null;
      fileBytes = null;
      if (imgObjectUrl) {
        URL.revokeObjectURL(imgObjectUrl);
        imgObjectUrl = null;
      }
      imageObj = null;
      imageRotation = 0;
      imageZoom = 1.0;
      pdfDoc = null;
      pdfPageNum = 1;
      pdfTotalPages = 1;
      pdfZoom = 1.0;
      hasDirectText = false;
      directTextSample = '';
      isOcrRunning = false;
      cancelRequested = false;
    }

    function renderDropzone() {
      const container = document.getElementById('ocr-dynamic-content');
      if (!container) return;

      const isImg = activeMode === 'image';
      container.innerHTML = getOptionBImportHTML({
        containerId: 'ocr-import-box',
        dropzoneId: 'ocr-dropzone',
        fileInputId: 'ocr-file-input',
        browseBtnId: 'ocr-browse-btn',
        fileTypeLabel: isImg ? 'image' : 'PDF',
        formatHint: isImg ? 'Supports JPG, PNG, and WebP images up to 25 MB' : 'Supports single or multi-page PDF documents up to 25 MB',
        accept: isImg ? '.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp' : '.pdf,application/pdf',
        badgeText: isImg ? 'IMG' : 'PDF',
        badgeColor: isImg ? '#3b82f6' : '#ef4444',
        privacyChecklist: ['Processed 100% locally', 'WASM OCR engine in browser', 'No files uploaded to any server']
      });

      initOptionBImportHandlers({
        dropzoneId: 'ocr-dropzone',
        fileInputId: 'ocr-file-input',
        browseBtnId: 'ocr-browse-btn',
        onFilesSelected: (files) => {
          if (files && files.length > 0) {
            handleFileSelected(files[0]);
          }
        }
      });
    }

    async function handleFileSelected(file) {
      if (!file) return;

      // 1. Check file size (0B and >25MB)
      if (file.size === 0) {
        showToast('The selected file is empty (0 bytes). Please choose a valid file.', 'error');
        return;
      }
      if (file.size > 25 * 1024 * 1024) {
        showToast('File size exceeds the 25 MB limit for in-browser processing.', 'error');
        return;
      }

      // 2. Validate format
      if (activeMode === 'image') {
        const isImage = file.type.startsWith('image/') || /\.(jpe?g|png|webp)$/i.test(file.name);
        if (!isImage) {
          showToast('Invalid file format. Please select a JPG, PNG, or WEBP image.', 'error');
          return;
        }

        selectedFile = file;
        try {
          if (imgObjectUrl) URL.revokeObjectURL(imgObjectUrl);
          imgObjectUrl = URL.createObjectURL(file);
          const img = new Image();
          img.onload = () => {
            imageObj = img;
            imageRotation = 0;
            imageZoom = 1.0;
            renderWorkspace();
          };
          img.onerror = () => {
            showToast('Failed to load image. The file may be corrupted.', 'error');
            resetState();
            renderDropzone();
          };
          img.src = imgObjectUrl;
        } catch (err) {
          showToast('Could not read image file: ' + err.message, 'error');
        }
      } else {
        // PDF mode
        const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
        if (!isPdf) {
          showToast('Invalid file format. Please select a valid PDF document.', 'error');
          return;
        }

        selectedFile = file;
        try {
          fileBytes = await file.arrayBuffer();
          // Verify PDF header %PDF-
          const header = new Uint8Array(fileBytes.slice(0, 5));
          const headerStr = String.fromCharCode(...header);
          if (headerStr !== '%PDF-') {
            showToast('Corrupted or invalid PDF header. Please select a valid PDF file.', 'error');
            resetState();
            renderDropzone();
            return;
          }

          if (!window.pdfjsLib) {
            showToast('PDF rendering engine not loaded.', 'error');
            return;
          }

          const loadingTask = window.pdfjsLib.getDocument({ data: new Uint8Array(fileBytes) });
          pdfDoc = await loadingTask.promise;
          pdfTotalPages = pdfDoc.numPages;
          pdfPageNum = 1;
          pdfZoom = 1.0;

          // Check for direct selectable text
          await inspectDirectText();

          renderWorkspace();
        } catch (err) {
          console.error('PDF Load Error:', err);
          showToast('Failed to parse PDF document: ' + (err.message || 'File may be corrupted'), 'error');
          resetState();
          renderDropzone();
        }
      }
    }

    async function inspectDirectText() {
      if (!pdfDoc) return;
      hasDirectText = false;
      directTextSample = '';
      try {
        // Inspect up to first 3 pages
        const pagesToCheck = Math.min(3, pdfDoc.numPages);
        let accumulatedText = '';
        for (let i = 1; i <= pagesToCheck; i++) {
          const page = await pdfDoc.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map(it => it.str).join(' ').trim();
          accumulatedText += pageText + ' ';
        }
        if (accumulatedText.trim().length > 15) {
          hasDirectText = true;
          directTextSample = accumulatedText.trim().slice(0, 100);
        }
      } catch (e) {
        console.warn('Direct text inspection check skipped:', e);
      }
    }

    function renderWorkspace() {
      const container = document.getElementById('ocr-dynamic-content');
      if (!container) return;

      const isImg = activeMode === 'image';

      container.innerHTML = `
        ${(!isImg && hasDirectText) ? `
          <div class="ocr-direct-text-banner">
            <div class="ocr-direct-text-info">
              <span class="ocr-direct-text-icon">&#9889;</span>
              <div>
                <div class="ocr-direct-text-title">Selectable Text Detected!</div>
                <p class="ocr-direct-text-desc">This PDF contains native digital text. You can extract it directly without running heavy OCR.</p>
              </div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-extract-direct-text">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              <span>Extract Direct Text</span>
            </button>
          </div>
        ` : ''}

        <div class="ocr-workspace-grid">
          <!-- Left Column: Visual Viewer & Controls -->
          <div class="ocr-viewer-panel">
            <div class="ocr-panel-header">
              <div class="ocr-panel-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7e22ce" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>${isImg ? 'Image Preview' : 'Document Preview'}</span>
              </div>
              <div class="ocr-toolbar">
                <button type="button" class="ocr-tool-btn" id="btn-zoom-in" title="Zoom In">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </button>
                <button type="button" class="ocr-tool-btn" id="btn-zoom-out" title="Zoom Out">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </button>
                <button type="button" class="ocr-tool-btn" id="btn-zoom-fit" title="Fit to Screen">Fit</button>
                ${isImg ? `
                  <button type="button" class="ocr-tool-btn" id="btn-rot-left" title="Rotate 90° CCW">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
                  </button>
                  <button type="button" class="ocr-tool-btn" id="btn-rot-right" title="Rotate 90° CW">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><polyline points="21 3 21 8 16 8"></polyline></svg>
                  </button>
                ` : ''}
                <button type="button" class="ocr-tool-btn" id="btn-change-file" title="Select Another File">Change</button>
              </div>
            </div>

            <!-- Canvas Viewport -->
            <div class="ocr-canvas-container" id="ocr-canvas-container">
              <canvas class="ocr-preview-canvas" id="ocr-canvas"></canvas>
            </div>

            <!-- PDF Page Navigation Bar -->
            ${!isImg ? `
              <div class="ocr-page-nav">
                <button type="button" class="ocr-tool-btn" id="btn-prev-page" ${pdfPageNum <= 1 ? 'disabled' : ''}>
                  &larr; Prev
                </button>
                <span>Page</span>
                <input type="number" class="ocr-page-input" id="ocr-page-input" min="1" max="${pdfTotalPages}" value="${pdfPageNum}">
                <span>of ${pdfTotalPages}</span>
                <button type="button" class="ocr-tool-btn" id="btn-next-page" ${pdfPageNum >= pdfTotalPages ? 'disabled' : ''}>
                  Next &rarr;
                </button>
              </div>
            ` : `
              <div style="font-size: 0.78rem; color: #64748b; text-align: center;">
                ${escapeHtml(selectedFile.name)} &bull; ${formatBytes(selectedFile.size)} &bull; <span id="ocr-dim-label"></span>
              </div>
            `}
          </div>

          <!-- Right Column: Settings & Text Output -->
          <div class="ocr-editor-panel">
            <div class="ocr-panel-header">
              <div class="ocr-panel-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7e22ce" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                  <line x1="9" y1="20" x2="15" y2="20"></line>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
                </svg>
                <span>Recognized Text</span>
              </div>
              <div class="ocr-lang-wrap">
                <label for="ocr-lang-select" class="ocr-lang-label">Language:</label>
                <select id="ocr-lang-select" class="ocr-lang-select">
                  <option value="eng" ${selectedLang === 'eng' ? 'selected' : ''}>English (eng)</option>
                  <option value="hin" ${selectedLang === 'hin' ? 'selected' : ''}>Hindi (hin)</option>
                  <option value="eng+hin" ${selectedLang === 'eng+hin' ? 'selected' : ''}>English + Hindi</option>
                </select>
              </div>
            </div>

            <!-- Controls Action Bar -->
            <div class="ocr-controls-bar">
              <div class="ocr-actions-group">
                ${isImg ? `
                  <button type="button" class="btn btn-primary btn-sm" id="btn-start-ocr">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span>Extract Text from Image</span>
                  </button>
                ` : `
                  <button type="button" class="btn btn-primary btn-sm" id="btn-ocr-current-page">
                    <span>OCR Current Page</span>
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-ocr-all-pages">
                    <span>OCR All Pages (${pdfTotalPages})</span>
                  </button>
                `}
                <button type="button" class="btn btn-secondary btn-sm" id="btn-cancel-ocr" style="display: none; color: #dc2626;">
                  <span>Cancel OCR</span>
                </button>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="ocr-progress-wrap" id="ocr-progress-wrap">
              <div class="ocr-progress-header">
                <span id="ocr-progress-status">Initializing engine...</span>
                <span id="ocr-progress-pct">0%</span>
              </div>
              <div class="ocr-progress-bar-bg">
                <div class="ocr-progress-bar-fill" id="ocr-progress-bar-fill"></div>
              </div>
            </div>

            <!-- Extracted Textarea -->
            <div class="ocr-text-editor-wrap">
              <textarea class="ocr-textarea" id="ocr-textarea" placeholder="Recognized text will appear here. You can freely edit, copy, or download it..." spellcheck="false"></textarea>
            </div>

            <!-- Footer Stats & Export -->
            <div class="ocr-editor-footer">
              <span class="ocr-stats-pill" id="ocr-stats-pill">0 words &bull; 0 characters</span>
              <div class="ocr-export-btns">
                <button type="button" class="ocr-tool-btn" id="btn-clear-text" title="Clear Extracted Text">Clear</button>
                <button type="button" class="ocr-tool-btn" id="btn-copy-text">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span id="copy-text-label">Copy Text</span>
                </button>
                <button type="button" class="ocr-tool-btn" id="btn-download-txt" style="background: #9333ea; color: #ffffff; border-color: #9333ea;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span>Download TXT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Setup Viewer Events
      document.getElementById('btn-zoom-in').addEventListener('click', () => {
        if (isImg) {
          imageZoom = Math.min(3.0, imageZoom + 0.25);
          drawCurrentCanvas();
        } else {
          pdfZoom = Math.min(3.0, pdfZoom + 0.25);
          renderPdfPage();
        }
      });

      document.getElementById('btn-zoom-out').addEventListener('click', () => {
        if (isImg) {
          imageZoom = Math.max(0.25, imageZoom - 0.25);
          drawCurrentCanvas();
        } else {
          pdfZoom = Math.max(0.25, pdfZoom - 0.25);
          renderPdfPage();
        }
      });

      document.getElementById('btn-zoom-fit').addEventListener('click', () => {
        if (isImg) {
          imageZoom = 1.0;
          drawCurrentCanvas();
        } else {
          pdfZoom = 1.0;
          renderPdfPage();
        }
      });

      if (isImg) {
        document.getElementById('btn-rot-left').addEventListener('click', () => {
          imageRotation = (imageRotation - 90 + 360) % 360;
          drawCurrentCanvas();
        });
        document.getElementById('btn-rot-right').addEventListener('click', () => {
          imageRotation = (imageRotation + 90) % 360;
          drawCurrentCanvas();
        });
      }

      document.getElementById('btn-change-file').addEventListener('click', () => {
        if (isOcrRunning) {
          if (!confirm('Cancel current OCR process and select another file?')) return;
          cancelRequested = true;
          if (activeWorker) activeWorker.terminate();
        }
        resetState();
        renderDropzone();
      });

      // PDF navigation
      if (!isImg) {
        document.getElementById('btn-prev-page').addEventListener('click', () => {
          if (pdfPageNum > 1) {
            pdfPageNum--;
            updatePdfNav();
            renderPdfPage();
          }
        });

        document.getElementById('btn-next-page').addEventListener('click', () => {
          if (pdfPageNum < pdfTotalPages) {
            pdfPageNum++;
            updatePdfNav();
            renderPdfPage();
          }
        });

        const pageInput = document.getElementById('ocr-page-input');
        pageInput.addEventListener('change', () => {
          let val = parseInt(pageInput.value, 10);
          if (isNaN(val) || val < 1) val = 1;
          if (val > pdfTotalPages) val = pdfTotalPages;
          pdfPageNum = val;
          updatePdfNav();
          renderPdfPage();
        });

        if (hasDirectText) {
          const btnDirect = document.getElementById('btn-extract-direct-text');
          if (btnDirect) {
            btnDirect.addEventListener('click', handleDirectTextExtract);
          }
        }
      }

      // Language selector
      const langSelect = document.getElementById('ocr-lang-select');
      langSelect.addEventListener('change', () => {
        selectedLang = langSelect.value;
      });

      // Textarea live stats
      const textarea = document.getElementById('ocr-textarea');
      const statsPill = document.getElementById('ocr-stats-pill');
      function updateStats() {
        const val = textarea.value.trim();
        const chars = textarea.value.length;
        const words = val ? val.split(/\s+/).length : 0;
        statsPill.textContent = `${words} word${words === 1 ? '' : 's'} \u2022 ${chars} character${chars === 1 ? '' : 's'}`;
      }
      textarea.addEventListener('input', updateStats);

      // Copy Text button
      const btnCopy = document.getElementById('btn-copy-text');
      const copyLabel = document.getElementById('copy-text-label');
      btnCopy.addEventListener('click', async () => {
        const val = textarea.value;
        if (!val.trim()) {
          showToast('No text available to copy.', 'error');
          return;
        }
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(val);
          } else {
            textarea.focus();
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            document.execCommand('copy');
          }
        } catch (e) {
          try {
            textarea.focus();
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            document.execCommand('copy');
          } catch (err) {}
        }

        copyLabel.textContent = '\u2713 Copied!';
        showToast('Text copied to clipboard!', 'success');
        setTimeout(() => {
          copyLabel.textContent = 'Copy Text';
        }, 2000);
      });

      // Clear button
      document.getElementById('btn-clear-text').addEventListener('click', () => {
        textarea.value = '';
        updateStats();
      });

      // Download TXT button
      document.getElementById('btn-download-txt').addEventListener('click', () => {
        if (!textarea.value.trim()) {
          showToast('No text available to download.', 'error');
          return;
        }
        const filename = isImg ? 'photo_ocr.txt' : 'document_ocr.txt';
        const blob = new Blob([textarea.value], { type: 'text/plain;charset=utf-8' });
        triggerDownload(blob, filename);
        showToast(`Saved as ${filename}`, 'success');
      });

      // OCR Execution Triggers
      if (isImg) {
        document.getElementById('btn-start-ocr').addEventListener('click', runImageOcr);
      } else {
        document.getElementById('btn-ocr-current-page').addEventListener('click', () => runPdfOcr(false));
        document.getElementById('btn-ocr-all-pages').addEventListener('click', () => runPdfOcr(true));
      }

      document.getElementById('btn-cancel-ocr').addEventListener('click', () => {
        cancelRequested = true;
        if (activeWorker) {
          try { activeWorker.terminate(); } catch (e) {}
          activeWorker = null;
        }
        isOcrRunning = false;
        setProgressVisibility(false);
        setButtonsDisabled(false);
        showToast('OCR operation cancelled.', 'info');
      });

      // Initial visual render
      if (isImg) {
        drawCurrentCanvas();
      } else {
        renderPdfPage();
      }
    }

    function updatePdfNav() {
      const prevBtn = document.getElementById('btn-prev-page');
      const nextBtn = document.getElementById('btn-next-page');
      const pageInput = document.getElementById('ocr-page-input');
      if (prevBtn) prevBtn.disabled = pdfPageNum <= 1;
      if (nextBtn) nextBtn.disabled = pdfPageNum >= pdfTotalPages;
      if (pageInput) pageInput.value = pdfPageNum;
    }

    function drawCurrentCanvas() {
      if (!imageObj) return;
      const canvas = document.getElementById('ocr-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      const isRotated90or270 = imageRotation === 90 || imageRotation === 270;
      const origW = imageObj.naturalWidth || imageObj.width;
      const origH = imageObj.naturalHeight || imageObj.height;

      const drawW = isRotated90or270 ? origH : origW;
      const drawH = isRotated90or270 ? origW : origH;

      canvas.width = drawW;
      canvas.height = drawH;

      ctx.clearRect(0, 0, drawW, drawH);
      ctx.save();

      // Translate context to center
      ctx.translate(drawW / 2, drawH / 2);
      ctx.rotate((imageRotation * Math.PI) / 180);
      ctx.drawImage(imageObj, -origW / 2, -origH / 2, origW, origH);
      ctx.restore();

      // Apply zoom style
      canvas.style.transform = `scale(${imageZoom})`;
      canvas.style.transformOrigin = 'center center';

      const dimLabel = document.getElementById('ocr-dim-label');
      if (dimLabel) {
        dimLabel.textContent = `${drawW} \u00D7 ${drawH} px (${Math.round(imageZoom * 100)}%)`;
      }
    }

    async function renderPdfPage() {
      if (!pdfDoc) return;
      const canvas = document.getElementById('ocr-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      try {
        const page = await pdfDoc.getPage(pdfPageNum);
        const baseViewport = page.getViewport({ scale: 1.5 });
        const viewport = page.getViewport({ scale: 1.5 * pdfZoom });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.transform = 'none';

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        await page.render({
          canvasContext: ctx,
          viewport: viewport
        }).promise;
      } catch (err) {
        console.error('Render PDF page error:', err);
      }
    }

    function setProgressVisibility(visible) {
      const wrap = document.getElementById('ocr-progress-wrap');
      const cancelBtn = document.getElementById('btn-cancel-ocr');
      if (wrap) wrap.style.display = visible ? 'flex' : 'none';
      if (cancelBtn) cancelBtn.style.display = visible ? 'inline-flex' : 'none';
    }

    function updateProgress(status, pct) {
      const statusEl = document.getElementById('ocr-progress-status');
      const pctEl = document.getElementById('ocr-progress-pct');
      const fillEl = document.getElementById('ocr-progress-bar-fill');

      const percent = Math.min(100, Math.max(0, Math.round((pct || 0) * 100)));
      if (statusEl) statusEl.textContent = status || 'Processing...';
      if (pctEl) pctEl.textContent = `${percent}%`;
      if (fillEl) fillEl.style.width = `${percent}%`;
    }

    function setButtonsDisabled(disabled) {
      const ids = ['btn-start-ocr', 'btn-ocr-current-page', 'btn-ocr-all-pages', 'btn-extract-direct-text'];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.disabled = disabled;
      });
    }

    // Direct text extraction handler
    async function handleDirectTextExtract() {
      if (!pdfDoc) return;
      setButtonsDisabled(true);
      setProgressVisibility(true);
      updateProgress('Extracting direct digital text...', 0.1);

      try {
        let extracted = '';
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          updateProgress(`Extracting page ${i} of ${pdfDoc.numPages}...`, i / pdfDoc.numPages);
          const page = await pdfDoc.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map(it => it.str).join(' ').trim();
          extracted += `--- Page ${i} ---\n${pageText}\n\n`;
        }

        const textarea = document.getElementById('ocr-textarea');
        if (textarea) {
          textarea.value = extracted.trim();
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }

        updateProgress('Direct text extracted successfully!', 1.0);
        showToast('Extracted direct text from PDF!', 'success');
      } catch (err) {
        console.error('Direct extraction error:', err);
        showToast('Direct extraction failed: ' + err.message, 'error');
      } finally {
        setProgressVisibility(false);
        setButtonsDisabled(false);
      }
    }

    // Image OCR runner
    async function runImageOcr() {
      if (window.location.protocol === 'file:') {
        showToast('Browser security blocks Web Workers on file://. Please view via http://localhost or a local server.', 'error');
        return;
      }

      const ocrCanvas = getOcrInputCanvas();
      if (!ocrCanvas) {
        showToast('No image loaded to process.', 'error');
        return;
      }

      if (!window.Tesseract) {
        showToast('Tesseract OCR engine is not loaded.', 'error');
        return;
      }

      isOcrRunning = true;
      cancelRequested = false;
      setButtonsDisabled(true);
      setProgressVisibility(true);
      updateProgress('Initializing OCR engine...', 0.05);

      const paths = getOcrPaths();

      try {
        activeWorker = await window.Tesseract.createWorker(selectedLang, 1, {
          workerPath: paths.workerPath,
          langPath: paths.langPath,
          corePath: paths.corePath,
          logger: m => {
            if (cancelRequested) return;
            const label = m.status === 'recognizing text'
              ? `Recognizing text (${Math.round((m.progress || 0) * 100)}%)...`
              : m.status;
            updateProgress(label, m.progress);
          }
        });

        if (cancelRequested) return;

        updateProgress('Analyzing image characters...', 0.5);
        const { data: { text } } = await activeWorker.recognize(ocrCanvas);

        if (cancelRequested) return;

        const recognizedText = (text || '').trim();
        const textarea = document.getElementById('ocr-textarea');
        if (textarea) {
          textarea.value = recognizedText;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }

        updateProgress('Recognition complete!', 1.0);
        if (recognizedText.length > 0) {
          showToast('Text extracted from image successfully!', 'success');
        } else {
          showToast('OCR completed, but no readable text was detected. Try rotating or adjusting the image.', 'info');
        }
      } catch (err) {
        if (!cancelRequested) {
          const errMsg = getOcrErrorMessage(err);
          console.error('[AAYAM OCR Diagnostics - Image]', {
            error: err,
            message: errMsg,
            stack: err?.stack || '(No stack trace)',
            selectedLang,
            protocol: window.location.protocol,
            paths
          });
          showToast('OCR Error: ' + errMsg, 'error');
        }
      } finally {
        if (activeWorker) {
          try { await activeWorker.terminate(); } catch (e) {}
          activeWorker = null;
        }
        isOcrRunning = false;
        setProgressVisibility(false);
        setButtonsDisabled(false);
      }
    }

    // PDF OCR runner
    async function runPdfOcr(allPages = false) {
      if (window.location.protocol === 'file:') {
        showToast('Browser security blocks Web Workers on file://. Please view via http://localhost or a local server.', 'error');
        return;
      }

      if (!pdfDoc) return;

      if (!window.Tesseract) {
        showToast('Tesseract OCR engine is not loaded.', 'error');
        return;
      }

      isOcrRunning = true;
      cancelRequested = false;
      setButtonsDisabled(true);
      setProgressVisibility(true);
      updateProgress('Initializing OCR worker...', 0.05);

      const textarea = document.getElementById('ocr-textarea');
      const paths = getOcrPaths();

      try {
        activeWorker = await window.Tesseract.createWorker(selectedLang, 1, {
          workerPath: paths.workerPath,
          langPath: paths.langPath,
          corePath: paths.corePath,
          logger: m => {
            if (cancelRequested) return;
            // Logger updates handled per-page
          }
        });

        if (cancelRequested) return;

        const startPage = allPages ? 1 : pdfPageNum;
        const endPage = allPages ? pdfTotalPages : pdfPageNum;
        const totalToProcess = endPage - startPage + 1;

        let accumulatedResult = allPages ? '' : (textarea ? textarea.value : '');
        if (!allPages && accumulatedResult.trim().length > 0) {
          accumulatedResult += '\n\n';
        }

        // Offscreen high-res render canvas
        const offCanvas = document.createElement('canvas');
        const offCtx = offCanvas.getContext('2d');

        for (let p = startPage; p <= endPage; p++) {
          if (cancelRequested) break;

          const currentIdx = p - startPage + 1;
          updateProgress(`Rendering page ${p} of ${pdfTotalPages}...`, (currentIdx - 0.7) / totalToProcess);

          const page = await pdfDoc.getPage(p);
          let scale = 2.0; // 2x scale for sharp OCR
          const unscaledViewport = page.getViewport({ scale: 1.0 });
          if (Math.max(unscaledViewport.width, unscaledViewport.height) * scale > 2400) {
            scale = 2400 / Math.max(unscaledViewport.width, unscaledViewport.height);
          }
          const viewport = page.getViewport({ scale });
          offCanvas.width = viewport.width;
          offCanvas.height = viewport.height;
          offCtx.fillStyle = '#FFFFFF';
          offCtx.fillRect(0, 0, offCanvas.width, offCanvas.height);

          await page.render({
            canvasContext: offCtx,
            viewport: viewport
          }).promise;

          if (cancelRequested) break;

          updateProgress(`Recognizing page ${p} of ${pdfTotalPages}...`, (currentIdx - 0.3) / totalToProcess);
          const { data: { text } } = await activeWorker.recognize(offCanvas);

          if (cancelRequested) break;

          accumulatedResult += `--- Page ${p} ---\n${(text || '').trim()}\n\n`;

          // Update live preview in textarea
          if (textarea) {
            textarea.value = accumulatedResult.trim();
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }

        if (!cancelRequested) {
          updateProgress('All pages recognized successfully!', 1.0);
          if (accumulatedResult.trim().length > 0) {
            showToast(`Extracted text from ${totalToProcess} page${totalToProcess === 1 ? '' : 's'}!`, 'success');
          } else {
            showToast('OCR completed, but no readable text was detected on the processed pages.', 'info');
          }
        }
      } catch (err) {
        if (!cancelRequested) {
          const errMsg = getOcrErrorMessage(err);
          console.error('[AAYAM OCR Diagnostics - PDF]', {
            error: err,
            message: errMsg,
            stack: err?.stack || '(No stack trace)',
            selectedLang,
            protocol: window.location.protocol,
            paths
          });
          showToast('PDF OCR Error: ' + errMsg, 'error');
        }
      } finally {
        if (activeWorker) {
          try { await activeWorker.terminate(); } catch (e) {}
          activeWorker = null;
        }
        isOcrRunning = false;
        setProgressVisibility(false);
        setButtonsDisabled(false);
      }
    }

    renderBaseLayout();
  }

  // --- 6.17 Watermark & Page Numbers Workbench Functional Implementation ---
  function renderPdfWatermarkPagesWorkbench() {
    let selectedFile = null;
    let originalPdfBytes = null;
    let originalFileName = 'document';
    let pdfDoc = null;
    let pdfTotalPages = 1;
    let pdfCurrentPage = 1;
    let previewZoom = 1.0;
    let currentRenderTask = null;
    let cachedPdfCanvas = document.createElement('canvas');
    let cachedTotalScale = 1.4;

    // Watermark State
    let wmType = 'text'; // 'text' | 'image' | 'none'
    let wmText = 'CONFIDENTIAL';
    let wmFontFamily = 'HelveticaBold';
    let wmTextColor = '#dc2626';
    let wmFontSize = 48;
    let wmOpacity = 0.30;
    let wmRotation = 45;
    let wmPosH = 'center'; // 'left' | 'center' | 'right'
    let wmPosV = 'middle'; // 'top' | 'middle' | 'bottom'
    let wmRelX = 0.50; // normalized center X (0.0 to 1.0)
    let wmRelY = 0.50; // normalized center Y (0.0 to 1.0)
    let isWmSelected = false;
    let isDraggingWm = false;
    let dragStartOffsetRelX = 0;
    let dragStartOffsetRelY = 0;
    let wmTargetMode = 'all'; // 'all' | 'current' | 'custom'
    let wmCustomRange = '';

    // Image Watermark State
    let wmImgFile = null;
    let wmImgDataUrl = null;
    let wmImgBytes = null;
    let wmImgFormat = 'png';
    let wmImgScale = 50;
    let wmImgOpacity = 0.30;
    let wmImgRotation = 0;
    let wmImgPosH = 'center';
    let wmImgPosV = 'middle';
    let wmImgRelX = 0.50;
    let wmImgRelY = 0.50;
    let wmImgElement = null;

    // Page Numbers State
    let numEnabled = true;
    let numFormat = 'page-num-total'; // 'page-num-total', 'page-num', 'num', 'num-slash-total', 'dash-num-dash'
    let numStart = 1;
    let numPosV = 'bottom'; // 'bottom' | 'top'
    let numPosH = 'center'; // 'center' | 'right' | 'left'
    let numSize = 11;
    let numColor = '#334155';
    let numMargin = 24;
    let numTargetMode = 'all'; // 'all' | 'current' | 'custom'
    let numCustomRange = '';

    window._wmState = {
      getRelX: () => wmRelX,
      getRelY: () => wmRelY,
      isSelected: () => isWmSelected,
      isDragging: () => isDraggingWm,
      setRelPos: (x, y) => { wmRelX = x; wmRelY = y; }
    };

    currentWorkbenchCleanup = function() {
      if (currentRenderTask) {
        try { currentRenderTask.cancel(); } catch (e) {}
        currentRenderTask = null;
      }
      if (wmImgDataUrl) {
        try { URL.revokeObjectURL(wmImgDataUrl); } catch (e) {}
        wmImgDataUrl = null;
      }
      cachedPdfCanvas.width = 0;
      cachedPdfCanvas.height = 0;
      wmImgElement = null;
      wmImgBytes = null;
      wmImgFile = null;
      selectedFile = null;
      originalPdfBytes = null;
      pdfDoc = null;
      isWmSelected = false;
      isDraggingWm = false;
      wmRelX = 0.50;
      wmRelY = 0.50;
      wmImgRelX = 0.50;
      wmImgRelY = 0.50;
      delete window._wmState;
    };

    function parsePageRanges(rangeStr, totalPages) {
      if (!rangeStr || !rangeStr.trim() || rangeStr.trim().toLowerCase() === 'all') {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        return { valid: true, pages };
      }

      const trimmed = rangeStr.trim().toLowerCase();
      if (trimmed === 'odd') {
        const pages = [];
        for (let i = 1; i <= totalPages; i += 2) pages.push(i);
        return { valid: true, pages };
      }
      if (trimmed === 'even') {
        const pages = [];
        for (let i = 2; i <= totalPages; i += 2) pages.push(i);
        return { valid: true, pages };
      }

      const parts = trimmed.split(',');
      const pageSet = new Set();
      for (let part of parts) {
        part = part.trim();
        if (!part) continue;
        if (part.includes('-')) {
          const bounds = part.split('-');
          if (bounds.length !== 2) return { valid: false, error: `Invalid range format: "${part}"` };
          const start = parseInt(bounds[0].trim(), 10);
          const end = parseInt(bounds[1].trim(), 10);
          if (isNaN(start) || isNaN(end) || start < 1 || end < start) {
            return { valid: false, error: `Invalid range: "${part}". Start must be <= end.` };
          }
          if (start > totalPages || end > totalPages) {
            return { valid: false, error: `Page ${Math.max(start, end)} exceeds total pages (${totalPages}).` };
          }
          for (let i = start; i <= end; i++) pageSet.add(i);
        } else {
          const page = parseInt(part, 10);
          if (isNaN(page) || page < 1) {
            return { valid: false, error: `Invalid page number: "${part}"` };
          }
          if (page > totalPages) {
            return { valid: false, error: `Page ${page} exceeds total pages (${totalPages}).` };
          }
          pageSet.add(page);
        }
      }

      if (pageSet.size === 0) {
        return { valid: false, error: 'No valid pages specified in range.' };
      }

      return { valid: true, pages: Array.from(pageSet).sort((a, b) => a - b) };
    }

    function formatPageNumber(pageIdx, totalPages, format, startNumber) {
      const num = pageIdx + startNumber;
      const total = totalPages + startNumber - 1;
      switch (format) {
        case 'num': return `${num}`;
        case 'page-num': return `Page ${num}`;
        case 'page-num-total': return `Page ${num} of ${total}`;
        case 'num-slash-total': return `${num} / ${total}`;
        case 'dash-num-dash': return `- ${num} -`;
        default: return `Page ${num} of ${total}`;
      }
    }

    function hexToRgb01(hex) {
      let c = hex.replace('#', '');
      if (c.length === 3) c = c.split('').map(x => x + x).join('');
      const num = parseInt(c, 16);
      return {
        r: ((num >> 16) & 255) / 255,
        g: ((num >> 8) & 255) / 255,
        b: (num & 255) / 255
      };
    }

    function renderBaseLayout() {
      dom.modalBody.innerHTML = `
        <div class="wm-workbench-root">
          ${getOptionBPrivacyBannerHTML('Privacy First', '100% In-Browser PDF Stamping • Zero Server Uploads • Private & Confidential')}

          ${getOptionBImportHTML({
            containerId: 'wm-dropzone',
            dropzoneId: 'wm-optionb-dropzone',
            fileInputId: 'wm-file-input',
            browseBtnId: 'wm-optionb-browse',
            fileTypeLabel: 'PDF',
            formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
            accept: '.pdf,application/pdf',
            badgeText: 'PDF',
            badgeColor: '#ef4444'
          })}

          <!-- Active Workspace -->
          <div class="wm-workspace-grid" id="wm-active-workspace" style="display: none;">
            <!-- Left: Preview -->
            <div class="wm-preview-panel">
              <div class="wm-preview-header">
                <div class="wm-page-nav">
                  <button type="button" class="wm-btn-icon" id="wm-btn-prev" title="Previous Page" disabled>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <span style="font-size:0.8rem; font-weight:600; color:#334155;">Page</span>
                  <input type="number" class="wm-page-input" id="wm-page-input" min="1" max="1" value="1">
                  <span id="wm-total-pages-label" style="font-size:0.8rem; color:#64748b; font-weight:500;">of 1</span>
                  <button type="button" class="wm-btn-icon" id="wm-btn-next" title="Next Page" disabled>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
                <div class="wm-zoom-nav">
                  <button type="button" class="wm-btn-icon" id="wm-btn-zoom-in" title="Zoom In">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </button>
                  <button type="button" class="wm-btn-icon" id="wm-btn-zoom-out" title="Zoom Out">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </button>
                  <button type="button" class="wm-btn-pill" id="wm-btn-zoom-fit" title="Fit to Screen">Fit</button>
                  <button type="button" class="wm-btn-pill wm-btn-change" id="wm-btn-change-file" title="Change PDF Document">Change</button>
                </div>
              </div>

              <div class="wm-canvas-container" id="wm-canvas-container">
                <canvas class="wm-preview-canvas" id="wm-preview-canvas"></canvas>
              </div>

              <div class="wm-preview-footer">
                <span id="wm-doc-info-label">document.pdf &bull; Page 1 of 1</span>
                <span id="wm-dims-label">595 &times; 842 pt</span>
              </div>
            </div>

            <!-- Right: Controls -->
            <div class="wm-controls-panel">
              <!-- 1. Watermark Settings -->
              <div class="wm-section-box">
                <div class="wm-section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                  <span>1. Watermark Settings</span>
                </div>

                <div class="wm-tab-group" role="tablist">
                  <button type="button" class="wm-tab-btn ${wmType === 'text' ? 'active' : ''}" id="wm-tab-text" role="tab">Text Watermark</button>
                  <button type="button" class="wm-tab-btn ${wmType === 'image' ? 'active' : ''}" id="wm-tab-image" role="tab">Image Watermark</button>
                  <button type="button" class="wm-tab-btn ${wmType === 'none' ? 'active' : ''}" id="wm-tab-none" role="tab">No Watermark</button>
                </div>

                <!-- Text Watermark Panel -->
                <div id="wm-panel-text" class="wm-subpanel" style="${wmType === 'text' ? '' : 'display:none;'}">
                  <div class="wm-field-group">
                    <label class="wm-label" for="wm-text-input">Watermark Text:</label>
                    <input type="text" id="wm-text-input" class="wm-input" value="${escapeHtml(wmText)}" maxlength="60" placeholder="e.g. CONFIDENTIAL, DRAFT">
                    <div class="wm-presets-row">
                      <button type="button" class="wm-preset-chip" data-text="CONFIDENTIAL">CONFIDENTIAL</button>
                      <button type="button" class="wm-preset-chip" data-text="DRAFT">DRAFT</button>
                      <button type="button" class="wm-preset-chip" data-text="COPY">COPY</button>
                      <button type="button" class="wm-preset-chip" data-text="APPROVED">APPROVED</button>
                      <button type="button" class="wm-preset-chip" data-text="INTERNAL USE">INTERNAL USE</button>
                    </div>
                  </div>

                  <div class="wm-grid-2col">
                    <div class="wm-field-group">
                      <label class="wm-label" for="wm-font-family">Font Family:</label>
                      <select id="wm-font-family" class="wm-select">
                        <option value="HelveticaBold" ${wmFontFamily === 'HelveticaBold' ? 'selected' : ''}>Helvetica Bold</option>
                        <option value="Helvetica" ${wmFontFamily === 'Helvetica' ? 'selected' : ''}>Helvetica</option>
                        <option value="TimesRomanBold" ${wmFontFamily === 'TimesRomanBold' ? 'selected' : ''}>Times New Roman Bold</option>
                        <option value="TimesRoman" ${wmFontFamily === 'TimesRoman' ? 'selected' : ''}>Times New Roman</option>
                        <option value="CourierBold" ${wmFontFamily === 'CourierBold' ? 'selected' : ''}>Courier Bold</option>
                      </select>
                    </div>
                    <div class="wm-field-group">
                      <label class="wm-label" for="wm-text-color">Color:</label>
                      <div class="wm-color-picker-wrap">
                        <input type="color" id="wm-text-color" class="wm-color-picker" value="${wmTextColor}">
                        <div class="wm-color-chips">
                          <span class="wm-color-dot" style="background:#dc2626;" data-color="#dc2626" title="Red"></span>
                          <span class="wm-color-dot" style="background:#2563eb;" data-color="#2563eb" title="Blue"></span>
                          <span class="wm-color-dot" style="background:#059669;" data-color="#059669" title="Green"></span>
                          <span class="wm-color-dot" style="background:#d97706;" data-color="#d97706" title="Orange"></span>
                          <span class="wm-color-dot" style="background:#475569;" data-color="#475569" title="Gray"></span>
                          <span class="wm-color-dot" style="background:#000000;" data-color="#000000" title="Black"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="wm-grid-2col">
                    <div class="wm-field-group">
                      <div class="wm-label-row">
                        <label class="wm-label" for="wm-font-size">Font Size:</label>
                        <span class="wm-val-badge" id="wm-font-size-val">${wmFontSize} pt</span>
                      </div>
                      <input type="range" id="wm-font-size" class="wm-slider" min="16" max="110" value="${wmFontSize}" step="2">
                    </div>
                    <div class="wm-field-group">
                      <div class="wm-label-row">
                        <label class="wm-label" for="wm-text-opacity">Opacity:</label>
                        <span class="wm-val-badge" id="wm-text-opacity-val">${Math.round(wmOpacity * 100)}%</span>
                      </div>
                      <input type="range" id="wm-text-opacity" class="wm-slider" min="5" max="100" value="${Math.round(wmOpacity * 100)}" step="5">
                    </div>
                  </div>

                  <div class="wm-field-group">
                    <div class="wm-label-row">
                      <label class="wm-label" for="wm-text-rotation">Rotation Angle:</label>
                      <span class="wm-val-badge" id="wm-text-rotation-val">${wmRotation}&deg;</span>
                    </div>
                    <input type="range" id="wm-text-rotation" class="wm-slider" min="-180" max="180" value="${wmRotation}" step="5">
                    <div class="wm-presets-row" style="margin-top:4px;">
                      <button type="button" class="wm-preset-chip" data-rot="45">45&deg; Diagonal</button>
                      <button type="button" class="wm-preset-chip" data-rot="-45">-45&deg; Diagonal</button>
                      <button type="button" class="wm-preset-chip" data-rot="0">0&deg; Horizontal</button>
                      <button type="button" class="wm-preset-chip" data-rot="90">90&deg; Vertical</button>
                    </div>
                  </div>

                  <div class="wm-field-group">
                    <label class="wm-label">Position on Page:</label>
                    <div class="wm-pos-grid">
                      <button type="button" class="wm-pos-btn ${wmPosV==='top'&&wmPosH==='left'?'active':''}" data-v="top" data-h="left">Top Left</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='top'&&wmPosH==='center'?'active':''}" data-v="top" data-h="center">Top Center</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='top'&&wmPosH==='right'?'active':''}" data-v="top" data-h="right">Top Right</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='middle'&&wmPosH==='left'?'active':''}" data-v="middle" data-h="left">Mid Left</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='middle'&&wmPosH==='center'?'active':''}" data-v="middle" data-h="center">Center</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='middle'&&wmPosH==='right'?'active':''}" data-v="middle" data-h="right">Mid Right</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='bottom'&&wmPosH==='left'?'active':''}" data-v="bottom" data-h="left">Btm Left</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='bottom'&&wmPosH==='center'?'active':''}" data-v="bottom" data-h="center">Btm Center</button>
                      <button type="button" class="wm-pos-btn ${wmPosV==='bottom'&&wmPosH==='right'?'active':''}" data-v="bottom" data-h="right">Btm Right</button>
                    </div>
                    <div class="wm-pos-readout" id="wm-pos-readout" style="font-size: 0.72rem; color: #64748b; margin-top: 5px; display: flex; justify-content: space-between; align-items: center;">
                      <span>Position: <strong id="wm-pos-label" style="color: #ea580c;">Center (50%, 50%)</strong></span>
                      <span style="font-size: 0.68rem; color: #94a3b8; font-style: italic;">Drag directly on preview</span>
                    </div>
                  </div>
                </div>

                <!-- Image Watermark Panel -->
                <div id="wm-panel-image" class="wm-subpanel" style="${wmType === 'image' ? '' : 'display:none;'}">
                  <div class="wm-field-group">
                    <label class="wm-label">Select Watermark Image (PNG or JPEG):</label>
                    <div class="wm-img-upload-box" id="wm-img-upload-box">
                      <input type="file" id="wm-img-file-input" accept="image/png,image/jpeg" style="display:none;">
                      <div id="wm-img-empty-state" style="${wmImgElement ? 'display:none;' : ''}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <span>Click to choose PNG or JPEG watermark image</span>
                      </div>
                      <div id="wm-img-loaded-state" style="${wmImgElement ? '' : 'display:none;'}" class="wm-img-loaded-row">
                        <img id="wm-img-preview-thumb" class="wm-img-preview-thumb" src="${wmImgDataUrl || ''}" alt="Watermark preview">
                        <div class="wm-img-meta">
                          <strong id="wm-img-name">${escapeHtml(wmImgFile ? wmImgFile.name : 'watermark.png')}</strong>
                          <span id="wm-img-dim">${wmImgElement ? `${wmImgElement.naturalWidth} × ${wmImgElement.naturalHeight} px` : ''}</span>
                        </div>
                        <button type="button" class="wm-btn-pill wm-btn-remove-img" id="wm-btn-remove-img">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div class="wm-grid-2col">
                    <div class="wm-field-group">
                      <div class="wm-label-row">
                        <label class="wm-label" for="wm-img-scale">Image Scale:</label>
                        <span class="wm-val-badge" id="wm-img-scale-val">${wmImgScale}%</span>
                      </div>
                      <input type="range" id="wm-img-scale" class="wm-slider" min="10" max="150" value="${wmImgScale}" step="5">
                    </div>
                    <div class="wm-field-group">
                      <div class="wm-label-row">
                        <label class="wm-label" for="wm-img-opacity">Opacity:</label>
                        <span class="wm-val-badge" id="wm-img-opacity-val">${Math.round(wmImgOpacity * 100)}%</span>
                      </div>
                      <input type="range" id="wm-img-opacity" class="wm-slider" min="5" max="100" value="${Math.round(wmImgOpacity * 100)}" step="5">
                    </div>
                  </div>

                  <div class="wm-field-group">
                    <div class="wm-label-row">
                      <label class="wm-label" for="wm-img-rotation">Rotation Angle:</label>
                      <span class="wm-val-badge" id="wm-img-rotation-val">${wmImgRotation}&deg;</span>
                    </div>
                    <input type="range" id="wm-img-rotation" class="wm-slider" min="-180" max="180" value="${wmImgRotation}" step="5">
                  </div>

                  <div class="wm-field-group">
                    <label class="wm-label">Position on Page:</label>
                    <div class="wm-pos-grid">
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='top'&&wmImgPosH==='left'?'active':''}" data-v="top" data-h="left">Top Left</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='top'&&wmImgPosH==='center'?'active':''}" data-v="top" data-h="center">Top Center</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='top'&&wmImgPosH==='right'?'active':''}" data-v="top" data-h="right">Top Right</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='middle'&&wmImgPosH==='left'?'active':''}" data-v="middle" data-h="left">Mid Left</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='middle'&&wmImgPosH==='center'?'active':''}" data-v="middle" data-h="center">Center</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='middle'&&wmImgPosH==='right'?'active':''}" data-v="middle" data-h="right">Mid Right</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='bottom'&&wmImgPosH==='left'?'active':''}" data-v="bottom" data-h="left">Btm Left</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='bottom'&&wmImgPosH==='center'?'active':''}" data-v="bottom" data-h="center">Btm Center</button>
                      <button type="button" class="wm-img-pos-btn ${wmImgPosV==='bottom'&&wmImgPosH==='right'?'active':''}" data-v="bottom" data-h="right">Btm Right</button>
                    </div>
                    <div class="wm-pos-readout" id="wm-img-pos-readout" style="font-size: 0.72rem; color: #64748b; margin-top: 5px; display: flex; justify-content: space-between; align-items: center;">
                      <span>Position: <strong id="wm-img-pos-label" style="color: #ea580c;">Center (50%, 50%)</strong></span>
                      <span style="font-size: 0.68rem; color: #94a3b8; font-style: italic;">Drag directly on preview</span>
                    </div>
                  </div>
                </div>

                <!-- Watermark Page Range Controls -->
                <div id="wm-range-controls" class="wm-field-group" style="${wmType === 'none' ? 'display:none;' : ''} margin-top:10px; border-top:1px solid #e2e8f0; padding-top:10px;">
                  <label class="wm-label">Watermark Target Pages:</label>
                  <div class="wm-range-radio-group">
                    <label><input type="radio" name="wm-pages-mode" value="all" ${wmTargetMode === 'all' ? 'checked' : ''}> All Pages</label>
                    <label><input type="radio" name="wm-pages-mode" value="current" ${wmTargetMode === 'current' ? 'checked' : ''}> Current Page</label>
                    <label><input type="radio" name="wm-pages-mode" value="custom" ${wmTargetMode === 'custom' ? 'checked' : ''}> Custom Range</label>
                  </div>
                  <div id="wm-custom-range-box" style="${wmTargetMode === 'custom' ? '' : 'display:none;'} margin-top:6px;">
                    <input type="text" id="wm-custom-range-input" class="wm-input" value="${escapeHtml(wmCustomRange)}" placeholder="e.g. 1-3, 5, 8-10 or odd, even">
                    <div class="wm-field-hint" id="wm-range-hint">Specify pages or ranges separated by commas</div>
                  </div>
                </div>
              </div>

              <!-- 2. Page Number Settings -->
              <div class="wm-section-box">
                <div class="wm-section-header-toggle">
                  <label class="wm-toggle-label">
                    <input type="checkbox" id="wm-enable-page-nums" ${numEnabled ? 'checked' : ''}>
                    <span class="wm-section-title" style="margin:0;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="9" x2="20" y2="9"></line>
                        <line x1="4" y1="15" x2="20" y2="15"></line>
                        <line x1="10" y1="3" x2="8" y2="21"></line>
                        <line x1="16" y1="3" x2="14" y2="21"></line>
                      </svg>
                      <span>2. Stamp Page Numbers</span>
                    </span>
                  </label>
                </div>

                <div id="wm-page-nums-body" style="${numEnabled ? '' : 'display:none;'}">
                  <div class="wm-grid-2col">
                    <div class="wm-field-group">
                      <label class="wm-label" for="wm-num-format">Format:</label>
                      <select id="wm-num-format" class="wm-select">
                        <option value="page-num-total" ${numFormat === 'page-num-total' ? 'selected' : ''}>Page 1 of N</option>
                        <option value="page-num" ${numFormat === 'page-num' ? 'selected' : ''}>Page 1</option>
                        <option value="num" ${numFormat === 'num' ? 'selected' : ''}>1 (Number only)</option>
                        <option value="num-slash-total" ${numFormat === 'num-slash-total' ? 'selected' : ''}>1 / N</option>
                        <option value="dash-num-dash" ${numFormat === 'dash-num-dash' ? 'selected' : ''}>- 1 -</option>
                      </select>
                    </div>
                    <div class="wm-field-group">
                      <label class="wm-label" for="wm-num-start">Start At Number:</label>
                      <input type="number" id="wm-num-start" class="wm-input" value="${numStart}" min="1" max="9999">
                    </div>
                  </div>

                  <div class="wm-grid-2col">
                    <div class="wm-field-group">
                      <label class="wm-label">Position:</label>
                      <div class="wm-num-pos-group">
                        <select id="wm-num-pos-v" class="wm-select" style="margin-bottom:4px;">
                          <option value="bottom" ${numPosV === 'bottom' ? 'selected' : ''}>Bottom</option>
                          <option value="top" ${numPosV === 'top' ? 'selected' : ''}>Top</option>
                        </select>
                        <select id="wm-num-pos-h" class="wm-select">
                          <option value="center" ${numPosH === 'center' ? 'selected' : ''}>Center</option>
                          <option value="right" ${numPosH === 'right' ? 'selected' : ''}>Right</option>
                          <option value="left" ${numPosH === 'left' ? 'selected' : ''}>Left</option>
                        </select>
                      </div>
                    </div>

                    <div class="wm-field-group">
                      <div class="wm-grid-2col" style="gap:6px;">
                        <div>
                          <label class="wm-label" for="wm-num-size">Size:</label>
                          <select id="wm-num-size" class="wm-select">
                            <option value="9" ${numSize === 9 ? 'selected' : ''}>9 pt</option>
                            <option value="10" ${numSize === 10 ? 'selected' : ''}>10 pt</option>
                            <option value="11" ${numSize === 11 ? 'selected' : ''}>11 pt</option>
                            <option value="12" ${numSize === 12 ? 'selected' : ''}>12 pt</option>
                            <option value="14" ${numSize === 14 ? 'selected' : ''}>14 pt</option>
                            <option value="16" ${numSize === 16 ? 'selected' : ''}>16 pt</option>
                          </select>
                        </div>
                        <div>
                          <label class="wm-label" for="wm-num-color">Color:</label>
                          <input type="color" id="wm-num-color" class="wm-color-picker" value="${numColor}" style="width:100%; height:32px;">
                        </div>
                      </div>
                      <div style="margin-top:4px;">
                        <label class="wm-label" for="wm-num-margin" style="font-size:0.75rem;">Margin from Edge:</label>
                        <input type="number" id="wm-num-margin" class="wm-input" value="${numMargin}" min="8" max="72" style="height:26px; font-size:0.75rem;">
                      </div>
                    </div>
                  </div>

                  <!-- Page Number Target Pages -->
                  <div class="wm-field-group" style="margin-top:6px; border-top:1px solid #e2e8f0; padding-top:8px;">
                    <label class="wm-label">Page Numbers Target Pages:</label>
                    <div class="wm-range-radio-group">
                      <label><input type="radio" name="wm-num-pages-mode" value="all" ${numTargetMode === 'all' ? 'checked' : ''}> All Pages</label>
                      <label><input type="radio" name="wm-num-pages-mode" value="current" ${numTargetMode === 'current' ? 'checked' : ''}> Current Page</label>
                      <label><input type="radio" name="wm-num-pages-mode" value="custom" ${numTargetMode === 'custom' ? 'checked' : ''}> Custom Range</label>
                    </div>
                    <div id="wm-num-custom-range-box" style="${numTargetMode === 'custom' ? '' : 'display:none;'} margin-top:6px;">
                      <input type="text" id="wm-num-custom-range-input" class="wm-input" value="${escapeHtml(numCustomRange)}" placeholder="e.g. 1-3, 5, 8-10">
                      <div class="wm-field-hint" id="wm-num-range-hint">Specify pages or ranges separated by commas</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Box -->
              <div class="wm-action-box">
                <div id="wm-process-status" class="wm-status-pill" style="display:none;">
                  <span id="wm-status-text">Processing PDF document...</span>
                </div>
                <button type="button" class="btn btn-primary btn-block" id="wm-btn-apply-download">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Apply &amp; Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      setupDropzoneEvents();
    }

    function setupDropzoneEvents() {
      initOptionBImportHandlers({
        dropzoneId: 'wm-optionb-dropzone',
        fileInputId: 'wm-file-input',
        browseBtnId: 'wm-optionb-browse',
        onFilesSelected: (files) => {
          if (files && files.length > 0) {
            handleFileSelected(files[0]);
          }
        }
      });
    }

    async function handleFileSelected(file) {
      if (!file) return;

      if (file.size === 0) {
        showToast('The selected file is empty (0 bytes). Please choose a valid PDF file.', 'error');
        return;
      }
      if (file.size > 25 * 1024 * 1024) {
        showToast('File size exceeds the 25 MB limit for in-browser processing.', 'error');
        return;
      }
      const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
      if (!isPdf) {
        showToast('Invalid file format. Please select a valid PDF document.', 'error');
        return;
      }

      try {
        const rawBuffer = await file.arrayBuffer();
        const header = new Uint8Array(rawBuffer.slice(0, 5));
        const headerStr = String.fromCharCode(...header);
        if (headerStr !== '%PDF-') {
          showToast('Corrupted or invalid PDF header. Please select a valid PDF document.', 'error');
          return;
        }

        if (!window.pdfjsLib) {
          showToast('PDF rendering engine is not loaded.', 'error');
          return;
        }

        // Copy raw buffer so originalPdfBytes remains intact when PDF.js worker detaches its buffer
        originalPdfBytes = new Uint8Array(rawBuffer.slice(0));

        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/libs/pdf.worker.min.js';
        const loadingTask = window.pdfjsLib.getDocument({ data: originalPdfBytes.slice(0) });
        const loadedDoc = await loadingTask.promise;

        selectedFile = file;
        originalFileName = file.name.replace(/\.[^/.]+$/, '');
        pdfDoc = loadedDoc;
        pdfTotalPages = pdfDoc.numPages;
        pdfCurrentPage = 1;
        previewZoom = 1.0;

        document.getElementById('wm-dropzone').style.display = 'none';
        document.getElementById('wm-active-workspace').style.display = 'grid';

        setupWorkspaceEvents();
        updatePageNavUI();
        updatePositionGridUI();
        await renderBasePdfPage();
        showToast(`Loaded "${file.name}" (${pdfTotalPages} page${pdfTotalPages === 1 ? '' : 's'})`, 'info');
      } catch (err) {
        console.error('PDF load error:', err);
        showToast('Failed to load PDF document: ' + (err.message || 'File may be corrupted or encrypted'), 'error');
      }
    }

    function updatePositionGridUI() {
      const vPresets = { 'top': 0.22, 'middle': 0.50, 'bottom': 0.78 };
      const hPresets = { 'left': 0.22, 'center': 0.50, 'right': 0.78 };
      let matchedV = null;
      let matchedH = null;

      for (const [vKey, vVal] of Object.entries(vPresets)) {
        if (Math.abs(wmRelY - vVal) < 0.07) { matchedV = vKey; break; }
      }
      for (const [hKey, hVal] of Object.entries(hPresets)) {
        if (Math.abs(wmRelX - hVal) < 0.07) { matchedH = hKey; break; }
      }

      const buttons = document.querySelectorAll('.wm-pos-btn');
      buttons.forEach(b => {
        const bV = b.getAttribute('data-v');
        const bH = b.getAttribute('data-h');
        if (matchedV && matchedH && bV === matchedV && bH === matchedH) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      const labelEl = document.getElementById('wm-pos-label');
      if (labelEl) {
        if (matchedV && matchedH) {
          const vName = matchedV === 'middle' ? 'Center' : matchedV.charAt(0).toUpperCase() + matchedV.slice(1);
          const hName = matchedH.charAt(0).toUpperCase() + matchedH.slice(1);
          const fullName = (vName === 'Center' && hName === 'Center') ? 'Center' : `${vName} ${hName}`;
          labelEl.textContent = `${fullName} (${Math.round(wmRelX * 100)}%, ${Math.round(wmRelY * 100)}%)`;
        } else {
          labelEl.textContent = `Custom (${Math.round(wmRelX * 100)}%, ${Math.round(wmRelY * 100)}%)`;
        }
      }
    }

    function updateImagePositionGridUI() {
      const vPresets = { 'top': 0.22, 'middle': 0.50, 'bottom': 0.78 };
      const hPresets = { 'left': 0.22, 'center': 0.50, 'right': 0.78 };
      let matchedV = null;
      let matchedH = null;

      for (const [vKey, vVal] of Object.entries(vPresets)) {
        if (Math.abs(wmImgRelY - vVal) < 0.07) { matchedV = vKey; break; }
      }
      for (const [hKey, hVal] of Object.entries(hPresets)) {
        if (Math.abs(wmImgRelX - hVal) < 0.07) { matchedH = hKey; break; }
      }

      const buttons = document.querySelectorAll('.wm-img-pos-btn');
      buttons.forEach(b => {
        const bV = b.getAttribute('data-v');
        const bH = b.getAttribute('data-h');
        if (matchedV && matchedH && bV === matchedV && bH === matchedH) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      const labelEl = document.getElementById('wm-img-pos-label');
      if (labelEl) {
        if (matchedV && matchedH) {
          const vName = matchedV === 'middle' ? 'Center' : matchedV.charAt(0).toUpperCase() + matchedV.slice(1);
          const hName = matchedH.charAt(0).toUpperCase() + matchedH.slice(1);
          const fullName = (vName === 'Center' && hName === 'Center') ? 'Center' : `${vName} ${hName}`;
          labelEl.textContent = `${fullName} (${Math.round(wmImgRelX * 100)}%, ${Math.round(wmImgRelY * 100)}%)`;
        } else {
          labelEl.textContent = `Custom (${Math.round(wmImgRelX * 100)}%, ${Math.round(wmImgRelY * 100)}%)`;
        }
      }
    }

    function setupWorkspaceEvents() {
      // Zoom controls
      document.getElementById('wm-btn-zoom-in')?.addEventListener('click', () => {
        previewZoom = Math.min(2.5, previewZoom + 0.25);
        renderBasePdfPage();
      });
      document.getElementById('wm-btn-zoom-out')?.addEventListener('click', () => {
        previewZoom = Math.max(0.5, previewZoom - 0.25);
        renderBasePdfPage();
      });
      document.getElementById('wm-btn-zoom-fit')?.addEventListener('click', () => {
        previewZoom = 1.0;
        renderBasePdfPage();
      });

      // Change file button
      document.getElementById('wm-btn-change-file')?.addEventListener('click', () => {
        selectedFile = null;
        originalPdfBytes = null;
        pdfDoc = null;
        document.getElementById('wm-active-workspace').style.display = 'none';
        document.getElementById('wm-dropzone').style.display = 'block';
        const input = document.getElementById('wm-file-input');
        if (input) input.value = '';
      });

      // Page Navigation
      document.getElementById('wm-btn-prev')?.addEventListener('click', () => {
        if (pdfCurrentPage > 1) {
          pdfCurrentPage--;
          updatePageNavUI();
          renderBasePdfPage();
        }
      });
      document.getElementById('wm-btn-next')?.addEventListener('click', () => {
        if (pdfCurrentPage < pdfTotalPages) {
          pdfCurrentPage++;
          updatePageNavUI();
          renderBasePdfPage();
        }
      });
      const pageInput = document.getElementById('wm-page-input');
      pageInput?.addEventListener('change', () => {
        let val = parseInt(pageInput.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        if (val > pdfTotalPages) val = pdfTotalPages;
        pdfCurrentPage = val;
        updatePageNavUI();
        renderBasePdfPage();
      });

      // Tab switcher for Watermark mode
      const tabText = document.getElementById('wm-tab-text');
      const tabImage = document.getElementById('wm-tab-image');
      const tabNone = document.getElementById('wm-tab-none');
      const panelText = document.getElementById('wm-panel-text');
      const panelImage = document.getElementById('wm-panel-image');
      const rangeControls = document.getElementById('wm-range-controls');

      function setWmTab(type) {
        wmType = type;
        [tabText, tabImage, tabNone].forEach(btn => btn?.classList.remove('active'));
        if (type === 'text') {
          tabText?.classList.add('active');
          if (panelText) panelText.style.display = 'block';
          if (panelImage) panelImage.style.display = 'none';
          if (rangeControls) rangeControls.style.display = 'block';
          updatePositionGridUI();
        } else if (type === 'image') {
          tabImage?.classList.add('active');
          if (panelText) panelText.style.display = 'none';
          if (panelImage) panelImage.style.display = 'block';
          if (rangeControls) rangeControls.style.display = 'block';
          updateImagePositionGridUI();
        } else {
          tabNone?.classList.add('active');
          if (panelText) panelText.style.display = 'none';
          if (panelImage) panelImage.style.display = 'none';
          if (rangeControls) rangeControls.style.display = 'none';
          isWmSelected = false;
        }
        redrawOverlay();
      }

      tabText?.addEventListener('click', () => setWmTab('text'));
      tabImage?.addEventListener('click', () => setWmTab('image'));
      tabNone?.addEventListener('click', () => setWmTab('none'));

      // Text Watermark Inputs
      const textInput = document.getElementById('wm-text-input');
      textInput?.addEventListener('input', () => {
        wmText = textInput.value;
        redrawOverlay();
      });

      // Preset chips
      document.querySelectorAll('.wm-preset-chip[data-text]').forEach(chip => {
        chip.addEventListener('click', () => {
          wmText = chip.getAttribute('data-text');
          if (textInput) textInput.value = wmText;
          redrawOverlay();
        });
      });

      // Font Family
      const fontSelect = document.getElementById('wm-font-family');
      fontSelect?.addEventListener('change', () => {
        wmFontFamily = fontSelect.value;
        redrawOverlay();
      });

      // Color picker & chips
      const colorInput = document.getElementById('wm-text-color');
      colorInput?.addEventListener('input', () => {
        wmTextColor = colorInput.value;
        redrawOverlay();
      });
      document.querySelectorAll('.wm-color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const col = dot.getAttribute('data-color');
          wmTextColor = col;
          if (colorInput) colorInput.value = col;
          redrawOverlay();
        });
      });

      // Font Size Slider
      const fontSizeSlider = document.getElementById('wm-font-size');
      const fontSizeVal = document.getElementById('wm-font-size-val');
      fontSizeSlider?.addEventListener('input', () => {
        wmFontSize = parseInt(fontSizeSlider.value, 10);
        if (fontSizeVal) fontSizeVal.textContent = `${wmFontSize} pt`;
        redrawOverlay();
      });

      // Opacity Slider
      const opacitySlider = document.getElementById('wm-text-opacity');
      const opacityVal = document.getElementById('wm-text-opacity-val');
      opacitySlider?.addEventListener('input', () => {
        wmOpacity = parseInt(opacitySlider.value, 10) / 100;
        if (opacityVal) opacityVal.textContent = `${Math.round(wmOpacity * 100)}%`;
        redrawOverlay();
      });

      // Rotation Slider & Presets
      const rotSlider = document.getElementById('wm-text-rotation');
      const rotVal = document.getElementById('wm-text-rotation-val');
      rotSlider?.addEventListener('input', () => {
        wmRotation = parseInt(rotSlider.value, 10);
        if (rotVal) rotVal.textContent = `${wmRotation}°`;
        redrawOverlay();
      });
      document.querySelectorAll('.wm-preset-chip[data-rot]').forEach(chip => {
        chip.addEventListener('click', () => {
          wmRotation = parseInt(chip.getAttribute('data-rot'), 10);
          if (rotSlider) rotSlider.value = wmRotation;
          if (rotVal) rotVal.textContent = `${wmRotation}°`;
          redrawOverlay();
        });
      });

      // Text Position 3x3 Grid
      document.querySelectorAll('.wm-pos-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          wmPosV = btn.getAttribute('data-v');
          wmPosH = btn.getAttribute('data-h');
          wmRelX = wmPosH === 'left' ? 0.22 : wmPosH === 'right' ? 0.78 : 0.50;
          wmRelY = wmPosV === 'top' ? 0.22 : wmPosV === 'bottom' ? 0.78 : 0.50;
          isWmSelected = true;
          updatePositionGridUI();
          redrawOverlay();
        });
      });

      // Image Watermark Inputs
      const imgUploadBox = document.getElementById('wm-img-upload-box');
      const imgFileInput = document.getElementById('wm-img-file-input');
      const imgEmptyState = document.getElementById('wm-img-empty-state');
      const imgLoadedState = document.getElementById('wm-img-loaded-state');
      const imgThumb = document.getElementById('wm-img-preview-thumb');
      const imgNameEl = document.getElementById('wm-img-name');
      const imgDimEl = document.getElementById('wm-img-dim');
      const imgRemoveBtn = document.getElementById('wm-btn-remove-img');

      imgUploadBox?.addEventListener('click', (e) => {
        if (e.target !== imgRemoveBtn && !imgRemoveBtn?.contains(e.target)) {
          imgFileInput?.click();
        }
      });

      imgFileInput?.addEventListener('change', async () => {
        if (!imgFileInput.files || !imgFileInput.files[0]) return;
        const file = imgFileInput.files[0];
        if (!file.type.startsWith('image/')) {
          showToast('Please select a PNG or JPEG watermark image.', 'error');
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          showToast('Watermark image exceeds 5 MB limit.', 'error');
          return;
        }

        try {
          const ab = await file.arrayBuffer();
          wmImgBytes = new Uint8Array(ab);
          wmImgFile = file;
          wmImgFormat = file.type === 'image/jpeg' ? 'jpg' : 'png';

          if (wmImgDataUrl) URL.revokeObjectURL(wmImgDataUrl);
          wmImgDataUrl = URL.createObjectURL(file);

          const img = new Image();
          img.onload = () => {
            wmImgElement = img;
            if (imgEmptyState) imgEmptyState.style.display = 'none';
            if (imgLoadedState) imgLoadedState.style.display = 'flex';
            if (imgThumb) imgThumb.src = wmImgDataUrl;
            if (imgNameEl) imgNameEl.textContent = file.name;
            if (imgDimEl) imgDimEl.textContent = `${img.naturalWidth} × ${img.naturalHeight} px`;
            redrawOverlay();
          };
          img.src = wmImgDataUrl;
        } catch (err) {
          console.error('Image load error:', err);
          showToast('Failed to load watermark image.', 'error');
        }
      });

      imgRemoveBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (wmImgDataUrl) URL.revokeObjectURL(wmImgDataUrl);
        wmImgDataUrl = null;
        wmImgElement = null;
        wmImgBytes = null;
        wmImgFile = null;
        if (imgFileInput) imgFileInput.value = '';
        if (imgEmptyState) imgEmptyState.style.display = 'flex';
        if (imgLoadedState) imgLoadedState.style.display = 'none';
        redrawOverlay();
      });

      // Image Scale Slider
      const imgScaleSlider = document.getElementById('wm-img-scale');
      const imgScaleVal = document.getElementById('wm-img-scale-val');
      imgScaleSlider?.addEventListener('input', () => {
        wmImgScale = parseInt(imgScaleSlider.value, 10);
        if (imgScaleVal) imgScaleVal.textContent = `${wmImgScale}%`;
        redrawOverlay();
      });

      // Image Opacity Slider
      const imgOpacitySlider = document.getElementById('wm-img-opacity');
      const imgOpacityVal = document.getElementById('wm-img-opacity-val');
      imgOpacitySlider?.addEventListener('input', () => {
        wmImgOpacity = parseInt(imgOpacitySlider.value, 10) / 100;
        if (imgOpacityVal) imgOpacityVal.textContent = `${Math.round(wmImgOpacity * 100)}%`;
        redrawOverlay();
      });

      // Image Rotation Slider
      const imgRotSlider = document.getElementById('wm-img-rotation');
      const imgRotVal = document.getElementById('wm-img-rotation-val');
      imgRotSlider?.addEventListener('input', () => {
        wmImgRotation = parseInt(imgRotSlider.value, 10);
        if (imgRotVal) imgRotVal.textContent = `${wmImgRotation}°`;
        redrawOverlay();
      });

      // Image Position 3x3 Grid
      document.querySelectorAll('.wm-img-pos-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          wmImgPosV = btn.getAttribute('data-v');
          wmImgPosH = btn.getAttribute('data-h');
          wmImgRelX = wmImgPosH === 'left' ? 0.22 : wmImgPosH === 'right' ? 0.78 : 0.50;
          wmImgRelY = wmImgPosV === 'top' ? 0.22 : wmImgPosV === 'bottom' ? 0.78 : 0.50;
          isWmSelected = true;
          updateImagePositionGridUI();
          redrawOverlay();
        });
      });

      // Watermark Target Pages radio buttons
      const customRangeBox = document.getElementById('wm-custom-range-box');
      const customRangeInput = document.getElementById('wm-custom-range-input');
      document.querySelectorAll('input[name="wm-pages-mode"]').forEach(radio => {
        radio.addEventListener('change', () => {
          wmTargetMode = radio.value;
          if (customRangeBox) {
            customRangeBox.style.display = wmTargetMode === 'custom' ? 'block' : 'none';
          }
          redrawOverlay();
        });
      });
      customRangeInput?.addEventListener('input', () => {
        wmCustomRange = customRangeInput.value;
        redrawOverlay();
      });

      // Page Numbers Controls
      const enableNumsCheck = document.getElementById('wm-enable-page-nums');
      const pageNumsBody = document.getElementById('wm-page-nums-body');
      enableNumsCheck?.addEventListener('change', () => {
        numEnabled = enableNumsCheck.checked;
        if (pageNumsBody) pageNumsBody.style.display = numEnabled ? 'block' : 'none';
        redrawOverlay();
      });

      const numFormatSelect = document.getElementById('wm-num-format');
      numFormatSelect?.addEventListener('change', () => {
        numFormat = numFormatSelect.value;
        redrawOverlay();
      });

      const numStartInput = document.getElementById('wm-num-start');
      numStartInput?.addEventListener('input', () => {
        numStart = parseInt(numStartInput.value, 10) || 1;
        redrawOverlay();
      });

      const numPosVSelect = document.getElementById('wm-num-pos-v');
      numPosVSelect?.addEventListener('change', () => {
        numPosV = numPosVSelect.value;
        redrawOverlay();
      });

      const numPosHSelect = document.getElementById('wm-num-pos-h');
      numPosHSelect?.addEventListener('change', () => {
        numPosH = numPosHSelect.value;
        redrawOverlay();
      });

      const numSizeSelect = document.getElementById('wm-num-size');
      numSizeSelect?.addEventListener('change', () => {
        numSize = parseInt(numSizeSelect.value, 10) || 11;
        redrawOverlay();
      });

      const numColorInput = document.getElementById('wm-num-color');
      numColorInput?.addEventListener('input', () => {
        numColor = numColorInput.value;
        redrawOverlay();
      });

      const numMarginInput = document.getElementById('wm-num-margin');
      numMarginInput?.addEventListener('input', () => {
        numMargin = parseInt(numMarginInput.value, 10) || 24;
        redrawOverlay();
      });

      // Page Numbers Target Pages radio buttons
      const numCustomRangeBox = document.getElementById('wm-num-custom-range-box');
      const numCustomRangeInput = document.getElementById('wm-num-custom-range-input');
      document.querySelectorAll('input[name="wm-num-pages-mode"]').forEach(radio => {
        radio.addEventListener('change', () => {
          numTargetMode = radio.value;
          if (numCustomRangeBox) {
            numCustomRangeBox.style.display = numTargetMode === 'custom' ? 'block' : 'none';
          }
          redrawOverlay();
        });
      });
      numCustomRangeInput?.addEventListener('input', () => {
        numCustomRange = numCustomRangeInput.value;
        redrawOverlay();
      });

      // Canvas Drag & Drop and Hit-Testing
      const canvas = document.getElementById('wm-preview-canvas');
      if (canvas && !canvas._wmDragBound) {
        canvas._wmDragBound = true;
        canvas.style.touchAction = 'none';

        function hitTestWatermark(e) {
          if (!canvas || !pdfDoc) return false;
          if (wmType === 'none') return false;
          if (!isPageInTargetRange(pdfCurrentPage, wmTargetMode, wmCustomRange)) return false;

          const rect = canvas.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return false;

          const scaleX = canvas.width / rect.width;
          const scaleY = canvas.height / rect.height;
          const mouseX = (e.clientX - rect.left) * scaleX;
          const mouseY = (e.clientY - rect.top) * scaleY;

          if (wmType === 'text') {
            const text = (wmText || '').trim();
            if (!text) return false;

            const cx = canvas.width * wmRelX;
            const cy = canvas.height * wmRelY;
            const dx = mouseX - cx;
            const dy = mouseY - cy;

            const rad = (wmRotation * Math.PI) / 180;
            const lx = dx * Math.cos(rad) - dy * Math.sin(rad);
            const ly = dx * Math.sin(rad) + dy * Math.cos(rad);

            const fontSizePx = Math.max(12, Math.round(wmFontSize * cachedTotalScale));
            const ctx = canvas.getContext('2d');
            let fontCss = 'bold ' + fontSizePx + 'px sans-serif';
            if (wmFontFamily.includes('Times')) fontCss = 'bold ' + fontSizePx + 'px serif';
            if (wmFontFamily.includes('Courier')) fontCss = 'bold ' + fontSizePx + 'px monospace';
            ctx.font = fontCss;

            const textW = ctx.measureText(text).width;
            const textH = fontSizePx;

            const hitPadX = 22 * (cachedTotalScale / 1.4);
            const hitPadY = 16 * (cachedTotalScale / 1.4);
            const halfW = textW / 2 + hitPadX;
            const halfH = textH / 2 + hitPadY;

            return Math.abs(lx) <= halfW && Math.abs(ly) <= halfH;
          } else if (wmType === 'image') {
            if (!wmImgElement || !wmImgElement.naturalWidth) return false;

            const cx = canvas.width * wmImgRelX;
            const cy = canvas.height * wmImgRelY;
            const dx = mouseX - cx;
            const dy = mouseY - cy;

            const rad = (wmImgRotation * Math.PI) / 180;
            const lx = dx * Math.cos(rad) - dy * Math.sin(rad);
            const ly = dx * Math.sin(rad) + dy * Math.cos(rad);

            const baseImgW = canvas.width * (wmImgScale / 100);
            const aspect = wmImgElement.naturalHeight / wmImgElement.naturalWidth;
            const imgW = baseImgW;
            const imgH = baseImgW * aspect;

            const hitPad = 16 * (cachedTotalScale / 1.4);
            const halfW = imgW / 2 + hitPad;
            const halfH = imgH / 2 + hitPad;

            return Math.abs(lx) <= halfW && Math.abs(ly) <= halfH;
          }

          return false;
        }

        canvas.addEventListener('pointerdown', (e) => {
          if (wmType === 'none') return;
          const isHit = hitTestWatermark(e);
          if (isHit) {
            e.preventDefault();
            isDraggingWm = true;
            isWmSelected = true;
            canvas.setPointerCapture(e.pointerId);
            canvas.style.cursor = 'grabbing';

            const rect = canvas.getBoundingClientRect();
            const normX = (e.clientX - rect.left) / rect.width;
            const normY = (e.clientY - rect.top) / rect.height;

            if (wmType === 'text') {
              dragStartOffsetRelX = normX - wmRelX;
              dragStartOffsetRelY = normY - wmRelY;
            } else {
              dragStartOffsetRelX = normX - wmImgRelX;
              dragStartOffsetRelY = normY - wmImgRelY;
            }
            redrawOverlay();
          } else {
            // Clicking outside watermark on canvas deselects outline
            if (isWmSelected) {
              isWmSelected = false;
              redrawOverlay();
            }
          }
        });

        canvas.addEventListener('pointermove', (e) => {
          if (isDraggingWm) {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            const normX = (e.clientX - rect.left) / rect.width;
            const normY = (e.clientY - rect.top) / rect.height;

            let newRelX = normX - dragStartOffsetRelX;
            let newRelY = normY - dragStartOffsetRelY;

            // Clamp so watermark stays on page
            newRelX = Math.max(0.04, Math.min(0.96, newRelX));
            newRelY = Math.max(0.04, Math.min(0.96, newRelY));

            if (wmType === 'text') {
              wmRelX = newRelX;
              wmRelY = newRelY;
              updatePositionGridUI();
            } else {
              wmImgRelX = newRelX;
              wmImgRelY = newRelY;
              updateImagePositionGridUI();
            }

            redrawOverlay();
          } else {
            const isHit = hitTestWatermark(e);
            canvas.style.cursor = isHit ? 'grab' : 'default';
          }
        });

        function finishWatermarkDrag(e) {
          if (isDraggingWm) {
            isDraggingWm = false;
            try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
            const isHit = hitTestWatermark(e);
            canvas.style.cursor = isHit ? 'grab' : 'default';
            redrawOverlay();
          }
        }

        canvas.addEventListener('pointerup', finishWatermarkDrag);
        canvas.addEventListener('pointercancel', finishWatermarkDrag);
      }

      // Apply & Download PDF
      document.getElementById('wm-btn-apply-download')?.addEventListener('click', applyAndDownloadPdf);
    }

    function updatePageNavUI() {
      const btnPrev = document.getElementById('wm-btn-prev');
      const btnNext = document.getElementById('wm-btn-next');
      const pageInput = document.getElementById('wm-page-input');
      const totalLabel = document.getElementById('wm-total-pages-label');

      if (btnPrev) btnPrev.disabled = pdfCurrentPage <= 1;
      if (btnNext) btnNext.disabled = pdfCurrentPage >= pdfTotalPages;
      if (pageInput) {
        pageInput.value = pdfCurrentPage;
        pageInput.max = pdfTotalPages;
      }
      if (totalLabel) totalLabel.textContent = `of ${pdfTotalPages}`;
    }

    async function renderBasePdfPage() {
      if (!pdfDoc) return;
      const canvas = document.getElementById('wm-preview-canvas');
      if (!canvas) return;

      if (currentRenderTask) {
        try { currentRenderTask.cancel(); } catch (e) {}
        currentRenderTask = null;
      }

      try {
        const page = await pdfDoc.getPage(pdfCurrentPage);
        const baseScale = 1.4;
        const totalScale = baseScale * previewZoom;
        const viewport = page.getViewport({ scale: totalScale });

        cachedTotalScale = totalScale;
        cachedPdfCanvas.width = viewport.width;
        cachedPdfCanvas.height = viewport.height;

        const offCtx = cachedPdfCanvas.getContext('2d');
        offCtx.fillStyle = '#FFFFFF';
        offCtx.fillRect(0, 0, cachedPdfCanvas.width, cachedPdfCanvas.height);

        currentRenderTask = page.render({
          canvasContext: offCtx,
          viewport: viewport
        });
        await currentRenderTask.promise;
        currentRenderTask = null;

        // Visual unscaled pt dimensions
        const unscaledViewport = page.getViewport({ scale: 1.0 });
        const ptW = Math.round(unscaledViewport.width);
        const ptH = Math.round(unscaledViewport.height);

        const dimsLabel = document.getElementById('wm-dims-label');
        if (dimsLabel) {
          dimsLabel.textContent = `${ptW} × ${ptH} pt (${Math.round(previewZoom * 100)}%)`;
        }
        const infoLabel = document.getElementById('wm-doc-info-label');
        if (infoLabel) {
          infoLabel.textContent = `${escapeHtml(originalFileName)}.pdf • Page ${pdfCurrentPage} of ${pdfTotalPages}`;
        }

        redrawOverlay();
      } catch (err) {
        if (err && err.name !== 'RenderingCancelledException') {
          console.error('Render base PDF page error:', err);
        }
      }
    }

    function redrawOverlay() {
      const canvas = document.getElementById('wm-preview-canvas');
      if (!canvas || !cachedPdfCanvas.width || !cachedPdfCanvas.height) return;

      canvas.width = cachedPdfCanvas.width;
      canvas.height = cachedPdfCanvas.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(cachedPdfCanvas, 0, 0);

      // Draw Watermark Overlay on Canvas
      drawCanvasWatermark(ctx, canvas.width, canvas.height, cachedTotalScale);

      // Draw Page Number Overlay on Canvas
      drawCanvasPageNumber(ctx, canvas.width, canvas.height, cachedTotalScale);
    }

    function isPageInTargetRange(pageNum, mode, customRangeStr) {
      if (mode === 'all') return true;
      if (mode === 'current') return pageNum === pdfCurrentPage;
      if (mode === 'custom') {
        const check = parsePageRanges(customRangeStr, pdfTotalPages);
        return check.valid && check.pages.includes(pageNum);
      }
      return true;
    }

    function drawCanvasWatermark(ctx, canvasW, canvasH, scaleFactor) {
      if (wmType === 'none') return;
      if (!isPageInTargetRange(pdfCurrentPage, wmTargetMode, wmCustomRange)) return;

      if (wmType === 'text') {
        const text = (wmText || '').trim();
        if (!text) return;

        // Position coordinates on canvas
        const cx = canvasW * wmRelX;
        const cy = canvasH * wmRelY;

        const fontSizePx = Math.max(12, Math.round(wmFontSize * scaleFactor));

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((-wmRotation * Math.PI) / 180);

        let fontCss = 'bold ' + fontSizePx + 'px sans-serif';
        if (wmFontFamily.includes('Times')) fontCss = 'bold ' + fontSizePx + 'px serif';
        if (wmFontFamily.includes('Courier')) fontCss = 'bold ' + fontSizePx + 'px monospace';
        ctx.font = fontCss;

        ctx.fillStyle = wmTextColor;
        ctx.globalAlpha = wmOpacity;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 0, 0);
        ctx.restore();

        // Subtle Selection Outline & Drag Handle
        if (isWmSelected || isDraggingWm) {
          ctx.save();
          ctx.font = fontCss;
          const textMetrics = ctx.measureText(text);
          const textW = textMetrics.width;
          const textH = fontSizePx;

          ctx.translate(cx, cy);
          ctx.rotate((-wmRotation * Math.PI) / 180);

          const padX = 14 * (scaleFactor / 1.4);
          const padY = 8 * (scaleFactor / 1.4);
          const boxW = textW + padX * 2;
          const boxH = textH + padY * 2;

          // Dashed orange bounding box
          ctx.strokeStyle = '#ea580c';
          ctx.lineWidth = Math.max(1.2, 1.5 * (scaleFactor / 1.4));
          ctx.setLineDash([5 * (scaleFactor / 1.4), 4 * (scaleFactor / 1.4)]);
          ctx.strokeRect(-boxW / 2, -boxH / 2, boxW, boxH);

          // 4 corner grip handles
          ctx.setLineDash([]);
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#ea580c';
          ctx.lineWidth = 1.5;
          const dotR = 3.5 * (scaleFactor / 1.4);
          const corners = [
            [-boxW / 2, -boxH / 2],
            [boxW / 2, -boxH / 2],
            [boxW / 2, boxH / 2],
            [-boxW / 2, boxH / 2]
          ];
          for (const [ptX, ptY] of corners) {
            ctx.beginPath();
            ctx.arc(ptX, ptY, dotR, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }

          // Subtle drag handle badge on top
          const badgeW = 44 * (scaleFactor / 1.4);
          const badgeH = 15 * (scaleFactor / 1.4);
          const badgeY = -boxH / 2 - badgeH - 3;
          ctx.fillStyle = 'rgba(234, 88, 12, 0.92)';
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(-badgeW / 2, badgeY, badgeW, badgeH, 3);
          } else {
            ctx.rect(-badgeW / 2, badgeY, badgeW, badgeH);
          }
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = `600 ${Math.max(8.5, Math.round(9 * (scaleFactor / 1.4)))}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('MOVE', 0, badgeY + badgeH / 2);

          ctx.restore();
        }
      } else if (wmType === 'image') {
        if (!wmImgElement || !wmImgElement.naturalWidth) return;

        const cx = canvasW * wmImgRelX;
        const cy = canvasH * wmImgRelY;

        const baseImgW = canvasW * (wmImgScale / 100);
        const aspect = wmImgElement.naturalHeight / wmImgElement.naturalWidth;
        const imgW = baseImgW;
        const imgH = baseImgW * aspect;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((-wmImgRotation * Math.PI) / 180);
        ctx.globalAlpha = wmImgOpacity;
        ctx.drawImage(wmImgElement, -imgW / 2, -imgH / 2, imgW, imgH);
        ctx.restore();

        // Subtle Selection Outline for image
        if (isWmSelected || isDraggingWm) {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate((-wmImgRotation * Math.PI) / 180);

          const pad = 6 * (scaleFactor / 1.4);
          const boxW = imgW + pad * 2;
          const boxH = imgH + pad * 2;

          ctx.strokeStyle = '#ea580c';
          ctx.lineWidth = Math.max(1.2, 1.5 * (scaleFactor / 1.4));
          ctx.setLineDash([5 * (scaleFactor / 1.4), 4 * (scaleFactor / 1.4)]);
          ctx.strokeRect(-boxW / 2, -boxH / 2, boxW, boxH);

          ctx.setLineDash([]);
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#ea580c';
          ctx.lineWidth = 1.5;
          const dotR = 3.5 * (scaleFactor / 1.4);
          const corners = [
            [-boxW / 2, -boxH / 2],
            [boxW / 2, -boxH / 2],
            [boxW / 2, boxH / 2],
            [-boxW / 2, boxH / 2]
          ];
          for (const [ptX, ptY] of corners) {
            ctx.beginPath();
            ctx.arc(ptX, ptY, dotR, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }

          ctx.restore();
        }
      }
    }

    function drawCanvasPageNumber(ctx, canvasW, canvasH, scaleFactor) {
      if (!numEnabled) return;
      if (!isPageInTargetRange(pdfCurrentPage, numTargetMode, numCustomRange)) return;

      const pageStr = formatPageNumber(pdfCurrentPage - 1, pdfTotalPages, numFormat, numStart);
      const fontSizePx = Math.max(10, Math.round(numSize * scaleFactor));
      const marginPx = Math.round(numMargin * scaleFactor);

      ctx.save();
      ctx.font = `600 ${fontSizePx}px sans-serif`;
      ctx.fillStyle = numColor;
      ctx.globalAlpha = 0.90;

      let x = canvasW / 2;
      let align = 'center';
      if (numPosH === 'left') {
        x = marginPx;
        align = 'left';
      } else if (numPosH === 'right') {
        x = canvasW - marginPx;
        align = 'right';
      }

      let y = canvasH - marginPx;
      let baseline = 'bottom';
      if (numPosV === 'top') {
        y = marginPx + fontSizePx;
        baseline = 'bottom';
      }

      ctx.textAlign = align;
      ctx.textBaseline = baseline;
      ctx.fillText(pageStr, x, y);
      ctx.restore();
    }

    async function applyAndDownloadPdf() {
      if (!originalPdfBytes) {
        showToast('Please select or upload a PDF document first.', 'error');
        return;
      }

      if (wmType === 'none' && !numEnabled) {
        showToast('Please enable a watermark or page numbers before exporting.', 'warning');
        return;
      }

      // Validate custom ranges
      if (wmType !== 'none' && wmTargetMode === 'custom') {
        const wmRangeCheck = parsePageRanges(wmCustomRange, pdfTotalPages);
        if (!wmRangeCheck.valid) {
          showToast(`Watermark Range Error: ${wmRangeCheck.error}`, 'error');
          document.getElementById('wm-custom-range-input')?.focus();
          return;
        }
      }

      if (numEnabled && numTargetMode === 'custom') {
        const numRangeCheck = parsePageRanges(numCustomRange, pdfTotalPages);
        if (!numRangeCheck.valid) {
          showToast(`Page Numbers Range Error: ${numRangeCheck.error}`, 'error');
          document.getElementById('wm-num-custom-range-input')?.focus();
          return;
        }
      }

      if (wmType === 'image' && !wmImgBytes) {
        showToast('Please upload a watermark image or switch to Text Watermark.', 'warning');
        return;
      }

      const applyBtn = document.getElementById('wm-btn-apply-download');
      const statusPill = document.getElementById('wm-process-status');
      const statusText = document.getElementById('wm-status-text');

      try {
        if (applyBtn) applyBtn.disabled = true;
        if (statusPill) statusPill.style.display = 'block';
        if (statusText) statusText.textContent = 'Parsing and initializing PDF document...';

        if (!window.PDFLib) {
          throw new Error('PDF processing library (pdf-lib) is not loaded.');
        }

        const outDoc = await window.PDFLib.PDFDocument.load(originalPdfBytes);
        const pages = outDoc.getPages();
        const total = pages.length;

        // Embed font for text watermark
        let wmFont = null;
        if (wmType === 'text') {
          const fontMap = {
            'HelveticaBold': window.PDFLib.StandardFonts.HelveticaBold,
            'Helvetica': window.PDFLib.StandardFonts.Helvetica,
            'TimesRomanBold': window.PDFLib.StandardFonts.TimesRomanBold,
            'TimesRoman': window.PDFLib.StandardFonts.TimesRoman,
            'CourierBold': window.PDFLib.StandardFonts.CourierBold
          };
          wmFont = await outDoc.embedFont(fontMap[wmFontFamily] || window.PDFLib.StandardFonts.HelveticaBold);
        }

        // Embed watermark image if active
        let embeddedImg = null;
        if (wmType === 'image' && wmImgBytes) {
          if (wmImgFormat === 'jpg') {
            embeddedImg = await outDoc.embedJpg(wmImgBytes);
          } else {
            embeddedImg = await outDoc.embedPng(wmImgBytes);
          }
        }

        // Embed font for page numbers
        const numFont = await outDoc.embedFont(window.PDFLib.StandardFonts.Helvetica);

        // Precompute RGB colors
        const wmRgbColor = hexToRgb01(wmTextColor);
        const numRgbColor = hexToRgb01(numColor);

        for (let p = 0; p < total; p++) {
          const pageNum = p + 1;
          const page = pages[p];
          if (statusText) statusText.textContent = `Stamping page ${pageNum} of ${total}...`;

          const rot = (page.getRotation().angle || 0) % 360;
          const pw = page.getWidth();
          const ph = page.getHeight();

          // 1. Apply Watermark (if in target pages)
          if (wmType !== 'none' && isPageInTargetRange(pageNum, wmTargetMode, wmCustomRange)) {
            if (wmType === 'text' && wmFont && wmText.trim()) {
              const text = wmText.trim();
              const textWidth = wmFont.widthOfTextAtSize(text, wmFontSize);
              const textHeight = wmFont.heightAtSize(wmFontSize);

              const cx = pw * wmRelX;
              const cy = ph * (1 - wmRelY);

              const thetaRad = (wmRotation * Math.PI) / 180;
              const rx = (textWidth / 2) * Math.cos(thetaRad) - (textHeight / 2) * Math.sin(thetaRad);
              const ry = (textWidth / 2) * Math.sin(thetaRad) + (textHeight / 2) * Math.cos(thetaRad);

              page.drawText(text, {
                x: cx - rx,
                y: cy - ry,
                size: wmFontSize,
                font: wmFont,
                color: window.PDFLib.rgb(wmRgbColor.r, wmRgbColor.g, wmRgbColor.b),
                opacity: wmOpacity,
                rotate: window.PDFLib.degrees(wmRotation)
              });
            } else if (wmType === 'image' && embeddedImg) {
              const baseImgW = pw * (wmImgScale / 100);
              const aspect = embeddedImg.height / embeddedImg.width;
              const imgW = baseImgW;
              const imgH = baseImgW * aspect;

              const cx = pw * wmImgRelX;
              const cy = ph * (1 - wmImgRelY);

              const thetaRad = (wmImgRotation * Math.PI) / 180;
              const rx = (imgW / 2) * Math.cos(thetaRad) - (imgH / 2) * Math.sin(thetaRad);
              const ry = (imgW / 2) * Math.sin(thetaRad) + (imgH / 2) * Math.cos(thetaRad);

              page.drawImage(embeddedImg, {
                x: cx - rx,
                y: cy - ry,
                width: imgW,
                height: imgH,
                opacity: wmImgOpacity,
                rotate: window.PDFLib.degrees(wmImgRotation)
              });
            }
          }

          // 2. Apply Page Numbers (if in target pages)
          if (numEnabled && isPageInTargetRange(pageNum, numTargetMode, numCustomRange)) {
            const pageStr = formatPageNumber(p, total, numFormat, numStart);
            const numTextWidth = numFont.widthOfTextAtSize(pageStr, numSize);
            const numTextHeight = numFont.heightAtSize(numSize);

            let nx = (pw - numTextWidth) / 2;
            if (numPosH === 'left') nx = numMargin;
            else if (numPosH === 'right') nx = pw - numMargin - numTextWidth;

            let ny = numMargin;
            if (numPosV === 'top') ny = ph - numMargin - numTextHeight;

            page.drawText(pageStr, {
              x: nx,
              y: ny,
              size: numSize,
              font: numFont,
              color: window.PDFLib.rgb(numRgbColor.r, numRgbColor.g, numRgbColor.b),
              opacity: 0.90
            });
          }
        }

        if (statusText) statusText.textContent = 'Serializing watermarked document...';
        const modifiedBytes = await outDoc.save();
        const blob = new Blob([modifiedBytes], { type: 'application/pdf' });
        const outName = `${originalFileName}-watermarked.pdf`;

        triggerDownload(blob, outName);
        showToast(`Watermarked PDF successfully generated! (${total} ${total === 1 ? 'page' : 'pages'})`, 'success');
      } catch (err) {
        console.error('Watermark/page-num export error:', err);
        showToast('Failed to apply watermark or page numbers: ' + (err.message || 'Processing error'), 'error');
      } finally {
        if (applyBtn) applyBtn.disabled = false;
        if (statusPill) statusPill.style.display = 'none';
      }
    }

    renderBaseLayout();
  }


  // --- 6.15 Coming Soon Information Modal (Crisp vector blueprint icon) ---
  function renderComingSoonWorkbench(tool) {
    dom.modalBody.innerHTML = `
      <div class="coming-soon-box">
        <div class="coming-soon-icon-wrap">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <path d="M7 8L10 11L7 14"></path>
            <line x1="12" y1="14" x2="16" y2="14"></line>
          </svg>
        </div>
        <h4>${escapeHtml(tool.title)} is in Development</h4>
        <p>
          We are engineering a native, 100% client-side parser engine for this utility so your confidential documents never leave your local device.
        </p>
        <div class="privacy-pill-container">
          <div class="privacy-assurance-pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Strict Zero-Upload Policy Maintained</span>
          </div>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" id="btn-close-coming-soon">Close Window</button>
      </div>
    `;

    document.getElementById('btn-close-coming-soon').addEventListener('click', closeToolModal);
  }

  // --- 6.18 Verify PDF Signature Functional Implementation ---
  function parseAndVerifyPdfSignatures(pdfBytes) {
    if (!pdfBytes || pdfBytes.length === 0) return [];
    if (typeof forge === 'undefined' || !forge.pkcs7 || !forge.asn1) {
      console.warn('Forge cryptographic library not loaded.');
      return [];
    }

    function uint8ToBinaryString(uint8) {
      let binary = '';
      const chunkSize = 32768;
      for (let i = 0; i < uint8.length; i += chunkSize) {
        const chunk = uint8.subarray(i, i + chunkSize);
        binary += String.fromCharCode.apply(null, chunk);
      }
      return binary;
    }

    function trimDer(derBytes) {
      if (!derBytes || derBytes.length < 2) return derBytes;
      const b1 = derBytes.charCodeAt(1);
      let headerLen = 2;
      let contentLen = 0;
      if (b1 < 0x80) {
        contentLen = b1;
        headerLen = 2;
      } else if (b1 === 0x81) {
        contentLen = derBytes.charCodeAt(2);
        headerLen = 3;
      } else if (b1 === 0x82) {
        contentLen = (derBytes.charCodeAt(2) << 8) | derBytes.charCodeAt(3);
        headerLen = 4;
      } else if (b1 === 0x83) {
        contentLen = (derBytes.charCodeAt(2) << 16) | (derBytes.charCodeAt(3) << 8) | derBytes.charCodeAt(4);
        headerLen = 5;
      } else if (b1 === 0x84) {
        contentLen = (derBytes.charCodeAt(2) * 0x1000000) + (derBytes.charCodeAt(3) << 16) + (derBytes.charCodeAt(4) << 8) + derBytes.charCodeAt(5);
        headerLen = 6;
      }
      return derBytes.slice(0, headerLen + contentLen);
    }

    const totalLength = pdfBytes.length;
    const binaryText = uint8ToBinaryString(pdfBytes);
    const byteRangeRegex = /\/ByteRange\s*\[\s*(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*\]/g;
    const results = [];
    let match;

    while ((match = byteRangeRegex.exec(binaryText)) !== null) {
      const o1 = parseInt(match[1], 10);
      const l1 = parseInt(match[2], 10);
      const o2 = parseInt(match[3], 10);
      const l2 = parseInt(match[4], 10);

      // Extract /Contents hex from gap between o1+l1 and o2
      const gap = binaryText.substring(o1 + l1, o2);
      let hexContents = '';
      const bracketMatch = gap.match(/<([0-9a-fA-F\s]+)>/);
      if (bracketMatch) {
        hexContents = bracketMatch[1].replace(/\s+/g, '');
      } else {
        const nearby = binaryText.substring(Math.max(0, o1 + l1 - 100), Math.min(binaryText.length, o2 + 100));
        const nearbyMatch = nearby.match(/\/Contents\s*<([0-9a-fA-F\s]+)>/);
        if (nearbyMatch) {
          hexContents = nearbyMatch[1].replace(/\s+/g, '');
        } else {
          hexContents = gap.replace(/[^0-9a-fA-F]/g, '');
        }
      }

      if (!hexContents) {
        results.push({
          status: 'error',
          verdict: 'INVALID',
          verdictSummary: 'Digital signature dictionary found, but signature content bytes are missing or corrupted.'
        });
        continue;
      }

      const rawDerBytes = forge.util.hexToBytes(hexContents);
      const trimmedDerBytes = trimDer(rawDerBytes);

      let asn1Obj;
      try {
        asn1Obj = forge.asn1.fromDer(trimmedDerBytes);
      } catch (err) {
        results.push({
          status: 'error',
          verdict: 'INVALID',
          verdictSummary: 'Failed to parse PKCS#7 ASN.1 structure: ' + err.message
        });
        continue;
      }

      let p7Parsed;
      try {
        p7Parsed = forge.pkcs7.messageFromAsn1(asn1Obj);
      } catch (err) {
        results.push({
          status: 'error',
          verdict: 'INVALID',
          verdictSummary: 'Failed to parse PKCS#7 SignedData payload: ' + err.message
        });
        continue;
      }

      // Extract dictionary metadata from region surrounding signature
      const dictRegion = binaryText.substring(Math.max(0, o1 + l1 - 600), Math.min(binaryText.length, o2 + 600));
      const reasonMatch = dictRegion.match(/\/Reason\s*(?:\(([^)]*)\)|<([0-9a-fA-F]*)>)/);
      const locationMatch = dictRegion.match(/\/Location\s*(?:\(([^)]*)\)|<([0-9a-fA-F]*)>)/);
      const contactMatch = dictRegion.match(/\/ContactInfo\s*(?:\(([^)]*)\)|<([0-9a-fA-F]*)>)/);
      const dateMatch = dictRegion.match(/\/M\s*(?:\(([^)]*)\)|<([0-9a-fA-F]*)>)/);
      const nameMatch = dictRegion.match(/\/Name\s*(?:\(([^)]*)\)|<([0-9a-fA-F]*)>)/);
      const subFilterMatch = dictRegion.match(/\/SubFilter\s*\/([a-zA-Z0-9_.-]+)/);

      // Signer Certificate Extraction
      const certificates = p7Parsed.certificates || [];
      const signerCert = certificates[0] || null;

      let signerCertDetails = null;
      let isSelfSigned = false;
      let isExpired = false;
      let isNotYetValid = false;

      if (signerCert) {
        const getVal = (entity, fieldName) => {
          if (!entity) return null;
          const f = entity.getField(fieldName);
          return f ? f.value : null;
        };

        const subjectCN = getVal(signerCert.subject, 'CN') || 'Signer Certificate';
        const subjectO = getVal(signerCert.subject, 'O');
        const subjectOU = getVal(signerCert.subject, 'OU');
        const subjectC = getVal(signerCert.subject, 'C');
        const subjectST = getVal(signerCert.subject, 'ST');
        const subjectL = getVal(signerCert.subject, 'L');

        const issuerCN = getVal(signerCert.issuer, 'CN') || 'Signer Certificate Authority';
        const issuerO = getVal(signerCert.issuer, 'O');
        const issuerC = getVal(signerCert.issuer, 'C');

        const now = new Date();
        isExpired = now > signerCert.validity.notAfter;
        isNotYetValid = now < signerCert.validity.notBefore;

        try {
          isSelfSigned = signerCert.isIssuer(signerCert);
        } catch (e) {
          isSelfSigned = (subjectCN === issuerCN && (!subjectO || subjectO === issuerO));
        }

        let fingerprintHex = '';
        try {
          fingerprintHex = forge.util.bytesToHex(
            forge.pki.getPublicKeyFingerprint(signerCert.publicKey, {
              type: 'SubjectPublicKeyInfo',
              md: forge.md.sha256.create()
            })
          );
        } catch (e) {}

        signerCertDetails = {
          subjectCN,
          subjectO,
          subjectOU,
          subjectC,
          subjectST,
          subjectL,
          issuerCN,
          issuerO,
          issuerC,
          validFrom: signerCert.validity.notBefore ? signerCert.validity.notBefore.toISOString() : null,
          validTo: signerCert.validity.notAfter ? signerCert.validity.notAfter.toISOString() : null,
          serialNumber: signerCert.serialNumber || 'N/A',
          isSelfSigned,
          isExpired,
          isNotYetValid,
          fingerprintSha256: fingerprintHex
        };
      }

      // Check ByteRange Coverage
      const isFullFile = (o2 + l2 === totalLength);
      const bytesAppended = Math.max(0, totalLength - (o2 + l2));

      // Authenticated Attributes & Digest Checking
      const rawCapture = p7Parsed.rawCapture;
      if (!rawCapture || !rawCapture.authenticatedAttributes) {
        results.push({
          status: 'invalid',
          verdict: 'INVALID',
          verdictSummary: 'Missing authenticatedAttributes in PKCS#7 signature structure.'
        });
        continue;
      }

      // Determine digest algorithm
      let digestAlgName = 'SHA-256';
      let digestMd = forge.md.sha256.create();
      if (rawCapture.digestAlgorithm) {
        try {
          const digestAlgorithmOid = forge.asn1.derToOid(rawCapture.digestAlgorithm);
          if (digestAlgorithmOid === forge.pki.oids.sha1) {
            digestMd = forge.md.sha1.create();
            digestAlgName = 'SHA-1';
          } else if (digestAlgorithmOid === forge.pki.oids.sha384) {
            digestMd = forge.md.sha384.create();
            digestAlgName = 'SHA-384';
          } else if (digestAlgorithmOid === forge.pki.oids.sha512) {
            digestMd = forge.md.sha512.create();
            digestAlgName = 'SHA-512';
          }
        } catch (e) {}
      }

      // Calculate hash over signed byte ranges
      const c1 = pdfBytes.subarray(o1, o1 + l1);
      const c2 = pdfBytes.subarray(o2, o2 + l2);
      const c1Str = uint8ToBinaryString(c1);
      const c2Str = uint8ToBinaryString(c2);

      digestMd.update(c1Str);
      digestMd.update(c2Str);
      const actualDigest = digestMd.digest().bytes();

      // Extract messageDigest and signingTime from authenticatedAttributes
      let embeddedDigest = null;
      let signingTime = null;
      for (const attr of rawCapture.authenticatedAttributes) {
        const attrOid = forge.asn1.derToOid(attr.value[0].value);
        if (attrOid === forge.pki.oids.messageDigest) {
          embeddedDigest = attr.value[1].value[0].value;
        } else if (attrOid === forge.pki.oids.signingTime) {
          try {
            signingTime = forge.asn1.utcTimeToDate(attr.value[1].value[0].value);
          } catch (e) {
            try {
              signingTime = forge.asn1.generalizedTimeToDate(attr.value[1].value[0].value);
            } catch (e2) {}
          }
        }
      }

      const digestMatch = (actualDigest === embeddedDigest);

      // Verify cryptographic signature over authenticatedAttributes
      let signatureValid = false;
      let sigError = null;
      if (signerCert && rawCapture.authenticatedAttributes && rawCapture.signature) {
        try {
          const attrsSetAsn1 = {
            tagClass: forge.asn1.Class.UNIVERSAL,
            type: forge.asn1.Type.SET,
            constructed: true,
            composed: true,
            value: rawCapture.authenticatedAttributes
          };
          const attrsDer = forge.asn1.toDer(attrsSetAsn1).getBytes();
          const attrsMd = digestAlgName === 'SHA-1' ? forge.md.sha1.create() :
                          digestAlgName === 'SHA-384' ? forge.md.sha384.create() :
                          digestAlgName === 'SHA-512' ? forge.md.sha512.create() :
                          forge.md.sha256.create();
          attrsMd.update(attrsDer);

          signatureValid = signerCert.publicKey.verify(attrsMd.digest().bytes(), rawCapture.signature);
        } catch (e) {
          sigError = e.message;
          signatureValid = false;
        }
      }

      // Determine verdict
      let verdict = 'VALID';
      let verdictSummary = '';

      if (!digestMatch) {
        verdict = 'INVALID';
        verdictSummary = 'Document content has been tampered with or modified. Cryptographic digest does not match.';
      } else if (!signatureValid) {
        verdict = 'INVALID';
        verdictSummary = 'Cryptographic signature is invalid. Public key verification failed.';
      } else if (!isFullFile) {
        verdict = 'MODIFIED_AFTER_SIGNING';
        verdictSummary = `Document was signed correctly, but ${bytesAppended.toLocaleString()} bytes were appended after signing (incremental update or post-signing modification).`;
      } else if (signerCertDetails && signerCertDetails.isSelfSigned) {
        verdict = 'UNTRUSTED_ROOT';
        verdictSummary = 'Cryptographic signature and document integrity are mathematically valid, but the certificate is self-signed or not anchored in a trusted system root store.';
      } else {
        verdict = 'VALID';
        verdictSummary = 'Cryptographic signature and document integrity are fully valid. Document has not been modified since signing.';
      }

      results.push({
        status: 'ok',
        byteRange: { o1, l1, o2, l2, totalLength, isFullFile, bytesAppended },
        metadata: {
          reason: reasonMatch ? (reasonMatch[1] || reasonMatch[2]) : null,
          location: locationMatch ? (locationMatch[1] || locationMatch[2]) : null,
          contactInfo: contactMatch ? (contactMatch[1] || contactMatch[2]) : null,
          dateStr: dateMatch ? (dateMatch[1] || dateMatch[2]) : null,
          name: nameMatch ? (nameMatch[1] || nameMatch[2]) : null,
          subFilter: subFilterMatch ? subFilterMatch[1] : 'adbe.pkcs7.detached',
          signingTime: signingTime ? signingTime.toISOString() : null
        },
        signer: signerCertDetails,
        crypto: {
          digestAlgorithm: digestAlgName,
          actualDigestHex: forge.util.bytesToHex(actualDigest),
          embeddedDigestHex: embeddedDigest ? forge.util.bytesToHex(embeddedDigest) : null,
          digestMatch,
          signatureValid,
          sigError
        },
        verdict,
        verdictSummary
      });
    }

    return results;
  }

  function renderVerifyPdfSignatureWorkbench() {
    let currentFile = null;
    let currentPdfBytes = null;
    let pdfDoc = null;
    let pdfTotalPages = 1;
    let currentPageNum = 1;
    let currentScale = 1.0;
    let currentRenderTask = null;
    let verificationResults = [];
    let activeSigIndex = 0;

    currentWorkbenchCleanup = function() {
      if (currentRenderTask) {
        try { currentRenderTask.cancel(); } catch (e) {}
        currentRenderTask = null;
      }
      currentFile = null;
      currentPdfBytes = null;
      pdfDoc = null;
      verificationResults = [];
    };

    function renderInitialDropzone() {
      dom.modalBody.innerHTML = `
        <div class="workbench-container verify-sig-workbench-root">
          ${getOptionBPrivacyBannerHTML(
            'Client-Side Digital Signature Verification',
            'Your PDF document is inspected and cryptographically verified 100% locally in your web browser. No document bytes, keys, or signature payloads are ever transmitted to any server.'
          )}

          ${getOptionBImportHTML({
            containerId: 'verify-sig-import-container',
            dropzoneId: 'verify-sig-dropzone',
            fileInputId: 'verify-sig-file-input',
            browseBtnId: 'verify-sig-browse-btn',
            fileTypeLabel: 'PDF',
            formatHint: 'Supports single or multi-page PDF documents up to 25 MB',
            accept: '.pdf,application/pdf',
            badgeText: 'PDF',
            badgeColor: '#059669',
            privacyChecklist: [
              '100% In-Browser Cryptographic Verification',
              'Inspects X.509 Signer Certificates & Hashes',
              'Detects Post-Signing Modifications & Tampering'
            ]
          })}
        </div>
      `;

      initOptionBImportHandlers({
        dropzoneId: 'verify-sig-dropzone',
        fileInputId: 'verify-sig-file-input',
        browseBtnId: 'verify-sig-browse-btn',
        onFilesSelected: (files) => {
          if (!files || files.length === 0) return;
          handleFileSelected(files[0]);
        }
      });
    }

    function handleFileSelected(file) {
      if (!file) return;

      if (!/\.pdf$/i.test(file.name) && file.type !== 'application/pdf') {
        showToast('Unsupported file type. Please select a valid PDF document.', 'error');
        return;
      }

      if (file.size === 0) {
        showToast('The selected file is empty (0 bytes). Please choose a valid PDF.', 'error');
        return;
      }

      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}). Please select a file under 25 MB.`, 'error');
        return;
      }

      currentFile = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          currentPdfBytes = new Uint8Array(e.target.result);

          // Run cryptographic verification
          verificationResults = parseAndVerifyPdfSignatures(currentPdfBytes);
          activeSigIndex = 0;

          // Load PDF with PDF.js for preview
          const loadingTask = pdfjsLib.getDocument({ data: currentPdfBytes });
          pdfDoc = await loadingTask.promise;
          pdfTotalPages = pdfDoc.numPages || 1;
          currentPageNum = 1;
          currentScale = 1.0;

          renderVerificationResultsWorkbench();
        } catch (err) {
          console.error('Error loading PDF for signature verification:', err);
          showToast('Failed to parse PDF document. File may be corrupt or encrypted.', 'error');
          renderInitialDropzone();
        }
      };
      reader.onerror = () => {
        showToast('Error reading file from disk.', 'error');
      };
      reader.readAsArrayBuffer(file);
    }

    function renderVerificationResultsWorkbench() {
      const sigCount = verificationResults.length;
      const activeSig = sigCount > 0 ? verificationResults[activeSigIndex] : null;

      // Status pill & badge for header
      let headerStatusBadge = '';
      if (sigCount === 0) {
        headerStatusBadge = '<span class="status-dot-gray"></span>No Digital Signatures';
      } else {
        const allValid = verificationResults.every(s => s.verdict === 'VALID');
        const anyInvalid = verificationResults.some(s => s.verdict === 'INVALID' || s.verdict === 'MODIFIED_AFTER_SIGNING');
        if (allValid) {
          headerStatusBadge = `<span class="status-dot-green"></span>${sigCount} Cryptographically Valid Signature${sigCount > 1 ? 's' : ''}`;
        } else if (anyInvalid) {
          headerStatusBadge = `<span class="status-dot-red"></span>${sigCount} Signature${sigCount > 1 ? 's' : ''} (Tampering / Modification Detected)`;
        } else {
          headerStatusBadge = `<span class="status-dot-orange"></span>${sigCount} Signature${sigCount > 1 ? 's' : ''} (Untrusted Root / Self-Signed)`;
        }
      }

      // Generate Tabs if multiple signatures
      let tabsHtml = '';
      if (sigCount > 1) {
        tabsHtml = `
          <div class="verify-sig-tabs" id="verify-sig-tabs" role="tablist">
            ${verificationResults.map((s, idx) => {
              const pillClass = s.verdict === 'VALID' ? 'verify-pill-valid' :
                                s.verdict === 'UNTRUSTED_ROOT' ? 'verify-pill-untrusted' :
                                'verify-pill-invalid';
              const label = s.signer && s.signer.subjectCN ? s.signer.subjectCN : `Signer #${idx + 1}`;
              return `
                <button type="button" class="verify-sig-tab ${idx === activeSigIndex ? 'active' : ''}" data-sig-idx="${idx}" role="tab" aria-selected="${idx === activeSigIndex ? 'true' : 'false'}">
                  ${escapeHtml(label)}
                  <span class="verify-verdict-pill ${pillClass}" style="margin-left: 0.35rem;">${s.verdict}</span>
                </button>
              `;
            }).join('')}
          </div>
        `;
      }

      // Generate Active Verdict Card HTML
      let verdictHtml = '';
      if (sigCount === 0) {
        verdictHtml = `
          <div class="verify-verdict-card verify-verdict-none">
            <div class="verify-verdict-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div class="verify-verdict-content">
              <div class="verify-verdict-header">
                <div class="verify-verdict-title">No Digital Signatures Found</div>
                <span class="verify-verdict-pill verify-pill-none">Unsigned</span>
              </div>
              <div class="verify-verdict-desc">
                This document does not contain any digital signature dictionary (<code>/Type /Sig</code> or <code>/ByteRange</code>).
                If this document contains a visual stamp or scanned handwritten signature, note that visual stamps do not provide cryptographic authenticity, hash verification, or tamper resistance.
              </div>
            </div>
          </div>
        `;
      } else if (activeSig) {
        const v = activeSig.verdict;
        let cardClass = 'verify-verdict-valid';
        let pillClass = 'verify-pill-valid';
        let iconSvg = `
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        `;
        let titleText = 'Signature Cryptographically Valid';

        if (v === 'UNTRUSTED_ROOT') {
          cardClass = 'verify-verdict-untrusted';
          pillClass = 'verify-pill-untrusted';
          iconSvg = `
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          `;
          titleText = 'Cryptographically Valid (Self-Signed / Untrusted CA)';
        } else if (v === 'MODIFIED_AFTER_SIGNING') {
          cardClass = 'verify-verdict-invalid';
          pillClass = 'verify-pill-invalid';
          iconSvg = `
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          `;
          titleText = 'Document Modified After Signing';
        } else if (v === 'INVALID') {
          cardClass = 'verify-verdict-invalid';
          pillClass = 'verify-pill-invalid';
          iconSvg = `
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          `;
          titleText = 'Signature Invalid / Document Tampered';
        }

        verdictHtml = `
          <div class="verify-verdict-card ${cardClass}">
            <div class="verify-verdict-icon">
              ${iconSvg}
            </div>
            <div class="verify-verdict-content">
              <div class="verify-verdict-header">
                <div class="verify-verdict-title">${titleText}</div>
                <span class="verify-verdict-pill ${pillClass}">${v}</span>
              </div>
              <div class="verify-verdict-desc">
                ${escapeHtml(activeSig.verdictSummary)}
              </div>
            </div>
          </div>
        `;
      }

      // Generate Signer Details Card HTML
      let signerDetailsHtml = '';
      if (activeSig && activeSig.signer) {
        const s = activeSig.signer;
        signerDetailsHtml = `
          <div class="verify-section-card">
            <div class="verify-section-header">
              <div class="verify-section-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Signer & Certificate Information
              </div>
              <span class="${s.isExpired ? 'verify-badge-red' : (s.isSelfSigned ? 'verify-badge-amber' : 'verify-badge-green')}">
                ${s.isExpired ? 'Certificate Expired' : (s.isSelfSigned ? 'Self-Signed' : 'Valid Certificate')}
              </span>
            </div>
            <div class="verify-section-body">
              <div class="verify-kv-row">
                <span class="verify-k">Signer Name (CN):</span>
                <span class="verify-v">${escapeHtml(s.subjectCN)}</span>
              </div>
              ${s.subjectO ? `
              <div class="verify-kv-row">
                <span class="verify-k">Organization:</span>
                <span class="verify-v">${escapeHtml(s.subjectO)}${s.subjectOU ? ` (${escapeHtml(s.subjectOU)})` : ''}</span>
              </div>` : ''}
              ${s.subjectC ? `
              <div class="verify-kv-row">
                <span class="verify-k">Country:</span>
                <span class="verify-v">${escapeHtml(s.subjectC)}</span>
              </div>` : ''}
              <div class="verify-kv-row">
                <span class="verify-k">Certificate Issuer:</span>
                <span class="verify-v">${escapeHtml(s.issuerCN)}${s.issuerO ? ` - ${escapeHtml(s.issuerO)}` : ''}</span>
              </div>
              <div class="verify-kv-row">
                <span class="verify-k">Validity Period:</span>
                <span class="verify-v">${escapeHtml(s.validFrom ? new Date(s.validFrom).toLocaleDateString() : 'N/A')} to ${escapeHtml(s.validTo ? new Date(s.validTo).toLocaleDateString() : 'N/A')}</span>
              </div>
              <div class="verify-kv-row">
                <span class="verify-k">Serial Number:</span>
                <span class="verify-v" style="font-family: monospace; font-size: 0.75rem;">${escapeHtml(s.serialNumber)}</span>
              </div>
              ${s.fingerprintSha256 ? `
              <div class="verify-kv-row" style="flex-direction: column; align-items: stretch; gap: 0.25rem;">
                <span class="verify-k">SHA-256 Public Key Fingerprint:</span>
                <div class="verify-hash-box">${escapeHtml(s.fingerprintSha256)}</div>
              </div>` : ''}
            </div>
          </div>
        `;
      }

      // Generate Cryptographic Integrity Details HTML
      let cryptoDetailsHtml = '';
      if (activeSig && activeSig.crypto) {
        const c = activeSig.crypto;
        const b = activeSig.byteRange;
        const m = activeSig.metadata;

        cryptoDetailsHtml = `
          <div class="verify-section-card">
            <div class="verify-section-header">
              <div class="verify-section-title">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Cryptographic Integrity & Byte Coverage
              </div>
              <span class="${c.digestMatch && c.signatureValid ? 'verify-badge-green' : 'verify-badge-red'}">
                ${c.digestMatch && c.signatureValid ? 'Integrity Confirmed' : 'Verification Failed'}
              </span>
            </div>
            <div class="verify-section-body">
              <div class="verify-kv-row">
                <span class="verify-k">Hash Algorithm:</span>
                <span class="verify-v">${escapeHtml(c.digestAlgorithm)}</span>
              </div>
              <div class="verify-kv-row">
                <span class="verify-k">Document Byte Coverage:</span>
                <span class="verify-v">
                  ${b.isFullFile ? '<span class="verify-badge-green">100% Full Document</span>' : `<span class="verify-badge-amber">Partial (${b.bytesAppended.toLocaleString()} B Appended)</span>`}
                </span>
              </div>
              <div class="verify-kv-row">
                <span class="verify-k">Byte Range Array:</span>
                <span class="verify-v" style="font-family: monospace; font-size: 0.75rem;">[${b.o1}, ${b.l1}, ${b.o2}, ${b.l2}]</span>
              </div>
              <div class="verify-kv-row">
                <span class="verify-k">Message Digest Match:</span>
                <span class="verify-v">${c.digestMatch ? '<span style="color:#15803d; font-weight:700;">✓ Pass (Exact Match)</span>' : '<span style="color:#b91c1c; font-weight:700;">✗ Hash Mismatch</span>'}</span>
              </div>
              <div class="verify-kv-row">
                <span class="verify-k">Public Key Math:</span>
                <span class="verify-v">${c.signatureValid ? '<span style="color:#15803d; font-weight:700;">✓ Valid RSA/ECDSA Signature</span>' : '<span style="color:#b91c1c; font-weight:700;">✗ Verification Failed</span>'}</span>
              </div>
              ${m.signingTime ? `
              <div class="verify-kv-row">
                <span class="verify-k">Signing Timestamp:</span>
                <span class="verify-v">${escapeHtml(new Date(m.signingTime).toLocaleString())}</span>
              </div>` : (m.dateStr ? `
              <div class="verify-kv-row">
                <span class="verify-k">Signing Date String:</span>
                <span class="verify-v">${escapeHtml(m.dateStr)}</span>
              </div>` : '')}
              ${m.reason ? `
              <div class="verify-kv-row">
                <span class="verify-k">Signature Reason:</span>
                <span class="verify-v">${escapeHtml(m.reason)}</span>
              </div>` : ''}
              ${m.location ? `
              <div class="verify-kv-row">
                <span class="verify-k">Signature Location:</span>
                <span class="verify-v">${escapeHtml(m.location)}</span>
              </div>` : ''}
              <div class="verify-kv-row" style="flex-direction: column; align-items: stretch; gap: 0.25rem;">
                <span class="verify-k">Computed ByteRange Digest (${escapeHtml(c.digestAlgorithm)}):</span>
                <div class="verify-hash-box">${escapeHtml(c.actualDigestHex)}</div>
              </div>
              ${c.embeddedDigestHex ? `
              <div class="verify-kv-row" style="flex-direction: column; align-items: stretch; gap: 0.25rem;">
                <span class="verify-k">Embedded Signature Digest:</span>
                <div class="verify-hash-box">${escapeHtml(c.embeddedDigestHex)}</div>
              </div>` : ''}
            </div>
          </div>
        `;
      }

      // Educational Note Box
      const trustNoteHtml = `
        <div class="verify-notice-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:2px;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <div>
            <strong>In-Browser Cryptographic Trust Model:</strong>
            Our client-side engine calculates raw SHA hashes across PDF byte ranges and verifies RSA public-key signatures directly against the embedded X.509 certificate.
            Mathematical validity confirms document integrity and detects any tampering. Institutional or legal acceptance additionally depends on whether the signing certificate is anchored in your organization's or operating system's trusted root authority store.
          </div>
        </div>
      `;

      dom.modalBody.innerHTML = `
        <div class="workbench-container verify-sig-workbench-root">
          <!-- Top File Bar -->
          <div class="verify-sig-file-bar">
            <div class="verify-sig-file-meta">
              <div class="verify-sig-file-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 11c3 0 4 1 4 3 0 3-2.5 4.5-4 5.5-1.5-1-4-2.5-4-5.5 0-2 1-3 4-3z"></path>
                  <polyline points="10.5 14 11.5 15.2 13.5 13"></polyline>
                </svg>
              </div>
              <div class="verify-sig-file-details">
                <div class="verify-sig-file-name" title="${escapeHtml(currentFile.name)}">${escapeHtml(currentFile.name)}</div>
                <div class="verify-sig-file-sub">
                  <span>${formatBytes(currentFile.size)}</span>
                  <span>•</span>
                  <span>${pdfTotalPages} Page${pdfTotalPages > 1 ? 's' : ''}</span>
                  <span>•</span>
                  <span>${headerStatusBadge}</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-verify-change-file">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Change Document
            </button>
          </div>

          <!-- Dual Column Grid -->
          <div class="verify-sig-grid">
            <!-- Left Column: PDF Preview -->
            <div class="verify-sig-preview-card">
              <div class="verify-sig-preview-toolbar">
                <div class="verify-sig-preview-nav">
                  <button type="button" class="btn btn-secondary btn-xs" id="btn-verify-prev-page" title="Previous Page" ${currentPageNum <= 1 ? 'disabled' : ''}>
                    ◀
                  </button>
                  <span class="verify-sig-page-indicator" id="verify-page-indicator">
                    Page ${currentPageNum} of ${pdfTotalPages}
                  </span>
                  <button type="button" class="btn btn-secondary btn-xs" id="btn-verify-next-page" title="Next Page" ${currentPageNum >= pdfTotalPages ? 'disabled' : ''}>
                    ▶
                  </button>
                </div>
                <div class="verify-sig-preview-zoom">
                  <button type="button" class="btn btn-secondary btn-xs" id="btn-verify-zoom-out" title="Zoom Out">−</button>
                  <button type="button" class="btn btn-secondary btn-xs" id="btn-verify-zoom-reset" title="Fit 100%">100%</button>
                  <button type="button" class="btn btn-secondary btn-xs" id="btn-verify-zoom-in" title="Zoom In">+</button>
                </div>
              </div>
              <div class="verify-sig-viewport" id="verify-sig-viewport">
                <canvas id="verify-sig-canvas" class="verify-sig-canvas"></canvas>
              </div>
            </div>

            <!-- Right Column: Verification Results -->
            <div class="verify-sig-results-col">
              ${tabsHtml}
              ${verdictHtml}
              ${signerDetailsHtml}
              ${cryptoDetailsHtml}
              ${trustNoteHtml}

              <!-- Actions -->
              <div class="verify-actions-bar">
                ${sigCount > 0 ? `
                <button type="button" class="btn btn-primary btn-sm" id="btn-verify-download-report">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Verification Report (JSON)
                </button>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;

      // Setup Event Listeners
      const changeBtn = document.getElementById('btn-verify-change-file');
      if (changeBtn) changeBtn.addEventListener('click', renderInitialDropzone);

      const prevBtn = document.getElementById('btn-verify-prev-page');
      const nextBtn = document.getElementById('btn-verify-next-page');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentPageNum > 1) {
            currentPageNum--;
            updatePreviewPage();
          }
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentPageNum < pdfTotalPages) {
            currentPageNum++;
            updatePreviewPage();
          }
        });
      }

      const zoomInBtn = document.getElementById('btn-verify-zoom-in');
      const zoomOutBtn = document.getElementById('btn-verify-zoom-out');
      const zoomResetBtn = document.getElementById('btn-verify-zoom-reset');
      if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
          if (currentScale < 2.5) {
            currentScale += 0.2;
            renderCanvasPage();
          }
        });
      }
      if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
          if (currentScale > 0.5) {
            currentScale -= 0.2;
            renderCanvasPage();
          }
        });
      }
      if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => {
          currentScale = 1.0;
          renderCanvasPage();
        });
      }

      // Tab switcher
      const tabs = document.querySelectorAll('#verify-sig-tabs .verify-sig-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const idx = parseInt(tab.getAttribute('data-sig-idx'), 10);
          if (!isNaN(idx) && idx !== activeSigIndex) {
            activeSigIndex = idx;
            renderVerificationResultsWorkbench();
          }
        });
      });

      // Report download
      const downloadReportBtn = document.getElementById('btn-verify-download-report');
      if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', () => {
          const report = {
            tool: 'AAYAM Innovation Verify PDF Signature',
            documentName: currentFile.name,
            documentSize: currentFile.size,
            verifiedAt: new Date().toISOString(),
            totalSignaturesFound: verificationResults.length,
            signatures: verificationResults
          };
          const jsonStr = JSON.stringify(report, null, 2);
          const blob = new Blob([jsonStr], { type: 'application/json' });
          const outName = `${currentFile.name.replace(/\.pdf$/i, '')}-verification-report.json`;
          triggerDownload(blob, outName);
          showToast('Verification report downloaded.', 'success');
        });
      }

      renderCanvasPage();
    }

    function updatePreviewPage() {
      const pageIndicator = document.getElementById('verify-page-indicator');
      const prevBtn = document.getElementById('btn-verify-prev-page');
      const nextBtn = document.getElementById('btn-verify-next-page');
      if (pageIndicator) pageIndicator.textContent = `Page ${currentPageNum} of ${pdfTotalPages}`;
      if (prevBtn) prevBtn.disabled = (currentPageNum <= 1);
      if (nextBtn) nextBtn.disabled = (currentPageNum >= pdfTotalPages);
      renderCanvasPage();
    }

    function renderCanvasPage() {
      if (!pdfDoc) return;
      if (currentRenderTask) {
        try { currentRenderTask.cancel(); } catch (e) {}
        currentRenderTask = null;
      }

      pdfDoc.getPage(currentPageNum).then(page => {
        const canvas = document.getElementById('verify-sig-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: currentScale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        currentRenderTask = page.render(renderContext);
        currentRenderTask.promise.then(() => {
          currentRenderTask = null;
        }).catch(err => {
          if (err && err.name !== 'RenderingCancelledException') {
            console.warn('PDF preview render error:', err);
          }
        });
      }).catch(err => {
        console.warn('Error fetching page from pdfDoc:', err);
      });
    }

    renderInitialDropzone();
  }

  // --- 6.19 Passport Photo & Print Studio Functional Implementation ---
  function renderPassportPhotoStudioWorkbench() {
    let currentFile = null;
    let imgObj = null;
    let imgWidth = 0;
    let imgHeight = 0;
    let imgObjectUrl = null;

    // Presets definition
    const PRESETS = {
      india_passport: {
        id: 'india_passport',
        name: 'India Passport / Visa / OCI (35 × 45 mm)',
        dimText: '35 mm × 45 mm (3.5 × 4.5 cm)',
        widthMm: 35,
        heightMm: 45,
        aspectRatio: 35 / 45
      },
      us_passport: {
        id: 'us_passport',
        name: 'US Passport / Visa (2 × 2 in)',
        dimText: '51 mm × 51 mm (2 × 2 inches)',
        widthMm: 50.8,
        heightMm: 50.8,
        aspectRatio: 1
      },
      india_stamp: {
        id: 'india_stamp',
        name: 'India Stamp Size (35 × 35 mm)',
        dimText: '35 mm × 35 mm (3.5 × 3.5 cm)',
        widthMm: 35,
        heightMm: 35,
        aspectRatio: 1
      },
      id_card: {
        id: 'id_card',
        name: 'ID Card / License / Japan (30 × 40 mm)',
        dimText: '30 mm × 40 mm (3.0 × 4.0 cm)',
        widthMm: 30,
        heightMm: 40,
        aspectRatio: 30 / 40
      },
      custom: {
        id: 'custom',
        name: 'Custom Dimensions (mm)',
        dimText: 'Custom Size',
        widthMm: 35,
        heightMm: 45,
        aspectRatio: 35 / 45
      }
    };

    // State — DEFAULT: India Passport Photo 35x45mm (3.5x4.5cm) with plain white background
    let selectedPresetKey = 'india_passport';
    let customWidthMm = 35;
    let customHeightMm = 45;
    let selectedBgColor = '#ffffff';
    let addCuttingBorder = true;
    let showFaceGuide = true;
    let totalCopies = 8;
    let paperOrientation = 'portrait'; // 'portrait' | 'landscape'
    let currentPreviewPage = 1;

    // Interactive crop pan/zoom state
    let panX = 0;
    let panY = 0;
    let scale = 1.0;
    let rotation = 0; // 0, 90, 180, 270

    // Segmentation state & visual update batching
    let segmentedCanvas = null;
    let segmentationSensitivity = 'balanced';
    let isCropRafPending = false;
    let a4UpdateTimer = null;

    // Single photo caching for ultra-fast, zero-shake A4 preview rendering
    let cachedA4PhotoCanvas = null;
    let isCachedA4PhotoDirty = true;
    let isA4RafPending = false;

    currentWorkbenchCleanup = function() {
      if (dom.toolModal) {
        dom.toolModal.classList.remove('modal-passport-open');
      }
      if (a4UpdateTimer) {
        clearTimeout(a4UpdateTimer);
        a4UpdateTimer = null;
      }
      isCropRafPending = false;
      isA4RafPending = false;
      if (imgObjectUrl) {
        try { URL.revokeObjectURL(imgObjectUrl); } catch (e) {}
        imgObjectUrl = null;
      }
      const printIframe = document.getElementById('passport-print-iframe');
      if (printIframe) printIframe.remove();
      currentFile = null;
      imgObj = null;
      segmentedCanvas = null;
      cachedA4PhotoCanvas = null;
      isCachedA4PhotoDirty = true;
    };

    function getCurrentPreset() {
      if (selectedPresetKey === 'custom') {
        const w = Math.max(10, Math.min(customWidthMm || 35, 150));
        const h = Math.max(10, Math.min(customHeightMm || 45, 150));
        return {
          id: 'custom',
          name: 'Custom Dimensions',
          dimText: `${w} mm × ${h} mm (${(w / 10).toFixed(1)} × ${(h / 10).toFixed(1)} cm)`,
          widthMm: w,
          heightMm: h,
          aspectRatio: w / h
        };
      }
      return PRESETS[selectedPresetKey] || PRESETS.india_passport;
    }

    function getCropBoxDimensions() {
      const preset = getCurrentPreset();
      const ar = preset.aspectRatio; // width / height
      let boxW = 165;
      let boxH = Math.round(boxW / ar);

      if (boxH > 215) {
        boxH = 215;
        boxW = Math.round(boxH * ar);
      }
      if (boxW > 215) {
        boxW = 215;
        boxH = Math.round(boxW / ar);
      }
      return { boxW, boxH };
    }

    function renderInitialDropzone() {
      dom.modalBody.innerHTML = `
        <div class="workbench-container passport-workbench-root">
          ${getOptionBPrivacyBannerHTML(
            '100% In-Browser Passport Studio',
            'Your portrait photos are processed, cropped, and laid out 100% locally in your browser memory. No photos are ever uploaded to any cloud server.'
          )}

          ${getOptionBImportHTML({
            containerId: 'passport-import-container',
            dropzoneId: 'passport-dropzone',
            fileInputId: 'passport-file-input',
            browseBtnId: 'passport-browse-btn',
            fileTypeLabel: 'Portrait Photo',
            formatHint: 'Supports JPG, JPEG, PNG, or WebP portrait photos up to 25 MB',
            accept: 'image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp',
            badgeText: 'PHOTO',
            badgeColor: '#4f46e5',
            privacyChecklist: [
              'Accurate Physical Print Dimensions (35 × 45 mm & 2 × 2 in)',
              'Multi-Copy A4 Sheet Layouts with Cutting Guides',
              'Zero Server Uploads & Confidential Processing'
            ]
          })}
        </div>
      `;

      initOptionBImportHandlers({
        dropzoneId: 'passport-dropzone',
        fileInputId: 'passport-file-input',
        browseBtnId: 'passport-browse-btn',
        onFilesSelected: (files) => {
          if (!files || files.length === 0) return;
          handleFileSelected(files[0]);
        }
      });
    }

    // --- Local Edge-Aware Portrait Matting & Segmentation Engine ---
    function runPortraitSegmentation(sensitivity = 'balanced') {
      if (!imgObj) return;

      segmentationSensitivity = sensitivity;

      try {
        const natW = imgWidth || imgObj.naturalWidth || imgObj.width;
        const natH = imgHeight || imgObj.naturalHeight || imgObj.height;

        // Processing canvas — cap max dimension to 800px for high speed (<50ms) without sacrificing boundary quality
        const maxDim = 800;
        let procW = natW;
        let procH = natH;
        if (procW > maxDim || procH > maxDim) {
          if (procW >= procH) {
            procH = Math.round((procH * maxDim) / procW);
            procW = maxDim;
          } else {
            procW = Math.round((procW * maxDim) / procH);
            procH = maxDim;
          }
        }

        const procCvs = document.createElement('canvas');
        procCvs.width = procW;
        procCvs.height = procH;
        const pctx = procCvs.getContext('2d');
        pctx.drawImage(imgObj, 0, 0, procW, procH);

        const imgData = pctx.getImageData(0, 0, procW, procH);
        const data = imgData.data;

        // 1. Sample perimeter background seeds
        let r0 = 0, g0 = 0, b0 = 0, bgCount = 0;
        const topSamplesLimitY = Math.max(3, Math.floor(procH * 0.05));
        for (let y = 0; y < topSamplesLimitY; y++) {
          for (let x = 0; x < procW; x += 3) {
            const idx = (y * procW + x) * 4;
            r0 += data[idx]; g0 += data[idx+1]; b0 += data[idx+2];
            bgCount++;
          }
        }

        // Upper side borders (y < 35% height)
        const sideLimitY = Math.floor(procH * 0.35);
        for (let y = topSamplesLimitY; y < sideLimitY; y += 3) {
          for (let x of [0, 1, 2]) {
            const idx = (y * procW + x) * 4;
            r0 += data[idx]; g0 += data[idx+1]; b0 += data[idx+2];
            bgCount++;
          }
          for (let x of [procW - 3, procW - 2, procW - 1]) {
            const idx = (y * procW + x) * 4;
            r0 += data[idx]; g0 += data[idx+1]; b0 += data[idx+2];
            bgCount++;
          }
        }

        const meanR = bgCount > 0 ? (r0 / bgCount) : 255;
        const meanG = bgCount > 0 ? (g0 / bgCount) : 255;
        const meanB = bgCount > 0 ? (b0 / bgCount) : 255;

        // 2. Sobel Edge Magnitude on Luminance
        const lum = new Float32Array(procW * procH);
        for (let i = 0, p = 0; i < data.length; i += 4, p++) {
          lum[p] = 0.299 * data[i] + 0.587 * data[i+1] + 0.114 * data[i+2];
        }

        const edge = new Float32Array(procW * procH);
        for (let y = 1; y < procH - 1; y++) {
          const yw = y * procW;
          for (let x = 1; x < procW - 1; x++) {
            const p = yw + x;
            const gx = (lum[p - procW + 1] + 2 * lum[p + 1] + lum[p + procW + 1]) -
                       (lum[p - procW - 1] + 2 * lum[p - 1] + lum[p + procW - 1]);
            const gy = (lum[p + procW - 1] + 2 * lum[p + procW] + lum[p + procW + 1]) -
                       (lum[p - procW - 1] + 2 * lum[p - procW] + lum[p + procW - 1]);
            edge[p] = Math.sqrt(gx * gx + gy * gy);
          }
        }

        // Sensitivity parameters
        let colorTolerance = 46;
        let edgeBarrier = 34;
        if (sensitivity === 'gentle') {
          colorTolerance = 34;
          edgeBarrier = 26;
        } else if (sensitivity === 'strong') {
          colorTolerance = 58;
          edgeBarrier = 42;
        }

        // 3. Flood-fill Region Growing
        const isBg = new Uint8Array(procW * procH);
        const queue = new Int32Array(procW * procH);
        let qHead = 0, qTail = 0;

        // Seed with outer border
        for (let x = 0; x < procW; x++) {
          isBg[x] = 1; queue[qTail++] = x;
          isBg[(procH - 1) * procW + x] = 1;
        }
        for (let y = 0; y < procH; y++) {
          isBg[y * procW] = 1; queue[qTail++] = y * procW;
          isBg[y * procW + (procW - 1)] = 1; queue[qTail++] = y * procW + (procW - 1);
        }

        while (qHead < qTail) {
          const curr = queue[qHead++];
          const cx = curr % procW;
          const cy = Math.floor(curr / procW);

          const nbs = [curr - 1, curr + 1, curr - procW, curr + procW];
          for (let i = 0; i < 4; i++) {
            const n = nbs[i];
            if (n < 0 || n >= procW * procH) continue;
            if (isBg[n] !== 0) continue;

            const nx = n % procW;
            const ny = Math.floor(n / procW);
            if (Math.abs(nx - cx) > 1 || Math.abs(ny - cy) > 1) continue;

            // Skin tone protection
            const nIdx = n * 4;
            const nr = data[nIdx], ng = data[nIdx+1], nb = data[nIdx+2];
            const cb = 128 - 0.1687 * nr - 0.3313 * ng + 0.5 * nb;
            const cr = 128 + 0.5 * nr - 0.4187 * ng - 0.0813 * nb;
            const isSkin = (cb >= 70 && cb <= 140 && cr >= 125 && cr <= 188 && nr > ng && (ng > nb || nr - nb > 12));

            // Face / Neck / Torso Protection zone
            if (isSkin && ny > procH * 0.12 && ny < procH * 0.88 && nx > procW * 0.15 && nx < procW * 0.85) {
              continue;
            }

            // Silhouette Edge check
            if (edge[n] > edgeBarrier) {
              continue;
            }

            // Color difference from background model
            const dr = nr - meanR;
            const dg = ng - meanG;
            const db = nb - meanB;
            const dist = Math.sqrt(dr*dr + dg*dg + db*db);

            if (dist < colorTolerance) {
              isBg[n] = 1;
              queue[qTail++] = n;
            }
          }
        }

        // 4. Create Alpha Mask Canvas (procW x procH)
        const maskCvs = document.createElement('canvas');
        maskCvs.width = procW;
        maskCvs.height = procH;
        const mctx = maskCvs.getContext('2d');
        const mImg = mctx.createImageData(procW, procH);
        const mData = mImg.data;

        for (let p = 0; p < procW * procH; p++) {
          const idx = p * 4;
          if (isBg[p] === 1) {
            mData[idx] = 0;
            mData[idx+1] = 0;
            mData[idx+2] = 0;
            mData[idx+3] = 0; // Transparent background
          } else {
            mData[idx] = 255;
            mData[idx+1] = 255;
            mData[idx+2] = 255;
            mData[idx+3] = 255; // Opaque foreground
          }
        }
        mctx.putImageData(mImg, 0, 0);

        // 5. Produce full-resolution Segmented Foreground Canvas (natW x natH)
        segmentedCanvas = document.createElement('canvas');
        segmentedCanvas.width = natW;
        segmentedCanvas.height = natH;
        const sctx = segmentedCanvas.getContext('2d');

        // Draw original full-res photo
        sctx.drawImage(imgObj, 0, 0, natW, natH);

        // Mask out background using destination-in (bilinear smooth interpolation)
        sctx.globalCompositeOperation = 'destination-in';
        sctx.drawImage(maskCvs, 0, 0, natW, natH);
        sctx.globalCompositeOperation = 'source-over';
      } catch (err) {
        console.warn('Local portrait matting fallback to original:', err);
        segmentedCanvas = null;
      }
    }

    function handleFileSelected(file) {
      if (!file) return;

      const isValidMime = file.type && file.type.startsWith('image/');
      const isValidExt = /\.(jpe?g|png|webp)$/i.test(file.name || '');
      if (!isValidMime && !isValidExt) {
        showToast('Unsupported file type. Please select a valid portrait image (JPG, PNG, or WebP).', 'error');
        return;
      }

      if (file.size === 0) {
        showToast('The selected file is empty (0 bytes). Please choose a valid image.', 'error');
        return;
      }

      if (file.size > MAX_IMAGE_FILE_SIZE) {
        showToast(`File exceeds 25 MB limit (${formatBytes(file.size)}). Please select a file under 25 MB.`, 'error');
        return;
      }

      currentFile = file;
      if (imgObjectUrl) {
        try { URL.revokeObjectURL(imgObjectUrl); } catch (e) {}
      }
      imgObjectUrl = URL.createObjectURL(file);

      const img = new Image();
      img.onload = () => {
        imgObj = img;
        imgWidth = img.naturalWidth || img.width;
        imgHeight = img.naturalHeight || img.height;

        // Reset transforms
        panX = 0;
        panY = 0;
        scale = 1.0;
        rotation = 0;
        currentPreviewPage = 1;
        cachedA4PhotoCanvas = null;
        isCachedA4PhotoDirty = true;

        // Execute local portrait background segmentation
        runPortraitSegmentation('balanced');

        renderStudioWorkbench();
      };
      img.onerror = () => {
        showToast('Failed to load image. The file may be corrupt.', 'error');
        renderInitialDropzone();
      };
      img.src = imgObjectUrl;
    }

    function renderStudioWorkbench() {
      const preset = getCurrentPreset();

      dom.modalBody.innerHTML = `
        <div class="workbench-container passport-workbench-root">
          <!-- Top File Bar -->
          <div class="passport-file-bar">
            <div class="passport-file-meta">
              <div class="passport-file-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M7 18c0-2.5 2.5-4 5-4s5 1.5 5 4"></path>
                </svg>
              </div>
              <div class="passport-file-details">
                <div class="passport-file-name" title="${escapeHtml(currentFile.name)}">${escapeHtml(currentFile.name)}</div>
                <div class="passport-file-sub">
                  <span>${formatBytes(currentFile.size)}</span>
                  <span>•</span>
                  <span>${imgWidth} × ${imgHeight} px</span>
                  <span>•</span>
                  <span class="passport-active-dim-badge" id="passport-header-dim-badge">${escapeHtml(preset.dimText)}</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-passport-change-photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Change Photo
            </button>
          </div>

          <!-- Dual-Panel Grid -->
          <div class="passport-grid">
            <!-- Left Panel: Photo Crop & Tuning -->
            <div class="passport-card">
              <div class="passport-card-header">
                <div class="passport-card-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8M8 12h8"></path>
                  </svg>
                  Photo Crop & Framing
                </div>
                <span class="passport-active-dim-badge" id="passport-card-dim-badge">${escapeHtml(preset.dimText)}</span>
              </div>
              <div class="passport-card-body">
                <!-- Preset Dimension Selector -->
                <div>
                  <label for="passport-preset-select" style="display:block; font-size:0.785rem; font-weight:600; color:#334155; margin-bottom:0.35rem;">
                    Passport Dimension Preset:
                  </label>
                  <select id="passport-preset-select" class="passport-preset-select">
                    <option value="india_passport" ${selectedPresetKey === 'india_passport' ? 'selected' : ''}>India Passport / Visa / OCI — 35 × 45 mm (3.5 × 4.5 cm)</option>
                    <option value="us_passport" ${selectedPresetKey === 'us_passport' ? 'selected' : ''}>US Passport & Visa / India OCI — 51 × 51 mm (2 × 2 inches)</option>
                    <option value="india_stamp" ${selectedPresetKey === 'india_stamp' ? 'selected' : ''}>India Stamp Size / Exam — 35 × 35 mm (3.5 × 3.5 cm)</option>
                    <option value="id_card" ${selectedPresetKey === 'id_card' ? 'selected' : ''}>ID Card / License / Japan — 30 × 40 mm (3.0 × 4.0 cm)</option>
                    <option value="custom" ${selectedPresetKey === 'custom' ? 'selected' : ''}>Custom Dimensions (Width × Height in mm)</option>
                  </select>
                </div>

                <!-- Custom Dimensions Row (if custom selected) -->
                <div id="passport-custom-dim-row" style="display: ${selectedPresetKey === 'custom' ? 'flex' : 'none'}; gap: 0.75rem; align-items: center;">
                  <div style="flex:1;">
                    <label style="font-size:0.72rem; color:#64748b; font-weight:600;">Width (mm):</label>
                    <input type="number" id="passport-custom-width" min="15" max="150" value="${customWidthMm}" class="form-control form-control-sm" style="width:100%;" />
                  </div>
                  <div style="flex:1;">
                    <label style="font-size:0.72rem; color:#64748b; font-weight:600;">Height (mm):</label>
                    <input type="number" id="passport-custom-height" min="15" max="150" value="${customHeightMm}" class="form-control form-control-sm" style="width:100%;" />
                  </div>
                </div>

                <!-- Dimension Callout Box -->
                <div class="passport-dim-display-box">
                  <div>
                    <span style="font-size:0.75rem; color:#15803d; font-weight:500;">Exact Physical Dimensions:</span>
                    <div class="passport-dim-val" id="passport-dim-val-display">${escapeHtml(preset.dimText)}</div>
                  </div>
                  <span style="font-size:0.72rem; color:#15803d; font-weight:600; background:#dcfce7; padding:0.15rem 0.45rem; border-radius:4px;">
                    Fixed Ratio ${preset.aspectRatio.toFixed(2)}
                  </span>
                </div>

                <!-- Interactive Crop Viewport -->
                <div class="passport-crop-viewport">
                  <div class="passport-crop-canvas-wrapper" id="passport-crop-wrapper">
                    <canvas id="passport-crop-canvas" class="passport-crop-canvas"></canvas>
                  </div>
                  <div class="passport-crop-hint">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="5 9 2 12 5 15"></polyline>
                      <polyline points="9 5 12 2 15 5"></polyline>
                      <polyline points="15 19 12 22 9 19"></polyline>
                      <polyline points="19 9 22 12 19 15"></polyline>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <line x1="12" y1="2" x2="12" y2="22"></line>
                    </svg>
                    <span>Click & drag to position • Mouse wheel to zoom in/out</span>
                  </div>
                </div>

                <!-- Zoom & Adjust Toolbar -->
                <div class="passport-toolbar-row">
                  <div class="passport-btn-group">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-passport-zoom-out" title="Zoom Out">−</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-passport-zoom-reset" title="Reset Zoom and Center">Reset</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-passport-zoom-in" title="Zoom In">+</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-passport-rotate" title="Rotate 90°">⟳ Rotate 90°</button>
                  </div>
                  <label style="display:flex; align-items:center; gap:0.35rem; font-size:0.75rem; color:#334155; cursor:pointer; user-select:none;">
                    <input type="checkbox" id="chk-passport-face-guide" ${showFaceGuide ? 'checked' : ''} />
                    <span>Head alignment guide</span>
                  </label>
                </div>

                <!-- Background Color Presets -->
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.35rem;">
                    <label style="font-size:0.785rem; font-weight:600; color:#334155;">
                      Photo Background Color:
                    </label>
                    <span id="passport-bg-mode-label" style="font-size:0.72rem; color:#4f46e5; font-weight:600;">
                      ${selectedBgColor === 'original' ? 'Original Photo (Unchanged)' : 'Smart Portrait Matting Active'}
                    </span>
                  </div>
                  <div class="passport-color-chips">
                    <div class="passport-color-chip chip-original ${selectedBgColor === 'original' ? 'active' : ''}" data-bg="original" title="Original Photo (Keep untouched photo background)">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                    <div class="passport-color-chip ${selectedBgColor === '#ffffff' ? 'active' : ''}" data-bg="#ffffff" style="background:#ffffff;" title="Plain White (Default for India & Global Passports)"></div>
                    <div class="passport-color-chip ${selectedBgColor === '#dbeafe' ? 'active' : ''}" data-bg="#dbeafe" style="background:#dbeafe;" title="Light Blue (Passport / Visa)"></div>
                    <div class="passport-color-chip ${selectedBgColor === '#f1f5f9' ? 'active' : ''}" data-bg="#f1f5f9" style="background:#f1f5f9;" title="Light Grey"></div>
                    <div class="passport-color-chip chip-dark ${selectedBgColor === '#3b82f6' ? 'active' : ''}" data-bg="#3b82f6" style="background:#3b82f6;" title="Vibrant Blue"></div>
                    <input type="color" id="passport-custom-color" class="passport-custom-color-input" value="${selectedBgColor === 'original' ? '#ffffff' : selectedBgColor}" title="Custom Color Picker" />
                    <span style="font-size:0.75rem; color:#64748b; margin-left:0.25rem;">Select background fill</span>
                  </div>

                  <div style="margin-top:0.25rem; font-size:0.7rem; color:#64748b; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.35rem; background:#f8fafc; padding:0.25rem 0.5rem; border-radius:6px; border:1px solid #e2e8f0;">
                    <span style="display:flex; align-items:center; gap:0.35rem;">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span>Local In-Memory Portrait Matting</span>
                    </span>
                    <div style="display:flex; align-items:center; gap:0.35rem;">
                      <label for="passport-segment-tolerance" style="font-size:0.7rem; color:#475569; font-weight:600;">Sensitivity:</label>
                      <select id="passport-segment-tolerance" style="font-size:0.7rem; padding:0.1rem 0.3rem; border:1px solid #cbd5e1; border-radius:4px; background:#fff; color:#1e293b; cursor:pointer;">
                        <option value="balanced" ${segmentationSensitivity === 'balanced' ? 'selected' : ''}>Balanced</option>
                        <option value="gentle" ${segmentationSensitivity === 'gentle' ? 'selected' : ''}>Gentle</option>
                        <option value="strong" ${segmentationSensitivity === 'strong' ? 'selected' : ''}>Strong</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Cutting Guide Toggle -->
                <div style="border-top:1px dashed #e2e8f0; padding-top:0.35rem;">
                  <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.76rem; color:#1e293b; cursor:pointer; user-select:none;">
                    <input type="checkbox" id="chk-passport-cut-border" ${addCuttingBorder ? 'checked' : ''} />
                    <span style="font-weight:500;">Add thin cutting guide border (recommended for white backgrounds)</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Right Panel: A4 Sheet Layout & Output -->
            <div class="passport-card">
              <div class="passport-card-header">
                <div class="passport-card-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  A4 Print Sheet Preview
                </div>
                <div class="passport-btn-group">
                  <button type="button" class="btn btn-secondary btn-xs ${paperOrientation === 'portrait' ? 'active' : ''}" id="btn-passport-orient-portrait" title="A4 Portrait (210 × 297 mm)">
                    Portrait
                  </button>
                  <button type="button" class="btn btn-secondary btn-xs ${paperOrientation === 'landscape' ? 'active' : ''}" id="btn-passport-orient-landscape" title="A4 Landscape (297 × 210 mm)">
                    Landscape
                  </button>
                </div>
              </div>
              <div class="passport-card-body">
                <!-- Copies Selection Row -->
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.35rem;">
                    <label style="font-size:0.785rem; font-weight:600; color:#334155;">
                      Number of Photo Copies:
                    </label>
                    <span style="font-size:0.72rem; color:#4f46e5; font-weight:700;" id="passport-sheet-stats">
                      ${totalCopies} Photos
                    </span>
                  </div>
                  <div class="passport-copies-row">
                    <button type="button" class="passport-copy-btn ${totalCopies === 1 ? 'active' : ''}" data-copies="1">1</button>
                    <button type="button" class="passport-copy-btn ${totalCopies === 4 ? 'active' : ''}" data-copies="4">4</button>
                    <button type="button" class="passport-copy-btn ${totalCopies === 8 ? 'active' : ''}" data-copies="8">8</button>
                    <button type="button" class="passport-copy-btn ${totalCopies === 12 ? 'active' : ''}" data-copies="12">12</button>
                    <button type="button" class="passport-copy-btn ${totalCopies === 16 ? 'active' : ''}" data-copies="16">16</button>
                    <button type="button" class="passport-copy-btn ${totalCopies === 24 ? 'active' : ''}" data-copies="24">24</button>
                    <button type="button" class="passport-copy-btn ${totalCopies === 32 ? 'active' : ''}" data-copies="32">32</button>
                    <div class="passport-stepper">
                      <button type="button" class="passport-stepper-btn" id="btn-copies-minus">−</button>
                      <input type="number" id="passport-copies-input" class="passport-stepper-input" min="1" max="100" value="${totalCopies}" />
                      <button type="button" class="passport-stepper-btn" id="btn-copies-plus">+</button>
                    </div>
                  </div>
                </div>

                <!-- A4 Preview Viewport -->
                <div class="passport-a4-viewport">
                  <!-- Pagination controls for multi-page -->
                  <div style="display:flex; align-items:center; justify-content:space-between; width:100%; max-width:380px; margin-bottom:0.65rem;">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-passport-prev-page" title="Previous Sheet Page" disabled>
                      ◀ Prev
                    </button>
                    <span id="passport-page-indicator" style="font-size:0.785rem; font-weight:600; color:#f8fafc;">
                      Page 1 of 1
                    </span>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-passport-next-page" title="Next Sheet Page" disabled>
                      Next ▶
                    </button>
                  </div>

                  <!-- A4 Canvas -->
                  <canvas id="passport-a4-canvas" class="passport-a4-paper"></canvas>

                  <div class="passport-a4-footer-info">
                    <span>Standard A4 Paper (210 × 297 mm)</span>
                    <span>•</span>
                    <span>Ready for 100% Scale Printing</span>
                  </div>
                </div>

                <!-- Actions Bar -->
                <div class="passport-actions-bar">
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-passport-download-single" title="Download single cropped passport photo at 300 DPI for online portal uploads">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    Single Photo (300 DPI)
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-passport-print-sheet" title="Print directly to your local or network printer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    Print Sheet
                  </button>
                  <button type="button" class="btn btn-primary btn-sm" id="btn-passport-download-pdf" title="Download print-ready A4 PDF with exact millimeter physical dimensions">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download A4 PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Setup Listeners & Interactions
      setupWorkbenchListeners();
      renderCropCanvas();
      renderA4Preview();
    }

    function setupWorkbenchListeners() {
      // Change photo
      const changeBtn = document.getElementById('btn-passport-change-photo');
      if (changeBtn) changeBtn.addEventListener('click', renderInitialDropzone);

      // Preset select
      const presetSelect = document.getElementById('passport-preset-select');
      const customRow = document.getElementById('passport-custom-dim-row');
      if (presetSelect) {
        presetSelect.addEventListener('change', (e) => {
          selectedPresetKey = e.target.value;
          if (customRow) {
            customRow.style.display = (selectedPresetKey === 'custom') ? 'flex' : 'none';
          }
          updateDimensionLabels();
          // Reset pan/zoom on preset change so face fits naturally
          panX = 0;
          panY = 0;
          scale = 1.0;
          ensureCropCanvasLayout();
          requestCropDraw(true);
        });
      }

      // Custom width/height
      const customWInput = document.getElementById('passport-custom-width');
      const customHInput = document.getElementById('passport-custom-height');
      if (customWInput) {
        customWInput.addEventListener('input', (e) => {
          customWidthMm = parseFloat(e.target.value) || 35;
          updateDimensionLabels();
          ensureCropCanvasLayout();
          requestCropDraw(true);
        });
      }
      if (customHInput) {
        customHInput.addEventListener('input', (e) => {
          customHeightMm = parseFloat(e.target.value) || 45;
          updateDimensionLabels();
          ensureCropCanvasLayout();
          requestCropDraw(true);
        });
      }

      // Zoom & Rotate toolbar
      const zoomInBtn = document.getElementById('btn-passport-zoom-in');
      const zoomOutBtn = document.getElementById('btn-passport-zoom-out');
      const zoomResetBtn = document.getElementById('btn-passport-zoom-reset');
      const rotateBtn = document.getElementById('btn-passport-rotate');
      if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
          scale = Math.min(scale * 1.15, 6.0);
          requestCropDraw(true);
        });
      }
      if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
          scale = Math.max(scale * 0.85, 0.2);
          requestCropDraw(true);
        });
      }
      if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => {
          scale = 1.0;
          panX = 0;
          panY = 0;
          rotation = 0;
          requestCropDraw(true);
        });
      }
      if (rotateBtn) {
        rotateBtn.addEventListener('click', () => {
          rotation = (rotation + 90) % 360;
          requestCropDraw(true);
        });
      }

      // Face guide & cutting border
      const faceGuideChk = document.getElementById('chk-passport-face-guide');
      if (faceGuideChk) {
        faceGuideChk.addEventListener('change', (e) => {
          showFaceGuide = e.target.checked;
          requestCropDraw(false);
        });
      }
      const cutBorderChk = document.getElementById('chk-passport-cut-border');
      if (cutBorderChk) {
        cutBorderChk.addEventListener('change', (e) => {
          addCuttingBorder = e.target.checked;
          requestCropDraw(true);
        });
      }

      // Background color chips
      const chips = document.querySelectorAll('.passport-color-chip');
      const customColorPicker = document.getElementById('passport-custom-color');
      const bgModeLabel = document.getElementById('passport-bg-mode-label');

      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          selectedBgColor = chip.getAttribute('data-bg');
          if (customColorPicker && selectedBgColor !== 'original') {
            customColorPicker.value = selectedBgColor;
          }
          if (bgModeLabel) {
            bgModeLabel.textContent = (selectedBgColor === 'original')
              ? 'Original Photo (Unchanged)'
              : 'Smart Portrait Matting Active';
          }
          requestCropDraw(true);
        });
      });

      if (customColorPicker) {
        customColorPicker.addEventListener('input', (e) => {
          chips.forEach(c => c.classList.remove('active'));
          selectedBgColor = e.target.value;
          if (bgModeLabel) {
            bgModeLabel.textContent = 'Smart Portrait Matting Active';
          }
          requestCropDraw(true);
        });
      }

      // Segmentation tolerance selector
      const tolSelect = document.getElementById('passport-segment-tolerance');
      if (tolSelect) {
        tolSelect.addEventListener('change', (e) => {
          runPortraitSegmentation(e.target.value);
          requestCropDraw(true);
        });
      }

      // Orientation buttons
      const portraitBtn = document.getElementById('btn-passport-orient-portrait');
      const landscapeBtn = document.getElementById('btn-passport-orient-landscape');
      if (portraitBtn && landscapeBtn) {
        portraitBtn.addEventListener('click', () => {
          paperOrientation = 'portrait';
          portraitBtn.classList.add('active');
          landscapeBtn.classList.remove('active');
          currentPreviewPage = 1;
          renderA4Preview();
        });
        landscapeBtn.addEventListener('click', () => {
          paperOrientation = 'landscape';
          landscapeBtn.classList.add('active');
          portraitBtn.classList.remove('active');
          currentPreviewPage = 1;
          renderA4Preview();
        });
      }

      // Copies buttons
      const copyBtns = document.querySelectorAll('.passport-copy-btn');
      const copiesInput = document.getElementById('passport-copies-input');
      const minusBtn = document.getElementById('btn-copies-minus');
      const plusBtn = document.getElementById('btn-copies-plus');

      function updateCopies(val) {
        totalCopies = Math.max(1, Math.min(val, 100));
        if (copiesInput) copiesInput.value = totalCopies;
        copyBtns.forEach(btn => {
          const num = parseInt(btn.getAttribute('data-copies'), 10);
          btn.classList.toggle('active', num === totalCopies);
        });

        const params = getA4SheetParameters();
        const statsEl = document.getElementById('passport-sheet-stats');
        if (statsEl) {
          statsEl.textContent = `${totalCopies} Photo${totalCopies > 1 ? 's' : ''} Total • ${params.capacity} per sheet (${params.cols}×${params.rows}) • ${params.totalPages} Page${params.totalPages > 1 ? 's' : ''}`;
        }
        const pageNavEl = document.getElementById('passport-page-indicator');
        if (pageNavEl) {
          pageNavEl.textContent = `Page ${currentPreviewPage} of ${params.totalPages}`;
        }

        renderA4Preview();
      }

      copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const num = parseInt(btn.getAttribute('data-copies'), 10);
          updateCopies(num);
        });
      });
      if (copiesInput) {
        copiesInput.addEventListener('change', (e) => {
          updateCopies(parseInt(e.target.value, 10) || 1);
        });
      }
      if (minusBtn) {
        minusBtn.addEventListener('click', () => updateCopies(totalCopies - 1));
      }
      if (plusBtn) {
        plusBtn.addEventListener('click', () => updateCopies(totalCopies + 1));
      }

      // Multi-page navigation
      const prevBtn = document.getElementById('btn-passport-prev-page');
      const nextBtn = document.getElementById('btn-passport-next-page');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentPreviewPage > 1) {
            currentPreviewPage--;
            renderA4Preview();
          }
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          const params = getA4SheetParameters();
          if (currentPreviewPage < params.totalPages) {
            currentPreviewPage++;
            renderA4Preview();
          }
        });
      }

      // Smooth Interactive Pan & Zoom on Crop Canvas (No flicker / shaking)
      const cropCanvas = document.getElementById('passport-crop-canvas');
      if (cropCanvas) {
        let isDragging = false;
        let startClientX = 0, startClientY = 0;
        let startPanX = 0, startPanY = 0;

        cropCanvas.addEventListener('wheel', (e) => {
          e.preventDefault();
          const factor = e.deltaY < 0 ? 1.06 : 0.94;
          scale = Math.min(Math.max(scale * factor, 0.2), 6.0);
          requestCropDraw(false);
        }, { passive: false });

        cropCanvas.addEventListener('pointerdown', (e) => {
          isDragging = true;
          startClientX = e.clientX;
          startClientY = e.clientY;
          startPanX = panX;
          startPanY = panY;
          try { cropCanvas.setPointerCapture(e.pointerId); } catch (err) {}
        });

        cropCanvas.addEventListener('pointermove', (e) => {
          if (!isDragging) return;
          panX = startPanX + (e.clientX - startClientX);
          panY = startPanY + (e.clientY - startClientY);
          requestCropDraw(false);
        });

        const stopDrag = (e) => {
          if (isDragging) {
            isDragging = false;
            try { cropCanvas.releasePointerCapture(e.pointerId); } catch (err) {}
            requestCropDraw(true);
          }
        };
        cropCanvas.addEventListener('pointerup', stopDrag);
        cropCanvas.addEventListener('pointercancel', stopDrag);
      }

      // Action buttons
      const dlPdfBtn = document.getElementById('btn-passport-download-pdf');
      if (dlPdfBtn) dlPdfBtn.addEventListener('click', downloadA4Pdf);

      const dlSingleBtn = document.getElementById('btn-passport-download-single');
      if (dlSingleBtn) dlSingleBtn.addEventListener('click', downloadSinglePhoto);

      const printBtn = document.getElementById('btn-passport-print-sheet');
      if (printBtn) printBtn.addEventListener('click', printSheet);
    }

    function updateDimensionLabels() {
      const preset = getCurrentPreset();
      const headBadge = document.getElementById('passport-header-dim-badge');
      const cardBadge = document.getElementById('passport-card-dim-badge');
      const dimDisplay = document.getElementById('passport-dim-val-display');

      if (headBadge) headBadge.textContent = preset.dimText;
      if (cardBadge) cardBadge.textContent = preset.dimText;
      if (dimDisplay) dimDisplay.textContent = preset.dimText;
    }

    // Stable Crop Canvas Layout (only changes when preset changes)
    function ensureCropCanvasLayout() {
      const canvas = document.getElementById('passport-crop-canvas');
      const wrapper = document.getElementById('passport-crop-wrapper');
      if (!canvas || !wrapper) return;

      const { boxW, boxH } = getCropBoxDimensions();
      const dpr = window.devicePixelRatio || 1;

      if (canvas._cachedBoxW !== boxW || canvas._cachedBoxH !== boxH || canvas._cachedDpr !== dpr) {
        canvas._cachedBoxW = boxW;
        canvas._cachedBoxH = boxH;
        canvas._cachedDpr = dpr;

        canvas.width = boxW * dpr;
        canvas.height = boxH * dpr;
        canvas.style.width = boxW + 'px';
        canvas.style.height = boxH + 'px';

        wrapper.style.width = boxW + 'px';
        wrapper.style.height = boxH + 'px';
      }
    }

    // Direct draw on stable canvas (no element resize, no layout recalculations)
    function drawCropCanvasDirect() {
      const canvas = document.getElementById('passport-crop-canvas');
      if (!canvas || !imgObj) return;

      ensureCropCanvasLayout();

      const { boxW, boxH } = getCropBoxDimensions();
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext('2d');

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Clear frame without resetting canvas element bitmap
      ctx.clearRect(0, 0, boxW, boxH);

      // Fill background color if not 'original'
      if (selectedBgColor !== 'original') {
        ctx.fillStyle = selectedBgColor;
        ctx.fillRect(0, 0, boxW, boxH);
      }

      // Choose source: segmented foreground (with transparent background) or original photo
      const sourceImg = (selectedBgColor === 'original' || !segmentedCanvas) ? imgObj : segmentedCanvas;

      // Draw transformed user image
      ctx.save();
      ctx.translate(boxW / 2 + panX, boxH / 2 + panY);
      ctx.rotate((rotation * Math.PI) / 180);

      const effectiveWidth = (rotation % 180 === 0) ? imgWidth : imgHeight;
      const effectiveHeight = (rotation % 180 === 0) ? imgHeight : imgWidth;
      const baseScale = Math.max(boxW / effectiveWidth, boxH / effectiveHeight);
      const drawW = imgWidth * baseScale * scale;
      const drawH = imgHeight * baseScale * scale;

      ctx.drawImage(sourceImg, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();

      // Biometric alignment guide
      if (showFaceGuide) {
        ctx.save();
        const ovalW = boxW * 0.52;
        const ovalH = boxH * 0.65;
        const ovalCx = boxW / 2;
        const ovalCy = boxH * 0.46;

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)'; // Soft cyan
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);

        ctx.beginPath();
        ctx.ellipse(ovalCx, ovalCy, ovalW / 2, ovalH / 2, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Eye guideline (42%)
        const eyeY = boxH * 0.42;
        ctx.beginPath();
        ctx.moveTo(boxW * 0.25, eyeY);
        ctx.lineTo(boxW * 0.75, eyeY);
        ctx.stroke();

        // Chin guideline (78%)
        const chinY = boxH * 0.78;
        ctx.beginPath();
        ctx.moveTo(boxW * 0.35, chinY);
        ctx.lineTo(boxW * 0.65, chinY);
        ctx.stroke();
        ctx.restore();
      }

      // Border around crop frame
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.strokeRect(0.5, 0.5, boxW - 1, boxH - 1);

      ctx.restore();
    }

    // Batched Visual Update (RAF for 60fps silky crop view, throttled/debounced for A4 preview)
    function requestCropDraw(immediateA4 = false) {
      isCachedA4PhotoDirty = true;
      if (!isCropRafPending) {
        isCropRafPending = true;
        requestAnimationFrame(() => {
          isCropRafPending = false;
          drawCropCanvasDirect();
        });
      }

      if (immediateA4) {
        if (a4UpdateTimer) clearTimeout(a4UpdateTimer);
        renderA4Preview();
      } else {
        if (a4UpdateTimer) clearTimeout(a4UpdateTimer);
        a4UpdateTimer = setTimeout(() => {
          renderA4Preview();
        }, 50);
      }
    }

    // Backwards-compatible alias
    function renderCropCanvas() {
      requestCropDraw(true);
    }

    function getHighResPhotoCanvas() {
      if (!isCachedA4PhotoDirty && cachedA4PhotoCanvas) {
        return cachedA4PhotoCanvas;
      }

      const dpmm = 300 / 25.4; // 300 DPI
      const preset = getCurrentPreset();
      const outW = Math.round(preset.widthMm * dpmm);
      const outH = Math.round(preset.heightMm * dpmm);

      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d');

      // Fill background
      if (selectedBgColor !== 'original') {
        ctx.fillStyle = selectedBgColor;
        ctx.fillRect(0, 0, outW, outH);
      }

      const { boxW, boxH } = getCropBoxDimensions();
      const ratio = outW / boxW;
      const sourceImg = (selectedBgColor === 'original' || !segmentedCanvas) ? imgObj : segmentedCanvas;

      ctx.save();
      ctx.translate(outW / 2 + panX * ratio, outH / 2 + panY * ratio);
      ctx.rotate((rotation * Math.PI) / 180);

      const effectiveWidth = (rotation % 180 === 0) ? imgWidth : imgHeight;
      const effectiveHeight = (rotation % 180 === 0) ? imgHeight : imgWidth;
      const baseScale = Math.max(boxW / effectiveWidth, boxH / effectiveHeight);
      const drawW = imgWidth * baseScale * scale * ratio;
      const drawH = imgHeight * baseScale * scale * ratio;

      ctx.drawImage(sourceImg, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();

      if (addCuttingBorder) {
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = Math.max(1, Math.round(dpmm * 0.2));
        ctx.strokeRect(0, 0, outW, outH);
      }

      cachedA4PhotoCanvas = canvas;
      isCachedA4PhotoDirty = false;
      return canvas;
    }

    function getA4SheetParameters() {
      const preset = getCurrentPreset();
      const isPortrait = (paperOrientation === 'portrait');
      const paperWidthMm = isPortrait ? 210 : 297;
      const paperHeightMm = isPortrait ? 297 : 210;

      const marginMm = 8;
      const gapMm = 3;
      const photoW = preset.widthMm;
      const photoH = preset.heightMm;

      const cols = Math.max(1, Math.floor((paperWidthMm - 2 * marginMm + gapMm) / (photoW + gapMm)));
      const rows = Math.max(1, Math.floor((paperHeightMm - 2 * marginMm + gapMm) / (photoH + gapMm)));
      const capacity = cols * rows;
      const totalPages = Math.max(1, Math.ceil(totalCopies / capacity));

      const gridWidthMm = cols * photoW + (cols - 1) * gapMm;
      const gridHeightMm = rows * photoH + (rows - 1) * gapMm;
      const startXMm = (paperWidthMm - gridWidthMm) / 2;
      const startYMm = (paperHeightMm - gridHeightMm) / 2;

      return {
        isPortrait,
        paperWidthMm,
        paperHeightMm,
        marginMm,
        gapMm,
        photoW,
        photoH,
        cols,
        rows,
        capacity,
        totalPages,
        startXMm,
        startYMm
      };
    }

    function drawA4PreviewDirect() {
      const canvas = document.getElementById('passport-a4-canvas');
      if (!canvas || !imgObj) return;

      const params = getA4SheetParameters();
      if (currentPreviewPage > params.totalPages) {
        currentPreviewPage = params.totalPages;
      }

      const displayW = params.isPortrait ? 215 : 304;
      const displayH = Math.round(displayW * (params.paperHeightMm / params.paperWidthMm));
      const dpr = window.devicePixelRatio || 1;

      // Stable canvas dimensions
      if (canvas._cachedW !== displayW || canvas._cachedH !== displayH || canvas._cachedDpr !== dpr) {
        canvas._cachedW = displayW;
        canvas._cachedH = displayH;
        canvas._cachedDpr = dpr;
        canvas.width = displayW * dpr;
        canvas.height = displayH * dpr;
        canvas.style.width = displayW + 'px';
        canvas.style.height = displayH + 'px';
      }

      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.scale(dpr, dpr);

      // White sheet
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, displayW, displayH);

      // Subtle margin guide
      const scaleRatio = displayW / params.paperWidthMm;
      const marginPx = params.marginMm * scaleRatio;
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 1;
      ctx.strokeRect(marginPx, marginPx, displayW - 2 * marginPx, displayH - 2 * marginPx);

      // Get high-res photo canvas for crisp preview (cached if untouched)
      const singlePhotoCanvas = getHighResPhotoCanvas();

      // Page copies
      const pageStartIndex = (currentPreviewPage - 1) * params.capacity;
      const pageCopies = Math.min(totalCopies - pageStartIndex, params.capacity);

      const drawPhotoW = params.photoW * scaleRatio;
      const drawPhotoH = params.photoH * scaleRatio;
      const drawGap = params.gapMm * scaleRatio;
      const drawStartX = params.startXMm * scaleRatio;
      const drawStartY = params.startYMm * scaleRatio;

      for (let i = 0; i < pageCopies; i++) {
        const col = i % params.cols;
        const row = Math.floor(i / params.cols);
        const px = drawStartX + col * (drawPhotoW + drawGap);
        const py = drawStartY + row * (drawPhotoH + drawGap);

        ctx.drawImage(singlePhotoCanvas, px, py, drawPhotoW, drawPhotoH);

        // Cutting corner tick marks
        ctx.save();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 2]);

        const tick = 3;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(px - tick, py); ctx.lineTo(px, py);
        ctx.moveTo(px, py - tick); ctx.lineTo(px, py);
        // Top-right
        ctx.moveTo(px + drawPhotoW, py); ctx.lineTo(px + drawPhotoW + tick, py);
        ctx.moveTo(px + drawPhotoW, py - tick); ctx.lineTo(px + drawPhotoW, py);
        // Bottom-left
        ctx.moveTo(px - tick, py + drawPhotoH); ctx.lineTo(px, py + drawPhotoH);
        ctx.moveTo(px, py + drawPhotoH); ctx.lineTo(px, py + drawPhotoH + tick);
        // Bottom-right
        ctx.moveTo(px + drawPhotoW, py + drawPhotoH); ctx.lineTo(px + drawPhotoW + tick, py + drawPhotoH);
        ctx.moveTo(px + drawPhotoW, py + drawPhotoH); ctx.lineTo(px + drawPhotoW, py + drawPhotoH + tick);
        ctx.stroke();
        ctx.restore();
      }

      // Footer note on sheet
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        `A4 Sheet (${params.paperWidthMm} × ${params.paperHeightMm} mm) • Page ${currentPreviewPage} of ${params.totalPages} • ${pageCopies} photo${pageCopies > 1 ? 's' : ''}`,
        displayW / 2,
        displayH - 4
      );

      ctx.restore();

      // Update UI stats
      const statsEl = document.getElementById('passport-sheet-stats');
      if (statsEl) {
        statsEl.textContent = `${totalCopies} Photo${totalCopies > 1 ? 's' : ''} Total • ${params.capacity} per sheet (${params.cols}×${params.rows}) • ${params.totalPages} Page${params.totalPages > 1 ? 's' : ''}`;
      }

      const pageNavEl = document.getElementById('passport-page-indicator');
      if (pageNavEl) {
        pageNavEl.textContent = `Page ${currentPreviewPage} of ${params.totalPages}`;
      }

      const prevBtn = document.getElementById('btn-passport-prev-page');
      const nextBtn = document.getElementById('btn-passport-next-page');
      if (prevBtn) prevBtn.disabled = (currentPreviewPage <= 1);
      if (nextBtn) nextBtn.disabled = (currentPreviewPage >= params.totalPages);
    }

    function renderA4Preview() {
      if (!isA4RafPending) {
        isA4RafPending = true;
        requestAnimationFrame(() => {
          isA4RafPending = false;
          drawA4PreviewDirect();
        });
      }
    }

    async function downloadA4Pdf() {
      if (!window.PDFLib) {
        showToast('PDF library not ready.', 'error');
        return;
      }

      showToast('Generating print-ready A4 PDF...', 'info');

      try {
        const pdfDoc = await PDFLib.PDFDocument.create();
        const params = getA4SheetParameters();
        const mmToPt = 72 / 25.4;

        const pageWidthPt = params.paperWidthMm * mmToPt;
        const pageHeightPt = params.paperHeightMm * mmToPt;
        const photoWidthPt = params.photoW * mmToPt;
        const photoHeightPt = params.photoH * mmToPt;
        const gapPt = params.gapMm * mmToPt;

        const startXPt = params.startXMm * mmToPt;

        const photoCanvas = getHighResPhotoCanvas();
        const pngDataUrl = photoCanvas.toDataURL('image/png');
        const base64Data = pngDataUrl.split(',')[1];
        const binaryStr = atob(base64Data);
        const pngBytes = new Uint8Array(binaryStr.length);
        for (let i = 0; i < binaryStr.length; i++) {
          pngBytes[i] = binaryStr.charCodeAt(i);
        }
        const embeddedImage = await pdfDoc.embedPng(pngBytes);

        for (let p = 1; p <= params.totalPages; p++) {
          const page = pdfDoc.addPage([pageWidthPt, pageHeightPt]);
          const pageStartIndex = (p - 1) * params.capacity;
          const count = Math.min(totalCopies - pageStartIndex, params.capacity);

          for (let i = 0; i < count; i++) {
            const col = i % params.cols;
            const row = Math.floor(i / params.cols);
            const xPt = startXPt + col * (photoWidthPt + gapPt);
            // PDF origin is bottom-left
            const yTopMm = params.startYMm + row * (params.photoH + params.gapMm);
            const yPt = (params.paperHeightMm - yTopMm - params.photoH) * mmToPt;

            page.drawImage(embeddedImage, {
              x: xPt,
              y: yPt,
              width: photoWidthPt,
              height: photoHeightPt
            });

            // Cutting guides (corner ticks)
            const tickPt = 4;
            const lineColor = PDFLib.rgb(0.7, 0.7, 0.7);
            page.drawLine({ start: { x: xPt - tickPt, y: yPt + photoHeightPt }, end: { x: xPt, y: yPt + photoHeightPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt, y: yPt + photoHeightPt + tickPt }, end: { x: xPt, y: yPt + photoHeightPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt + photoWidthPt, y: yPt + photoHeightPt }, end: { x: xPt + photoWidthPt + tickPt, y: yPt + photoHeightPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt + photoWidthPt, y: yPt + photoHeightPt + tickPt }, end: { x: xPt + photoWidthPt, y: yPt + photoHeightPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt - tickPt, y: yPt }, end: { x: xPt, y: yPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt, y: yPt - tickPt }, end: { x: xPt, y: yPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt + photoWidthPt, y: yPt }, end: { x: xPt + photoWidthPt + tickPt, y: yPt }, thickness: 0.5, color: lineColor });
            page.drawLine({ start: { x: xPt + photoWidthPt, y: yPt - tickPt }, end: { x: xPt + photoWidthPt, y: yPt }, thickness: 0.5, color: lineColor });
          }

          // Footer note
          page.drawText(
            `AAYAM Innovation Passport Studio | ${getCurrentPreset().dimText} | Page ${p} of ${params.totalPages} | Print at 100% (Actual Size)`,
            {
              x: 24,
              y: 16,
              size: 7.5,
              color: PDFLib.rgb(0.5, 0.5, 0.5)
            }
          );
        }

        const pdfBytes = await pdfDoc.save();
        const filename = `passport-photos-${getCurrentPreset().widthMm}x${getCurrentPreset().heightMm}mm-A4.pdf`;
        triggerDownload(new Blob([pdfBytes], { type: 'application/pdf' }), filename);
        showToast('A4 PDF downloaded successfully! Print at 100% scale for exact size.', 'success');
      } catch (err) {
        console.error('PDF generation error:', err);
        showToast('Failed to generate PDF: ' + err.message, 'error');
      }
    }

    function downloadSinglePhoto() {
      const photoCanvas = getHighResPhotoCanvas();
      photoCanvas.toBlob(blob => {
        if (!blob) return;
        const preset = getCurrentPreset();
        const filename = `passport-photo-${preset.widthMm}x${preset.heightMm}mm.png`;
        triggerDownload(blob, filename);
        showToast(`Single photo (${preset.dimText}) downloaded!`, 'success');
      }, 'image/png');
    }

    function printSheet() {
      const params = getA4SheetParameters();
      const photoCanvas = getHighResPhotoCanvas();
      const pngDataUrl = photoCanvas.toDataURL('image/png');

      let printIframe = document.getElementById('passport-print-iframe');
      if (printIframe) printIframe.remove();

      printIframe = document.createElement('iframe');
      printIframe.id = 'passport-print-iframe';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);

      let pagesHtml = '';
      for (let p = 1; p <= params.totalPages; p++) {
        const pageStartIndex = (p - 1) * params.capacity;
        const count = Math.min(totalCopies - pageStartIndex, params.capacity);

        let photosHtml = '';
        for (let i = 0; i < count; i++) {
          const col = i % params.cols;
          const row = Math.floor(i / params.cols);
          const xMm = params.startXMm + col * (params.photoW + params.gapMm);
          const yMm = params.startYMm + row * (params.photoH + params.gapMm);

          photosHtml += `
            <img class="photo" src="${pngDataUrl}" style="left:${xMm}mm; top:${yMm}mm; width:${params.photoW}mm; height:${params.photoH}mm;" alt="Photo" />
          `;
        }

        pagesHtml += `
          <div class="a4-page">
            ${photosHtml}
            <div class="footer-note">AAYAM Innovation Passport Studio • ${getCurrentPreset().dimText} • Page ${p} of ${params.totalPages} • Print at 100% scale</div>
          </div>
        `;
      }

      const iframeDoc = printIframe.contentDocument || printIframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Print Passport Photos</title>
          <style>
            @page {
              size: A4 ${params.isPortrait ? 'portrait' : 'landscape'};
              margin: 0;
            }
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              background: #ffffff;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .a4-page {
              width: ${params.paperWidthMm}mm;
              height: ${params.paperHeightMm}mm;
              position: relative;
              page-break-after: always;
              background: #ffffff;
              overflow: hidden;
            }
            .a4-page:last-child {
              page-break-after: auto;
            }
            .photo {
              position: absolute;
              display: block;
            }
            .footer-note {
              position: absolute;
              bottom: 4mm;
              left: 10mm;
              font-family: system-ui, sans-serif;
              font-size: 7pt;
              color: #888888;
            }
          </style>
        </head>
        <body>
          ${pagesHtml}
        </body>
        </html>
      `);
      iframeDoc.close();

      setTimeout(() => {
        try {
          printIframe.contentWindow.focus();
          printIframe.contentWindow.print();
        } catch (err) {
          console.warn('Print iframe error:', err);
        }
      }, 400);
    }

    renderInitialDropzone();
  }

  /* =================================================================
     6.20 ID CARD PRINT STUDIO WORKBENCH
     ================================================================= */
  function renderIdCardPrintStudioWorkbench() {
    // Mode selection: 'front_only' | 'both_sides' (null on first open)
    let selectedSideMode = null;

    // Uploaded files & image objects
    let frontFile = null;
    let frontImg = null;
    let frontObjUrl = null;
    let frontWidth = 0;
    let frontHeight = 0;

    let backFile = null;
    let backImg = null;
    let backObjUrl = null;
    let backWidth = 0;
    let backHeight = 0;

    // Active editing tab in Both Sides mode: 'front' | 'back'
    let activeTab = 'front';

    // Presets definition (Locked PVC ID Card Print Sizes)
    const ID_PRESETS = {
      aadhaar: {
        id: 'aadhaar',
        name: 'Aadhaar PVC Card (86 × 54 mm)',
        dimText: '86.0 mm × 54.0 mm (8.60 × 5.40 cm)',
        widthMm: 86.0,
        heightMm: 54.0,
        aspectRatio: 86.0 / 54.0,
        isRecommendation: false,
        note: 'Official UIDAI PVC card specification (86 × 54 mm).'
      },
      voter_id: {
        id: 'voter_id',
        name: 'Voter ID PVC Card (86 × 54 mm)',
        dimText: '86.0 mm × 54.0 mm (8.60 × 5.40 cm)',
        widthMm: 86.0,
        heightMm: 54.0,
        aspectRatio: 86.0 / 54.0,
        isRecommendation: false,
        note: 'Election Commission of India (ECI) PVC EPIC card specification (86 × 54 mm).'
      },
      pan_card: {
        id: 'pan_card',
        name: 'PAN Card (CR80 Standard — 85.6 × 54 mm)',
        dimText: '85.6 mm × 54.0 mm (8.56 × 5.40 cm)',
        widthMm: 85.6,
        heightMm: 54.0,
        aspectRatio: 85.6 / 54.0,
        isRecommendation: false,
        note: 'Standard CR80 ID-1 credit card size (85.6 × 54.0 mm).'
      },
      driving_licence: {
        id: 'driving_licence',
        name: 'Driving Licence (Smart Card — 85.6 × 54.02 mm)',
        dimText: '85.6 mm × 54.02 mm (8.56 × 5.40 cm)',
        widthMm: 85.6,
        heightMm: 54.02,
        aspectRatio: 85.6 / 54.02,
        isRecommendation: false,
        note: 'Standard Indian Smart Card Driving Licence (SCDL / MoRTH: 85.6 × 54.02 mm).'
      },
      employee_badge: {
        id: 'employee_badge',
        name: 'Other ID / Vertical Badge (54 × 85.6 mm)',
        dimText: '54.0 mm × 85.6 mm (5.40 × 8.56 cm)',
        widthMm: 54.0,
        heightMm: 85.6,
        aspectRatio: 54.0 / 85.6,
        isRecommendation: true,
        note: 'Vertical orientation badge (54 × 85.6 mm). Aspect ratio preserved.'
      },
      custom: {
        id: 'custom',
        name: 'Custom Dimensions',
        dimText: 'Custom Size',
        widthMm: 86.0,
        heightMm: 54.0,
        aspectRatio: 86.0 / 54.0,
        isRecommendation: true,
        note: 'Custom width and height. Aspect ratio preserved.'
      }
    };

    // State
    let selectedPresetKey = 'aadhaar';
    let customUnit = 'mm'; // 'mm' | 'in'
    let customWidthVal = 86.0;
    let customHeightVal = 54.0;
    let fitMode = 'contain'; // 'contain' (preserve aspect ratio) | 'cover'
    let addCuttingBorder = true;
    let showCornerGuides = true;

    // Print sheet settings
    const totalCopies = 1; // Single ID card per print job
    let paperOrientation = 'portrait';
    let currentPreviewPage = 1;
    let bothSidesLayoutMode = 'side_by_side'; // 'side_by_side' | 'stacked'

    // Interactive transforms per side
    let frontTransforms = { panX: 0, panY: 0, scale: 1.0, rotation: 0 };
    let backTransforms = { panX: 0, panY: 0, scale: 1.0, rotation: 0 };

    // Caching for zero-shake A4 preview
    let cachedFrontCardCanvas = null;
    let cachedBackCardCanvas = null;
    let isCachedCardsDirty = true;
    let isA4RafPending = false;
    let isEditorRafPending = false;
    let a4UpdateTimer = null;

    currentWorkbenchCleanup = function() {
      if (dom.toolModal) {
        dom.toolModal.classList.remove('modal-idcard-open');
      }
      if (a4UpdateTimer) {
        clearTimeout(a4UpdateTimer);
        a4UpdateTimer = null;
      }
      isA4RafPending = false;
      isEditorRafPending = false;
      if (frontObjUrl) {
        try { URL.revokeObjectURL(frontObjUrl); } catch (e) {}
        frontObjUrl = null;
      }
      if (backObjUrl) {
        try { URL.revokeObjectURL(backObjUrl); } catch (e) {}
        backObjUrl = null;
      }
      const printIframe = document.getElementById('idcard-print-iframe');
      if (printIframe) printIframe.remove();
      frontFile = null;
      frontImg = null;
      backFile = null;
      backImg = null;
      cachedFrontCardCanvas = null;
      cachedBackCardCanvas = null;
      isCachedCardsDirty = true;
    };

    function getCurrentPreset() {
      if (selectedPresetKey === 'custom') {
        const factor = (customUnit === 'in') ? 25.4 : 1.0;
        const wMm = Math.max(10, Math.min((customWidthVal || 86.0) * factor, 300));
        const hMm = Math.max(10, Math.min((customHeightVal || 54.0) * factor, 300));
        const unitSuffix = (customUnit === 'in')
          ? `${(wMm / 25.4).toFixed(2)} × ${(hMm / 25.4).toFixed(2)} in (${wMm.toFixed(1)} × ${hMm.toFixed(1)} mm)`
          : `${wMm.toFixed(1)} mm × ${hMm.toFixed(1)} mm (${(wMm / 10).toFixed(2)} × ${(hMm / 10).toFixed(2)} cm)`;

        return {
          id: 'custom',
          name: 'Custom Dimensions',
          dimText: unitSuffix,
          widthMm: wMm,
          heightMm: hMm,
          aspectRatio: wMm / hMm,
          isRecommendation: true,
          note: 'Custom physical dimensions. Image aspect ratio preserved without stretching.'
        };
      }
      return ID_PRESETS[selectedPresetKey] || ID_PRESETS.aadhaar;
    }

    function getCardBoxDimensions() {
      const preset = getCurrentPreset();
      const ar = preset.aspectRatio; // width / height
      let boxW = 210;
      let boxH = Math.round(boxW / ar);

      if (boxH > 185) {
        boxH = 185;
        boxW = Math.round(boxH * ar);
      }
      if (boxW > 240) {
        boxW = 240;
        boxH = Math.round(boxW / ar);
      }
      return { boxW, boxH };
    }

    // -------------------------------------------------------------
    // 1. SIDE SELECTION SCREEN (Ask BEFORE Importing)
    // -------------------------------------------------------------
    function renderSideSelectionScreen() {
      dom.modalBody.innerHTML = `
        <div class="workbench-container idcard-workbench-root">
          ${getOptionBPrivacyBannerHTML(
            '100% In-Browser ID Card Studio',
            'Your ID card documents are processed, arranged, and printed 100% locally on your computer. No images are ever uploaded to any cloud server.'
          )}

          <div class="idcard-selection-container">
            <div class="idcard-selection-header">
              <h3 class="idcard-selection-title">Select ID Card Print Mode</h3>
              <p class="idcard-selection-sub">Choose whether you are printing a single side or both front and back sides of your ID card.</p>
            </div>

            <div class="idcard-selection-grid">
              <!-- Option A: Front Side Only -->
              <div class="idcard-mode-card ${selectedSideMode === 'front_only' ? 'selected' : ''}" id="mode-card-front" data-mode="front_only" tabindex="0" role="button" aria-label="Select Front Side Only Mode">
                <div class="idcard-mode-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <circle cx="8" cy="11" r="2.5"></circle>
                    <path d="M5.5 16c0-1.5 1.5-2.5 2.5-2.5s2.5 1 2.5 2.5"></path>
                    <line x1="13" y1="9" x2="18" y2="9"></line>
                    <line x1="13" y1="13" x2="18" y2="13"></line>
                  </svg>
                </div>
                <div class="idcard-mode-card-title">Front Side Only</div>
                <div class="idcard-mode-card-desc">Single-sided ID card print. Arranges one front image on A4 paper for accurate printing.</div>
                <div class="idcard-mode-radio"></div>
              </div>

              <!-- Option B: Both Sides (Front + Back) -->
              <div class="idcard-mode-card ${selectedSideMode === 'both_sides' ? 'selected' : ''}" id="mode-card-both" data-mode="both_sides" tabindex="0" role="button" aria-label="Select Both Sides Mode">
                <div class="idcard-mode-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="14" height="11" rx="1.5"></rect>
                    <rect x="8" y="10" width="14" height="11" rx="1.5" fill="#f0fdfa"></rect>
                    <circle cx="6" cy="8" r="1.5"></circle>
                    <line x1="12" y1="14" x2="18" y2="14"></line>
                    <line x1="12" y1="17" x2="16" y2="17"></line>
                  </svg>
                </div>
                <div class="idcard-mode-card-title">Both Sides (Front + Back)</div>
                <div class="idcard-mode-card-desc">Dual-sided ID card print. Arranges one front and one back image together on A4 paper for accurate printing.</div>
                <div class="idcard-mode-radio"></div>
              </div>
            </div>

            <div style="display:flex; justify-content:center; width:100%; margin-top:0.5rem;">
              <button type="button" class="btn btn-primary btn-md" id="btn-idcard-continue-mode" ${selectedSideMode ? '' : 'disabled'}>
                Continue to Upload Images →
              </button>
            </div>
          </div>
        </div>
      `;

      const cardFront = document.getElementById('mode-card-front');
      const cardBoth = document.getElementById('mode-card-both');
      const continueBtn = document.getElementById('btn-idcard-continue-mode');

      function selectMode(mode) {
        selectedSideMode = mode;
        if (cardFront) cardFront.classList.toggle('selected', mode === 'front_only');
        if (cardBoth) cardBoth.classList.toggle('selected', mode === 'both_sides');
        if (continueBtn) continueBtn.disabled = false;
      }

      if (cardFront) {
        cardFront.addEventListener('click', () => selectMode('front_only'));
        cardFront.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectMode('front_only'); }
        });
      }
      if (cardBoth) {
        cardBoth.addEventListener('click', () => selectMode('both_sides'));
        cardBoth.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectMode('both_sides'); }
        });
      }
      if (continueBtn) {
        continueBtn.addEventListener('click', () => {
          if (!selectedSideMode) return;
          renderImportScreen();
        });
      }
    }

    // -------------------------------------------------------------
    // 2. IMAGE IMPORT SCREEN (Option B Interface)
    // -------------------------------------------------------------
    function renderImportScreen() {
      const modeLabel = (selectedSideMode === 'front_only') ? 'Front Side Only' : 'Both Sides (Front + Back)';

      let leftColHTML = '';

      if (selectedSideMode === 'front_only') {
        if (!frontFile) {
          leftColHTML = `
            <div class="option-b-dropzone" id="idcard-dropzone-front" tabindex="0" role="button" aria-label="Drop your Front ID Card image here, or click to browse">
              <svg class="option-b-upload-icon" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="12" width="36" height="26" rx="4" fill="#f0fdfa" stroke="#99f6e4" stroke-width="2"/>
                <circle cx="20" cy="22" r="3.5" fill="#0d9488"/>
                <path d="M16 32c0-2 2-3 4-3s4 1 4 3" stroke="#0d9488" stroke-width="1.8" fill="none"/>
                <line x1="28" y1="20" x2="40" y2="20" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
                <line x1="28" y1="26" x2="36" y2="26" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <div class="option-b-dropzone-title">Drop your Front ID Card image here</div>
              <div class="option-b-dropzone-sub">or click to browse from your device</div>
              <button type="button" class="option-b-browse-btn" id="idcard-browse-front">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                Browse Front Image
              </button>
              <div class="option-b-format-hint">Supports high-resolution JPG, PNG, WEBP images up to 25 MB</div>
              <input type="file" id="idcard-file-front" class="file-hidden-input" accept="image/*" style="display:none;" />
            </div>
          `;
        } else {
          leftColHTML = `
            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.15rem; display:flex; flex-direction:column; gap:0.85rem;">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <span style="font-size:0.825rem; font-weight:700; color:#0f766e; background:#f0fdfa; padding:0.15rem 0.55rem; border-radius:9999px; border:1px solid #99f6e4;">
                  ✓ Front Side Ready
                </span>
                <span style="font-size:0.75rem; color:#64748b;">${formatBytes(frontFile.size)}</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.85rem; background:#f8fafc; padding:0.65rem; border-radius:8px; border:1px solid #e2e8f0;">
                <img src="${frontObjUrl}" class="idcard-thumb-preview" alt="Front Preview" />
                <div style="min-width:0; flex:1;">
                  <div style="font-size:0.85rem; font-weight:600; color:#0f172a; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    ${escapeHtml(frontFile.name)}
                  </div>
                  <div style="font-size:0.72rem; color:#64748b; margin-top:0.15rem;">
                    Resolution: ${frontWidth} × ${frontHeight} px
                  </div>
                </div>
              </div>
              <div style="display:flex; gap:0.5rem; justify-content:flex-end;">
                <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-replace-front">Replace Image</button>
                <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-remove-front" style="color:#dc2626;">Remove</button>
              </div>
              <input type="file" id="idcard-file-front" class="file-hidden-input" accept="image/*" style="display:none;" />
              <button type="button" class="btn btn-primary btn-md" id="btn-idcard-proceed" style="width:100%; margin-top:0.35rem;">
                Proceed to Print Studio Workbench →
              </button>
            </div>
          `;
        }
      } else {
        // Both Sides Mode
        const frontReady = (frontFile !== null);
        const backReady = (backFile !== null);

        leftColHTML = `
          <div class="idcard-dual-import-col">
            <!-- Front Card Box -->
            <div class="idcard-import-card ${frontReady ? 'ready' : ''}" id="idcard-card-box-front">
              <div class="idcard-import-card-left">
                ${frontReady
                  ? `<img src="${frontObjUrl}" class="idcard-thumb-preview" alt="Front" />`
                  : `<div class="idcard-thumb-placeholder">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><circle cx="8" cy="11" r="2.5"></circle></svg>
                    </div>`
                }
                <div class="idcard-import-card-info">
                  <div class="idcard-import-card-label">Front Side Image ${frontReady ? '✓' : '*'}</div>
                  <div class="idcard-import-card-sub">${frontReady ? `${escapeHtml(frontFile.name)} (${frontWidth}×${frontHeight}px)` : 'Required • Click Browse or drag image'}</div>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:0.4rem;">
                <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-browse-front">
                  ${frontReady ? 'Replace' : 'Browse Front'}
                </button>
                ${frontReady ? `<button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-remove-front" style="color:#dc2626;">✕</button>` : ''}
              </div>
              <input type="file" id="idcard-file-front" class="file-hidden-input" accept="image/*" style="display:none;" />
            </div>

            <!-- Back Card Box -->
            <div class="idcard-import-card ${backReady ? 'ready' : ''}" id="idcard-card-box-back">
              <div class="idcard-import-card-left">
                ${backReady
                  ? `<img src="${backObjUrl}" class="idcard-thumb-preview" alt="Back" />`
                  : `<div class="idcard-thumb-placeholder">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M7 10h10M7 14h6"></path></svg>
                    </div>`
                }
                <div class="idcard-import-card-info">
                  <div class="idcard-import-card-label">Back Side Image ${backReady ? '✓' : '*'}</div>
                  <div class="idcard-import-card-sub">${backReady ? `${escapeHtml(backFile.name)} (${backWidth}×${backHeight}px)` : 'Required • Click Browse or drag image'}</div>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:0.4rem;">
                <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-browse-back">
                  ${backReady ? 'Replace' : 'Browse Back'}
                </button>
                ${backReady ? `<button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-remove-back" style="color:#dc2626;">✕</button>` : ''}
              </div>
              <input type="file" id="idcard-file-back" class="file-hidden-input" accept="image/*" style="display:none;" />
            </div>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.45rem 0.75rem; font-size:0.74rem; color:#475569; display:flex; align-items:center; justify-content:space-between;">
              <span>Status: <strong>${frontReady && backReady ? 'Both sides ready!' : (frontReady ? 'Front ready, back pending' : 'Awaiting card images')}</strong></span>
              <span style="color:#0d9488; font-weight:600;">Max 25 MB per image</span>
            </div>

            <button type="button" class="btn btn-primary btn-md" id="btn-idcard-proceed" ${frontReady && backReady ? '' : 'disabled'} style="width:100%; margin-top:0.25rem;">
              Proceed to Print Studio Workbench →
            </button>
          </div>
        `;
      }

      dom.modalBody.innerHTML = `
        <div class="workbench-container idcard-workbench-root">
          <!-- Top breadcrumb / navigation bar -->
          <div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; padding:0.45rem 0.85rem; border-radius:8px; border:1px solid #e2e8f0; flex-shrink:0;">
            <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-back-to-mode">
              ← Change Side Selection
            </button>
            <span class="idcard-active-dim-badge">Mode: ${escapeHtml(modeLabel)}</span>
          </div>

          <!-- Option B Standard Two-Column Layout -->
          <div class="option-b-import-container">
            <div class="option-b-grid">
              <!-- Left Column -->
              ${leftColHTML}

              <!-- Right Column: Shared Info Panel & Illustration -->
              <div class="option-b-info-col">
                <div class="option-b-illustration-wrap">
                  ${createOptionBIllustrationSvg('ID CARD', '#0d9488')}
                </div>
                <div class="option-b-checklist">
                  <div class="option-b-check-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#10b981"/><path d="M6 10.5L8.5 13L14 7.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>100% In-Browser ID Layout Engine</span>
                  </div>
                  <div class="option-b-check-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#10b981"/><path d="M6 10.5L8.5 13L14 7.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Strict Aspect Ratio & Zero Distortion</span>
                  </div>
                  <div class="option-b-check-item">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#10b981"/><path d="M6 10.5L8.5 13L14 7.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Exact Millimeter A4 Print Scaling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      setupImportScreenListeners();
    }

    function setupImportScreenListeners() {
      // Back to side mode selection
      const backBtn = document.getElementById('btn-idcard-back-to-mode');
      if (backBtn) backBtn.addEventListener('click', renderSideSelectionScreen);

      // Handle front file selection
      const frontInput = document.getElementById('idcard-file-front');
      const frontBrowse = document.getElementById('idcard-browse-front') || document.getElementById('btn-idcard-browse-front') || document.getElementById('btn-idcard-replace-front');
      const frontDropzone = document.getElementById('idcard-dropzone-front') || document.getElementById('idcard-card-box-front');
      const frontRemove = document.getElementById('btn-idcard-remove-front');

      function handleFrontFile(file) {
        if (!file) return;
        if (!file.type.startsWith('image/')) {
          showToast('Please select a valid image file (JPG, PNG, WEBP).', 'error');
          return;
        }
        if (file.size > 25 * 1024 * 1024) {
          showToast('Image file exceeds the 25 MB size limit.', 'error');
          return;
        }

        if (frontObjUrl) {
          try { URL.revokeObjectURL(frontObjUrl); } catch (e) {}
        }
        frontFile = file;
        frontObjUrl = URL.createObjectURL(file);

        const img = new Image();
        img.onload = () => {
          frontImg = img;
          frontWidth = img.naturalWidth || img.width;
          frontHeight = img.naturalHeight || img.height;
          frontTransforms = { panX: 0, panY: 0, scale: 1.0, rotation: 0 };
          cachedFrontCardCanvas = null;
          isCachedCardsDirty = true;
          renderImportScreen();
        };
        img.onerror = () => {
          showToast('Failed to load image file.', 'error');
          frontFile = null;
          renderImportScreen();
        };
        img.src = frontObjUrl;
      }

      if (frontBrowse && frontInput) {
        frontBrowse.addEventListener('click', (e) => {
          e.stopPropagation();
          frontInput.click();
        });
      }
      if (frontInput) {
        frontInput.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            handleFrontFile(e.target.files[0]);
          }
        });
      }
      if (frontRemove) {
        frontRemove.addEventListener('click', (e) => {
          e.stopPropagation();
          if (frontObjUrl) {
            try { URL.revokeObjectURL(frontObjUrl); } catch (err) {}
            frontObjUrl = null;
          }
          frontFile = null;
          frontImg = null;
          cachedFrontCardCanvas = null;
          isCachedCardsDirty = true;
          renderImportScreen();
        });
      }

      if (frontDropzone) {
        frontDropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          frontDropzone.classList.add('drag-over');
        });
        frontDropzone.addEventListener('dragleave', () => {
          frontDropzone.classList.remove('drag-over');
        });
        frontDropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          frontDropzone.classList.remove('drag-over');
          if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFrontFile(e.dataTransfer.files[0]);
          }
        });
        frontDropzone.addEventListener('click', (e) => {
          // If clicking background of dropzone (not buttons)
          if (e.target.tagName !== 'BUTTON' && frontInput) {
            frontInput.click();
          }
        });
      }

      // Handle back file selection (in Both Sides mode)
      if (selectedSideMode === 'both_sides') {
        const backInput = document.getElementById('idcard-file-back');
        const backBrowse = document.getElementById('btn-idcard-browse-back');
        const backDropzone = document.getElementById('idcard-card-box-back');
        const backRemove = document.getElementById('btn-idcard-remove-back');

        function handleBackFile(file) {
          if (!file) return;
          if (!file.type.startsWith('image/')) {
            showToast('Please select a valid image file (JPG, PNG, WEBP).', 'error');
            return;
          }
          if (file.size > 25 * 1024 * 1024) {
            showToast('Image file exceeds the 25 MB size limit.', 'error');
            return;
          }

          if (backObjUrl) {
            try { URL.revokeObjectURL(backObjUrl); } catch (e) {}
          }
          backFile = file;
          backObjUrl = URL.createObjectURL(file);

          const img = new Image();
          img.onload = () => {
            backImg = img;
            backWidth = img.naturalWidth || img.width;
            backHeight = img.naturalHeight || img.height;
            backTransforms = { panX: 0, panY: 0, scale: 1.0, rotation: 0 };
            cachedBackCardCanvas = null;
            isCachedCardsDirty = true;
            renderImportScreen();
          };
          img.onerror = () => {
            showToast('Failed to load image file.', 'error');
            backFile = null;
            renderImportScreen();
          };
          img.src = backObjUrl;
        }

        if (backBrowse && backInput) {
          backBrowse.addEventListener('click', (e) => {
            e.stopPropagation();
            backInput.click();
          });
        }
        if (backInput) {
          backInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
              handleBackFile(e.target.files[0]);
            }
          });
        }
        if (backRemove) {
          backRemove.addEventListener('click', (e) => {
            e.stopPropagation();
            if (backObjUrl) {
              try { URL.revokeObjectURL(backObjUrl); } catch (err) {}
              backObjUrl = null;
            }
            backFile = null;
            backImg = null;
            cachedBackCardCanvas = null;
            isCachedCardsDirty = true;
            renderImportScreen();
          });
        }
        if (backDropzone) {
          backDropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            backDropzone.classList.add('drag-over');
          });
          backDropzone.addEventListener('dragleave', () => {
            backDropzone.classList.remove('drag-over');
          });
          backDropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            backDropzone.classList.remove('drag-over');
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
              handleBackFile(e.dataTransfer.files[0]);
            }
          });
          backDropzone.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON' && backInput) {
              backInput.click();
            }
          });
        }
      }

      // Proceed to Workbench button
      const proceedBtn = document.getElementById('btn-idcard-proceed');
      if (proceedBtn) {
        proceedBtn.addEventListener('click', () => {
          if (!frontFile && !backFile) {
            showToast('Please upload an image before proceeding.', 'error');
            return;
          }
          renderStudioWorkbench();
        });
      }
    }

    // -------------------------------------------------------------
    // 3. STUDIO WORKBENCH (Desktop Fixed Layout & Live A4 Sheet Preview)
    // -------------------------------------------------------------
    function renderStudioWorkbench() {
      const preset = getCurrentPreset();
      const modeLabel = (selectedSideMode === 'front_only') ? 'Front Side Only' : 'Both Sides (Front + Back)';
      const fileSummary = (selectedSideMode === 'front_only')
        ? escapeHtml(frontFile?.name || 'Front Image')
        : `Front: ${escapeHtml(frontFile?.name || 'Front')} • Back: ${escapeHtml(backFile?.name || 'Back')}`;

      dom.modalBody.innerHTML = `
        <div class="workbench-container idcard-workbench-root">
          <!-- Top File & Mode Bar -->
          <div class="idcard-file-bar">
            <div class="idcard-file-meta">
              <div class="idcard-file-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <circle cx="8" cy="11" r="2.5"></circle>
                  <line x1="13" y1="9" x2="18" y2="9"></line>
                  <line x1="13" y1="13" x2="18" y2="13"></line>
                </svg>
              </div>
              <div class="idcard-file-details">
                <div class="idcard-file-name" title="${fileSummary}">${fileSummary}</div>
                <div class="idcard-file-sub">
                  <span>${escapeHtml(modeLabel)}</span>
                  <span>•</span>
                  <span class="idcard-active-dim-badge" id="idcard-header-dim-badge">${escapeHtml(preset.dimText)}</span>
                </div>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-change-images">
                Change Images
              </button>
              <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-change-mode">
                Change Mode
              </button>
            </div>
          </div>

          <!-- Dual-Panel Grid -->
          <div class="idcard-grid">
            <!-- Left Panel: Card Sizing, Framing & Controls -->
            <div class="idcard-card">
              <div class="idcard-card-header">
                <div class="idcard-card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <circle cx="8" cy="11" r="2.5"></circle>
                  </svg>
                  ID Card Sizing & Framing
                </div>
                <span class="idcard-active-dim-badge" id="idcard-card-dim-badge">${escapeHtml(preset.dimText)}</span>
              </div>
              <div class="idcard-card-body">
                <!-- Preset Dimension Selector -->
                <div>
                  <label for="idcard-preset-select" style="display:block; font-size:0.75rem; font-weight:600; color:#334155; margin-bottom:0.25rem;">
                    ID Card Dimension Preset:
                  </label>
                  <select id="idcard-preset-select" class="idcard-preset-select">
                    <option value="aadhaar" ${selectedPresetKey === 'aadhaar' ? 'selected' : ''}>Aadhaar PVC Card (86 × 54 mm)</option>
                    <option value="voter_id" ${selectedPresetKey === 'voter_id' ? 'selected' : ''}>Voter ID PVC Card (86 × 54 mm)</option>
                    <option value="pan_card" ${selectedPresetKey === 'pan_card' ? 'selected' : ''}>PAN Card (CR80 Standard — 85.6 × 54 mm)</option>
                    <option value="driving_licence" ${selectedPresetKey === 'driving_licence' ? 'selected' : ''}>Driving Licence (Smart Card — 85.6 × 54.02 mm)</option>
                    <option value="employee_badge" ${selectedPresetKey === 'employee_badge' ? 'selected' : ''}>Other ID / Vertical Badge (54 × 85.6 mm)</option>
                    <option value="custom" ${selectedPresetKey === 'custom' ? 'selected' : ''}>Custom Dimensions (Width × Height)</option>
                  </select>
                </div>

                <!-- Custom Dimensions Row (if custom selected) -->
                <div id="idcard-custom-dim-row" style="display: ${selectedPresetKey === 'custom' ? 'flex' : 'none'}; gap: 0.5rem; align-items: flex-end;">
                  <div style="flex:1;">
                    <label style="font-size:0.7rem; color:#64748b; font-weight:600;">Unit:</label>
                    <select id="idcard-custom-unit" style="width:100%; font-size:0.75rem; padding:0.25rem; border:1px solid #cbd5e1; border-radius:4px;">
                      <option value="mm" ${customUnit === 'mm' ? 'selected' : ''}>Millimeters (mm)</option>
                      <option value="in" ${customUnit === 'in' ? 'selected' : ''}>Inches (in)</option>
                    </select>
                  </div>
                  <div style="flex:1;">
                    <label style="font-size:0.7rem; color:#64748b; font-weight:600;">Width:</label>
                    <input type="number" id="idcard-custom-width" step="0.1" min="10" max="300" value="${customWidthVal}" class="form-control form-control-sm" style="width:100%; font-size:0.78rem; padding:0.25rem;" />
                  </div>
                  <div style="flex:1;">
                    <label style="font-size:0.7rem; color:#64748b; font-weight:600;">Height:</label>
                    <input type="number" id="idcard-custom-height" step="0.1" min="10" max="300" value="${customHeightVal}" class="form-control form-control-sm" style="width:100%; font-size:0.78rem; padding:0.25rem;" />
                  </div>
                </div>

                <!-- Dimension Callout Box -->
                <div class="idcard-dim-display-box">
                  <div>
                    <span style="font-size:0.7rem; color:#0f766e; font-weight:500;">Exact Physical Dimensions:</span>
                    <div class="idcard-dim-val" id="idcard-dim-val-display">${escapeHtml(preset.dimText)}</div>
                  </div>
                  <div style="text-align:right;">
                    <span style="font-size:0.7rem; color:#0f766e; font-weight:600; background:#ccfbf1; padding:0.1rem 0.35rem; border-radius:4px;">
                      ${preset.isRecommendation ? 'Editable Recommendation' : 'ISO 7810 Standard'}
                    </span>
                  </div>
                </div>

                <!-- Tabs Row (Both Sides mode only) -->
                ${selectedSideMode === 'both_sides' ? `
                  <div class="idcard-tabs-row">
                    <button type="button" class="idcard-tab-btn ${activeTab === 'front' ? 'active' : ''}" id="tab-idcard-front">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                      Front Side
                    </button>
                    <button type="button" class="idcard-tab-btn ${activeTab === 'back' ? 'active' : ''}" id="tab-idcard-back">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="6" y1="12" x2="18" y2="12"></line></svg>
                      Back Side
                    </button>
                  </div>
                ` : ''}

                <!-- Interactive Card Framing Viewport -->
                <div class="idcard-crop-viewport">
                  <div class="idcard-crop-canvas-wrapper" id="idcard-crop-wrapper">
                    <canvas id="idcard-crop-canvas" class="idcard-crop-canvas"></canvas>
                  </div>
                  <div class="idcard-crop-hint">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"></path></svg>
                    <span>Click & drag to position • Mouse wheel to zoom</span>
                  </div>
                </div>

                <!-- Toolbar Controls: Zoom, Rotate, Fit Mode -->
                <div class="idcard-toolbar-row">
                  <div class="idcard-btn-group">
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-zoom-out" title="Zoom Out">−</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-zoom-reset" title="Reset Zoom">Reset</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-zoom-in" title="Zoom In">+</button>
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-rotate" title="Rotate 90°">⟳ 90°</button>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.35rem;">
                    <label for="idcard-fit-mode-select" style="font-size:0.7rem; color:#475569; font-weight:600;">Fit:</label>
                    <select id="idcard-fit-mode-select" style="font-size:0.7rem; padding:0.15rem 0.35rem; border:1px solid #cbd5e1; border-radius:4px; background:#fff; cursor:pointer;">
                      <option value="contain" ${fitMode === 'contain' ? 'selected' : ''}>Fit (Entire Image)</option>
                      <option value="cover" ${fitMode === 'cover' ? 'selected' : ''}>Fill Card (Cover)</option>
                    </select>
                  </div>
                </div>

                <!-- Guides row: Cutting border & Rounded corner guides -->
                <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.4rem; padding-top:0.25rem; border-top:1px dashed #e2e8f0;">
                  <label style="display:flex; align-items:center; gap:0.35rem; font-size:0.74rem; color:#1e293b; cursor:pointer; user-select:none;">
                    <input type="checkbox" id="chk-idcard-cut-border" ${addCuttingBorder ? 'checked' : ''} />
                    <span>Cutting guide border</span>
                  </label>
                  <label style="display:flex; align-items:center; gap:0.35rem; font-size:0.74rem; color:#1e293b; cursor:pointer; user-select:none;">
                    <input type="checkbox" id="chk-idcard-corner-guide" ${showCornerGuides ? 'checked' : ''} />
                    <span>CR80 rounded corners (3.18mm)</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Right Panel: A4 Print Sheet Preview & Output -->
            <div class="idcard-card">
              <div class="idcard-card-header">
                <div class="idcard-card-title">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  A4 Print Sheet Preview
                </div>
                <div style="display:flex; align-items:center; gap:0.4rem;">
                  ${selectedSideMode === 'both_sides' ? `
                    <select id="idcard-both-layout-select" style="font-size:0.68rem; padding:0.1rem 0.35rem; border:1px solid #cbd5e1; border-radius:4px; background:#fff; font-weight:600; color:#0f766e; cursor:pointer;">
                      <option value="side_by_side" ${bothSidesLayoutMode === 'side_by_side' ? 'selected' : ''}>Pair Side-by-Side (F|B)</option>
                      <option value="stacked" ${bothSidesLayoutMode === 'stacked' ? 'selected' : ''}>Pair Stacked (F/B)</option>
                    </select>
                  ` : ''}
                  <div class="idcard-btn-group">
                    <button type="button" class="btn btn-secondary btn-xs ${paperOrientation === 'portrait' ? 'active' : ''}" id="btn-idcard-orient-portrait">Portrait</button>
                    <button type="button" class="btn btn-secondary btn-xs ${paperOrientation === 'landscape' ? 'active' : ''}" id="btn-idcard-orient-landscape">Landscape</button>
                  </div>
                </div>
              </div>

              <div class="idcard-card-body">
                <!-- Single Print Sheet Banner -->
                <div class="idcard-single-print-banner">
                  <div style="display:flex; align-items:center; gap:0.4rem; min-width:0;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M12 8v8M8 12h8"></path>
                    </svg>
                    <span style="font-size:0.75rem; font-weight:700; color:#0f766e;" id="idcard-sheet-stats">
                      ${selectedSideMode === 'front_only' ? 'Single ID Card • Front Side Only (1 Copy on A4)' : 'Single ID Card • Front & Back Pair (1 Copy on A4)'}
                    </span>
                  </div>
                  <span class="idcard-active-dim-badge" style="font-size:0.68rem; flex-shrink:0;">1 Card Print</span>
                </div>

                <!-- A4 Preview Viewport -->
                <div class="idcard-a4-viewport">

                  <!-- A4 Canvas -->
                  <canvas id="idcard-a4-canvas" class="idcard-a4-paper"></canvas>

                  <div class="idcard-a4-footer-info">
                    <span>Standard A4 Paper (210 × 297 mm)</span>
                    <span>•</span>
                    <span>Print at Actual Size / 100% Scale</span>
                  </div>
                </div>

                <!-- Actions Bar -->
                <div class="idcard-actions-bar">
                  <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-dl-front" title="Download Front ID card image at 300 DPI">
                    Download Front (300 DPI)
                  </button>
                  ${selectedSideMode === 'both_sides' && backFile ? `
                    <button type="button" class="btn btn-secondary btn-xs" id="btn-idcard-dl-back" title="Download Back ID card image at 300 DPI">
                      Download Back (300 DPI)
                    </button>
                  ` : ''}
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-idcard-print" title="Print directly to your printer with exact physical millimeter scaling">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    Print ID Cards
                  </button>
                  <button type="button" class="btn btn-primary btn-sm" id="btn-idcard-download-pdf" title="Download print-ready A4 PDF document with exact physical dimensions">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Print Sheet PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      setupWorkbenchListeners();
      drawEditorCanvasDirect();
      renderA4Preview();
    }

    function setupWorkbenchListeners() {
      // Top Bar navigation
      const changeImagesBtn = document.getElementById('btn-idcard-change-images');
      if (changeImagesBtn) changeImagesBtn.addEventListener('click', renderImportScreen);

      const changeModeBtn = document.getElementById('btn-idcard-change-mode');
      if (changeModeBtn) changeModeBtn.addEventListener('click', renderSideSelectionScreen);

      // Preset Selector
      const presetSelect = document.getElementById('idcard-preset-select');
      const customRow = document.getElementById('idcard-custom-dim-row');
      if (presetSelect) {
        presetSelect.addEventListener('change', (e) => {
          selectedPresetKey = e.target.value;
          if (customRow) customRow.style.display = (selectedPresetKey === 'custom') ? 'flex' : 'none';
          updateDimensionLabels();
          isCachedCardsDirty = true;
          ensureEditorCanvasLayout();
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }

      // Custom dimensions inputs
      const customUnitSelect = document.getElementById('idcard-custom-unit');
      const customWInput = document.getElementById('idcard-custom-width');
      const customHInput = document.getElementById('idcard-custom-height');

      if (customUnitSelect) {
        customUnitSelect.addEventListener('change', (e) => {
          customUnit = e.target.value;
          updateDimensionLabels();
          isCachedCardsDirty = true;
          ensureEditorCanvasLayout();
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      if (customWInput) {
        customWInput.addEventListener('input', (e) => {
          customWidthVal = parseFloat(e.target.value) || 86.0;
          updateDimensionLabels();
          isCachedCardsDirty = true;
          ensureEditorCanvasLayout();
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      if (customHInput) {
        customHInput.addEventListener('input', (e) => {
          customHeightVal = parseFloat(e.target.value) || 54.0;
          updateDimensionLabels();
          isCachedCardsDirty = true;
          ensureEditorCanvasLayout();
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }

      // Front / Back Tabs
      if (selectedSideMode === 'both_sides') {
        const tabFront = document.getElementById('tab-idcard-front');
        const tabBack = document.getElementById('tab-idcard-back');
        if (tabFront && tabBack) {
          tabFront.addEventListener('click', () => {
            activeTab = 'front';
            tabFront.classList.add('active');
            tabBack.classList.remove('active');
            drawEditorCanvasDirect();
          });
          tabBack.addEventListener('click', () => {
            activeTab = 'back';
            tabBack.classList.add('active');
            tabFront.classList.remove('active');
            drawEditorCanvasDirect();
          });
        }
      }

      // Zoom, Reset & Rotate
      const zoomInBtn = document.getElementById('btn-idcard-zoom-in');
      const zoomOutBtn = document.getElementById('btn-idcard-zoom-out');
      const zoomResetBtn = document.getElementById('btn-idcard-zoom-reset');
      const rotateBtn = document.getElementById('btn-idcard-rotate');
      const fitSelect = document.getElementById('idcard-fit-mode-select');

      function getActiveTransforms() {
        return (activeTab === 'front') ? frontTransforms : backTransforms;
      }

      if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
          const t = getActiveTransforms();
          t.scale = Math.min(t.scale * 1.15, 6.0);
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
          const t = getActiveTransforms();
          t.scale = Math.max(t.scale * 0.85, 0.2);
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', () => {
          const t = getActiveTransforms();
          t.scale = 1.0;
          t.panX = 0;
          t.panY = 0;
          t.rotation = 0;
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      if (rotateBtn) {
        rotateBtn.addEventListener('click', () => {
          const t = getActiveTransforms();
          t.rotation = (t.rotation + 90) % 360;
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      if (fitSelect) {
        fitSelect.addEventListener('change', (e) => {
          fitMode = e.target.value;
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }

      // Guides
      const cutBorderChk = document.getElementById('chk-idcard-cut-border');
      if (cutBorderChk) {
        cutBorderChk.addEventListener('change', (e) => {
          addCuttingBorder = e.target.checked;
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        });
      }
      const cornerGuideChk = document.getElementById('chk-idcard-corner-guide');
      if (cornerGuideChk) {
        cornerGuideChk.addEventListener('change', (e) => {
          showCornerGuides = e.target.checked;
          drawEditorCanvasDirect();
        });
      }

      // Orientation & Layout
      const portraitBtn = document.getElementById('btn-idcard-orient-portrait');
      const landscapeBtn = document.getElementById('btn-idcard-orient-landscape');
      if (portraitBtn && landscapeBtn) {
        portraitBtn.addEventListener('click', () => {
          paperOrientation = 'portrait';
          portraitBtn.classList.add('active');
          landscapeBtn.classList.remove('active');
          currentPreviewPage = 1;
          renderA4Preview();
        });
        landscapeBtn.addEventListener('click', () => {
          paperOrientation = 'landscape';
          landscapeBtn.classList.add('active');
          portraitBtn.classList.remove('active');
          currentPreviewPage = 1;
          renderA4Preview();
        });
      }

      const bothLayoutSelect = document.getElementById('idcard-both-layout-select');
      if (bothLayoutSelect) {
        bothLayoutSelect.addEventListener('change', (e) => {
          bothSidesLayoutMode = e.target.value;
          currentPreviewPage = 1;
          renderA4Preview();
        });
      }

      // Single ID Card per print job - no copy count controls needed

      // Interactive Pointer Drag & Wheel Zoom on Editor Canvas
      const canvas = document.getElementById('idcard-crop-canvas');
      if (canvas) {
        let isDragging = false;
        let startClientX = 0, startClientY = 0;
        let startPanX = 0, startPanY = 0;

        canvas.addEventListener('wheel', (e) => {
          e.preventDefault();
          const t = getActiveTransforms();
          const factor = e.deltaY < 0 ? 1.06 : 0.94;
          t.scale = Math.min(Math.max(t.scale * factor, 0.2), 6.0);
          isCachedCardsDirty = true;
          drawEditorCanvasDirect();
          renderA4Preview();
        }, { passive: false });

        canvas.addEventListener('pointerdown', (e) => {
          isDragging = true;
          const t = getActiveTransforms();
          startClientX = e.clientX;
          startClientY = e.clientY;
          startPanX = t.panX;
          startPanY = t.panY;
          try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
        });

        canvas.addEventListener('pointermove', (e) => {
          if (!isDragging) return;
          const t = getActiveTransforms();
          t.panX = startPanX + (e.clientX - startClientX);
          t.panY = startPanY + (e.clientY - startClientY);
          drawEditorCanvasDirect();
        });

        const stopDrag = (e) => {
          if (isDragging) {
            isDragging = false;
            try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
            isCachedCardsDirty = true;
            renderA4Preview();
          }
        };
        canvas.addEventListener('pointerup', stopDrag);
        canvas.addEventListener('pointercancel', stopDrag);
      }

      // Action outputs
      const dlFrontBtn = document.getElementById('btn-idcard-dl-front');
      if (dlFrontBtn) dlFrontBtn.addEventListener('click', () => downloadSingleCard('front'));

      const dlBackBtn = document.getElementById('btn-idcard-dl-back');
      if (dlBackBtn) dlBackBtn.addEventListener('click', () => downloadSingleCard('back'));

      const printBtn = document.getElementById('btn-idcard-print');
      if (printBtn) printBtn.addEventListener('click', printIdCards);

      const dlPdfBtn = document.getElementById('btn-idcard-download-pdf');
      if (dlPdfBtn) dlPdfBtn.addEventListener('click', downloadA4Pdf);
    }

    function updateDimensionLabels() {
      const preset = getCurrentPreset();
      const headBadge = document.getElementById('idcard-header-dim-badge');
      const cardBadge = document.getElementById('idcard-card-dim-badge');
      const dimDisplay = document.getElementById('idcard-dim-val-display');

      if (headBadge) headBadge.textContent = preset.dimText;
      if (cardBadge) cardBadge.textContent = preset.dimText;
      if (dimDisplay) dimDisplay.textContent = preset.dimText;
    }

    function ensureEditorCanvasLayout() {
      const canvas = document.getElementById('idcard-crop-canvas');
      const wrapper = document.getElementById('idcard-crop-wrapper');
      if (!canvas || !wrapper) return;

      const { boxW, boxH } = getCardBoxDimensions();
      const dpr = window.devicePixelRatio || 1;

      if (canvas._cachedBoxW !== boxW || canvas._cachedBoxH !== boxH || canvas._cachedDpr !== dpr) {
        canvas._cachedBoxW = boxW;
        canvas._cachedBoxH = boxH;
        canvas._cachedDpr = dpr;

        canvas.width = boxW * dpr;
        canvas.height = boxH * dpr;
        canvas.style.width = boxW + 'px';
        canvas.style.height = boxH + 'px';

        wrapper.style.width = boxW + 'px';
        wrapper.style.height = boxH + 'px';
      }
    }

    function drawEditorCanvasDirect() {
      const canvas = document.getElementById('idcard-crop-canvas');
      if (!canvas) return;

      ensureEditorCanvasLayout();

      const { boxW, boxH } = getCardBoxDimensions();
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext('2d');

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Card surface
      ctx.clearRect(0, 0, boxW, boxH);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, boxW, boxH);

      const img = (activeTab === 'front') ? frontImg : backImg;
      const t = (activeTab === 'front') ? frontTransforms : backTransforms;

      if (img) {
        const imgW = img.naturalWidth || img.width;
        const imgH = img.naturalHeight || img.height;

        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, boxW, boxH);
        ctx.clip();

        ctx.translate(boxW / 2 + t.panX, boxH / 2 + t.panY);
        ctx.rotate((t.rotation * Math.PI) / 180);

        const effW = (t.rotation % 180 === 0) ? imgW : imgH;
        const effH = (t.rotation % 180 === 0) ? imgH : imgW;

        let baseScale = 1.0;
        if (fitMode === 'cover') {
          baseScale = Math.max(boxW / effW, boxH / effH);
        } else {
          baseScale = Math.min(boxW / effW, boxH / effH);
        }

        const drawW = imgW * baseScale * t.scale;
        const drawH = imgH * baseScale * t.scale;

        ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
      } else {
        // No image placeholder
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, boxW, boxH);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`No ${activeTab} image loaded`, boxW / 2, boxH / 2);
      }

      // CR80 rounded corners guide (3.18mm)
      if (showCornerGuides) {
        ctx.save();
        const preset = getCurrentPreset();
        const cornerPx = Math.round(boxH * (3.18 / preset.heightMm));
        ctx.strokeStyle = 'rgba(13, 148, 136, 0.75)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);

        ctx.beginPath();
        // Top-left
        ctx.arc(cornerPx, cornerPx, cornerPx, Math.PI, Math.PI * 1.5);
        // Top-right
        ctx.arc(boxW - cornerPx, cornerPx, cornerPx, Math.PI * 1.5, Math.PI * 2);
        // Bottom-right
        ctx.arc(boxW - cornerPx, boxH - cornerPx, cornerPx, 0, Math.PI * 0.5);
        // Bottom-left
        ctx.arc(cornerPx, boxH - cornerPx, cornerPx, Math.PI * 0.5, Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      // Cutting guide border
      if (addCuttingBorder) {
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1;
        ctx.strokeRect(0.5, 0.5, boxW - 1, boxH - 1);
      }

      // Side badge in bottom left
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
      ctx.fillRect(4, boxH - 16, (activeTab === 'front' ? 44 : 42), 12);
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 8px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText((activeTab === 'front' ? 'FRONT' : 'BACK'), 4 + (activeTab === 'front' ? 22 : 21), boxH - 7);

      ctx.restore();
    }

    function getHighResCardCanvas(side = 'front') {
      if (!isCachedCardsDirty) {
        if (side === 'front' && cachedFrontCardCanvas) return cachedFrontCardCanvas;
        if (side === 'back' && cachedBackCardCanvas) return cachedBackCardCanvas;
      }

      const dpmm = 300 / 25.4; // 300 DPI
      const preset = getCurrentPreset();
      const outW = Math.round(preset.widthMm * dpmm);
      const outH = Math.round(preset.heightMm * dpmm);

      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d');

      // Card white base
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, outW, outH);

      const img = (side === 'front') ? frontImg : backImg;
      const t = (side === 'front') ? frontTransforms : backTransforms;

      if (img) {
        const { boxW } = getCardBoxDimensions();
        const ratio = outW / boxW;
        const imgW = img.naturalWidth || img.width;
        const imgH = img.naturalHeight || img.height;

        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, outW, outH);
        ctx.clip();

        ctx.translate(outW / 2 + t.panX * ratio, outH / 2 + t.panY * ratio);
        ctx.rotate((t.rotation * Math.PI) / 180);

        const effW = (t.rotation % 180 === 0) ? imgW : imgH;
        const effH = (t.rotation % 180 === 0) ? imgH : imgW;

        let baseScale = 1.0;
        if (fitMode === 'cover') {
          baseScale = Math.max(outW / effW, outH / effH);
        } else {
          baseScale = Math.min(outW / effW, outH / effH);
        }

        const drawW = imgW * baseScale * t.scale;
        const drawH = imgH * baseScale * t.scale;

        ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
      }

      if (addCuttingBorder) {
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = Math.max(1, Math.round(dpmm * 0.2));
        ctx.strokeRect(0, 0, outW, outH);
      }

      if (side === 'front') {
        cachedFrontCardCanvas = canvas;
      } else {
        cachedBackCardCanvas = canvas;
      }

      return canvas;
    }

    function getA4SheetParameters() {
      const preset = getCurrentPreset();
      const isPortrait = (paperOrientation === 'portrait');
      const paperWidthMm = isPortrait ? 210 : 297;
      const paperHeightMm = isPortrait ? 297 : 210;

      const marginMm = 8;
      const gapMm = 6;
      const cardW = preset.widthMm;
      const cardH = preset.heightMm;

      let gridWidthMm = 0, gridHeightMm = 0;

      if (selectedSideMode === 'front_only') {
        gridWidthMm = cardW;
        gridHeightMm = cardH;
      } else {
        // Both Sides Mode (1 Front and 1 Back image arranged together)
        if (bothSidesLayoutMode === 'side_by_side') {
          gridWidthMm = cardW * 2 + gapMm;
          gridHeightMm = cardH;
        } else {
          // Stacked (Front over Back)
          gridWidthMm = cardW;
          gridHeightMm = cardH * 2 + gapMm;
        }
      }

      const totalPages = 1;
      const startXMm = Math.max(marginMm, (paperWidthMm - gridWidthMm) / 2);
      const startYMm = Math.max(marginMm, (paperHeightMm - gridHeightMm) / 2);

      return {
        isPortrait,
        paperWidthMm,
        paperHeightMm,
        marginMm,
        gapMm,
        cardW,
        cardH,
        gridWidthMm,
        gridHeightMm,
        totalPages,
        startXMm,
        startYMm
      };
    }

    function drawA4PreviewDirect() {
      const canvas = document.getElementById('idcard-a4-canvas');
      if (!canvas) return;

      const params = getA4SheetParameters();
      if (currentPreviewPage > params.totalPages) {
        currentPreviewPage = params.totalPages;
      }

      const displayW = params.isPortrait ? 215 : 304;
      const displayH = Math.round(displayW * (params.paperHeightMm / params.paperWidthMm));
      const dpr = window.devicePixelRatio || 1;

      // Stable canvas element dimensions
      if (canvas._cachedW !== displayW || canvas._cachedH !== displayH || canvas._cachedDpr !== dpr) {
        canvas._cachedW = displayW;
        canvas._cachedH = displayH;
        canvas._cachedDpr = dpr;
        canvas.width = displayW * dpr;
        canvas.height = displayH * dpr;
        canvas.style.width = displayW + 'px';
        canvas.style.height = displayH + 'px';
      }

      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.scale(dpr, dpr);

      // Sheet surface
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, displayW, displayH);

      const scaleRatio = displayW / params.paperWidthMm;
      const marginPx = params.marginMm * scaleRatio;
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 1;
      ctx.strokeRect(marginPx, marginPx, displayW - 2 * marginPx, displayH - 2 * marginPx);

      const frontCanvas = getHighResCardCanvas('front');
      const backCanvas = (selectedSideMode === 'both_sides') ? getHighResCardCanvas('back') : null;
      isCachedCardsDirty = false;

      const cardPxW = params.cardW * scaleRatio;
      const cardPxH = params.cardH * scaleRatio;
      const gapPx = params.gapMm * scaleRatio;
      const startXPx = params.startXMm * scaleRatio;
      const startYPx = params.startYMm * scaleRatio;

function drawCornerTicks(x, y, w, h) {
        ctx.save();
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 2]);
        const tick = 3;
        // Top-left
        ctx.beginPath();
        ctx.moveTo(x - tick, y); ctx.lineTo(x, y);
        ctx.moveTo(x, y - tick); ctx.lineTo(x, y);
        // Top-right
        ctx.moveTo(x + w, y); ctx.lineTo(x + w + tick, y);
        ctx.moveTo(x + w, y - tick); ctx.lineTo(x + w, y);
        // Bottom-left
        ctx.moveTo(x - tick, y + h); ctx.lineTo(x, y + h);
        ctx.moveTo(x, y + h); ctx.lineTo(x, y + h + tick);
        // Bottom-right
        ctx.moveTo(x + w, y + h); ctx.lineTo(x + w + tick, y + h);
        ctx.moveTo(x + w, y + h); ctx.lineTo(x + w + tick, y + h);
        ctx.stroke();
        ctx.restore();
      }

      if (selectedSideMode === 'front_only') {
        ctx.drawImage(frontCanvas, startXPx, startYPx, cardPxW, cardPxH);
        drawCornerTicks(startXPx, startYPx, cardPxW, cardPxH);
      } else {
        // Both Sides Mode (1 Front and 1 Back image arranged together)
        if (bothSidesLayoutMode === 'side_by_side') {
          const pxFront = startXPx;
          const pxBack = startXPx + cardPxW + gapPx;
          const py = startYPx;

          ctx.drawImage(frontCanvas, pxFront, py, cardPxW, cardPxH);
          drawCornerTicks(pxFront, py, cardPxW, cardPxH);

          if (backCanvas) {
            ctx.drawImage(backCanvas, pxBack, py, cardPxW, cardPxH);
            drawCornerTicks(pxBack, py, cardPxW, cardPxH);
          }
        } else {
          // Stacked
          const px = startXPx;
          const pyFront = startYPx;
          const pyBack = startYPx + cardPxH + gapPx;

          ctx.drawImage(frontCanvas, px, pyFront, cardPxW, cardPxH);
          drawCornerTicks(px, pyFront, cardPxW, cardPxH);

          if (backCanvas) {
            ctx.drawImage(backCanvas, px, pyBack, cardPxW, cardPxH);
            drawCornerTicks(px, pyBack, cardPxW, cardPxH);
          }
        }
      }

      // Footer note on sheet
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        `A4 Sheet (${params.paperWidthMm} × ${params.paperHeightMm} mm) • Single ID Card Print (100% Actual Size)`,
        displayW / 2,
        displayH - 4
      );

      ctx.restore();

      // UI stats synchronization
      const statsEl = document.getElementById('idcard-sheet-stats');
      if (statsEl) {
        statsEl.textContent = (selectedSideMode === 'front_only')
          ? 'Single ID Card • Front Side Only (1 Copy on A4)'
          : 'Single ID Card • Front & Back Pair (1 Copy on A4)';
      }
    }

    function renderA4Preview() {
      if (!isA4RafPending) {
        isA4RafPending = true;
        requestAnimationFrame(() => {
          isA4RafPending = false;
          drawA4PreviewDirect();
        });
      }
    }

    // -------------------------------------------------------------
    // 4. WORKING OUTPUT: PDF GENERATION & DIRECT PRINT
    // -------------------------------------------------------------
    async function downloadA4Pdf() {
      if (!window.PDFLib) {
        showToast('PDF library not ready.', 'error');
        return;
      }

      showToast('Generating print-ready ID Card A4 PDF...', 'info');

      try {
        const pdfDoc = await PDFLib.PDFDocument.create();
        const params = getA4SheetParameters();
        const mmToPt = 72 / 25.4;

        const pageWidthPt = params.paperWidthMm * mmToPt;
        const pageHeightPt = params.paperHeightMm * mmToPt;
        const cardWidthPt = params.cardW * mmToPt;
        const cardHeightPt = params.cardH * mmToPt;
        const gapPt = params.gapMm * mmToPt;
        const startXPt = params.startXMm * mmToPt;

        // Render high-res card canvases
        const frontCanvas = getHighResCardCanvas('front');
        const frontPngData = frontCanvas.toDataURL('image/png').split(',')[1];
        const frontBytes = new Uint8Array(atob(frontPngData).split('').map(c => c.charCodeAt(0)));
        const embeddedFront = await pdfDoc.embedPng(frontBytes);

        let embeddedBack = null;
        if (selectedSideMode === 'both_sides') {
          const backCanvas = getHighResCardCanvas('back');
          const backPngData = backCanvas.toDataURL('image/png').split(',')[1];
          const backBytes = new Uint8Array(atob(backPngData).split('').map(c => c.charCodeAt(0)));
          embeddedBack = await pdfDoc.embedPng(backBytes);
        }

        const page = pdfDoc.addPage([pageWidthPt, pageHeightPt]);
        const tick = 4;
        const lineColor = PDFLib.rgb(0.7, 0.7, 0.7);

        function drawPdfCornerTicks(xPt, yPt, wPt, hPt) {
          page.drawLine({ start: { x: xPt - tick, y: yPt + hPt }, end: { x: xPt, y: yPt + hPt }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt, y: yPt + hPt }, end: { x: xPt, y: yPt + hPt + tick }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt + wPt, y: yPt + hPt }, end: { x: xPt + wPt + tick, y: yPt + hPt }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt + wPt, y: yPt + hPt }, end: { x: xPt + wPt + tick, y: yPt + hPt }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt - tick, y: yPt }, end: { x: xPt, y: yPt }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt, y: yPt - tick }, end: { x: xPt, y: yPt }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt + wPt, y: yPt }, end: { x: xPt + wPt + tick, y: yPt }, thickness: 0.5, color: lineColor });
          page.drawLine({ start: { x: xPt + wPt, y: yPt - tick }, end: { x: xPt + wPt, y: yPt }, thickness: 0.5, color: lineColor });
        }

        if (selectedSideMode === 'front_only') {
          const xPt = startXPt;
          const yTopMm = params.startYMm;
          const yPt = (params.paperHeightMm - yTopMm - params.cardH) * mmToPt;

          page.drawImage(embeddedFront, {
            x: xPt,
            y: yPt,
            width: cardWidthPt,
            height: cardHeightPt
          });
          drawPdfCornerTicks(xPt, yPt, cardWidthPt, cardHeightPt);
        } else {
          // Both Sides Mode (1 Front and 1 Back image arranged together)
          if (bothSidesLayoutMode === 'side_by_side') {
            const xFrontPt = startXPt;
            const xBackPt = startXPt + cardWidthPt + gapPt;
            const yTopMm = params.startYMm;
            const yPt = (params.paperHeightMm - yTopMm - params.cardH) * mmToPt;

            page.drawImage(embeddedFront, { x: xFrontPt, y: yPt, width: cardWidthPt, height: cardHeightPt });
            drawPdfCornerTicks(xFrontPt, yPt, cardWidthPt, cardHeightPt);

            if (embeddedBack) {
              page.drawImage(embeddedBack, { x: xBackPt, y: yPt, width: cardWidthPt, height: cardHeightPt });
              drawPdfCornerTicks(xBackPt, yPt, cardWidthPt, cardHeightPt);
            }
          } else {
            // Stacked
            const xPt = startXPt;
            const yTopFrontMm = params.startYMm;
            const yTopBackMm = yTopFrontMm + params.cardH + params.gapMm;
            const yFrontPt = (params.paperHeightMm - yTopFrontMm - params.cardH) * mmToPt;
            const yBackPt = (params.paperHeightMm - yTopBackMm - params.cardH) * mmToPt;

            page.drawImage(embeddedFront, { x: xPt, y: yFrontPt, width: cardWidthPt, height: cardHeightPt });
            drawPdfCornerTicks(xPt, yFrontPt, cardWidthPt, cardHeightPt);

            if (embeddedBack) {
              page.drawImage(embeddedBack, { x: xPt, y: yBackPt, width: cardWidthPt, height: cardHeightPt });
              drawPdfCornerTicks(xPt, yBackPt, cardWidthPt, cardHeightPt);
            }
          }
        }

        // Sheet footer
        page.drawText(
          `AAYAM Innovation ID Card Studio | ${getCurrentPreset().name} | Single ID Card | Print at 100% (Actual Size)`,
          {
            x: 24,
            y: 16,
            size: 7.5,
            color: PDFLib.rgb(0.5, 0.5, 0.5)
          }
        );

        const pdfBytes = await pdfDoc.save();
        const preset = getCurrentPreset();
        const filename = `id-cards-${preset.widthMm}x${preset.heightMm}mm-A4.pdf`;
        triggerDownload(new Blob([pdfBytes], { type: 'application/pdf' }), filename);
        showToast('Print Sheet PDF downloaded! Select "Actual Size / 100%" when printing.', 'success');
      } catch (err) {
        console.error('ID Card PDF generation error:', err);
        showToast('Failed to generate PDF: ' + err.message, 'error');
      }
    }

    function printIdCards() {
      const params = getA4SheetParameters();
      const frontCanvas = getHighResCardCanvas('front');
      const frontPng = frontCanvas.toDataURL('image/png');
      const backPng = (selectedSideMode === 'both_sides') ? getHighResCardCanvas('back').toDataURL('image/png') : null;

      let printIframe = document.getElementById('idcard-print-iframe');
      if (printIframe) printIframe.remove();

      printIframe = document.createElement('iframe');
      printIframe.id = 'idcard-print-iframe';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);

      let cardsHtml = '';
      if (selectedSideMode === 'front_only') {
        cardsHtml = `
          <img class="card-img" src="${frontPng}" style="left:${params.startXMm}mm; top:${params.startYMm}mm; width:${params.cardW}mm; height:${params.cardH}mm;" alt="Card Front" />
        `;
      } else {
        if (bothSidesLayoutMode === 'side_by_side') {
          const xFrontMm = params.startXMm;
          const xBackMm = params.startXMm + params.cardW + params.gapMm;
          const yMm = params.startYMm;

          cardsHtml = `
            <img class="card-img" src="${frontPng}" style="left:${xFrontMm}mm; top:${yMm}mm; width:${params.cardW}mm; height:${params.cardH}mm;" alt="Card Front" />
            ${backPng ? `<img class="card-img" src="${backPng}" style="left:${xBackMm}mm; top:${yMm}mm; width:${params.cardW}mm; height:${params.cardH}mm;" alt="Card Back" />` : ''}
          `;
        } else {
          // Stacked
          const xMm = params.startXMm;
          const yFrontMm = params.startYMm;
          const yBackMm = params.startYMm + params.cardH + params.gapMm;

          cardsHtml = `
            <img class="card-img" src="${frontPng}" style="left:${xMm}mm; top:${yFrontMm}mm; width:${params.cardW}mm; height:${params.cardH}mm;" alt="Card Front" />
            ${backPng ? `<img class="card-img" src="${backPng}" style="left:${xMm}mm; top:${yBackMm}mm; width:${params.cardW}mm; height:${params.cardH}mm;" alt="Card Back" />` : ''}
          `;
        }
      }

      const pagesHtml = `
        <div class="a4-page">
          ${cardsHtml}
          <div class="footer-note">AAYAM Innovation ID Card Studio • ${getCurrentPreset().dimText} • Single ID Card Print at 100% (Actual Size)</div>
        </div>
      `;

      const iframeDoc = printIframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Print ID Cards - AAYAM Innovation</title>
          <style>
            @page {
              size: ${params.paperWidthMm}mm ${params.paperHeightMm}mm;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              background: #ffffff;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .a4-page {
              width: ${params.paperWidthMm}mm;
              height: ${params.paperHeightMm}mm;
              position: relative;
              page-break-after: always;
              background: #ffffff;
              overflow: hidden;
            }
            .a4-page:last-child {
              page-break-after: auto;
            }
            .card-img {
              position: absolute;
              display: block;
            }
            .footer-note {
              position: absolute;
              bottom: 4mm;
              left: 10mm;
              font-family: system-ui, sans-serif;
              font-size: 7pt;
              color: #888888;
            }
          </style>
        </head>
        <body>
          ${pagesHtml}
        </body>
        </html>
      `);
      iframeDoc.close();

      setTimeout(() => {
        try {
          printIframe.contentWindow.focus();
          printIframe.contentWindow.print();
        } catch (err) {
          console.warn('Print iframe error:', err);
        }
      }, 400);

      showToast('Print dialog opened. Select "Actual Size / 100%" in print settings.', 'info');
    }

    function downloadSingleCard(side = 'front') {
      const cardCanvas = getHighResCardCanvas(side);
      cardCanvas.toBlob(blob => {
        if (!blob) return;
        const preset = getCurrentPreset();
        const filename = `id-card-${side}-${preset.widthMm}x${preset.heightMm}mm.png`;
        triggerDownload(blob, filename);
        showToast(`Single ${side} card (${preset.dimText}) downloaded!`, 'success');
      }, 'image/png');
    }

    // Initial view: Side Selection Screen
    renderSideSelectionScreen();
  }

  /* =================================================================
     6.21 BACKGROUND REMOVER WORKBENCH IMPLEMENTATION
     Local in-browser edge-aware background cutout & manual refinement
     ================================================================= */
  function renderBackgroundRemoverWorkbench() {
    let originalImg = null;
    let originalFileName = 'image.png';
    let baseFileName = 'image-no-bg';
    let origW = 0;
    let origH = 0;
    let procW = 0;
    let procH = 0;
    let activePreviewBlobUrl = null;

    // Cutout & Refinement State
    let bgMode = 'transparent'; // 'transparent' | 'white' | 'gray' | 'blue' | 'custom'
    let customBgColor = '#10b981';
    let sensitivityPreset = 'balanced'; // 'gentle' | 'balanced' | 'strong'
    let subjectType = 'auto'; // 'auto' | 'portrait' | 'product'
    let colorTolerance = 45; // 10 to 90
    let viewMode = 'cutout'; // 'cutout' | 'split' | 'original'
    let splitRatio = 0.5; // 0.0 to 1.0
    let isDraggingSplit = false;

    // Eyedropper state
    let eyedropperActive = false;
    let customSeedRgb = null; // { r, g, b }

    // Manual Brush State
    let brushMode = 'none'; // 'none' | 'erase' | 'restore'
    let brushSize = 24; // 6 to 60
    let isPainting = false;
    let brushHistory = []; // snapshots of manualMaskCanvas for undo

    // Offscreen Canvas Buffers
    let analysisCanvas = null; // procW x procH of original image
    let analysisMaskCanvas = null; // procW x procH algorithmic alpha mask
    let manualMaskCanvas = null; // procW x procH manual paint edits
    let finalCompositeCanvas = null; // procW x procH final composited result
    let compositeMaskCanvas = null; // procW x procH combined alpha mask buffer
    let segmentationTimer = null;

    currentWorkbenchCleanup = function() {
      if (segmentationTimer) {
        clearTimeout(segmentationTimer);
        segmentationTimer = null;
      }
      if (dom.toolModal) {
        dom.toolModal.classList.remove('modal-bgremove-open');
      }
      if (activePreviewBlobUrl) {
        try { URL.revokeObjectURL(activePreviewBlobUrl); } catch (e) {}
        activePreviewBlobUrl = null;
      }
      originalImg = null;
      analysisCanvas = null;
      analysisMaskCanvas = null;
      manualMaskCanvas = null;
      finalCompositeCanvas = null;
      compositeMaskCanvas = null;
      brushHistory = [];
    };

    function renderInitialDropzone() {
      dom.modalBody.innerHTML = `
        <div class="workbench-container bg-remove-workbench-root">
          ${getOptionBPrivacyBannerHTML(
            '100% In-Browser Background Removal',
            'Your images are analyzed, cut out, and refined 100% locally in your web browser memory. Zero files or data are ever uploaded to any server or third-party service.'
          )}

          ${getOptionBImportHTML({
            containerId: 'bg-remove-import-container',
            dropzoneId: 'bg-remove-dropzone',
            fileInputId: 'bg-remove-file-input',
            browseBtnId: 'bg-remove-browse-btn',
            fileTypeLabel: 'Photo or Image',
            formatHint: 'Supports JPG, JPEG, PNG, or WebP images up to 25 MB',
            accept: 'image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp',
            badgeText: 'CUTOUT',
            badgeColor: '#059669',
            privacyChecklist: [
              'Zero Server Uploads & 100% Confidential Processing',
              'Instant In-Browser Edge-Aware Background Cutout',
              'Manual Erase & Restore Refinement Brushes',
              'Lossless Transparent PNG & Solid Background Export'
            ]
          })}
        </div>
      `;

      initOptionBImportHandlers({
        dropzoneId: 'bg-remove-dropzone',
        fileInputId: 'bg-remove-file-input',
        browseBtnId: 'bg-remove-browse-btn',
        onFilesSelected: (files) => {
          if (!files || files.length === 0) return;
          handleFileSelected(files[0]);
        }
      });
    }

    function handleFileSelected(file) {
      if (!file) return;

      const validation = validateImageFile(file);
      if (!validation.valid) {
        showToast(validation.error, 'error');
        return;
      }

      originalFileName = file.name || 'image.png';
      baseFileName = originalFileName.replace(/\.[^/.]+$/, "") + '-no-bg';

      const reader = new FileReader();
      reader.onerror = () => {
        showToast('Error reading the selected image file.', 'error');
      };
      reader.onload = (loadEvent) => {
        const img = new Image();
        img.onerror = () => {
          showToast('Corrupted or unsupported image file format.', 'error');
        };
        img.onload = () => {
          if (!img.naturalWidth || !img.naturalHeight) {
            showToast('The image has invalid dimensions or is corrupted.', 'error');
            return;
          }
          originalImg = img;
          origW = img.naturalWidth;
          origH = img.naturalHeight;

          // Compute processing dimensions (capped to 800px on long edge for sub-40ms execution)
          const maxDim = 800;
          procW = origW;
          procH = origH;
          if (procW > maxDim || procH > maxDim) {
            if (procW >= procH) {
              procH = Math.round((procH * maxDim) / procW);
              procW = maxDim;
            } else {
              procW = Math.round((procW * maxDim) / procH);
              procH = maxDim;
            }
          }

          // Initialize offscreen canvases
          analysisCanvas = document.createElement('canvas');
          analysisCanvas.width = procW;
          analysisCanvas.height = procH;
          const actx = analysisCanvas.getContext('2d');
          actx.drawImage(originalImg, 0, 0, procW, procH);

          manualMaskCanvas = document.createElement('canvas');
          manualMaskCanvas.width = procW;
          manualMaskCanvas.height = procH;

          analysisMaskCanvas = document.createElement('canvas');
          analysisMaskCanvas.width = procW;
          analysisMaskCanvas.height = procH;

          finalCompositeCanvas = document.createElement('canvas');
          finalCompositeCanvas.width = procW;
          finalCompositeCanvas.height = procH;

          brushHistory = [];
          customSeedRgb = null;

          renderActiveWorkbench();
          runSegmentation();
        };
        img.src = loadEvent.target.result;
      };
      reader.readAsDataURL(file);
    }

    function renderActiveWorkbench() {
      dom.modalBody.innerHTML = `
        <div class="workbench-container bg-remove-workbench-root">
          <!-- Top Header Meta -->
          <div class="bg-remove-header-bar">
            <div class="bg-remove-doc-meta">
              <span style="font-weight:700; color:#0f172a;" id="bg-remove-filename">${escapeHtml(originalFileName)}</span>
              <span class="bg-remove-meta-pill" id="bg-remove-dims-pill">${origW} × ${origH} px</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <button type="button" class="btn btn-secondary btn-sm" id="bg-remove-btn-change" style="font-size:0.75rem; padding:3px 10px;">
                Change Image
              </button>
              <button type="button" class="btn btn-secondary btn-sm" id="bg-remove-btn-reset-all" style="font-size:0.75rem; padding:3px 10px;" title="Reset cutout and all manual edits">
                Reset Cutout
              </button>
            </div>
          </div>

          <!-- Two-Column Workbench Layout -->
          <div class="bg-remove-layout">
            <!-- Left: Viewer / Preview Box -->
            <div class="bg-remove-viewer-box" id="bg-remove-viewer-box">
              <div class="bg-remove-toolbar">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                  <span style="font-size:0.75rem; font-weight:600; color:#64748b;">View:</span>
                  <div class="bg-remove-btn-group">
                    <button type="button" class="bg-remove-tool-btn active" id="bg-view-cutout" title="Show background cutout / replacement">Cutout</button>
                    <button type="button" class="bg-remove-tool-btn" id="bg-view-split" title="Interactive Before & After Split">Split Slider</button>
                    <button type="button" class="bg-remove-tool-btn" id="bg-view-orig" title="View original raw photograph">Original</button>
                  </div>
                </div>

                <div style="display:flex; align-items:center; gap:0.6rem;">
                  <span id="bg-remove-status-pill" style="font-size:0.72rem; font-weight:600; color:#059669; display:inline-flex; align-items:center; gap:4px;">
                    <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
                    <span>Ready</span>
                  </span>
                </div>
              </div>

              <!-- Main Canvas Area -->
              <div class="bg-remove-canvas-wrap bg-remove-checker" id="bg-remove-canvas-wrap">
                <canvas id="bg-remove-preview-canvas" class="bg-remove-canvas-shadow"></canvas>
                <div class="bg-remove-brush-cursor" id="bg-remove-brush-cursor"></div>
              </div>
            </div>

            <!-- Right: Controls Sidebar -->
            <div class="bg-remove-sidebar">
              <!-- Group 1: Background Replacement -->
              <div class="bg-remove-card-group">
                <div class="bg-remove-group-title">
                  <span>1. Background Style</span>
                  <span style="font-size:0.68rem; color:#64748b; font-weight:normal;" id="bg-color-label">Transparent</span>
                </div>
                <div class="bg-remove-swatches">
                  <button type="button" class="bg-remove-swatch-btn swatch-transparent active" data-bg="transparent" title="Transparent Background (Lossless PNG)"></button>
                  <button type="button" class="bg-remove-swatch-btn" data-bg="white" style="background:#ffffff;" title="Solid White"></button>
                  <button type="button" class="bg-remove-swatch-btn" data-bg="gray" style="background:#f1f5f9;" title="Studio Light Gray"></button>
                  <button type="button" class="bg-remove-swatch-btn" data-bg="blue" style="background:#1e3a8a;" title="Passport Navy Blue"></button>
                  <label class="bg-remove-swatch-btn" id="bg-custom-color-btn" style="background:${customBgColor}; cursor:pointer;" title="Choose Custom Color">
                    <input type="color" id="bg-custom-color-input" value="${customBgColor}" style="opacity:0; width:0; height:0; position:absolute;" />
                    <span style="font-size:10px; color:#ffffff; font-weight:bold; text-shadow:0 1px 2px rgba(0,0,0,0.6);">HEX</span>
                  </label>
                </div>
              </div>

              <!-- Group 2: Cutout Sensitivity & Subject Mode -->
              <div class="bg-remove-card-group">
                <div class="bg-remove-group-title">
                  <span>2. Cutout Sensitivity</span>
                  <span style="font-size:0.68rem; color:#059669; font-weight:600;" id="bg-tol-label">${colorTolerance}%</span>
                </div>

                <div style="display:flex; flex-direction:column; gap:0.4rem;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <label style="font-size:0.72rem; color:#475569; font-weight:600;">Subject Mode:</label>
                    <select id="bg-subject-type" class="form-select" style="font-size:0.72rem; padding:2px 20px 2px 6px; height:26px; width:auto;">
                      <option value="auto" selected>Auto / General</option>
                      <option value="portrait">Portrait / Person (Skin Lock)</option>
                      <option value="product">Product / Graphic (Strict Edge)</option>
                    </select>
                  </div>

                  <div class="bg-remove-preset-grid">
                    <button type="button" class="bg-remove-preset-btn" data-preset="gentle" title="Prioritize keeping fine edges and subject boundaries">Gentle</button>
                    <button type="button" class="bg-remove-preset-btn active" data-preset="balanced" title="Recommended general-purpose sensitivity">Balanced</button>
                    <button type="button" class="bg-remove-preset-btn" data-preset="strong" title="Aggressively remove broader background regions">Strong</button>
                  </div>

                  <div style="margin-top:0.35rem;">
                    <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:#64748b; margin-bottom:2px;">
                      <span>Fine Edge</span>
                      <span>Color Tolerance</span>
                      <span>Deep Cutout</span>
                    </div>
                    <input type="range" id="bg-tolerance-slider" min="15" max="85" step="1" value="${colorTolerance}" style="width:100%; cursor:pointer;" />
                  </div>

                  <div style="margin-top:0.25rem;">
                    <button type="button" class="btn btn-secondary btn-sm" id="bg-btn-eyedropper" style="width:100%; font-size:0.74rem; display:flex; align-items:center; justify-content:center; gap:6px;">
                      <span>🎯 Sample Background from Image</span>
                    </button>
                    <div id="bg-eyedropper-hint" style="display:none; font-size:0.68rem; color:#059669; text-align:center; margin-top:3px; font-weight:600;">
                      Click on any background area in the photo to sample!
                    </div>
                  </div>
                </div>
              </div>

              <!-- Group 3: Manual Refinement Brush (Erase & Restore) -->
              <div class="bg-remove-card-group">
                <div class="bg-remove-group-title">
                  <span>3. Manual Refinement</span>
                  <span style="font-size:0.68rem; color:#64748b; font-weight:normal;" id="bg-brush-status">Off</span>
                </div>

                <div class="bg-remove-preset-grid" style="grid-template-columns: 1fr 1fr 1fr;">
                  <button type="button" class="bg-remove-preset-btn active" id="bg-brush-none">View / Off</button>
                  <button type="button" class="bg-remove-preset-btn" id="bg-brush-erase" title="Paint to erase unwanted background remnants">🧹 Erase</button>
                  <button type="button" class="bg-remove-preset-btn" id="bg-brush-restore" title="Paint to restore accidentally removed subject parts">🖌️ Restore</button>
                </div>

                <div id="bg-brush-controls" style="display:none; margin-top:0.35rem;">
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.7rem; color:#475569; margin-bottom:2px;">
                    <span>Brush Size:</span>
                    <strong id="bg-brush-size-val">${brushSize}px</strong>
                  </div>
                  <input type="range" id="bg-brush-size-slider" min="6" max="60" step="2" value="${brushSize}" style="width:100%; cursor:pointer;" />

                  <div style="display:flex; justify-content:space-between; gap:6px; margin-top:0.4rem;">
                    <button type="button" class="btn btn-secondary btn-xs" id="bg-btn-undo-brush" style="font-size:0.7rem; padding:3px 8px; flex:1;" disabled>
                      ↩ Undo Stroke
                    </button>
                    <button type="button" class="btn btn-secondary btn-xs" id="bg-btn-clear-brush" style="font-size:0.7rem; padding:3px 8px; flex:1;">
                      Clear Edits
                    </button>
                  </div>
                </div>
              </div>

              <!-- Group 4: Notice -->
              <div class="bg-remove-notice">
                🔒 <strong>100% In-Browser Engine:</strong> Analysis runs purely inside your browser memory. For complex backgrounds, low contrast, or fine hair strands, use the <em>Erase & Restore</em> brushes to refine edges.
              </div>

              <!-- Group 5: Export / Download -->
              <div style="margin-top:auto; padding-top:0.35rem;">
                <button type="button" class="btn btn-primary btn-block" id="bg-btn-download" style="font-size:0.875rem; padding:0.6rem 1rem; display:flex; align-items:center; justify-content:center; gap:6px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span id="bg-download-btn-text">Download Transparent PNG</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      bindWorkbenchEvents();
    }

    function bindWorkbenchEvents() {
      const btnChange = document.getElementById('bg-remove-btn-change');
      const btnResetAll = document.getElementById('bg-remove-btn-reset-all');
      const btnDownload = document.getElementById('bg-btn-download');

      const viewCutoutBtn = document.getElementById('bg-view-cutout');
      const viewSplitBtn = document.getElementById('bg-view-split');
      const viewOrigBtn = document.getElementById('bg-view-orig');

      const subjectTypeSelect = document.getElementById('bg-subject-type');
      const tolSlider = document.getElementById('bg-tolerance-slider');
      const tolLabel = document.getElementById('bg-tol-label');
      const btnEyedropper = document.getElementById('bg-btn-eyedropper');
      const eyedropperHint = document.getElementById('bg-eyedropper-hint');

      const brushNoneBtn = document.getElementById('bg-brush-none');
      const brushEraseBtn = document.getElementById('bg-brush-erase');
      const brushRestoreBtn = document.getElementById('bg-brush-restore');
      const brushControls = document.getElementById('bg-brush-controls');
      const brushSizeSlider = document.getElementById('bg-brush-size-slider');
      const brushSizeVal = document.getElementById('bg-brush-size-val');
      const btnUndoBrush = document.getElementById('bg-btn-undo-brush');
      const btnClearBrush = document.getElementById('bg-btn-clear-brush');
      const brushStatus = document.getElementById('bg-brush-status');

      const previewCanvas = document.getElementById('bg-remove-preview-canvas');
      const canvasWrap = document.getElementById('bg-remove-canvas-wrap');
      const brushCursor = document.getElementById('bg-remove-brush-cursor');

      const customColorInput = document.getElementById('bg-custom-color-input');
      const customColorBtn = document.getElementById('bg-custom-color-btn');

      // Change Image
      btnChange.addEventListener('click', () => {
        currentWorkbenchCleanup();
        renderInitialDropzone();
      });

      // Reset All
      btnResetAll.addEventListener('click', () => {
        bgMode = 'transparent';
        sensitivityPreset = 'balanced';
        subjectType = 'auto';
        colorTolerance = 45;
        customSeedRgb = null;
        brushMode = 'none';
        brushHistory = [];

        // Clear manual mask
        if (manualMaskCanvas) {
          const mctx = manualMaskCanvas.getContext('2d');
          mctx.clearRect(0, 0, procW, procH);
        }

        renderActiveWorkbench();
        runSegmentation();
        showToast('Cutout and manual edits reset.', 'info');
      });

      // View Mode Buttons
      function updateViewModeButtons() {
        [viewCutoutBtn, viewSplitBtn, viewOrigBtn].forEach(b => b.classList.remove('active'));
        if (viewMode === 'cutout') viewCutoutBtn.classList.add('active');
        else if (viewMode === 'split') viewSplitBtn.classList.add('active');
        else if (viewMode === 'original') viewOrigBtn.classList.add('active');
        updatePreviewDisplay();
      }

      viewCutoutBtn.addEventListener('click', () => { viewMode = 'cutout'; updateViewModeButtons(); });
      viewSplitBtn.addEventListener('click', () => { viewMode = 'split'; updateViewModeButtons(); });
      viewOrigBtn.addEventListener('click', () => { viewMode = 'original'; updateViewModeButtons(); });

      // Background Swatches
      document.querySelectorAll('.bg-remove-swatch-btn[data-bg]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.bg-remove-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          bgMode = btn.getAttribute('data-bg');

          const colorLabel = document.getElementById('bg-color-label');
          const dlBtnText = document.getElementById('bg-download-btn-text');
          if (bgMode === 'transparent') {
            if (colorLabel) colorLabel.textContent = 'Transparent';
            if (dlBtnText) dlBtnText.textContent = 'Download Transparent PNG';
          } else if (bgMode === 'white') {
            if (colorLabel) colorLabel.textContent = 'Solid White';
            if (dlBtnText) dlBtnText.textContent = 'Download Image (White BG)';
          } else if (bgMode === 'gray') {
            if (colorLabel) colorLabel.textContent = 'Studio Gray';
            if (dlBtnText) dlBtnText.textContent = 'Download Image (Gray BG)';
          } else if (bgMode === 'blue') {
            if (colorLabel) colorLabel.textContent = 'Passport Blue';
            if (dlBtnText) dlBtnText.textContent = 'Download Image (Blue BG)';
          }
          updatePreviewDisplay();
        });
      });

      // Custom Color Input
      customColorInput.addEventListener('input', (e) => {
        customBgColor = e.target.value;
        customColorBtn.style.background = customBgColor;
        document.querySelectorAll('.bg-remove-swatch-btn').forEach(b => b.classList.remove('active'));
        customColorBtn.classList.add('active');
        bgMode = 'custom';

        const colorLabel = document.getElementById('bg-color-label');
        const dlBtnText = document.getElementById('bg-download-btn-text');
        if (colorLabel) colorLabel.textContent = customBgColor.toUpperCase();
        if (dlBtnText) dlBtnText.textContent = `Download Image (${customBgColor.toUpperCase()})`;
        updatePreviewDisplay();
      });

      // Subject Type Select
      subjectTypeSelect.addEventListener('change', (e) => {
        subjectType = e.target.value;
        runSegmentation();
      });

      // Sensitivity Presets
      document.querySelectorAll('.bg-remove-preset-btn[data-preset]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.bg-remove-preset-btn[data-preset]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          sensitivityPreset = btn.getAttribute('data-preset');

          if (sensitivityPreset === 'gentle') {
            colorTolerance = 32;
          } else if (sensitivityPreset === 'balanced') {
            colorTolerance = 45;
          } else if (sensitivityPreset === 'strong') {
            colorTolerance = 62;
          }
          tolSlider.value = colorTolerance;
          tolLabel.textContent = `${colorTolerance}%`;
          runSegmentation();
        });
      });

      // Tolerance Slider
      let tolInputDebounce = null;
      tolSlider.addEventListener('input', (e) => {
        colorTolerance = parseInt(e.target.value, 10);
        tolLabel.textContent = `${colorTolerance}%`;
        if (tolInputDebounce) clearTimeout(tolInputDebounce);
        tolInputDebounce = setTimeout(() => {
          document.querySelectorAll('.bg-remove-preset-btn[data-preset]').forEach(b => b.classList.remove('active'));
          runSegmentation();
        }, 120);
      });
      tolSlider.addEventListener('change', () => {
        if (tolInputDebounce) clearTimeout(tolInputDebounce);
        document.querySelectorAll('.bg-remove-preset-btn[data-preset]').forEach(b => b.classList.remove('active'));
        runSegmentation();
      });

      // Eyedropper Button
      btnEyedropper.addEventListener('click', () => {
        eyedropperActive = !eyedropperActive;
        if (eyedropperActive) {
          brushMode = 'none';
          updateBrushModeUI();
          canvasWrap.classList.add('bg-remove-eyedropper-active');
          btnEyedropper.classList.add('btn-primary');
          btnEyedropper.classList.remove('btn-secondary');
          eyedropperHint.style.display = 'block';
        } else {
          canvasWrap.classList.remove('bg-remove-eyedropper-active');
          btnEyedropper.classList.remove('btn-primary');
          btnEyedropper.classList.add('btn-secondary');
          eyedropperHint.style.display = 'none';
        }
      });

      // Brush Mode UI and Buttons
      function updateBrushModeUI() {
        [brushNoneBtn, brushEraseBtn, brushRestoreBtn].forEach(b => b.classList.remove('active'));
        if (brushMode === 'none') {
          brushNoneBtn.classList.add('active');
          brushControls.style.display = 'none';
          brushStatus.textContent = 'Off';
          brushCursor.style.display = 'none';
        } else {
          brushControls.style.display = 'block';
          if (brushMode === 'erase') {
            brushEraseBtn.classList.add('active');
            brushStatus.textContent = 'Erase Mode';
            brushCursor.style.borderColor = '#ef4444';
            brushCursor.style.background = 'rgba(239, 68, 68, 0.15)';
          } else if (brushMode === 'restore') {
            brushRestoreBtn.classList.add('active');
            brushStatus.textContent = 'Restore Mode';
            brushCursor.style.borderColor = '#10b981';
            brushCursor.style.background = 'rgba(16, 185, 129, 0.15)';
          }
        }
      }

      brushNoneBtn.addEventListener('click', () => {
        brushMode = 'none';
        updateBrushModeUI();
      });

      brushEraseBtn.addEventListener('click', () => {
        brushMode = 'erase';
        if (eyedropperActive) {
          eyedropperActive = false;
          canvasWrap.classList.remove('bg-remove-eyedropper-active');
          btnEyedropper.classList.remove('btn-primary');
          btnEyedropper.classList.add('btn-secondary');
          eyedropperHint.style.display = 'none';
        }
        updateBrushModeUI();
      });

      brushRestoreBtn.addEventListener('click', () => {
        brushMode = 'restore';
        if (eyedropperActive) {
          eyedropperActive = false;
          canvasWrap.classList.remove('bg-remove-eyedropper-active');
          btnEyedropper.classList.remove('btn-primary');
          btnEyedropper.classList.add('btn-secondary');
          eyedropperHint.style.display = 'none';
        }
        updateBrushModeUI();
      });

      // Brush Size Slider
      brushSizeSlider.addEventListener('input', (e) => {
        brushSize = parseInt(e.target.value, 10);
        brushSizeVal.textContent = `${brushSize}px`;
      });

      // Undo Brush
      btnUndoBrush.addEventListener('click', () => {
        if (!brushHistory.length) return;
        const lastSnapshot = brushHistory.pop();
        if (manualMaskCanvas && lastSnapshot) {
          const mctx = manualMaskCanvas.getContext('2d');
          mctx.putImageData(lastSnapshot, 0, 0);
          updateCompositeAndPreview();
        }
        btnUndoBrush.disabled = (brushHistory.length === 0);
      });

      // Clear Brush Edits
      btnClearBrush.addEventListener('click', () => {
        if (manualMaskCanvas) {
          const mctx = manualMaskCanvas.getContext('2d');
          mctx.clearRect(0, 0, procW, procH);
          brushHistory = [];
          btnUndoBrush.disabled = true;
          updateCompositeAndPreview();
          showToast('Manual brush edits cleared.', 'info');
        }
      });

      // Canvas Pointer Events (Painting, Eyedropper & Split Slider)
      function getCanvasRelativeCoords(e) {
        const rect = previewCanvas.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        const xOnDisplay = clientX - rect.left;
        const yOnDisplay = clientY - rect.top;
        const scaleX = procW / rect.width;
        const scaleY = procH / rect.height;
        return {
          px: Math.round(xOnDisplay * scaleX),
          py: Math.round(yOnDisplay * scaleY),
          ratioX: xOnDisplay / rect.width,
          ratioY: yOnDisplay / rect.height,
          inBounds: (xOnDisplay >= 0 && xOnDisplay <= rect.width && yOnDisplay >= 0 && yOnDisplay <= rect.height)
        };
      }

      previewCanvas.addEventListener('pointerenter', () => {
        if (brushMode !== 'none') brushCursor.style.display = 'block';
      });

      previewCanvas.addEventListener('pointerleave', () => {
        brushCursor.style.display = 'none';
        if (isPainting) isPainting = false;
        if (isDraggingSplit) isDraggingSplit = false;
      });

      previewCanvas.addEventListener('pointermove', (e) => {
        const coords = getCanvasRelativeCoords(e);

        // Brush cursor tracking
        if (brushMode !== 'none') {
          const wrapRect = canvasWrap.getBoundingClientRect();
          const dispW = previewCanvas.getBoundingClientRect().width;
          const displayBrushSize = Math.max(8, (brushSize / procW) * dispW);
          brushCursor.style.width = `${displayBrushSize}px`;
          brushCursor.style.height = `${displayBrushSize}px`;
          brushCursor.style.left = `${e.clientX - wrapRect.left}px`;
          brushCursor.style.top = `${e.clientY - wrapRect.top}px`;
          brushCursor.style.display = 'block';
        }

        // Split dragging
        if (isDraggingSplit) {
          splitRatio = Math.max(0.05, Math.min(0.95, coords.ratioX));
          updatePreviewDisplay();
          return;
        }

        // Painting
        if (isPainting && brushMode !== 'none' && manualMaskCanvas) {
          paintBrushStroke(coords.px, coords.py);
        }
      });

      previewCanvas.addEventListener('pointerdown', (e) => {
        const coords = getCanvasRelativeCoords(e);
        if (!coords.inBounds) return;

        // Eyedropper mode click
        if (eyedropperActive && analysisCanvas) {
          const actx = analysisCanvas.getContext('2d');
          const p = actx.getImageData(coords.px, coords.py, 1, 1).data;
          customSeedRgb = { r: p[0], g: p[1], b: p[2] };
          eyedropperActive = false;
          canvasWrap.classList.remove('bg-remove-eyedropper-active');
          btnEyedropper.classList.remove('btn-primary');
          btnEyedropper.classList.add('btn-secondary');
          eyedropperHint.style.display = 'none';
          showToast(`Sampled background color (RGB: ${p[0]}, ${p[1]}, ${p[2]})`, 'success');
          runSegmentation();
          return;
        }

        // Split slider click / drag
        if (viewMode === 'split' && Math.abs(coords.ratioX - splitRatio) < 0.06) {
          isDraggingSplit = true;
          try { previewCanvas.setPointerCapture(e.pointerId); } catch (err) {}
          return;
        }

        // Brush paint start
        if (brushMode !== 'none' && manualMaskCanvas) {
          // Push undo snapshot
          const mctx = manualMaskCanvas.getContext('2d');
          if (brushHistory.length >= 10) brushHistory.shift();
          brushHistory.push(mctx.getImageData(0, 0, procW, procH));
          btnUndoBrush.disabled = false;

          isPainting = true;
          try { previewCanvas.setPointerCapture(e.pointerId); } catch (err) {}
          paintBrushStroke(coords.px, coords.py);
        }
      });

      function finishPainting() {
        if (isPainting) {
          isPainting = false;
          updateCompositeAndPreview();
        }
        if (isDraggingSplit) {
          isDraggingSplit = false;
        }
      }

      previewCanvas.addEventListener('pointerup', finishPainting);
      previewCanvas.addEventListener('pointercancel', finishPainting);

      function paintBrushStroke(px, py) {
        if (!manualMaskCanvas) return;
        const mctx = manualMaskCanvas.getContext('2d');
        mctx.beginPath();
        mctx.arc(px, py, brushSize / 2, 0, Math.PI * 2);
        if (brushMode === 'erase') {
          // Erase: Paint Red channel = 255 (meaning force transparent)
          mctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
        } else if (brushMode === 'restore') {
          // Restore: Paint Green channel = 255 (meaning force opaque)
          mctx.fillStyle = 'rgba(0, 255, 0, 1.0)';
        }
        mctx.fill();

        // Fast update
        updateCompositeAndPreview();
      }

      // Download Button
      btnDownload.addEventListener('click', () => {
        executeDownload();
      });
    }

    // --- Core Algorithmic Segmentation Engine ---
    function runSegmentation() {
      if (!analysisCanvas || !originalImg) return;
      if (segmentationTimer) {
        clearTimeout(segmentationTimer);
        segmentationTimer = null;
      }

      const statusPill = document.getElementById('bg-remove-status-pill');
      if (statusPill) {
        statusPill.innerHTML = `
          <span class="spinner-sm" style="display:inline-block; width:10px; height:10px; border:2px solid #059669; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; vertical-align:middle; margin-right:4px;"></span>
          <span>Analyzing...</span>
        `;
      }

      segmentationTimer = setTimeout(() => {
        segmentationTimer = null;
        if (!analysisCanvas || !originalImg || !analysisMaskCanvas) return;
        try {
          const actx = analysisCanvas.getContext('2d');
          if (!actx) return;
          const imgData = actx.getImageData(0, 0, procW, procH);
          const data = imgData.data;
          const totalPixels = procW * procH;

          // Perceptual color distance function (weighted CIELAB approximation)
          function colorDist(r1, g1, b1, r2, g2, b2) {
            const dr = r1 - r2;
            const dg = g1 - g2;
            const db = b1 - b2;
            const rMean = (r1 + r2) * 0.5;
            return Math.sqrt((2 + rMean / 256) * dr * dr + 4 * dg * dg + (2 + (255 - rMean) / 256) * db * db);
          }

          // 1. Multi-Cluster Perimeter Background Palette
          const bgClusters = [];
          if (customSeedRgb) {
            // User-targeted color via Eyedropper takes top priority
            bgClusters.push({ r: customSeedRgb.r, g: customSeedRgb.g, b: customSeedRgb.b, count: 999 });
          }

          // Top anchors: top-left (0,0), top-right (procW-1, 0), top-center
          const topAnchorIndices = [
            0,
            Math.floor(procW * 0.5) * 4,
            (procW - 1) * 4
          ];
          for (const cIdx of topAnchorIndices) {
            if (data[cIdx + 3] > 20) {
              const cr = data[cIdx], cg = data[cIdx + 1], cb = data[cIdx + 2];
              let matched = false;
              for (const cl of bgClusters) {
                if (colorDist(cr, cg, cb, cl.r, cl.g, cl.b) < 32) {
                  matched = true;
                  break;
                }
              }
              if (!matched && bgClusters.length < 6) {
                bgClusters.push({ r: cr, g: cg, b: cb, count: 50 });
              }
            }
          }

          function addSample(sr, sg, sb) {
            // Guard: Must be consistent with existing backdrop anchors
            // Prevents dark suits/clothing/hair touching edges from being treated as background
            if (bgClusters.length > 0 && !customSeedRgb) {
              let minAnchorDist = Infinity;
              for (let c = 0; c < bgClusters.length; c++) {
                const d = colorDist(sr, sg, sb, bgClusters[c].r, bgClusters[c].g, bgClusters[c].b);
                if (d < minAnchorDist) minAnchorDist = d;
              }
              if (minAnchorDist > 95) {
                return; // Discard sample: distinct foreground object touching perimeter
              }
            }

            let bestCluster = null;
            let minDist = Infinity;
            for (let c = 0; c < bgClusters.length; c++) {
              const d = colorDist(sr, sg, sb, bgClusters[c].r, bgClusters[c].g, bgClusters[c].b);
              if (d < minDist) {
                minDist = d;
                bestCluster = bgClusters[c];
              }
            }
            if (bestCluster && minDist < 36) {
              bestCluster.r = (bestCluster.r * bestCluster.count + sr) / (bestCluster.count + 1);
              bestCluster.g = (bestCluster.g * bestCluster.count + sg) / (bestCluster.count + 1);
              bestCluster.b = (bestCluster.b * bestCluster.count + sb) / (bestCluster.count + 1);
              bestCluster.count++;
            } else if (bgClusters.length < 6) {
              bgClusters.push({ r: sr, g: sg, b: sb, count: 1 });
            }
          }

          // Sample perimeter pixels:
          // Top strip: y in [0, topRows) across full width
          const topRows = Math.max(4, Math.floor(procH * 0.05));
          for (let y = 0; y < topRows; y++) {
            for (let x = 0; x < procW; x += 2) {
              const idx = (y * procW + x) * 4;
              if (data[idx + 3] > 20) addSample(data[idx], data[idx + 1], data[idx + 2]);
            }
          }

          // Lateral side strips (left 3% and right 3%)
          const sideW = Math.max(3, Math.floor(procW * 0.03));
          for (let y = topRows; y < procH; y += 2) {
            for (let x = 0; x < sideW; x++) {
              const idx = (y * procW + x) * 4;
              if (data[idx + 3] > 20) addSample(data[idx], data[idx + 1], data[idx + 2]);
            }
            for (let x = procW - sideW; x < procW; x++) {
              const idx = (y * procW + x) * 4;
              if (data[idx + 3] > 20) addSample(data[idx], data[idx + 1], data[idx + 2]);
            }
          }

          // Bottom corners: left 14% and right 14% (only if consistent with background)
          const bottomY = Math.floor(procH * 0.88);
          for (let y = bottomY; y < procH; y += 2) {
            for (let x = 0; x < Math.floor(procW * 0.14); x += 2) {
              const idx = (y * procW + x) * 4;
              if (data[idx + 3] > 20) addSample(data[idx], data[idx + 1], data[idx + 2]);
            }
            for (let x = Math.floor(procW * 0.86); x < procW; x += 2) {
              const idx = (y * procW + x) * 4;
              if (data[idx + 3] > 20) addSample(data[idx], data[idx + 1], data[idx + 2]);
            }
          }

          // Fallback if no clusters found
          if (bgClusters.length === 0) {
            bgClusters.push({ r: 255, g: 255, b: 255, count: 1 });
          }

          // Helper: distance to nearest background cluster
          function distToBg(r, g, b) {
            let minD = Infinity;
            for (let c = 0; c < bgClusters.length; c++) {
              const d = colorDist(r, g, b, bgClusters[c].r, bgClusters[c].g, bgClusters[c].b);
              if (d < minD) minD = d;
            }
            return minD;
          }

          // Helper: Chromaticity distance to background palette (normalized hue/saturation)
          function chromaDistToBg(r, g, b) {
            const s = r + g + b;
            if (s < 20) return Infinity; // Very dark black
            const rn = r / s, gn = g / s, bn = b / s;

            let minChroma = Infinity;
            for (let c = 0; c < bgClusters.length; c++) {
              const cs = bgClusters[c].r + bgClusters[c].g + bgClusters[c].b;
              if (cs < 20) continue;
              const crn = bgClusters[c].r / cs;
              const cgn = bgClusters[c].g / cs;
              const cbn = bgClusters[c].b / cs;
              const dr = rn - crn, dg = gn - cgn, db = bn - cbn;
              const dChroma = Math.sqrt(dr * dr + dg * dg + db * db);
              if (dChroma < minChroma) minChroma = dChroma;
            }
            return minChroma;
          }

          // 2. Sobel Edge Magnitude on Luminance
          const lum = new Float32Array(totalPixels);
          for (let i = 0, p = 0; i < data.length; i += 4, p++) {
            lum[p] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          }

          const edge = new Float32Array(totalPixels);
          for (let y = 1; y < procH - 1; y++) {
            const yw = y * procW;
            for (let x = 1; x < procW - 1; x++) {
              const p = yw + x;
              const gx = (lum[p - procW + 1] + 2 * lum[p + 1] + lum[p + procW + 1]) -
                         (lum[p - procW - 1] + 2 * lum[p - 1] + lum[p + procW - 1]);
              const gy = (lum[p + procW - 1] + 2 * lum[p + procW] + lum[p + procW + 1]) -
                         (lum[p - procW - 1] + 2 * lum[p - procW] + lum[p + procW - 1]);
              edge[p] = Math.sqrt(gx * gx + gy * gy);
            }
          }

          // 3. Sensitivity & Tolerance Parameters
          let tolMultiplier = 1.0;
          let edgeContrastBarrier = 55;
          if (sensitivityPreset === 'gentle') {
            tolMultiplier = 0.72;
            edgeContrastBarrier = 42;
          } else if (sensitivityPreset === 'strong') {
            tolMultiplier = 1.38;
            edgeContrastBarrier = 75;
          }
          const baseTol = Math.max(16, (colorTolerance * 1.15) * tolMultiplier);

          // 4. Skin Tone & Subject Detail Protection
          function isProtectedSkin(r, g, b, x, y) {
            if (subjectType === 'product') return false;
            // Face / Neck central portrait region
            if (x < procW * 0.18 || x > procW * 0.82 || y < procH * 0.10 || y > procH * 0.88) {
              return false;
            }
            if (r < 75 || g < 40 || b < 25) return false;
            if (!(r > g && g >= b && (r - g) >= 8)) return false;

            const cb = 128 - 0.1687 * r - 0.3313 * g + 0.5 * b;
            const cr = 128 + 0.5 * r - 0.4187 * g - 0.0813 * b;
            const inSkinChroma = (cb >= 78 && cb <= 135 && cr >= 132 && cr <= 180);
            if (!inSkinChroma) return false;

            // Only protect if pixel is distinct from background palette
            const bgDist = distToBg(r, g, b);
            if (bgDist < baseTol * 0.85) {
              return false; // Background wall, not skin!
            }
            return true;
          }

          // 5. Seeding & 4-Connected Region Growing (Queue-based BFS)
          const isBg = new Uint8Array(totalPixels);
          const queue = new Int32Array(totalPixels);
          let qHead = 0, qTail = 0;

          function addSeed(p) {
            if (isBg[p] === 1) return;
            const idx = p * 4;
            const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
            if (a < 30) {
              isBg[p] = 1;
              queue[qTail++] = p;
              return;
            }
            const px = p % procW;
            const py = Math.floor(p / procW);
            if (isProtectedSkin(r, g, b, px, py)) return;

            const d = distToBg(r, g, b);
            if (d < baseTol * 1.35) {
              isBg[p] = 1;
              queue[qTail++] = p;
            }
          }

          // Top edge
          for (let x = 0; x < procW; x++) addSeed(x);
          // Left and right edges
          for (let y = 1; y < procH; y++) {
            addSeed(y * procW);
            addSeed(y * procW + (procW - 1));
          }
          // Bottom edge (add if matching background palette)
          for (let x = 0; x < procW; x++) {
            addSeed((procH - 1) * procW + x);
          }

          while (qHead < qTail) {
            const curr = queue[qHead++];
            const cx = curr % procW;
            const cy = Math.floor(curr / procW);
            const cIdx = curr * 4;
            const cr = data[cIdx], cg = data[cIdx + 1], cb = data[cIdx + 2];

            const nbs = [curr - 1, curr + 1, curr - procW, curr + procW];
            for (let i = 0; i < 4; i++) {
              const n = nbs[i];
              if (n < 0 || n >= totalPixels) continue;
              if (isBg[n] !== 0) continue;

              const nx = n % procW;
              const ny = Math.floor(n / procW);
              if (Math.abs(nx - cx) > 1 || Math.abs(ny - cy) > 1) continue;

              const nIdx = n * 4;
              const na = data[nIdx + 3];
              if (na < 30) {
                isBg[n] = 1;
                queue[qTail++] = n;
                continue;
              }

              const nr = data[nIdx], ng = data[nIdx + 1], nb = data[nIdx + 2];

              // Skin protection check
              if (isProtectedSkin(nr, ng, nb, nx, ny)) continue;

              // Distance to background palette
              const dToBg = distToBg(nr, ng, nb);

              // Step contrast from current confirmed background pixel
              const stepDiff = colorDist(cr, cg, cb, nr, ng, nb);

              // Contrast barrier check:
              // Only block if there is high edge contrast AND the pixel does not share the background chromaticity
              const cDist = chromaDistToBg(nr, ng, nb);
              const isShadowTone = (cDist < 0.052);
              if (edge[n] > edgeContrastBarrier && stepDiff > 28 && !isShadowTone) {
                continue;
              }

              // Background acceptance
              let isMatch = false;
              if (dToBg < baseTol) {
                isMatch = true;
              } else if (dToBg < baseTol * 1.5 && stepDiff < 18) {
                // Smooth local continuity on wall gradient or light falloff
                isMatch = true;
              } else if (isShadowTone && stepDiff < 25 && !isProtectedSkin(nr, ng, nb, nx, ny)) {
                // Drop shadow on wall: identical chromaticity to background palette
                isMatch = true;
              } else if (sensitivityPreset === 'strong' && dToBg < baseTol * 1.85 && stepDiff < 22) {
                isMatch = true;
              }

              if (isMatch) {
                isBg[n] = 1;
                queue[qTail++] = n;
              }
            }
          }

          // 6. Anti-Aliased Trimap Boundary Feathering
          const maskCtx = analysisMaskCanvas.getContext('2d');
          const maskImg = maskCtx.createImageData(procW, procH);
          const mData = maskImg.data;

          const isBoundary = new Uint8Array(totalPixels);
          for (let y = 1; y < procH - 1; y++) {
            const yw = y * procW;
            for (let x = 1; x < procW - 1; x++) {
              const p = yw + x;
              if (isBg[p] === 0) {
                if (isBg[p - 1] === 1 || isBg[p + 1] === 1 || isBg[p - procW] === 1 || isBg[p + procW] === 1) {
                  isBoundary[p] = 1;
                }
              }
            }
          }

          for (let p = 0; p < totalPixels; p++) {
            const idx = p * 4;
            if (isBg[p] === 1) {
              mData[idx] = 0;
              mData[idx + 1] = 0;
              mData[idx + 2] = 0;
              mData[idx + 3] = 0; // Pure transparent
            } else {
              let alpha = 255;
              if (isBoundary[p] === 1) {
                const nr = data[idx], ng = data[idx + 1], nb = data[idx + 2];
                const d = distToBg(nr, ng, nb);
                if (d < baseTol * 1.5) {
                  const factor = Math.max(0.25, Math.min(1.0, (d - baseTol * 0.4) / (baseTol * 0.9)));
                  alpha = Math.round(factor * 255);
                }
              }
              mData[idx] = 255;
              mData[idx + 1] = 255;
              mData[idx + 2] = 255;
              mData[idx + 3] = alpha; // Semi-transparent or fully opaque
            }
          }
          maskCtx.putImageData(maskImg, 0, 0);

          updateCompositeAndPreview();

          if (statusPill) {
            statusPill.innerHTML = `
              <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
              <span>Ready</span>
            `;
          }
        } catch (err) {
          console.error('Segmentation error:', err);
          showToast('Failed to analyze image: ' + err.message, 'error');
          if (statusPill) {
            statusPill.innerHTML = `<span style="color:#ef4444;">Error</span>`;
          }
        }
      }, 30);
    }

    // --- Combine Analysis Mask + Manual Refinements & Update Display ---
    function updateCompositeAndPreview() {
      if (!analysisMaskCanvas || !finalCompositeCanvas || !originalImg) return;

      const actx = analysisMaskCanvas.getContext('2d');
      const aData = actx.getImageData(0, 0, procW, procH).data;

      const mctx = manualMaskCanvas ? manualMaskCanvas.getContext('2d') : null;
      const mData = mctx ? mctx.getImageData(0, 0, procW, procH).data : null;

      // Create / update compositeMaskCanvas
      if (!compositeMaskCanvas) {
        compositeMaskCanvas = document.createElement('canvas');
      }
      compositeMaskCanvas.width = procW;
      compositeMaskCanvas.height = procH;
      const compCtx = compositeMaskCanvas.getContext('2d');
      const compImg = compCtx.createImageData(procW, procH);
      const cData = compImg.data;

      for (let p = 0; p < procW * procH; p++) {
        const idx = p * 4;
        let alpha = aData[idx + 3];

        if (mData) {
          const manualErase = mData[idx]; // Red channel indicates Erase
          const manualRestore = mData[idx + 1]; // Green channel indicates Restore
          if (manualErase > 128) {
            alpha = 0; // Forced transparent by manual brush
          } else if (manualRestore > 128) {
            alpha = 255; // Forced opaque by manual brush
          }
        }

        cData[idx] = 255;
        cData[idx + 1] = 255;
        cData[idx + 2] = 255;
        cData[idx + 3] = alpha;
      }
      compCtx.putImageData(compImg, 0, 0);

      // Render to finalCompositeCanvas
      const fctx = finalCompositeCanvas.getContext('2d');
      fctx.clearRect(0, 0, procW, procH);
      fctx.drawImage(originalImg, 0, 0, procW, procH);
      fctx.globalCompositeOperation = 'destination-in';
      fctx.drawImage(compositeMaskCanvas, 0, 0);
      fctx.globalCompositeOperation = 'source-over';

      updatePreviewDisplay();
    }


    // --- Draw Final Preview onto the Screen Canvas ---
    function updatePreviewDisplay() {
      const previewCanvas = document.getElementById('bg-remove-preview-canvas');
      if (!previewCanvas || !finalCompositeCanvas || !originalImg) return;

      previewCanvas.width = procW;
      previewCanvas.height = procH;
      const pctx = previewCanvas.getContext('2d');
      pctx.clearRect(0, 0, procW, procH);

      if (viewMode === 'original') {
        // Draw original raw photo
        pctx.drawImage(originalImg, 0, 0, procW, procH);
      } else if (viewMode === 'cutout') {
        // Draw cutout with chosen background
        if (bgMode === 'white') {
          pctx.fillStyle = '#ffffff';
          pctx.fillRect(0, 0, procW, procH);
        } else if (bgMode === 'gray') {
          pctx.fillStyle = '#f1f5f9';
          pctx.fillRect(0, 0, procW, procH);
        } else if (bgMode === 'blue') {
          pctx.fillStyle = '#1e3a8a';
          pctx.fillRect(0, 0, procW, procH);
        } else if (bgMode === 'custom') {
          pctx.fillStyle = customBgColor;
          pctx.fillRect(0, 0, procW, procH);
        }
        pctx.drawImage(finalCompositeCanvas, 0, 0);
      } else if (viewMode === 'split') {
        // Before / After Split Slider
        const splitX = Math.round(procW * splitRatio);

        // 1. Draw Left Side (Original)
        pctx.save();
        pctx.beginPath();
        pctx.rect(0, 0, splitX, procH);
        pctx.clip();
        pctx.drawImage(originalImg, 0, 0, procW, procH);
        pctx.restore();

        // 2. Draw Right Side (Cutout)
        pctx.save();
        pctx.beginPath();
        pctx.rect(splitX, 0, procW - splitX, procH);
        pctx.clip();
        if (bgMode === 'white') {
          pctx.fillStyle = '#ffffff';
          pctx.fillRect(0, 0, procW, procH);
        } else if (bgMode === 'gray') {
          pctx.fillStyle = '#f1f5f9';
          pctx.fillRect(0, 0, procW, procH);
        } else if (bgMode === 'blue') {
          pctx.fillStyle = '#1e3a8a';
          pctx.fillRect(0, 0, procW, procH);
        } else if (bgMode === 'custom') {
          pctx.fillStyle = customBgColor;
          pctx.fillRect(0, 0, procW, procH);
        }
        pctx.drawImage(finalCompositeCanvas, 0, 0);
        pctx.restore();

        // 3. Draw Split Line & Handle
        pctx.strokeStyle = '#ffffff';
        pctx.lineWidth = 2.5;
        pctx.beginPath();
        pctx.moveTo(splitX, 0);
        pctx.lineTo(splitX, procH);
        pctx.stroke();

        pctx.fillStyle = '#059669';
        pctx.beginPath();
        pctx.arc(splitX, procH / 2, 14, 0, Math.PI * 2);
        pctx.fill();
        pctx.strokeStyle = '#ffffff';
        pctx.lineWidth = 2;
        pctx.stroke();

        // Labels
        pctx.font = 'bold 11px system-ui, sans-serif';
        pctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
        pctx.fillRect(8, 8, 56, 18);
        pctx.fillStyle = '#ffffff';
        pctx.fillText('Original', 14, 21);

        pctx.fillStyle = 'rgba(5, 150, 105, 0.85)';
        pctx.fillRect(procW - 64, 8, 56, 18);
        pctx.fillStyle = '#ffffff';
        pctx.fillText('Cutout', procW - 56, 21);
      }
    }

    // --- Full-Resolution Native Export ---
    function executeDownload() {
      if (!originalImg || !finalCompositeCanvas) return;

      const btnDownload = document.getElementById('bg-btn-download');
      if (btnDownload) {
        btnDownload.disabled = true;
        btnDownload.innerHTML = `
          <span class="spinner-sm" style="display:inline-block; width:12px; height:12px; border:2px solid #ffffff; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; vertical-align:middle; margin-right:4px;"></span>
          <span>Generating Cutout...</span>
        `;
      }

      setTimeout(() => {
        try {
          // Create full-resolution export canvas
          const exportCanvas = document.createElement('canvas');
          exportCanvas.width = origW;
          exportCanvas.height = origH;
          const ectx = exportCanvas.getContext('2d');

          // If solid background selected, fill the export canvas with that color first
          if (bgMode === 'white') {
            ectx.fillStyle = '#ffffff';
            ectx.fillRect(0, 0, origW, origH);
          } else if (bgMode === 'gray') {
            ectx.fillStyle = '#f1f5f9';
            ectx.fillRect(0, 0, origW, origH);
          } else if (bgMode === 'blue') {
            ectx.fillStyle = '#1e3a8a';
            ectx.fillRect(0, 0, origW, origH);
          } else if (bgMode === 'custom') {
            ectx.fillStyle = customBgColor;
            ectx.fillRect(0, 0, origW, origH);
          }

          // Draw full-resolution cutout onto offscreen canvas
          const cutoutCanvas = document.createElement('canvas');
          cutoutCanvas.width = origW;
          cutoutCanvas.height = origH;
          const cctx = cutoutCanvas.getContext('2d');

          // Draw raw full-res image
          cctx.drawImage(originalImg, 0, 0, origW, origH);

          // Bilinearly mask using compositeMaskCanvas alpha
          cctx.globalCompositeOperation = 'destination-in';
          cctx.drawImage(compositeMaskCanvas || finalCompositeCanvas, 0, 0, origW, origH);
          cctx.globalCompositeOperation = 'source-over';

          // Composite cutout onto exportCanvas
          ectx.drawImage(cutoutCanvas, 0, 0);

          const isTransparent = (bgMode === 'transparent');
          const mimeType = isTransparent ? 'image/png' : 'image/png';
          const ext = isTransparent ? 'png' : 'png';
          const filename = `${baseFileName}.${ext}`;

          exportCanvas.toBlob(blob => {
            if (!blob) {
              showToast('Error generating image file.', 'error');
              return;
            }
            triggerDownload(blob, filename);
            showToast(`Downloaded "${filename}" (${origW} × ${origH} px)!`, 'success');

            if (btnDownload) {
              btnDownload.disabled = false;
              const dlText = document.getElementById('bg-download-btn-text');
              const label = isTransparent ? 'Download Transparent PNG' : `Download Image (${bgMode.toUpperCase()})`;
              btnDownload.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span id="bg-download-btn-text">${escapeHtml(label)}</span>
              `;
            }
          }, mimeType);
        } catch (err) {
          console.error('Export error:', err);
          showToast('Failed to export image: ' + err.message, 'error');
          if (btnDownload) {
            btnDownload.disabled = false;
            btnDownload.textContent = 'Download Cutout';
          }
        }
      }, 50);
    }

    // Launch initial Option B import dropzone
    renderInitialDropzone();
  }

  /* =================================================================
     7. HELPER FUNCTIONS
     ================================================================= */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatBytes(bytes, decimals = 1) {
    if (!+bytes) return '0 B';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  function triggerDownload(blob, filename) {
    if (typeof window.triggerDownload === 'function' && window.triggerDownload !== triggerDownload) {
      window.triggerDownload(blob, filename);
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 150);
  }
  window.triggerDownload = triggerDownload;

  function validateImageFile(file) {
    if (!file) {
      return { valid: false, error: 'No file selected.' };
    }
    const isImageMime = file.type && file.type.startsWith('image/');
    const hasImageExt = /\.(jpe?g|png|webp|gif|bmp|svg)$/i.test(file.name || '');
    if (!isImageMime && !hasImageExt) {
      return {
        valid: false,
        error: 'Unsupported file type. Please select a valid image (JPG, PNG, WebP).'
      };
    }
    if (file.size === 0) {
      return {
        valid: false,
        error: 'The selected file is empty (0 bytes). Please choose a valid image.'
      };
    }
    if (file.size > MAX_IMAGE_FILE_SIZE) {
      return {
        valid: false,
        error: `File exceeds 25 MB limit (${formatBytes(file.size)}). Please select a file under 25 MB.`
      };
    }
    return { valid: true };
  }

  function setupDropzoneDnd(dropzone, input, options = { acceptImageOnly: true }) {
    ['dragenter', 'dragover'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });
    ['dragleave', 'drop'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });
    dropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
        const file = e.dataTransfer.files[0];
        if (options && options.acceptImageOnly) {
          const validation = validateImageFile(file);
          if (!validation.valid) {
            showToast(validation.error, 'error');
            return;
          }
        }
        input.files = e.dataTransfer.files;
        const event = new Event('change');
        input.dispatchEvent(event);
      }
    });
  }

  function toCamelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
        index === 0 ? letter.toLowerCase() : letter.toUpperCase()
      )
      .replace(/\s+/g, '');
  }

  function toPascalCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, letter => letter.toUpperCase())
      .replace(/\s+/g, '');
  }

  function toDelimitedCase(str, delimiter) {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{M}\p{N}]+/gu, delimiter)
      .replace(new RegExp('^' + delimiter + '+|' + delimiter + '+$', 'g'), '');
  }

  /* =================================================================
     PDF EDITOR WORKBENCH IMPLEMENTATION
     100% In-Browser, Vector-Preserving PDF Editor
     ================================================================= */

  function renderPdfEditorWorkbench() {
    let pdfDocJs = null;
    let originalPdfBytes = null;
    let originalFileName = 'document.pdf';
    let totalPages = 0;
    let currentPageIndex = 0;
    let currentScale = 1.0;
    let zoomMode = '1.0';
    let currentTool = 'select'; // 'select', 'edit-text', 'add-text', 'draw', 'highlight', 'shapes', 'image', 'redact'
    let isDirty = false;
    let currentRenderTask = null;

    // Per-page modifications state
    let pageStates = [];

    // Undo / Redo history
    let undoStack = [];
    let redoStack = [];

    // Context tool settings
    let textSettings = {
      fontFamily: 'Helvetica',
      fontSize: 14,
      fontColor: '#0f172a',
      isBold: false
    };
    let shapeSettings = {
      type: 'rect', // 'rect', 'circle', 'line'
      strokeColor: '#2563eb',
      fillColor: 'transparent',
      strokeWidth: 2
    };
    let drawSettings = {
      color: '#0f172a',
      width: 3
    };
    let highlightSettings = {
      color: '#facc15',
      width: 18
    };
    let redactSettings = {
      color: '#ffffff' // whiteout by default
    };

    // Drawing state
    let isDrawing = false;
    let lastDrawX = 0;
    let lastDrawY = 0;
    let preDrawSnapshot = null;
    let currentStrokePoints = [];

    // Drag / Resize state for overlay elements
    let activeDragElement = null;
    let activeDragMode = null; // 'move' or 'resize-se', etc.
    let dragStartX = 0;
    let dragStartY = 0;
    let initialElemState = null;
    let selectedElementId = null;

    function setSelectedElement(elemId) {
      selectedElementId = elemId;
      if (elementsContainer) {
        elementsContainer.querySelectorAll('.pdf-element-box').forEach(b => {
          if (elemId && b.getAttribute('data-element-id') === elemId) {
            b.classList.add('selected');
          } else {
            b.classList.remove('selected');
          }
        });
      }
    }

    function commitActiveTextElements() {
      if (!elementsContainer) return;
      const textDivs = elementsContainer.querySelectorAll('.pdf-element-text-content');
      textDivs.forEach(td => {
        const parentBox = td.closest('.pdf-element-box');
        if (parentBox) {
          const id = parentBox.getAttribute('data-element-id');
          const pageState = pageStates[currentPageIndex];
          if (pageState && pageState.addedTexts) {
            const item = pageState.addedTexts.find(t => t.id === id);
            if (item && item.text !== td.textContent) {
              item.text = td.textContent;
              markDirty(true);
            }
          }
        }
        td.blur();
      });
    }

    function clearElementSelection() {
      commitActiveTextElements();
      setSelectedElement(null);
    }

    // Redaction drag state
    let isRedacting = false;
    let redactStartX = 0;
    let redactStartY = 0;

    // Shape drag state
    let isDrawingShape = false;
    let shapeStartX = 0;
    let shapeStartY = 0;

    function parseColor(hex) {
      if (!hex || hex === 'transparent') return { r: 0, g: 0, b: 0 };
      let c = hex.replace('#', '');
      if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
      const num = parseInt(c, 16);
      return {
        r: ((num >> 16) & 255) / 255,
        g: ((num >> 8) & 255) / 255,
        b: (num & 255) / 255
      };
    }

    dom.modalBody.innerHTML = `
      <div class="workbench-container pdf-edit-workbench-root">
        ${getOptionBPrivacyBannerHTML(
          '100% In-Browser Confidential PDF Editing',
          'Your PDF document is loaded and modified locally in browser memory. No pages, text, or images are sent to any remote server. Your document layout and original vector objects are fully preserved.'
        )}

        ${getOptionBImportHTML({
          containerId: 'pdf-edit-dropzone-container',
          dropzoneId: 'pdf-edit-optionb-dropzone',
          fileInputId: 'pdf-edit-file-input',
          browseBtnId: 'pdf-edit-browse-btn',
          fileTypeLabel: 'PDF Document',
          formatHint: 'Supports single or multi-page PDF documents up to 50 MB',
          accept: '.pdf,application/pdf',
          badgeText: 'PDF',
          badgeColor: '#2563eb',
          privacyChecklist: [
            '100% Client-side processing',
            'No files or data sent to servers',
            'Original vector & layout integrity preserved'
          ]
        })}

        <!-- Main PDF Editor Workspace -->
        <div class="pdf-edit-workspace-layout" id="pdf-edit-active-workspace" style="display:none;">
          <!-- Top Main Toolbar -->
          <div class="pdf-edit-topbar">
            <!-- Left: Tools Palette -->
            <div class="pdf-edit-tools-group">
              <button type="button" class="pdf-tool-btn active" data-tool="select" title="Select & Move (V)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>
                <span>Select</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="edit-text" title="Edit Existing Text in Place (T)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <span>Edit Text</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="add-text" title="Add New Text (A)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
                <span>Add Text</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="draw" title="Pen / Freehand (P)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/><path d="M3 21h18"/></svg>
                <span>Draw</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="highlight" title="Highlighter (H)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l-6 6v3h3l6-6m-3-3l7-7a2 2 0 0 1 3 3l-7 7m-3-3l3 3"/></svg>
                <span>Highlight</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="shapes" title="Shapes (Rectangle, Circle, Line)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <span>Shape</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="image" title="Insert Image onto Page">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>Add Image</span>
              </button>
              <button type="button" class="pdf-tool-btn" data-tool="redact" title="Redact / Whiteout sensitive data">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor"/><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="2"/></svg>
                <span>Redact</span>
              </button>
              <input type="file" id="pdf-img-file-input" accept="image/png,image/jpeg,image/webp" style="display:none;" />
            </div>

            <!-- Center: Undo/Redo & Zoom Controls -->
            <div class="pdf-edit-actions-group">
              <button type="button" class="btn btn-secondary btn-sm pdf-btn-icon" id="pdf-btn-undo" title="Undo (Ctrl+Z)" disabled>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
              </button>
              <button type="button" class="btn btn-secondary btn-sm pdf-btn-icon" id="pdf-btn-redo" title="Redo (Ctrl+Y)" disabled>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              </button>
              <div class="pdf-edit-divider"></div>
              <button type="button" class="btn btn-secondary btn-sm pdf-btn-icon" id="pdf-btn-zoom-out" title="Zoom Out (-)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <select id="pdf-zoom-select" class="form-select form-select-sm pdf-zoom-dropdown" aria-label="Zoom Level">
                <option value="fit-width">Fit Width</option>
                <option value="fit-page">Fit Page</option>
                <option value="0.5">50%</option>
                <option value="0.75">75%</option>
                <option value="1.0" selected>100%</option>
                <option value="1.25">125%</option>
                <option value="1.5">150%</option>
                <option value="1.75">175%</option>
                <option value="2.0">200%</option>
                <option value="2.5">250%</option>
                <option value="3.0">300%</option>
                <option value="custom" id="pdf-zoom-custom-option" style="display:none;"></option>
              </select>
              <button type="button" class="btn btn-secondary btn-sm pdf-btn-icon" id="pdf-btn-zoom-in" title="Zoom In (+)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>

            <!-- Right: Status & Save -->
            <div class="pdf-edit-save-group">
              <span class="pdf-unsaved-badge" id="pdf-unsaved-indicator">
                <span class="status-dot-green"></span>
                <span id="pdf-unsaved-label">Saved</span>
              </span>
              <button type="button" class="btn btn-secondary btn-sm" id="pdf-btn-change-doc">
                Change PDF
              </button>
              <button type="button" class="pdf-btn-save" id="pdf-btn-save-export">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>Save &amp; Download PDF</span>
              </button>
            </div>
          </div>

          <!-- Secondary Contextual Properties Bar -->
          <div class="pdf-edit-context-bar" id="pdf-context-bar">
            <!-- Injected dynamically based on active tool -->
          </div>

          <!-- Main Stage Area: Sidebar + Scrollable Center -->
          <div class="pdf-edit-main-stage">
            <!-- Left Thumbnail Sidebar -->
            <aside class="pdf-edit-sidebar" id="pdf-edit-sidebar">
              <div class="pdf-sidebar-header">
                <span>Pages (<span id="pdf-sidebar-page-count">0</span>)</span>
                <div class="pdf-sidebar-actions">
                  <button type="button" class="pdf-mini-btn" id="pdf-page-rot-left" title="Rotate Current Page 90° CCW">⤺</button>
                  <button type="button" class="pdf-mini-btn" id="pdf-page-rot-right" title="Rotate Current Page 90° CW">⤹</button>
                  <button type="button" class="pdf-mini-btn pdf-mini-btn-del" id="pdf-page-delete" title="Toggle Delete Current Page">🗑</button>
                </div>
              </div>
              <div class="pdf-thumbnail-list" id="pdf-thumbnail-list">
                <!-- Injected thumbnails -->
              </div>
            </aside>

            <!-- Center Stage Scroll View -->
            <div class="pdf-stage-scroll-container" id="pdf-stage-scroll">
              <!-- Scanned / Image document notice -->
              <div class="pdf-scanned-notice" id="pdf-scanned-notice" style="display:none;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>This page contains scanned/raster image content. In-place text editing applies to digital text. Use <strong>Add Text</strong> or <strong>Redact</strong> to overlay or replace text.</span>
                <button type="button" class="pdf-notice-dismiss" id="pdf-scanned-dismiss">&times;</button>
              </div>

              <!-- Page Canvas Wrapper -->
              <div class="pdf-page-wrapper" id="pdf-page-wrapper">
                <canvas id="pdf-render-canvas" class="pdf-render-canvas"></canvas>
                <div id="pdf-text-layer" class="pdf-text-layer"></div>
                <div id="pdf-annotation-layer" class="pdf-annotation-layer">
                  <canvas id="pdf-draw-canvas" class="pdf-draw-canvas"></canvas>
                  <div id="pdf-elements-container" class="pdf-elements-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading Overlay -->
        <div class="pdf-loading-overlay" id="pdf-loading-overlay" style="display:none;">
          <div class="pdf-spinner"></div>
          <div class="pdf-loading-text" id="pdf-loading-text">Loading document...</div>
        </div>
      </div>
    `;

    // DOM references
    const dropzoneContainer = document.getElementById('pdf-edit-dropzone-container');
    const activeWorkspace = document.getElementById('pdf-edit-active-workspace');
    const toolBtns = document.querySelectorAll('.pdf-tool-btn');
    const contextBar = document.getElementById('pdf-context-bar');
    const btnUndo = document.getElementById('pdf-btn-undo');
    const btnRedo = document.getElementById('pdf-btn-redo');
    const zoomSelect = document.getElementById('pdf-zoom-select');
    const btnZoomIn = document.getElementById('pdf-btn-zoom-in');
    const btnZoomOut = document.getElementById('pdf-btn-zoom-out');
    const unsavedIndicator = document.getElementById('pdf-unsaved-indicator');
    const unsavedLabel = document.getElementById('pdf-unsaved-label');
    const btnChangeDoc = document.getElementById('pdf-btn-change-doc');
    const btnSaveExport = document.getElementById('pdf-btn-save-export');
    const pageRotLeft = document.getElementById('pdf-page-rot-left');
    const pageRotRight = document.getElementById('pdf-page-rot-right');
    const pageDelete = document.getElementById('pdf-page-delete');
    const sidebarPageCount = document.getElementById('pdf-sidebar-page-count');
    const thumbnailList = document.getElementById('pdf-thumbnail-list');
    const stageScroll = document.getElementById('pdf-stage-scroll');
    const pageWrapper = document.getElementById('pdf-page-wrapper');
    const renderCanvas = document.getElementById('pdf-render-canvas');
    const textLayer = document.getElementById('pdf-text-layer');
    const drawCanvas = document.getElementById('pdf-draw-canvas');
    const elementsContainer = document.getElementById('pdf-elements-container');
    const imgFileInput = document.getElementById('pdf-img-file-input');
    const scannedNotice = document.getElementById('pdf-scanned-notice');
    const scannedDismiss = document.getElementById('pdf-scanned-dismiss');
    const loadingOverlay = document.getElementById('pdf-loading-overlay');
    const loadingText = document.getElementById('pdf-loading-text');

    function showLoading(msg) {
      if (loadingText) loadingText.textContent = msg || 'Processing...';
      if (loadingOverlay) loadingOverlay.style.display = 'flex';
    }

    function hideLoading() {
      if (loadingOverlay) loadingOverlay.style.display = 'none';
    }

    function markDirty(dirty = true) {
      isDirty = dirty;
      if (unsavedIndicator && unsavedLabel) {
        if (dirty) {
          unsavedIndicator.classList.add('dirty');
          unsavedLabel.textContent = 'Unsaved changes';
        } else {
          unsavedIndicator.classList.remove('dirty');
          unsavedLabel.textContent = 'Saved';
        }
      }
    }

    function updateUndoRedoUI() {
      if (btnUndo) btnUndo.disabled = undoStack.length === 0;
      if (btnRedo) btnRedo.disabled = redoStack.length === 0;
    }

    function pushUndo(action) {
      undoStack.push(action);
      redoStack = [];
      markDirty(true);
      updateUndoRedoUI();
    }

    // Initialize Option B dropzone
    initOptionBImportHandlers({
      dropzoneId: 'pdf-edit-optionb-dropzone',
      fileInputId: 'pdf-edit-file-input',
      browseBtnId: 'pdf-edit-browse-btn',
      onFilesSelected: (files) => {
        if (!files || !files.length) return;
        const file = files[0];
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
          showToast('Please select a valid PDF file.', 'error');
          return;
        }
        if (file.size > 50 * 1024 * 1024) {
          showToast('File size exceeds the 50 MB limit.', 'error');
          return;
        }
        loadPdfFile(file);
      }
    });

    async function loadPdfFile(file) {
      originalFileName = file.name || 'document.pdf';
      showLoading('Reading PDF file...');
      try {
        const buf = await file.arrayBuffer();
        originalPdfBytes = new Uint8Array(buf).slice(0);
        await initPdfDocument(originalPdfBytes);
      } catch (err) {
        console.error('Failed to load PDF file:', err);
        showToast('Error reading PDF file: ' + err.message, 'error');
        hideLoading();
      }
    }

    async function initPdfDocument(bytesInput) {
      showLoading('Parsing PDF document structure...');
      try {
        if (window.pdfjsLib && window.pdfjsLib.GlobalWorkerOptions) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/libs/pdf.worker.min.js';
        }

        originalPdfBytes = new Uint8Array(bytesInput).slice(0);
        currentPageIndex = 0;

        // Clone slice for PDF.js so worker transfer cannot detach originalPdfBytes
        pdfDocJs = await window.pdfjsLib.getDocument({ data: originalPdfBytes.slice(0) }).promise;
        totalPages = pdfDocJs.numPages;

        pageStates = [];
        for (let i = 0; i < totalPages; i++) {
          pageStates.push({
            rotation: 0,
            deleted: false,
            textEdits: [],
            addedTexts: [],
            shapes: [],
            redactions: [],
            images: [],
            drawingDataUrl: null
          });
        }

        undoStack = [];
        redoStack = [];
        updateUndoRedoUI();
        markDirty(false);

        if (sidebarPageCount) sidebarPageCount.textContent = totalPages;
        if (dropzoneContainer) dropzoneContainer.style.display = 'none';
        if (activeWorkspace) activeWorkspace.style.display = 'flex';

        updateContextBar();
        renderThumbnails();
        await renderCurrentPage();
        hideLoading();
      } catch (err) {
        console.error('Error initializing PDF:', err);
        showToast('Failed to parse PDF document: ' + err.message, 'error');
        hideLoading();
      }
    }

    // Context bar renderer
    function updateContextBar() {
      if (!contextBar) return;

      if (currentTool === 'select') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Mode:</span>
            <span style="font-weight:600; color:#2563eb;">Select &amp; Pan</span>
          </div>
          <span style="color:#64748b; font-size:0.72rem;">Click on any added element to drag or resize. Click text items in "Edit Text" mode to edit in place.</span>
        `;
      } else if (currentTool === 'edit-text') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Font:</span>
            <select id="ctx-text-font" class="pdf-context-select">
              <option value="Helvetica" ${textSettings.fontFamily === 'Helvetica' ? 'selected' : ''}>Helvetica</option>
              <option value="Times" ${textSettings.fontFamily === 'Times' ? 'selected' : ''}>Times Roman</option>
              <option value="Courier" ${textSettings.fontFamily === 'Courier' ? 'selected' : ''}>Courier</option>
            </select>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Color:</span>
            <div class="pdf-color-swatch-picker" id="ctx-font-colors">
              ${['#0f172a', '#2563eb', '#dc2626', '#059669', '#ffffff'].map(c => `
                <button type="button" class="pdf-color-dot ${textSettings.fontColor === c ? 'active' : ''}" data-color="${c}" style="background:${c};" title="${c}"></button>
              `).join('')}
            </div>
          </div>
          <span style="color:#2563eb; font-weight:500; font-size:0.72rem;">Click on any highlighted text block on the page to edit in place.</span>
        `;
        bindContextEvents();
      } else if (currentTool === 'add-text') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Font:</span>
            <select id="ctx-text-font" class="pdf-context-select">
              <option value="Helvetica" ${textSettings.fontFamily === 'Helvetica' ? 'selected' : ''}>Helvetica</option>
              <option value="Times" ${textSettings.fontFamily === 'Times' ? 'selected' : ''}>Times Roman</option>
              <option value="Courier" ${textSettings.fontFamily === 'Courier' ? 'selected' : ''}>Courier</option>
            </select>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Size:</span>
            <select id="ctx-text-size" class="pdf-context-select">
              ${[10, 12, 14, 16, 18, 20, 24, 28, 32, 40].map(s => `
                <option value="${s}" ${textSettings.fontSize === s ? 'selected' : ''}>${s} pt</option>
              `).join('')}
            </select>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Color:</span>
            <div class="pdf-color-swatch-picker" id="ctx-font-colors">
              ${['#0f172a', '#2563eb', '#dc2626', '#059669'].map(c => `
                <button type="button" class="pdf-color-dot ${textSettings.fontColor === c ? 'active' : ''}" data-color="${c}" style="background:${c};" title="${c}"></button>
              `).join('')}
            </div>
          </div>
          <div class="pdf-context-group">
            <button type="button" class="btn btn-secondary btn-sm ${textSettings.isBold ? 'active' : ''}" id="ctx-text-bold" style="padding:2px 8px; font-weight:bold;">B</button>
          </div>
          <span style="color:#64748b; font-size:0.72rem;">Click anywhere on the document to place a new text box.</span>
        `;
        bindContextEvents();
      } else if (currentTool === 'draw') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Ink Color:</span>
            <div class="pdf-color-swatch-picker" id="ctx-draw-colors">
              ${['#0f172a', '#2563eb', '#dc2626', '#059669', '#d97706'].map(c => `
                <button type="button" class="pdf-color-dot ${drawSettings.color === c ? 'active' : ''}" data-color="${c}" style="background:${c};" title="${c}"></button>
              `).join('')}
            </div>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Width:</span>
            <select id="ctx-draw-width" class="pdf-context-select">
              <option value="2" ${drawSettings.width === 2 ? 'selected' : ''}>Thin (2px)</option>
              <option value="3" ${drawSettings.width === 3 ? 'selected' : ''}>Medium (3px)</option>
              <option value="5" ${drawSettings.width === 5 ? 'selected' : ''}>Thick (5px)</option>
            </select>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" id="ctx-clear-draw" style="padding:2px 8px; font-size:0.72rem;">Clear Drawings</button>
        `;
        bindContextEvents();
      } else if (currentTool === 'highlight') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Highlighter Color:</span>
            <div class="pdf-color-swatch-picker" id="ctx-high-colors">
              ${['#facc15', '#4ade80', '#f472b6', '#38bdf8'].map(c => `
                <button type="button" class="pdf-color-dot ${highlightSettings.color === c ? 'active' : ''}" data-color="${c}" style="background:${c};" title="${c}"></button>
              `).join('')}
            </div>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Width:</span>
            <select id="ctx-high-width" class="pdf-context-select">
              <option value="12" ${highlightSettings.width === 12 ? 'selected' : ''}>12px</option>
              <option value="18" ${highlightSettings.width === 18 ? 'selected' : ''}>18px</option>
              <option value="26" ${highlightSettings.width === 26 ? 'selected' : ''}>26px</option>
            </select>
          </div>
          <span style="color:#64748b; font-size:0.72rem;">Drag across text or diagrams to highlight.</span>
        `;
        bindContextEvents();
      } else if (currentTool === 'shapes') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Type:</span>
            <select id="ctx-shape-type" class="pdf-context-select">
              <option value="rect" ${shapeSettings.type === 'rect' ? 'selected' : ''}>Rectangle</option>
              <option value="circle" ${shapeSettings.type === 'circle' ? 'selected' : ''}>Circle / Oval</option>
              <option value="line" ${shapeSettings.type === 'line' ? 'selected' : ''}>Line</option>
            </select>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Stroke:</span>
            <div class="pdf-color-swatch-picker" id="ctx-shape-stroke">
              ${['#2563eb', '#dc2626', '#059669', '#0f172a'].map(c => `
                <button type="button" class="pdf-color-dot ${shapeSettings.strokeColor === c ? 'active' : ''}" data-color="${c}" style="background:${c};" title="${c}"></button>
              `).join('')}
            </div>
          </div>
          <div class="pdf-context-group">
            <span class="pdf-context-label">Fill:</span>
            <select id="ctx-shape-fill" class="pdf-context-select">
              <option value="transparent" ${shapeSettings.fillColor === 'transparent' ? 'selected' : ''}>None</option>
              <option value="#ffffff" ${shapeSettings.fillColor === '#ffffff' ? 'selected' : ''}>White</option>
              <option value="#eff6ff" ${shapeSettings.fillColor === '#eff6ff' ? 'selected' : ''}>Pale Blue</option>
              <option value="#fef2f2" ${shapeSettings.fillColor === '#fef2f2' ? 'selected' : ''}>Pale Red</option>
            </select>
          </div>
          <span style="color:#64748b; font-size:0.72rem;">Drag on page to draw the shape.</span>
        `;
        bindContextEvents();
      } else if (currentTool === 'redact') {
        contextBar.innerHTML = `
          <div class="pdf-context-group">
            <span class="pdf-context-label">Redaction Fill:</span>
            <select id="ctx-redact-color" class="pdf-context-select">
              <option value="#ffffff" ${redactSettings.color === '#ffffff' ? 'selected' : ''}>Whiteout (#FFFFFF)</option>
              <option value="#000000" ${redactSettings.color === '#000000' ? 'selected' : ''}>Confidential Black (#000000)</option>
            </select>
          </div>
          <span style="color:#dc2626; font-size:0.72rem; font-weight:500;">Drag a rectangle over private text or sensitive numbers to permanently cover them upon export.</span>
        `;
        bindContextEvents();
      } else if (currentTool === 'image') {
        contextBar.innerHTML = `
          <button type="button" class="btn btn-secondary btn-sm" id="ctx-btn-pick-img" style="padding:3px 10px; font-weight:600;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Choose Image (PNG / JPG)
          </button>
          <span style="color:#64748b; font-size:0.72rem;">Upload a logo, stamp, or photo to place and resize on this page.</span>
        `;
        bindContextEvents();
      }
    }

    function bindContextEvents() {
      const fontSelect = document.getElementById('ctx-text-font');
      if (fontSelect) {
        fontSelect.addEventListener('change', (e) => {
          textSettings.fontFamily = e.target.value;
        });
      }
      const sizeSelect = document.getElementById('ctx-text-size');
      if (sizeSelect) {
        sizeSelect.addEventListener('change', (e) => {
          textSettings.fontSize = parseInt(e.target.value, 10);
        });
      }
      const boldBtn = document.getElementById('ctx-text-bold');
      if (boldBtn) {
        boldBtn.addEventListener('click', () => {
          textSettings.isBold = !textSettings.isBold;
          boldBtn.classList.toggle('active', textSettings.isBold);
        });
      }
      const fontColorDots = document.querySelectorAll('#ctx-font-colors .pdf-color-dot');
      fontColorDots.forEach(dot => {
        dot.addEventListener('click', () => {
          fontColorDots.forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
          textSettings.fontColor = dot.getAttribute('data-color');
        });
      });
      const drawColorDots = document.querySelectorAll('#ctx-draw-colors .pdf-color-dot');
      drawColorDots.forEach(dot => {
        dot.addEventListener('click', () => {
          drawColorDots.forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
          drawSettings.color = dot.getAttribute('data-color');
        });
      });
      const drawWidthSelect = document.getElementById('ctx-draw-width');
      if (drawWidthSelect) {
        drawWidthSelect.addEventListener('change', (e) => {
          drawSettings.width = parseInt(e.target.value, 10);
        });
      }
      const clearDrawBtn = document.getElementById('ctx-clear-draw');
      if (clearDrawBtn) {
        clearDrawBtn.addEventListener('click', () => {
          const oldData = pageStates[currentPageIndex].drawingDataUrl;
          if (oldData) {
            pushUndo({
              type: 'clear-draw',
              pageIndex: currentPageIndex,
              prevDataUrl: oldData
            });
            pageStates[currentPageIndex].drawingDataUrl = null;
            const ctx = drawCanvas.getContext('2d');
            ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
          }
        });
      }
      const highColorDots = document.querySelectorAll('#ctx-high-colors .pdf-color-dot');
      highColorDots.forEach(dot => {
        dot.addEventListener('click', () => {
          highColorDots.forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
          highlightSettings.color = dot.getAttribute('data-color');
        });
      });
      const highWidthSelect = document.getElementById('ctx-high-width');
      if (highWidthSelect) {
        highWidthSelect.addEventListener('change', (e) => {
          highlightSettings.width = parseInt(e.target.value, 10);
        });
      }
      const shapeTypeSelect = document.getElementById('ctx-shape-type');
      if (shapeTypeSelect) {
        shapeTypeSelect.addEventListener('change', (e) => {
          shapeSettings.type = e.target.value;
        });
      }
      const shapeStrokeDots = document.querySelectorAll('#ctx-shape-stroke .pdf-color-dot');
      shapeStrokeDots.forEach(dot => {
        dot.addEventListener('click', () => {
          shapeStrokeDots.forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
          shapeSettings.strokeColor = dot.getAttribute('data-color');
        });
      });
      const shapeFillSelect = document.getElementById('ctx-shape-fill');
      if (shapeFillSelect) {
        shapeFillSelect.addEventListener('change', (e) => {
          shapeSettings.fillColor = e.target.value;
        });
      }
      const redactColorSelect = document.getElementById('ctx-redact-color');
      if (redactColorSelect) {
        redactColorSelect.addEventListener('change', (e) => {
          redactSettings.color = e.target.value;
        });
      }
      const pickImgBtn = document.getElementById('ctx-btn-pick-img');
      if (pickImgBtn && imgFileInput) {
        pickImgBtn.addEventListener('click', () => {
          imgFileInput.click();
        });
      }
    }

    // Centralized tool manager with toggle/deactivation support
    function setTool(toolName, force = false) {
      if (activeBlockEditorWrap) {
        closeActiveBlockEditor(true);
      }
      // If clicking the currently active tool again (and not forced), toggle back to 'select'
      if (!force && currentTool === toolName && toolName !== 'select') {
        toolName = 'select';
      }

      // Deselect elements when explicitly returning to select or switching placement tools
      if (toolName === 'select' || toolName !== currentTool) {
        clearElementSelection();
      }

      currentTool = toolName;

      toolBtns.forEach(b => {
        if (b.getAttribute('data-tool') === currentTool) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      updateContextBar();

      if (currentTool === 'draw' || currentTool === 'highlight' || currentTool === 'shapes' || currentTool === 'redact') {
        drawCanvas.classList.add('drawing-active');
      } else {
        drawCanvas.classList.remove('drawing-active');
      }

      if (currentTool === 'image') {
        if (imgFileInput) imgFileInput.click();
      }

      renderTextLayer();
    }

    // Tool selection event handlers
    toolBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setTool(btn.getAttribute('data-tool'));
      });
    });

    // Reliable Zoom System (50% to 300% range, Fit Width/Page, Wheel Zoom with Cursor Anchoring)
    const ZOOM_PRESETS = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0];

    function updateZoomUI() {
      if (!zoomSelect) return;
      const customOpt = document.getElementById('pdf-zoom-custom-option');

      if (zoomMode === 'fit-width') {
        zoomSelect.value = 'fit-width';
        if (customOpt) customOpt.style.display = 'none';
      } else if (zoomMode === 'fit-page') {
        zoomSelect.value = 'fit-page';
        if (customOpt) customOpt.style.display = 'none';
      } else {
        const formatted = (Math.round(currentScale * 100) / 100).toString();
        const exactOpt = Array.from(zoomSelect.options).find(opt => opt.value === formatted || opt.value === String(currentScale));
        if (exactOpt) {
          zoomSelect.value = exactOpt.value;
          if (customOpt) customOpt.style.display = 'none';
        } else {
          if (customOpt) {
            customOpt.value = String(currentScale);
            customOpt.textContent = Math.round(currentScale * 100) + '%';
            customOpt.style.display = 'block';
            zoomSelect.value = String(currentScale);
          }
        }
      }

      if (btnZoomIn) btnZoomIn.disabled = currentScale >= 2.99;
      if (btnZoomOut) btnZoomOut.disabled = currentScale <= 0.51;
    }

    async function setZoomScale(targetScale, anchor = null, silent = false) {
      if (targetScale === 'fit-width' || targetScale === 'fit-page') {
        zoomMode = targetScale;
        await renderCurrentPage({ anchor: anchor, silent: silent });
        return;
      }
      let num = parseFloat(targetScale);
      if (isNaN(num)) num = 1.0;
      num = Math.min(3.0, Math.max(0.5, Math.round(num * 100) / 100));
      zoomMode = String(num);
      await renderCurrentPage({ anchor: anchor, silent: silent });
    }

    if (zoomSelect) {
      zoomSelect.addEventListener('change', async (e) => {
        await setZoomScale(e.target.value);
      });
    }

    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', async () => {
        const cur = currentScale || 1.0;
        let next = ZOOM_PRESETS.find(p => p > cur + 0.04);
        if (!next) next = Math.min(3.0, Math.round((cur + 0.25) * 100) / 100);
        await setZoomScale(next);
      });
    }

    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', async () => {
        const cur = currentScale || 1.0;
        let prev = null;
        for (const p of ZOOM_PRESETS) {
          if (p < cur - 0.04) prev = p;
        }
        if (!prev) prev = Math.max(0.5, Math.round((cur - 0.25) * 100) / 100);
        await setZoomScale(prev);
      });
    }

    // Ctrl + Mouse Wheel Zoom with pointer position anchoring
    let wheelZoomTimer = null;
    let pendingScale = null;
    let pendingAnchor = null;

    if (stageScroll) {
      stageScroll.addEventListener('wheel', (e) => {
        // Requirement 2: Avoid accidental zoom changes while typing in an editor input or textarea
        if (e.target && (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' || e.target.isContentEditable)) {
          return;
        }

        // Requirement 2: Normal mouse-wheel scrolling without Ctrl must continue scrolling the PDF document vertically
        if (!e.ctrlKey && !e.metaKey) {
          return; // Let standard scrolling proceed natively
        }

        // Requirement 2: Do not zoom the entire website or browser page
        e.preventDefault();
        e.stopPropagation();

        if (!pdfDocJs || !pageWrapper) return;

        const scrollRect = stageScroll.getBoundingClientRect();
        const pageRect = pageWrapper.getBoundingClientRect();

        const mouseClientX = e.clientX - scrollRect.left;
        const mouseClientY = e.clientY - scrollRect.top;

        const mouseDocX = e.clientX - pageRect.left;
        const mouseDocY = e.clientY - pageRect.top;

        const delta = e.deltaY < 0 ? 1 : -1;
        const step = delta > 0 ? 1.15 : (1 / 1.15);

        const baseScale = pendingScale !== null ? pendingScale : currentScale;
        let nextScale = Math.min(3.0, Math.max(0.5, Math.round(baseScale * step * 100) / 100));

        if (Math.abs(nextScale - baseScale) < 0.01) return;

        pendingScale = nextScale;
        pendingAnchor = {
          prevScale: baseScale,
          mouseDocX: mouseDocX,
          mouseDocY: mouseDocY,
          mouseClientX: mouseClientX,
          mouseClientY: mouseClientY,
          pageRectWidth: pageRect.width,
          pageRectHeight: pageRect.height
        };

        clearTimeout(wheelZoomTimer);
        wheelZoomTimer = setTimeout(async () => {
          const targetScale = pendingScale;
          const anchor = pendingAnchor;
          pendingScale = null;
          pendingAnchor = null;

          await setZoomScale(targetScale, anchor, true);
        }, 16);
      }, { passive: false });
    }



    // Window resize observer for responsive fit-width / fit-page recalculation
    window.addEventListener('resize', () => {
      if (pdfDocJs && activeWorkspace && activeWorkspace.style.display !== 'none') {
        if (zoomMode === 'fit-width' || zoomMode === 'fit-page') {
          clearTimeout(window._pdfResizeTimer);
          window._pdfResizeTimer = setTimeout(() => {
            renderCurrentPage({ silent: true });
          }, 150);
        }
      }
    });

    // Page operations
    if (pageRotLeft) {
      pageRotLeft.addEventListener('click', async () => {
        if (!pdfDocJs) return;
        const curRot = pageStates[currentPageIndex].rotation;
        pageStates[currentPageIndex].rotation = (curRot + 270) % 360;
        pushUndo({
          type: 'rotate',
          pageIndex: currentPageIndex,
          delta: 270
        });
        await renderCurrentPage();
        updateThumbnailCard(currentPageIndex);
      });
    }

    if (pageRotRight) {
      pageRotRight.addEventListener('click', async () => {
        if (!pdfDocJs) return;
        const curRot = pageStates[currentPageIndex].rotation;
        pageStates[currentPageIndex].rotation = (curRot + 90) % 360;
        pushUndo({
          type: 'rotate',
          pageIndex: currentPageIndex,
          delta: 90
        });
        await renderCurrentPage();
        updateThumbnailCard(currentPageIndex);
      });
    }

    if (pageDelete) {
      pageDelete.addEventListener('click', () => {
        if (!pdfDocJs) return;
        const wasDeleted = pageStates[currentPageIndex].deleted;
        pageStates[currentPageIndex].deleted = !wasDeleted;
        pushUndo({
          type: 'delete-page',
          pageIndex: currentPageIndex,
          prevDeleted: wasDeleted
        });
        updateThumbnailCard(currentPageIndex);
        showToast(pageStates[currentPageIndex].deleted ? 'Page marked as deleted.' : 'Page restored.');
      });
    }

    // Change PDF button
    if (btnChangeDoc) {
      btnChangeDoc.addEventListener('click', () => {
        if (isDirty) {
          if (!confirm('You have unsaved changes in this document. Are you sure you want to open another PDF?')) {
            return;
          }
        }
        if (activeWorkspace) activeWorkspace.style.display = 'none';
        if (dropzoneContainer) dropzoneContainer.style.display = 'block';
      });
    }

    // Image file input handler
    if (imgFileInput) {
      imgFileInput.addEventListener('change', async (e) => {
        if (!e.target.files || !e.target.files.length) return;
        const file = e.target.files[0];
        const val = validateImageFile(file);
        if (!val.valid) {
          showToast(val.error, 'error');
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          const img = new Image();
          img.onload = () => {
            const pageState = pageStates[currentPageIndex];
            const maxW = 200;
            const aspect = img.height / img.width;
            const targetW = Math.min(img.width, maxW);
            const targetH = targetW * aspect;

            const newImg = {
              id: 'img_' + Date.now(),
              dataUrl: dataUrl,
              mime: file.type || 'image/png',
              pdfX: 60,
              pdfY: 200,
              width: targetW,
              height: targetH
            };

            pageState.images.push(newImg);
            pushUndo({
              type: 'add-element',
              pageIndex: currentPageIndex,
              category: 'images',
              item: newImg
            });

            renderElementsLayer();
            setTool('select', true);
            setSelectedElement(newImg.id);
            showToast('Image inserted. Drag or resize, then click empty space or Select to finish.', 'success');
          };
          img.src = dataUrl;
        };
        reader.readAsDataURL(file);
        imgFileInput.value = '';
      });
    }

    // Undo / Redo buttons
    if (btnUndo) {
      btnUndo.addEventListener('click', executeUndo);
    }
    if (btnRedo) {
      btnRedo.addEventListener('click', executeRedo);
    }

    function executeUndo() {
      if (undoStack.length === 0) return;
      const action = undoStack.pop();
      redoStack.push(action);
      applyUndoAction(action);
      updateUndoRedoUI();
    }

    function executeRedo() {
      if (redoStack.length === 0) return;
      const action = redoStack.pop();
      undoStack.push(action);
      applyRedoAction(action);
      updateUndoRedoUI();
    }

    function applyUndoAction(action) {
      const state = pageStates[action.pageIndex];
      if (action.type === 'text-edit') {
        const idx = state.textEdits.findIndex(e => e.id === action.newEdit.id);
        if (action.oldEdit) {
          if (idx !== -1) state.textEdits[idx] = action.oldEdit;
        } else {
          if (idx !== -1) state.textEdits.splice(idx, 1);
        }
        renderTextLayer();
      } else if (action.type === 'add-element') {
        const list = state[action.category];
        const idx = list.findIndex(item => item.id === action.item.id);
        if (idx !== -1) list.splice(idx, 1);
        renderElementsLayer();
      } else if (action.type === 'delete-element') {
        state[action.category].push(action.item);
        renderElementsLayer();
      } else if (action.type === 'rotate') {
        state.rotation = (state.rotation + 360 - action.delta) % 360;
        if (currentPageIndex === action.pageIndex) renderCurrentPage();
        updateThumbnailCard(action.pageIndex);
      } else if (action.type === 'delete-page') {
        state.deleted = action.prevDeleted;
        updateThumbnailCard(action.pageIndex);
      } else if (action.type === 'draw-stroke' || action.type === 'clear-draw') {
        state.drawingDataUrl = action.prevDataUrl;
        if (currentPageIndex === action.pageIndex) {
          loadDrawingSnapshot(action.prevDataUrl);
        }
      }
    }

    function applyRedoAction(action) {
      const state = pageStates[action.pageIndex];
      if (action.type === 'text-edit') {
        const idx = state.textEdits.findIndex(e => e.id === action.newEdit.id);
        if (idx !== -1) {
          state.textEdits[idx] = action.newEdit;
        } else {
          state.textEdits.push(action.newEdit);
        }
        renderTextLayer();
      } else if (action.type === 'add-element') {
        state[action.category].push(action.item);
        renderElementsLayer();
      } else if (action.type === 'delete-element') {
        const list = state[action.category];
        const idx = list.findIndex(item => item.id === action.item.id);
        if (idx !== -1) list.splice(idx, 1);
        renderElementsLayer();
      } else if (action.type === 'rotate') {
        state.rotation = (state.rotation + action.delta) % 360;
        if (currentPageIndex === action.pageIndex) renderCurrentPage();
        updateThumbnailCard(action.pageIndex);
      } else if (action.type === 'delete-page') {
        state.deleted = !action.prevDeleted;
        updateThumbnailCard(action.pageIndex);
      } else if (action.type === 'draw-stroke' || action.type === 'clear-draw') {
        state.drawingDataUrl = action.newDataUrl || null;
        if (currentPageIndex === action.pageIndex) {
          loadDrawingSnapshot(action.newDataUrl);
        }
      }
    }

    // Unified keyboard shortcuts (Escape tool safety, Zoom, Undo/Redo)
    const onKeydown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        if (activeBlockEditorWrap) {
          closeActiveBlockEditor(true);
        }
        if (selectedElementId) {
          clearElementSelection();
        }
        if (currentTool !== 'select') {
          setTool('select', true);
        }
        return;
      }

      if (!pdfDocJs || !activeWorkspace || activeWorkspace.style.display === 'none') return;

      if (e.target && (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' || e.target.isContentEditable)) return;

      if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) {
        e.preventDefault();
        if (btnZoomIn && !btnZoomIn.disabled) btnZoomIn.click();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === '-' || e.key === '_')) {
        e.preventDefault();
        if (btnZoomOut && !btnZoomOut.disabled) btnZoomOut.click();
      } else if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        setZoomScale(1.0);
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (e.shiftKey) {
          executeRedo();
        } else {
          executeUndo();
        }
        e.preventDefault();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        executeRedo();
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', onKeydown, true);

    // Save & Export action
    if (btnSaveExport) {
      btnSaveExport.addEventListener('click', executeSavePdf);
    }

    // Scanned dismiss
    if (scannedDismiss && scannedNotice) {
      scannedDismiss.addEventListener('click', () => {
        scannedNotice.style.display = 'none';
      });
    }

    // Current page rendering
    let cachedTextContent = null;
    let currentViewport = null;

    async function renderCurrentPage(options = {}) {
      if (!pdfDocJs) return;

      if (currentRenderTask) {
        try {
          currentRenderTask.cancel();
        } catch (_) {}
      }

      const isSilent = options && options.silent;
      if (!isSilent) {
        showLoading('Rendering page ' + (currentPageIndex + 1) + '...');
      }

      try {
        const page = await pdfDocJs.getPage(currentPageIndex + 1);
        const pageState = pageStates[currentPageIndex];
        const effectiveRotation = (page.rotate + pageState.rotation) % 360;

        // Calculate zoom scale
        if (zoomMode === 'fit-width') {
          const vp1 = page.getViewport({ scale: 1.0, rotation: effectiveRotation });
          const availW = Math.max(320, stageScroll.clientWidth - 48);
          currentScale = Math.min(3.0, Math.max(0.5, availW / vp1.width));
        } else if (zoomMode === 'fit-page') {
          const vp1 = page.getViewport({ scale: 1.0, rotation: effectiveRotation });
          const availW = Math.max(100, stageScroll.clientWidth - 48);
          const availH = Math.max(100, stageScroll.clientHeight - 48);
          currentScale = Math.min(3.0, Math.max(0.2, Math.min(availW / vp1.width, availH / vp1.height)));
        } else {
          currentScale = Math.min(3.0, Math.max(0.5, parseFloat(zoomMode) || 1.0));
        }

        updateZoomUI();

        const viewport = page.getViewport({ scale: currentScale, rotation: effectiveRotation });
        currentViewport = viewport;

        const dpr = window.devicePixelRatio || 1;
        const widthPx = Math.floor(viewport.width);
        const heightPx = Math.floor(viewport.height);

        renderCanvas.width = Math.floor(widthPx * dpr);
        renderCanvas.height = Math.floor(heightPx * dpr);
        renderCanvas.style.width = widthPx + 'px';
        renderCanvas.style.height = heightPx + 'px';

        pageWrapper.style.width = widthPx + 'px';
        pageWrapper.style.height = heightPx + 'px';

        drawCanvas.width = Math.floor(widthPx * dpr);
        drawCanvas.height = Math.floor(heightPx * dpr);
        drawCanvas.style.width = widthPx + 'px';
        drawCanvas.style.height = heightPx + 'px';

        // Position scrolling if anchor was specified
        if (options && options.anchor && stageScroll) {
          const a = options.anchor;
          if (a.mouseDocX >= 0 && a.mouseDocX <= a.pageRectWidth &&
              a.mouseDocY >= 0 && a.mouseDocY <= a.pageRectHeight) {
            const newDocX = (a.mouseDocX / a.prevScale) * currentScale;
            const newDocY = (a.mouseDocY / a.prevScale) * currentScale;
            stageScroll.scrollLeft = Math.max(0, pageWrapper.offsetLeft + newDocX - a.mouseClientX);
            stageScroll.scrollTop = Math.max(0, pageWrapper.offsetTop + newDocY - a.mouseClientY);
          } else {
            const oldContentX = stageScroll.scrollLeft + a.mouseClientX;
            const oldContentY = stageScroll.scrollTop + a.mouseClientY;
            const ratio = currentScale / a.prevScale;
            stageScroll.scrollLeft = Math.max(0, (oldContentX * ratio) - a.mouseClientX);
            stageScroll.scrollTop = Math.max(0, (oldContentY * ratio) - a.mouseClientY);
          }
        }

        const ctx = renderCanvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
          transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null
        };

        currentRenderTask = page.render(renderContext);
        await currentRenderTask.promise;
        currentRenderTask = null;

        // Restore drawing snapshot
        loadDrawingSnapshot(pageState.drawingDataUrl);

        // Extract text items
        cachedTextContent = await page.getTextContent({ normalizeWhitespace: true });

        // Resolve real font names and bold styles from page.commonObjs
        if (cachedTextContent && cachedTextContent.items && page.commonObjs) {
          const uniqueFontNames = new Set(cachedTextContent.items.map(it => it.fontName).filter(Boolean));
          for (const fn of uniqueFontNames) {
            try {
              await new Promise((resolve) => {
                page.commonObjs.get(fn, (fontData) => {
                  if (fontData && cachedTextContent.styles && cachedTextContent.styles[fn]) {
                    cachedTextContent.styles[fn].loadedName = fontData.name || '';
                    cachedTextContent.styles[fn].bold = !!(fontData.bold || (fontData.name && /bold/i.test(fontData.name)));
                  }
                  resolve();
                });
                setTimeout(resolve, 60);
              });
            } catch (e) {}
          }
        }

        const nonBlank = (cachedTextContent.items || []).filter(it => it.str && it.str.trim().length > 0);
        if (scannedNotice) {
          scannedNotice.style.display = nonBlank.length === 0 ? 'flex' : 'none';
        }

        renderTextLayer();
        renderElementsLayer();
        updateThumbnailActive();
        if (!isSilent) hideLoading();
      } catch (err) {
        if (err.name !== 'RenderingCancelledException') {
          console.error('Page render error:', err);
          showToast('Failed to render page: ' + err.message, 'error');
        }
        if (!isSilent) hideLoading();
      }
    }

    function loadDrawingSnapshot(dataUrl) {
      const ctx = drawCanvas.getContext('2d');
      ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      if (!dataUrl) return;
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, drawCanvas.width, drawCanvas.height);
      };
      img.src = dataUrl;
    }

    // Text grouping algorithm: Groups PDF.js items into logical lines & paragraph blocks
    function groupTextContentIntoBlocks(rawItems, styles) {
      if (!rawItems || rawItems.length === 0) return [];

      // Filter out empty items and normalize geometry
      const items = [];
      for (let i = 0; i < rawItems.length; i++) {
        const it = rawItems[i];
        if (!it.str || it.str.trim().length === 0) continue;
        const tx = it.transform[4];
        const ty = it.transform[5];
        const fontHeight = it.height || Math.sqrt(it.transform[2] * it.transform[2] + it.transform[3] * it.transform[3]) || 12;
        const width = it.width || (it.str.length * fontHeight * 0.5);

        const style = (styles && it.fontName) ? styles[it.fontName] : null;
        const resolvedFontName = (style && style.loadedName) ? style.loadedName : (it.fontName || '');
        const boldRegex = /(?:bold|heavy|black|semibold|demibold)/i;
        const italicRegex = /(?:italic|oblique)/i;
        const isBold = !!(style && (style.bold || (style.weight && parseInt(style.weight, 10) >= 700))) ||
                       boldRegex.test(resolvedFontName) ||
                       boldRegex.test(it.fontName || '');
        const isItalic = !!(style && style.italic) ||
                         italicRegex.test(resolvedFontName) ||
                         italicRegex.test(it.fontName || '');

        items.push({
          rawIndex: i,
          str: it.str,
          tx: tx,
          ty: ty,
          width: width,
          height: fontHeight,
          x1: tx,
          x2: tx + width,
          y1: ty - (fontHeight * 0.25),
          y2: ty + (fontHeight * 0.85),
          fontSize: fontHeight,
          fontName: resolvedFontName,
          isBold: isBold,
          isItalic: isItalic
        });
      }

      if (items.length === 0) return [];

      // Step 1: Cluster items into lines based on vertical baseline proximity (descending Y)
      items.sort((a, b) => {
        if (Math.abs(a.ty - b.ty) > Math.min(a.fontSize, b.fontSize) * 0.35) {
          return b.ty - a.ty; // top to bottom
        }
        return a.tx - b.tx; // left to right
      });

      const lineRows = [];
      let currentRow = null;

      for (const it of items) {
        if (!currentRow) {
          currentRow = { ty: it.ty, fontSize: it.fontSize, items: [it] };
          lineRows.push(currentRow);
        } else {
          const yDiff = Math.abs(currentRow.ty - it.ty);
          const fsTolerance = Math.max(currentRow.fontSize, it.fontSize) * 0.35;
          if (yDiff <= fsTolerance && Math.abs(currentRow.fontSize - it.fontSize) <= 4) {
            currentRow.items.push(it);
            currentRow.ty = (currentRow.ty * (currentRow.items.length - 1) + it.ty) / currentRow.items.length;
          } else {
            currentRow = { ty: it.ty, fontSize: it.fontSize, items: [it] };
            lineRows.push(currentRow);
          }
        }
      }

      // Step 2: Split line rows into horizontal segments (columns, table cells, or tab stops)
      const lineSegments = [];
      for (const row of lineRows) {
        row.items.sort((a, b) => a.tx - b.tx);

        let currentSeg = null;
        for (const it of row.items) {
          if (!currentSeg) {
            currentSeg = {
              ty: it.ty,
              x1: it.x1,
              x2: it.x2,
              y1: it.y1,
              y2: it.y2,
              fontSize: it.fontSize,
              height: it.height,
              text: it.str,
              rawItems: [it]
            };
            lineSegments.push(currentSeg);
          } else {
            const gap = it.x1 - currentSeg.x2;
            const maxWordGap = Math.max(9, currentSeg.fontSize * 0.75);

            if (gap > maxWordGap) {
              currentSeg = {
                ty: it.ty,
                x1: it.x1,
                x2: it.x2,
                y1: it.y1,
                y2: it.y2,
                fontSize: it.fontSize,
                height: it.height,
                text: it.str,
                rawItems: [it]
              };
              lineSegments.push(currentSeg);
            } else {
              const needsSpace = gap > currentSeg.fontSize * 0.15 &&
                !currentSeg.text.endsWith(' ') &&
                !it.str.startsWith(' ');
              currentSeg.text += (needsSpace ? ' ' : '') + it.str;
              currentSeg.x2 = Math.max(currentSeg.x2, it.x2);
              currentSeg.y1 = Math.min(currentSeg.y1, it.y1);
              currentSeg.y2 = Math.max(currentSeg.y2, it.y2);
              currentSeg.rawItems.push(it);
            }
          }
        }
      }

      // Step 3: Group line segments into Paragraph Blocks
      lineSegments.sort((a, b) => {
        if (Math.abs(a.ty - b.ty) > Math.min(a.fontSize, b.fontSize) * 0.5) {
          return b.ty - a.ty;
        }
        return a.x1 - b.x1;
      });

      const blocks = [];
      const assigned = new Set();

      for (let i = 0; i < lineSegments.length; i++) {
        if (assigned.has(i)) continue;
        const baseSeg = lineSegments[i];
        assigned.add(i);

        const block = {
          lines: [baseSeg],
          baselines: [baseSeg.ty],
          text: baseSeg.text,
          pdfX: baseSeg.x1,
          pdfX2: baseSeg.x2,
          pdfY: baseSeg.ty,
          topY: baseSeg.y2,
          bottomY: baseSeg.y1,
          fontSize: baseSeg.fontSize,
          isBold: false,
          isItalic: false,
          rawItems: [...baseSeg.rawItems]
        };

        let lastSeg = baseSeg;
        let search = true;

        while (search) {
          search = false;
          let bestCandidateIdx = -1;
          let minVerticalDist = Infinity;

          for (let j = 0; j < lineSegments.length; j++) {
            if (assigned.has(j)) continue;
            const nextSeg = lineSegments[j];

            const dy = lastSeg.ty - nextSeg.ty;
            if (dy <= 0) continue;

            const maxSpacing = lastSeg.fontSize * 1.65;
            if (dy > maxSpacing || dy < lastSeg.fontSize * 0.7) continue;

            const fsRatio = lastSeg.fontSize / nextSeg.fontSize;
            if (fsRatio > 1.15 || fsRatio < 0.85 || Math.abs(lastSeg.fontSize - nextSeg.fontSize) > 1.5) continue;

            const overlap = Math.min(lastSeg.x2, nextSeg.x2) - Math.max(lastSeg.x1, nextSeg.x1);
            const minW = Math.min(lastSeg.x2 - lastSeg.x1, nextSeg.x2 - nextSeg.x1);
            const leftIndentDiff = Math.abs(lastSeg.x1 - nextSeg.x1);

            const isAligned = (overlap > 0.3 * minW) || (leftIndentDiff <= Math.max(18, lastSeg.fontSize * 1.5));
            if (!isAligned) continue;

            if (dy < minVerticalDist) {
              minVerticalDist = dy;
              bestCandidateIdx = j;
            }
          }

          if (bestCandidateIdx !== -1) {
            const nextSeg = lineSegments[bestCandidateIdx];
            assigned.add(bestCandidateIdx);

            block.lines.push(nextSeg);
            block.baselines.push(nextSeg.ty);
            block.text += '\n' + nextSeg.text;
            block.pdfX = Math.min(block.pdfX, nextSeg.x1);
            block.pdfX2 = Math.max(block.pdfX2, nextSeg.x2);
            block.pdfY = nextSeg.ty;
            block.bottomY = Math.min(block.bottomY, nextSeg.y1);
            block.topY = Math.max(block.topY, nextSeg.y2);
            block.rawItems.push(...nextSeg.rawItems);

            lastSeg = nextSeg;
            search = true;
          }
        }

        // Determine block boldness and italics based on character count majority
        const totalChars = block.rawItems.reduce((acc, it) => acc + (it.str ? it.str.trim().length : 0), 0);
        const boldChars = block.rawItems.reduce((acc, it) => acc + ((it.isBold && it.str) ? it.str.trim().length : 0), 0);
        const italicChars = block.rawItems.reduce((acc, it) => acc + ((it.isItalic && it.str) ? it.str.trim().length : 0), 0);
        block.isBold = totalChars > 0 && (boldChars / totalChars >= 0.6);
        block.isItalic = totalChars > 0 && (italicChars / totalChars >= 0.6);

        block.pdfWidth = block.pdfX2 - block.pdfX;
        block.pdfHeight = block.topY - block.bottomY;
        block.rawIndices = block.rawItems.map(it => it.rawIndex);
        block.id = 'blk_' + block.rawIndices.join('_');
        block.lineSpacing = block.lines.length > 1
          ? (block.baselines[0] - block.baselines[block.baselines.length - 1]) / (block.lines.length - 1)
          : (block.fontSize * 1.25);

        blocks.push(block);
      }

      return blocks;
    }

    let activeBlockEditorWrap = null;
    let activeBlockCommitFn = null;

    function closeActiveBlockEditor(saveIfUnsaved = false) {
      if (saveIfUnsaved && typeof activeBlockCommitFn === 'function') {
        const fn = activeBlockCommitFn;
        activeBlockCommitFn = null;
        fn();
        return;
      }
      activeBlockCommitFn = null;
      if (activeBlockEditorWrap && pageWrapper.contains(activeBlockEditorWrap)) {
        pageWrapper.removeChild(activeBlockEditorWrap);
      }
      activeBlockEditorWrap = null;
    }

    // Text Layer rendering (Grouped In-Place Editing)
    function renderTextLayer() {
      if (!textLayer || !currentViewport || !cachedTextContent) return;
      closeActiveBlockEditor();
      textLayer.innerHTML = '';
      textLayer.setAttribute('data-tool', currentTool);

      const rawItems = cachedTextContent.items || [];
      const blocks = groupTextContentIntoBlocks(rawItems, cachedTextContent.styles);
      const pageState = pageStates[currentPageIndex];

      blocks.forEach((block) => {
        const p1 = currentViewport.convertToViewportPoint(block.pdfX, block.bottomY);
        const p2 = currentViewport.convertToViewportPoint(block.pdfX2, block.topY);

        const vx = Math.min(p1[0], p2[0]);
        const vy = Math.min(p1[1], p2[1]);
        let vw = Math.max(Math.abs(p2[0] - p1[0]), 16);
        let vh = Math.max(Math.abs(p2[1] - p1[1]), 16);

        const existingEdit = pageState.textEdits.find(e => {
          if (e.id === block.id || e.blockId === block.id) return true;
          if (e.rawIndices && block.rawIndices && e.rawIndices.length > 0 && block.rawIndices.length > 0) {
            return e.rawIndices[0] === block.rawIndices[0];
          }
          return false;
        });

        let previewFs = existingEdit ? Math.max(10, Math.floor(existingEdit.fontSize * currentScale)) : 12;
        if (existingEdit) {
          const editLines = (existingEdit.newStr || '').split('\n');
          const longestLine = editLines.reduce((a, b) => a.length > b.length ? a : b, '');
          const isBold = !!existingEdit.isBold;
          const charFactor = isBold ? 0.62 : 0.55;
          const origVw = vw;
          let approxLineW = longestLine.length * (existingEdit.fontSize * currentScale) * charFactor;

          // Check if obstacle constraint applies
          if (existingEdit.nextObstacleX) {
            const obstacleVPoint = currentViewport.convertToViewportPoint(existingEdit.nextObstacleX - 2, 0);
            const obstacleVx = obstacleVPoint[0];
            const maxAvailVw = Math.max(origVw, obstacleVx - vx);
            if (approxLineW > maxAvailVw) {
              const scaleRatio = maxAvailVw / approxLineW;
              previewFs = Math.max(9, Math.floor(existingEdit.fontSize * scaleRatio * currentScale));
              vw = maxAvailVw;
            } else {
              vw = Math.max(origVw, approxLineW + 4);
            }
          } else {
            vw = Math.max(origVw, approxLineW + 4);
          }

          const neededH = editLines.length * (previewFs * 1.3);
          vh = Math.max(vh, neededH);
        }

        const box = document.createElement('div');
        box.className = 'pdf-text-group-box' + (existingEdit ? ' edited' : '');
        box.style.left = vx + 'px';
        box.style.top = vy + 'px';
        box.style.width = vw + 'px';
        box.style.height = vh + 'px';
        if (existingEdit) {
          box.style.border = 'none';
          box.style.outline = 'none';
          box.style.boxShadow = 'none';
          box.style.overflow = 'visible';
          box.style.zIndex = '15';
        }
        box.setAttribute('data-block-id', block.id);

        if (existingEdit) {
          const preview = document.createElement('div');
          preview.className = 'pdf-group-preview-text';
          preview.style.fontSize = previewFs + 'px';
          preview.style.color = existingEdit.fontColor || '#000000';
          preview.style.background = existingEdit.bgColor || '#ffffff';
          preview.style.fontWeight = existingEdit.isBold ? 'bold' : 'normal';
          preview.style.fontStyle = existingEdit.isItalic ? 'italic' : 'normal';
          preview.textContent = existingEdit.newStr;
          box.appendChild(preview);
          box.title = `Edited: "${existingEdit.newStr}"`;
        } else {
          box.title = 'Click to edit: "' + block.text.replace(/\n/g, ' ') + '"';
        }

        // Click to edit
        box.addEventListener('click', (e) => {
          if (currentTool !== 'edit-text' && currentTool !== 'select') return;
          e.stopPropagation();
          openGroupTextEditor(box, block, existingEdit, vx, vy, vw, vh);
        });

        textLayer.appendChild(box);
      });
    }

    function openGroupTextEditor(box, block, existingEdit, vx, vy, vw, vh) {
      closeActiveBlockEditor();

      let currentEditorBold = existingEdit ? !!existingEdit.isBold : !!block.isBold;
      let currentEditorItalic = existingEdit ? !!existingEdit.isItalic : !!block.isItalic;
      let currentEditorFontSize = existingEdit ? existingEdit.fontSize : Math.max(8, Math.round(block.fontSize * 10) / 10);
      let currentEditorFontFamily = (existingEdit && existingEdit.fontFamily) ? existingEdit.fontFamily : 'Helvetica';

      const wrap = document.createElement('div');
      wrap.className = 'pdf-block-editor-wrap';

      const wrapW = Math.max(vw + 32, 270);
      const wrapH = Math.max(vh + 72, 100);
      const maxLeft = Math.max(6, (pageWrapper.clientWidth || 600) - wrapW - 8);
      const maxTop = Math.max(6, (pageWrapper.clientHeight || 800) - wrapH - 12);

      wrap.style.left = Math.max(6, Math.min(vx - 2, maxLeft)) + 'px';
      wrap.style.top = Math.max(6, Math.min(vy - 2, maxTop)) + 'px';
      wrap.style.width = wrapW + 'px';
      wrap.style.zIndex = '90';

      // Top Format Toolbar (Regular, Bold, Italic, Font Size)
      const formatToolbar = document.createElement('div');
      formatToolbar.className = 'pdf-block-editor-toolbar';

      const btnFmtRegular = document.createElement('button');
      btnFmtRegular.type = 'button';
      btnFmtRegular.className = 'pdf-block-fmt-btn' + (!currentEditorBold && !currentEditorItalic ? ' active' : '');
      btnFmtRegular.textContent = 'Normal';
      btnFmtRegular.title = 'Regular / Normal font weight';

      const btnFmtBold = document.createElement('button');
      btnFmtBold.type = 'button';
      btnFmtBold.className = 'pdf-block-fmt-btn' + (currentEditorBold ? ' active' : '');
      btnFmtBold.style.fontWeight = 'bold';
      btnFmtBold.textContent = 'B';
      btnFmtBold.title = 'Bold text';

      const btnFmtItalic = document.createElement('button');
      btnFmtItalic.type = 'button';
      btnFmtItalic.className = 'pdf-block-fmt-btn' + (currentEditorItalic ? ' active' : '');
      btnFmtItalic.style.fontStyle = 'italic';
      btnFmtItalic.textContent = 'I';
      btnFmtItalic.title = 'Italic text';

      const sizeSelect = document.createElement('select');
      sizeSelect.className = 'pdf-block-editor-select';
      const fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28];
      const roundedFs = Math.round(currentEditorFontSize);
      if (!fontSizes.includes(roundedFs)) {
        fontSizes.push(roundedFs);
        fontSizes.sort((a, b) => a - b);
      }
      fontSizes.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s + ' pt';
        if (roundedFs === s) opt.selected = true;
        sizeSelect.appendChild(opt);
      });

      formatToolbar.appendChild(btnFmtRegular);
      formatToolbar.appendChild(btnFmtBold);
      formatToolbar.appendChild(btnFmtItalic);
      formatToolbar.appendChild(sizeSelect);

      // Textarea
      const textarea = document.createElement('textarea');
      textarea.className = 'pdf-block-editor-textarea';
      textarea.value = existingEdit ? existingEdit.newStr : block.text;
      const initLines = textarea.value.split('\n').length;
      textarea.rows = Math.max(1, Math.min(initLines, 8));
      textarea.style.fontSize = Math.max(12, Math.floor(currentEditorFontSize * currentScale)) + 'px';
      textarea.style.fontWeight = currentEditorBold ? 'bold' : 'normal';
      textarea.style.fontStyle = currentEditorItalic ? 'italic' : 'normal';
      textarea.style.color = textSettings.fontColor || '#000000';

      const updateFormatUI = () => {
        btnFmtRegular.classList.toggle('active', !currentEditorBold && !currentEditorItalic);
        btnFmtBold.classList.toggle('active', currentEditorBold);
        btnFmtItalic.classList.toggle('active', currentEditorItalic);
        textarea.style.fontWeight = currentEditorBold ? 'bold' : 'normal';
        textarea.style.fontStyle = currentEditorItalic ? 'italic' : 'normal';
        textarea.style.fontSize = Math.max(12, Math.floor(currentEditorFontSize * currentScale)) + 'px';
      };

      btnFmtRegular.addEventListener('click', (e) => {
        e.stopPropagation();
        currentEditorBold = false;
        currentEditorItalic = false;
        updateFormatUI();
      });

      btnFmtBold.addEventListener('click', (e) => {
        e.stopPropagation();
        currentEditorBold = !currentEditorBold;
        updateFormatUI();
      });

      btnFmtItalic.addEventListener('click', (e) => {
        e.stopPropagation();
        currentEditorItalic = !currentEditorItalic;
        updateFormatUI();
      });

      sizeSelect.addEventListener('change', (e) => {
        e.stopPropagation();
        currentEditorFontSize = parseInt(e.target.value, 10);
        updateFormatUI();
      });

      const autoExpand = () => {
        textarea.style.height = 'auto';
        textarea.style.height = Math.max(34, Math.min(textarea.scrollHeight + 4, 180)) + 'px';
      };

      // Action Bar
      const bar = document.createElement('div');
      bar.className = 'pdf-block-editor-bar';

      const hint = document.createElement('span');
      hint.className = 'pdf-block-hint';

      const updateHint = () => {
        const curVal = textarea.value;
        const lines = curVal.split('\n').length;
        const chars = curVal.length;
        const origChars = block.text.length;
        if (chars > origChars * 1.4 && origChars > 5) {
          hint.className = 'pdf-block-hint pdf-block-hint-warn';
          hint.textContent = `${lines}L • ${chars}C (expanded text)`;
        } else {
          hint.className = 'pdf-block-hint';
          hint.textContent = `${lines}L • ${chars}C • Ctrl+Enter to save`;
        }
      };

      textarea.addEventListener('input', () => {
        autoExpand();
        updateHint();
      });

      const btnGroup = document.createElement('div');
      btnGroup.style.display = 'flex';
      btnGroup.style.gap = '6px';
      btnGroup.style.alignItems = 'center';

      const btnCancel = document.createElement('button');
      btnCancel.type = 'button';
      btnCancel.className = 'pdf-block-btn-cancel';
      btnCancel.textContent = 'Cancel';

      const btnSave = document.createElement('button');
      btnSave.type = 'button';
      btnSave.className = 'pdf-block-btn-save';
      btnSave.textContent = 'Done';

      btnGroup.appendChild(btnCancel);
      btnGroup.appendChild(btnSave);

      bar.appendChild(hint);
      bar.appendChild(btnGroup);

      wrap.appendChild(formatToolbar);
      wrap.appendChild(textarea);
      wrap.appendChild(bar);

      pageWrapper.appendChild(wrap);
      activeBlockEditorWrap = wrap;

      autoExpand();
      updateHint();
      textarea.focus();
      textarea.select();

      let committed = false;
      const commit = () => {
        if (committed) return;
        committed = true;
        const newStr = textarea.value;
        closeActiveBlockEditor();

        const origValue = existingEdit ? existingEdit.newStr : block.text;
        const origBold = existingEdit ? existingEdit.isBold : block.isBold;
        const origItalic = existingEdit ? existingEdit.isItalic : block.isItalic;
        const origFs = existingEdit ? existingEdit.fontSize : block.fontSize;
        const fmtChanged = (currentEditorBold !== origBold) || (currentEditorItalic !== origItalic) || (currentEditorFontSize !== origFs);

        if (newStr !== origValue || fmtChanged) {
          // Find closest adjacent text obstacle to the right on the same baseline band
          let nextObstacleX = 999999;
          const currentRawItems = (cachedTextContent && cachedTextContent.items) ? cachedTextContent.items : [];
          for (let i = 0; i < currentRawItems.length; i++) {
            if (block.rawIndices.includes(i)) continue;
            const item = currentRawItems[i];
            if (!item.str || item.str.trim().length === 0) continue;
            const itX = item.transform ? item.transform[4] : (item.tx !== undefined ? item.tx : 0);
            const itY = item.transform ? item.transform[5] : (item.ty !== undefined ? item.ty : 0);
            if (itX >= block.pdfX2 - 1) {
              const matchesBaseline = block.baselines.some(baseY => Math.abs(itY - baseY) <= block.fontSize * 0.65);
              if (matchesBaseline && itX < nextObstacleX) {
                nextObstacleX = itX;
              }
            }
          }

          const newEdit = {
            id: block.id,
            blockId: block.id,
            rawIndices: block.rawIndices,
            originalStr: block.text,
            newStr: newStr,
            tx: block.pdfX,
            firstLineTx: (block.lines && block.lines.length > 0) ? block.lines[0].x1 : block.pdfX,
            ty: block.pdfY,
            baselines: [...block.baselines],
            lines: block.lines ? block.lines.map(l => ({ x1: l.x1, x2: l.x2, y: l.y, width: l.width, text: l.text })) : [],
            lineSpacing: block.lineSpacing,
            pdfWidth: block.pdfWidth,
            pdfHeight: block.pdfHeight,
            fontSize: currentEditorFontSize,
            isBold: currentEditorBold,
            isItalic: currentEditorItalic,
            nextObstacleX: nextObstacleX < 99999 ? nextObstacleX : null,
            fontColor: textSettings.fontColor || '#000000',
            bgColor: '#ffffff',
            fontFamily: currentEditorFontFamily,
            rawItems: block.rawItems.map(it => ({
              tx: it.tx,
              ty: it.ty,
              width: it.width,
              height: it.height,
              fontSize: it.fontSize,
              fontName: it.fontName || '',
              isBold: it.isBold,
              isItalic: it.isItalic
            }))
          };

          const oldEdit = existingEdit ? Object.assign({}, existingEdit) : null;
          const pageState = pageStates[currentPageIndex];
          const existIdx = pageState.textEdits.findIndex(e => e.id === block.id || (e.blockId && e.blockId === block.id));
          if (existIdx !== -1) {
            pageState.textEdits[existIdx] = newEdit;
          } else {
            pageState.textEdits.push(newEdit);
          }

          pushUndo({
            type: 'text-edit',
            pageIndex: currentPageIndex,
            oldEdit: oldEdit,
            newEdit: newEdit
          });

          markDirty(true);
          renderTextLayer();
          showToast('Text block updated in place.', 'success');
        }
      };

      activeBlockCommitFn = commit;

      btnSave.addEventListener('click', (e) => {
        e.stopPropagation();
        commit();
      });

      btnCancel.addEventListener('click', (e) => {
        e.stopPropagation();
        committed = true;
        closeActiveBlockEditor(false);
      });

      textarea.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          commit();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          commit();
        }
      });

      wrap.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Elements Layer (Added Texts, Shapes, Redactions, Images)
    function renderElementsLayer() {
      if (!elementsContainer || !currentViewport) return;
      elementsContainer.innerHTML = '';

      const pageState = pageStates[currentPageIndex];

      // 1. Redactions
      pageState.redactions.forEach((red, idx) => {
        const p1 = currentViewport.convertToViewportPoint(red.pdfX, red.pdfY);
        const p2 = currentViewport.convertToViewportPoint(red.pdfX + red.width, red.pdfY + red.height);
        const vx = Math.min(p1[0], p2[0]);
        const vy = Math.min(p1[1], p2[1]);
        const vw = Math.abs(p2[0] - p1[0]);
        const vh = Math.abs(p2[1] - p1[1]);

        const el = document.createElement('div');
        el.className = 'pdf-element-box element-type-redaction' + (selectedElementId === red.id ? ' selected' : '');
        el.setAttribute('data-element-id', red.id);
        el.style.left = vx + 'px';
        el.style.top = vy + 'px';
        el.style.width = vw + 'px';
        el.style.height = vh + 'px';
        el.style.background = red.color;
        el.style.border = red.color === '#ffffff' ? '1px dashed #cbd5e1' : 'none';

        addDeleteButton(el, () => {
          pageState.redactions.splice(idx, 1);
          pushUndo({ type: 'delete-element', pageIndex: currentPageIndex, category: 'redactions', item: red });
          clearElementSelection();
          renderElementsLayer();
        });

        attachDragAndResize(el, red, 'redactions');
        elementsContainer.appendChild(el);
      });

      // 2. Shapes
      pageState.shapes.forEach((sh, idx) => {
        const p1 = currentViewport.convertToViewportPoint(sh.pdfX, sh.pdfY);
        const p2 = currentViewport.convertToViewportPoint(sh.pdfX + sh.width, sh.pdfY + sh.height);
        const vx = Math.min(p1[0], p2[0]);
        const vy = Math.min(p1[1], p2[1]);
        const vw = Math.abs(p2[0] - p1[0]);
        const vh = Math.abs(p2[1] - p1[1]);

        const el = document.createElement('div');
        el.className = 'pdf-element-box element-type-shape' + (selectedElementId === sh.id ? ' selected' : '');
        el.setAttribute('data-element-id', sh.id);
        el.style.left = vx + 'px';
        el.style.top = vy + 'px';
        el.style.width = vw + 'px';
        el.style.height = vh + 'px';
        el.style.borderColor = sh.strokeColor;
        el.style.borderWidth = (sh.strokeWidth * currentScale) + 'px';
        el.style.borderStyle = 'solid';
        el.style.background = sh.fillColor;
        if (sh.type === 'circle') el.style.borderRadius = '50%';

        addDeleteButton(el, () => {
          pageState.shapes.splice(idx, 1);
          pushUndo({ type: 'delete-element', pageIndex: currentPageIndex, category: 'shapes', item: sh });
          clearElementSelection();
          renderElementsLayer();
        });

        attachDragAndResize(el, sh, 'shapes');
        elementsContainer.appendChild(el);
      });

      // 3. Images
      pageState.images.forEach((imgItem, idx) => {
        const p1 = currentViewport.convertToViewportPoint(imgItem.pdfX, imgItem.pdfY);
        const p2 = currentViewport.convertToViewportPoint(imgItem.pdfX + imgItem.width, imgItem.pdfY + imgItem.height);
        const vx = Math.min(p1[0], p2[0]);
        const vy = Math.min(p1[1], p2[1]);
        const vw = Math.abs(p2[0] - p1[0]);
        const vh = Math.abs(p2[1] - p1[1]);

        const el = document.createElement('div');
        el.className = 'pdf-element-box element-type-image' + (selectedElementId === imgItem.id ? ' selected' : '');
        el.setAttribute('data-element-id', imgItem.id);
        el.style.left = vx + 'px';
        el.style.top = vy + 'px';
        el.style.width = vw + 'px';
        el.style.height = vh + 'px';

        const img = document.createElement('img');
        img.className = 'pdf-element-img-content';
        img.src = imgItem.dataUrl;
        el.appendChild(img);

        addDeleteButton(el, () => {
          pageState.images.splice(idx, 1);
          pushUndo({ type: 'delete-element', pageIndex: currentPageIndex, category: 'images', item: imgItem });
          clearElementSelection();
          renderElementsLayer();
        });

        attachDragAndResize(el, imgItem, 'images');
        elementsContainer.appendChild(el);
      });

      // 4. Added Texts
      pageState.addedTexts.forEach((at, idx) => {
        const p1 = currentViewport.convertToViewportPoint(at.pdfX, at.pdfY);
        const vx = p1[0];
        const vy = p1[1];
        const vw = (at.width * currentScale);
        const vh = (at.height * currentScale);

        const el = document.createElement('div');
        el.className = 'pdf-element-box element-type-text' + (selectedElementId === at.id ? ' selected' : '');
        el.setAttribute('data-element-id', at.id);
        el.style.left = vx + 'px';
        el.style.top = vy + 'px';
        el.style.width = Math.max(vw, 80) + 'px';
        el.style.minHeight = Math.max(vh, 24) + 'px';
        el.style.color = at.fontColor;
        el.style.fontSize = Math.floor(at.fontSize * currentScale) + 'px';
        el.style.fontFamily = at.fontFamily || 'Helvetica';
        el.style.fontWeight = at.isBold ? 'bold' : 'normal';

        const textDiv = document.createElement('div');
        textDiv.className = 'pdf-element-text-content';
        textDiv.contentEditable = 'true';
        textDiv.textContent = at.text;

        const commitText = () => {
          if (at.text !== textDiv.textContent) {
            at.text = textDiv.textContent;
            markDirty(true);
          }
        };

        textDiv.addEventListener('input', commitText);
        textDiv.addEventListener('blur', commitText);
        textDiv.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            commitText();
            textDiv.blur();
            clearElementSelection();
            setTool('select', true);
          } else if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            commitText();
            textDiv.blur();
            clearElementSelection();
            setTool('select', true);
          }
        });

        el.appendChild(textDiv);

        // Intuitive Done/Confirm button on added text box
        const confirmBtn = document.createElement('div');
        confirmBtn.className = 'pdf-element-confirm-btn';
        confirmBtn.innerHTML = '&#10003; Done';
        confirmBtn.title = 'Confirm text placement (Enter)';
        confirmBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
        confirmBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          commitText();
          textDiv.blur();
          clearElementSelection();
          setTool('select', true);
        });
        el.appendChild(confirmBtn);

        addDeleteButton(el, () => {
          pageState.addedTexts.splice(idx, 1);
          pushUndo({ type: 'delete-element', pageIndex: currentPageIndex, category: 'addedTexts', item: at });
          clearElementSelection();
          renderElementsLayer();
        });

        attachDragAndResize(el, at, 'addedTexts');
        elementsContainer.appendChild(el);
      });
    }

    function addDeleteButton(el, onDelete) {
      const del = document.createElement('div');
      del.className = 'pdf-element-del-btn';
      del.innerHTML = '&times;';
      del.title = 'Delete this object';
      del.addEventListener('pointerdown', (e) => e.stopPropagation());
      del.addEventListener('click', (e) => {
        e.stopPropagation();
        onDelete();
      });
      el.appendChild(del);
    }

    function attachDragAndResize(el, item, category) {
      // Handles
      const seHandle = document.createElement('div');
      seHandle.className = 'pdf-element-handle pdf-handle-se';
      el.appendChild(seHandle);

      el.addEventListener('pointerdown', (e) => {
        if (e.target.classList.contains('pdf-element-del-btn')) return;
        if (e.target.classList.contains('pdf-element-confirm-btn')) return;
        if (e.target.classList.contains('pdf-element-text-content') && document.activeElement === e.target) return;
        e.stopPropagation();

        setSelectedElement(item.id);
        if (currentTool !== 'select') {
          setTool('select', true);
        }

        activeDragElement = el;
        activeDragMode = e.target.classList.contains('pdf-element-handle') ? 'resize' : 'move';
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        initialElemState = {
          elemId: item.id,
          category: category,
          isImage: category === 'images',
          aspect: (item.height && item.width) ? (item.height / item.width) : null,
          pdfX: item.pdfX,
          pdfY: item.pdfY,
          width: item.width,
          height: item.height,
          left: parseFloat(el.style.left) || 0,
          top: parseFloat(el.style.top) || 0,
          widthPx: parseFloat(el.style.width) || 0,
          heightPx: parseFloat(el.style.height) || 0
        };
      });
    }

    // Global Pointer Dragging for Elements & Resizing
    window.addEventListener('pointermove', (e) => {
      if (!activeDragElement || !initialElemState) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;

      if (activeDragMode === 'move') {
        const nextLeft = initialElemState.left + dx;
        const nextTop = initialElemState.top + dy;
        activeDragElement.style.left = nextLeft + 'px';
        activeDragElement.style.top = nextTop + 'px';
      } else if (activeDragMode === 'resize') {
        const nextW = Math.max(20, initialElemState.widthPx + dx);
        let nextH = Math.max(16, initialElemState.heightPx + dy);
        if (initialElemState.isImage && initialElemState.aspect) {
          nextH = Math.max(16, nextW * initialElemState.aspect);
        }
        activeDragElement.style.width = nextW + 'px';
        activeDragElement.style.height = nextH + 'px';
      }
    });

    window.addEventListener('pointerup', () => {
      if (activeDragElement && initialElemState && currentViewport) {
        const finalLeft = parseFloat(activeDragElement.style.left) || 0;
        const finalTop = parseFloat(activeDragElement.style.top) || 0;
        const finalW = parseFloat(activeDragElement.style.width) || 0;
        const finalH = parseFloat(activeDragElement.style.height) || 0;

        // Map back to PDF point space
        const p1 = currentViewport.convertToPdfPoint(finalLeft, finalTop);
        const p2 = currentViewport.convertToPdfPoint(finalLeft + finalW, finalTop + finalH);

        // Find item in pageState by unique ID
        const pageState = pageStates[currentPageIndex];
        const catList = (pageState && initialElemState.category) ? pageState[initialElemState.category] : [];
        const found = catList ? catList.find(it => it.id === initialElemState.elemId) : null;

        if (found) {
          found.pdfX = Math.min(p1[0], p2[0]);
          found.pdfY = Math.min(p1[1], p2[1]);
          found.width = Math.abs(p2[0] - p1[0]);
          found.height = Math.abs(p2[1] - p1[1]);
          markDirty(true);
        }
      }
      activeDragElement = null;
      activeDragMode = null;
      initialElemState = null;
    });

    // Pointer events on Draw Canvas (Freehand Draw, Highlight, Shapes, Redactions, Add-Text)
    drawCanvas.addEventListener('pointerdown', (e) => {
      const rect = pageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (currentTool === 'draw' || currentTool === 'highlight') {
        isDrawing = true;
        lastDrawX = x;
        lastDrawY = y;
        preDrawSnapshot = pageStates[currentPageIndex].drawingDataUrl;
        currentStrokePoints = [{ x, y }];

        const ctx = drawCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        if (currentTool === 'draw') {
          ctx.beginPath();
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = drawSettings.color;
          ctx.lineWidth = drawSettings.width * currentScale * dpr;
          ctx.globalAlpha = 1.0;
          ctx.globalCompositeOperation = 'source-over';
          ctx.moveTo(x * dpr, y * dpr);
        } else {
          // Highlight stroke is rendered cleanly without compounding
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = highlightSettings.color;
          ctx.lineWidth = highlightSettings.width * currentScale * dpr;
          ctx.globalAlpha = 0.40;
          ctx.globalCompositeOperation = 'multiply';
        }
      } else if (currentTool === 'shapes') {
        isDrawingShape = true;
        shapeStartX = x;
        shapeStartY = y;
      } else if (currentTool === 'redact') {
        isRedacting = true;
        redactStartX = x;
        redactStartY = y;
      }
    });

    drawCanvas.addEventListener('pointermove', (e) => {
      const rect = pageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (isDrawing) {
        const ctx = drawCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        if (currentTool === 'draw') {
          ctx.lineTo(x * dpr, y * dpr);
          ctx.stroke();
          lastDrawX = x;
          lastDrawY = y;
        } else if (currentTool === 'highlight') {
          currentStrokePoints.push({ x, y });
          loadDrawingSnapshot(preDrawSnapshot);
          const ctx = drawCanvas.getContext('2d');
          const dpr = window.devicePixelRatio || 1;
          ctx.save();
          ctx.beginPath();
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = highlightSettings.color;
          ctx.lineWidth = highlightSettings.width * currentScale * dpr;
          ctx.globalAlpha = 0.40;
          ctx.globalCompositeOperation = 'multiply';
          ctx.moveTo(currentStrokePoints[0].x * dpr, currentStrokePoints[0].y * dpr);
          for (let i = 1; i < currentStrokePoints.length; i++) {
            ctx.lineTo(currentStrokePoints[i].x * dpr, currentStrokePoints[i].y * dpr);
          }
          ctx.stroke();
          ctx.restore();
        }
      } else if (isDrawingShape) {
        // Redraw current drawing snapshot + shape preview
        loadDrawingSnapshot(pageStates[currentPageIndex].drawingDataUrl);
        const ctx = drawCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        ctx.strokeStyle = shapeSettings.strokeColor;
        ctx.lineWidth = shapeSettings.strokeWidth * currentScale * dpr;
        ctx.globalAlpha = 1.0;

        const sx = shapeStartX * dpr;
        const sy = shapeStartY * dpr;
        const sw = (x - shapeStartX) * dpr;
        const sh = (y - shapeStartY) * dpr;

        if (shapeSettings.type === 'rect') {
          ctx.strokeRect(sx, sy, sw, sh);
        } else if (shapeSettings.type === 'circle') {
          ctx.beginPath();
          ctx.ellipse(sx + sw / 2, sy + sh / 2, Math.abs(sw / 2), Math.abs(sh / 2), 0, 0, Math.PI * 2);
          ctx.stroke();
        } else if (shapeSettings.type === 'line') {
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + sw, sy + sh);
          ctx.stroke();
        }
      } else if (isRedacting) {
        loadDrawingSnapshot(pageStates[currentPageIndex].drawingDataUrl);
        const ctx = drawCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        ctx.fillStyle = redactSettings.color;
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 1.5 * dpr;
        ctx.globalAlpha = 0.8;

        const rx = redactStartX * dpr;
        const ry = redactStartY * dpr;
        const rw = (x - redactStartX) * dpr;
        const rh = (y - redactStartY) * dpr;
        ctx.fillRect(rx, ry, rw, rh);
        ctx.strokeRect(rx, ry, rw, rh);
      }
    });

    drawCanvas.addEventListener('pointerup', (e) => {
      const rect = pageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (isDrawing) {
        isDrawing = false;
        currentStrokePoints = [];
        const newDataUrl = drawCanvas.toDataURL('image/png');
        pageStates[currentPageIndex].drawingDataUrl = newDataUrl;

        pushUndo({
          type: 'draw-stroke',
          pageIndex: currentPageIndex,
          prevDataUrl: preDrawSnapshot,
          newDataUrl: newDataUrl
        });
      } else if (isDrawingShape) {
        isDrawingShape = false;
        loadDrawingSnapshot(pageStates[currentPageIndex].drawingDataUrl);

        if (Math.abs(x - shapeStartX) > 5 && Math.abs(y - shapeStartY) > 5) {
          const p1 = currentViewport.convertToPdfPoint(shapeStartX, shapeStartY);
          const p2 = currentViewport.convertToPdfPoint(x, y);

          const newShape = {
            id: 'shape_' + Date.now(),
            type: shapeSettings.type,
            pdfX: Math.min(p1[0], p2[0]),
            pdfY: Math.min(p1[1], p2[1]),
            width: Math.abs(p2[0] - p1[0]),
            height: Math.abs(p2[1] - p1[1]),
            strokeColor: shapeSettings.strokeColor,
            fillColor: shapeSettings.fillColor,
            strokeWidth: shapeSettings.strokeWidth
          };

          pageStates[currentPageIndex].shapes.push(newShape);
          pushUndo({
            type: 'add-element',
            pageIndex: currentPageIndex,
            category: 'shapes',
            item: newShape
          });

          renderElementsLayer();
        }
      } else if (isRedacting) {
        isRedacting = false;
        loadDrawingSnapshot(pageStates[currentPageIndex].drawingDataUrl);

        if (Math.abs(x - redactStartX) > 5 && Math.abs(y - redactStartY) > 5) {
          const p1 = currentViewport.convertToPdfPoint(redactStartX, redactStartY);
          const p2 = currentViewport.convertToPdfPoint(x, y);

          const newRedact = {
            id: 'redact_' + Date.now(),
            pdfX: Math.min(p1[0], p2[0]),
            pdfY: Math.min(p1[1], p2[1]),
            width: Math.abs(p2[0] - p1[0]),
            height: Math.abs(p2[1] - p1[1]),
            color: redactSettings.color
          };

          pageStates[currentPageIndex].redactions.push(newRedact);
          pushUndo({
            type: 'add-element',
            pageIndex: currentPageIndex,
            category: 'redactions',
            item: newRedact
          });

          renderElementsLayer();
          showToast('Redaction applied.', 'success');

          // Deactivate redaction tool back to select mode and keep newly created redaction selected
          setTool('select', true);
          setSelectedElement(newRedact.id);
        } else {
          // If clicked without dragging, also exit redact mode back to select mode
          setTool('select', true);
        }
      }
    });

    // Click on page wrapper for "Add Text" and empty space deselection
    pageWrapper.addEventListener('click', (e) => {
      if (activeBlockEditorWrap && !e.target.closest('.pdf-block-editor-wrap')) {
        closeActiveBlockEditor(true);
      }

      // If clicking empty page space, deselect any currently selected element
      if (!e.target.closest('.pdf-element-box')) {
        clearElementSelection();
      }

      if (currentTool !== 'add-text') return;
      if (e.target.closest('.pdf-element-box')) return;

      const rect = pageWrapper.getBoundingClientRect();
      const vx = e.clientX - rect.left;
      const vy = e.clientY - rect.top;

      const p1 = currentViewport.convertToPdfPoint(vx, vy);

      const newText = {
        id: 'txt_' + Date.now(),
        text: 'Type text here...',
        pdfX: p1[0],
        pdfY: p1[1] - 16,
        width: 140,
        height: 28,
        fontSize: textSettings.fontSize,
        fontColor: textSettings.fontColor,
        fontFamily: textSettings.fontFamily,
        isBold: textSettings.isBold
      };

      pageStates[currentPageIndex].addedTexts.push(newText);
      pushUndo({
        type: 'add-element',
        pageIndex: currentPageIndex,
        category: 'addedTexts',
        item: newText
      });

      renderElementsLayer();

      // Deactivate add-text back to select mode so clicking elsewhere does not create extra text boxes
      setTool('select', true);
      setSelectedElement(newText.id);

      // Focus newly added text and select its content so the user can type immediately
      setTimeout(() => {
        const el = elementsContainer ? elementsContainer.querySelector(`[data-element-id="${newText.id}"]`) : null;
        if (el) {
          const tc = el.querySelector('.pdf-element-text-content');
          if (tc) {
            tc.focus();
            try {
              const range = document.createRange();
              range.selectNodeContents(tc);
              const sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            } catch (_) {}
          }
        }
      }, 40);
    });

    // Thumbnails Generation & Updates
    async function renderThumbnails() {
      if (!thumbnailList || !pdfDocJs) return;
      thumbnailList.innerHTML = '';

      for (let i = 0; i < totalPages; i++) {
        const card = document.createElement('div');
        card.className = 'pdf-thumb-card' + (i === currentPageIndex ? ' active' : '') + (pageStates[i].deleted ? ' deleted' : '');
        card.setAttribute('data-page-index', i);

        const canvas = document.createElement('canvas');
        canvas.className = 'pdf-thumb-canvas';
        canvas.id = 'pdf-thumb-canvas-' + i;

        const footer = document.createElement('div');
        footer.className = 'pdf-thumb-footer';
        footer.innerHTML = `
          <span class="pdf-thumb-num">p. ${i + 1}</span>
          <span class="pdf-thumb-status">${pageStates[i].deleted ? 'Deleted' : ''}</span>
        `;

        card.appendChild(canvas);
        card.appendChild(footer);

        card.addEventListener('click', async () => {
          if (currentPageIndex === i) return;
          currentPageIndex = i;
          await renderCurrentPage();
        });

        thumbnailList.appendChild(card);
        renderSingleThumbnail(i, canvas);
      }
    }

    async function renderSingleThumbnail(pageIndex, canvasEl) {
      try {
        const page = await pdfDocJs.getPage(pageIndex + 1);
        const state = pageStates[pageIndex];
        const effectiveRotation = (page.rotate + state.rotation) % 360;
        const unscaled = page.getViewport({ scale: 1.0, rotation: effectiveRotation });
        const scale = 110 / unscaled.width;
        const vp = page.getViewport({ scale: scale, rotation: effectiveRotation });

        canvasEl.width = Math.floor(vp.width);
        canvasEl.height = Math.floor(vp.height);

        const ctx = canvasEl.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
      } catch (err) {
        console.warn('Thumb render error for page ' + pageIndex, err);
      }
    }

    function updateThumbnailCard(pageIndex) {
      const card = thumbnailList.querySelector(`.pdf-thumb-card[data-page-index="${pageIndex}"]`);
      if (!card) return;
      const state = pageStates[pageIndex];
      card.classList.toggle('deleted', state.deleted);
      const statusSpan = card.querySelector('.pdf-thumb-status');
      if (statusSpan) statusSpan.textContent = state.deleted ? 'Deleted' : '';
      const canvasEl = card.querySelector('canvas');
      if (canvasEl) renderSingleThumbnail(pageIndex, canvasEl);
    }

    function updateThumbnailActive() {
      if (!thumbnailList) return;
      const cards = thumbnailList.querySelectorAll('.pdf-thumb-card');
      cards.forEach((card, idx) => {
        card.classList.toggle('active', idx === currentPageIndex);
      });
    }

    // High-Fidelity Vector-Preserving PDF Export Engine
    async function executeSavePdf() {
      if (!window.PDFLib) {
        showToast('PDF-Lib engine is not available.', 'error');
        return;
      }
      showLoading('Generating and compiling modified PDF document...');
      try {
        const srcDoc = await window.PDFLib.PDFDocument.load(originalPdfBytes.slice(0), { ignoreEncryption: true });

        // Filter active pages
        const activeIndices = [];
        for (let i = 0; i < totalPages; i++) {
          if (!pageStates[i].deleted) activeIndices.push(i);
        }

        if (activeIndices.length === 0) {
          hideLoading();
          showToast('Cannot export document: all pages are marked as deleted.', 'error');
          return;
        }

        const outDoc = await window.PDFLib.PDFDocument.create();
        const copiedPages = await outDoc.copyPages(srcDoc, activeIndices);

        // Standard embedded fonts (supporting Regular, Bold, Italic, and Bold-Italic across Helvetica, Times, Courier)
        const helveticaFont = await outDoc.embedFont(window.PDFLib.StandardFonts.Helvetica);
        const helveticaBold = await outDoc.embedFont(window.PDFLib.StandardFonts.HelveticaBold);
        const helveticaOblique = await outDoc.embedFont(window.PDFLib.StandardFonts.HelveticaOblique);
        const helveticaBoldOblique = await outDoc.embedFont(window.PDFLib.StandardFonts.HelveticaBoldOblique);

        const timesFont = await outDoc.embedFont(window.PDFLib.StandardFonts.TimesRoman);
        const timesBold = await outDoc.embedFont(window.PDFLib.StandardFonts.TimesRomanBold);
        const timesItalic = await outDoc.embedFont(window.PDFLib.StandardFonts.TimesRomanItalic);
        const timesBoldItalic = await outDoc.embedFont(window.PDFLib.StandardFonts.TimesRomanBoldItalic);

        const courierFont = await outDoc.embedFont(window.PDFLib.StandardFonts.Courier);
        const courierBold = await outDoc.embedFont(window.PDFLib.StandardFonts.CourierBold);
        const courierOblique = await outDoc.embedFont(window.PDFLib.StandardFonts.CourierOblique);
        const courierBoldOblique = await outDoc.embedFont(window.PDFLib.StandardFonts.CourierBoldOblique);

        const resolveExportFont = (family, isBold, isItalic) => {
          const fam = (family || 'Helvetica').toLowerCase();
          if (fam.includes('times')) {
            if (isBold && isItalic) return timesBoldItalic;
            if (isBold) return timesBold;
            if (isItalic) return timesItalic;
            return timesFont;
          } else if (fam.includes('courier')) {
            if (isBold && isItalic) return courierBoldOblique;
            if (isBold) return courierBold;
            if (isItalic) return courierOblique;
            return courierFont;
          } else {
            if (isBold && isItalic) return helveticaBoldOblique;
            if (isBold) return helveticaBold;
            if (isItalic) return helveticaOblique;
            return helveticaFont;
          }
        };

        for (let k = 0; k < activeIndices.length; k++) {
          const originalIdx = activeIndices[k];
          const state = pageStates[originalIdx];
          const outPage = copiedPages[k];
          outDoc.addPage(outPage);

          // Apply rotation
          if (state.rotation !== 0) {
            const curRot = outPage.getRotation().angle;
            outPage.setRotation(window.PDFLib.degrees((curRot + state.rotation) % 360));
          }

          const { width: pWidth, height: pHeight } = outPage.getSize();

          // 1. Redactions
          for (const red of state.redactions) {
            const col = parseColor(red.color);
            outPage.drawRectangle({
              x: red.pdfX,
              y: red.pdfY,
              width: red.width,
              height: red.height,
              color: window.PDFLib.rgb(col.r, col.g, col.b)
            });
          }

          // 2. In-Place Text Edits (with surgical item redaction & exact baseline preservation)
          for (const te of state.textEdits) {
            const bgCol = parseColor(te.bgColor || '#ffffff');
            const txtCol = parseColor(te.fontColor || '#000000');
            const fontObj = resolveExportFont(te.fontFamily, te.isBold, te.isItalic);

            // Step 2a: Surgical redaction of original items - covers only the exact original text items
            if (te.rawItems && te.rawItems.length > 0) {
              for (const it of te.rawItems) {
                outPage.drawRectangle({
                  x: it.tx - 0.75,
                  y: it.ty - (it.fontSize * 0.25) - 0.75,
                  width: it.width + 1.5,
                  height: (it.height * 1.05) + 1.5,
                  color: window.PDFLib.rgb(bgCol.r, bgCol.g, bgCol.b)
                });
              }
            } else {
              outPage.drawRectangle({
                x: te.tx - 1,
                y: te.ty - (te.fontSize * 0.25) - 1,
                width: te.pdfWidth + 2,
                height: te.pdfHeight * 1.1 + 2,
                color: window.PDFLib.rgb(bgCol.r, bgCol.g, bgCol.b)
              });
            }

            // Step 2b: Exact baseline drawing with accurate text measurement and surgical redaction expansion
            if (te.newStr !== undefined && te.newStr !== null) {
              const lines = te.newStr.split('\n');
              const baselines = (te.baselines && te.baselines.length > 0) ? te.baselines : [te.ty];
              const defaultLineSpacing = te.lineSpacing || (te.fontSize * 1.25);
              const lastOrigBaseline = baselines[baselines.length - 1];

              for (let l = 0; l < lines.length; l++) {
                const lineText = lines[l];
                if (lineText.length === 0) continue;

                let drawY;
                if (l < baselines.length) {
                  // EXACT ORIGINAL DOCUMENT BASELINE (0.0pt vertical drift!)
                  drawY = baselines[l];
                } else {
                  // Additional lines flow downward using measured line spacing
                  drawY = lastOrigBaseline - ((l - (baselines.length - 1)) * defaultLineSpacing);
                }

                let drawX = (l === 0 && te.firstLineTx !== undefined) ? te.firstLineTx : te.tx;

                // 1. Measure replacement text using actual embedded export font and font size
                const measuredLineWidth = fontObj.widthOfTextAtSize(lineText, te.fontSize);

                // 2. Original line width (from lines or rawItems)
                let origLineW = te.pdfWidth;
                if (te.lines && te.lines[l] && te.lines[l].width) {
                  origLineW = te.lines[l].width;
                } else if (te.rawItems && te.rawItems.length > 0) {
                  origLineW = te.rawItems.reduce((acc, it) => acc + (it.width || 0), 0);
                }

                // 3. Available width before adjacent obstacle
                const maxAllowedX = te.nextObstacleX ? (te.nextObstacleX - 2) : (drawX + Math.max(origLineW * 2.5, 250));
                const availW = Math.max(origLineW, maxAllowedX - drawX);

                // 4. Calculate effective font size and width to prevent collision
                let effectiveFontSize = te.fontSize;
                let effectiveLineWidth = measuredLineWidth;
                if (measuredLineWidth > availW) {
                  effectiveFontSize = Math.max(6, te.fontSize * (availW / measuredLineWidth));
                  effectiveLineWidth = fontObj.widthOfTextAtSize(lineText, effectiveFontSize);
                }

                // 5. Surgical redaction expansion: cover any extra width beyond original items
                if (effectiveLineWidth > origLineW) {
                  const redactLineWidth = Math.min(effectiveLineWidth + 1.5, availW);
                  outPage.drawRectangle({
                    x: drawX - 0.75,
                    y: drawY - (effectiveFontSize * 0.25) - 0.75,
                    width: redactLineWidth,
                    height: (effectiveFontSize * 1.05) + 1.5,
                    color: window.PDFLib.rgb(bgCol.r, bgCol.g, bgCol.b)
                  });
                }

                // 6. Draw complete replacement string
                outPage.drawText(lineText, {
                  x: drawX,
                  y: drawY,
                  size: effectiveFontSize,
                  font: fontObj,
                  color: window.PDFLib.rgb(txtCol.r, txtCol.g, txtCol.b)
                });
              }
            }
          }

          // 3. Added Text Boxes
          for (const at of state.addedTexts) {
            if (at.text) {
              const fontObj = resolveExportFont(at.fontFamily, at.isBold, at.isItalic);
              const txtCol = parseColor(at.fontColor || '#000000');
              const lines = at.text.split('\n');
              const lineH = at.fontSize * 1.25;

              for (let l = 0; l < lines.length; l++) {
                if (lines[l].length === 0) continue;
                outPage.drawText(lines[l], {
                  x: at.pdfX,
                  y: at.pdfY - (l * lineH),
                  size: Math.max(6, at.fontSize),
                  font: fontObj,
                  color: window.PDFLib.rgb(txtCol.r, txtCol.g, txtCol.b)
                });
              }
            }
          }

          // 4. Shapes
          for (const sh of state.shapes) {
            const strokeCol = parseColor(sh.strokeColor);
            const hasFill = sh.fillColor && sh.fillColor !== 'transparent';
            const fillCol = hasFill ? parseColor(sh.fillColor) : null;

            if (sh.type === 'rect') {
              outPage.drawRectangle({
                x: sh.pdfX,
                y: sh.pdfY,
                width: sh.width,
                height: sh.height,
                borderColor: window.PDFLib.rgb(strokeCol.r, strokeCol.g, strokeCol.b),
                borderWidth: sh.strokeWidth || 1,
                color: fillCol ? window.PDFLib.rgb(fillCol.r, fillCol.g, fillCol.b) : undefined
              });
            } else if (sh.type === 'circle') {
              const rx = sh.width / 2;
              const ry = sh.height / 2;
              outPage.drawEllipse({
                x: sh.pdfX + rx,
                y: sh.pdfY + ry,
                xScale: rx,
                yScale: ry,
                borderColor: window.PDFLib.rgb(strokeCol.r, strokeCol.g, strokeCol.b),
                borderWidth: sh.strokeWidth || 1,
                color: fillCol ? window.PDFLib.rgb(fillCol.r, fillCol.g, fillCol.b) : undefined
              });
            } else if (sh.type === 'line') {
              outPage.drawLine({
                start: { x: sh.pdfX, y: sh.pdfY },
                end: { x: sh.pdfX + sh.width, y: sh.pdfY + sh.height },
                thickness: sh.strokeWidth || 1,
                color: window.PDFLib.rgb(strokeCol.r, strokeCol.g, strokeCol.b)
              });
            }
          }

          // 5. Images
          for (const imgItem of state.images) {
            try {
              let embeddedImg;
              if (imgItem.dataUrl.includes('image/jpeg')) {
                embeddedImg = await outDoc.embedJpg(imgItem.dataUrl);
              } else {
                embeddedImg = await outDoc.embedPng(imgItem.dataUrl);
              }
              outPage.drawImage(embeddedImg, {
                x: imgItem.pdfX,
                y: imgItem.pdfY,
                width: imgItem.width,
                height: imgItem.height
              });
            } catch (imgErr) {
              console.warn('Failed to embed image on page ' + (originalIdx + 1), imgErr);
            }
          }

          // 6. Drawings & Highlighting Canvas Layer (Blended with Multiply for translucent highlight effect behind text)
          if (state.drawingDataUrl) {
            try {
              const drawImg = await outDoc.embedPng(state.drawingDataUrl);
              outPage.drawImage(drawImg, {
                x: 0,
                y: 0,
                width: pWidth,
                height: pHeight,
                blendMode: window.PDFLib.BlendMode.Multiply
              });
            } catch (drawErr) {
              console.warn('Failed to embed drawing layer on page ' + (originalIdx + 1), drawErr);
            }
          }
        }

        const outBytes = await outDoc.save();
        const blob = new Blob([outBytes], { type: 'application/pdf' });
        const outFileName = originalFileName.replace(/\.pdf$/i, '') + '-edited.pdf';

        triggerDownload(blob, outFileName);
        markDirty(false);
        hideLoading();
        showToast('Document saved & downloaded successfully!', 'success');
      } catch (err) {
        console.error('Save PDF error:', err);
        showToast('Failed to export PDF: ' + err.message, 'error');
        hideLoading();
      }
    }

    // Workbench cleanup
    currentWorkbenchCleanup = () => {
      window.removeEventListener('keydown', onKeydown, true);
      if (currentRenderTask) {
        try { currentRenderTask.cancel(); } catch (_) {}
      }
      pdfDocJs = null;
      originalPdfBytes = null;
      pageStates = [];
    };
  }

  /* =================================================================
     8. EVENT LISTENERS & NAVIGATION
     ================================================================= */

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (dom.header) {
      if (scrollPos > 15) {
        dom.header.classList.add('scrolled');
      } else {
        dom.header.classList.remove('scrolled');
      }
    }

    if (dom.backToTopBtn) {
      if (scrollPos > 320) {
        dom.backToTopBtn.classList.add('visible');
      } else {
        dom.backToTopBtn.classList.remove('visible');
      }
    }

    highlightActiveNavLink();
  });

  if (dom.backToTopBtn) {
    dom.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        dom.desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- Mobile Drawer Toggle ---
  if (dom.mobileToggle && dom.mobileMenu) {
    dom.mobileToggle.addEventListener('click', () => {
      const isOpen = dom.mobileMenu.classList.contains('open');
      if (isOpen) {
        dom.mobileMenu.classList.remove('open');
        dom.mobileToggle.classList.remove('active');
        dom.mobileToggle.setAttribute('aria-expanded', 'false');
        dom.mobileMenu.setAttribute('aria-hidden', 'true');
      } else {
        dom.mobileMenu.classList.add('open');
        dom.mobileToggle.classList.add('active');
        dom.mobileToggle.setAttribute('aria-expanded', 'true');
        dom.mobileMenu.setAttribute('aria-hidden', 'false');
      }
    });

    dom.mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        dom.mobileMenu.classList.remove('open');
        dom.mobileToggle.classList.remove('active');
        dom.mobileToggle.setAttribute('aria-expanded', 'false');
        dom.mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // --- Apps Category Filters ---
  if (dom.appsFilterGroup) {
    dom.appsFilterGroup.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.appsFilterGroup.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.getAttribute('data-filter');
        renderApps(filter);
      });
    });
  }

  // --- Online Tools Category Filter Buttons ---
  let activeToolCategory = 'all';

  if (dom.toolCategoryFilters) {
    dom.toolCategoryFilters.querySelectorAll('.tool-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.toolCategoryFilters.querySelectorAll('.tool-tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeToolCategory = btn.getAttribute('data-category');
        renderTools(activeToolCategory, dom.toolSearchInput ? dom.toolSearchInput.value : '');
      });
    });
  }

  // --- Online Tools Realtime Search ---
  if (dom.toolSearchInput) {
    dom.toolSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (dom.toolSearchClear) {
        dom.toolSearchClear.style.display = val ? 'block' : 'none';
      }
      renderTools(activeToolCategory, val);
    });

    if (dom.toolSearchClear) {
      dom.toolSearchClear.addEventListener('click', () => {
        dom.toolSearchInput.value = '';
        dom.toolSearchClear.style.display = 'none';
        renderTools(activeToolCategory, '');
        dom.toolSearchInput.focus();
      });
    }
  }

  if (dom.resetToolSearchBtn) {
    dom.resetToolSearchBtn.addEventListener('click', () => {
      if (dom.toolSearchInput) dom.toolSearchInput.value = '';
      if (dom.toolSearchClear) dom.toolSearchClear.style.display = 'none';
      activeToolCategory = 'all';
      if (dom.toolCategoryFilters) {
        dom.toolCategoryFilters.querySelectorAll('.tool-tag-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === 'all');
        });
      }
      renderTools('all', '');
    });
  }

  // --- Footer Quick Launch Links ---
  document.querySelectorAll('[data-quick-tool]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const toolId = link.getAttribute('data-quick-tool');
      openToolWorkbench(toolId);
    });
  });

  // --- Contact Form Configuration & Submission ---
  // Official Web3Forms integration for AAYAM Innovation Contact Us
  const CONTACT_CONFIG = {
    recipientEmail: 'aayaminnovations@gmail.com',
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: '8e9ead8b-e97f-4fa7-9b77-dd82719ae554',
    formName: 'AAYAM Innovation Contact Us'
  };

  if (dom.contactForm) {
    let isSubmitting = false;

    // Clear error states on user input
    ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('input-error');
          const errEl = document.getElementById(id.replace('contact-', '') + '-error');
          if (errEl) errEl.classList.remove('visible');
        });
      }
    });

    dom.contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (isSubmitting) return;

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const topicSelect = document.getElementById('contact-topic');
      const messageInput = document.getElementById('contact-message');
      const honeyInput = document.getElementById('contact-hp');
      const submitBtn = dom.contactSubmitBtn || document.getElementById('contact-submit-btn');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const messageError = document.getElementById('message-error');

      // Clear previous alert banners
      if (dom.formSuccessAlert) dom.formSuccessAlert.style.display = 'none';
      if (dom.formErrorAlert) dom.formErrorAlert.style.display = 'none';

      let isValid = true;

      // Full Name Validation
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal) {
        if (nameInput) nameInput.classList.add('input-error');
        if (nameError) nameError.classList.add('visible');
        isValid = false;
      } else {
        if (nameInput) nameInput.classList.remove('input-error');
        if (nameError) nameError.classList.remove('visible');
      }

      // Email Address Validation
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailVal || !emailPattern.test(emailVal)) {
        if (emailInput) emailInput.classList.add('input-error');
        if (emailError) emailError.classList.add('visible');
        isValid = false;
      } else {
        if (emailInput) emailInput.classList.remove('input-error');
        if (emailError) emailError.classList.remove('visible');
      }

      // Message Validation (at least 5 characters)
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal || messageVal.length < 5) {
        if (messageInput) messageInput.classList.add('input-error');
        if (messageError) messageError.classList.add('visible');
        isValid = false;
      } else {
        if (messageInput) messageInput.classList.remove('input-error');
        if (messageError) messageError.classList.remove('visible');
      }

      if (!isValid) {
        if (!nameVal && nameInput) nameInput.focus();
        else if ((!emailVal || !emailPattern.test(emailVal)) && emailInput) emailInput.focus();
        else if (messageInput) messageInput.focus();
        return;
      }

      // Honeypot spam defense: bots fill or check hidden inputs (botcheck)
      const isHoneypotTriggered = honeyInput && (
        honeyInput.type === 'checkbox'
          ? honeyInput.checked
          : (honeyInput.value && honeyInput.value.trim() !== '')
      );
      if (isHoneypotTriggered) {
        console.warn('Spam submission detected by honeypot.');
        if (dom.formSuccessAlert) dom.formSuccessAlert.style.display = 'flex';
        dom.contactForm.reset();
        return;
      }

      const topicVal = topicSelect ? topicSelect.value : 'General Support';

      // Set Loading UI State & prevent duplicate submissions
      isSubmitting = true;
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Send Message</span>';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.innerHTML = `<span>Sending Message...</span><span class="btn-spinner" aria-hidden="true"></span>`;
      }

      try {
        const formData = new FormData(dom.contactForm);
        formData.set('access_key', CONTACT_CONFIG.accessKey);
        formData.set('name', nameVal);
        formData.set('email', emailVal);
        formData.set('topic', topicVal);
        formData.set('message', messageVal);
        formData.set('from_name', nameVal);
        formData.set('replyto', emailVal);
        formData.set('subject', `New Contact Us Message - AAYAM Innovation: ${topicVal} from ${nameVal}`);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        const response = await fetch(CONTACT_CONFIG.endpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        let data = null;
        try {
          data = await response.json();
        } catch (jsonErr) {
          data = null;
        }

        const isSuccess = response.ok && data && (data.success === true || data.success === 'true');

        if (isSuccess) {
          if (dom.formSuccessAlert) {
            dom.formSuccessAlert.style.display = 'flex';
          }
          if (dom.formErrorAlert) {
            dom.formErrorAlert.style.display = 'none';
          }
          showToast('Thank you! Your message has been sent successfully.', 'success');
          // Reset form only after confirmed acceptance
          dom.contactForm.reset();
        } else {
          let errDetail = 'The email service could not deliver your message at this time.';
          if (data && data.message) {
            errDetail = data.message;
          }
          console.error('Web3Forms delivery error:', response.status, data);

          if (dom.formErrorAlert) {
            const errorTextEl = document.getElementById('form-error-text');
            if (errorTextEl) {
              errorTextEl.innerHTML = `${errDetail} Please try again or email us directly at <a href="mailto:${CONTACT_CONFIG.recipientEmail}">${CONTACT_CONFIG.recipientEmail}</a>.`;
            }
            dom.formErrorAlert.style.display = 'flex';
          }
          showToast('Could not deliver message. Please try again or email us directly.', 'error');
          // Entered form details are preserved on failure!
        }
      } catch (err) {
        console.error('Network or fetch error during contact form submission:', err);
        if (dom.formErrorAlert) {
          const errorTextEl = document.getElementById('form-error-text');
          if (errorTextEl) {
            if (err.name === 'AbortError') {
              errorTextEl.innerHTML = `Request timed out. Please check your internet connection or email us directly at <a href="mailto:${CONTACT_CONFIG.recipientEmail}">${CONTACT_CONFIG.recipientEmail}</a>.`;
            } else {
              errorTextEl.innerHTML = `Could not connect to the delivery service. Please check your network or reach us directly at <a href="mailto:${CONTACT_CONFIG.recipientEmail}">${CONTACT_CONFIG.recipientEmail}</a>.`;
            }
          }
          dom.formErrorAlert.style.display = 'flex';
        }
        showToast('Unable to reach delivery service. Please email us directly.', 'error');
        // Entered form details are preserved on failure!
      } finally {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  }

  // --- Modal Close Triggers ---
  if (dom.modalCloseBtn) dom.modalCloseBtn.addEventListener('click', closeToolModal);
  if (dom.modalBackdrop) dom.modalBackdrop.addEventListener('click', closeToolModal);

  if (dom.privacyPolicyLink && dom.privacyModal) {
    dom.privacyPolicyLink.addEventListener('click', () => {
      dom.privacyModal.classList.add('open');
      dom.privacyModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }
  if (dom.privacyModalClose && dom.privacyModal) {
    dom.privacyModalClose.addEventListener('click', () => {
      dom.privacyModal.classList.remove('open');
      dom.privacyModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }
  if (dom.privacyModalBackdrop && dom.privacyModal) {
    dom.privacyModalBackdrop.addEventListener('click', () => {
      dom.privacyModal.classList.remove('open');
      dom.privacyModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (dom.toolModal && dom.toolModal.classList.contains('modal-pdfeditor-open') && dom.toolModal.classList.contains('open')) {
        return;
      }
      closeToolModal();
      if (dom.privacyModal && dom.privacyModal.classList.contains('open')) {
        dom.privacyModal.classList.remove('open');
        dom.privacyModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

  /* =================================================================
     9. BOOTSTRAP APPLICATION
     ================================================================= */
  /* Expose openToolWorkbench for programmatic test automation */
  window.openToolWorkbench = openToolWorkbench;
  window.TOOLS_CONFIG = TOOLS_CONFIG;
  window.CONTACT_CONFIG = CONTACT_CONFIG;

  renderTools('all', '');
  renderApps('all');

  console.log('AAYAM Innovation Enterprise Platform initialized. (12 Utilities, 10 Apps)');
})();
