const storySlides = [
    {
        image: 'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
        title: '750S Development Stories - Durability',
        content: 'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.'
    },
    {
        image: 'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
        title: '750S Development Stories - Durability',
        content: 'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception. Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        image:"https://cars-assets-production.mclaren.com/2202/750s-every-limit-can-be-surpassed-banner.jpg",
        title: '750S. Every limit can be surpassed.',
        content: 'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.'
    },
    {
        image: 'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
        title: '750S Development Stories - Durability',
        content: 'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.'
    },
    {
        image: 'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
        title: '750S Development Stories - Durability',
        content: 'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.'
    },
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

storySlides.forEach(story => {
    const swiperSlide = `
        <div class="swiper-slide">
            <img src="${story.image}" alt="${story.title}">
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <a href="#">Read more</a>
        </div>
    `;

    swiperWrapper.innerHTML += swiperSlide;
});


const speedH1 = document.querySelector('#speed-h1');
const filledDiv = document.querySelector('#filled');

let speedCounter = 0;
const speedCapped = 332;
let filledPercentage = speedCounter / speedCapped;

const intervalId = setInterval(() => {
    speedCounter++;
    speedH1.textContent = speedCounter;

    filledPercentage = speedCounter / speedCapped * 100;
    filledDiv.style.height = `${filledPercentage}%`;

    if (speedCounter === speedCapped) {
        clearInterval(intervalId);
    }
}, 5); // 1000ms = 1s

// 332 = 100%
// 3.32 = 1%

