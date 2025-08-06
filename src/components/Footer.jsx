import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' }
  ];

  const programs = [
    'Education Support',
    'Healthcare Initiatives',
    'Community Development',
    'Nutrition Programs'
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, name: 'Facebook' },
    { icon: <Twitter size={18} />, name: 'Twitter' },
    { icon: <Instagram size={18} />, name: 'Instagram' },
    { icon: <Linkedin size={18} />, name: 'LinkedIn' }
  ];

  return (
    <footer style={{
      background: 'var(--text-dark)',
      color: 'var(--white)',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.3rem',
              fontWeight: '700',
              color: 'var(--white)',
              marginBottom: '1rem'
            }}>
              Goodworks India
            </Link>
            <p style={{
              color: '#bdc3c7',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}>
              Together for development, United for impact.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: '#bdc3c7'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} />
                R601 KLP Utsav Apartments, 292, Cooks Road, Otteri, Chennai - 600012
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} />
                +91 98402 63329
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} />
                goodworksindia2022@gmail.com
              </div>
            </div>
          </div>
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--primary-orange)'
            }}>
              Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    color: '#bdc3c7',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)',
                    padding: '0.25rem 0'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--primary-green)'
            }}>
              Our Programs
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              color: '#bdc3c7'
            }}>
              {programs.map((program, index) => (
                <div key={index} style={{
                  fontSize: '0.9rem',
                  padding: '0.25rem 0'
                }}>
                  {program}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'var(--primary-orange)'
            }}>
              Follow Us
            </h4>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'var(--white)',
                    borderRadius: '50%',
                    transition: 'var(--transition)'
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p style={{
              color: '#bdc3c7',
              fontSize: '0.85rem',
              lineHeight: '1.4'
            }}>
              Stay connected for updates and impact stories.
            </p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '1rem',
          textAlign: 'center',
          color: '#bdc3c7',
          fontSize: '0.85rem'
        }}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} GoodworksIndia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
