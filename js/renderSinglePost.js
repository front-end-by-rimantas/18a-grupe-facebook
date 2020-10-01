function renderSinglePost(data) {
    // validacija


    // logika
    console.log('Generuoju viena posta');
    console.log(data);

    return `<div class="post">
                <header>
                    AVATARAS + ${data.author.name} ${data.author.lastname}
                </header>
                <div>
                    TEXT + IMAGES
                </div>
                <footer>
                    LIKE + COMMENT
                </footer>
            </div>`;
}

export default renderSinglePost;