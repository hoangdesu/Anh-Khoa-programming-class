const username = localStorage.getItem('username');
const loggedIn = localStorage.getItem('loggedIn');

if (!username && !loggedIn) {
    window.location.href = '/signin.html';
}

const usernameBox = document.querySelector('#username');
usernameBox.textContent = username;


fetch('http://localhost:3000/restaurants')
    .then(res => res.json())
    .then(restaurant_list => {

        const restaurantDiv = document.querySelector('#restaurant-list');

        const renderRestaurant = (res) => `
            <a href="/restaurant.html?id=${res.id}" class="restaurant-container">
                <img src="http://localhost:3000/images/${res.image}" alt="${res.name}">
                <h2>${res.name}</h2>
                <p>${res.address}</p>
                <p>${res.rating}</p>
            </a>
        `;

        let filtered_list = structuredClone(restaurant_list)
        restaurant_list.forEach(res => {
            const restaurantTemplate = renderRestaurant(res);
            restaurantDiv.innerHTML += restaurantTemplate;
        });


        const filterBtn = document.querySelector('#filter');
        const modal = document.querySelector('#modal');

        modal.style.display = 'none';


        filterBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        })


        const searchform = document.querySelector('#search-form');

        const clearSearch = document.querySelector("#clear-search");
        const searchInput = document.querySelector("#search-input");

        searchform.addEventListener('submit', (e) => {
            e.preventDefault();

            const query = e.target[0].value;

            if (!query) {
                filtered_list = structuredClone(restaurant_list)
            }
            else {
                filtered_list = restaurant_list.filter(res => {
                    if (query.toLowerCase() === res.name.toLowerCase()) {
                        return res;
                    }
                    else if (res.name.toLowerCase().includes(query.toLowerCase())) {
                        return res;
                    }
                });
            };

            restaurantDiv.innerHTML = '';

            filtered_list.forEach(res => {
                const restaurantTemplate = renderRestaurant(res);
                restaurantDiv.innerHTML += restaurantTemplate;
            });

            clearSearch.style.display = 'flex';
            // e.target[0].value = '';

        });


        clearSearch.addEventListener('click', (e) => {
            console.log('clicked');

            searchInput.value = '';

            restaurantDiv.innerHTML = '';

            restaurant_list.forEach(res => {
                const restaurantTemplate = renderRestaurant(res);
                restaurantDiv.innerHTML += restaurantTemplate;
            });

            clearSearch.style.display = 'none';
        });

        function addClickEventOnModalButtons(containerId) {
            const container = document.querySelector(containerId);
            const elements = container.children;

            Array.from(elements).forEach(btn => {
                btn.addEventListener('click', () => {
                    Array.from(elements).forEach(b => {
                        b.classList.remove('modal-btn-selected');
                    });
                    btn.classList.add('modal-btn-selected');
                    // console.log(btn.dataset.category, btn.dataset.pricerange);
                });
            });
        }

        // addClickEventOnModalButtons('#location-container')
        addClickEventOnModalButtons('#price-container')
        addClickEventOnModalButtons('#category-container')


        const saveBtn = document.querySelector('#save-btn');

        saveBtn.onclick = (e) => {
            const selectedButtons = document.querySelectorAll('.modal-btn-selected');
            console.log(selectedButtons);

            let selectedPriceRange = null;
            let selectedCategory = null;
            if (selectedButtons.length === 2) {
                selectedPriceRange = selectedButtons[0].dataset.pricerange;
                selectedCategory = selectedButtons[1].dataset.category;
            } else if (selectedButtons.length === 1) {
                if (selectedButtons[0].dataset.pricerange) {
                    selectedPriceRange = selectedButtons[0].dataset.pricerange;
                } else {
                    selectedCategory = selectedButtons[0].dataset.category;
                }
            }

            console.log(selectedPriceRange, selectedCategory);

            fetch('http://localhost:3000/filtered-restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    price_range: selectedPriceRange,
                    category: selectedCategory
                })
            })
                .then(res => res.json())
                .then(filteredRestaurants => {
                    // ...
                    console.log(filteredRestaurants);

                    restaurantDiv.innerHTML = '';
                    filteredRestaurants.forEach(res => {
                        restaurantDiv.innerHTML += renderRestaurant(res);
                    });
                    
                    if (selectedButtons.length > 0) {
                        filterBtn.style.background = 'red';
                    } else {
                        filterBtn.style.background = 'white';
                    }

                    modal.style.display = 'none';
                })   
        }
    });


const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    const selectedButtons = document.querySelectorAll('.modal-btn-selected');
    Array.from(selectedButtons).forEach(btn => {
        btn.classList.remove('modal-btn-selected');
    });
});


const logout = document.querySelector('#logout-btn');
logout.addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');

    window.location.href = '/signin.html';
});

