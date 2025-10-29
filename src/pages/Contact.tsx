import React, { useState } from 'react'; // <-- Re-imported useState

const Contact: React.FC = () => {
  // State to hold the user's message
  const [whatsappMessage, setWhatsappMessage] = useState('');

  // The phone number for the WhatsApp link
  const whatsAppNumber = "918073369741";

  return (
    <div className="pt-16">
      {/* Header (Unchanged) */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section (Unchanged layout) */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info (Unchanged) */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">projectcodeverse@gmail.com</p>
                  </div>
                </div>

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

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Chikodi
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    🔗
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://www.linkedin.com/in/codeverse-project-b1646b390/" className="text-primary hover:text-accent">LinkedIn</a>
                      <a href="https://github.com/projectcodeverse" className="text-primary hover:text-accent">GitHub</a>
                      <a href="https://www.instagram.com/codeverse_project" className="text-primary hover:text-accent">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map (Unchanged) */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267813266897!2d77.6648!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149c0c9c3f8b%3A0x7c2b0c0c0c0c0c0c!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  title="Company Location Map"
                ></iframe>
              </div>
            </div>

            {/* WhatsApp Textbox Section */}
            <div data-aos="fade-left">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Type your message for WhatsApp..."
                    />
                  </div>

                  <a
                    // Dynamically build the URL
                    href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Conditionally style the button
                    className={`block w-full text-center bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-colors ${
                      !whatsappMessage
                        ? 'opacity-50 cursor-not-allowed hover:bg-primary'
                        : 'hover:bg-blue-600'
                    }`}
                    // Prevent click if there's no message
                    onClick={(e) => {
                      if (!whatsappMessage) {
                        e.preventDefault();
                        // Optionally, show a toast or alert
                        // toast.error("Please enter a message first");
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