window.onload = function () {

    let movies = ['seigneur' , 'matrix' , 'shutter' , 'inception'];
    let random = movies[Math.floor(Math.random() * movies.length) ];


    let p = document.createElement('p');
    p.innerText = random;
    document.querySelector('body').append(p);

}