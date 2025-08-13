import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { generateBlogOGImage, generateHomeOGImage } from '../../utils/og-image';

export const GET: APIRoute = async ({ url }) => {
  try {
    const { searchParams } = new URL(url);
    const slug = searchParams.get('slug');
    const type = searchParams.get('type') || 'home';

    let buffer: Buffer;

    if (type === 'blog' && slug) {
      // Blog post OG image
      const posts = await getCollection('blog');
      const post = posts.find(p => p.slug === slug);
      
      if (!post) {
        return new Response('Post not found', { status: 404 });
      }

      buffer = await generateBlogOGImage(
        post.data.title,
        post.data.description || '',
        post.data.pubDate,
        post.data.heroImage
      );
    } else {
      // Home page OG image
      buffer = await generateHomeOGImage();
    }

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
};

// Generate static paths for all blog posts and home
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  
  const paths = [
    { params: { slug: 'home' } },
    ...posts.map(post => ({ params: { slug: post.slug } }))
  ];
  
  return paths;
}
