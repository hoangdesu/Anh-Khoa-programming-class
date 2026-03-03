const signInform = document.querySelector("#sign-in-form");

signInform.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const res = await fetch ('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({usrname: signInform[0].value, psword: signInform[1].value}),
        headers: {
            'Content-Type': 'application/json'
        }
    });


    const data = await res.json();


    if (!res.ok) {
        document.getElementById("error-msg").textContent = data.message;
        return; 
    }

    const {username, loggedIn} = data;

    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', loggedIn);

    window.location.href = '/homepage.html';


})