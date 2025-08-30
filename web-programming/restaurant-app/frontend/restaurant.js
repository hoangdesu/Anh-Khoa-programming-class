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
    const title = document.querySelector('#title');
    const address = document.querySelector('#address');
    const mainImage = document.querySelector('#main-image');
    const descriptionP = document.querySelector('#description');


    // injecting data into blank containers
    title.textContent = restaurant.title;
    document.title = restaurant.title;
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

    confirmModalContainer.addEventListener('click', (e) => {
        if (e.target === confirmModalContainer) {
            confirmModalContainer.style.display = 'none';
        }         
    });

    const reserveNowBtn = document.querySelector('#reserve-now-btn');
    reserveNowBtn.addEventListener('click', () => {
        confirmModalContainer.style.display = 'block';
    });


    // Feature: add the current restaurant to favorite list
    const favBtn = document.querySelector('#fav-btn');
    const favIcon = document.querySelector('#fav-icon');

    favBtn.addEventListener('click', () => {
        console.log(restaurant);

        fetch('http://localhost:3000/favorites', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(restaurant)
        })
            .then(res => {
                // console.log(res.status);
                if (res.status === 200) {
                    favIcon.src = './images/red-heart.webp';
                }
            })
        
    })

  });




