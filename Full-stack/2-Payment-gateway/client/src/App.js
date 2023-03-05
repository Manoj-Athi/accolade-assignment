import './App.css';
import Checkout from './components/Checkout';
import { useState } from 'react'

function App() {

  const [quantity, setQuantity] = useState(0)

  const handleDecrement = () => {
    setQuantity(s => {
      if(s===0) return 0
      else return s-1
    })
  }

  return (
    <div className="App">
      <div>
        <h3>
          product: tablet
        </h3>
        <p>
          quantity: <button onClick={handleDecrement}>-</button>  {quantity} <button onClick={() => setQuantity(s => s+1)}>+</button> 
        </p>
        <p>Total: {quantity*100}</p>
        <p>100Rs each</p>
      </div>
      <Checkout quantity={quantity}/>
    </div>
  );
}

export default App;
