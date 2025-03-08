let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

ctx.font = 'bold 20px Verdana, Arial, serif';
ctx.strokeStyle = '#48B';
ctx.strokeText('Texte creux',25,100);

ctx.font = 'bold 20px Verdana,Ariel,serif';
ctx.fillStyle = '#48B';
ctx.fillText('Texte plein',225,100,);