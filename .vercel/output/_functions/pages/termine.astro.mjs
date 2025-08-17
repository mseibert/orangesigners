import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_crBGogEi.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1Yq4sn } from '../chunks/blog-placeholder-about_C6aqwKwk.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_C8RC6508.mjs';
export { renderers } from '../renderers.mjs';

const $$Termine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "Termine und Auftritte", "description": "Termine und Auftritte der Orangesingers", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": __ASTRO_IMAGE_IMPORT_Z1Yq4sn }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Probenzeiten</h2> <p>
Die Orangesingers proben jeden Dienstag in der 1. und 8. Stunde in der Oranienschule. 
 Wenn du in der 5. oder 6. Klasse bist, kannst du nach Absprache bei uns hineinschnuppern 
 und dich vom Chorgesang begeistern lassen.
</p> <h2>Unsere Auftritte</h2> <p>
Wir treten etwa 6 Mal pro Schuljahr bei verschiedenen Veranstaltungen auf und sorgen für 
 musikalische Höhepunkte im Schulleben. Unsere regelmäßigen Auftrittstermine sind:
</p> <h3>Veranstaltungen im Schuljahr</h3> <p> <strong>Einschulung:</strong> Wir begrüßen die neuen Schülerinnen und Schüler mit einem 
 herzlichen musikalischen Willkommen zu Beginn des Schuljahres.
</p> <p> <strong>Ringkirchenkonzert:</strong> Ein besonderes Highlight, bei dem wir gemeinsam mit 
 anderen Chören in der atmosphärischen Ringkirche auftreten.
</p> <p> <strong>Tag der offenen Tür:</strong> Hier präsentieren wir unser Können interessierten 
 Besuchern und zukünftigen Schülerinnen und Schülern.
</p> <p> <strong>Weihnachtsmarkt:</strong> Mit festlichen Liedern stimmen wir die Besucher auf die 
 Weihnachtszeit ein und sorgen für eine besinnliche Atmosphäre.
</p> <p> <strong>Chorkonzert:</strong> Unser großer Jahresauftritt, bei dem wir unser gesamtes 
 Repertoire präsentieren und zeigen, was wir das Jahr über erarbeitet haben.
</p> <p> <strong>Kulturnacht:</strong> Ein kultureller Höhepunkt, bei dem verschiedene künstlerische 
 Darbietungen der Schule präsentiert werden und wir unseren Beitrag zur Schulkultur leisten.
</p> <h2>Mitmachen</h2> <p>
Du hast Interesse am Singen und möchtest Teil unserer Chorgemeinschaft werden? 
 Dann komm einfach dienstags in der 7. und 8. Stunde vorbei oder sprich uns an. 
 Besonders Schülerinnen und Schüler der 5. und 6. Klassen sind herzlich eingeladen, 
 nach Absprache bei einer Probe zu schnuppern und zu erleben, wie viel Freude 
 gemeinsames Musizieren macht.
</p> ` })}`;
}, "/Users/martinseibert/Documents/code/orangesingers/src/pages/termine.astro", void 0);

const $$file = "/Users/martinseibert/Documents/code/orangesingers/src/pages/termine.astro";
const $$url = "/termine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Termine,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
