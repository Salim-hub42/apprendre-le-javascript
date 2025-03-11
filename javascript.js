function creerCookie(nom,valeur,jours){
    //*On initialise la variable expires à une chaine de caractère vide*//
    let expires = "";
    //*Si les jours on bien été définis*//
    if (jours){
    //* On creer un objet date stockant la date actuelle*//
        let date = new Date();
        //* On définit la date d'expiration du cookie*//
        date.setTime(date.getTime()+(jours*24*60*60*1000));
        //*On met la date au bon format pour le cookie*//
        let expires = "; expires="+date.toGMTString();
    }
    document.cookie = nom+"="+valeur+expires+"; path=/";
}
function LireCookie(nom){
    //* On récupère le nom du cookie et le signe "=" *//
    let nomEtEgal = nom + "=";
    //*récupère tous les cookie dans un tableau *//
    let cTableau = document.cookie.split(';');
    //*parcourire le tableau *//
    for(let i=0; i<cTableau.length; i++){
        //*On récupère tous les noms et valeurs de cookies *//
        let c = cTableau[i];
        //*On supprime les espaces potentiels dans c jusqu'à trouver le nom du cookie*//
        while (c.charAt(0)==' '){
            c = c.substring(1,c.length);
        }if(c.indexOf(nomEtEgal) == 0){
            return c.substring(nomEtEgal.length,c.length);
        
         }
        }
        //*Si le nom du cookie n'est pas trouvé , il n'existe pas *//
        return null;
    }
    function SupprimerCookie(nom){
        //*On donne le nom du cookie à supprimer , puis on utilise la fonction creerCookie pour le supprimer*//
        creerCookie(nom,"",-1);
    }
    //* On creer deux cookies*//
    creerCookie('cookie1','je suis le premier cookie',7);
    creerCookie('cookie2','je suis le deuxième cookie',7);

    SupprimerCookie('cookie1');

    let affiche = document.getElementById('cook');
    affiche.innerHTML = LireCookie('cookie1') ;
    
          