import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, aG as spreadAttributes, f as renderSlot, a as renderTemplate } from './astro/server_crBGogEi.mjs';

const $$Astro = createAstro("https://orangesingers.de");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    className,
    {
      "text-orange-500 font-bold": isActive,
      "text-gray-700 hover:text-orange-500": !isActive
    }
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/martinseibert/Documents/code/orangesingers/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
