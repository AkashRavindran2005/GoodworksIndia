import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart size={28} />,
      title: 'Compassion',
      description: 'We approach every initiative with genuine care for those we serve.'
    },
    {
      icon: <Users size={28} />,
      title: 'Community',
      description: 'We believe in collaborative efforts to create lasting change.'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our programs.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Sustainability',
      description: 'Our programs create long-term, sustainable impact.'
    }
  ];

  return (
    <div>
      <section className="section" style={{ 
        background: 'var(--background-light)',
        paddingTop: '6rem'
      }}>
        <div className="container">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{
                fontWeight: '700',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem'
              }}>
                About <span style={{ color: 'var(--primary-orange)' }}>Goodworks India</span>
              </h1>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--text-light)',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                We are a purpose-driven nonprofit organization committed to creating sustainable change across communities in India. From empowering children through quality education to uplifting underprivileged families, supporting youth development, and advancing rural progress, our initiatives are designed to build inclusive, self-reliant societies. With a deep belief in collaboration and compassion, we strive to bridge gaps and bring opportunities to those who need them most. Together, we work not for income, but for outcome.
              </p>
            </motion.div>
            
            <motion.img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="About us"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                width: '100%',
                height: '350px',
                objectFit: 'cover',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)'
              }}
            />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                borderTop: '4px solid var(--primary-orange)'
              }}
            >
              <Target size={40} style={{ color: 'var(--primary-orange)', marginBottom: '1rem' }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--primary-orange)',
                marginBottom: '1rem'
              }}>
                Our Mission
              </h3>
              <p style={{
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                To uplift underserved communities by providing access to education, healthcare, and sustainable development opportunities, empowering individuals to lead dignified, self-reliant lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                borderTop: '4px solid var(--primary-green)'
              }}
            >
              <Eye size={40} style={{ color: 'var(--primary-green)', marginBottom: '1rem' }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--primary-green)',
                marginBottom: '1rem'
              }}>
                Our Vision
              </h3>
              <p style={{
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                To create an inclusive society where every individual, regardless of background, has the resources and support to grow, contribute, and thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--background-light)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{
              fontWeight: '700',
              color: 'var(--text-dark)',
              marginBottom: '1rem'
            }}>
              Our Values
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              These core values guide everything we do and shape our approach to creating impact.
            </p>
          </motion.div>

          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  height: '100%'
                }}
              >
                <div style={{
                  color: index % 2 === 0 ? 'var(--primary-orange)' : 'var(--primary-green)',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {value.icon}
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: '0.5rem'
                }}>
                  {value.title}
                </h4>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: '1.6',
                  fontSize: '0.9rem'
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
