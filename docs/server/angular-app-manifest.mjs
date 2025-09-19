
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
    'index.csr.html': {size: 5326, hash: '8a67887d5c35dcdae18c2a376f529b980723466e16a3905af7a435bbfc0ea514', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '995299d643b9da7fb78ed6958e7a79b9af333773bd5f98c9ea32828153c225a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63474, hash: '0b39bafa6015cc1ea2e0cc28215b21355cab01558986325b5a518252e2310036', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XWVDB3V2.css': {size: 85060, hash: 'kZGlEfkoqVw', text: () => import('./assets-chunks/styles-XWVDB3V2_css.mjs').then(m => m.default)}
  },
};
