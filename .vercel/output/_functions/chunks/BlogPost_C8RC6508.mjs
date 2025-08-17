import { b as createAstro, c as createComponent, r as renderComponent, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_crBGogEi.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_DUILIom-.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header_8Nepm4LL.mjs';
import { $ as $$FormattedDate } from './FormattedDate_DkbEPmAS.mjs';
/* empty css                         */

const $$Astro = createAstro("https://orangesingers.de");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  const slug = Astro2.url.pathname.split("/").pop()?.replace(/\/$/, "") || "";
  const ogImageURL = new URL(`/api/og-image?type=blog&slug=${slug}`, Astro2.site).href;
  return renderTemplate`<html lang="de"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "ogImage": ogImageURL })}${renderHead()}</head> <body class="bg-gray-50 min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-4xl mx-auto px-4 py-8"> <article class="bg-white rounded-xl shadow-lg overflow-hidden"> ${heroImage && renderTemplate`<div class="w-full"> ${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "class": "w-full h-auto object-cover" })} </div>`} <div class="p-8 md:p-12"> <div class="text-center mb-12"> <div class="mb-6"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "class": "text-lg text-oranienschule-600 font-medium" })} ${updatedDate && renderTemplate`<div class="text-sm text-gray-500 italic mt-2">
Zuletzt aktualisiert am ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} </div> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"> ${title} </h1> <div class="w-24 h-1 bg-gradient-to-r from-oranienschule-500 to-oranienschule-600 mx-auto rounded-full"></div> </div> <div class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-oranienschule-600 prose-a:font-medium hover:prose-a:text-oranienschule-700 prose-strong:text-gray-900 prose-strong:font-semibold prose-blockquote:border-l-oranienschule-500 prose-blockquote:bg-orange-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"> ${renderSlot($$result, $$slots["default"])} </div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/martinseibert/Documents/code/orangesingers/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
