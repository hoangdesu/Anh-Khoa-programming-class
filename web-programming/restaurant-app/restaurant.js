const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id);

const restaurant = restaurant_list.find((res) => res.id === Number(id));

if (!restaurant) {
    console.log('404 NOT FOUND');
}

console.log('found:', restaurant);

const title = document.querySelector('#title');
const address = document.querySelector('#address');
const image = document.querySelector('#image');
const favBtn = document.querySelector('#fav-btn');


title.textContent = restaurant.title;
document.title = restaurant.title;
address.textContent = restaurant.address;

image.src = restaurant.image;

favBtn.addEventListener('click', () => {
    favorites.push(restaurant);
    console.log(favorites);
});
