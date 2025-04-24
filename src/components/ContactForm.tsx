import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [notification, setNotification] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zgamiz1", // Your EmailJS service ID
        "template_jyrq851", // Your EmailJS template ID
        formRef.current,
        "n0JEXyInvfPZZeSrc" // Your EmailJS public key
      )
      .then(
        () => {
          setNotification("✅ Form submitted successfully!");
          setTimeout(() => {
            setNotification("");
          }, 3000); // Notification disappears after 3 seconds

          formRef.current?.reset();
        },
        (error) => {
          setNotification("❌ Something went wrong. Please try again.");
          setTimeout(() => {
            setNotification("");
          }, 3000);

          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="min-h-[80vh] bg-black flex items-center justify-center text-white flex-col">
      <h1 className="text-4xl font-inter mt-4 mb-4">Contact us</h1>

      <div
        className="max-w-2xl p-6 rounded-2xl w-[70%] sm:w-[50%] md:w-[40%] lg:w-full xl:w-full"
        style={{
              background: `linear-gradient(180deg, #010002 0%, #361764 100%)`,
              boxShadow: "0px 7.55px 55.89px 7.55px #4E00BF69",
              


        }}
      >
        <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
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
            className="w-full py-2 rounded-md "style={{
              background: `#8C45FF66 `,
              boxShadow: "0px 0px 4.53px 2.27px #FFFFFF40 inset",

             backdropFilter: "blur(10.573298454284668px)",
             borderStyle: "0.76px solid #FFFFFF26",
              WebkitBackdropFilter: "blur(10.573298454284668px)",


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
