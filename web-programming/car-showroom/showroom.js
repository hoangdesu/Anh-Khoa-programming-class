const storySlides = [
  {
    image:
      'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
    title: '750S Development Stories - Durability',
    content:
      'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.',
  },
  {
    image:
      'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
    title: '750S Development Stories - Durability',
    content:
      'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    image:
      'https://cars-assets-production.mclaren.com/2202/750s-every-limit-can-be-surpassed-banner.jpg',
    title: '750S. Every limit can be surpassed.',
    content:
      'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.',
  },
  {
    image:
      'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
    title: '750S Development Stories - Durability',
    content:
      'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.',
  },
  {
    image:
      'https://cars-assets-production.mclaren.com/2208/750s-development-stories-durability-banner.jpg',
    title: '750S Development Stories - Durability',
    content:
      'All over the world, from labs to real-life, teams work tirelessly to make sure every McLaren lasts a lifetime. The 750S is no exception.',
  },
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

storySlides.forEach((story) => {
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

// 332 = 100%
// 3.32 = 1%

// Only run the animation when scrolled into view



// 3. Create the observer instance
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //   console.log("The div is now in the viewport!");

        const intervalId = setInterval(() => {
          speedCounter++;
          speedH1.textContent = speedCounter;

          filledPercentage = (speedCounter / speedCapped) * 100;
          filledDiv.style.height = `${filledPercentage}%`;

          if (speedCounter === speedCapped) {
            clearInterval(intervalId);
          }
        }, 5); // 1000ms = 1s

        // Optional: Stop observing after it's seen once
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1.0,
  },
);

// 1. Select the element you want to watch
const specificationDiv = document.querySelector('.specification');
observer.observe(specificationDiv);


// manual
// window.addEventListener('scroll', (evt) => {
//     console.log(window.scrollY);

//     if (window.scrollY > 1950) {
//         const intervalId = setInterval(() => {
//           speedCounter++;
//           speedH1.textContent = speedCounter;

//           filledPercentage = (speedCounter / speedCapped) * 100;
//           filledDiv.style.height = `${filledPercentage}%`;

//           if (speedCounter === speedCapped) {
//             clearInterval(intervalId);
//           }
//         }, 5); // 1000ms = 1s
//     }
// });

const images = [
  "/Mclaren/IMG_7096.jpg",
  "/Mclaren/IMG_7088.jpg",
  "/Mclaren/IMG_7091.jpg",
  "/Mclaren/IMG_7102.jpeg",
  "/Mclaren/IMG_7106.jpeg",
  "/Mclaren/IMG_7104.jpeg",
  "/Mclaren/IMG_7120.jpg",
  "/Mclaren/IMG_7105.jpg",
  "/Mclaren/IMG_7099.jpg",
  "/Mclaren/IMG_7100.jpg",
  "/Mclaren/IMG_7097.jpeg",
  "/Mclaren/IMG_7115.jpg",
  "/Mclaren/IMG_6585.jpg",
  "/Mclaren/IMG_6598.jpeg",
  "/Mclaren/IMG_6596.jpg"
];

const imagesGallery = document.querySelector('#images-gallery');
images.forEach(image => {
  const img = document.createElement('img');

  img.src = image;

  imagesGallery.append(img);
});
