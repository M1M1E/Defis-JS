window.onload = function () {

    let capitales = ['Berlin', 'Paris', 'Vienne' , 'Bruxelles' , 'Madrid' , 'Sofia'];
    let ol = document.createElement('ol');

    for(let i = 0; i< capitales.length; i++) {
        let li = document.createElement('li'); // création d'une 'li'
        li.innerText = capitales[i].toUpperCase(); // affiche le texte en majuscule
        ol.append(li); // ecrit la liste 'li' dans le "ol" 

    }

    document.querySelector('body').append(ol);

}