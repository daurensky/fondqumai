import lume from 'lume/mod.ts'
import basePath from 'lume/plugins/base_path.ts'
import inline from 'lume/plugins/inline.ts'
import multilanguage from 'lume/plugins/multilanguage.ts'
import netlifyCMS from 'lume/plugins/netlify_cms.ts'
import postcss from 'lume/plugins/postcss.ts'
import pug from 'lume/plugins/pug.ts'
import tailwindcss from 'lume/plugins/tailwindcss.ts'
import pagefind from 'lume/plugins/pagefind.ts'
import initSearch from './utils/initSearch.ts'

const site = lume(
  {
    src: './src',
  },
  {
    markdown: {
      keepDefaultPlugins: true,
    },
  }
)

site.use(
  tailwindcss({
    options: {
      theme: {
        extend: {
          colors: {
            primary: {
              tiffany: '#09b8b6',
              white: '#e9eee0',
              gray: '#767676',
              black: '#2a2a2a',
            },
          },
          fontFamily: {
            rubik: ['Rubik'],
            roboto: ['Roboto'],
          },
        },
      },
    },
  })
)

site.use(postcss())

site.use(pug())

site.use(multilanguage())

site.use(basePath())

site.use(inline())

site.use(
  netlifyCMS({
    netlifyIdentity: true,
  })
)

site.use(
  pagefind({
    indexing: {
      glob: '**/news/**/*.html',
      rootSelector: '#content',
    },
    ui: false,
    binary: { version: 'v0.10.5' },
  })
)

site.process(['.html'], page => initSearch(page, site))

site.copy('assets/img')
site.copy('assets/js')
site.copy('assets/pdf')
site.copy('assets/uploads')

site.addEventListener('afterBuild', 'cp -R _site/ru/* _site')

export default site
