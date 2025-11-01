import React from 'react';

const Internship: React.FC = () => {
  const domains = [
    'Web Development',
    'Mobile App Development',
    'AI/ML',
    'IoT',
    'Data Science',
  ];

  return (
    <div className="pt-16 overflow-hidden"> {/* Prevent horizontal overflow */}
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 px-4">
        <div
          className="max-w-6xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Internship Program
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join our comprehensive internship program and gain hands-on experience 
            in cutting-edge technologies with real industry mentorship.
          </p>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 bg-white px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Internship?
              </h2>
              <ul className="space-y-4">
                {[
                  'Real-world project experience',
                  'One-on-one mentorship',
                  'Industry-standard tools and practices',
                  'Certificate of completion',
                  'Job placement assistance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent text-xl mr-3">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Grid of Domains */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              data-aos="fade-left"
            >
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-semibold text-primary text-base md:text-lg">
                    {domain}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-background px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Apply for Internship
            </h2>

            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeg3KsiYosPK_uCjr5G-o_s08QgBoWETdaehJmA2givkMyhrQ/viewform?embedded=true"
                width="100%"
                height="520"
                style={{
                  border: 'none',
                  display: 'block',
                }}
                loading="lazy"
                title="Internship Application Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
