import './FoundersSection.css';

import Image from 'next/image';
import React from 'react';

const founders = [
  {
    name: 'Pratik Boss',
    title: 'CEO & Visionary',
    image: '/public/ProjectImages/DM-Favicon.svg',
    bio: 'Leading innovation and inspiring change.'
  },
  {
    name: 'Co-Founder Name',
    title: 'Co-Founder',
    image: '/public/ProjectImages/DevPOS-Favicon.svg',
    bio: 'Driving strategy and growth.'
  },
  // Add more founders as needed
];

const FoundersSection = () => (
  <section className="founders-section">
    <h2 className="founders-title">Meet Our Founders</h2>
    <p className="founders-subtitle">Visionaries who inspire innovation, leadership, and impact.</p>
    <div className="founders-list">
      {founders.map((founder, idx) => (
        <div className="founder-card" key={idx}>
          <Image src={founder.image} alt={founder.name} width={120} height={120} className="founder-image" />
          <h3 className="founder-name">{founder.name}</h3>
          <p className="founder-title">{founder.title}</p>
          <p className="founder-bio">{founder.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FoundersSection;
