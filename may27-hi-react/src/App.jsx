import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './Car.css';
import CarCard from './CarCard';

function App() {

  const mclaren = {
    name: 'McLaren 750S MSO',
    image: 'https://anhquarter.github.io/cars-showroom/Mclaren/750mso.jpg',
    price: 1_000_000
  }

  const ferr = {
    name: 'SF90 XX',
    image: 'https://economymiddleeast.com/cdn-cgi/imagedelivery/Xfg_b7GtigYi5mxeAzkt9w/economymiddleeast.com/2023/06/H5A4061-2_640x480.jpg/w=640,h=427',
    price: 1_500_000
  }

  const porsche = {
    name: '911 GT3 RS',
    image: 'https://anhquarter.github.io/cars-showroom/Porsche/IMG_7654.jpg',
    price: 2_000_000
  }

  return (
    <>
      <h1>Hehe</h1>
      <button onClick={() => alert('wasssup')}>Click me</button>

      <div className='car-container'>
        {/* <div className='car-card'>
          <img src="https://anhquarter.github.io/cars-showroom/Mclaren/IMG_7096.jpg" alt="" />
          <h1>McLaren 750S MSO</h1>
          <p>$1,000,000</p>
        </div> */}
        {/* => <CarCard car > */}

        <CarCard car={mclaren} inStock={false} />
        <CarCard car={ferr} inStock={true} />
        <CarCard car={porsche} inStock={false} />

      </div>
    </>
  )
}

export default App

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   alert('wassupppp')
// })

