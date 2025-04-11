import React from 'react';
import DigitalEconomyPoster from '../components/DigitalEconomyPoster';

const DigitalEconomyPosterPage: React.FC = () => {
  // Basic SEO setup
  React.useEffect(() => {
    document.title = "디지털 시대 경제 질서 - 태재미래전략연구원";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '디지털화가 초래하는 경제 질서의 근본적 변화와 공동체 재구성, 그리고 미래 전략을 제시합니다.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = '디지털화가 초래하는 경제 질서의 근본적 변화와 공동체 재구성, 그리고 미래 전략을 제시합니다.';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <DigitalEconomyPoster />
  );
};

export default DigitalEconomyPosterPage;
