let bnt = document.getElementById('btn');
let body = document.body;
bnt.addEventListener('click', couleur);
function couleur(){
setTimeout((function(){body.style.backgroundColor = '#3BA'}), 200);
setTimeout((function(){body.style.backgroundColor = '#4Ab'}), 400);
setTimeout((function(){body.style.backgroundColor = '#59B'}), 600);
setTimeout((function(){body.style.backgroundColor = '#66B'}), 800);
setTimeout((function(){body.style.backgroundColor = '#63B'}), 1000);
setTimeout((function(){body.style.backgroundColor = '83A'}), 1200);
setTimeout((function(){body.style.backgroundColor = '#A3A'}), 1400);
setTimeout((function(){body.style.backgroundColor = '#A59'}), 1600);
setTimeout((function(){body.style.backgroundColor = '#A77'}), 1800);
setTimeout((function(){body.style.backgroundColor = '#995'}), 2000);
}
