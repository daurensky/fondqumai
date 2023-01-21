const focusable = document.querySelectorAll('[data-focusable]')

focusable.forEach(parent => {
  const item = parent.querySelector('[data-focusable-item]')

  parent.addEventListener('click', () => {
    item.classList.remove('invisible')
    parent.classList.add('text-primary-tiffany')

    const closeFocusable = e => {
      if (e.target.closest('[data-focusable]') === parent) return

      item.classList.add('invisible')
      parent.classList.remove('text-primary-tiffany')

      removeEventListener('click', closeFocusable)
    }

    addEventListener('click', closeFocusable)
  })
})
