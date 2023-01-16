import lume from 'lume/mod.ts'
import multilanguage from 'lume/plugins/multilanguage.ts'
import postcss from 'lume/plugins/postcss.ts'
import pug from 'lume/plugins/pug.ts'
import tailwindcss from 'lume/plugins/tailwindcss.ts'

const site = lume({
  src: './src',
  location: new URL("https://daurensky.github.io/fondqumai"),
})

site.use(
  tailwindcss({
    options: {
      theme: {
        extend: {
          colors: {
            primary: {
              blue: '#008dd2',
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

site.copy('assets/img')

export default site
