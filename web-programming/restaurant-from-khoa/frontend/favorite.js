const username = localStorage.getItem('username');
const id = localStorage.getItem('id');



fetch(`http://localhost:3000/favorites?username=${username}`)
    .then((res) => res.json())
    .then((favorites) => {
        renderReslist(favorites);
    });


const renderFavorite = (res) => `
    <div class="restaurant-container">
            <img src="http://localhost:3000/images/${res.image}" alt="${res.name}">
            <div>
                <h3>${res.name}</h3>
                <p>${res.address}</p>
                <p>${res.rating}</p>
            </div>
        <button onclick="remove(${res.id})">Remove</button>
    </div>
`;

const renderReslist = (favoriteList) => {
    listContainer.innerHTML = '';

    favoriteList.forEach(res => {
        const htmlTemplate = renderFavorite(res);
        listContainer.innerHTML += htmlTemplate;
    });
}

const listContainer = document.querySelector("#list-container");




function remove(id) {

    console.log(username, id);

    fetch('http://localhost:3000/favorites', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            restaurant_id: id,
            username: username,
        }),
    })
        .then((res) => res.json())
        .then((isFavorite) => {


            fetch(`http://localhost:3000/favorites?username=${username}`)
                .then((res) => res.json())
                .then((favorites) => {
                    renderReslist(favorites);
                });

        });
}

fetch(`http://localhost:3000/favorites?username=${username}`)
    .then(res => res.json())
    .then(favoriteList => {

        renderReslist(favoriteList);


    })

