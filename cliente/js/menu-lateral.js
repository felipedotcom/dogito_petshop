const iconeMenu = document.querySelector('.menu-hamburguer')
const menu = document.querySelector('.menu-cabecalho')
const botaoFechar = document.querySelector('.menu-cabecalho__fechar')

iconeMenu.addEventListener('click', () => {
   iconeMenu.classList.add('menu-hamburguer--ativo')
   menu.classList.add('menu-cabecalho--ativo')
})

menu.addEventListener('click', (event) => {
    if(event.target == botaoFechar) {
        iconeMenu.classList.remove('menu-hamburguer--ativo')
        menu.classList.remove('menu-cabecalho--ativo')
    }
})
