document.addEventListener('DOMContentLoaded', function() {
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

let image = document.getElementById('image1');
image.addEventListener('load', affiche);
function affiche(){
ctx.drawImage(image,50,25,500,350);}
if (image.complete){
    affiche();
}else{console.log('image pas afficher');}
 });