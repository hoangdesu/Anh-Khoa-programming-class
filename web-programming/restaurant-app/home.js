const restaurant_list = [
    {
        image: '',
        title: 'Ice Cream Shop',
        address: 'Thao Dien, District 2',
        rating: 4.5
    },
    {
        image: '',
        title: 'Tortilla Paradise',
        address: 'Thao Dien, District 2',
        rating: 4.5
    },
    {
        image: '',
        title: 'Ice Cream Shop',
        address: 'Thao Dien, District 2',
        rating: 4.5
    },  
    {
        image: '',
        title: 'Ice Cream Shop',
        address: 'Thao Dien, District 2',
        rating: 4.5
    }, 
    {
        image: '',
        title: 'Ice Cream Shop',
        address: 'Thao Dien, District 2',
        rating: 4.5
    }, 
];

const restaurantDiv = document.querySelector('#restaurant-list');

const renderRestaurant = (res) => `
    <div class="restaurant-container">
        <img src="${res.image}" alt="${res.title}">
        <h2>${res.title}</h2>
        <p>${res.address}</p>
        <p>rating: ${res.rating}</p>
    </div>
`;

restaurant_list.forEach(res => {
    const restaurantTemplate = renderRestaurant(res);
    restaurantDiv.innerHTML += restaurantTemplate;
});

