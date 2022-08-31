/* Traemos las etiquetas del HTML */
const estrellas = document.querySelector('#estrellas');
const luna = document.querySelector('#luna');
const montana = document.querySelector('#montana');
const montanasFront = document.querySelector('#montanasFront');
const text = document.querySelector('#text');
const btn = document.querySelector('#btn');
const descripcion = document.querySelector('#descripcion');
const header = document.querySelector('header');

/* Agregamos un evento al window  */
window.addEventListener('scroll', function(){
    let valor = this.window.scrollY;
    estrellas.style.left = valor * 0.25 + 'px';
    luna.style.top = valor * 1.05 + 'px';
    montana.style.top = valor * 0.5 + 'px';
    montanasFront.style.top = valor * 0 + 'px';
    text.style.marginRight = valor * 3 + 'px';
    text.style.marginTop = valor * 1.5 + 'px';
    btn.style.marginTop = valor * 1.6 + 'px';
    header.style.top = valor * 0.5 + 'px';
})