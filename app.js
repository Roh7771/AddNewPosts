let posts = [];

const rootEl = document.getElementById('root');

const formEl = document.createElement('form');
formEl.innerHTML = `
    <div class="form-group">
        <label>Введите текст или Url</label>
        <input class="form-control" data-type="text">
    </div>
    <div class="form-group">
        <label>Выберите тип поста</label>
        <select class="form-control" data-type="select">
            <option>Обычный</option>
            <option>Картинка</option>
            <option>Видео</option>
            <option>Аудио</option>
        </select>
    </div>
    <button class="btn btn-primary" data-type="button">Добавить</button>
`;

buttonEl = formEl.querySelector('[data-type=button]');
buttonEl.onclick = function(e) {
    e.preventDefault();
    const textEl = formEl.querySelector('[data-type=text]');
    const text = textEl.value;
    const selectEl = formEl.querySelector('[data-type=select]');
    const type = selectEl.value;
    posts.push({
        text,
        type
    });
    textEl.value = '';
    selectEl.value = 'Обычный';
    console.log(posts);
}

rootEl.appendChild(formEl);

const postsEl = document.createElement('div');
rootEl.appendChild(postsEl);

function rebuildPosts(containerEl, items) {
    for (const item of [...containerEl.children]) {
        containerEl.removeChild(item)
    }


}