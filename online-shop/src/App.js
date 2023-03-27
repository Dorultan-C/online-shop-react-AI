import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <h1>Online Shop</h1>
      </header>
      <main>
  <h2>Products</h2>
  <ul>
    <li>
      <h3>Product 1</h3>
      <p>Description of product 1</p>
      <p>Price: $9.99</p>
      <button>Add to Cart</button>
    </li>
    <li>
      <h3>Product 2</h3>
      <p>Description of product 2</p>
      <p>Price: $19.99</p>
      <button>Add to Cart</button>
    </li>
    <li>
      <h3>Product 3</h3>
      <p>Description of product 3</p>
      <p>Price: $29.99</p>
      <button>Add to Cart</button>
    </li>
  </ul>
</main>

      <footer>
        <p>&copy; 2023 Online Shop</p>
      </footer>
    </div>
  );
}

export default App;
