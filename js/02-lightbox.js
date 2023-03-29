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

  new SimpleLightbox(".gallery a", {
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

function makeGalleryItemsMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li> `;
    })
    .join("");

  return markup;
}
