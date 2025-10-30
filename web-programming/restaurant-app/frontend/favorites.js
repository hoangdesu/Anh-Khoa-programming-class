// let favorites = [
//     {
//         id: 1,
//         img: 'https://media-public.canva.com/GCx4w/MAF5VmGCx4w/1/s.png',
//         title: 'Ice Cream Shop',
//         address: 'Thao Dien, District 2',
//         rating: 4
//     },
//     {
//         id: 2,
//         img: 'https://media-public.canva.com/GCx4w/MAF5VmGCx4w/1/s.png',
//         title: 'Hamburger',
//         address: 'District 7',
//         rating: 5
//     },
//     {
//         id: 3,
//         img: 'https://media-public.canva.com/GCx4w/MAF5VmGCx4w/1/s.png',
//         title: 'Chicken',
//         address: 'District 2',
//         rating: 5
//     }
// ];

const listContainer = document.querySelector('#list-container');


// Initial load
const username = localStorage.getItem('username');

fetch(`http://localhost:3000/favorites?username=${username}`)
  .then((res) => res.json())
  .then((favorites) => {
    renderRestaurantList(favorites);
  });


function renderRestaurant(restaurant) {
  console.log(restaurant);

  return `
    <div class="restaurant-container">
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <div>
            <h3>${restaurant.name}</h3>
            <p>${restaurant.address}</p>
            <p>${restaurant.rating}</p>
        </div>
        <button onclick="remove(${restaurant.id})">Remove</button>
    </div>
  `;
}

const renderRestaurantList = (favorites) => {
  listContainer.innerHTML = '';

  favorites.forEach((restaurant) => {
    const htmlTemplate = renderRestaurant(restaurant);
    listContainer.innerHTML += htmlTemplate;
  });
};

function remove(restaurantId) {
  console.log('removing...', restaurantId);

  // const filteredFavorites = favorites.filter((fav) => fav.id !== restaurantId);
  // console.log(filteredFavorites);

  // favorites = filteredFavorites;

  fetch('http://localhost:3000/favorites', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      restaurantId: restaurantId,
      username: username,
    }),
  })
    .then((res) => res.json())
    .then((isFavorite) => {
      // console.log('data:', data);
      // if (isFavorite) {
      //   favIcon.src = './images/red-heart.webp';
      // } else {
      //   favIcon.src = './images/heart-icon.webp';
      // }

      fetch(`http://localhost:3000/favorites?username=${username}`)
        .then((res) => res.json())
        .then((favorites) => {
          renderRestaurantList(favorites);
        });

    });

  //   renderRestaurantList(favorites);
}


