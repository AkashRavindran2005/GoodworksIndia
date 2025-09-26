import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Award, 
  Heart,
  BookOpen,
  GraduationCap,
  Home,
  Utensils,
  CheckCircle,
  Globe,
  Briefcase,
  LifeBuoy
} from 'lucide-react';

const ProgramDetail = () => {
  const { programId } = useParams();

const programsData = {
  'education-lifelong-learning': {
    title: 'Education & Lifelong Learning',
    icon: <GraduationCap size={64} />,
    image: '/education.jpg',
    description: 'From early schooling to higher studies, mentoring, and extracurricular activities that nurture knowledge, creativity, and talent.',
    longDescription: 'Our Education & Lifelong Learning program is designed to break barriers and provide quality education access to underserved communities. We believe that education is the foundation for personal growth and community development.',
    objectives: [
      'Provide quality primary and secondary education to underprivileged children',
      'Offer scholarship programs for higher education and vocational training',
      'Conduct comprehensive teacher training and capacity building programs',
      'Establish modern learning centers with digital infrastructure in remote areas',
      'Promote digital literacy and innovative learning methodologies'
    ],
    activities: [
      'School infrastructure development and modernization',
      'Distribution of learning materials, books, and uniforms',
      'After-school tutoring and personalized mentoring programs',
      'Digital learning initiatives and computer literacy',
      'Parent and community engagement programs'
    ],
    gallery: ['/education-1.jpg', '/education-2.jpg', '/education-3.jpg']
  },

  'health-wellness': {
    title: 'Health & Wellness',
    icon: <Heart size={64} />,
    image: '/health.jpg',
    description: 'Initiatives in preventive healthcare, nutrition awareness, and mental wellness for healthier communities.',
    longDescription: 'Our Health & Wellness program focuses on creating healthier communities through comprehensive preventive healthcare, nutrition education, and mental health support systems.',
    objectives: [
      'Improve access to basic healthcare services in underserved areas',
      'Promote preventive healthcare and comprehensive health education',
      'Address malnutrition and promote sustainable healthy eating habits',
      'Provide professional mental health support and counseling services',
      'Establish fully-equipped health centers in remote communities'
    ],
    activities: [
      'Mobile health clinics reaching remote rural areas',
      'Community health awareness campaigns and workshops',
      'Comprehensive nutrition programs for children and mothers',
      'Professional mental health counseling and support services',
      'Large-scale vaccination and immunization drives'
    ],
    gallery: ['/health-1.jpg', '/health-2.jpg', '/health-3.jpg']
  },

  'community-development-sustainability': {
    title: 'Community Development & Sustainability',
    icon: <Globe size={64} />,
    image: '/community.jpg',
    description: 'Strengthening communities through infrastructure, environmental protection, and sustainable living practices.',
    longDescription: 'Our Community Development & Sustainability program aims to create self-reliant, eco-conscious communities through infrastructure improvements, resource management, and environmental conservation.',
    objectives: [
      'Improve local infrastructure and public facilities',
      'Promote renewable energy and eco-friendly practices',
      'Encourage community-led governance and participation',
      'Preserve and restore local ecosystems',
      'Enhance waste management and recycling initiatives'
    ],
    activities: [
      'Building community halls, sanitation facilities, and clean water systems',
      'Tree planting and afforestation programs',
      'Renewable energy adoption projects',
      'Workshops on sustainable farming and green technology',
      'Neighborhood clean-up and recycling drives'
    ],
    gallery: ['/community-1.jpg', '/community-2.jpg', '/community-3.jpg']
  },

  'women-youth-empowerment': {
    title: 'Women & Youth Empowerment',
    icon: <Users size={64} />,
    image: '/women.jpg',
    description: 'Providing skills, education, and leadership opportunities for women and youth to achieve independence and equality.',
    longDescription: 'Our Women & Youth Empowerment program focuses on creating equal opportunities, fostering leadership, and enabling economic independence for women and young people.',
    objectives: [
      'Promote gender equality and social inclusion',
      'Offer vocational training and entrepreneurship support',
      'Encourage youth leadership and civic participation',
      'Ensure access to financial and educational resources',
      'Support advocacy for women’s and youth rights'
    ],
    activities: [
      'Skill development workshops',
      'Entrepreneurship and business mentorship',
      'Leadership and personal development camps',
      'Access to microfinance and small business grants',
      'Community awareness campaigns for equality'
    ],
    gallery: ['/women-1.jpg', '/women-2.jpg', '/women-3.jpg']
  },

  'skills-livelihood-development': {
    title: 'Skills & Livelihood Development',
    icon: <Briefcase size={64} />,
    image: '/skills.jpg',
    description: 'Equipping individuals with market-relevant skills to secure sustainable livelihoods.',
    longDescription: 'Our Skills & Livelihood Development program helps individuals achieve economic stability by providing professional training, career guidance, and entrepreneurship opportunities.',
    objectives: [
      'Provide vocational training in high-demand trades',
      'Support small-scale entrepreneurship',
      'Enhance employability through career counseling',
      'Facilitate job placement and internships',
      'Promote sustainable income-generating practices'
    ],
    activities: [
      'Hands-on vocational training programs',
      'Business development and incubation support',
      'Job fairs and employer networking events',
      'Apprenticeship opportunities with industry partners',
      'Financial literacy and budgeting workshops'
    ],
    gallery: ['/skills-1.jpg', '/skills-2.jpg', '/skills-3.jpeg']
  },

  'relief-humanitarian-aid': {
    title: 'Relief & Humanitarian Aid',
    icon: <LifeBuoy size={64} />,
    image: '/relief.jpg',
    description: 'Providing timely aid during disasters and supporting communities in crisis.',
    longDescription: 'Our Relief & Humanitarian Aid program delivers immediate assistance during natural disasters, health crises, and other emergencies, while supporting recovery and resilience-building efforts.',
    objectives: [
      'Deliver emergency relief supplies to affected communities',
      'Provide temporary shelter and medical aid',
      'Assist in rehabilitation and reconstruction projects',
      'Train communities in disaster preparedness',
      'Support long-term recovery for displaced families'
    ],
    activities: [
      'Rapid disaster response and logistics coordination',
      'Distribution of food, water, and emergency kits',
      'Medical relief camps and mobile healthcare units',
      'Reconstruction of homes and public infrastructure',
      'Community disaster-preparedness drills'
    ],
    gallery: ['/relief-1.jpg', '/relief-2.jpg']
  }
};


  const program = programsData[programId];

  if (!program) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>Program not found</h2>
        <Link to="/programs" className="btn btn-primary">
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/programs" 
              className="btn btn-outline mb-2"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ArrowLeft size={16} /> Back to Programs
            </Link>
            
            <div className="text-center">
              <div className="mb-1" style={{ display: 'flex', justifyContent: 'center', color: 'var(--primary-orange)' }}>
                {program.icon}
              </div>
              <h1 className="text-orange mb-1">{program.title}</h1>
              <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {program.longDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center' }}
    >
      <img 
        src={program.image} 
        alt={program.title}
        style={{ 
          width: '100%', 
          maxWidth: '800px', 
          height: '400px', 
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',  
          display: 'block'   
        }}
      />
    </motion.div>
  </div>
</section>
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-orange mb-2">Program in Action</h2>
            <div className="grid grid-3">
              {program.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <img 
                    src={image} 
                    alt={`${program.title} - Image ${index + 1}`}
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="p-2">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Target className="text-orange-500" size={32} />
                  <h3 className="text-orange">Our Objectives</h3>
                </div>
                <ul style={{ paddingLeft: '1rem' }}>
                  {program.objectives.map((objective, index) => (
                    <li key={index} className="text-muted mb-1">{objective}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="p-2">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Award className="text-green-500" size={32} />
                  <h3 className="text-green">Key Activities</h3>
                </div>
                <ul style={{ paddingLeft: '1rem' }}>
                  {program.activities.map((activity, index) => (
                    <li key={index} className="text-muted mb-1">{activity}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-orange mb-1">Support This Program</h2>
            <p className="text-muted mb-2">
              Help us continue making a meaningful difference in the lives of those who need it most.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/donate" className="btn btn-primary">
                Donate Now
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
