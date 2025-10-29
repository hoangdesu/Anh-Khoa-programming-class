fetch('http://localhost:3000/restaurants')
  .then((res) => res.json())
  .then((restaurant_list) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    console.log(id);

    const restaurant = restaurant_list.find((res) => res.id === Number(id));

    if (!restaurant) {
        console.log('404 NOT FOUND');
    }

    console.log('found:', restaurant);

    // grab containers from the DOM
    const name = document.querySelector('#title');
    const address = document.querySelector('#address');
    const mainImage = document.querySelector('#main-image');
    const descriptionP = document.querySelector('#description');


    // injecting data into blank containers
    name.textContent = restaurant.name;
    document.title = restaurant.name;
    address.textContent = restaurant.address;
    descriptionP.textContent = restaurant.description;

    mainImage.src = restaurant.image;

    // favBtn.addEventListener('click', () => {
    //     favorites.push(restaurant);
    //     console.log(favorites);
    // });


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
    });


    // Modal
    const confirmModalContainer = document.querySelector('#confirm-modal-container');
    const dateInput = document.querySelector('#date-input');
    const timeInput = document.querySelector('#time-input');
    const guestsInput = document.querySelector('#guests-input');
    const dateConfirm = document.querySelector('#date-confirm');
    const timeConfirm = document.querySelector('#time-confirm');
    const guestsConfirm = document.querySelector('#guests-confirm');
    

    confirmModalContainer.addEventListener('click', (e) => {
        if (e.target === confirmModalContainer) {
            confirmModalContainer.style.display = 'none';
        }         
    });

    const reserveNowBtn = document.querySelector('#reserve-now-btn');
    reserveNowBtn.addEventListener('click', () => {
        if (!dateInput.value || timeInput.value || guestsInput.value)
            return;
        
        dateConfirm.textContent = dateInput.value;
        timeConfirm.textContent = timeInput.value;
        guestsConfirm.textContent = guestsInput.value;

        confirmModalContainer.style.display = 'block';
    });


    // Feature: add the current restaurant to favorite list
    const favBtn = document.querySelector('#fav-btn');
    const favIcon = document.querySelector('#fav-icon');

    const username = localStorage.getItem('username');

    favBtn.addEventListener('click', () => {
        console.log(restaurant);

        fetch('http://localhost:3000/favorites', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                restaurantId: restaurant.id,
                username: username
            })
        })
            .then(res => {
                // console.log(res.status);
                if (res.status === 201) {
                    favIcon.src = './images/red-heart.webp';
                }
            })
        
    })
  });




