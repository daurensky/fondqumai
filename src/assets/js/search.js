const urlParams = new URLSearchParams(location.search)
const query = urlParams.get('q').trim()

document.querySelector('[name=q]').value = query