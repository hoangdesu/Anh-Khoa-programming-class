const restaurantDiv = document.querySelector('#restaurant-list');

const renderRestaurant = (res) => `
    <a href="/restaurant.html?id=${res.id}" class="restaurant-container">
        <img src="${res.image}" alt="${res.title}">
        <h2>${res.title}</h2>
        <p>${res.address}</p>
        <p>rating: ${res.rating}</p>
    </a>
`;

restaurant_list.forEach(res => {
    const restaurantTemplate = renderRestaurant(res);
    restaurantDiv.innerHTML += restaurantTemplate;
});

