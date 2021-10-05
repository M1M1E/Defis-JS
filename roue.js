window.onload = function() {

setTimeout(hiderLoader, 3000);

}

function hiderLoader() {

    let hauteur = window.innerHeight;
    document.querySelector('#loadingAnimation').style.top = `-${hauteur}px`;
    //permet de faire disparaitre la fenetre vers le haut en glissant

}