import { galleryItems } from './gallery-items.js';
// Change code below this line

let lightbox = new SimpleLightbox(".gallery__item a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

console.log(galleryItems);
