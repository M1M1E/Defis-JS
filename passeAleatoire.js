window.onload = function() {
    //on applique un écouteur d'evenement sur le bouton
    document.querySelector('button').addEventListener('click', randomPassword);
    
}

function randomPassword() {

  let min = 8; // nb minimal de 8
  let max = 16; // nb maximal de 16
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //Math.random() genere un nb entre 0 et 0.99. 
  //il sera multiplié par la différence entre min et max
  // Math.random() donnera un nb compris entre 0 et 8
  let maxLoop = Math.floor(Math.random() *  (max - min + 1) + min);

  let password ='';

  for(let i = 0; i < maxLoop; i++) {
      //genere un nb aléatoire pas plus grand que
      // le nb de carcaterre compris dans la chaine "chars"
    let random = Math.floor(Math.random() * chars.length );

    //retourne un caractere de 'chars' selon un indice de debut et de fin
    password += chars.substring(random, random + 1);
  }

  //affiche le resultat dans la balise 'p' sélectionnée
    document.querySelector('p').innerText = password;
}