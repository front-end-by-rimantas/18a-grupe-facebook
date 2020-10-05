import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';

function renderContent(data) {
    return `<div>
                ${renderContentText(data.text)}
                ${renderContentGallery(data.photos)}
            </div>`;
}

export default renderContent;