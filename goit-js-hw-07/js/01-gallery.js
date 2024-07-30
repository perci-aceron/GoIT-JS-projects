import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("ul.gallery"); //Implementing delegation to ul.gallery
let instance = null;

gallery.addEventListener("click", (event) => {
  event.preventDefault(); //Opening a modal window by clicking on a gallery item & Disable default behavior.
  if (event.target.nodeName !== "IMG") return;
  const largeImageUrl = event.target.dataset.source;
  instance = basicLightbox.create(
    `
        <img src="${largeImageUrl}" width="800" height="600">
    `
  );
  instance.show();
});

//Add modal window closing upon pressing the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close();
    instance = null;
  }
});

console.log(galleryItems);
