import React from 'react';
import section1Image from '../assets/images/posters/digital_economy/section1.png';
import section2Image from '../assets/images/posters/digital_economy/section2.png';
import section3Image from '../assets/images/posters/digital_economy/section3.png';
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
              <h2 className="text-lg font-bold">1. 디지털 시대 경제의 근본적 변화</h2>
              <p className="text-base italic">"Attention is all that matters"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">산업화 시대 핵심 희소 가치: 노동</h3>
                <ul className="text-base space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">아담 스미스:</span> 노동이 모든 가치의 원천</li>
                  <li>• <span className="font-semibold">마르크스:</span> 노동 가치설과 잉여가치 이론</li>
                  <li>• 사회 안전망이 노동 중심으로 설계</li>
                  <li>• 자아 실현도 '커리어'라는 노동으로부터 찾음</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제학적 희소 가치의 변천</h3>
                <ul className="text-base space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">슘페터:</span> 혁신이 경제 발전의 핵심 동력</li>
                  <li>• <span className="font-semibold">하이예크:</span> 분산된 지식이 희소 자원</li>
                  <li>• <span className="font-semibold">드러커:</span> 지식 노동자와 지식 자본</li>
                  <li>• <span className="font-semibold">현대:</span> 데이터와 알고리즘의 가치 부상</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">디지털 시대 핵심 희소 가치: 관심 (Attention)</h3>
                <ul className="text-base space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">노동:</span> 자동화와 AI로 인해 단순 노동의 희소성 감소</li>
                  <li>• <span className="font-semibold">혁신:</span> 오픈소스와 협업 도구로 혁신 장벽 낮아짐</li>
                  <li>• <span className="font-semibold">지식:</span> AI가 지식을 자동 생산하는 일반 자원화</li>
                  <li>• <span className="font-semibold">데이터:</span> 빅데이터 자체보다 처리 능력이 관건</li>
                  <li>• <span className="font-semibold">관심:</span> 정보 과잉 시대에 부와 직결 (실리콘밸리 빅테크)</li>
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
              <h2 className="text-lg font-bold">2. 디지털 시대 경제 질서의 변화</h2>
              <p className="text-base italic">"From ownership to access"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-5 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제 주체</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">전통:</span> 제조업체, 서비스 기업, 소비자</li>
                  <li>• <span className="font-semibold">디지털:</span> 플랫폼, 크리에이터, 프로슈머</li>
                  <li>• <span className="font-semibold">고용:</span> 정규직 → 프리랜서</li>
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
                  <li>• <span className="font-semibold">구조:</span> 가치 사슬 디지털화, 자동화</li>
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
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">분배 구조</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• <span className="font-semibold">전통:</span> 노동 소득 중심 분배</li>
                  <li>• <span className="font-semibold">디지털:</span> 관심 자본가 계층 형성</li>
                  <li>• <span className="font-semibold">결과:</span> 소득 양극화 및 중산층 약화</li>
                  <li>• <span className="font-semibold">대응:</span> 디지털 부의 재분배 필요성</li>
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
              <h2 className="text-lg font-bold">3. 디지털 전환이 가져오는 공동체의 변화</h2>
              <p className="text-base italic">"Communities of interest, not proximity"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">개인과 정체성</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 자아의 상품화, '좋아요'로 측정되는 정체성</li>
                  <li>• 디지털 기술을 통한 개인 맞춤형 생활환경 구현</li>
                  <li>• AI 기반 개인화 서비스로 선호와 정체성 표현</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">가족 공동체</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 가족 시간과 디지털 플랫폼의 경쟁 구도 변화</li>
                  <li>• 자녀 육성과 가족 공동체 기쁨을 위한 스마트홈</li>
                  <li>• 가족 구성원의 커리어 성공을 돕는 디지털 환경</li>
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
                  <li>• City OS를 통한 도시 인프라의 통합 관리</li>
                  <li>• 시민 참여형 거버넌스로 의사결정 민주화</li>
                  <li>• 빅데이터 기반 선제적 도시 문제 해결</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">국가 차원</h3>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 플랫폼-국가 연합으로 기술 패권 경쟁</li>
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
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section5Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">4. 디지털 경제의 안전하고 건강한 미래 저해 요소</h2>
              <p className="text-base italic">"Digital prosperity's hidden costs"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">디지털 건강 위기:</h3>
                <p className="text-sm text-gray-700">관심 경쟁과 알림 폭격으로 수면장애, 주의력 결핍 증가</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">사회적 단절 심화:</h3>
                <p className="text-sm text-gray-700">온라인 집단으로 이동, 사회적 유대 약화</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">경제적 안전망 붕괴:</h3>
                <p className="text-sm text-gray-700">노동 중심 설계된 복지 시스템의 부적합성</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">인지 주권 상실:</h3>
                <p className="text-sm text-gray-700">알고리즘 조작으로 자율적 의사결정 침해</p>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">기술 불평등 심화:</h3>
                <p className="text-sm text-gray-700">디지털 리터러시에 따른 새로운 불평등 발생</p>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-base font-bold text-gray-800 mb-1">패권 경쟁 심화:</h3>
                <p className="text-sm text-gray-700">디지털 철의 장막으로 국제 국가-기업 연합 간의 갈등</p>
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
              <h2 className="text-lg font-bold">5. 디지털 경제 질서 수립 전략</h2>
              <p className="text-base italic">"Securing a safe & prosperous digital future"</p>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">AS-IS:</h3>
                <ul className="text-base space-y-0.5 text-gray-700 mt-1">
                  <li>• 관심의 과부화로 번아웃</li>
                  <li>• 노동 가치의 급변으로 사회 혼란</li>
                  <li>• 소수에게 관심 집중으로 권력 불균형</li>
                  <li>• 디지털 패권 경쟁과 철의 장막</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">TO-BE:</h3>
                <ul className="text-base space-y-0.5 text-gray-700 mt-1">
                  <li>• 관심이 건강하게 소비되는 사회</li>
                  <li>• 노동이 아닌 새로운 가치관이 자리잡는 사회</li>
                  <li>• 합리적으로 균형있게 분배되는 사회</li>
                  <li>• 글로벌 디지털 협력 생태계 구축</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg flex flex-col">
                <h3 className="text-base font-bold text-gray-800">TO-DO:</h3>
                <div className="text-base text-gray-700 mt-1">
                  <p>1. <span className="font-bold">디지털 웰빙</span>: 건강한 디지털 소비 연구</p>
                  <p>2. <span className="font-bold">새로운 가치관</span>: 양한 사회적 기여에 대한 연구</p>
                  <p>3. <span className="font-bold">균형 분배</span>: 디지털 경제 이익의 공정한 분배</p>
                  <p>4. <span className="font-bold">글로벌 생태계</span>: 디지털 패권 경쟁에서 협력으로</p>
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
