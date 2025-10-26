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

function renderRestaurant(restaurant) {
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

  const filteredFavorites = favorites.filter((fav) => fav.id !== restaurantId);
  console.log(filteredFavorites);

  favorites = filteredFavorites;

//   renderRestaurantList(favorites);
}

const username = localStorage.getItem('username');

fetch(`http://localhost:3000/favorites?username=${username}`)
  .then((res) => res.json())
  .then((favorites) => {
    renderRestaurantList(favorites);
  });

