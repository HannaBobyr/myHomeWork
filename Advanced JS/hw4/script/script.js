const root = document.querySelector("#root")
const url = 'https://ajax.test-danit.com/api/swapi/films';
class Films{
    constructor(url, root) {
        this.url = url;
        this.root = root;
    }
    request(uri) {
        return fetch(`${uri}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((e) => {
                console.log(e);
            });
    }
    render() {
        this.request(this.url).then(data => {
            const list = document.createElement("ul");
                const items = data.map(({ characters, episodeId, name, openingCrawl }) => {
                const listItem = document.createElement("li");
                const film = document.createElement("p");
                film.innerHTML = `${name}: <br> ${episodeId} <br> ${openingCrawl} `;
                listItem.append(film);
                const listPeople = document.createElement("ol");
                const character = characters.map((characterLink) => this.request(characterLink));
                    Promise.all(character).then((value) => {
                        const personName = value.map(({ name }) => {
                            const personItem = document.createElement("li");
                            const person = document.createElement("p");
                            person.innerText = name;
                            personItem.append(person);
                            return personItem;
                        });
                        listPeople.append(...personName);
                        listItem.append(listPeople);
                    });
                return listItem;
                });
                list.append(...items);
                this.root.append(list);
        });
    };
};
new Films(url, root).render();