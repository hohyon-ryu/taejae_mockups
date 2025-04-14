import React from 'react';
import { Link } from 'react-router-dom';
import DigitalEconomyPoster250414 from '../components/DigitalEconomyPoster250414';

const DigitalEconomyPoster250414Page: React.FC = () => {
  // Basic SEO setup
  React.useEffect(() => {
    document.title = "디지털 시대 경제 질서 (250414) - Taejae Mockups";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '디지털 시대의 경제 질서와 사회 변혁에 관한 포스터 (250414 버전)');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = '디지털 시대의 경제 질서와 사회 변혁에 관한 포스터 (250414 버전)';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link 
            to="/poster/digital-economy" 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            ← 최신 버전으로 돌아가기
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4">
          <DigitalEconomyPoster250414 />
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyPoster250414Page;
