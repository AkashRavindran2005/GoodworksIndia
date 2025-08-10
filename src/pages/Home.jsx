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
      title: 'Education & Lifelong Learning',
      description: 'From early schooling to higher studies, mentoring, and extracurricular activities that nurture knowledge, creativity, and talent.',
      image: './education.jpg',
    },
    {
      title: 'Health & Wellness',
      description: 'Initiatives in preventive healthcare, nutrition awareness, and mental wellness for healthier communities.',
      image: './health.jpg',
    },
    {
      title: 'Community Development & Sustainability',
      description: 'Improving infrastructure, promoting eco-friendly practices, and driving awareness for a greener, more resilient future.',
      image: './community.jpg',
    },
  ];

  const focusAreas = [
    {
      icon: <GraduationCap size={40} />,
      title: 'Education & Skill Development',
      description: 'Expanding access to quality learning and career-building opportunities.',
      color: 'var(--primary-orange)'
    },
    {
      icon: <Heart size={40} />,
      title: 'Health & Well-being',
      description: 'Promoting physical, mental, and nutritional wellness for all.',
      color: 'var(--primary-green)'
    },
    {
      icon: <HomeIcon size={40} />,
      title: 'Empowerment & Inclusion',
      description: 'Advancing equality, leadership, and community participation across all groups.',
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
              Together for development, United for {' '}
              <span style={{ color: 'var(--primary-orange)' }}>impact</span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
            We are a passionate team working hand-in-hand with communities to drive sustainable growth and uplift children and families across India. From education and health to livelihoods and empowerment, our initiatives are rooted in compassion and built for sustainable development.
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
            Empowering lives through thoughtful initiatives focused on children and communities.
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
