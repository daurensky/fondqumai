import { posix } from 'https://deno.land/std@0.171.0/path/mod.ts'
import type { Page } from 'lume/core/filesystem.ts'
import type Site from 'lume/core/site.ts'

const containerId = 'search'
const bundleDirectory = 'pagefind'
const searchParam = 'q'

const initSearch = (page: Page, site: Site) => {
  const { document } = page
  if (!document) {
    return
  }
  const container = document.getElementById(containerId)

  // Insert UI styles and scripts
  if (container) {
    const styles = document.createElement('link')
    styles.setAttribute('rel', 'stylesheet')
    styles.setAttribute(
      'href',
      site.url(`${posix.join(bundleDirectory, 'pagefind-ui.css')}`)
    )

    // Insert before other styles to allow overriding
    const first = document.head.querySelector('link[rel=stylesheet],style')
    if (first) {
      document.head.insertBefore(styles, first)
    } else {
      document.head.append(styles)
    }

    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      site.url(`${posix.join(bundleDirectory, 'pagefind-ui.js')}`)
    )

    const uiSettings = {
      element: `#${containerId}`,
      showImages: false,
      showEmptyFilters: false,
      resetStyles: false,
      bundlePath: site.url(posix.join(bundleDirectory, '/')),
      baseUrl: site.url('/'),
      translations: [],
    }
    const init = document.createElement('script')
    init.setAttribute('type', 'text/javascript')
    init.innerHTML = `
      if (new URLSearchParams(location.search).get('${searchParam}')) {
        window.addEventListener('DOMContentLoaded', () => {
          var pagefindUI = new PagefindUI(${JSON.stringify(uiSettings)});
          pagefindUI.triggerSearch(new URLSearchParams(location.search).get('${searchParam}').trim())
        });
      };
    `
    document.head.append(script, init)
  }
}

export default initSearch
