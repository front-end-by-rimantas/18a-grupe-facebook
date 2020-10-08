import renderContentText from './renderContentText.js';
import renderContentGallery from './renderContentGallery.js';

function renderContent(data, post_id) {
    // console.log(data);
    const contentText = {
        id: post_id,
        text: data.text,
        background: data.background
    };
    return `<div class="content">
                ${renderContentText(contentText)}
                ${renderContentGallery(data.photos)}
            </div>`;
}

export default renderContent;