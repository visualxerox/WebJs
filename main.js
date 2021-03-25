
AOS.init();
//Para esconder el menu
 let ubicacionPrincipal = window.pageYOffset; //nos muestra la ubicacion actual en la cual nos mencontramos en la pagina//

//dime en que  parte esta el usuario
//window.addEventListener('scroll', function(){
  //  console.log(window.pageYOffset)
//})

//para esconder el menu 

window.addEventListener('scroll', function(){
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName('nav')[0].style.top = '0px'
    } else {
        document.getElementsByTagName('nav')[0].style.top = '-100px'
    }
    //para que se vuelva a mostrar el menu cada vez que hagamos scrooll hacia arriba
    //referescamos la actualizacion
    ubicacionPrincipal=desplazamientoActual;
    //si queremos que el menu quede fijo mientras se hace scrool solo se comenta la linea de codigo en la linea 20
})


Menu

let enlacesHeader = document.querySelectorAll('.enlaces-header')[0];
let semaforo = true;

document.querySelectorAll('.hamburguer')[0].addEventListener('click', function(){

    //el if es para cambiar de color el menu hamburguesa
    if(semaforo){
        document.querySelectorAll('.hamburguer')[0].style.color = '#fff';
        semaforo = false;
    }else{
        document.querySelectorAll('.hamburguer')[0].style.color = '#000';
        semaforo= true;
    }
    enlacesHeader.classList.toggle('menudos')
})

