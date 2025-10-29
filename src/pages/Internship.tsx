import React from 'react';

const Internship: React.FC = () => {
  const domains = ['Web Development', 'Mobile App Development', 'AI/ML', 'IoT', 'Data Science'];

  return (
    <div className="pt-16">
      {/* Header (Unchanged) */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Internship Program</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our comprehensive internship program and gain hands-on experience 
            in cutting-edge technologies with industry mentorship.
          </p>
        </div>
      </section>

      {/* Program Overview (Unchanged) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right ">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Internship?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Real-world project experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>One-on-one mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Industry-standard tools and practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Job placement assistance</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {domains.map((domain, index) => (
                <div key={index} className="bg-background p-6 rounded-lg text-center">
                  <h3 className="font-semibold text-primary">{domain}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form (Replaced with Google Form) */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">Apply for Internship</h2>
            
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeg3KsiYosPK_uCjr5G-o_s08QgBoWETdaehJmA2givkMyhrQ/viewform?embedded=true" 
              width="100%" // Changed to 100% for responsiveness
              height="520" 
              frameBorder="0" // React-compliant attribute
              marginHeight={0}  // React-compliant attribute
              marginWidth={0}   // React-compliant attribute
              title="Internship Application Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;