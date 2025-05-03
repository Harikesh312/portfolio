import React from 'react';
import { motion } from 'framer-motion';
import './MyService.css'; 

const serviceData = [
    { id: '01', title: 'Website Design', description: 'Designing clean, modern, and responsive website layouts that deliver a great user experience and reflect your brand identity.' },
    { id: '02', title: 'Frontend Development', description: 'Building interactive websites using HTML, CSS, JavaScript, and React for smooth user experiences.' },
    { id: '03', title: 'Social media', description: 'Creating eye-catching graphics for platforms like Instagram, Facebook, and LinkedIn to boost your online presence.' },
    { id: '04', title: 'Branding', description: 'Designing brand elements like logos, color palettes, and typography to establish a consistent and memorable visual identity' },
    { id: '05', title: 'UI/UX Design', description: 'Designing intuitive user interfaces and experiences for websites and apps, ensuring ease of use and visual appeal.' },
    { id: '06', title: 'Landing Page Design', description: 'Designing landing pages for marketing, product launches, and lead generation.' },
];

const ServiceCard = ({ service }) => {
    return (
        <motion.div
            className="service-card-container" 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className={`service-card`} 
            >
                <span className="service-number">{service.id}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className='readMore'>Let’s Collaborate.. </p>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id='services' className="services-section">
            <div className="container">
                <div className="text-center section-title">
                    <h2 className="services-heading">My Services</h2>
                </div>
                <div className="services-grid">
                    {serviceData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
