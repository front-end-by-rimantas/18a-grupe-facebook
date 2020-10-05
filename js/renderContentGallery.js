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
    let photosHTML = '';
    for (let i = 0; i < printablePhotosCount; i++) {
        photosHTML += `<img src="./img/posts/${photoArray[i]}" alt="User post gallery picture">`;
    }

    // senesnis variantas - geras, bet virsuje geriau
    // for (let i = 0; i < photoArray.length; i++) {
    //     if (i >= maxGallerySize) {
    //         break;
    //     }
    //     photosHTML += `<img src="./img/posts/${photoArray[i]}" alt="User post gallery picture">`;
    // }

    // generuojame extra skaiciuka, jeigu reikia
    let moreHTML = '';
    if (photoArray.length > maxGallerySize) {
        moreHTML = `<div class="more-photos">+${photoArray.length - maxGallerySize}</div>`;
    }

    return `<div class="gallery gallery-${printablePhotosCount}">
                ${photosHTML}
                ${moreHTML}
            </div>`;
}

export default renderContentGallery;