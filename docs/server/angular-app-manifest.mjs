
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
    'index.csr.html': {size: 6537, hash: '8b4f806c50bfb42c004270d0ba66f7b6d832ab25880999bf90c0d46fa8b1a419', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6740, hash: '54e8981c34c7551cfef884001c9ba8d5d386e22784c63143b2a21075bcb39029', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80256, hash: '0ae1ca17e736d2ea2684dbda6928660b39b86c240b026d934f7112fff5ab3679', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
