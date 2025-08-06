import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, MapPin, TrendingUp, Target } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      number: '200+',
      label: 'Children Supported',
      description: 'Direct beneficiaries',
      color: 'var(--primary-orange)'
    },
    {
      icon: <Heart size={24} />,
      number: '15+',
      label: 'Communities Served',
      description: 'Active communities',
      color: 'var(--primary-green)'
    },
    {
      icon: <Award size={24} />,
      number: '100+',
      label: 'Programs Completed',
      description: 'Successfully implemented',
      color: 'var(--primary-orange)'
    }
  ];

  const stories = [
    {
      title: 'Success Story 1',
      location: 'Delhi',
      story: 'Replace with your actual success story content.',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Success Story 2',
      location: 'Mumbai',
      story: 'Replace with your actual success story content.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Success Story 3',
      location: 'Bangalore',
      story: 'Replace with your actual success story content.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
              Our <span style={{ color: 'var(--primary-orange)' }}>Impact</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.7'
            }}>
              Measuring the difference we make in communities and lives across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  color: stat.color,
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: stat.color,
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  marginBottom: '0.25rem'
                }}>
                  {stat.label}
                </h4>
                <p style={{
                  color: 'var(--text-light)',
                  fontSize: '0.875rem'
                }}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
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
              Success Stories
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Real stories of transformation from the communities we serve.
            </p>
          </motion.div>

          <div className="grid grid-3">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    {story.title}
                  </h4>
                  <p style={{
                    color: 'var(--primary-orange)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    {story.location}
                  </p>
                  <p style={{
                    color: 'var(--text-light)',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {story.story}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
