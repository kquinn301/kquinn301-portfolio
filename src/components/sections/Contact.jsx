import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current, 
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      alert("Message Sent!");
      setFormData({ from_name: "", email: "", message: "" });
    })
    .catch(() => alert("Something went wrong. Please try again!"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* ✅ Add ref={formRef} here */}
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                value={formData.from_name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@abc.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Optional hidden inputs (only if your template uses them) */}
            <input type="hidden" name="to_name" value="Your Name" />
            <input type="hidden" name="reply_to" value={formData.email} />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
