 // Función para cambiar el tamaño del body
 function changeBodySize(minWidth, maxWidth) {
  var body = document.body;
  var width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  body.style.width = width + "px";
}

// Funciones para la calculadora
function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

// Datos de ejemplo (simulando una base de datos)
const alumnos = [
    { nombre: "Juan", apellido: "Pérez", carrera: "Informatica", cuenta: "412158497" },
    { nombre: "María", apellido: "López", carrera: "Agricola", cuenta: "318452687" },
    { nombre: "Carlos", apellido: "Sánchez", carrera: "Medicina", cuenta: "418965237" },
    {nombre: "Juan", apellido: "Pérez", carrera: "Informatica", cuenta: "412158497"},
    {nombre: "Sofía", apellido: "Fernández", carrera: "Arquitectura", cuenta: "419658742"}
];

// Función para mostrar información de los alumnos y mostrar todas las imágenes en el carrusel
function mostrarInformacion(campo) {
  let infoHTML = '';
  if (campo === 'todo') {
    const filas = alumnos.map(alumno => `<tr><td>${alumno.nombre}</td><td>${alumno.apellido}</td><td>${alumno.carrera}</td><td>${alumno.cuenta}</td></tr>`).join('');
    infoHTML = `<table><tr><th>Nombre</th><th>Apellido</th><th>Carrera</th><th>No.cuenta</th></tr>${filas}</table>`;
  } else {
    const datos = alumnos.map
//Funcion para el carrusel
let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        if (index < 0 || index >= totalItems) return;
        items.forEach(item => item.classList.remove('active')); // Oculta todas las imágenes
        items[index].classList.add('active'); // Muestra solo la imagen en el índice actual
        currentIndex = index;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    setInterval(nextItem, 3000); // Cambia de imagen cada 3 segundos
  
  
  
