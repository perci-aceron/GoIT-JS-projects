import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

let lightbox = new SimpleLightbox('.gallery__item a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});

console.log(galleryItems);
