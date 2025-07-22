import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ success: '', error: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ success: '', error: '' });

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ error: 'Please enter a valid email address!' });
      return;
    }
    setTimeout(() => {
      setStatus({ success: 'Thank you for subscribing! We\'ll keep you updated.' });
      setEmail('');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card"
      style={{
        padding: '3rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem'
      }}>
        <Mail size={32} style={{ color: 'var(--primary-orange)' }} />
      </div>
      
      <h3 style={{
        fontSize: '1.8rem',
        fontWeight: '600',
        color: 'var(--text-dark)',
        marginBottom: '1rem'
      }}>
        Stay Connected
      </h3>
      
      <p style={{
        fontSize: '1rem',
        color: 'var(--text-light)',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        Subscribe to our newsletter for updates on programs, success stories, 
        and ways to make a difference.
      </p>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          style={{
            flex: 1,
            minWidth: '280px',
            marginBottom: 0
          }}
          required
        />
        
        <button type="submit" className="btn btn-primary">
          Subscribe <Send size={16} />
        </button>
      </form>

      {status.error && (
        <div style={{ 
          color: 'var(--primary-orange)', 
          fontWeight: '600', 
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: 'rgba(255, 107, 53, 0.1)',
          borderRadius: 'var(--radius)'
        }}>
          {status.error}
        </div>
      )}
      
      {status.success && (
        <div style={{ 
          color: 'var(--primary-green)', 
          fontWeight: '600', 
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: 'rgba(76, 175, 80, 0.1)',
          borderRadius: 'var(--radius)'
        }}>
          {status.success}
        </div>
      )}
    </motion.div>
  );
};

export default NewsletterForm;
