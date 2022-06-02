
const topBtn = document.querySelector('.btnScrollTop')

window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 100) {
        topBtn.classList.add('active')
    }else{
        topBtn.classList.remove('active')

    }
})

topBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
    })
})

function toggleMenu(){
    const navbar = document.querySelector('nav ul')
    const check = document.querySelector('toggle input')
    navbar.classList.toggle('slide')

}

window.addEventListener('scroll', reveal)
function reveal () {
    var reveal = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top
        var revealPoint = 150

        if (revealTop < windowHeight -revealPoint) {
            reveal[i].classList.add('show')
        }else {
            reveal[i].classList.remove('show')

        }
        
    }
}