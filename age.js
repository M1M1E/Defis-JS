window.onload = function () {

    let age = Number(prompt ("Ton age ?"));
    let p = document.createElement('p');

    if(age >= 18) {
p.innerText = 'Tu es majeur';
    }
    else{
        p.innerText = 'Tu es mineur'; 
    }

    document.querySelector('body').append(p);


}