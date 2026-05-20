import React from 'react';

const StructuredData: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kevin Sovet",
    "jobTitle": "UX/UI Designer, Graphic Designer, Web Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "TMS Group",
      "url": "https://www.tms-group.be"
    },
    "url": "https://by-sovet.me",
    "sameAs": [
      "https://www.linkedin.com/in/kevinsovet/",
      "https://www.instagram.com/edouardksovet"
    ],
    "email": "kevin.sovet@gmail.com",
    "description": "Graphic, Web & UX/UI Designer with 10+ years of experience. Currently Marketing & Operations Manager and UX/UI Consultant at TMS Group.",
    "knowsAbout": [
      "UX Design",
      "UI Design",
      "Web Design",
      "Graphic Design",
      "Product Design",
      "Brand Identity",
      "Frontend Development"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kevin Sovet Portfolio",
    "url": "https://by-sovet.me",
    "description": "Portfolio of Kevin Sovet - Graphic, Web & UX/UI Designer",
    "author": {
      "@type": "Person",
      "name": "Kevin Sovet"
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Kevin Sovet Portfolio",
    "creator": {
      "@type": "Person",
      "name": "Kevin Sovet"
    },
    "description": "Portfolio showcasing digital products and brand identities designed by Kevin Sovet",
    "keywords": "UX Design, UI Design, Web Design, Graphic Design, Portfolio"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
};

export default StructuredData;
