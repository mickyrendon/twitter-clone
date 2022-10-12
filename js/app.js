const input = document.querySelector('.thinking')
const btn = document.querySelector('.tweeting-btn')

function validator(){
    let val = input.value
    if(val.length >= 1 ){
        input.addEventListener('keyup', validator, false)
        return btn.classList.add('active')
    }else{
        input.addEventListener('keyup', validator, true)
        return btn.classList.remove('active')
    }
}
validator()
// /////////////////////////////////////////////////////////
// TODO:recorrer el array para clickear cualquier btn y abrir el menu
const menuDots = document.querySelectorAll('.menu-dots-a')
const modal =  document.querySelector('.modal')
const menuOpts = document.querySelector('.opts-menu')

menuDots.forEach((e)  => {
    e.addEventListener('click', checkStyle)
})

modal.addEventListener('click', () => {
    modal.style.display = 'none'
    menuOpts.style.display = 'none'
})

function checkStyle(){
    const body = document.body
    const media = window.matchMedia("(max-width: 539px)").matches
    if( media && menuOpts.style.display === 'none'){
        body.style.overflow = 'hidden'
        modal.style.display = 'flex'
        return menuOpts.style.display = 'flex'

    }else{
        console.log('ventana muy grande para el menu, verlo en mobile');
        return menuOpts.style.display = 'none'
    }
}

window.onload = checkStyle, modal;