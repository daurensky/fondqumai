import lume from 'lume/mod.ts'
import multilanguage from 'lume/plugins/multilanguage.ts'
import postcss from 'lume/plugins/postcss.ts'
import pug from 'lume/plugins/pug.ts'
import tailwindcss from 'lume/plugins/tailwindcss.ts'
import basePath from 'lume/plugins/base_path.ts'

const site = lume({
  src: './src',
})

site.use(
  tailwindcss({
    options: {
      theme: {
        extend: {
          colors: {
            primary: {
              tiffany: '#09b8b6',
              white: '#e9eee0',
              gray: '#8b8778',
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

site.copy('assets/img')
site.copy('assets/pdf')
site.copy('assets/js')

site.addEventListener('afterBuild', 'cp -R _site/ru/* _site')

export default site
