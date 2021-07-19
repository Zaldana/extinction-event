//Variable Definitions & Functions=====================================

const ol = document.querySelectorAll('ol li');
const ul = document.querySelectorAll('ul li');
const images = document.querySelectorAll('section img');
const button = document.querySelector('button');
const strike = function (elem) { elem.style.textDecoration = 'line-through'; };
const fade = function (elem) { elem.style.opacity = "0.5"; };
const collapse = function (elem) { elem.style.width = "0px"; };

//Events===============================================================

ol.forEach(element => {
    element.addEventListener('click', function () {
        strike(element); 
    });
 });

ul.forEach(element => {
    element.addEventListener('click', function () {
        fade(element); 
    });
});

images.forEach(element => {
    element.addEventListener('click', function () {
        collapse(element); 
    });
});

button.addEventListener('click', function () {

    ol.forEach(element => {
            strike(element);
    });

    ul.forEach(element => {
        fade(element);
    });

    images.forEach(element => {
        collapse(element);
    });
});
