
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
    'index.csr.html': {size: 5326, hash: 'ca2028e5db8118308e3432569f324f959367bd1be167b97c11ddc223d541e137', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '820604dca5f325543565927cda8f7af52ab2d6e0d3004eb3212965e8d5e03119', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63456, hash: '2cda4a29a385564ef380f39666c9cba304f76ef5fd623a1cf2d830f62395f1c3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XWVDB3V2.css': {size: 85060, hash: 'kZGlEfkoqVw', text: () => import('./assets-chunks/styles-XWVDB3V2_css.mjs').then(m => m.default)}
  },
};
