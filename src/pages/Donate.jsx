import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Building, 
  Hash, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Donate = () => {
  const bankDetails = [
    {
      icon: <Building className="text-green-500" size={24} />,
      label: 'Bank Name',
      value: 'Federal Bank'
    },
    {
      icon: <Hash className="text-orange-500" size={24} />,
      label: 'Account Number',
      value: '14570200016729'
    },
    {
      icon: <CreditCard className="text-green-500" size={24} />,
      label: 'IFSC Code',
      value: 'FDRL0001457'
    },
    {
      icon: <MapPin className="text-orange-500" size={24} />,
      label: 'Branch',
      value: 'Purasawalkam'
    }
  ];

  const donationImpact = [
    {
      amount: '₹500',
      impact: 'Provides educational materials for 2 children for a month',
      icon: <Users className="text-orange-500" size={32} />
    },
    {
      amount: '₹1,000',
      impact: 'Covers healthcare costs for 1 family for a month',
      icon: <Heart className="text-green-500" size={32} />
    },
    {
      amount: '₹2,500',
      impact: 'Sponsors skill development training for 1 person',
      icon: <Award className="text-orange-500" size={32} />
    },
    {
      amount: '₹5,000',
      impact: 'Supports complete education support for 1 child for 3 months',
      icon: <Shield className="text-green-500" size={32} />
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-2"
          >
            <h1 className="text-orange mb-1">Donate Now</h1>
            <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Your contribution can transform lives and create lasting change in communities across India. 
              Every donation, no matter the size, makes a significant difference.
            </p>
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
            className="text-center mb-2"
          >
            <h2 className="text-green mb-1">Bank Transfer Details</h2>
            <p className="text-muted">Use the following details to make your donation via bank transfer</p>
          </motion.div>

          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {bankDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="p-2">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {detail.icon}
                    <div>
                      <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>{detail.label}</h4>
                      <p style={{ margin: 0, fontWeight: '600', color: 'var(--primary-orange)' }}>
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-2"
          >
            <h2 className="text-orange mb-1">Your Impact</h2>
            <p className="text-muted">See how your donation can make a difference</p>
          </motion.div>

          <div className="grid grid-2">
            {donationImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="p-2">
                  <div className="mb-1" style={{ display: 'flex', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-green mb-1">{item.amount}</h3>
                  <p className="text-muted">{item.impact}</p>
                </div>
              </motion.div>
            ))}
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
            className="card"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <div className="p-2 text-center">
              <h3 className="text-green mb-1">Need Help?</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Phone size={16} className="text-orange-500" />
                <span>+91 98402 63329</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Mail size={16} className="text-green-500" />
                <span>goodworksindia2022@gmail.com</span>
              </div>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Contact us for any donation-related queries or assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Heart className="text-orange-500 mb-1" size={64} style={{ margin: '0 auto 1rem' }} />
            <h2 className="text-green mb-1">Thank You for Your Generosity</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Your support enables us to continue our mission of empowering communities and creating 
              sustainable change. Together, we can build a better tomorrow.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
