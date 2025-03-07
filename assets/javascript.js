let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#4C8';
ctx.arc(75, 100, 50, 0, Math.PI);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#A4A';
ctx.arc(200, 100, 50, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#48C';
ctx.arc(325, 100, 50, Math.PI, 2*Math.PI);
ctx.fill();