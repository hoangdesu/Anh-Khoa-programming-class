import { useEffect, useEffectEvent, useState } from "react";

export default function CarCard({ car, inStock }) {

  const [amount, setAmount] = useState(1);

  // derived/calculated value
  const total = amount * car.price;

  // run code ONLY ONCE on init
  useEffect(() => {
    console.log('CarCard component initialized!');
  }, []);

  console.log('CarCard component RE-RENDERED!');

  const addOne = () => {
    setAmount(amount + 1);
  }

  const decrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  const displayAlert = () => {
    alert(`Thanks for buying ${car.name}. Your total is ${amount} cars x $${car.price} = $${total.toLocaleString()}!`)
  }

  return (
    <div className="car-card">
      <img
        src={car.image}
        alt=""
      />
      <h1>{car.name}</h1>
      <p>${car.price}</p>

      <div className="amount-container">
        <button onClick={decrease}>-</button>
        <span>{amount}</span>
        <button onClick={addOne}>+</button>
      </div>

      <button disabled={!inStock} onClick={displayAlert}>
        {inStock ? 'Buy Now!!' : 'OUT OF STOCK'}
      </button>
    </div>
  );
}
