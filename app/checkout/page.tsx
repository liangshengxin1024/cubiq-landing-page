'use client'; // This directive marks the component as a Client Component

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Assuming you might use images
import CubiqProductImage from '/public/images/cubiq3.png'; // Static import for the product image

const bundles = [
  {
    quantity: 1,
    originalPrice: 159.98,
    discountedPrice: 79.99,
    label: '1x Cubiq Device',
    savingsPercentage: 50,
  },
  {
    quantity: 2,
    originalPrice: 319.96,
    discountedPrice: 154.99,
    label: '2x Cubiq Devices',
    savingsPercentage: 52,
    recommended: true,
  },
  {
    quantity: 3,
    originalPrice: 479.94,
    discountedPrice: 224.99,
    label: '3x Cubiq Devices',
    savingsPercentage: 53,
  },
  {
    quantity: 4,
    originalPrice: 639.92,
    discountedPrice: 289.99,
    label: '4x Cubiq Devices',
    savingsPercentage: 55,
  },
  {
    quantity: 5,
    originalPrice: 799.90,
    discountedPrice: 349.99,
    label: '5x Cubiq Devices',
    savingsPercentage: 56,
  },
];

export default function CheckoutPage() {
  const [selectedBundle, setSelectedBundle] = useState(bundles[1]); // Default to 2x recommended
  const [shippingCost, setShippingCost] = useState(4.99); // Example shipping cost
  const [shippingInsurance, setShippingInsurance] = useState(2.99); // Example insurance cost
  const [tax, setTax] = useState(0); // Placeholder for tax

  const subtotal = selectedBundle.originalPrice;
  const discount = subtotal - selectedBundle.discountedPrice;
  const total = selectedBundle.discountedPrice + shippingCost + shippingInsurance + tax;

  const checkoutFormRef = useRef<HTMLFormElement>(null); // Ref for form submission

  const handleProceedToCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Proceeding to checkout with ${selectedBundle.quantity} bundles for a total of $${total.toFixed(2)}. This is a placeholder for actual payment integration.`);
    // In a real application, you would collect form data and integrate with a payment gateway here
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Discount Banner */}
      <div className="bg-green-600 text-white text-center py-2 text-sm md:text-base font-semibold">
        Your Up To {selectedBundle.savingsPercentage}% OFF Discount Has Been Applied!
      </div>

      <div className="container mx-auto px-4 py-8 md:flex md:space-x-8">
        {/* Left Column - Product Selection & Form */}
        <div className="md:w-2/3 space-y-8">
          {/* Select Quantity Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Select Quantity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bundles.map((bundle) => (
                <div
                  key={bundle.quantity}
                  className={`relative border-2 p-4 rounded-lg cursor-pointer transition-all duration-200
                    ${selectedBundle.quantity === bundle.quantity
                      ? 'border-blue-600 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'}
                  `}
                  onClick={() => setSelectedBundle(bundle)}
                >
                  {bundle.recommended && (
                    <span className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      RECOMMENDED DEAL
                    </span>
                  )}
                  <div className="flex items-center space-x-4 mb-2">
                    <input
                      type="radio"
                      name="bundleOption"
                      checked={selectedBundle.quantity === bundle.quantity}
                      onChange={() => setSelectedBundle(bundle)}
                      className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{bundle.label}</h3>
                  </div>
                  <div className="flex justify-between items-baseline mt-4">
                    <span className="text-sm text-gray-500 line-through">${bundle.originalPrice.toFixed(2)}</span>
                    <span className="text-2xl font-bold text-blue-600">${bundle.discountedPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-right text-green-600 font-semibold text-sm">{bundle.savingsPercentage}% Savings!</p>
                  <p className="text-right text-gray-500 text-xs">${(bundle.discountedPrice / bundle.quantity).toFixed(2)}/each</p>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Information Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Shipping Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="you@example.com" required />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="aptSuite" className="block text-sm font-medium text-gray-700">Apt / Suite / Other</label>
                <input type="text" id="aptSuite" name="aptSuite" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" id="country" name="country" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700">State/Province</label>
                <input type="text" id="stateProvince" name="stateProvince" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip/Postal Code</label>
                <input type="text" id="zipCode" name="zipCode" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
            </form>
          </section>

          {/* Payment Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Payment</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="radio" name="paymentOption" id="creditCard" value="creditCard" className="form-radio h-4 w-4 text-blue-600" defaultChecked />
                <label htmlFor="creditCard" className="ml-2 block text-sm font-medium text-gray-700">
                  OR PAY WITH CREDIT CARD
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Credit Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="•••• •••• •••• ••••" required />
                </div>
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input type="text" id="expiryDate" name="expiryDate" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="MM/YY" required />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" id="cvv" name="cvv" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="•••" required />
                </div>
              </div>
              <p className="text-center text-red-500 text-sm mt-4">Your Card Info is invalid (Placeholder)</p>
              <div className="text-center mt-6">
                <p className="text-gray-600 font-semibold">GUARANTEED SAFE CHECKOUT</p>
                {/* Add security icons here if desired */}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Order Summary */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h2>
            <div className="space-y-3 text-gray-700 text-base">
              <div className="flex justify-between items-center">
                <span>QTY:</span>
                <span className="font-semibold">{selectedBundle.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span className="text-green-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Insurance:</span>
                <span>${shippingInsurance.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-3 mt-3">
                <span>Tax:</span>
                <span>Applicable taxes will be calculated at checkout</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-3 mt-3">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" required />
                <span className="ml-2">
                  I agree with the <a href="#" className="text-blue-600 hover:underline">Term of service</a> &{' '}
                  <a href="#" className="text-blue-600 hover:underline">Refund policy</a> &{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition duration-150 ease-in-out"
            >
              COMPLETE SECURE PURCHASE
            </button>

            <div className="text-center mt-4 text-gray-500 text-sm">
              <p className="font-bold mb-2">30 DAY GUARANTEE:</p>
              <p>Gadgdrop offers a 30 day guarantee on all unused purchases. Simply send the item(s) back to us in the original packaging for a full refund or replacement, less S&H.</p>
            </div>
          </div>

          {/* Product Image and Social Proof (Placeholder) */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-center">
            <Image
              src={CubiqProductImage} // Use the statically imported image
              alt="Cubiq Product"
              className="mx-auto mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">Cubiq AI Companion</p>
            <div className="mt-4 text-sm text-gray-600">
              {/* This would typically be dynamic data */}
              <p>John D. from New York just purchased: Cubiq Device</p>
              <p className="text-xs text-gray-500">JUST NOW</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 text-sm mt-8">
        <p>©2025 - Gadgdrop</p>
        <nav className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Shipping & Delivery</a>
          <a href="#" className="hover:underline">Refund policy</a>
          <a href="#" className="hover:underline">Term of service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>
      </footer>

      {/* Exit Intent/Upsell Modal (Client-side logic as before) */}
      {/* You would integrate this logic here, similar to your app/page.tsx modal */}
      {/* For brevity, I'm omitting the full modal code but indicating its placement */}
    </div>
  );
} 