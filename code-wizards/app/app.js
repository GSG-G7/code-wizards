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
    
const scrollBtn = document.getElementById('upBtn');

window.addEventListener('scroll',()=>{
    let heightlimit = window.innerHeight;
    window.scrollY > heightlimit ? 
    scrollBtn.classList.add('showUpBtn'):scrollBtn.classList.remove('showUpBtn');
})

scrollBtn.addEventListener('click',()=>{
    let rate = 20;
    let decleration = setInterval(()=>{
        let curruntHeight = document.documentElement.scrollTop;
        document.documentElement.scrollTop = curruntHeight - rate;
        rate = 1.2 * rate ;
        if(document.documentElement.scrollTop <= 0 ) clearInterval(decleration);
        
    },30)
})
//caption my elements I will work with
const go = document.querySelector('#go');
const more = document.querySelector('#more');
const btn = document.querySelector('#btn');

//Read More button
btn.addEventListener('click', function() {
    if(go.style.display === 'none') {
        go.style.display = 'inline';
        btn.innerHTML = 'Read More';
        more.style.display = 'none';
    } else {
        go.style.display = 'none';
        btn.innerHTML = 'Read Less';
        more.style.display = 'inline';
    }
});
