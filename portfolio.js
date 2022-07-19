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
    if (id) {
        switch (id) {
            case 'from-left': if (entry.isIntersecting) {entry.target.classList.add('from-left')}; break;
            case 'from-right':  if (entry.isIntersecting) {entry.target.classList.add('from-right')}; break;
            default: return;
        }
    } else {
        if (entry.isIntersecting) {entry.target.classList.add('roll-in')};
    }
})
}

const observer = new IntersectionObserver(handleObserve)

const slideFromLeft = document.querySelectorAll('#from-left')
slideFromLeft.forEach(element => observer.observe(element))

const slideFromRight = document.querySelectorAll('#from-right')
slideFromRight.forEach(element => observer.observe(element))

const rollIn = document.querySelectorAll('.skill')
rollIn.forEach(element => observer.observe(element))
