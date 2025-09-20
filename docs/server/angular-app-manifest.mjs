
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
    'index.csr.html': {size: 5326, hash: '90f570931d6b82f117304b12a18bb6c1cc5b25a997d78b548ced83c3b739b5b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '569b5acfdecebc58dbb10ba33ae5ffbc8884e5bc2663da93ccb44e24dcf3308d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63353, hash: '48fcfd39c3482bce141b2311319c6b2cab19e33e71e7514b46ceec226e4f8406', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XWVDB3V2.css': {size: 85060, hash: 'kZGlEfkoqVw', text: () => import('./assets-chunks/styles-XWVDB3V2_css.mjs').then(m => m.default)}
  },
};
