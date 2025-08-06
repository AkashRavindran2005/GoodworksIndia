import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--background-light) 0%, var(--white) 100%)',
      padding: '4rem 0',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontWeight: '800',
              color: 'var(--text-dark)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Empowering lives, {' '}
              <span style={{ color: 'var(--primary-orange)' }}>Enabling progress</span>
            </h1>
            
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-light)',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              Through inclusive programs and grassroots engagement, we support children, youth, and communities to rise above limitations and build resilient futures. Our work is driven by the belief that lasting change begins with collective action and equal opportunity.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <Link to="/programs" className="btn btn-primary">
                Our Programs <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                <Play size={18} /> About Us
              </Link>
            </div>

            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  color: 'var(--primary-orange)' 
                }}>
                  200+
                </div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Children Supported
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  color: 'var(--primary-green)' 
                }}>
                  15+
                </div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Communities Served
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src="./gwhero.jpeg"
                alt="Children learning together"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--primary-orange)',
                color: 'var(--white)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                Making Impact
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
