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
const mainImage = document.querySelector('#main-image');
const favBtn = document.querySelector('#fav-btn');


title.textContent = restaurant.title;
document.title = restaurant.title;
address.textContent = restaurant.address;

mainImage.src = restaurant.image;

favBtn.addEventListener('click', () => {
    favorites.push(restaurant);
    console.log(favorites);
});


// Thumbnails
const thumbnailsContainer = document.querySelector('#thumbnails-container');

// console.log(thumbnailsContainer.);


const thumbnailList = [
    'test-1.jpg',
    'test-2.jpg',
    'test-3.jpg',
    'test-4.jpg',
];

thumbnailList.forEach(thumbnail => {
    const img = `<img src="./images/${thumbnail}" alt="">`;

    thumbnailsContainer.innerHTML += img;
});

const thumbnailImages = thumbnailsContainer.querySelectorAll('img');
console.log(thumbnailImages);

thumbnailImages.forEach(thumbnailImg => {
    thumbnailImg.addEventListener('mouseenter', (evt) => {
        console.log('hovering on...', thumbnailImg.src);
        mainImage.src = thumbnailImg.src;
    });
});

thumbnailImages.forEach(thumbnailImg => {
    thumbnailImg.addEventListener('mouseleave', (evt) => {
        mainImage.src = restaurant.image;
    });
})



