
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
    'index.csr.html': {size: 5232, hash: '078d1abd2829d0a87a0b860ce157890faa8fc1731b643204c919f7d176967fa3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: 'b54a398934a863dd092dbd58da4368c5ae5e2fa8f4a15f1aa6a8865c426e8bca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 65292, hash: '2805788c1ab7e2aa3958a640d1da278741d72ae6b04cb327761a1fee9fada3b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
