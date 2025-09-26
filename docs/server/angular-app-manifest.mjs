
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
    'index.csr.html': {size: 7005, hash: 'eb567450ab85b9ee5db7e9b7dd8170606dd93a6f746eb6dc1b4e0e7d0860f92b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7210, hash: '1979403a3cf535a91d7807f23fd20de5b5b2dddb405e4a56fd1ec2f90e4c683a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 75724, hash: '13c52c3eeeae32bfed23223bfc16680202d770db211fa3e99f560e526ef8c9c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
