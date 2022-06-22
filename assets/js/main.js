/*==================== MENU/ MENU OCULTO ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU =====*/
/* Valida se a condição existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Valida se a condição existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVEDOR DO MENU (MOBILE) ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicar em cada nav__link, removerá a classe "show-menu"
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => { 
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== MODAL (DEVS) ====================*/
const modalView = document.querySelectorAll('.developers__modal'),
      modalBtn = document.querySelectorAll('.developers__img'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modals = function(modalClicks){
    modalView[modalClicks].classList.add('active-modal')
}

modalBtn.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () =>{
        modals(i)
    })
})

modalClose.forEach((modalCloses) => { 
    modalCloses.addEventListener('click', () =>{
        modalView.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})


/*==================== FIRES SWIPER ====================*/
let swiperFires = new Swiper('.fires__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== MUDANÇA DE COR DO CABEÇALHO ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // Quando o "scroll" for maior que a altura "viewport" de 200, adicione a classe scroll-header à tag "CABEÇALHO"
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== VOLTAR AO TOPO ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Quando o "scroll" for maior que a altura "viewport" de 560, adicione a classe scroll-header à tag "CABEÇALHO"
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== MODO ESCURO ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Tópico selecionado anteriormente (se o usuário selecionou)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface tem validando a classe "dark-theme"
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Validamos se o usuário escolheu anteriormente um tema
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual era a condição para saber se ativamos ou desativamos o dark mode
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativar /desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o ícone do tema escuro
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

