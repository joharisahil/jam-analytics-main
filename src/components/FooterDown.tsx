const FooterDown = () => {
  return (
    <section id="FooterDown ">
      <div className="flex flex-col bg-[#212020] text-white w-full overflow-hidden">
        {/* Footer Section */}
        <footer className="bg-[#222121] text-gray-400 py-8  ">
          <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
            {/* Left Section - Navigation */}
            <div className="bg-[#121212] mx-auto p-6 rounded-xl w-full text-xs md:text-lg md:w-3/4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  gap-6 border border-gray-700">

              {/* Product */}
              <div>
                <h4 className="text-gray-400 font-semibold mb-6">Product</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-gray-400">Features</a></li>
                  <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
                  <li><a href="#" className="hover:text-gray-400">Security</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-gray-400 font-semibold mb-6">Resources</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                  <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
                  <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-gray-400 font-semibold px-4 mb-6">Company</h4>
                <ul className="space-y-4 px-4">
                  <li><a href="#" className="hover:text-gray-400">About</a></li>
                  <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                  <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>
              </div>

              {/* Language & Theme Toggle */}
              {/* <div className="flex flex-row gap-4 mx-auto justify-center ">
                <button className="w-full   text-gray-400 hover:bg-[#1a1a1a] transition">
                  English
                </button>
                <button className="w-full   text-gray-400 hover:bg-[#1a1a1a] transition">
                  Toggle Theme
                </button>
              </div> */}
            </div>

            {/* Right Section - Subscription */}
            <div className="w-full md:w-1/4 flex flex-col gap-6">
              <div className="bg-[#121212] p-6 rounded-xl border border-gray-700">
                <h4 className="text-gray-400 font-semibold">SUBSCRIBE</h4>
                <p className="text-white">Get the latest news and updates.</p>
                <div className="relative mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 pr-10 bg-[#1b181c] border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition">
                    ➜
                  </button>
                </div>
              </div>

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
