import React from 'react';
import section2Image from '../assets/images/posters/digital_economy/section2.png';
import section3Image from '../assets/images/posters/digital_economy/section3.png';
import section5Image from '../assets/images/posters/digital_economy/section5.png';

const DigitalEconomyPoster: React.FC = () => {
  return (
    <div className="bg-white p-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">연결점 탐색: 디지털 시대의 사회 변화와 진화하는 경제 질서</h1>
          <div className="bg-gray-100 p-3 rounded-lg inline-block">
            <p className="text-lg text-gray-800 italic font-medium">
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
                  <li>• 초연결성과 알고리즘 기반 맞춤형 서비스</li>
                  <li>• 데이터화와 디지털 감시의 확산</li>
                  <li>• 정보 과부하와 심리적 스트레스</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">가족 구조</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 원격 소통을 통한 유대감 유지</li>
                  <li>• 온라인 교육, 디지털 육아 보조 도구</li>
                  <li>• 가족 내 디지털 격차로 인한 갈등</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">공동체 및 이웃</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 지리적 근접성을 넘어선 공동체 개념 확장</li>
                  <li>• 지역 기반 디지털 플랫폼 활성화</li>
                  <li>• 연결성 강화와 동시에 파편화 위험</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">도시 공간 (스마트 시티)</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• IoT, AI, 빅데이터 활용한 자원 효율화</li>
                  <li>• 과도한 감시 사회, 디지털 소외 계층 배제 위험</li>
                  <li>• 원격 근무 확산으로 도시 구조 변화</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">국가</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 디지털 산업 육성 정책, 전자정부 도입</li>
                  <li>• 정보 확산과 가짜뉴스 문제</li>
                  <li>• 기술 발전 속도에 맞춘 법/제도 정비 과제</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-green-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">글로벌</h4>
                <ul className="text-xs space-y-0.5 text-gray-700">
                  <li>• 글로벌 상호 연결성 심화</li>
                  <li>• 기술 패권 경쟁, 사이버 안보 위협</li>
                  <li>• 디지털 무역 분쟁과 국제 협력 필요성</li>
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
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">경제 요소</th>
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">주요 변화</th>
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">핵심 쟁점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">시장 원리 vs. 사회적/권위적 통제</td>
                    <td className="py-2 px-2 border-r">긱 경제, 데이터 시장 등에서 극단적 시장화 vs. 플랫폼 기업의 독과점 방지, 데이터 프라이버시 보호 등 규제 필요성</td>
                    <td className="py-2 px-2">'시장주의'와 '사회(권위)주의' 사이의 이상적 균형점 모색</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">무역 및 거래 방식</td>
                    <td className="py-2 px-2 border-r">디지털 재화/서비스 부상, 프로슈머리즘 확산, 거래 비용 감소와 시장 효율성 증대</td>
                    <td className="py-2 px-2">무형 자산 가치 평가, 과세, 국경 간 거래 규제의 어려움</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">소유권의 변화</td>
                    <td className="py-2 px-2 border-r">소유에서 접근으로의 전환, 공유 경제 확산, 디지털 자산의 등장</td>
                    <td className="py-2 px-2">디지털 재화의 소유권 정의, 지적재산권 보호, 데이터 소유권 문제</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">노동 시장</td>
                    <td className="py-2 px-2 border-r">AI와 자동화의 일자리 대체/창출/증강, 활동 가치의 변화, 긱 경제와 불안정 노동 확산</td>
                    <td className="py-2 px-2">노동자 권리 보장, 사회 안전망 재설계 필요성</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">기업 생태계</td>
                    <td className="py-2 px-2 border-r">자본 흐름 변화, 플랫폼 지배력과 중소기업 관계 변화, 생태계 중심 경쟁으로 전환</td>
                    <td className="py-2 px-2">데이터 접근성, 알고리즘 편향성, 불공정 거래 관행 문제</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">국제 무역</td>
                    <td className="py-2 px-2 border-r">디지털 무역 규범 정립 중요성 증대, 글로벌 가치 사슬(GVC) 재편</td>
                    <td className="py-2 px-2">국경 간 데이터 이동, 디지털 서비스 무역, 온라인 지식재산권 보호</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">금융 구조</td>
                    <td className="py-2 px-2 border-r">지급 결제 시스템 변화, CBDC 도입 논의, 탈중앙화 금융(DeFi) 등장, 통화 정책 영향</td>
                    <td className="py-2 px-2">금융 안정성, 금융 포용성, 프라이버시 문제</td>
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
                  <li>• 기존 사회 계약의 약화</li>
                  <li>• 사이버 안보 위협 및 정보 신뢰성 저하</li>
                  <li>• 규제 지체 (Regulatory Lag)</li>
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

        {/* 푸터 */}
        <div className="mt-3 text-right text-base text-gray-600">
          © 2025 태재미래전략연구원 디지털 전환과 사회변혁 팀
        </div>
      </div>
    </div>
  );
};

export default DigitalEconomyPoster;
