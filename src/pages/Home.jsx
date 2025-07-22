import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, Utensils, GraduationCap, Home as HomeIcon } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import StatsSection from '../components/StatsSection';
import NewsletterForm from '../components/NewsletterForm';

const Home = () => {
  const programs = [
    {
      icon: <BookOpen size={20} />,
      title: '',
      description: '',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Heart size={20} />,
      title: '',
      description: '',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Users size={20} />,
      title: '',
      description: '',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Utensils size={20} />,
      title: '',
      description: '',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const focusAreas = [
    {
      icon: <GraduationCap size={40} />,
      title: 'Education',
      description: 'Providing holistic education to underprivileged children through innovative learning programs.',
      color: 'var(--primary-orange)'
    },
    {
      icon: <Heart size={40} />,
      title: 'Healthcare',
      description: 'Ensuring access to quality healthcare services including medical camps and health awareness.',
      color: 'var(--primary-green)'
    },
    {
      icon: <HomeIcon size={40} />,
      title: 'Community Development',
      description: 'Building stronger communities through skill development and sustainable livelihood programs.',
      color: 'var(--primary-orange)'
    }
  ];

  return (
    <div>
      <HeroSection />

      <section className="section" style={{ background: 'var(--white)' }}>
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
              We are here not for income, but for{' '}
              <span style={{ color: 'var(--primary-orange)' }}>outcome</span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              We are a dedicated team of professionals working to spread goodness that enriches lives 
              and creates a brighter future for children and communities across India.
            </p>
          </motion.div>
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
              Our Programs
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive programs designed to create lasting impact in children's lives.
            </p>
          </motion.div>

          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/programs" className="btn btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section" style={{ background: 'var(--white)' }}>
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
              Our Focus Areas
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We focus on three key areas to create comprehensive and sustainable impact.
            </p>
          </motion.div>

          <div className="grid grid-3">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  borderTop: `4px solid ${area.color}`,
                  height: '100%'
                }}
              >
                <div style={{
                  color: area.color,
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {area.icon}
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: area.color,
                  marginBottom: '1rem'
                }}>
                  {area.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: '1.6'
                }}>
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--background-light)' }}>
        <div className="container">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
