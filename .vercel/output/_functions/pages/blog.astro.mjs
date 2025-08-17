import { c as createComponent, r as renderComponent, e as renderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_crBGogEi.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DUILIom-.mjs';
import { g as getCollection } from '../chunks/_astro_content_WdbV0-81.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_8Nepm4LL.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_DkbEPmAS.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_Dt6daOuA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="de"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-gray-50 min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-7xl mx-auto px-4 py-8"> <!-- Hero Section --> <div class="text-center py-16 px-6 mb-12 bg-orange-400 text-white rounded-2xl shadow-2xl"> <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
🎵 Blog der <span class="text-orange-100">Orange Singers</span> </h1> <p class="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-orange-50">
Entdecken Sie die neuesten Nachrichten, Berichte und Einblicke in das Chorleben der Orange Singers
</p> </div> <!-- Blog Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"> ${posts.map((post, index) => renderTemplate`<div${addAttribute(`bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`, "class")}> <a${addAttribute(`/blog/${post.id}/`, "href")} class="block"> ${post.data.heroImage && renderTemplate`<div class="relative overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "width": index === 0 ? 1200 : 600, "height": index === 0 ? 400 : 300, "src": post.data.heroImage, "alt": post.data.title, "class": "w-full h-auto transition-transform duration-300 hover:scale-105" })} </div>`} <div class="p-8"> <h2${addAttribute(`font-bold text-gray-900 mb-4 leading-tight transition-colors duration-300 hover:text-oranienschule-600 ${index === 0 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`, "class")}> ${post.data.title} </h2> <p class="text-gray-600 text-lg mb-6 leading-relaxed"> ${post.data.description || "Ein spannender Beitrag \xFCber die Orange Singers und das Chorleben."} </p> <div class="flex items-center justify-between"> <p class="text-oranienschule-600 font-semibold"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-oranienschule-500 to-oranienschule-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-oranienschule-600 hover:to-oranienschule-700">
Weiterlesen →
</span> </div> </div> </a> </div>`)} </div> <!-- Back to Home --> <div class="text-center mt-16"> <a href="/" class="inline-block px-10 py-5 border-2 border-oranienschule-500 text-oranienschule-600 text-xl font-bold rounded-xl hover:bg-oranienschule-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
← Zurück zur Startseite
</a> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/martinseibert/Documents/code/orangesingers/src/pages/blog/index.astro", void 0);

const $$file = "/Users/martinseibert/Documents/code/orangesingers/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
