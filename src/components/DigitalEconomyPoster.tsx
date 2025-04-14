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
                  <li>• 디지털 스트레스 관리를 위한 가족 지원 체계 발달</li>
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
                    <th className="py-2 px-2 text-left font-bold text-gray-800 border-b">핵심 쟁점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold border-r">경제 모델</td>
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
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ1.1: 디지털 소유권의 변화와 재정의 (담당: 유재연)</h4>
                <p className="text-xs text-gray-700 mb-1">디지털 자산, 데이터, AI 생성물에 대한 소유권은 어떻게 재정의되어야 하며, 이것이 경제 시스템에 어떤 영향을 미칠 것인가?</p>
                <div className="mt-1">
                  <h5 className="text-xs font-semibold text-gray-800">세계 최고 전문가:</h5>
                  <ul className="text-xs space-y-0.5 text-gray-700">
                    <li>• <span className="font-medium">Primavera De Filippi</span> (CNRS, 하버드 버크만클라인센터)</li>
                    <li>• <span className="font-medium">Julie E. Cohen</span> (조지타운 법대)</li>
                    <li>• <span className="font-medium">E. Glen Weyl</span> (마이크로소프트/RadicalxChange)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ1.2: 플랫폼 경제와 시장 구조 변화 (담당: 김민호)</h4>
                <p className="text-xs text-gray-700 mb-1">플랫폼 기업의 성장과 디지털 시장 집중화가 경쟁, 혁신, 소비자 후생에 미치는 영향은 무엇이며, 어떤 규제 접근법이 효과적인가?</p>
                <div className="mt-1">
                  <h5 className="text-xs font-semibold text-gray-800">세계 최고 전문가:</h5>
                  <ul className="text-xs space-y-0.5 text-gray-700">
                    <li>• <span className="font-medium">Daron Acemoglu</span> (MIT)</li>
                    <li>• <span className="font-medium">Erik Brynjolfsson</span> (스탠포드 디지털경제연구소)</li>
                    <li>• <span className="font-medium">Shoshana Zuboff</span> (하버드대)</li>
                    <li>• <span className="font-medium">Frank Pasquale</span> (브루클린 법대)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ2.1: 디지털 격차 해소 및 포용적 전환 전략 (담당: 노가빈)</h4>
                <p className="text-xs text-gray-700 mb-1">기술 접근성, 디지털 역량, 경제적 기회의 불평등을 해소하고 모든 사회 구성원이 디지털 전환의 혜택을 누릴 수 있는 정책과 전략은 무엇인가?</p>
                <div className="mt-1">
                  <h5 className="text-xs font-semibold text-gray-800">세계 최고 전문가:</h5>
                  <ul className="text-xs space-y-0.5 text-gray-700">
                    <li>• <span className="font-medium">Daron Acemoglu</span> (MIT)</li>
                    <li>• <span className="font-medium">Laura DeNardis</span> (조지타운대)</li>
                    <li>• <span className="font-medium">Karen Yeung</span> (버밍엄대)</li>
                    <li>• <span className="font-medium">Yochai Benkler</span> (하버드대)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-sm font-bold text-gray-800 mb-1">RQ2.2: 디지털 경제의 국제 질서와 협력 모델 (담당: 윤준영)</h4>
                <p className="text-xs text-gray-700 mb-1">디지털 무역, 국경 간 데이터 이동, 기술 표준화 등 국제적 차원의 디지털 경제 질서를 어떻게 구축하고, 국가 간 협력 모델을 개발할 것인가?</p>
                <div className="mt-1">
                  <h5 className="text-xs font-semibold text-gray-800">세계 최고 전문가:</h5>
                  <ul className="text-xs space-y-0.5 text-gray-700">
                    <li>• <span className="font-medium">RMIT 블록체인 혁신 허브</span></li>
                    <li>• <span className="font-medium">버크만 클라인 인터넷 & 사회 센터</span> (하버드)</li>
                    <li>• <span className="font-medium">MIT 디지털경제이니셔티브(IDE)</span></li>
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
