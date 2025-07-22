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
              Empowering Children's{' '}
              <span style={{ color: 'var(--primary-orange)' }}>Bright Future</span>
            </h1>
            
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-light)',
              marginBottom: '2rem',
              lineHeight: '1.7'
            }}>
              We are here not for income, but for outcome. Join us in creating 
              lasting change in children's lives through education, healthcare, and community support.
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
                <Play size={18} /> Learn More
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
                  500+
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
                  25+
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
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
