
import '../css/componentes.css';
//import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'sin nombre') => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre} !!!`;
    const h2 = document.createElement('h2');
    h2.innerText= "bienvenido al curso de javaScript moderno ";

    document.body.append(h1, h2);

    //img
  //  console.log(webpacklogo);
   // const img = document.createElement('img');
    //img.src= webpacklogo;
    //document.body.append(img);
   
}
