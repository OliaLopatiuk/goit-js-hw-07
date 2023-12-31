import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) { 
    return galleryItems.map( ({preview, original, description}) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`).join("");
    }

    const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionPosition: 'bottom', captionDelay: 250,});