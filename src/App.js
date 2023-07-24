import React, { useState } from 'react';
import './style.css';

function ListItem({ id, name }) {
  return (
    <li id={id}>
      {name}
      <button>Remove</button>
    </li>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Table' },
    { id: 2, name: 'Chair' },
    { id: 3, name: 'Fan' },
  ]);

  const handleDelete = (event) => {
    const liId = event.target.parentElement.id;
    setProducts(products.filter((product) => product.id !== parseInt(liId)));
  };

  const handleListClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
      handleDelete(event);
    }
  };

  return (
    <div className="App">
      <ul id="products" onClick={handleListClick}>
        {products.map((product) => (
          <ListItem key={product.id} id={product.id} name={product.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
