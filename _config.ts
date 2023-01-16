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
              blue: '#0abab5',
            },
          },
          fontFamily: {
            rubik: ['Rubik'],
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

export default site
