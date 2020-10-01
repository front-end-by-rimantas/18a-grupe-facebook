import renderHeader from './renderHeader.js';
import renderContent from './renderContent.js';
import renderFooter from './renderFooter.js';

function renderSinglePost(data) {
    // validacija


    // logika
    // console.log(data);

    return `<div class="post">
                ${renderHeader(data.author, data.postTimestamp)}
                ${renderContent(data.content)}
                ${renderFooter()}
            </div>`;
}

export default renderSinglePost;