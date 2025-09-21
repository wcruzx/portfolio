
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
    'index.csr.html': {size: 5252, hash: 'a348e843bd897612f6f79fbaddfcdb9e9bebad957be36999d4128ad28ba61ff4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5442, hash: '82492065032f9ba3a28fb1035e17da087325500b2d5fc8a0f4e3bbe1277ba645', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
