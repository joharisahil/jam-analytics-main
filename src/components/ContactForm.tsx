

const ContactForm = () => {
  return (
    <div className="min-h-[80vh] bg-black flex items-center justify-center text-white flex-col ">
      <h1 className="text-4xl font-inter mt-4 mb-4">Contact us</h1>

      <div
        className=" max-w-2xl p-6 rounded-2xl w-[70%] sm:w-[50%] md:w-[40%] lg:w-full xl:w-full"
        style={{
            boxShadow:
              "7px 6px 14.6px 0px #FFFFFF40 inset, 0px 2px 20.4px 0px #FFFFFF40, 0px 10px 74px 10px #4E00BF69",
  
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            backgroundColor: "#10001f", // Deep purple or black base
          }}
      >
        <form className="space-y-4">
          <div className=" flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm">First name</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="text-sm">Last name</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm">How can we help u?</label>
            <textarea 
              className="scrollabletextbox w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none resize-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-[#a87fff] to-[#6a00ff] text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
