
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5329, hash: '98ae5c4e7bd94715c001a2c662149547bbb80402be90fd11c4e1d4e454bdf7e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: 'd940e0017842dd3c65d5cf06328acf10f463b65c9eadae8c50780afafedbad9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63452, hash: '4c8ef1e8ca2dd7e7dc3a45f9479d9c04835ddd7ed4a7093f323fbbb28397ac3c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OMVEM3Y.css': {size: 85063, hash: '5J9ugc0P8GI', text: () => import('./assets-chunks/styles-4OMVEM3Y_css.mjs').then(m => m.default)}
  },
};
