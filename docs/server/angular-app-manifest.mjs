
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5349, hash: '168d05b39c23081947063c877ab0a3de378f57b80d4d261db12a91371217ab80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5442, hash: 'e8892ef1a5c8cbb91015b13a34bc38595b7f5de38816c438af98577f7fa47530', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4OMVEM3Y.css': {size: 85063, hash: '5J9ugc0P8GI', text: () => import('./assets-chunks/styles-4OMVEM3Y_css.mjs').then(m => m.default)}
  },
};
