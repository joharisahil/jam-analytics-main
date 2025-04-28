import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [notification, setNotification] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zgamiz1",
        "template_jyrq851",
        formRef.current,
        "n0JEXyInvfPZZeSrc"
      )
      .then(
        () => {
          setNotification("✅ Form submitted successfully!");
          setTimeout(() => setNotification(""), 3000);
          formRef.current?.reset();
        },
        (error) => {
          setNotification("❌ Something went wrong. Please try again.");
          setTimeout(() => setNotification(""), 3000);
          console.error("EmailJS Error:", error);
        }
      );
  };

  // Card style based on hover
  const cardStyle = isHovered
    ? {
        boxShadow:
          "7px 6px 14.6px 0px #FFFFFF40 inset, 0px 2px 20.4px 0px #FFFFFF40, 0px 10px 74px 10px #4E00BF69",
        background:
          "linear-gradient(180deg, #000000 24%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #010002 0%, #361764 100%)",
      }
    : {
        background:
          "linear-gradient(180deg, #010002 24%, #361764 100%), linear-gradient(180deg, #000000 24%, rgba(0, 0, 0, 0) 100%)",
      };

  return (
    <div className="min-h-[80vh] bg-black flex items-center justify-center text-white flex-col">
      <h1 className="text-4xl font-inter mt-4 mb-6">Contact us</h1>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex flex-col justify-between p-6 rounded-3xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] overflow-hidden transition-all duration-300 ease-in-out transform ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        style={cardStyle}
      >
        {/* Grid overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 3px), linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        )}

        {/* Form */}
        <form ref={formRef} className="relative z-10 space-y-4" onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm">First name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
                className="w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="text-sm">Last name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm">How can we help u?</label>
            <textarea
              id="message"
              name="message"
              required
              className="scrollabletextbox w-full mt-1 px-3 py-2 rounded-md bg-slate-300 text-black focus:outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium transition text-white"
            style={{
              background: "#8C45FF66",
              border: "1px solid #FFFFFF26",
              boxShadow: "0px 0px 6px 3px #FFFFFF40 inset",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            Submit
          </button>
          {notification && (
            <p className="text-sm mt-2 text-center">{notification}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
