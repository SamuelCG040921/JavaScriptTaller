let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
console.log(msg.length);
// Imprima el resultado

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log(msg.toLowerCase());

// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
console.log(msg.includes("filtro"));

// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
console.log(msg.substring(112,122));

// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
console.log(msg.replaceAll(" ","-"));

// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.
function validar(msg) {
    msg=msg.toLowerCase();
 const vocales='aeiouáéíóú';
 let contador=0;
 for (let index = 0; index < msg.length; index++) {
   if (vocales.indexOf(msg[index])!==-1) {
     contador++
   }
 
 }
 return contador;
 }
 
 const cantidadDevocales=validar(msg);
 console.log(`la cadena tiene ${cantidadDevocales} vocales.`);

// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:
const textArea = document.getElementById('comment');
const errorMessage = document.getElementById('errorMessage');
const upperBtn = document.getElementById('btnUpper');
const lowerBtn = document.getElementById('btnLower');
const capBtn = document.getElementById('btnCap');
const counter = document.getElementById('counter');
const commentBtn = document.getElementById('btnComment');
const commentsList = document.getElementById('comments-list')


textArea.addEventListener('input', validateText);


function validateText(){
    const text = textArea.value;

    if(text.trim() !== text){
        errorMessage.textContent = 'El mensaje no puede tener espacios al principio o al final';
    }else{
        errorMessage.textContent = '';
    }
}

upperBtn.addEventListener('click', upperCase);
function upperCase(){
    const text = textArea.value;
    textArea.value = text.toUpperCase();
 }

 lowerBtn.addEventListener('click', lowerCase);
 function lowerCase(){
    const text = textArea.value;
    textArea.value = text.toLowerCase();
 }

 capBtn.addEventListener('click', capText);
 function capText(textArea) {
    const comment = textArea.value;
    const words = comment.split(' ');
    const capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    textArea.value = capitalizedWords.join(' ');
}

 textArea.addEventListener('input', countCharacters)

 function countCharacters(){
    const text = textArea.value;
    const maxCharacters = 255;
    const remainingChar = 255 - text.length;
    
    if(remainingChar >= 0){
        counter.textContent = remainingChar;
    }else {
        counter.textContent = "Limite de caracteres alcanzado!";
        textArea.value = text.substring(0, maxCharacters);
    }
 }

 commentBtn.addEventListener('click', createComment);

 function createComment(){
    const comment = textArea.value;
    if(comment.trim() !== ''){
        const newComment = document.createElement('li');
        newComment.innerHTML = `<p id="comment-color" ><strong>Usuario x:${comment}<strong></p>`;
        commentsList.appendChild(newComment);

        textArea.value = '';
        counter.textContent = '255';

        errorMessage.textContent = '';  
    }else{
        errorMessage.textContent = 'Error, el comentario no puede estar vacio';
    }
 }

 
// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes