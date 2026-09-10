const botonDelCaos = document.querySelector('.boton-del-caos');


//Boton que muestra el boton del caos ej. mostrar un texto en pantalla, cambiar el color de fondo, etc.
botonDelCaos.addEventListener('click', () => {
  // Código para manejar el clic en el botón del caos
  console.log('¡Botón del caos clicado!');
  botonDelCaos.style.backgroundColor = '#00ff00';
  botonDelCaos.style.color = '#000000';
  botonDelCaos.textContent = '¡Caos activado!';
  botonDelCaos.style.fontSize = '200px';
})