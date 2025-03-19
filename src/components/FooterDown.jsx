import React from 'react'

const FooterDown = () => {
  return (
    <section id="FooterDown">
    <div className="flex flex-col h-fit">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-16">
        <h1 className="text-3xl font-bold mb-2">Ready to Transform Your Business?</h1>
        <p className="text-lg mb-4">Join our waitlist to be notified when we launch.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
          Join Waitlist
        </button>
      </div>

      {/* Footer Section */}
      <footer  className="bg-white text-gray-700 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Documentation</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <p>Get the latest updates and news</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-l px-3 py-2 w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          © 2024 Jam Analytics. All rights reserved.
        </div>
      </footer>
    </div>
    </section>
  )
}

export default FooterDown