let carre = document.getElementById('carre');
let nombreActions = 0;

const bouton = document.querySelector('#carre');

carre.addEventListener('click', function() {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  nombreActions++;
  carre.style.left = x + 'px';
  carre.style.top = y + 'px';
});

const span = document.querySelector('#nombreActions');
span.textContent = nombreActions