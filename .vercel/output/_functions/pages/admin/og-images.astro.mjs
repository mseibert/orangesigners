import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, e as renderHead } from '../../chunks/astro/server_crBGogEi.mjs';
import { g as getCollection } from '../../chunks/_astro_content_cPo-rm3D.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Header_8Nepm4LL.mjs';
/* empty css                                        */
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../chunks/consts_Dt6daOuA.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://orangesingers.de");
const $$OGImagePreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OGImagePreview;
  const { title, description, slug, type = "home" } = Astro2.props;
  const ogImageURL = type === "home" ? new URL("/api/og-image?type=home", Astro2.site).href : new URL(`/api/og-image?type=blog&slug=${slug}`, Astro2.site).href;
  return renderTemplate`${maybeRenderHead()}<div class="og-preview-container" data-astro-cid-7qlatqxr> <h3 class="text-lg font-bold text-gray-800 mb-4" data-astro-cid-7qlatqxr>Open Graph Image Preview</h3> <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm" data-astro-cid-7qlatqxr> <div class="flex flex-col md:flex-row gap-4" data-astro-cid-7qlatqxr> <!-- Preview Image --> <div class="flex-shrink-0" data-astro-cid-7qlatqxr> <img${addAttribute(ogImageURL, "src")}${addAttribute(`OG Image for ${title}`, "alt")} class="w-80 h-42 object-cover rounded-lg border border-gray-200" loading="lazy" data-astro-cid-7qlatqxr> </div> <!-- Preview Info --> <div class="flex-1" data-astro-cid-7qlatqxr> <div class="space-y-2" data-astro-cid-7qlatqxr> <div data-astro-cid-7qlatqxr> <span class="text-sm font-medium text-gray-500" data-astro-cid-7qlatqxr>Title:</span> <p class="text-gray-900" data-astro-cid-7qlatqxr>${title}</p> </div> ${description && renderTemplate`<div data-astro-cid-7qlatqxr> <span class="text-sm font-medium text-gray-500" data-astro-cid-7qlatqxr>Description:</span> <p class="text-gray-900 text-sm" data-astro-cid-7qlatqxr>${description}</p> </div>`} <div data-astro-cid-7qlatqxr> <span class="text-sm font-medium text-gray-500" data-astro-cid-7qlatqxr>Image URL:</span> <p class="text-gray-900 text-sm break-all" data-astro-cid-7qlatqxr>${ogImageURL}</p> </div> <div data-astro-cid-7qlatqxr> <span class="text-sm font-medium text-gray-500" data-astro-cid-7qlatqxr>Dimensions:</span> <p class="text-gray-900 text-sm" data-astro-cid-7qlatqxr>1200 × 630 px</p> </div> </div> <!-- Download Link --> <div class="mt-4" data-astro-cid-7qlatqxr> <a${addAttribute(ogImageURL, "href")}${addAttribute(`og-image-${slug || "home"}.png`, "download")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-md hover:bg-orange-100 transition-colors" data-astro-cid-7qlatqxr> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-7qlatqxr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-7qlatqxr></path> </svg>
Download OG Image
</a> </div> </div> </div> </div> </div> `;
}, "/Users/martinseibert/Documents/code/orangesingers/src/components/OGImagePreview.astro", void 0);

const $$OgImages = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  return renderTemplate`<html lang="de"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "OG Images Admin - Orange Singers", "description": "Verwaltung der Open Graph Bilder" })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-7xl mx-auto px-4 py-8"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-orange-500 mb-4">🎨 OG Images Verwaltung</h1> <p class="text-xl text-gray-600">
Übersicht aller generierten Open Graph Bilder für Social Media
</p> </div> <!-- Home Page OG Image --> <div class="mb-12"> <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2">
🏠 Hauptseite
</h2> ${renderComponent($$result, "OGImagePreview", $$OGImagePreview, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "type": "home" })} </div> <!-- Blog Posts OG Images --> <div class="mb-12"> <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2">
📝 Blog Posts
</h2> <div class="space-y-8"> ${posts.map((post) => renderTemplate`<div class="bg-gray-50 rounded-lg p-6"> <h3 class="text-lg font-semibold text-gray-800 mb-2"> ${post.data.title} </h3> <p class="text-sm text-gray-600 mb-4">
Veröffentlicht: ${post.data.pubDate.toLocaleDateString("de-DE")} </p> ${renderComponent($$result, "OGImagePreview", $$OGImagePreview, { "title": post.data.title, "description": post.data.description, "slug": post.slug, "type": "blog" })} </div>`)} </div> </div> <!-- Info Section --> <div class="bg-blue-50 border border-blue-200 rounded-lg p-6"> <h3 class="text-lg font-semibold text-blue-800 mb-3">ℹ️ Informationen</h3> <div class="text-blue-700 space-y-2"> <p>• Alle OG-Bilder werden automatisch bei jedem Build generiert</p> <p>• Bilder haben die Standard-Dimensionen 1200×630 Pixel</p> <p>• Hero-Images aus Blog-Posts werden als Hintergrund verwendet</p> <p>• Bilder sind für Social Media (Facebook, Twitter, LinkedIn) optimiert</p> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/martinseibert/Documents/code/orangesingers/src/pages/admin/og-images.astro", void 0);

const $$file = "/Users/martinseibert/Documents/code/orangesingers/src/pages/admin/og-images.astro";
const $$url = "/admin/og-images";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OgImages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
