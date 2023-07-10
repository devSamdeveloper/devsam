const navEl = document.getElementById("nav-mobile-menu");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[0].classList.toggle("mobile-menu");
});

function agregarNuevaCard(blog) {
  // Crear elementos
  let nuevaCard = document.createElement('a');
  let blogImg = document.createElement('div');
  let img = document.createElement('img');
  let blogContent = document.createElement('div');
  let blogTitle = document.createElement('h2');
  let blogDesc = document.createElement('p');
  let blogDetails = document.createElement('div');
  let blogAuthorImg = document.createElement('div');
  let authorImg = document.createElement('img');
  let blogAuthorDetails = document.createElement('div');
  let blogAuthorName = document.createElement('h4');
  let blogAuthorDesig = document.createElement('div');

  // Añadir clases a los elementos
  nuevaCard.className = 'blog';
  blogImg.className = 'blog-img';
  blogContent.className = 'blog-content';
  blogTitle.className = 'blog-title';
  blogDesc.className = 'blog-desc';
  blogDetails.className = 'blog-details';
  blogAuthorImg.className = 'blog-author-img';
  blogAuthorDetails.className = 'blog-author-details';
  blogAuthorName.className = 'blog-author-name';
  blogAuthorDesig.className = 'blog-author-desig';

  // Añadir contenido a los elementos
  nuevaCard.href = blog.url;
  img.src = blog.imgSrc;
  img.alt = blog.imgAlt;
  blogTitle.textContent = blog.title;
  blogDesc.textContent = blog.desc;
  authorImg.src = blog.authorImgSrc;
  authorImg.alt = '';
  blogAuthorName.textContent = blog.authorName;
  blogAuthorDesig.textContent = blog.authorDesig;

  // Ensamblar la card
  blogImg.appendChild(img);
  blogAuthorImg.appendChild(authorImg);
  blogAuthorDetails.appendChild(blogAuthorName);
  blogAuthorDetails.appendChild(blogAuthorDesig);
  blogDetails.appendChild(blogAuthorImg);
  blogDetails.appendChild(blogAuthorDetails);
  blogContent.appendChild(blogTitle);
  blogContent.appendChild(blogDesc);
  blogContent.appendChild(blogDetails);
  nuevaCard.appendChild(blogImg);
  nuevaCard.appendChild(blogContent);

  // Añadir la card a la sección
  let section = document.querySelector('.blog-grid');
  section.appendChild(nuevaCard);
}

// Uso de la función
let nuevoBlog4 = {
  url: './blogposts/4blog.html',
  imgSrc: './assets/images/blog/Varios/blog4preview.jpg',
  imgAlt: 'Imagen que representa clientes fieles',
  title: '¡Leales como nadie! Aprende a Fidelizar a tus Clientes',
  desc: 'Sabemos lo importante que es para vos mantener a tus clientes felices y satisfechos. La fidelización de clientes es clave para el éxito a largo plazo de tu negocio. En este artículo, te revelaremos algunas estrategias infalibles para que tus clientes se queden con vos, vuelvan por más y te recomienden a todos sus amigos. Preparáte para construir relaciones duraderas y convertir a tus clientes en verdaderos fans. ¡Acompañanos en este viaje hacia la fidelización!',
  authorImgSrc: './assets/images/seba.png',
  authorName: 'Sebastian M',
  authorDesig: 'Developer | Creativo Digital',
};
agregarNuevaCard(nuevoBlog4);

let nuevoBlog5 = {
  url: './blogposts/5blog.html',
  imgSrc: './assets/images/blog/Varios/blog5preview.jpg',
  imgAlt: 'Imagen que representa el seo',
  title: '¡Posicionate como el número 1! Cómo armar una estrategia de SEO efectiva para destacarte en línea.',
  desc: 'Si querés ganar la batalla en línea y ser el número 1 en los resultados de búsqueda, necesitás una estrategia de SEO efectiva. El SEO (Search Engine Optimization) es el arma secreta para aumentar la visibilidad de tu sitio web y atraer más tráfico orgánico. En este artículo, te revelaremos las claves para armar una estrategia de SEO imbatible y lograr que tu negocio se destaque en los motores de búsqueda. ¡Preparáte para conquistar los primeros puestos en Google!.',
  authorImgSrc: './assets/images/seba.png',
  authorName: 'Sebastian M',
  authorDesig: 'Developer | Creativo Digital',
};
agregarNuevaCard(nuevoBlog5);

