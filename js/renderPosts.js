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

    // einame per kiekviena rasta .see-more elementa
    for (let i = 0; i < allSeeMoreDOM.length; i++) {
        const seeMore = allSeeMoreDOM[i];

        seeMore.addEventListener('click', function () {
            // nukeliaujame/susirande artimiausia tevini elementa .content
            const contentDOM = seeMore.closest('.content');
            // tam elementui uzdeti klase show
            contentDOM.classList.add('show');
        });
    }
}

export default renderPosts;



// <div class="content show">
//     <p>Text...<span>See more</span></p>
//     <p class="hidden">Text fasdmfl amsd;fkm as;df asd </p>
// </div>

// .content > .hidden {display: none;}

// .content.show > p {display: none;}
// .content.show > p.hidden {display: block;}