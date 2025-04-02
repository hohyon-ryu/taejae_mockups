import React from 'react';
import { Link } from 'react-router-dom';

const PostersListPage: React.FC = () => {
  // In the future, this could be fetched from an API or database
  const posters = [
    {
      id: 1,
      title: '디지털 전환과 사회변혁',
      description: '디지털 기술은 어떻게 사회를 변화시키며, 파생된 문제들을 어떻게 해결해야 하는가?',
      path: '/poster'
    }
    // More posters can be added here in the future
  ];

  // Basic SEO setup
  React.useEffect(() => {
    document.title = "Posters - Taejae Mockups";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse all posters created by Taejae Mockups.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Browse all posters created by Taejae Mockups.';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">포스터 목록</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map(poster => (
            <div 
              key={poster.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{poster.title}</h2>
                <p className="text-gray-600 mb-4">{poster.description}</p>
                <Link 
                  to={poster.path} 
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  포스터 보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation back to home */}
        <div className="mt-8">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostersListPage;
