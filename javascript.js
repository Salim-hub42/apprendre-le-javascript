let b = document.getElementById('test');
b.addEventListener('click', testValeur);
function testValeur() {
    let p = document.getElementById('msg');
    let x = document.getElementById('nb').value;

    try {
        if (isNaN(x) || x == '') {
            throw 'Vous n\'avez pas saisi de nombre valide';
        } else if (x < 1 || x > 10) {
            throw 'Veuillez saisir un nombre entre 1 et 10';
        } else {
            p.innerHTML = 'Bravo';
        }
    } catch (error) {
        p.innerHTML = error;
    }
    finally{
        document.getElementById('nb').value = '';
    }
}

    
          