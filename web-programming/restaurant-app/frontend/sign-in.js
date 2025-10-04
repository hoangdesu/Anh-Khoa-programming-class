// skip sign in if user is already signed in
const username = localStorage.getItem('username');
const loggedIn = localStorage.getItem('loggedIn');

if (username && loggedIn) {
    window.location.href = '/home.html';
}


const signInForm = document.querySelector("#sign-in-form");

signInForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    console.log('signning in...', signInForm[0].value, signInForm[1].value);
    
    const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({ usrname: signInForm[0].value, psword: signInForm[1].value }),
        headers: {
            'Content-Type': 'application/json'
        } 
    });

    const data = await res.json();

    console.log(data);

    const { username, loggedIn } = data;

    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', loggedIn);

    window.location.href = '/home.html';
    
});
