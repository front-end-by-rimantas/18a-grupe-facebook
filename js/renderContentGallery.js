function renderContentGallery(photoArray) {
    // validacijos
    // jei nera duotas nuotrauku sarasas
    if (!photoArray) {
        return '';
    }

    // logika
    const maxGallerySize = 3;
    const printablePhotosCount = photoArray.length > maxGallerySize ? maxGallerySize : photoArray.length;

    // generuojame tik reikiama kieki nuotrauku
    let extraHTML = '';
    if (photoArray.length > maxGallerySize) {
        extraHTML = `data-extra="${photoArray.length - maxGallerySize}"`;
    }

    let photosHTML = '';
    for (let i = 0; i < printablePhotosCount; i++) {
        if (i < printablePhotosCount - 1) {
            photosHTML += `<img src="./img/posts/${photoArray[i]}"
                                alt="User post gallery picture">`;
        } else {
            photosHTML += `<img src="./img/posts/${photoArray[i]}"
                                alt="User post gallery picture"
                                ${extraHTML}>`;
        }
    }

    return `<div class="gallery gallery-${printablePhotosCount}">
                ${photosHTML}
            </div>`;
}

export default renderContentGallery;