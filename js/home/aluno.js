'use strict'


const botao = document.getElementById('categoria-button')
const nav = document.getElementById('nav-categoria')

botao.addEventListener('click', ()=> {
    console.log(nav.style.transform);
    if(nav.style.transform == '' || nav.style.transform == 'translateX(100%)'){
        nav.style.transform = 'translateX(0)'
    } else{
        nav.style.transform = 'translateX(100%)'

    }
    
})
