let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'red';
ctx.moveTo(100, 50);
ctx.lineTo(300, 150);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = '10';
ctx.strokeStyle = '#C24';
ctx.moveTo(300, 160);
ctx.lineTo(100, 160);
ctx.stroke();