const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const username = localStorage.getItem('username');

fetch(`http://localhost:3000/restaurants/${id}?username=${username}`)
    .then((res) => res.json())

    .then((restaurant) => {
        if (!restaurant) {
            console.log('404 NOT FOUND');
        }


        console.log(restaurant);

        const name = document.querySelector('#name')
        const address = document.querySelector('#address')
        const image = document.querySelector('#image')
        const description = document.querySelector('#description');
        const mapIframe = document.querySelector('#map-iframe');

        name.textContent = restaurant.name;
        address.textContent = restaurant.address;
        image.src = `http://localhost:3000/images/${restaurant.image}`;
        description.textContent = restaurant.description;
        mapIframe.src = restaurant.iframe_map_src;
        const thumbnailList = restaurant.thumbnails.split(',');

        const thumbnailContainer = document.querySelector('#thumbnail-container')

        // const thumbnailList = [
        //     'test-1.jpg',
        //     'test-2.jpg',
        //     'katinat.jpg',
        //     'test-4.jpg',
        // ]

        thumbnailList.forEach(thumbnail => {
            const img = `<img src="http://localhost:3000/images/${thumbnail}" alt="">`;
            thumbnailContainer.innerHTML += img;
        });

        const thumbnailImages = thumbnailContainer.querySelectorAll('img')

        thumbnailImages.forEach(thumbimg => {
            thumbimg.addEventListener('mouseenter', () => {
                image.src = thumbimg.src
            });

            thumbimg.addEventListener('mouseleave', () => {
                image.src = `http://localhost:3000/images/${restaurant.image}`;
            });

        });


        const confirmModal = document.querySelector('#confirm-modal')
        const reserveBtn = document.querySelector('#reserve')

        const dateInput = document.querySelector('#date-input')
        const timeInput = document.querySelector('#time-input')
        const guestInput = document.querySelector('#guest-input')

        const dateConfirm = document.querySelector('#date-confirm')
        const timeConfirm = document.querySelector('#time-confirm')
        const guestConfirm = document.querySelector('#guest-confirm')



        reserveBtn.addEventListener('click', () => {
            if (!dateInput.value || !timeInput.value || !guestInput.value)
                return;


            dateConfirm.textContent = dateInput.value;
            timeConfirm.textContent = timeInput.value;
            guestConfirm.textContent = guestInput.value;


            confirmModal.style.display = 'flex';
        });

        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                confirmModal.style.display = 'none';
            }
        });

        const reviewModal = document.querySelector('#review-modal')
        const reviewBtn = document.querySelector('#review')

        reviewBtn.addEventListener('click', () => {
            reviewModal.style.display = 'flex';
        })

        reviewModal.addEventListener('click', (e) => {
            if (e.target === reviewModal) {
                reviewModal.style.display = 'none';
            }
        });


        const favBtn = document.querySelector('#favbtn')
        const favIcon = document.querySelector('#fav-icon');

        if (restaurant.isFavorite) {
            favIcon.src = './images/red-heart.webp';
        }

        favBtn.addEventListener('click', () => {
            fetch('http://localhost:3000/favorites', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    restaurant_id: restaurant.id,
                    username: username,
                }),


            })
                .then((res) => {
                    return res.json();
                })

                .then((isFavorite) => {
                    if (isFavorite) {
                        favIcon.src = './images/red-heart.webp';
                    } else {
                        favIcon.src = './images/favorite-icon.png';
                    }
                });
        })


        const confirmBtn = document.querySelector('#confirm')
        confirmBtn.addEventListener('click', () => {
            const booking = {
                restaurant_id: restaurant.id,
                username: username,
                date: dateInput.value,
                time: timeInput.value,
                guests: guestInput.value
            }

            fetch('http://localhost:3000/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(booking)
            })
                .then((res) => res.json())

                .then((data) => {
                    document.getElementById("success-msg").textContent = data.message;
                });
        })
    })


const reviewsContainer = document.querySelector('#reviews');

fetch(`http://localhost:3000/reviews/${id}`)
    .then(res => res.json())
    .then(reviews => {
        console.log(reviews)
        reviews.forEach(reviews => {

            const reviewCardTemplate = `
                <div>
                    <div class="subrow1">
                        <img src="/images/ava.jpg" alt="">
                        <div>
                            <p>${reviews.username}</p>
                            <p>${reviews.created_at}</p>
                        </div>
                    </div>

                    <div class="subrow2">
                        <div class="star-rating">
                            ${'<span class="star" data-rating="1">&#9734;</span>'.repeat(reviews.ratings)}
                        </div>
                    </div>

                    <div class="subrow3">
                        <p>${reviews.content}</p>
                    </div>
                </div>

            `;

            reviewsContainer.innerHTML += reviewCardTemplate

        });
    });

const btnSubmitReview = document.querySelector('#btn-submit-review');
const reviewContent = document.querySelector('#review-content');
const reviewRating = document.querySelector('#review-rating');

btnSubmitReview.addEventListener('click', () => {
    console.log(id, username);

    console.log(reviewContent.value);
    console.log(reviewRating.value);

    const restaurantReview = {
        username: username,
        content: reviewContent.value,
        rating: reviewRating.value
    }

    fetch(`http://localhost:3000/reviews/${id}`, {
        method: 'POST',
        body: JSON.stringify(restaurantReview),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                window.location.reload();
            }
        })
        .catch(err => {
            console.error('failed to create review');
            const reviewModal = document.querySelector('#review-modal')
            reviewModal.style.display = 'none';
        });
});