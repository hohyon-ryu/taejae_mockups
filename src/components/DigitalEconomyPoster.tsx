import React from 'react';
import section2Image from '../assets/images/posters/digital_economy/section2.png';
import section5Image from '../assets/images/posters/digital_economy/section5.png';

const DigitalEconomyPoster: React.FC = () => {
  return (
    <div className="bg-white p-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">디지털 시대의 경제 질서 연구 기획안</h1>
          <div className="bg-gray-100 p-3 rounded-lg inline-block">
            <p className="text-base text-gray-800 italic font-medium">
              "디지털 전환이 가속화됨에 따라 사회 구조는 어떻게 변화하며, 이러한 변화는 기존 경제 질서에 어떤 영향을 미치는가?"
            </p>
          </div>
        </div>

        {/* 디지털 혁명과 사회적 파급 효과 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section2Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">1. 디지털 시대 사회 변혁</h2>
            </div>
          </div>
          
          <div className="p-3">  
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-1">개인</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• AI로 개인의 능력 강화로 슈퍼휴먼 탄생 - 지식 접근성과 자기 해결 능력 증대</li>
                  <li>• 전문직(의사, 변호사 등)의 업무가 개인화되면서 기존 전문직의 역할 변화</li>
                  <li>• 10%의 슈퍼휴먼과 90%의 일반인으로 사회 양극화 가능성</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-1">가정</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 가족 제도 변화 - 결혼과 출산을 선택으로 인식하는 경향 증가</li>
                  <li>• 개인 강화로 부모에 대한 의존도 감소, 전통적 가족관계 약화</li>
                  <li>• 상호작용 필요성 감소로 1인 가구 증가, 새로운 형태의 가정 등장</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-1">이웃/공동체</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 능력이 강화된 개인들이 원하는 새로운 형태의 공동체 등장</li>
                  <li>• 물리적 이동의 감소로 온라인 중심 커뮤니티 활성화</li>
                  <li>• 공통 관심사나 가치관 중심으로 형성되는 느슨한 공동체</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-1">도시</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 기능별로 전문화된 도시 발전 - 교육도시, 의료도시 등으로 특화</li>
                  <li>• 개인이 필요에 따라 도시를 선택하는 구독형 도시 개념 등장</li>
                  <li>• 국가 기능의 90%가 도시로 이전, 도시 중심의 행정 체계 구축</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-1">국가</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 개인과 국가의 관계 재정립 - 국가 역할 축소와 분권화</li>
                  <li>• 조세 체계의 변화 - 로봇세 등 새로운 과세 대상과 방식 등장</li>
                  <li>• 국경의 중요성 감소와 도시 중심의 국제 질서 형성</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-1">소유와 분배</h4>
                <ul className="text-sm space-y-0.5 text-gray-700">
                  <li>• 지식재산권과 데이터 소유권에 대한 새로운 개념 정립 필요</li>
                  <li>• 개인 생산성 향상으로 소유 개념의 변화와 공유경제 확산</li>
                  <li>• 국가의 분배 기능 약화와 새로운 경제 질서 형성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* AS-IS, TO-BE, TO-DO 섹션 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section5Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">2. 안전하고 건강한 공동체와 경제 질서</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-4">
              {/* AS-IS */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-base font-bold text-gray-800 mb-2">AS-IS (현 문제점)</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 개인 역량 강화와 공동체의 통제 사이의 갈등</li>
                  <li>• 국가 단위 경제 구조와 규제의 한계</li>
                  <li>• 디지털 경제에 맞지 않는 조세 체계</li>
                  <li>• 데이터 소유권 개념 혼란과 침해</li>
                </ul>
              </div>
              
              {/* TO-BE */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-base font-bold text-gray-800 mb-2">TO-BE (바람직한 미래)</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• 개인 강화와 공동체의 조화로운 성장</li>
                  <li>• 도시 중심 협력 네트워크 경제 구조</li>
                  <li>• 투명하고 효율적인 디지털 조세 체계</li>
                  <li>• 명확한 디지털 자산 소유권 보장</li>
                </ul>
              </div>
              
              {/* TO-DO */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                <h4 className="text-base font-bold text-gray-800 mb-2">TO-DO (핵심 연구 과제)</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>1. 개인의 강화와 공동체 변화 연구</li>
                  <li>2. 국가 개념의 변화와 역할 재정의</li>
                  <li>3. 디지털 시대 규제와 조세 체계 구축</li>
                  <li>4. 데이터 소유권과 자산 개념 재설계</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 연구 과제 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section5Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">3. 연구 과제</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-4">
              {/* 과제 1: 개인의 강화와 공동체 변화 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">과제 1. 개인의 강화와 공동체 변화 <span className="text-xs font-normal text-gray-500">(유재연)</span></h4>
                <p className="text-sm text-gray-700 mb-2">디지털 기술은 어떻게 슈퍼휴먼을 만드는가, 그리고 슈퍼휴먼은 공동체와 도시를 어떻게 변화시키는가?</p>
                
                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Daron Acemoglu</span> (MIT 인스티튜트 교수, 노벨 경제학상 수상자) - 
                      <span className="text-gray-600 italic"> 기술 편향적 변화(SBTC) 및 과업 기반 프레임워크 개발, AI의 생산성 향상 효과와 불평등 심화 가능성 분석</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Erik Brynjolfsson</span> (스탠포드 HAI 디지털 경제 연구소 소장) - 
                      <span className="text-gray-600 italic"> 생산-분배-소비의 경제 기본 구조가 디지털화로 변화하는 과정 연구, '생산성의 역설'(Productivity Paradox) 개념 개발</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Shoshana Zuboff</span> (하버드 경영대학원 명예교수) - 
                      <span className="text-gray-600 italic"> '감시 자본주의' 개념 창시자, 개인 데이터 추출과 행동 예측을 통한 새로운 권력 구조 형성 분석</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* 과제 2: 국가 개념의 변화 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">과제 2. 국가 개념의 변화 <span className="text-xs font-normal text-gray-500">(윤준영)</span></h4>
                <p className="text-sm text-gray-700 mb-2">국가의 개념은 어떻게 달라지고, 그들은 어떻게 슈퍼휴먼의 활동에 개입할 수 있는가?</p>
                
                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Anne-Marie Slaughter</span> (프린스턴 대학교 교수, 전 국무부 정책기획실장) - 
                      <span className="text-gray-600 italic"> '네트워크 국가' 개념 제시, 국가 권력이 네트워크화된 주체들 간의 관계로 재편되는 과정 연구</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Joseph Nye</span> (하버드 케네디 스쿨 교수) - 
                      <span className="text-gray-600 italic"> '소프트 파워' 개념 창시자, 디지털 시대 국가의 영향력이 강제력보다 매력과 설득으로 변화하는 현상 분석</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Parag Khanna</span> (싱가포르 국립대학 선임연구원) - 
                      <span className="text-gray-600 italic"> '연결 지정학'(Connectography) 개념 제안, 국경보다 연결성이 중요해지는 세계 질서 분석</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* 과제 3: 규제와 조세의 변화 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">과제 3. 규제와 조세의 변화 <span className="text-xs font-normal text-gray-500">(김민호)</span></h4>
                <p className="text-sm text-gray-700 mb-2">디지털 시대의 규제와 조세는 어떻게 달라지는가?</p>
                
                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Lawrence Lessig</span> (하버드 로스쿨 교수) - 
                      <span className="text-gray-600 italic"> '코드가 법이다(Code is Law)' 개념 창시자, 디지털 아키텍처가 새로운 형태의 규제로 작용하는 방식 연구</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Gabriel Zucman</span> (UC 버클리 경제학 교수) - 
                      <span className="text-gray-600 italic"> 글로벌 조세 회피와 불평등 전문가, 디지털 경제의 조세 정의 문제 연구</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Julie Cohen</span> (조지타운 로스쿨 교수) - 
                      <span className="text-gray-600 italic"> 정보 자본주의 법적 구조 전문가, 디지털 기술과 사회 변화를 위한 규제 프레임워크 연구</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* 과제 4: 데이터 소유권과 자산 개념 */}
              <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-800 mb-2">과제 4. 데이터 소유권과 자산 개념 <span className="text-xs font-normal text-gray-500">(노가빈)</span></h4>
                <p className="text-sm text-gray-700 mb-2">슈퍼 휴먼이 생산하는 데이터나 다양한 결과물에 대한 소유권은 어떻게 정립되어야 하는가?</p>
                
                <ul className="text-sm space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Viktor Mayer-Schönberger</span> (옥스퍼드 인터넷 연구소 교수) - 
                      <span className="text-gray-600 italic"> 데이터 소유권과 개인정보보호 전문가, 빅데이터가 만드는 새로운 경제 가치와 권력 관계 연구</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Lisa Nakamura</span> (미시간 대학교 디지털 연구 교수) - 
                      <span className="text-gray-600 italic"> 디지털 불평등과 사회정의 전문가, 디지털 자산 접근과 권리의 인종적, 사회적 불평등 연구</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <div>
                      <span className="font-medium">Arun Sundararajan</span> (NYU 경영대학원 교수) - 
                      <span className="text-gray-600 italic"> 공유 경제와 디지털 소유권 전문가, 디지털 플랫폼이 가치 창출과 소유권 개념에 미치는 영향 연구</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="mt-3 text-right text-sm text-gray-600">
          © 2025 태재미래전략연구원 디지털 전환과 사회변혁 팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyPoster;
