console.log('hehe');

// const CLOUDINARY_API_KEY = '7EviaCVyhv9J4OyNW4Rw0_lQwkM';

// 'https://res.cloudinary.com/freshlysteven/image/upload/v1772876324/IMG_6691_heamer.heic'
const cloudName = 'freshlysteven';
// const tag = 'mclaren';
const tag = 'lambo';

// This special URL returns a JSON list of all images with that tag
const url = `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`;

console.log(url);

const mainImage = document.querySelector('#main-img img');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.getElementById('gallery');

    data.resources.forEach((img) => {
      const imgElement = document.createElement('img');

      // Construct the image URL using the public_id from the list
      imgElement.src = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/w_300,c_scale/${img.public_id}.${img.format}`;
      //   imgElement.style.margin = '10px';

      imgElement.addEventListener('click', () => {
        mainImage.src = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/${img.public_id}.${img.format}`;
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });

      gallery.appendChild(imgElement);
    });
  })
  .catch((err) => console.error('Could not load images:', err));
