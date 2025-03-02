console.log('Hello from my Car website :D'); // print()

// Add interaction when the button is clicked

// 1. select the element from HTML
const buySennaButton = document.querySelector('#buy-senna');

// 2. add the logic when the button is clicked
buySennaButton.addEventListener('click', () => {
    // console.log('clicked on the buy senna button!!');
    const amount = parseFloat(prompt('Enter your amount:'));

    if (amount >= 2_000_000) {
        const change = amount - 2_000_000;
        alert('Thank you for buying our McLaren Senna! Here is your change: $' + change);

        // use JS to change the HTML
        buySennaButton.disabled = true;
        buySennaButton.textContent = 'Out ot stock!';
    } else {
        alert('Sorry you are to poor to buy a Senna :(');
    }
}); 


const sennaImages = ['senna1.jpg', 'senna2.jpg', 'senna3.jpeg'];
let imageIndex = 0;

const sennaImg = document.querySelector('#senna-img');
const backButton = document.querySelector('#back-btn');
const nextButton = document.querySelector('#next-btn');

nextButton.addEventListener('click', () => {
    // if (imageIndex < 2) {
    //     imageIndex++;
    // }
    
    imageIndex++;
    sennaImg.src = sennaImages[imageIndex % 3];
});

backButton.addEventListener('click', () => {    
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = 2;
    }
    
    sennaImg.src = sennaImages[imageIndex  % 3];
});