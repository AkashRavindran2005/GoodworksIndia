import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProgramCard = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="card"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={program.image || 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'}
          alt={program.title || 'Program'}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          color: 'var(--white)',
          padding: '0.5rem',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {program.icon}
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'var(--text-dark)',
          marginBottom: '0.5rem'
        }}>
          {program.title || 'Program Title'}
        </h3>
        
        <p style={{
          color: 'var(--text-light)',
          lineHeight: '1.6',
          marginBottom: '1rem',
          flex: 1
        }}>
          {program.description || 'Program description goes here. Replace with your actual program details.'}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
