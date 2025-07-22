import React, { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Program Graduate",
      image: "/api/placeholder/150/150",
      quote: "This program completely transformed my life. I gained not just education but confidence and skills that helped me secure a great job.",
      program: "Education for All"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Skill Development Graduate",
      image: "/api/placeholder/150/150",
      quote: "The skill development program gave me practical knowledge that I could immediately apply. I'm now running my own small business.",
      program: "Skill Development Initiative"
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Community Leader",
      image: "/api/placeholder/150/150",
      quote: "Through the leadership training, I learned how to make a difference in my community. Now I'm leading several local initiatives.",
      program: "Leadership Training"
    },
    {
      id: 4,
      name: "Mohammed Ali",
      role: "Youth Volunteer",
      image: "/api/placeholder/150/150",
      quote: "Being part of this organization taught me the value of giving back. I now volunteer regularly and inspire others to do the same.",
      program: "Youth Engagement"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Success Stories</h1>
            <p>Hear from the individuals whose lives have been transformed through our programs.</p>
          </div>
        </div>
      </section>
      
      <section className="testimonials-content">
        <div className="container">
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
              </div>
              <div className="testimonial-content">
                <blockquote>
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].role}</p>
                  <span className="program-tag">{testimonials[currentTestimonial].program}</span>
                </div>
              </div>
            </div>
            
            <div className="carousel-controls">
              <button className="prev-btn" onClick={prevTestimonial}>‹</button>
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <button className="next-btn" onClick={nextTestimonial}>›</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="impact-numbers">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="impact-grid">
            <div className="impact-stat">
              <h3>1000+</h3>
              <p>Lives Transformed</p>
            </div>
            <div className="impact-stat">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="impact-stat">
              <h3>500+</h3>
              <p>Graduates Employed</p>
            </div>
            <div className="impact-stat">
              <h3>25</h3>
              <p>Communities Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
