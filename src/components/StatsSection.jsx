import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, MapPin } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={28} />,
      number: '500+',
      label: 'Children Supported',
      color: 'var(--primary-orange)'
    },
    {
      icon: <Heart size={28} />,
      number: '25+',
      label: 'Communities Served',
      color: 'var(--primary-green)'
    },
    {
      icon: <Award size={28} />,
      number: '100+',
      label: 'Programs Completed',
      color: 'var(--primary-orange)'
    },
    {
      icon: <MapPin size={28} />,
      number: '10+',
      label: 'States Covered',
      color: 'var(--primary-green)'
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary-green), var(--dark-green))',
      color: 'var(--white)',
      padding: '4rem 0'
    }}>
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
            marginBottom: '1rem'
          }}>
            Our Impact in Numbers
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Every number represents a life touched, a community empowered, and a future brightened.
          </p>
        </motion.div>
        
        <div className="grid grid-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: 'var(--radius)',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                color: 'var(--white)',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1rem',
                opacity: 0.9
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
