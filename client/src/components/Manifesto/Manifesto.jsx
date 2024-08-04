import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import './Manifesto.css';

const manifestoItems = [
  {
    "title": "Better and improved facilities at Medical Unit",
    "description": "We aim to upgrade the medical unit with state-of-the-art equipment, increase staff, and extend operating hours to provide enhanced healthcare services to all campus members."
  },
  {
    "title": "Enhanced food quality and hygiene in mess",
    "description": "Our goal is to improve the overall dining experience by sourcing higher quality ingredients, implementing stricter hygiene standards, and offering a more diverse menu to cater to various dietary needs."
  },
  {
    "title": "Extended Wifi for entire campus",
    "description": "We plan to expand wifi coverage to all areas of the campus, ensuring fast and reliable internet access for students and staff to support their academic and professional needs."
  },
  {
    "title": "Improved gym with better equipments",
    "description": "We're committed to upgrading the campus gym with modern fitness equipment, expanding the workout space, and introducing new training programs to promote health and wellness among our community."
  },
  {
    "title": "Removal of in and out timing of girls hostel",
    "description": "We propose to eliminate curfew restrictions for the girls' hostel, promoting equality and freedom of movement for all students regardless of gender."
  },
  {
    "title": "Food delivery upto hostels for added convenience",
    "description": "We plan to implement a system allowing food delivery services to reach hostel areas, enhancing convenience for students during late-night study sessions or when they prefer to dine in their rooms."
  },
  {
    "title": "Modernize support and student centric approach for placements",
    "description": "Our focus is on revamping the placement cell with advanced tools, personalized career guidance, and stronger industry connections to better prepare students for their professional futures."
  },
  {
    "title": "Night canteen in the campus",
    "description": "We propose to establish a 24/7 canteen on campus to cater to students' late-night food needs, especially during exam periods or for those with non-traditional schedules."
  },
  {
    "title": "Air conditioning for main academic building",
    "description": "We aim to install air conditioning systems in the main academic building to create a more comfortable learning environment, particularly during hot weather conditions."
  },
];

const Manifesto = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='manifesto-container'>
      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.1,
          },
        }}
      >
        <h1 className='manifesto-heading'>Our Manifesto</h1>
      </motion.div>
      <div className='manifesto-subheading'>
        <Element name='manifesto'>
          Our manifesto represents a commitment to transforming campus life and enhancing the overall student experience. We envision a college environment that prioritizes student well-being, fosters academic excellence, and promotes personal growth. Our proposals aim to modernize facilities, improve services, and create a more inclusive and supportive atmosphere for all students. By addressing key areas such as healthcare, nutrition, technology, and personal freedom, we strive to create a campus that not only meets the current needs of our diverse student body but also prepares them for future success.
        </Element>
      </div>
      <div className='manifesto-grid'>
        {manifestoItems.map((item, index) => (
          <motion.div
            key={index}
            className={`manifesto-card ${expandedIndex === index ? 'expanded' : ''
              }`}
            onClick={() => handleCardClick(index)}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
          >
            <div className='manifesto-card-header'>
              <h3 className='manifesto-title'>{item.title}</h3>
            </div>

            <div
              className={`manifesto-card-placeholder ${expandedIndex === index ? 'hidden' : ''
                }`}
            ></div>
            <div className='manifesto-card-details'>
              <p className='manifesto-description'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Manifesto;
