import React from 'react';
import { motion } from 'framer-motion';
import './MyService.css'; 

const serviceData = [
    { id: '01', title: 'Web design', description: 'Web development is the process of building, programming.' },
    { id: '02', title: 'Graphics design', description: 'Web development is the process of building, programming.' },
    { id: '03', title: 'Social media', description: 'Web development is the process of building, programming.' },
    { id: '04', title: 'App design', description: 'Web development is the process of building, programming.' },
    { id: '05', title: 'Digital marketing', description: 'Web development is the process of building, programming.' },
    { id: '06', title: 'Content writing', description: 'Web development is the process of building, programming.' },
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
                <p className='readMore'>Read More </p>
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
