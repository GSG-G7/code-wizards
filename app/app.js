const nav = document.querySelector('.home__header-navbar');
const toggle = document.querySelector('.home__label');
const intro = document.querySelector('.home__intro');

toggle.addEventListener('click', function(){
    if (nav.className.includes('hide')){
        nav.classList.remove('hide');
        intro.classList.add('hide');
    }
    else {
        intro.classList.remove('hide');
        nav.classList.add('hide');
    }
    
})
