
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
    'index.csr.html': {size: 5252, hash: '9927b735b8b2128ecf89bc203792a4a6c9ad7522da2cf2333ef55db4691e4302', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5442, hash: '84438de69258060b13d7d918e0440d3b68876d5ecec26ab8ab62f693fcf3e67b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
