import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: "Rs. 29.99", quantity: 1 },
    { id: 2, name: 'Product 2', price: "Rs. 19.99", quantity: 2 },
    { id: 3, name: 'Product 3', price: "Rs. 49.99", quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between items-center border-b py-4">
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                  Buy Now
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
