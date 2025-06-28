import React, { useRef } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_axqk7bd',      // ✅ Replace with your EmailJS service ID
        'template_1c7yocb',     // ✅ Replace with your EmailJS template ID
        form.current,
        'Io3xing6-XOWyq98P'       // ✅ Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 mt-10 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
          Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        <form ref={form} onSubmit={handleSend} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow space-y-6 text-left">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message<span className="text-red-500">*</span></label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 text-lg hover:bg-blue-700 transition"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
