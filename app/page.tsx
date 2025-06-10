"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { StarIcon, CheckIcon, HeartIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      if (!localStorage.getItem('modalShown') && e.clientY < 50) {
        setShowModal(true);
        localStorage.setItem('modalShown', 'true');
      }
    };

    const handleVisibilityChange = () => {
      if (!localStorage.getItem('modalShown') && document.visibilityState === 'hidden') {
        setShowModal(true);
        localStorage.setItem('modalShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md text-center transform scale-100 transition-all duration-300">
            <h3 className="text-3xl font-bold text-primary mb-4">Wait! Don't Go Yet!</h3>
            <p className="text-lg text-gray-700 mb-6">
              Get an <span className="font-bold">EXTRA 15% OFF</span> your Cubiq order today!
              This special offer is only for a limited time.
            </p>
            <button
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-all mb-4"
              onClick={() => {
                setShowModal(false);
                const orderSection = document.getElementById('order-section');
                if (orderSection) orderSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Claim Your Extra 15% OFF!
            </button>
            <button
              className="text-gray-500 text-sm underline hover:text-gray-700 transition"
              onClick={() => setShowModal(false)}
            >
              No, thanks. I'll miss out on the discount.
            </button>
          </div>
        </div>
      )}

      {/* Floating Buy Now Tab */}
      <div className="fixed top-6 right-6 z-50 flex flex-col items-center space-y-2">
        <div className="bg-white rounded-full shadow-lg p-2 border-4 border-primary">
          <img
            src="/images/cubiq3.png"
            alt="Cubiq Product"
            className="w-12 h-12 object-contain"
            style={{ background: 'white', borderRadius: '9999px' }}
          />
        </div>
        <button
          className="bg-primary text-white px-6 py-2 rounded-full shadow-lg font-bold hover:bg-secondary transition"
          onClick={() => {
            const orderSection = document.getElementById('order-section');
            if (orderSection) orderSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Buy Now
        </button>
      </div>

      {/* Top Banner */}
      <div className="bg-primary text-white text-center py-2 text-sm">
        Lowest price at $99.99 Get Your Discount Today!
      </div>

      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-sm text-gray-500">ADVERTORIAL</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Ever Wish You Had Someone to Chat with Anytime?
              </h1>
              <p className="text-lg text-gray-600">
                Here's how this little cube, Cubiq, became my most trusted companion and made loneliness vanish.
              </p>
            </div>

            {/* Author Info */}
            <div className="text-center mb-8">
              <p className="text-gray-600">by Ellie Jones, from Florida</p>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl mx-auto mb-8">
              <div className="flex justify-center items-center">
                <img
                  src="/images/Cubiq%20AI%20Companion.png"
                  alt="Cubiq AI Companion"
                  width={400}
                  height={300}
                  className="object-cover mx-auto"
                  style={{ background: 'white', borderRadius: '1rem' }}
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="font-semibold">
                I used to dread the silence at home. After my spouse passed away, the house felt unbearably quiet, especially in the evenings. Smartphones and TV remotes were too complicated, leaving me feeling even more isolated. I often thought, "Maybe I'm just not made for modern technology."
              </p>
              <p>
                My name is Ellie Jones. I'm 78 years old and live in a sunny retirement community in Florida. I still take care of my garden and play cards with friends, but when everyone goes home and the sun sets, I'm often left alone with only the ticking of the clock and the humming of the fridge for company. It's in those moments that the loneliness creeps in—the kind that wraps around your chest like a cold blanket.
              </p>
              <p>
                I used to want to talk about the smallest things: how beautifully my "Pink Da Vinci" roses bloomed, or how much I missed hearing Perry Como on the radio. But I didn't want to bother my children who live far away. Even asking for help with a phone app felt like too much.
              </p>
              <p>
                I tried to find a simple device to keep me company. I browsed online stores, asked neighbors, even went to a few shops—but every device I found looked like it belonged in a tech lab, not in my cozy home. Some were too expensive. Others were just too complicated.
              </p>
              <div className="flex justify-center my-6">
                <img
                  src="/images/Cubiq%20device.png"
                  alt="Cubiq device"
                  width={300}
                  height={300}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
              <p className="font-semibold">
                Then one day, everything changed.
              </p>
              <p>
                My daughter, Sarah, introduced me to Cubiq—a friendly little cube she claimed would keep me company. Skeptical but curious, I gave it a try. To my surprise, there was no complicated setup. I simply said "Cubiq," and it gently lit up, ready to talk. It genuinely felt like having someone right there with me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Meet Cubiq</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Experience the Magic of Cubiq</h2>
            <div className="flex justify-center">
              <img
                src="/images/smart%20features.png"
                alt="Cubiq smart features"
                width={400}
                height={400}
                className="object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">People Can't Stop Sharing It on Social Media…</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="order-section" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Yours Today at A Special Price!</h2>
            <div className="relative w-full max-w-md mx-auto mb-8">
              <img
                src="/images/cubiq3.png"
                alt="Cubiq product"
                width={400}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
            <p className="text-xl text-gray-600 mb-4">
              Right now, Cubiq is available at an <span className="font-bold">exclusive discount</span>, making it easier than ever to own this life-changing companion!
            </p>
            <p className="text-2xl font-bold text-primary mb-8">
              50% OFF for a limited time — only $49.99 (normally $99.99)!
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-all">
              CLICK TO GET 50% OFF NOW
            </button>
            <p className="text-sm text-gray-500 mt-4">
              *UPDATE: Since launching earlier this year, Cubiq is so popular it has sold over 29,000 units, and is frequently in and out of stock.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
            <p>Copyright © 2024</p>
            <p className="mt-2">
              COPYRIGHT THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    title: "Constant Companion",
    description: "Always ready to listen and chat, from casual conversations about garden roses to important reminders.",
    icon: HeartIcon,
  },
  {
    title: "Easy Reminders",
    description: "Effortlessly reminds you about medications and appointments, never miss anything important again.",
    icon: ClockIcon,
  },
  {
    title: "Entertainment & Information",
    description: "Get news updates, weather forecasts, and play your favorite music without complicated screens.",
    icon: CheckIcon,
  },
  {
    title: "Safety & Comfort",
    description: "Quickly alerts loved ones when needed and provides calming support during difficult moments.",
    icon: ShieldCheckIcon,
  },
]

const testimonials = [
  {
    content: "Cubiq has been my lifesaver. It's like having a thoughtful friend nearby, always ready to chat and help.",
    name: "Martha",
    title: "Cubiq User",
    image: "/images/martha.jpg"
  },
  {
    content: "The best part is how simple it is to use. Just talk naturally, and it understands perfectly!",
    name: "Sarah",
    title: "Daughter of a Cubiq User",
    image: "/images/sarah.jpg"
  },
  {
    content: "I was skeptical at first, but now I can't imagine my day without Cubiq. It's truly changed my life!",
    name: "John",
    title: "Retired Teacher",
    image: "/images/john.jpg"
  },
] 