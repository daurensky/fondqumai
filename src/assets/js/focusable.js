const focusable = document.querySelectorAll('[data-focusable]')

focusable.forEach(parent => {
  const item = parent.querySelector('[data-focusable-item]')

  parent.addEventListener('click', () => {
    item.classList.remove('invisible')

    if (item.dataset.focusableItem) {
      item.dataset.focusableItem.split(' ').forEach(className => {
        item.classList.remove(className)
      })
    }

    parent.classList.add('text-primary-tiffany')

    const closeFocusable = e => {
      if (e.target.closest('[data-focusable]') === parent) return

      item.classList.add('invisible')

      if (item.dataset.focusableItem) {
        item.dataset.focusableItem.split(' ').forEach(className => {
          item.classList.add(className)
        })
      }

      parent.classList.remove('text-primary-tiffany')

      removeEventListener('click', closeFocusable)
    }

    addEventListener('click', closeFocusable)
  })
})
