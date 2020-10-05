function renderContentText(text) {
    const shortTextLength = 60;
    const normalTextLength = 300;
    const largeTextLength = 10000;
    const textLength = text.length;

    if (textLength <= shortTextLength) {
        // kai labai mazai teksto - padydinam srifta
        return `<p class="big-font">${text}</p>`;
    } else if (textLength <= normalTextLength) {
        // kai normaliai teksto - tiesiog atvaizduojam
        return `<p>${text}</p>`;
    } else if (textLength <= largeTextLength) {
        // kai labai daug - nukerpam ir pridedam "... See more"
        let shorterText = '';
        for (let i = 0; i < normalTextLength; i++) {
            shorterText += text[i];
        }
        return `<p>${shorterText}... <span class="see-more">See more</span></p>`;
    } else {
        // o jei teksto daugiau nei leidziama maksimaliai - rodom klaida
        console.warn(`ERROR: virsyta maksimali (${largeTextLength}) leistina teksto riba.`);
        return '';
    }
}

export default renderContentText;