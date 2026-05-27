export default function CarCard({ car, inStock }) {
  return (
    <div className="car-card">
      <img
        src={car.image}
        alt=""
      />
      <h1>{car.name}</h1>
      <p>${car.price}</p>
      <button disabled={!inStock} onClick={() => alert(`Thanks for buying ${car.name}!`)}>
        {inStock ? 'Buy Now!!' : 'OUT OF STOCK'}
      </button>
    </div>
  );
}
