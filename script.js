const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navlist')

menu.onclik = () => {
    menu.classList.toggle('bx-x')
    navlist,classList.toggle('open')
}

const sr = scrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origen: 'top'})
sr.reveal('.hero-img', {delay: 450, origen: 'top'})
sr.reveal('.icons', {delay: 500, origen: 'left'})
sr.reveal('.scroll-down', {delay: 450, origen: 'right'})