import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-moiza-purple">태재미래전략연구원 프로젝트 디자인 Mockups</h1>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Link to="/moiza" className="block no-underline text-black">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Moiza AI Mockup</h2>
                <p className="text-gray-600 mb-4">
                  A mockup for the Moiza AI discussion platform with question cards, 
                  AI and human participation tracking, and more.
                </p>
                <div className="flex justify-end">
                  <span className="inline-block bg-moiza-purple text-white px-4 py-2 rounded-md">
                    View Mockup
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Link to="/posters" className="block no-underline text-black">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">포스터 목록</h2>
                <p className="text-gray-600 mb-4">
                  태재미래전략연구원에서 제작한 모든 포스터를 확인할 수 있는 페이지입니다.
                </p>
                <div className="flex justify-end">
                  <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-md">
                    포스터 목록 보기
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-500 text-sm">
          © 2025 태재미래전략연구원. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
