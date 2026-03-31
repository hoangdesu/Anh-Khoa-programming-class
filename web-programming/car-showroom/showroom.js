const storySlides = [
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
            <button>Read more</button>
        </div>
    `;

    swiperWrapper.innerHTML += swiperSlide;
})