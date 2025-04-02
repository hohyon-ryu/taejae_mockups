import React from 'react';
import { Link } from 'react-router-dom';
import SocialStructureMatrixPoster from '../components/SocialStructureMatrixPoster';

const SocialStructureMatrixPosterPage: React.FC = () => {
  // Basic SEO setup
  React.useEffect(() => {
    document.title = "사회 구조 변화 매트릭스 - 태재미래전략연구원";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '디지털 전환에 따른 사회 구조의 변화를 시대별 공동체 영역 변화 매트릭스로 보여줍니다.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = '디지털 전환에 따른 사회 구조의 변화를 시대별 공동체 영역 변화 매트릭스로 보여줍니다.';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <SocialStructureMatrixPoster />
  );
};

export default SocialStructureMatrixPosterPage;
