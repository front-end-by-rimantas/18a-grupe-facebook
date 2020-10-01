function renderHeader(data, time) {
    return `<header class="post-header">
                <a class="avatar-link" href="#user/${data.link}">
                    <img class="avatar" src="./img/users/${data.photo}" alt="User profile picture">
                </a>
                <div class="post-user">
                    <a class="user" href="#user/${data.link}">${data.name} ${data.lastname}</a>
                    <div class="timestamp">6h ago (${time})</div>
                </div>
                <i class="fa fa-ellipsis-h"></i>
            </header>`;
}

export default renderHeader;