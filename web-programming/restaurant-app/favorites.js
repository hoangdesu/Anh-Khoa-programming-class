const favorites = [
    {
        img: 'https://media-public.canva.com/GCx4w/MAF5VmGCx4w/1/s.png',
        title: 'Ice Cream Shop',
        address: 'Thao Dien, District 2',
        rating: 4
    },
    {
        img: 'https://media-public.canva.com/GCx4w/MAF5VmGCx4w/1/s.png',
        title: 'Hamburger',
        address: 'District 7',
        rating: 5
    }
];

const listContainer = document.querySelector('#list-container');

function renderRestaurant(restaurant) {
    return `
        <div class="restaurant-container">
            <img src="${restaurant.img}" alt="${restaurant.title}">
            <div>
                <h3>${restaurant.title}</h3>
                <p>${restaurant.address}</p>
                <p>${restaurant.rating}</p>
            </div>
            <button>Remove</button>
        </div>
    `;
}

favorites.forEach(restaurant => {
    const htmlTemplate = renderRestaurant(restaurant);
    listContainer.innerHTML += htmlTemplate;
});
