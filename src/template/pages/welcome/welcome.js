import '../../../sass/main.scss';

let auth = document.querySelector('#auth');
let toMain = document.querySelector('#toMain');
let flip = document.querySelector('#flip');

auth.addEventListener('click', function(e) {
    e.preventDefault();
    flip.classList.toggle('flip');
    auth.style.display = 'none';
});

toMain.addEventListener('click', function(e) {
    e.preventDefault();
    flip.classList.toggle('flip');
    auth.style.display = 'block';
});
