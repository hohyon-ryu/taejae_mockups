import React from 'react';
import section1Image from '../assets/images/posters/digital_economy/section1.png';
import section3Image from '../assets/images/posters/digital_economy/section3.png';
import section5Image from '../assets/images/posters/digital_economy/section5.png';

const DigitalEconomyPoster: React.FC = () => {
  return (
    <div className="bg-white p-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">디지털 시대의 경제 질서와 사회 변혁</h1>
          <div className="bg-gray-100 p-3 rounded-lg inline-block">
            <p className="text-lg text-gray-800 italic font-medium">
              "디지털화가 초래하는 경제의 변혁과 그에 따른 사회적 문제점들의 선제적 해결 방안은?"
            </p>
          </div>
        </div>

        {/* 핵심 변화: 노동에서 관심으로 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section1Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">1. 디지털 시대 경제 질서의 변화</h2>
              <p className="text-base italic">"Attention is all that matters"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">산업화 시대 <span className="text-blue-600 font-normal text-sm ml-1">노동 중심</span></h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">핵심 가치:</span> 노동이 모든 가치의 원천</li>
                  <li>• <span className="font-semibold">경제 이론:</span> 아담 스미스의 노동 가치설, 마르크스의 노동착취론</li>
                  <li>• <span className="font-semibold">시장 원리:</span> 공급과 수요에 기반한 자유 시장 원리</li>
                  <li>• <span className="font-semibold">경제 구조:</span> 노동 가치 기반 경제 체계</li>
                  <li>• <span className="font-semibold">경제 주체:</span> 제조업체, 서비스 기업, 소비자</li>
                  <li>• <span className="font-semibold">경제 객체:</span> 물리적 상품, 서비스, 노동력</li>
                  <li>• <span className="font-semibold">개인의 가치:</span> '커리어'라는 노동을 통한 정체성 확립</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">정보화 시대 <span className="text-green-600 font-normal text-sm ml-1">지식 중심</span></h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">핵심 가치:</span> 지식과 혁신이 경제 발전의 동력</li>
                  <li>• <span className="font-semibold">경제 이론:</span> 슘페터의 혁신론, 하이에크의 분산된 지식</li>
                  <li>• <span className="font-semibold">시장 원리:</span> 프리드먼의 자유 시장과 통화 정책</li>
                  <li>• <span className="font-semibold">경제 구조:</span> 지식 기반 경제로의 전환, 무형 자산 중요성 증가</li>
                  <li>• <span className="font-semibold">경제 주체:</span> 제조업체, 서비스 기업, 소비자</li>
                  <li>• <span className="font-semibold">경제 객체:</span> 물리적 상품, 서비스, 지식 자산</li>
                  <li>• <span className="font-semibold">개인의 가치:</span> 지식과 전문성을 통한 사회적 인정</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">디지털 시대 <span className="text-purple-600 font-normal text-sm ml-1">관심 중심</span></h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">핵심 가치:</span> 관심(Attention)이 희소 자원화</li>
                  <li>• <span className="font-semibold">경제 이론:</span> 브린울프스의 데이터와 알고리즘 가치론</li>
                  <li>• <span className="font-semibold">시장 원리:</span> 관심 기반 수익화 모델의 확산, 정부-기업 컨소시엄 협력</li>
                  <li>• <span className="font-semibold">경제 구조:</span> 구글, 메타, 유튜브 등 플랫폼 경제 중심</li>
                  <li>• <span className="font-semibold">경제 주체:</span> 플랫폼, 프로슈머(생산자/소비자 경계 모호)</li>
                  <li>• <span className="font-semibold">경제 객체:</span> 데이터, 알고리즘, 관심, 경험 (사용/수익/처분/통제권 분리)</li>
                  <li>• <span className="font-semibold">개인의 가치:</span> 관심과 영향력을 통한 사회적 가치 창출</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 전환이 가져오는 공동체의 변화 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section3Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">2. 디지털 전환이 가져오는 공동체의 변화</h2>
              <p className="text-base italic">"Communities of interest, not proximity"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">개인과 정체성</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 자아의 상품화, '좋아요'로 측정되는 정체성</li>
                  <li>• 개인의 전문성 강화</li>
                  <li>• AI 기반 개인화 서비스로 선호와 정체성 표현</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">가족 공동체</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 가족간 소통 약화</li>
                  <li>• 자녀 육성과 가족 공동체 행복을 위한 스마트홈</li>
                  <li>• 가정의 생산 공간 기능 추가</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">이웃과 지역사회</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 관심사 중심의 새로운 공동체 형성</li>
                  <li>• 물리적 근접성과 디지털 연결의 하이브리드 공동체</li>
                  <li>• 디지털 플랫폼을 통한 지역사회 참여 확대</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">도시 공간</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 디지털 인프라를 통한 도시 공간의 디지털화</li>
                  <li>• 도시 간 경쟁 심화</li>
                  <li>• 공공성 재구성</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">국가 차원</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 기업-국가 연합으로 기술 패권 경쟁</li>
                  <li>• 디지털 기술 기반 국가 인프라 혁신</li>
                  <li>• 도시와 글로벌의 강화로 국가 정체성 재정의</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">글로벌 차원</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 디지털 기술 기반 지속가능한 협력 시도</li>
                  <li>• 글로벌 디지털 공동체와 국가 정체성 균형</li>
                  <li>• 초국가적 디지털 거버넌스 체계 구축</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 관심 경제의 건강하고 안전한 미래 저해 요소 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section5Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">3. 디지털 경제의 안전하고 건강한 미래 저해 요소</h2>
              <p className="text-base italic">"Digital prosperity's hidden costs"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">개인 측면:</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">인지 과부하:</span> 관심 경쟁과 개인 역량 강화로 번아웃</li>
                  <li>• <span className="font-semibold">자율성 침해:</span> 자율적 의사결정이 AI로 침해</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">사회 측면:</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">사회적 단절 심화:</span> 온라인 집단의 양극화</li>
                  <li>• <span className="font-semibold">새로운 계급 격차:</span> 기술 불평등에 따른 격차</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">국가 측면:</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">경제적 안전망 붕괴:</span> 노동 중심 복지 시스템 부적합</li>
                  <li>• <span className="font-semibold">패권 경쟁 심화:</span> 디지털 철의 장막으로 국가-기업 연합 간 갈등</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 건강하고 안전한 디지털 경제 질서 수립을 위한 전략 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section1Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">4. 디지털 경제 질서 수립 전략</h2>
              <p className="text-base italic">"Securing a safe & prosperous digital future"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">AS-IS:</h3>
                <ul className="text-sm space-y-0.5 text-gray-700 mt-1">
                  <li>• 관심의 과부화로 번아웃</li>
                  <li>• 노동 가치의 급변으로 사회 혼란</li>
                  <li>• 소수에게 관심 집중으로 권력 불균형</li>
                  <li>• 디지털 패권 경쟁과 철의 장막</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">TO-BE:</h3>
                <ul className="text-sm space-y-0.5 text-gray-700 mt-1">
                  <li>• 관심이 건강하게 소비되는 사회</li>
                  <li>• 노동이 아닌 새로운 가치관이 자리잡는 사회</li>
                  <li>• 합리적으로 균형있게 분배되는 사회</li>
                  <li>• 글로벌 디지털 협력 생태계 구축</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">TO-DO:</h3>
                <ul className="text-sm space-y-0.5 text-gray-700 mt-1">
                  <li>• 관심 과부화/독점 방지 시스템 구축 연구</li>
                  <li>• 노동 외 다양한 사회적 가치 연구</li>
                  <li>• 디지털 경제 이익의 공정한 분배 연구</li>
                  <li>• 글로벌 기술 생태계 구축 방안 연구</li>
                </ul>
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
