'use client'; // This directive marks the component as a Client Component

import React, { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [bundleQuantity, setBundleQuantity] = useState(1);
  const pricePerBundle = 25.00; // Example price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(bundleQuantity * pricePerBundle);
  }, [bundleQuantity, pricePerBundle]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setBundleQuantity(value);
    } else if (e.target.value === '') {
      setBundleQuantity(0); // Allow clearing the input temporarily
    }
  };

  const handleProceedToCheckout = () => {
    alert(`Proceeding to checkout with ${bundleQuantity} bundles for a total of $${totalPrice.toFixed(2)}`);
    // In a real application, you would integrate with a payment gateway here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>

        <div className="mb-6">
          <label htmlFor="bundleQuantity" className="block text-gray-700 text-sm font-bold mb-2">
            Choose Bundle Quantity:
          </label>
          <input
            type="number"
            id="bundleQuantity"
            name="bundleQuantity"
            min="1"
            value={bundleQuantity}
            onChange={handleQuantityChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g., 2"
          />
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Price: <span className="text-blue-600 text-2xl">${totalPrice.toFixed(2)}</span>
          </h2>
          <p className="text-gray-500 text-sm">Price per bundle: ${pricePerBundle.toFixed(2)}</p>
        </div>

        <button
          onClick={handleProceedToCheckout}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
} 