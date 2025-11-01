import React from 'react';

const About: React.FC = () => {
  const team = [
    { name: 'Akash Kumbhar', role: 'Developer', image: '👨‍💻' },
    { name: 'Rutvik Mathapati', role: 'Developer', image: '👨‍💻' },
    { name: 'Ananad Kulkarni', role: 'Developer', image: '👨‍💻' },
    { name: 'Rahul Gaikwad', role: 'Developer', image: '👨‍💻' },
  ];

  return (
    <div className="pt-16 overflow-hidden"> {/* Prevent any horizontal overflow */}
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CodeVerse</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are passionate about empowering the next generation of tech innovators 
            through cutting-edge solutions and comprehensive learning programs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                To bridge the gap between academic learning and industry requirements by providing 
                hands-on experience, mentorship, and real-world project exposure to aspiring 
                developers and tech enthusiasts.
              </p>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Our Vision</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                To become the leading platform for tech education and innovation, creating a 
                community where creativity meets technology, and where every individual can 
                transform their ideas into impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2024', title: 'Founded CodeVerse', desc: 'Started with a vision to transform tech education' },
              { year: '2024', title: 'First Internship Batch', desc: 'Successfully trained 25+ interns in various domains' },
              { year: '2024', title: 'Client Projects', desc: 'Delivered 15+ successful projects for startups and SMEs' },
              { year: '2024', title: 'Expansion', desc: 'Growing team and expanding service offerings' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start sm:items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-5 flex-shrink-0">
                  {item.year.slice(-2)}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-background rounded-xl p-8 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new technologies' },
              { icon: '🤝', title: 'Collaboration', desc: 'Working together to achieve extraordinary results' },
              { icon: '📚', title: 'Learning', desc: 'Continuous growth and knowledge sharing' },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
