let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
let radial = ctx.createRadialGradient(200,100,20,200,100,75);

radial.addColorStop(0, '#4C8');
radial.addColorStop(0.25,'#48C');
radial.addColorStop(1, '#A4A');
ctx.beginPath();
ctx.fillStyle = radial;
ctx.arc(200,100,75,0,2*Math.PI);
ctx.fill();