console.time('Execution Time');
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
ctx.translate(300, 200);


ctx.rotate(Math.PI /2);
ctx.fillStyle = 'rgba(64, 192, 128, 0.6)';
ctx.fillRect(0, 0, 75, 75);

ctx.rotate(Math.PI /2);
ctx.fillStyle = 'rgba(192, 64, 192, 0.6)';
ctx.fillRect(0, 0, 75, 75);

ctx.rotate(Math.PI /2);
ctx.fillStyle = 'rgba(50, 21, 214, 0.85)';
ctx.fillRect(0, 0, 75, 75);

ctx.rotate(Math.PI /2);
ctx.fillStyle = '#e6581f';
ctx.fillRect(0, 0, 75, 75);
console.timeEnd('Execution Time');