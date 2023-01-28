const times = document.querySelectorAll('[data-relative-time]')

times.forEach(time => {
    time.innerHTML = moment(new Date(time.innerHTML)).fromNow()
})