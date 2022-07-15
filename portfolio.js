const handleToggle = () => {
    const nav = document.querySelector("nav")
    nav.classList.toggle("close")
}

const handleClose = () => {
    const nav = document.querySelector("nav")
    nav.className = "close"
}

const handleObserve = (entries) => {
entries.forEach(entry => {
    const id = entry.target.id
    switch (id) {
        case 'from-left': entry.target.classList.toggle('from-left', entry.isIntersecting); break;
        case 'from-right': entry.target.classList.toggle('from-right', entry.isIntersecting); break;
        default: return;
    }
})
}

const observer = new IntersectionObserver(handleObserve)

const slideFromLeft = document.querySelectorAll('#from-left')
slideFromLeft.forEach(element => observer.observe(element))

const slideFromRight = document.querySelectorAll('#from-right')
slideFromRight.forEach(element => observer.observe(element))



