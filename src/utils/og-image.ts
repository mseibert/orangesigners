import sharp from 'sharp';
import type { ImageMetadata } from 'astro';

interface OGImageOptions {
  title: string;
  description?: string;
  author?: string;
  date?: string;
  backgroundImage?: ImageMetadata;
  width?: number;
  height?: number;
}

export async function generateOGImage(options: OGImageOptions): Promise<Buffer> {
  const {
    title,
    description,
    author = 'Orange Singers',
    date,
    backgroundImage,
    width = 1200,
    height = 630
  } = options;

  let backgroundImageBase64 = '';
  
  // Wenn ein Hero-Image vorhanden ist, konvertiere es zu Base64
  if (backgroundImage) {
    try {
      const imageBuffer = await sharp(backgroundImage.src)
        .resize(width, height, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toBuffer();
      backgroundImageBase64 = imageBuffer.toString('base64');
    } catch (error) {
      console.warn('Could not process background image:', error);
    }
  }

  // Erstelle ein SVG Template für das OG Image
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ea580c;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bg)"/>
      
      <!-- Optional background image overlay -->
      ${backgroundImageBase64 ? `
        <defs>
          <clipPath id="clip">
            <rect x="0" y="0" width="${width}" height="${height}" rx="20"/>
          </clipPath>
        </defs>
        <image href="data:image/jpeg;base64,${backgroundImageBase64}" 
               x="0" y="0" width="${width}" height="${height}" 
               preserveAspectRatio="xMidYMid slice" 
               clip-path="url(#clip)" opacity="0.2"/>
      ` : ''}
      
      <!-- Content container -->
      <rect x="60" y="60" width="${width - 120}" height="${height - 120}" 
            fill="rgba(255,255,255,0.95)" rx="20" filter="url(#shadow)"/>
      
      <!-- Logo/Icon -->
      <circle cx="120" cy="120" r="30" fill="#f97316"/>
      <text x="120" y="130" text-anchor="middle" font-family="Arial, sans-serif" 
            font-size="24" font-weight="bold" fill="white">🎵</text>
      
      <!-- Title -->
      <text x="180" y="130" font-family="Arial, sans-serif" font-size="48" 
            font-weight="bold" fill="#1f2937" max-width="${width - 240}">
        ${title}
      </text>
      
      <!-- Description -->
      ${description ? `
        <text x="180" y="180" font-family="Arial, sans-serif" font-size="24" 
              fill="#6b7280" max-width="${width - 240}">
          ${description}
        </text>
      ` : ''}
      
      <!-- Author and Date -->
      <text x="180" y="${height - 120}" font-family="Arial, sans-serif" 
            font-size="20" fill="#f97316" font-weight="bold">
        ${author}
      </text>
      
      ${date ? `
        <text x="180" y="${height - 90}" font-family="Arial, sans-serif" 
              font-size="16" fill="#9ca3af">
          ${date}
        </text>
      ` : ''}
      
      <!-- Website URL -->
      <text x="${width - 60}" y="${height - 60}" text-anchor="end" 
            font-family="Arial, sans-serif" font-size="16" fill="#9ca3af">
        orangesingers.de
      </text>
    </svg>
  `;

  // Konvertiere SVG zu PNG mit Sharp
  const buffer = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  return buffer;
}

export async function generateBlogOGImage(
  title: string,
  description: string,
  pubDate: Date,
  heroImage?: ImageMetadata
): Promise<Buffer> {
  return generateOGImage({
    title,
    description,
    author: 'Orange Singers',
    date: pubDate.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    backgroundImage: heroImage,
    width: 1200,
    height: 630
  });
}

export async function generateHomeOGImage(): Promise<Buffer> {
  return generateOGImage({
    title: 'Orange Singers',
    description: 'Der Unterstufenchor der Oranienschule Wiesbaden',
    author: 'Oranienschule Wiesbaden',
    width: 1200,
    height: 630
  });
}