let nuevoBlog6 = {
  url: './blogposts/6blog.html',
  imgSrc: './assets/images/blog/Varios/blog6.jpg',
  imgAlt: 'Imagen que representa el ecommerce',
  title: '¡Conquistá el mundo del e-commerce! Tendencias de comercio electrónico que arrasan en Argentina y en el mundo.',
  desc: '¡Hola, emprendedor digital! El comercio electrónico ha experimentado un crecimiento explosivo en los últimos años, tanto en Argentina como en el mundo. Si querés destacarte en el mundo del e-commerce, es fundamental estar al tanto de las tendencias actuales que están revolucionando la forma en que compramos y vendemos en línea. En este artículo, te contaremos sobre las tendencias más destacadas que están arrasando en Argentina y en el escenario global. ¡Preparáte para conquistar el mundo del comercio electrónico!.',
  authorImgSrc: './assets/images/seba.png',
  authorName: 'Sebastian M',
  authorDesig: 'Developer | Creativo Digital',
};

agregarNuevaCard(nuevoBlog6);

let nuevoBlog7 = {
  url: './blogposts/7blog.html',
  imgSrc: './assets/images/blog/Varios/blog7preview.jpg',
  imgAlt: 'Imagen que representa la conversion de un sitio web',
  title: '¡Aumentá tus ventas en línea! Consejos infalibles para mejorar la conversión de tu tienda online',
  desc: 'Si tenés una tienda online, sabés que la clave para el éxito radica en convertir visitantes en clientes. En este artículo, te compartiremos consejos infalibles para mejorar la conversión de tu tienda online y aumentar tus ventas. Desde la optimización del sitio web hasta la creación de llamadas a la acción irresistibles, estás a punto de descubrir las estrategias que te ayudarán a convertir más visitantes en compradores. ¡Preparáte para aumentar tus conversiones y alcanzar el éxito en línea!',
  authorImgSrc: './assets/images/seba.png',
  authorName: 'Sebastian M',
  authorDesig: 'Developer | Creativo Digital',
};
agregarNuevaCard(nuevoBlog7);

let nuevoBlog8 = {
  url: './blogposts/8blog.html',
  imgSrc: './assets/images/blog/Varios/blog8preview.png',
  imgAlt: 'Imagen que representa el pricing',
  title: '¡Precios que generan ganancias! Estrategias de pricing para maximizar tus ingresos',
  desc: ' Si querés aumentar tus ingresos, una estrategia de pricing efectiva es clave. En este artículo, te compartiremos estrategias infalibles para establecer precios que te permitan maximizar tus ganancias. Desde la fijación de precios basada en el valor hasta la segmentación de precios, estás a punto de descubrir las tácticas que te ayudarán a obtener el máximo rendimiento de cada venta. ¡Preparáte para generar ganancias con estrategias de pricing inteligentes!',
  authorImgSrc: './assets/images/seba.png',
  authorName: 'Sebastian M',
  authorDesig: 'Developer | Creativo Digital',
};
agregarNuevaCard(nuevoBlog8);

let nuevoBlog9 = {
  url: './blogposts/9blog.html',
  imgSrc: './assets/images/blog/Varios/blog9preview.jpg',
  imgAlt: 'Imagen que representa el Neuromarketing',
  title: '¡Conquistá la mente del consumidor! Utilizá el neuromarketing para influir en la decisión de compra.',
  desc: ' Si querés potenciar tus estrategias de marketing y lograr que tus clientes tomen decisiones de compra favorables, el neuromarketing es una herramienta poderosa. En este artículo, te revelaremos cómo aprovechar los conocimientos de la neurociencia para influir en la mente del consumidor y lograr resultados impactantes. Desde el uso de colores y emociones hasta la importancia de los estímulos visuales y el storytelling, descubrirás cómo aplicar el neuromarketing en tu estrategia para obtener un mayor impacto en tus clientes. ¡Preparáte para conquistar la mente del consumidor y aumentar tus ventas!',
  authorImgSrc: './assets/images/seba.png',
  authorName: 'Sebastian M',
  authorDesig: 'Developer | Creativo Digital',
};
agregarNuevaCard(nuevoBlog9);

