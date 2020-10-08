import ajax from './ajax.js';
import renderPosts from './renderPosts.js';

ajax(renderPosts, '/js/data.json');


/*

renderPosts
    for -> renderSinglePost
        renderHeader
        renderContent
            renderContentText
            renderContentGallery
        renderFooter

*/