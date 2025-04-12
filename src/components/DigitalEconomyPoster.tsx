import React from 'react';
import section1Image from '../assets/images/posters/digital_economy/section1.png';
import section2Image from '../assets/images/posters/digital_economy/section2.png';
import section3Image from '../assets/images/posters/digital_economy/section3.png';
import section4Image from '../assets/images/posters/digital_economy/section4.png';
import section5Image from '../assets/images/posters/digital_economy/section5.png';

const DigitalEconomyPoster: React.FC = () => {
  return (
    <div className="bg-white p-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">디지털 시대 경제 질서</h1>
          <p className="text-xl text-gray-700 font-semibold mb-3">태재미래전략연구원 디지털 전환과 사회변혁 팀</p>
          <div className="bg-gray-100 p-3 rounded-lg inline-block shadow-md">
            <p className="text-lg text-gray-800 italic font-medium">
              "디지털화가 초래하는 경제 질서의 근본적 변화와 공동체 재구성, 그리고 사회적 문제점들의 선제적 해결 방안은?"
            </p>
          </div>
        </div>

        {/* 핵심 변화: 노동에서 관심으로 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section1Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">1. 디지털 시대 경제의 근본적 변화</h2>
              <p className="text-base italic">"Attention is all that matters"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg font-bold text-gray-800 mb-1">현재 핵심 희소 가치: 노동</h3>
                <ul className="text-base space-y-1 text-gray-700">
                  <li>• 기업 가치는 인적 자본에 의해 창출</li>
                  <li>• 사회 안전망이 노동 중심으로 설계</li>
                  <li>• 공간의 가치는 직주근접 중심으로 형성</li>
                  <li>• 자아 실현도 '커리어'라는 노동으로부터 찾음</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg font-bold text-gray-800 mb-1">미래 핵심 희소 가치: 관심</h3>
                <ul className="text-base space-y-1 text-gray-700">
                  <li>• 정보와 콘텐츠 폭증으로 '관심'이 희소 자원화</li>
                  <li>• 소셜 미디어, 엔터테인먼트 등 관심 기반 산업 성장</li>
                  <li>• 어떻게 생산하는지가 아니라 무엇을 생산하는지가 중요한 창의력의 시대</li>
                  <li>• 관심 획득이 경제적 부와 직결 (Meta, Google, TikTok, YouTube)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 비교 표 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section2Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">2. 디지털 시대 경제 질서의 변화</h2>
              <p className="text-base italic">"From ownership to access"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제 주체</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">전통:</span> 제조업체, 서비스 기업, 소비자</li>
                  <li>• <span className="font-semibold">디지털:</span> 플랫폼, 크리에이터, 프로슈머</li>
                  <li>• <span className="font-semibold">고용:</span> 정규직 → 프리랜서, 긱 워커</li>
                  <li>• <span className="font-semibold">역할:</span> 생산자/소비자 경계 모호화</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제 객체</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">전통:</span> 물리적 상품, 서비스, 노동력</li>
                  <li>• <span className="font-semibold">디지털:</span> 데이터, 알고리즘, 관심, 경험</li>
                  <li>• <span className="font-semibold">소유권:</span> 사용/수익/처분/통제권 분리</li>
                  <li>• <span className="font-semibold">가치:</span> 소유 가치 → 접근 및 경험 가치</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제 체제</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">전통:</span> 노동 중심 경제</li>
                  <li>• <span className="font-semibold">디지털:</span> 관심 기반 수익화</li>
                  <li>• <span className="font-semibold">구조:</span> 가치 사슬 디지털화</li>
                  <li>• <span className="font-semibold">자원:</span> 관심이 희소 자원화</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">시장 메커니즘</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">전통:</span> 경쟁적 시장, 물리적 제약</li>
                  <li>• <span className="font-semibold">디지털:</span> 승자독식, 네트워크 효과</li>
                  <li>• <span className="font-semibold">관계:</span> 규제-피규제 → 콘소시엄 협력</li>
                  <li>• <span className="font-semibold">모델:</span> 구독 모델, 플랫폼 기반 중개</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 시대 경제 구조의 변화 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section4Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">3. 디지털 시대 경제 구조의 변화</h2>
              <p className="text-base italic">"Platform beats product"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">산업 구조</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 플랫폼 중심 산업 생태계 형성</li>
                  <li>• 콘텐츠 산업의 경제적 비중 증가</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">시장 구조</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 양면/다면 시장 확산</li>
                  <li>• 데이터 기반 가격 차별화 심화</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">분배 구조</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 소득 양극화 및 중산층 약화</li>
                  <li>• 관심 자본가 계층 형성</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">거시경제 구조</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 디지털 GDP 측정 체계 필요성</li>
                  <li>• 국가 간 디지털 격차 심화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 전환이 가져오는 공동체의 변화 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section3Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">4. 디지털 전환이 가져오는 공동체의 변화</h2>
              <p className="text-base italic">"Communities of interest, not proximity"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg flex items-center">
                <h3 className="text-base font-bold text-gray-800 mr-2">개인:</h3>
                <p className="text-base text-gray-700">자아의 상품화, '좋아요'로 측정되는 정체성</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex items-center">
                <h3 className="text-base font-bold text-gray-800 mr-2">가정:</h3>
                <p className="text-base text-gray-700">가족 시간과 디지털 플랫폼의 경쟁</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex items-center">
                <h3 className="text-base font-bold text-gray-800 mr-2">이웃:</h3>
                <p className="text-base text-gray-700">관심사 중심의 새로운 공동체 형성</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex items-center">
                <h3 className="text-base font-bold text-gray-800 mr-2">기업:</h3>
                <p className="text-base text-gray-700">플랫폼 기업의 영향력 확대</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex items-center">
                <h3 className="text-base font-bold text-gray-800 mr-2">도시:</h3>
                <p className="text-base text-gray-700">도시 공간의 디지털 확장</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex items-center">
                <h3 className="text-base font-bold text-gray-800 mr-2">국가/글로벌:</h3>
                <p className="text-base text-gray-700">플랫폼-국가 간 데이터 주권 경쟁</p>
              </div>
            </div>
          </div>
        </div>

        {/* 디지털 관심 경제의 건강하고 안전한 미래 저해 요소 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section5Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">5. 디지털 경제의 안전하고 건강한 미래 저해 요소</h2>
              <p className="text-base italic">"Digital prosperity's hidden costs"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">디지털 건강 위기:</h3>
                <p className="text-base text-gray-700">관심 경쟁과 알림 폭격으로 수면장애, 주의력 결핍 증가</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">사회적 단절 심화:</h3>
                <p className="text-base text-gray-700">온라인 집단으로 이동, 사회적 유대 약화</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">민주주의 기능 약화:</h3>
                <p className="text-base text-gray-700">선정적 정치 담론 확산, 사회적 합의 능력 저하</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제적 안전망 붕괴:</h3>
                <p className="text-base text-gray-700">노동 중심 설계된 복지 시스템의 부적합성</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">인지 주권 상실:</h3>
                <p className="text-base text-gray-700">알고리즘 조작으로 자율적 의사결정 침해</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">기술 불평등 심화:</h3>
                <p className="text-base text-gray-700">디지털 리터러시에 따른 새로운 불평등 발생</p>
              </div>
            </div>
          </div>
        </div>

        {/* 건강하고 안전한 디지털 경제 질서 수립을 위한 전략 */}
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section1Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">6. 디지털 경제 질서 수립 전략</h2>
              <p className="text-base italic">"Securing a safe & prosperous digital future"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">AS-IS:</h3>
                <ul className="text-base space-y-0.5 text-gray-700 mt-1">
                  <li>• 노동 중심 경제 질서, 고용 기반 안전망</li>
                  <li>• AI와 자동화로 노동 가치 재조정 중</li>
                  <li>• 소수 플랫폼에 관심 집중</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">TO-BE:</h3>
                <ul className="text-base space-y-0.5 text-gray-700 mt-1">
                  <li>• 균형 잡힌 관심 생태계, 다양성 보장</li>
                  <li>• 인지적 주권이 보장된 사회</li>
                  <li>• 디지털-물리적 통합 공동체</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">TO-DO:</h3>
                <div className="text-base text-gray-700 mt-1">
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
