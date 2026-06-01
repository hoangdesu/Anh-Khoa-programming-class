import { useState } from "react";

export default function CarCard({ car, inStock }) {
  const [amount, setAmount] = useState(1);

  const addOne = () => {
    setAmount(amount + 1);
  }

  const decrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
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

      <button disabled={!inStock} onClick={() => alert(`Thanks for buying ${amount} ${car.name}!`)}>
        {inStock ? 'Buy Now!!' : 'OUT OF STOCK'}
      </button>
    </div>
  );
}
