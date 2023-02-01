const timeElements = document.querySelectorAll('[data-relative-time]')

timeElements.forEach(time => {
    time.innerHTML = moment(new Date(time.innerHTML)).fromNow()
})