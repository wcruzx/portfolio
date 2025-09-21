
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
    'index.csr.html': {size: 5232, hash: 'e0bb8fb4923e75ff633b836d84811b8c7651e0fdea587f986efd3c84d8ae46b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '2b3711e89bb2bec501b555e7b3455936762a858f798e83b627a2d94460ddefb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69197, hash: '0a13dc0d619cc9ccbc7df7e25e53b42ccb647910d3c016282d2096c4ed974bea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
