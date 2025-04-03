const FooterDown = () => {
  return (
    <section id="FooterDown">
      <div className="flex flex-col h-fit bg-[#131313f3] text-white w-full overflow-hidden">
        {/* CTA Section
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-16">
          <h1 className="text-3xl font-bold mb-2">
            Ready to Transform Your Business?
          </h1>
          <p className="text-lg mb-4">
            Join our waitlist to be notified when we launch.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
            Join Waitlist
          </button>
        </div> */}

        {/* Footer Section */}
        <footer className="bg-[#1a1a1a] text-gray-300 py-10 ">
          <div className="container mx-auto flex flex-col md:flex-row gap-8 px-8">
            {/* Left Section - Navigation */}
            <div className="bg-[#121212] p-6 rounded-xl w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-700">
              {/* Product */}
              <div>
                <h4 className="text-gray-400 font-semibold mb-6">Product</h4>
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-gray-400 font-semibold mb-6">Resources</h4>
                <ul className="space-y-6">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-gray-400 font-semibold mb-6">Company</h4>
                <ul className="space-y-6 ">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Language & Theme Toggle */}
              <div className=" flex-col ">
                <button className="flex justify-items-end gap-2 px-4 m-10 py-2 border border-gray-600 rounded-md text-gray-400">
                  English
                </button>
                <button className="flex justify-items-end gap-2 px-4 py-2 m-10 border border-gray-600 rounded-md text-gray-400">
                  Toggle
                </button>
              </div>
            </div>

            {/* Right Section - Subscription */}
            <div className="w-full md:w-1/4 space-y-6">
              <div className="bg-[#121212] p-6 rounded-xl border border-gray-700">
                <h4 className="text-gray-400 font-semibold">SUBSCRIBE</h4>
                <p className="text-white">Get The Latest News And Updates.</p>
                <div className="relative mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-[#1b181c] border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    ➜
                  </button>
                </div>
              </div>

              {/* Copyright Section */}
              <div className="bg-[#121212] text-center p-4 rounded-xl border border-gray-700 text-gray-500 text-sm">
                © 2024 Jam Analytics. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterDown;
