const username = localStorage.getItem('username');

const listContainer = document.querySelector("#list-container");

fetch(`http://localhost:3000/reservations?username=${username}`)
  .then((res) => res.json())
  .then((bookingList) => {
    console.log("Received reservations:", bookingList); 
    renderResList(bookingList); 
  })
  .catch((err) => console.error("Error fetching reservations:", err));


const renderReservation = (res) => `
            <div class="restaurant-container">
                    <img src="http://localhost:3000/images/${res.image}" alt="${res.name}">
                    <div>
                        <h3>${res.name}</h3>
                        <p>${res.address}</p>
                        <p>${res.phone_number}</p>
                    </div>

                    <div>
                        <p>Date: ${res.date}</p>
                        <p>Time: ${res.time}</p>
                        <p> No. of guests: ${res.guests}</p>
                    </div>
            </div>
        `;



const renderResList = (bookingList) => {
  listContainer.innerHTML = '';
  bookingList.forEach(res => {
    const htmlTemplate = renderReservation(res);
    listContainer.innerHTML += htmlTemplate;
  });
}
