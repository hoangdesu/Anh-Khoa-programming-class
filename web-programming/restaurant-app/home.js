const restaurantDiv = document.querySelector('#restaurant-list');

const renderRestaurant = (res) => `
    <a href="/restaurant.html?id=${res.id}" class="restaurant-container">
        <img src="${res.image}" alt="${res.title}">
        <h2>${res.title}</h2>
        <p>${res.address}</p>
        <p>rating: ${res.rating}</p>
    </a>
`;

let filtered_list = structuredClone(restaurant_list);

// Render the full list of restaurants on start up
filtered_list.forEach(res => {
    const restaurantTemplate = renderRestaurant(res);
    restaurantDiv.innerHTML += restaurantTemplate;
});

const filterBtn = document.querySelector('#filter-btn');
const modal = document.querySelector('#modal');

// hide modal on start
modal.style.display = 'none';

filterBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }         
});


// Search function
const searchForm = document.querySelector('#search-form');

const clearSearchButton = document.querySelector('#clear-search');
const searchInput = document.querySelector('#search-input');


searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the page from reloading (default behavior)
    // console.log(e);

    const query = e.target[0].value; // get the value from the input box
    console.log(query);

    if (!query) {
        filtered_list = structuredClone(restaurant_list);
    } else {
        filtered_list = restaurant_list.filter(res => {
            // matching lowercase
            if (query.toLowerCase() === res.title.toLowerCase()) {
                return res;
            }
            // find by substring
            else if (res.title.toLowerCase().includes(query.toLowerCase())) {
                return res;
            }
        });
    }

    console.log('filtered:', filtered_list);

    // clear the current list
    restaurantDiv.innerHTML = '';

    // render the new list
    filtered_list.forEach(res => {
        const restaurantTemplate = renderRestaurant(res);
        restaurantDiv.innerHTML += restaurantTemplate;
    });

    // reset the search box
    // e.target[0].value = '';

    clearSearchButton.style.display = 'flex';
});


clearSearchButton.addEventListener('click', (e) => {
    searchInput.value = '';

    restaurantDiv.innerHTML = '';

    restaurant_list.forEach(res => {
        const restaurantTemplate = renderRestaurant(res);
        restaurantDiv.innerHTML += restaurantTemplate;
    });

    clearSearchButton.style.display = 'none';
});


const locationContainer = document.querySelector('#location-container');

const locationButtons = locationContainer.children;

// locationButtons[0].class

// Array.from(locationButtons).forEach(btn => {
//     btn.addEventListener('click', () => {
//         // console.log(btn.classList);
        
//         // loop over all the locationButtons, remove the selected class
//         Array.from(locationButtons).forEach(b => {
//             b.classList.remove('modal-btn-selected');
//         });
        
//         btn.classList.add('modal-btn-selected');
//     });
// });


function addClickEventsOnModalButtons(containerId) {
    const container = document.querySelector(containerId);
    const elements = container.children;

    Array.from(elements).forEach(btn => {
        btn.addEventListener('click', () => {
            // loop over all the locationButtons, remove the selected class
            Array.from(elements).forEach(b => {
                b.classList.remove('modal-btn-selected');
            });
            
            btn.classList.add('modal-btn-selected');
        });
    });
}

const buttonGroupIds = ['#location-container', '#price-container', '#category-container'];

buttonGroupIds.forEach(containerId => addClickEventsOnModalButtons(containerId));

const applyFilterBtn = document.querySelector('#apply-filter-btn');

applyFilterBtn.onclick = () => {
    // TODO: apply the filters on the current list
    // ...

    
    // finally, close the modal
    modal.style.display = 'none';
}
