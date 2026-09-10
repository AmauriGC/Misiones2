const botonCaos = document.getElementById('boton-caos');
const mensajeCaos = document.getElementById('caos-mensaje');
const nivelCaos = document.getElementById('caos-nivel');
const contenedorConfeti = document.getElementById('caos-confeti');

const mensajes = [
  '¡HAS DESPERTADO ALGO QUE NO DEBERIAS!',
  'EL CAOS AUMENTA...',
  'NADIE ESTA A SALVO AHORA',
  'ESTO NO TIENE VUELTA ATRAS',
  '¿SIENTES ESE TEMBLOR?',
  'ERROR 404: CORDURA NO ENCONTRADA',
  'SIGUE PRESIONANDO, NO PASA NADA MALO',
  'ACABAS DE GANAR UN VIRUS GRATIS (mentira)',
  '¡CAOS TOTAL DESATADO!',
  'ALGUIEN EN GEOCITIES SINTIO ESO',
];

const emojis = ['★', '☆', '♪', '♥', '☠', '⚡', '❢', '☺', '웃', '✿'];

const colores = [
  '#ff0000', '#00ff00', '#0000ff', '#ffff00',
  '#ff00ff', '#00ffff', '#ff8800', '#8800ff', '#ffffff', '#000000',
];

let contador = 0;

function elegirAlAzar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function agitarPantalla() {
  document.body.classList.remove('caos-shake');
  void document.body.offsetWidth;
  document.body.classList.add('caos-shake');
}

let temporizadorGiro = null;

function girarBoton() {
  botonCaos.classList.add('caos-girando');
  clearTimeout(temporizadorGiro);
  temporizadorGiro = setTimeout(() => {
    botonCaos.classList.remove('caos-girando');
  }, 2700);
}

function cambiarFondo() {
  document.body.style.backgroundColor = elegirAlAzar(colores);
}

function lanzarConfeti() {
  const cantidad = 18;
  for (let i = 0; i < cantidad; i++) {
    const particula = document.createElement('span');
    particula.className = 'caos-particula';
    particula.textContent = elegirAlAzar(emojis);
    particula.style.left = `${Math.random() * 100}vw`;
    particula.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    const duracion = 1.5 + Math.random() * 1.5;
    particula.style.animationDuration = `${duracion}s`;
    contenedorConfeti.appendChild(particula);
    setTimeout(() => particula.remove(), duracion * 1000);
  }
}

function activarCaos() {
  contador += 1;
  nivelCaos.textContent = contador;
  mensajeCaos.textContent = elegirAlAzar(mensajes);

  agitarPantalla();
  girarBoton();
  cambiarFondo();
  lanzarConfeti();

  botonCaos.textContent = `${elegirAlAzar(emojis)} BOTON DEL KAOS ${elegirAlAzar(emojis)}`;
}

botonCaos.addEventListener('click', activarCaos);

cambiarFondo();
setInterval(cambiarFondo, 2500);


const imagen = document.getElementById("imagen");

    imagen.addEventListener("click", () => {
      // Posición aleatoria dentro de la pantalla
      const maxX = window.innerWidth - imagen.offsetWidth;
      const maxY = window.innerHeight - imagen.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      imagen.style.left = `${x}px`;
      imagen.style.top = `${y}px`;

      // Rotación aleatoria
      const rotacion = Math.random() * 360;
      imagen.style.transform = `rotate(${rotacion}deg)`;

      // Color aleatorio para el fondo
      const color = `hsl(${Math.random() * 360}, 70%, 20%)`;
      document.body.style.background = color;
    });
