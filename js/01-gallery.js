import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = makeGalleryItemsMarkup(galleryItems);

galleryList.addEventListener("click", openModalWindow);


function openModalWindow(event) {
  event.preventDefault();
  if (event.target.classList.value !== "gallery__image") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

function makeGalleryItemsMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");

  return markup;
}

