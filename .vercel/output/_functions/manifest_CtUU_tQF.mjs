import { q as decodeKey } from './chunks/astro/server_crBGogEi.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DUmxVPGo.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/martinseibert/Documents/code/orangesingers/","cacheDir":"file:///Users/martinseibert/Documents/code/orangesingers/node_modules/.astro/","outDir":"file:///Users/martinseibert/Documents/code/orangesingers/dist/","srcDir":"file:///Users/martinseibert/Documents/code/orangesingers/src/","publicDir":"file:///Users/martinseibert/Documents/code/orangesingers/public/","buildClientDir":"file:///Users/martinseibert/Documents/code/orangesingers/dist/client/","buildServerDir":"file:///Users/martinseibert/Documents/code/orangesingers/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.12.9_@types+node@24.2.1_jiti@2.5.1_lightningcss@1.30.1_rollup@4.46.2_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"},{"type":"inline","content":".og-preview-container[data-astro-cid-7qlatqxr]{max-width:56rem;margin-left:auto;margin-right:auto}\n"}],"routeData":{"route":"/admin/og-images","isIndex":false,"type":"page","pattern":"^\\/admin\\/og-images\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"og-images","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/og-images.astro","pathname":"/admin/og-images","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/og-image","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/og-image\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"og-image","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/og-image.ts","pathname":"/api/og-image","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"}],"routeData":{"route":"/kooperationspartner","isIndex":false,"type":"page","pattern":"^\\/kooperationspartner\\/?$","segments":[[{"content":"kooperationspartner","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kooperationspartner.astro","pathname":"/kooperationspartner","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"}],"routeData":{"route":"/termine","isIndex":false,"type":"page","pattern":"^\\/termine\\/?$","segments":[[{"content":"termine","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termine.astro","pathname":"/termine","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Cpyelmf1.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://orangesingers.de","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/martinseibert/Documents/code/orangesingers/src/pages/admin/og-images.astro",{"propagation":"in-tree","containsHead":true}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/kooperationspartner.astro",{"propagation":"none","containsHead":true}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/termine.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/admin/og-images@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/api/og-image.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/og-image@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/martinseibert/Documents/code/orangesingers/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.12.9_@types+node@24.2.1_jiti@2.5.1_lightningcss@1.30.1_rollup@4.46.2_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin/og-images@_@astro":"pages/admin/og-images.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/og-image@_@ts":"pages/api/og-image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/kooperationspartner@_@astro":"pages/kooperationspartner.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/termine@_@astro":"pages/termine.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CtUU_tQF.mjs","/Users/martinseibert/Documents/code/orangesingers/node_modules/.pnpm/astro@5.12.9_@types+node@24.2.1_jiti@2.5.1_lightningcss@1.30.1_rollup@4.46.2_typescript@5.9.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CpO4RX1l.mjs","/Users/martinseibert/Documents/code/orangesingers/.astro/content-assets.mjs":"chunks/content-assets_CHfL-CE_.mjs","/Users/martinseibert/Documents/code/orangesingers/.astro/content-modules.mjs":"chunks/content-modules_B-lpW3EE.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D4XKcpa1.mjs","/Users/martinseibert/Documents/code/orangesingers/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_pT3fYDd5.mjs","/Users/martinseibert/Documents/code/orangesingers/src/content/blog/using-mdx.mdx":"chunks/using-mdx_CMGshSlX.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/blog-placeholder-4.gLBdjEDe.jpg","/_astro/blog-placeholder-3.ijrf8Ohr.jpg","/_astro/blog-placeholder-2.1WQRLJGH.jpg","/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","/_astro/blog-placeholder-5.CB3Xi-gp.jpg","/_astro/blog-placeholder-about.BtEdEmGp.jpg","/_astro/orangesingers.DTKpyjQ_.png","/_astro/about.Cpyelmf1.css","/favicon.svg","/orange-signers-oranienschule-bildrechte.pdf","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"JXOTmn/RXRr/kdO4FaONguGH+jDOoMdsOOEsT+IqxfY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
