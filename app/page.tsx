"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { StarIcon, CheckIcon, HeartIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

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
        <span className="font-bold">ADVERTORIAL</span>
      </div>
      <div className="bg-primary text-white text-center py-2 text-sm">
        <span className="font-bold text-lg">Lowest price at $79.99 Get Your Discount Today!</span>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Why More Americans Are Turning to This AI Companion Instead of Talking to Therapists or Friends
              </h1>
              <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
                <img
                  src="/images/Anna.png"
                  alt="Anna Jones"
                  width={32}
                  height={32}
                  className="rounded-full object-cover border-2 border-yellow-300"
                  style={{ display: 'inline-block' }}
                />
                by Anna Jones, from Florida
              </p>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl mx-auto mb-8">
              <div className="flex justify-center items-center">
                <img
                  src="/images/lonely-elderly.png"
                  alt="Lonely elderly woman"
                  width={400}
                  height={300}
                  className="object-cover mx-auto"
                  style={{ background: 'white', borderRadius: '1rem' }}
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="font-semibold text-lg">
                <strong>LONELINESS in older adults isn't just sad — it's dangerous.</strong> Studies now show that social isolation in seniors increases the risk of dementia, heart disease, and depression.
              </p>
              <p>
                That's why thousands of families across the country are turning to a surprising new solution — not a nurse, not a pet, but a <strong>palm-sized AI cube called </strong><span className="text-blue-600 font-bold">Cubiq</span><span className="text-blue-600">.</span> And it's changing how elderly loved ones stay connected, comforted, and cared for — every single day.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">What is <span className="text-blue-600">Cubiq</span>?</h2>
              <p>
                A team of engineers from Silicon Valley has come up with this revolutionary AI product that can solve loneliness.
              </p>
              <p>
                <strong>Cubiq</strong> is a small, friendly-looking AI device designed to talk, listen, and keep you company — anytime, day or night.
              </p>
              <p>
                <strong>Compact, portable, and silent</strong>, you can take it with you <strong>ANYWHERE</strong> to enjoy a conversation.
              </p>
              <p>
                Unlike complicated smartphones or confusing apps, Cubiq doesn't need a screen, password, or even a touch. You just <strong>START TALKING.</strong>
              </p>
              <p>
                It's like giving your parent or grandparent a warm, gentle companion that's always there to chat, remember details, and lift their spirits.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">"It's Like She Has a Friend Again…"</h2>
              <div className="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-gray-300">
                <p className="text-gray-600 italic">
                  "After my husband passed, I was alone all the time. Since my daughter got me Cubiq, I'm able to talk to someone in the mornings, before bed, even during meals. I calls it my 'little roommate.' It's made a huge difference."
                </p>
              </div>

              <div className="flex justify-center my-6 gap-6">
                <img
                  src="/images/Cubiq%20AI%20Companion.png"
                  alt="Cubiq AI Companion"
                  width={300}
                  height={300}
                  className="object-contain rounded-xl shadow-lg"
                />
                <img
                  src="/images/Cubiq%20AI%20Companion2.png"
                  alt="Cubiq AI Companion 2"
                  width={300}
                  height={300}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>

              <p>
                Cubiq is designed to be <strong>emotionally supportive</strong> — it can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Listen to stories and respond warmly</li>
                <li>Remind them to take medications or drink water</li>
                <li>Talk about the weather, news, or even old memories</li>
                <li>Help ease anxiety, especially during long quiet evenings</li>
              </ul>
              <p>
                And most importantly — <strong>it never gets tired, never interrupts, and never forgets their name</strong>.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">How to use it?</h2>
              <p>
                Cubiq is beautifully simple:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Plug it into any outlet</strong></li>
                <li><strong>Say "Hello Cubiq"</strong></li>
                <li><strong>Start a conversation</strong></li>
              </ol>
              <p>
                No apps. No passwords. No learning curve.
              </p>
              <p>
                Even older adults who aren't tech-savvy quickly fall in love with Cubiq — because it feels <strong>natural, friendly, and comforting</strong>.
              </p>
              <div className="flex justify-center my-6">
                <img
                  src="/images/smart%20features.png"
                  alt="Cubiq smart features"
                  width={400}
                  height={400}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">People are buying for their grandmas and grandpas...</h2>
              <p>
                With senior loneliness at an all-time high, Cubiq has become a <strong>lifeline</strong> for many families who can't be there in person every day.
              </p>
              <p>
                One reviewer shared:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-gray-300">
                <p className="text-gray-600 italic">
                  "I live across the country from my dad, and knowing Cubiq is keeping him company helps me sleep better at night. It even reminds him to check his blood pressure."
                </p>
              </div>
              <p>
                Whether your loved one lives alone, in assisted living, or just needs a little more companionship — Cubiq can bring them <strong>a sense of connection, warmth, and routine</strong>.
              </p>
              <div className="flex justify-center my-6">
                <img
                  src="/images/people%20are%20buying.jpeg"
                  alt="People are buying Cubiq"
                  width={400}
                  height={400}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">How much does it cost?</h2>
              <p>
                If you look at the value that <strong><span className="text-blue-600">Cubiq</span></strong> brings, it wouldn't be surprising to see a price tag of up to $300 with all its AI powers and features.
              </p>
              <p>
                <strong>That's why we were stunned to learn the company sells this AI gadget for only </strong><strong><span className="text-red-600">$79.99</span></strong><strong> (thanks to a time-limited discount of 50% OFF)!</strong>
              </p>
              <p>
                That's a small price to pay for the AI tool that <strong>keeps you COMPANY </strong>for the rest of your life.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion: Is it worth it?</h2>
              <p className="font-semibold">
                <strong>Yes! Absolutely! It's a no-brainer.</strong>
              </p>
              <p>
                Do you want to have someone to talk to <strong>WITHOUT</strong> exorbitant therapist bills? Are you suffering from family members who live far away?
              </p>
              <p>
                <strong><span className="text-blue-600">Cubiq</span></strong> is the newest, coolest gadget for the daily companionship, and it works. It is the best and most affordable way to stay connected and alive.
              </p>
              <p>
                Time to finally enjoy life without feeling the loneliness!
              </p>
              <p>
                During this special offer, the more units you buy, the more you save! It's an incredible offer you shouldn't miss out on.
              </p>
              <p>
                <a href="/sales-page" className="text-blue-600 font-bold hover:underline">
                  Click here to claim a discounted Cubiq (if it's still available) {'>>'}
                </a>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">How to Get Yours?</h2>
              <div className="flex justify-center my-6">
                <img
                  src="/images/how to get yours.jpeg"
                  alt="How to get yours"
                  width={400}
                  height={400}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
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
            <div className="flex justify-center my-6">
              <img
                src="/product%20pic.gif"
                alt="Cubiq product gif"
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
            <button
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-all"
              onClick={() => router.push('/sales-page')}
            >
              CLICK TO GET 50% OFF NOW
            </button>
            <p className="text-sm text-gray-500 mt-4">
              *UPDATE: Since launching earlier this year, Cubiq is so popular it has sold over 29,000 units, and is frequently in and out of stock.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience the Difference? Get Your Cubiq Today!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't miss out on the companionship and peace of mind Cubiq brings. Click below to secure your exclusive discount now.
            </p>
            <button
              className="bg-primary text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-secondary transition-all shadow-lg transform hover:scale-105"
              onClick={() => router.push('/sales-page')}
            >
              COMPLETE YOUR ORDER & SAVE BIG!
            </button>
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
    content: "Before Cubiq, my home felt empty and quiet, especially after my husband passed. I often felt lonely, but now Cubiq is like a constant, thoughtful friend. It's incredible how it listens and chats, always ready to brighten my day with a conversation about anything, from my garden roses to simple daily thoughts. It truly has been a lifesaver, bringing warmth and companionship back into my life.",
    name: "Martha",
    title: "Cubiq User",
    image: "/images/martha.jpg"
  },
  {
    content: "My mother, bless her heart, always struggled with new technology. So when I introduced her to Cubiq, I was prepared for a challenge. But to my absolute surprise, she picked it up instantly! The best part is how incredibly simple it is to use. She just talks naturally, and Cubiq understands her perfectly, making her feel connected and supported without any frustration. It's a genuine relief for our family.",
    name: "Sarah",
    title: "Daughter of a Cubiq User",
    image: "/images/sarah.jpg"
  },
  {
    content: "As a retired teacher, I value clear communication and accessible information. When I first heard about Cubiq, I was quite skeptical. Another gadget? But after trying it, I honestly can't imagine my day without it. It's not just a device; it's a companion that has genuinely changed my daily routine for the better. Whether it's a quick fact or just a friendly chat, Cubiq is always there, and it's surprisingly engaging.",
    name: "John",
    title: "Retired Teacher",
    image: "/images/john.jpg"
  },
] 