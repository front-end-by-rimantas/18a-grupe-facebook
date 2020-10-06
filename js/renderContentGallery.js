function renderContentGallery(photoArray) {
    // validacijos
    // jei nera duotas nuotrauku sarasas
    if (!photoArray) {
        return '';
    }

    // logika
    const maxGallerySize = 4;
    const photosCount = photoArray.length;
    const printablePhotosCount = photosCount > maxGallerySize ? maxGallerySize : photosCount;

    // generuojame tik reikiama kieki nuotrauku
    let extraHTML = '';
    if (photosCount > maxGallerySize) {
        extraHTML = `data-extra="${photosCount - maxGallerySize}"`;
        // extraHTML = `<div class="black-hover">+${photosCount - maxGallerySize}</div>`;
    }

    let photosHTML = '';
    for (let i = 0; i < printablePhotosCount; i++) {
        if (i < printablePhotosCount - 1) {
            photosHTML += `<div class="img">
                                <img src="./img/posts/${photoArray[i]}"
                                    alt="User post gallery picture">
                            </div>`;
        } else {
            photosHTML += `<div class="img" ${extraHTML}>
                                <img src="./img/posts/${photoArray[i]}"
                                    alt="User post gallery picture">
                            </div>`;
        }
    }

    return `<div class="gallery gallery-${printablePhotosCount}">
                ${photosHTML}
            </div>`;
}

export default renderContentGallery;