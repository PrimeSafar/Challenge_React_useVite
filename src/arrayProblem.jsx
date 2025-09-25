import { useState } from "react";

export default function ShoppingCart() {
  //* Initial products array with id, name, and count
  const initialProducts = [
    { id: 0, name: "Baklava", count: 1 },
    { id: 1, name: "Cheese", count: 5 },
    { id: 2, name: "Spaghetti", count: 2 },
  ];

  //! React state to store the products list
  const [products, setProducts] = useState(initialProducts);

  //TODO Function to increase count of a specific product
  function handleIncreaseClick(productId) {
    const newProducts = products.map((e) => {
      // If the product id matches, return a new object with count + 1
      if (e.id === productId) {
        return { ...e, count: e.count + 1 };
      } else {
        //? Otherwise, return the product unchanged
        return e;
      }
    });
    //! Update state with the new products array
    setProducts(newProducts);
  }

  //* Function to decrease count of a specific product
  function handleDecreaseClick(productId) {
    const newProducts = products.map((e) => {
      //! If the product id matches, return a new object with count - 1
      if (e.id === productId) {
        return { ...e, count: e.count - 1 };
        //? e.count > 0 ? e.count - 1 : 0 we can make this for critical logic
      } else {
        //! Otherwise, return the product unchanged
        return e;
      }
    });
    //? Update state with the new products array
    setProducts(newProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          {/* Button to increase count */}
          <button onClick={() => handleIncreaseClick(product.id)}>+</button>
          {/* Button to decrease count */}
          <button onClick={() => handleDecreaseClick(product.id)}>-</button>
        </li>
      ))}
    </ul>
  );
}
