
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
    'index.csr.html': {size: 5252, hash: 'fd84451c5551aad766e3a3b24c65d96647678d114e04a2766df0caabaef12343', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5442, hash: '956a96d3e82fbc295e0eea1ff04067965705607950f4a619429569780dddd736', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B4SNAQ6I.css': {size: 84966, hash: 'b3mpnjCDpdY', text: () => import('./assets-chunks/styles-B4SNAQ6I_css.mjs').then(m => m.default)}
  },
};
