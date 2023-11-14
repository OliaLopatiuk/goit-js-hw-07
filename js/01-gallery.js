import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onImageClick);

function createGalleryMarkup(galleryItems) { 
return galleryItems.map( ({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join("");
}

function onImageClick(evt) {
    evt.preventDefault();
   if(evt.target.nodeName !== "IMG") {
    return;
   }

   const bigImage = evt.target.dataset.source;
   const descr = evt.target.alt;

   const instance = basicLightbox.create(`
   <img
   class="gallery__image"
   src="${bigImage}"
   alt="${descr}"
   />
   `, {onShow: instance => {document.addEventListener("keydown", onEscBtnClick)}, onClose: instance => {document.removeEventListener("keydown", onEscBtnClick)}});

   instance.show()

   function onEscBtnClick(evt) {
    if(!instance.visible()) {
        return;
    }

    if(evt.code === "Escape") {
        instance.close() 
    }
}
}
