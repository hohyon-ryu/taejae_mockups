import React from 'react';
import { Link } from 'react-router-dom';
import DigitalTransformationPoster from '../components/Poster'; // Using the renamed component

const PosterPage: React.FC = () => {
  // You might want to fetch specific poster data here if needed
  // For now, it just renders the Poster component

  // Basic SEO setup
  React.useEffect(() => {
    document.title = "Poster Page - Taejae Mockups";
    // You can add more meta tags here using document.head or a library like react-helmet-async
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View the poster generated by Taejae Mockups.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'View the poster generated by Taejae Mockups.';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <DigitalTransformationPoster />
  );
};

export default PosterPage;
