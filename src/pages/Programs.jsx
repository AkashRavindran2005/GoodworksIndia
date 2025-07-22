import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Utensils, GraduationCap, Home, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen size={24} />,
      title: 'Education Program',
      description: 'Comprehensive educational support for underprivileged children.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Education',
      beneficiaries: 'Children aged 6-18',
      duration: 'Ongoing'
    },
    {
      icon: <Heart size={24} />,
      title: 'Healthcare Initiative',
      description: 'Medical camps and health awareness programs for communities.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Healthcare',
      beneficiaries: 'Rural families',
      duration: '6 months'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Development',
      description: 'Skill development and livelihood programs.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Community',
      beneficiaries: 'Community members',
      duration: '1 year'
    },
    {
      icon: <Utensils size={24} />,
      title: 'Nutrition Program',
      description: 'Ensuring proper nutrition for growing children.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'Nutrition',
      beneficiaries: 'School children',
      duration: 'Daily'
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
              Our <span style={{ color: 'var(--primary-orange)' }}>Programs</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.7'
            }}>
              Comprehensive programs designed to create lasting impact in children's lives 
              and strengthen communities across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="grid grid-2">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={program.image}
                    alt={program.title}
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
                    background: 'var(--primary-orange)',
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
                
                <div style={{
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    {program.title}
                  </h3>
                  
                  <p style={{
                    color: 'var(--text-light)',
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                    flex: 1
                  }}>
                    {program.description}
                  </p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'var(--background-light)',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.875rem'
                  }}>
                    <div>
                      <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        Beneficiaries
                      </div>
                      <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                        {program.beneficiaries}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        Duration
                      </div>
                      <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                        {program.duration}
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-outline" style={{ width: '100%' }}>
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
