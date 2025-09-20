
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
    'index.csr.html': {size: 5326, hash: '5b1063bdd070f287f641f28325dcd19110291340ad521a711d19a64ec8081e66', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '15754cb71e6e9c41519cc59d3dabdf9eada4cf83c6313e85f92f428c591c61ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 64087, hash: '0c1bce150d5b40a9fc34f0f0a3c2e247f166e267b1dc81c2788196c9c2cbea45', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XWVDB3V2.css': {size: 85060, hash: 'kZGlEfkoqVw', text: () => import('./assets-chunks/styles-XWVDB3V2_css.mjs').then(m => m.default)}
  },
};
