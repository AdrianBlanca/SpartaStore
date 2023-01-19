/*MENU RESPONSIVE*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*CAMBIO ENTRE IMAGENES EN PRODUCTO1*/
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}

/*CUESTIONARIO DE SATISFACCION*/
function alertEncuesta() {
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) 
    alert("¡ERROR! CUESTIONARIO VACÍO");
    else {
        alert("CUESTIONARIO ENVIADO CON ÉXITO");
        clearRadioButtons();
    }
}
function clearRadioButtons()
{
    var radioButtonArray = document.getElementsByClassName('rb');

    for (var i=0; i<radioButtonArray.length; i++)
    {
        var radioButton = radioButtonArray[i];
        radioButton.checked = false;
    }
}