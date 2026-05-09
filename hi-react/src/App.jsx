import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(911);

  // variable
  let favCar = 'Porsche 911 GT3 RS';

  const onAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>My favorite car is <b>{favCar}</b></p>

      <h1>Count = {count}</h1>
      <button onClick={onAdd}>Add 1</button>
    </div>
  )
}

export default App
