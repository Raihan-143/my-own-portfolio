import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axqk7bd",
        "template_w4a2jv8",
        form.current,
        "Io3xing6-XOWyq98P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message!");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Get <span className="text-blue-600 dark:text-blue-400">In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Let’s Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I’m always open to discussing new projects or opportunities. Whether it's
              freelance, collaborations or just saying hello — feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                  <a href="mailto:raihan172hasan@gmail.com" className="text-blue-600 hover:underline text-sm">
                    raihan172hasan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaPhoneAlt className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Phone</p>
                  <a href="tel:+880123456789" className="text-green-600 hover:underline text-sm">
                    +880 1234-56789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                  <p className="text-purple-600 text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-xl"
          >
            <form ref={form} onSubmit={handleSend} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex justify-center items-center gap-2 transition-colors"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
