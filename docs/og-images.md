# Dynamische OG-Image-Generierung

Diese Dokumentation beschreibt die implementierte Lösung für die dynamische Generierung von Open Graph (OG) Bildern für die Orange Singers Website.

## Übersicht

Das System generiert automatisch Preview-Bilder für Social Media (Facebook, Twitter, LinkedIn) mit folgenden Features:

- **Automatische Generierung** bei Build-Zeit
- **Hero-Image Integration** aus Blog-Posts
- **Responsive Design** mit Orange Singers Branding
- **Standard-Dimensionen** 1200×630 Pixel
- **Caching** für optimale Performance

## Technische Implementierung

### Dateien

- `src/utils/og-image.ts` - Hauptlogik für Bildgenerierung
- `src/pages/og-image/[slug].png.ts` - Statische Route für OG-Bilder
- `src/components/OGImagePreview.astro` - Vorschau-Komponente
- `src/pages/admin/og-images.astro` - Admin-Interface

### Funktionsweise

1. **SVG Template**: Erstellt ein responsives SVG-Design mit Orange Singers Branding
2. **Sharp Integration**: Konvertiert SVG zu PNG mit optimierter Qualität
3. **Hero-Image Processing**: Integriert vorhandene Blog-Bilder als Hintergrund
4. **Static Generation**: Generiert alle Bilder bei Build-Zeit für beste Performance

## Verwendung

### Automatische Generierung

OG-Bilder werden automatisch für folgende Seiten generiert:

- **Hauptseite**: `/og-image/home.png`
- **Blog-Posts**: `/og-image/[slug].png`

### Meta-Tags

Die Bilder werden automatisch in die HTML-Meta-Tags eingefügt:

```html
<meta property="og:image" content="https://orangesingers.de/og-image/home.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="twitter:image" content="https://orangesingers.de/og-image/home.png" />
```

### Admin-Interface

Besuchen Sie `/admin/og-images` für eine Vorschau aller generierten Bilder.

## Anpassung

### Design ändern

Bearbeiten Sie die SVG-Template in `src/utils/og-image.ts`:

```typescript
const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Ihr angepasstes Design hier -->
  </svg>
`;
```

### Farben anpassen

Ändern Sie die Farbwerte im SVG:

```typescript
// Orange Singers Farben
<stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
<stop offset="100%" style="stop-color:#ea580c;stop-opacity:1" />
```

### Dimensionen ändern

Passen Sie die Standard-Dimensionen an:

```typescript
const { width = 1200, height = 630 } = options;
```

## Build-Prozess

1. **Development**: Bilder werden bei Bedarf generiert
2. **Production**: Alle Bilder werden bei Build-Zeit generiert
3. **Caching**: Bilder werden für 1 Jahr gecacht

## Troubleshooting

### Bilder werden nicht generiert

1. Überprüfen Sie, ob `sharp` installiert ist
2. Stellen Sie sicher, dass die Build-Umgebung Node.js unterstützt
3. Überprüfen Sie die Console-Logs auf Fehler

### Hero-Images werden nicht angezeigt

1. Überprüfen Sie den Pfad zum Hero-Image
2. Stellen Sie sicher, dass das Bild im `src/assets/` Ordner liegt
3. Überprüfen Sie das Bildformat (JPEG, PNG, WebP)

### Performance-Probleme

1. Bilder werden bei Build-Zeit generiert, nicht zur Laufzeit
2. Verwenden Sie CDN-Caching für bessere Performance
3. Optimieren Sie Hero-Images vor dem Upload

## Best Practices

1. **Hero-Images**: Verwenden Sie hochwertige Bilder (mindestens 1200×630px)
2. **Text-Länge**: Halten Sie Titel und Beschreibungen kurz
3. **Branding**: Konsistente Verwendung der Orange Singers Farben
4. **Testing**: Testen Sie Bilder mit Social Media Debugging-Tools

## Social Media Testing

### Facebook
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### Twitter
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### LinkedIn
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Support

Bei Fragen oder Problemen:

1. Überprüfen Sie die Console-Logs
2. Testen Sie die Admin-Seite unter `/admin/og-images`
3. Überprüfen Sie die generierten Bild-URLs
4. Kontaktieren Sie das Entwicklungsteam
