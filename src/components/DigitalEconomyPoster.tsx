import React from 'react';

const DigitalEconomyPoster: React.FC = () => {
  return (
    <div className="bg-white p-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2 text-indigo-900 tracking-tight">디지털 시대 경제 질서</h1>
          <p className="text-xl text-indigo-700 font-semibold mb-3">태재미래전략연구원 디지털 전환과 사회변혁 팀</p>
          <div className="bg-indigo-100 p-3 rounded-lg inline-block shadow-md">
            <p className="text-lg text-indigo-800 italic font-medium">
              "디지털화가 초래하는 경제 질서의 근본적 변화와 공동체 재구성, 그리고 사회적 문제점들의 선제적 해결 방안은?"
            </p>
          </div>
        </div>

        {/* 핵심 변화: 노동에서 관심으로 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-indigo-800 text-white p-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3">
              <img src="/images/posters/digital_economy/section1.png" alt="" className="h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold">1. 디지털 시대 경제의 근본적 변화</h2>
              <p className="text-base italic">"Attention is all that matters"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 p-2 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-lg font-bold text-amber-800 mb-1">현재: 노동 중심</h3>
                <ul className="text-base space-y-1 text-amber-900">
                  <li>• GDP의 약 70%가 노동소득으로 분배</li>
                  <li>• 기업 가치는 인적 자본에 의해 창출</li>
                  <li>• 사회 안전망이 노동 중심으로 설계</li>
                  <li>• 자아 실현도 '커리어'라는 노동으로부터 찾음</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-lg font-bold text-indigo-800 mb-1">미래: 관심 중심</h3>
                <ul className="text-base space-y-1 text-indigo-900">
                  <li>• AI와 자동화로 노동의 가치 재조정</li>
                  <li>• 정보와 콘텐츠 폭증으로 '관심'이 희소 자원화</li>
                  <li>• 소셜 미디어, 엔터테인먼트 등 관심 기반 산업 성장</li>
                  <li>• 관심 획득이 경제적 부와 직결</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 비교 표 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white p-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3">
              <img src="/images/posters/digital_economy/section2.png" alt="" className="h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold">2. 경제 질서 및 구조 변화 비교</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 p-2 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-lg font-bold text-amber-800 mb-1">전통 시대 (산업 시대)</h3>
                <ul className="text-base space-y-0.5 text-amber-900">
                  <li><span className="font-bold">핵심 자원:</span> 노동력, 물리적 자본, 토지</li>
                  <li><span className="font-bold">시장 구조:</span> 과점/경쟁적 시장, 물리적 제약</li>
                  <li><span className="font-bold">주요 행위자:</span> 제조업체, 유통업체, 서비스 기업</li>
                  <li><span className="font-bold">경쟁 방식:</span> 가격, 품질, 브랜드 경쟁</li>
                  <li><span className="font-bold">가치 창출:</span> 상품 생산/판매, 서비스 제공</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-lg font-bold text-indigo-800 mb-1">디지털/AI/관심 경제 시대</h3>
                <ul className="text-base space-y-0.5 text-indigo-900">
                  <li><span className="font-bold">핵심 자원:</span> 관심, 데이터, AI 역량, 네트워크</li>
                  <li><span className="font-bold">시장 구조:</span> 승자독식, 네트워크 효과, 제로 한계비용</li>
                  <li><span className="font-bold">주요 행위자:</span> 플랫폼, 데이터/AI 기업, 크리에이터</li>
                  <li><span className="font-bold">경쟁 방식:</span> 플랫폼, 관심/데이터 확보 경쟁</li>
                  <li><span className="font-bold">가치 창출:</span> 상호작용 촉진, 관심 기반 수익화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 관심 경제가 가져오는 공동체의 변화 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-800 text-white p-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3">
              <img src="/images/posters/digital_economy/section3.png" alt="" className="h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold">3. 관심 경제가 가져오는 공동체의 변화</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 border-b border-green-200 pb-0.5">개인</h3>
                <p className="text-base text-green-900">자아의 상품화, 정체성이 '좋아요'와 '팔로워' 수로 측정</p>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 border-b border-green-200 pb-0.5">가정</h3>
                <p className="text-base text-green-900">가족 시간이 디지털 플랫폼과 경쟁, 가정생활의 콘텐츠화</p>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 border-b border-green-200 pb-0.5">이웃</h3>
                <p className="text-base text-green-900">물리적 근접성보다 공통 관심사 중심의 공동체 형성</p>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 border-b border-green-200 pb-0.5">기업</h3>
                <p className="text-base text-green-900">소셜 미디어, AI, 검색 엔진의 부상과 영향력 확대</p>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 border-b border-green-200 pb-0.5">도시</h3>
                <p className="text-base text-green-900">관심 중심 도시 공간 재구성, 디지털 공간으로 확장</p>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 border-b border-green-200 pb-0.5">국가/글로벌</h3>
                <p className="text-base text-green-900">플랫폼과 국가 간 주권 경쟁, 데이터 패권과 안보화</p>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 관심 경제의 건강하고 안전한 미래 저해 요소 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-800 text-white p-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3">
              <img src="/images/posters/digital_economy/section4.png" alt="" className="h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold">4. 디지털 관심 경제의 미래 저해 요소</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-400">
                <h3 className="text-base font-bold text-red-800">디지털 건강 위기</h3>
                <p className="text-base text-red-900">관심 경쟁과 알림 폭격으로 수면장애, 주의력 결핍 증가</p>
              </div>
              
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-400">
                <h3 className="text-base font-bold text-red-800">사회적 단절 심화</h3>
                <p className="text-base text-red-900">온라인 집단으로 이동, 사회적 유대 약화</p>
              </div>
              
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-400">
                <h3 className="text-base font-bold text-red-800">민주주의 기능 약화</h3>
                <p className="text-base text-red-900">선정적 정치 담론 확산, 사회적 합의 능력 저하</p>
              </div>
              
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-400">
                <h3 className="text-base font-bold text-red-800">경제적 안전망 붕괴</h3>
                <p className="text-base text-red-900">노동 중심 설계된 복지 시스템의 부적합성</p>
              </div>
              
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-400">
                <h3 className="text-base font-bold text-red-800">인지 주권 상실</h3>
                <p className="text-base text-red-900">알고리즘 조작으로 자율적 의사결정 침해</p>
              </div>
              
              <div className="bg-red-50 p-2 rounded-lg border-l-4 border-red-400">
                <h3 className="text-base font-bold text-red-800">기술 불평등 심화</h3>
                <p className="text-base text-red-900">디지털 리터러시에 따른 새로운 불평등 발생</p>
              </div>
            </div>
          </div>
        </div>

        {/* 건강하고 안전한 디지털 경제 질서 수립을 위한 전략 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-purple-800 text-white p-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3">
              <img src="/images/posters/digital_economy/section5.png" alt="" className="h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold">5. 디지털 경제 질서 수립 전략</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-gray-800 mb-1 border-b border-gray-300 pb-0.5">AS-IS</h3>
                <ul className="text-base space-y-0.5 text-gray-700">
                  <li>• 노동 중심 경제 질서, 고용 기반 안전망</li>
                  <li>• AI와 자동화로 노동 가치 재조정 중</li>
                  <li>• 소수 플랫폼에 관심 집중</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-indigo-800 mb-1 border-b border-indigo-300 pb-0.5">TO-BE</h3>
                <ul className="text-base space-y-0.5 text-indigo-700">
                  <li>• 균형 잡힌 관심 생태계, 다양성 보장</li>
                  <li>• 인지적 주권이 보장된 사회</li>
                  <li>• 디지털-물리적 통합 공동체</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-2 rounded-lg">
                <h3 className="text-base font-bold text-green-800 mb-1 border-b border-green-300 pb-0.5">TO-DO</h3>
                <div className="text-base text-green-800">
                  <p>1. <span className="font-bold">사회 변화 분석</span>: 공동체 재구성 과정 모니터링</p>
                  <p>2. <span className="font-bold">가치 체계 전환</span>: 관심 경제적 가치 측정 체계 혁신</p>
                  <p>3. <span className="font-bold">제도 혁신</span>: 관심 독점 방지 법적 프레임워크</p>
                  <p>4. <span className="font-bold">인프라 구축</span>: 인지 주권 강화 교육 시스템</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="mt-3 text-right text-base text-gray-600">
          © 2025 태재미래전략연구원 디지털 전환과 사회변혁 팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyPoster;
