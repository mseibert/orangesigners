import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_crBGogEi.mjs';

const $$Astro = createAstro("https://orangesingers.de");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${addAttribute(className, "class")}> ${date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`;
}, "/Users/martinseibert/Documents/code/orangesingers/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
