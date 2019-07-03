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