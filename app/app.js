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
