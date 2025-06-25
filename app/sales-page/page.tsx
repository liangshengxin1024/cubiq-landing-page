'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CubiqProductImage from '/public/images/cubiq3.png'; // Assuming this is your main product image

export default function SalesPage() {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(0);
    }
  };

  const handleAddToCart = () => {
    // In a real app, you would add to cart state/context
    // For now, we will simply redirect to the checkout page.
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <Image
              src={CubiqProductImage}
              alt="Cubiq - Your Smart Little Companion"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Cubiq - Your Smart Little Companion</h1>
            <div className="text-xl font-semibold mb-4">
              <span className="line-through text-gray-500 mr-2">$159.98 USD</span>
              <span className="text-blue-600">$79.99 USD</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out shadow-lg"
            >
              Add to cart
            </button>

            <p className="text-sm text-gray-600 mt-4">
              This item is a recurring or deferred purchase. By continuing, I agree to the cancellation policy and authorize you to charge my payment method at the prices, frequency and dates listed on this page until my order is fulfilled or I cancel, if permitted.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-8 space-y-6">
          {/* Features Tab */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Cubiq Features</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src="/images/Knowledge Q&A.png"
                alt="Knowledge Q&A"
                width={300}
                height={300}
                className="rounded-lg shadow"
              />
              <img
                src="/images/Emotional Companionship.png"
                alt="Emotional Companionship"
                width={300}
                height={300}
                className="rounded-lg shadow"
              />
              <img
                src="/images/Hot Topics.png"
                alt="Hot Topics"
                width={300}
                height={300}
                className="rounded-lg shadow"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold border-b pb-4 mb-4">Talk. Laugh. Feel Understood.</h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Cubiq</span> isn't just a device — it's a friend who's always there. Whether you live alone, have aging parents, or simply want a touch of warmth in your daily routine, Cubiq brings intelligent conversation, companionship, and peace of mind into your life.
          </p>

          <h2 className="text-2xl font-bold border-b pb-4 mb-4">🌟 Why People Love Cubiq</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
            {/* Removed placeholder benefit items */}
          </ul>
          <div className="flex justify-center my-6">
            <img
              src="/product%20pic.gif"
              alt="Cubiq product gif"
              width={400}
              height={400}
              className="object-contain rounded-xl shadow-lg"
            />
          </div>

          <h2 className="text-2xl font-bold border-b pb-4 mb-4">🎤 What Can Cubiq Do?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
            <li><span className="font-bold">Tell You the Weather</span></li>
            <li><span className="font-bold">Read the Latest News</span></li>
            <li><span className="font-bold">Play Music You Love</span></li>
            <li><span className="font-bold">Offer Calming Words When You're Anxious</span></li>
            <li><span className="font-bold">Chat Like a Real Friend</span></li>
            <li><span className="font-bold">Remind You About Meds & Appointments</span></li>
            <li><span className="font-bold">Alert Family in Emergencies (Optional Setting)</span></li>
          </ul>

          {/* Chat History Images Section */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src="/images/chat history.png"
                alt="Chat History Example 1"
                width={300}
                height={300}
                className="rounded-lg shadow"
              />
              <img
                src="/images/chat history 3.png"
                alt="Chat History Example 3"
                width={300}
                height={300}
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </section>

        {/* Call to Action & Guarantee */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-8 text-center">
          <h2 className="text-2xl font-bold border-b pb-4 mb-4">Bring Cubiq Home</h2>
          <div className="mb-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">💸 Try It Risk-Free</h3>
            <img
              src="/images/30 day.png"
              alt="30 Day Guarantee"
              width={200}
              height={200}
            />
            <p className="text-lg text-gray-700">
              We know trying new things can be daunting — so we offer a 30-day happiness guarantee. If you (or your loved one) don't fall in love with Cubiq, return it, no questions asked.
            </p>
          </div>
          <h3 className="text-xl font-bold mb-4">🧡 Ready to Meet Your Companion?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Don't let another day go by in silence. <br/>
            Add warmth, support, and conversation back into your life with Cubiq.
          </p>
          <button
            onClick={handleAddToCart} // Re-using for consistency to go to checkout
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition duration-150 ease-in-out shadow-lg transform hover:scale-105"
          >
            👉 Order Cubiq Now
          </button>
          <p className="text-sm text-gray-600 mt-4">Ships in 1-2 business days. Free support always included.</p>
        </section>
      </main>

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
    </div>
  );
} 