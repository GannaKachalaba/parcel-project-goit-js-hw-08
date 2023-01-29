import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const gallarySetMarkup = createGalleryBox(galleryItems);

gallery.insertAdjacentHTML('beforeend', gallarySetMarkup);

function createGalleryBox(image) {
  return image
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        /></a>
        </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
