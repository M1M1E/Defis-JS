
window.onload = function() 
{

let name = prompt("Entrez votre nom");
let firstname = prompt("Entrez votre prénom");

let p = document.createElement('p');//création d'un élément P 
p.innerText = `Votre prénom est ${firstname} et votre nom est ${name}`;

document.querySelector('body').append(p); // écrit dans le body l'élément P créé

}


