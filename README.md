# Orange Singers Website

Die offizielle Website des Unterstufenchors der Oranienschule Wiesbaden.

## Features

- **Responsive Design** mit Tailwind CSS
- **Blog-System** mit Markdown/MDX Support
- **Dynamische OG-Image-Generierung** für Social Media
- **SEO-optimiert** mit automatischen Meta-Tags
- **RSS-Feed** für Blog-Updates

## 🎨 Dynamische OG-Image-Generierung

Die Website generiert automatisch Open Graph Bilder für Social Media (Facebook, Twitter, LinkedIn) mit folgenden Features:

- **Automatische Generierung** bei Build-Zeit
- **Hero-Image Integration** aus Blog-Posts
- **Orange Singers Branding** mit konsistentem Design
- **Standard-Dimensionen** 1200×630 Pixel
- **Caching** für optimale Performance

### Verwendung

- **Hauptseite**: `/api/og-image?type=home`
- **Blog-Posts**: `/api/og-image?type=blog&slug=[post-slug]`
- **Admin-Interface**: `/admin/og-images`

### Technische Details

- **Sharp** für Bildverarbeitung
- **SVG-Templates** für konsistentes Design
- **Automatische Meta-Tags** in HTML-Head
- **Statische Generierung** für beste Performance

## Entwicklung

### Voraussetzungen

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm run dev
```

### Build

```bash
pnpm run build
```

### Preview

```bash
pnpm run preview
```

## Projektstruktur

```
src/
├── components/          # Astro-Komponenten
├── content/            # Blog-Content (Markdown/MDX)
├── layouts/            # Seiten-Layouts
├── pages/              # Seiten und API-Routes
├── styles/             # CSS-Styles
├── utils/              # Utility-Funktionen
└── assets/             # Bilder und andere Assets
```

## Technologie-Stack

- **Astro** - Static Site Generator
- **Tailwind CSS** - CSS Framework
- **Sharp** - Bildverarbeitung
- **TypeScript** - Typisierung

## Social Media Integration

Die Website ist vollständig für Social Media optimiert:

- **Open Graph Meta-Tags** für Facebook
- **Twitter Cards** für Twitter
- **Dynamische Preview-Bilder** für alle Plattformen
- **Strukturierte Daten** für bessere Sichtbarkeit

## Support

Bei Fragen oder Problemen:

1. Überprüfen Sie die [OG-Image Dokumentation](docs/og-images.md)
2. Testen Sie die Admin-Seite unter `/admin/og-images`
3. Überprüfen Sie die generierten Bild-URLs
4. Kontaktieren Sie das Entwicklungsteam
