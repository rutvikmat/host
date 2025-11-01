import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  // State to hold the user's message
  const [whatsappMessage, setWhatsappMessage] = useState("");

  // The phone number for the WhatsApp link
  const whatsAppNumber = "918073369741";

  // (Optional) Debug overflow visually — uncomment if needed
  /*
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      * { outline: 1px solid red !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  */

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 overflow-hidden">
        <div
          className="max-w-7xl mx-auto px-4 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team and
            let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
            {/* Contact Info */}
            <div data-aos="fade-right" className="overflow-hidden">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">
                      projectcodeverse@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 8073369741</p>
                    <p className="text-gray-600">+91 8073473519</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">Chikodi | Nipani</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    🔗
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    <div className="flex flex-wrap space-x-4 mt-2">
                      <a
                        href="https://www.linkedin.com/in/codeverse-project-b1646b390/"
                        className="text-primary hover:text-accent"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/projectcodeverse"
                        className="text-primary hover:text-accent"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.instagram.com/codeverse_project"
                        className="text-primary hover:text-accent"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 w-full overflow-hidden rounded-lg">
                
                <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15367.463364258037!2d74.57150454930152!3d16.429043930565648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e9f6dffdf1cb%3A0x98390bab1905147f!2sChikodi%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1761814578043!5m2!1sen!2sin'
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="block w-full max-w-full overflow-hidden rounded-lg"
                  title="Company Location Map"
                ></iframe>
              </div>
            </div>

            {/* WhatsApp Message Section */}
            <div data-aos="fade-left" className="overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={whatsappMessage}
                      onChange={(e) => setWhatsappMessage(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Type your message for WhatsApp..."
                    />
                  </div>

                  <a
                    href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-colors ${
                      !whatsappMessage
                        ? "opacity-50 cursor-not-allowed hover:bg-primary"
                        : "hover:bg-blue-600"
                    }`}
                    onClick={(e) => {
                      if (!whatsappMessage) {
                        e.preventDefault();
                        alert("Please enter a message first!");
                      }
                    }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
