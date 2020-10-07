import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    // validacija

    // logika
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);
    }

    // reikiamo elemento paieska realiam HTML'e
    const feedDOM = document.querySelector('main');

    // perrasome reikiamo HTML elemento turini
    feedDOM.innerHTML = HTML;

    // uzdeti norimas JS interakcijas
    const allSeeMoreDOM = document.querySelectorAll('.post .see-more');

    for (let i = 0; i < allSeeMoreDOM.length; i++) {
        const seeMore = allSeeMoreDOM[i];

        seeMore.addEventListener('click', function () {
            // nukeliaujame/susirande artimiausia tevini elementa .content
            const contentDOM = seeMore.closest('.content');
            contentDOM.classList.add('show');
        });
    }

    const allSeeLessDOM = document.querySelectorAll('.post .see-less');

    for (let i = 0; i < allSeeLessDOM.length; i++) {
        const seeLess = allSeeLessDOM[i];

        seeLess.addEventListener('click', () => {
            const contentDOM = seeLess.closest('.content');
            contentDOM.classList.remove('show');
        })
    }
}

export default renderPosts;