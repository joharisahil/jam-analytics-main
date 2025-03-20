import React from "react";

const FooterDown = () => {
  return (
    <section id="FooterDown">
    <div className="flex flex-col h-fit bg-[#131313f3] text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-16">
        <h1 className="text-3xl font-bold mb-2">Ready to Transform Your Business?</h1>
        <p className="text-lg mb-4">Join our waitlist to be notified when we launch.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
          Join Waitlist
        </button>
      </div>

      {/* Footer Section */}
      <footer  className="bg-gray text-white-700 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-white">
          
          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-600 mb-4">
              Get the latest updates and news
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          © 2024 Jam Analytics. All rights reserved.
        </div>
      </footer>
    </div>
    </section>
  )
}

export default FooterDown;