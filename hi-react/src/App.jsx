import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  // const [count, setCount] = useState(911);

  // // variable
  // let favCar = 'Porsche 911 GT3 RS';

  // const onAdd = () => {
  //   setCount(count + 1);
  // };

  // let myCounter = 1;

  // return (
  //   <div>
  //     <p>My favorite car is <b>{favCar}</b></p>

  //     <h1>Count = {count}</h1>
  //     <button onClick={onAdd}>Add 1</button>

  //     <button onClick={() => {
  //       myCounter++;
  //       console.log('my counter: ', myCounter);
        
  //     }}>My counter: {myCounter}</button>

  //   </div>
  // )


  // React hooks: use...

  const [counter, setCounter] = useState(90); // default value of counter = 90

  const increaseCounter = () => {
    // counter = 10; not gonna work

    setCounter(counter + 1);
  }

  return (
    <div>
      <p>Counter: {counter}</p>

      <button onClick={() => setCounter(counter - 1)}>Decrease counter</button>
      <button onClick={increaseCounter}>Increase counter</button>
    </div>
  )

}

export default App
