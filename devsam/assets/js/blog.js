// Datos de ejemplo para las cards
const cardsData = [
  {
    image: '../images/blog/Varios/principal-blog-1.webp',
    title: 'Guía Definitiva para Arrancar tu Negocio Online desde Cero',
    paragraph: 'Si sos un emprendedor con todas las pilas y estás listo para meterle ficha al mundo del comercio online, estás en el lugar indicado. En este artículo, te vamos a dar todos los tips para que puedas arrancar un negocio online desde cero y hacerlo rebotar en grande. No importa si querés vender productos físicos, digitales o servicios, estos pasos te van a ayudar a sentar las bases de tu emprendimiento digital.'
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Título de la Card 2',
    paragraph: 'Descripción de la Card 2'
  },
  // Agrega más datos de ejemplo aquí
];

const cardContainer = document.getElementById('card-container');

// Función para crear las cards dinámicamente
function createCards() {
  for (let i = 0; i < cardsData.length; i++) {
    const cardData = cardsData[i];

    // Crear elemento de la card
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    // Crear imagen de la card
    const imageElement = document.createElement('img');
    imageElement.src = cardData.image;
    cardElement.appendChild(imageElement);

    // Crear título de la card
    const titleElement = document.createElement('h2');
    titleElement.classList.add('card-title');
    titleElement.textContent = cardData.title;
    cardElement.appendChild(titleElement);

    // Crear párrafo de la card
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('card-paragraph');
    paragraphElement.textContent = cardData.paragraph;
    cardElement.appendChild(paragraphElement);

    // Agregar card al contenedor
    cardContainer.appendChild(cardElement);

    // Agregar evento de clic a la card
    cardElement.addEventListener('click', () => {
      // Redirigir al otro documento HTML al hacer clic en la card
      window.location.href = 'ruta/al/otro/documento.html';
    });
  }
}

// Llamar a la función para crear las cards
createCards();
