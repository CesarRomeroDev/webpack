import '../css/components.css';
// import webpaacklogo from '../assets/img/webpack-logo.png'



export const saludar = (nombre) => {
    

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;
    document.body.append(h1);
}

//img
// console.log(webpaacklogo);
// const img = document.createElement('img');
// img.src = webpaacklogo;
// document.body.append( img );