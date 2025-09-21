
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
    'index.csr.html': {size: 5232, hash: 'ad155352040b40a5434c31f9aec40420e905f6626ca57c54e09f25ff5264e636', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '542b2790fd713c10e570b6bd8a5a1b035413eb50647a012ed1d1abccebfb1d5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69103, hash: '5bbccba986a02c4baaebcf3ccaae790f8131ffe2ef6d0dcd460ca4229d18b477', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
