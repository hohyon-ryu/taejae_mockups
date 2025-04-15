import React from 'react';
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
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">디지털 시대의 경제 질서</h1>
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
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">개인</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• AI로 개인의 전문성 강화</li>
                  <li>• AI가 노동을 대체하여 창의적 아이디어가 중요해짐</li>
                  <li>• 정보 과부하와 심리적 스트레스</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">가정</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 스마트홈 센서가 건강과 개인의 잠재력을 어릴 때부터 최대화</li>
                  <li>• AI 가정교사와 메타버스 체험학습으로 맞춤형 교육 일상화</li>
                  <li>• 가상 업무 공간으로 역할 확대하는 방향</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">공동체 및 이웃</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 창의적 가족들이 모여 형성하는 혁신적 커뮤니티</li>
                  <li>• 디지털 역량 공유 및 상호 지원 네트워크 발달</li>
                  <li>• 온-오프라인 융합된 새로운 이웃 관계 형성</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">도시</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 도시별 특화 산업 중심으로 전문화 및 주변 도시와 인프라 공유</li>
                  <li>• 개인의 전문성에 따라 자유롭게 도시 선택 및 이주 활성화</li>
                  <li>• 공중 모빌리티로 교통 체증 없는 3차원 도시 구조 형성</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">국가</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 행정·정책 기능의 전문화된 도시로 분산 및 권한 이양</li>
                  <li>• 국가 간 경계 약화 및 도시 중심 초국가적 협력 증가</li>
                  <li>• 글로벌 문제 해결을 위한 조정자 역할로 국가 기능 재정의</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">글로벌</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 디지털 기술 패권을 둘러싼 강대국 간 경쟁 심화</li>
                  <li>• 디지털 무역 블록화 및 기술 표준 경쟁 가속화</li>
                  <li>• 사이버 안보와 데이터 주권 중심의 국제 질서 재편</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 경제 질서의 기반 변화 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section3Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">2. 경제 질서의 재편</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="overflow-x-auto mb-3">
              <table className="min-w-full bg-white text-xs">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">경제 질서</th>
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">주요 변화</th>
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">연구 질문</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">경제 모델</td>
                    <td className="py-2 px-2 border-r"><span className="font-medium text-green-700">디지털 플랫폼 중심</span>으로 경제 권력 재편, <span className="font-medium text-green-700">데이터 기반 가치 창출</span>로 시장 원리 변화. 전통적 규제 체계의 한계와 새로운 거버넌스 모델 필요성 증가.</td>
                    <td className="py-2 px-2">디지털 플랫폼 경제에서 시장 자율성과 사회적 규제의 균형점은 어디에 있는가?</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">소유권의 변화</td>
                    <td className="py-2 px-2 border-r">소유에서 접근으로 전환, <span className="font-medium text-green-700">디지털 자원의 공유 경제</span> 확산. <span className="font-medium text-green-700">도시 간 인프라 공유 모델</span> 발전으로 공유 경제 확산, 디지털 자산 개념 재정립.</td>
                    <td className="py-2 px-2">디지털 시대의 소유권과 데이터 통제권을 어떻게 재정의하고 공정하게 분배할 것인가?</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">노동 시장</td>
                    <td className="py-2 px-2 border-r"><span className="font-medium text-green-700">AI의 노동 대체와 창의성 중시</span>로 일자리 재편 가속화. <span className="font-medium text-green-700">전문성 기반 도시 형성</span>으로 노동의 이동성 증가, 긱 경제 확산.</td>
                    <td className="py-2 px-2">AI 시대 인간 노동의 가치를 어떻게 정의하고 포용적 사회 안전망을 재설계할 것인가?</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">기업 생태계</td>
                    <td className="py-2 px-2 border-r"><span className="font-medium text-green-700">디지털 전환을 통한 기업 생산성 향상</span>과 <span className="font-medium text-green-700">플랫폼 기업의 권력화</span>로 기업 간 역학 변화. <span className="font-medium text-green-700">기업-정부-고객 관계의 재정립</span>으로 새로운 기업 생태계 형성.</td>
                    <td className="py-2 px-2">플랫폼 기업의 과도한 권력을 견제하면서도 혁신을 촉진하는 균형적 기업 생태계를 어떻게 구축할 것인가?</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">국제 무역</td>
                    <td className="py-2 px-2 border-r"><span className="font-medium text-green-700">디지털 무역 블록화</span>로 무역 규범 정립 중요성 증대. <span className="font-medium text-green-700">글로벌 경제 질서 재편</span>에서 국가 간 협력과 조정 역할 강화.</td>
                    <td className="py-2 px-2">디지털 기술 패권 경쟁 속에서 공정하고 상호 호혜적인 국제 무역 규범을 어떻게 설계하고 구현할 것인가?</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">금융 구조</td>
                    <td className="py-2 px-2 border-r"><span className="font-medium text-green-700">정보 과부하 관리</span> 위한 새 금융 서비스 등장. <span className="font-medium text-green-700">사이버 안보와 데이터 주권</span> 중심 질서가 CBDC, 탈중앙화 금융(DeFi) 발전 촉진.</td>
                    <td className="py-2 px-2">디지털 금융 혁신이 가져올 금융 시스템의 근본적 변화와 이에 대응하는 새로운 금융 안정성 확보 방안은 무엇인가?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 경로 설정: AS-IS, TO-BE, TO-DO 프레임워크 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section5Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">3. 현재 문제점과 미래 방향성</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-red-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">AS-IS (현 문제점)</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 디지털 격차 심화</li>
                  <li>• 플랫폼 독과점 심화</li>
                  <li>• 노동 시장 양극화 및 불안정성 증대</li>
                  <li>• 데이터 거버넌스 공백</li>
                  <li>• 노동-자본-국가 간 기존 합의 붕괴</li>
                  <li>• 규제 지체와 사이버 안보 위협</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">TO-BE (바람직한 미래 경제 질서)</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 포용적 디지털 경제</li>
                  <li>• 경쟁적이고 혁신적인 시장</li>
                  <li>• 인간 중심의 노동 시장</li>
                  <li>• 신뢰할 수 있는 데이터 생태계</li>
                  <li>• 회복력 있고 적응력 있는 거버넌스</li>
                  <li>• 지속 가능한 디지털화</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">TO-DO (연구소의 실천 과제)</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 디지털 격차 해소를 위한 정책 연구 및 제안</li>
                  <li>• 플랫폼 경제의 공정 경쟁 모델 개발</li>
                  <li>• 디지털 시대 노동 안전망 재설계 방안 연구</li>
                  <li>• 글로벌 디지털 경제 거버넌스 프레임워크 구축 연구</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 연구 질문 및 전문가 매핑 */}
        <div className="mb-4 bg-white overflow-hidden">
          <div className="bg-gray-500 text-white p-2 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/90 via-gray-500/85 to-gray-500/80">
                <img src={section4Image} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" style={{maskImage: 'linear-gradient(to right, transparent 20%, black 50%)'}} />
              </div>
            </div>
            <div className="relative z-10 flex justify-between items-center">
              <h2 className="text-lg font-bold">4. 연구 질문 및 전문가 매핑</h2>
            </div>
          </div>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ1: 디지털 자산의 소유권은 어떻게 달라지는가? (담당: 유재연)</h4>
                <div className="mt-1">
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Primavera De Filippi</span> (CNRS, 하버드 버크만클라인센터) - 
                        <span className="text-indigo-600 italic"> 블록체인 기술과 법적 거버넌스 연구, 분산형 디지털 소유권 모델 개발</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Julie E. Cohen</span> (조지타운 법대) - 
                        <span className="text-indigo-600 italic"> 디지털 시대 지적재산권 재정의, 데이터 소유권과 프라이버시 법제화 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">E. Glen Weyl</span> (마이크로소프트/RadicalxChange) - 
                        <span className="text-indigo-600 italic"> 데이터 노동 보상 모델, 디지털 공공재 설계, 협력적 소유권 메커니즘 연구</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ2: 시장주의와 사회주의 사이의 균형점은 어디인가? (담당: 김민호)</h4>
                <div className="mt-1">
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Daron Acemoglu</span> (MIT) - 
                        <span className="text-indigo-600 italic"> 기술 변화와 노동 시장 영향, 디지털 플랫폼 경제의 불평등 효과 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Erik Brynjolfsson</span> (스탠포드 디지털경제연구소) - 
                        <span className="text-indigo-600 italic"> 디지털 경제 생산성 측정, AI와 인간 협력 모델, 플랫폼 비즈니스 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Shoshana Zuboff</span> (하버드대) - 
                        <span className="text-indigo-600 italic"> 감시 자본주의 분석, 디지털 플랫폼의 데이터 추출 및 행동 예측 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Frank Pasquale</span> (브루클린 법대) - 
                        <span className="text-indigo-600 italic"> 알고리즘 투명성, 디지털 플랫폼 규제, 인공지능 거버넌스 연구</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ3: 인간 중심적 일자리 생태계를 어떻게 구축할 것인가? (담당: 노가빈)</h4>
                <div className="mt-1">
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">David Autor</span> (MIT) - 
                        <span className="text-indigo-600 italic"> 기술 변화와 노동 시장 영향, 미래 일자리 구조 변화 예측 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Juliet Schor</span> (보스턴대) - 
                        <span className="text-indigo-600 italic"> 긱 경제와 플랫폼 노동, 대안적 노동 모델, 공유 경제 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Carl Benedikt Frey</span> (옥스포드대) - 
                        <span className="text-indigo-600 italic"> 자동화와 일자리 미래, 기술 변화에 따른 노동 시장 전환 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">Jeremias Adams-Prassl</span> (옥스포드대) - 
                        <span className="text-indigo-600 italic"> 디지털 노동 플랫폼 규제, 미래 노동법, 알고리즘 관리 연구</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ4: 국제적 디지털 경제 질서를 어떻게 구축할 것인가? (담당: 윤준영)</h4>
                <div className="mt-1">
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">RMIT 블록체인 혁신 허브</span> - 
                        <span className="text-indigo-600 italic"> 국제 디지털 무역 표준화, 블록체인 기반 국가 간 데이터 이동 프레임워크 개발</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">버크만 클라인 인터넷 & 사회 센터</span> (하버드) - 
                        <span className="text-indigo-600 italic"> 글로벌 디지털 거버넌스, 국제 사이버법, 디지털 인권 협력 연구</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1">•</span>
                      <div>
                        <span className="font-medium">MIT 디지털경제이니셔티브(IDE)</span> - 
                        <span className="text-indigo-600 italic"> 국제 디지털 경제 측정 표준화, 글로벌 플랫폼 규제 협력 모델 개발</span>
                      </div>
                    </li>
                  </ul>
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
