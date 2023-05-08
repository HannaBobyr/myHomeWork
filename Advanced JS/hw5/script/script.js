const root = document.querySelector('.root');
class Request{
    send(url, method='GET') {
        return fetch(url, {
            method: method,
        });
    }
}
const request = new Request();
class Post{
    constructor() {
        this.urlUsers = "https://ajax.test-danit.com/api/json/users";
        this.urlPosts = "https://ajax.test-danit.com/api/json/posts";
    };
    render(root) {
        const list = document.createElement("ul");
        request.send(this.urlUsers).then(response => response.json()).then(dataUsers => {
            dataUsers.forEach(({id, name, email}) => {
                request.send(this.urlPosts).then(response => response.json()).then(dataPosts => {
                    const post = dataPosts.filter(({ userId }) => id === userId);
                    post.forEach(({ title, body, id }) => {
                        const itemPost = document.createElement('li');
                        const namePost = document.createElement('p');
                        const emailPost = document.createElement('p');
                        const titlePost = document.createElement('p');
                        const bodyPost = document.createElement('p');
                        namePost.innerText = name;
                        emailPost.innerText = email;
                        titlePost.innerText = title;
                        bodyPost.innerText = body;
                        const deleteBtn = document.createElement('button');
                        deleteBtn.type = 'button';
                        deleteBtn.innerText = 'delete';
                        itemPost.id = id;
                        itemPost.append(namePost, emailPost, titlePost, bodyPost, deleteBtn);
                        list.append(itemPost);
                        deleteBtn.addEventListener('click', (e) => {
                            const {id} = e.path[1];
                            request.send(`${this.urlPosts}/${id}`, 'DELETE').then(response => itemPost.remove());
                        })
                    })
                });
            });
        });
        root.append(list);
    };
};
new Post().render(root);