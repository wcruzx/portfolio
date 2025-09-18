
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
    'index.csr.html': {size: 5329, hash: '39b79d7b05a87cbb793f3a4bc59a0310ad8a62dbe680bdff227fc466ea2e2301', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5422, hash: '00988973c6372d619981cdc9d83d4e149cf5672f83e336ad9b31f46303598217', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63453, hash: '0f1b59b2164be09683c8619faef0cafbf474bbe7b9bd741cf08f16bb2b6e7243', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OMVEM3Y.css': {size: 85063, hash: '5J9ugc0P8GI', text: () => import('./assets-chunks/styles-4OMVEM3Y_css.mjs').then(m => m.default)}
  },
};
