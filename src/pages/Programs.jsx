import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <- ADD THIS LINE


const Programs = () => {
  const programs = [
    {
      id: 'education-lifelong-learning',
      title: 'Education & Lifelong Learning',
      description: 'From early schooling to higher studies, mentoring, and extracurricular activities that nurture knowledge, creativity, and talent.',
      image: './education.jpg',
    },
    {
      id: 'health-wellness',
      title: 'Health & Wellness',
      description: 'Initiatives in preventive healthcare, nutrition awareness, and mental wellness for healthier communities.',
      image: './health.jpg',
    },
    {
      id: 'community-development-sustainability',
      title: 'Community Development & Sustainability',
      description: 'Improving infrastructure, promoting eco-friendly practices, and driving awareness for a greener, more resilient future.',
      image: './community.jpg',
    },
    {
      id: 'women-youth-empowerment',
      title: 'Women & Youth Empowerment',
      description: 'Providing skills, education, and opportunities that enable women and young people to achieve equality, independence, and leadership.',
      image: './women.jpg',
    },
    {
      id: 'skills-livelihood-development',
      title: 'Skills & Livelihood Development',
      description: 'Vocational training, entrepreneurship support, and digital literacy to promote financial independence.',
      image: './skills.jpg',
    },
    {
      id: 'relief-humanitarian-aid',
      title: 'Relief & Humanitarian Aid',
      description: 'Delivering emergency assistance, food, and rehabilitation support during natural disasters and crises.',
      image: './relief.jpg',
    }
  ];

  return (
    <div>
      <section className="section" style={{ 
        background: 'var(--background-light)',
        paddingTop: '6rem'
      }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              fontWeight: '700',
              color: 'var(--text-dark)',
              marginBottom: '1.5rem'
            }}>
              Our <span style={{ color: 'var(--primary-orange)' }}>Programs</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.7'
            }}>
              Empowering lives through thoughtful initiatives focused on children and communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="grid grid-2">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <div style={{
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    {program.title}
                  </h3>
                  
                  <p style={{
                    color: 'var(--text-light)',
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                    flex: 1
                  }}>
                    {program.description}
                  </p>  
                  <Link to={`/programs/${program.id}`} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;