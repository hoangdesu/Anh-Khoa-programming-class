// Look for restaurant on initial load
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const username = localStorage.getItem('username');

fetch(`http://localhost:3000/restaurants/${id}?username=${username}`)
  .then((res) => res.json())
  .then((restaurant) => {
    if (!restaurant) {
      console.log('404 NOT FOUND');
    }

    console.log('restaurant:', restaurant);

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

    thumbnailList.forEach((thumbnail) => {
      const img = `<img src="./images/${thumbnail}" alt="">`;

      thumbnailsContainer.innerHTML += img;
    });

    const thumbnailImages = thumbnailsContainer.querySelectorAll('img');
    console.log(thumbnailImages);

    thumbnailImages.forEach((thumbnailImg) => {
      thumbnailImg.addEventListener('mouseenter', (evt) => {
        console.log('hovering on...', thumbnailImg.src);
        mainImage.src = thumbnailImg.src;
      });
    });

    thumbnailImages.forEach((thumbnailImg) => {
      thumbnailImg.addEventListener('mouseleave', (evt) => {
        mainImage.src = restaurant.image;
      });
    });

    // Modal
    const confirmModalContainer = document.querySelector(
      '#confirm-modal-container'
    );
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

    // confirmModalContainer.style.display = 'block'; // for testing only
    confirmModalContainer.style.display = 'none';


    reserveNowBtn.addEventListener('click', () => {
      if (!dateInput.value || !timeInput.value || !guestsInput.value) return;

      dateConfirm.textContent = dateInput.value;
      timeConfirm.textContent = timeInput.value;
      guestsConfirm.textContent = guestsInput.value;

      confirmModalContainer.style.display = 'block';
    });

    const btnConfirmBooking = document.querySelector('#btn-confirm-booking');
    btnConfirmBooking.addEventListener('click', () => {
      const bookingDetails = {
        username: username,
        restaurant_id: restaurant.id,
        date: dateInput.value,
        time: timeInput.value,
        guests: guestsInput.value,
      };

      fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: TODO add booking details inside body
        body: JSON.stringify(bookingDetails)
      })
        .then((res) => json())
        .then((data) => {
          // ...
        });
    });

    // Feature: add the current restaurant to favorite list
    const favBtn = document.querySelector('#fav-btn');
    const favIcon = document.querySelector('#fav-icon');

    if (restaurant.isFavorite) {
      favIcon.src = './images/red-heart.webp';
    }

    favBtn.addEventListener('click', () => {
      console.log(restaurant);

      fetch('http://localhost:3000/favorites', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          restaurantId: restaurant.id,
          username: username,
        }),
      })
        .then((res) => {
          // console.log(res.status);
          // if (res.status === 201) {
          //     favIcon.src = './images/red-heart.webp';
          // }

          return res.json();
        })
        .then((isFavorite) => {
          // console.log('data:', data);
          if (isFavorite) {
            favIcon.src = './images/red-heart.webp';
          } else {
            favIcon.src = './images/heart-icon.webp';
          }
        });
    });
  });


// backtick
const reviewsContainer = document.querySelector('#reviews-container');

fetch(`http://localhost:3000/reviews/${id}`)
  .then(res => res.json())
  .then(reviews => {
    console.log(reviews);
    reviews.forEach(review => {
      // reviewsContainer.innerHTML += `
      //   <div class="review-card">
      //       <h5>${review.username}</h5>
      //       <p>${review.content}</p>
      //       <p>Rating: ${review.ratings}</p>
      //   </div>        
      // `;

      const reviewCardTemplate = `
        <div class="review-card">
            <div class="review-card-row1">
                <div class="review-card-col1">
                    <img src="https://play-lh.googleusercontent.com/_3kdCh5aDbyRUWLVhQ9ejml3XQ2LiqV-YuyaX9pHHUCFruTCrQwJmcXbridaWXqUKA=w256" alt="">
                </div>
                <div class="review-card-col2">
                    <h5>${review.username}</h5>
                    <p>Created at: ${review.created_at}</p>
                </div>
            </div>

            <div class="reviews-rating">
              ${'<img src="images/star.png" alt="">'.repeat(review.ratings)}
            </div>

            <p class="reviews-content">${review.content}</p>
        </div>
      `;

      reviewsContainer.innerHTML += reviewCardTemplate;
    });
  });
