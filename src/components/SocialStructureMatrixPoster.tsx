import React from 'react';

const SocialStructureMatrixPoster = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 - 더 강조된 디자인 */}
        <div className="text-center mb-8 bg-white rounded-xl shadow-lg p-6 border-b-4 border-indigo-600">
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-900 tracking-tight">디지털 전환에 따른 사회 구조의 변화</h1>
          <p className="text-2xl text-indigo-700 font-semibold">시대별 공동체 영역 변화 매트릭스</p>
        </div>

        {/* 매트릭스 테이블 - 시각적으로 더 강조된 디자인 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm shadow-lg bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 w-1/7">공동체 영역</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-amber-800 bg-opacity-80 w-1/7">권위 기반 시대<br/>(필사본과 구전)</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-emerald-800 bg-opacity-80 w-1/7">전문성 기반 시대<br/>(인쇄술과 대중 미디어)</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-blue-800 bg-opacity-80 w-1/7">알고리즘 기반 시대<br/>(빅데이터와 알고리즘)</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-purple-800 bg-opacity-80 w-1/7">가치 기반 시대<br/>(생성형 AI)</th>
                <th className="p-3 text-left font-bold bg-rose-800 bg-opacity-80 w-1/7">초지능 시대<br/>(범용 인공지능)</th>
              </tr>
            </thead>
            <tbody>
              {/* 개인 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">개인</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>혈연/지연</strong> 기반 정체성 형성</li>
                    <li className="text-red-600">→ 지식 접근성 제한과 계층화</li>
                    <li className="text-green-600">→ 구전 전통과 필사본 보존 기술</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>직업/교육</strong> 중심 사회적 지위 변화</li>
                    <li className="text-red-600">→ 정보 불평등과 전문지식 장벽</li>
                    <li className="text-green-600">→ 대중 교육과 인쇄 미디어 확산</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>다중 디지털</strong> 정체성 등장</li>
                    <li className="text-red-600">→ 정보 과잉과 진실성 판단 어려움</li>
                    <li className="text-green-600">→ 개인화 알고리즘과 필터링 기술</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>AI 공생</strong> 증강 정체성 형성</li>
                    <li className="text-red-600">→ 인간 주체성과 판단력 약화</li>
                    <li className="text-green-600">→ 인간-AI 협업 의사결정 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>고도화된 인지</strong> 네트워크 확장</li>
                    <li className="text-red-600">→ 인간 고유성과 정체성 위기</li>
                    <li className="text-green-600">→ 인간 중심 AGI 윤리 프레임워크</li>
                  </ul>
                </td>
              </tr>
              
              {/* 가족 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">가족</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>대가족</strong> 중심 사회구조 형성</li>
                    <li className="text-red-600">→ 개인 자율성 제한과 역할 고정</li>
                    <li className="text-green-600">→ 공동체 기반 생존 지식 전수</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>핵가족</strong> 중심 구조로 전환</li>
                    <li className="text-red-600">→ 돌봄 공백과 세대 단절 심화</li>
                    <li className="text-green-600">→ 가전제품과 공교육 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>다양한</strong> 가족 형태 등장</li>
                    <li className="text-red-600">→ 가족 유대감 약화와 고립</li>
                    <li className="text-green-600">→ 디지털 소통 플랫폼과 원격 돌봄</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>생활 커뮤니티</strong> 기반 가족 확장</li>
                    <li className="text-red-600">→ 가족 역할과 경계 모호화</li>
                    <li className="text-green-600">→ AI 보조 돌봄과 가사 자동화</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>의식적 연결</strong> 기반 관계망 형성</li>
                    <li className="text-red-600">→ 전통적 가족 개념 해체</li>
                    <li className="text-green-600">→ 초실감형 원격 교감 기술</li>
                  </ul>
                </td>
              </tr>
              
              {/* 이웃/마을 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">이웃/마을</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>자급자족</strong> 공동체 형성</li>
                    <li className="text-red-600">→ 자원 부족과 생존 불안정</li>
                    <li className="text-green-600">→ 공동 노동과 상호부조 체계</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>도시화</strong>로 인한 공동체 약화</li>
                    <li className="text-red-600">→ 이웃 관계 단절과 소외감</li>
                    <li className="text-green-600">→ 지역 기반 조직과 모임 활성화</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>온라인</strong> 커뮤니티 확산</li>
                    <li className="text-red-600">→ 물리적 공동체 참여 감소</li>
                    <li className="text-green-600">→ 관심사 기반 연결 플랫폼</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>물리-디지털</strong> 혼합 공동체 등장</li>
                    <li className="text-red-600">→ 진정성과 소속감 약화</li>
                    <li className="text-green-600">→ AI 매개 유대 강화 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>초연결</strong> 커뮤니티 형성</li>
                    <li className="text-red-600">→ 정보 과부하와 관계 피로</li>
                    <li className="text-green-600">→ 집단 지성 기반 협업 시스템</li>
                  </ul>
                </td>
              </tr>
              
              {/* 일터 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">일터</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>장인</strong> 중심 생산 체계</li>
                    <li className="text-red-600">→ 생산성 한계와 기술 전수 제한</li>
                    <li className="text-green-600">→ 도제제도와 장인 기술 보존</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>대규모</strong> 산업화 생산 체계</li>
                    <li className="text-red-600">→ 노동 소외와 작업 단순화</li>
                    <li className="text-green-600">→ 표준화된 교육과 관리 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>네트워크형</strong> 조직 구조 확산</li>
                    <li className="text-red-600">→ 고용 불안정과 경계 모호화</li>
                    <li className="text-green-600">→ 디지털 협업과 원격근무 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>AI-인간</strong> 협업 생태계 구축</li>
                    <li className="text-red-600">→ 일자리 대체와 직무 재정의</li>
                    <li className="text-green-600">→ 인간 고유 역량 중심 협업 모델</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>자율</strong> 조직 시스템 발전</li>
                    <li className="text-red-600">→ 인간 노동의 의미와 가치 위기</li>
                    <li className="text-green-600">→ 창의성과 가치 중심 협업 체계</li>
                  </ul>
                </td>
              </tr>
              
              {/* 도시 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">도시</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>성벽</strong> 구분 소규모 도시 발달</li>
                    <li className="text-red-600">→ 공간 제약과 자원 집중 문제</li>
                    <li className="text-green-600">→ 도보 중심 효율적 도시 설계</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>산업화</strong> 대도시 성장</li>
                    <li className="text-red-600">→ 환경오염과 주거 불평등</li>
                    <li className="text-green-600">→ 도시계획과 대중교통 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>글로벌</strong> 네트워크 도시 연결</li>
                    <li className="text-red-600">→ 도시 양극화와 지역 격차</li>
                    <li className="text-green-600">→ 스마트 인프라와 디지털 연결망</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>스마트</strong> 시티 구현</li>
                    <li className="text-red-600">→ 개인정보와 감시 우려</li>
                    <li className="text-green-600">→ AI 기반 도시 최적화 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>분산형</strong> 도시 네트워크 확산</li>
                    <li className="text-red-600">→ 물리적 공간 의미 변화</li>
                    <li className="text-green-600">→ 초연결 혼합현실 도시 시스템</li>
                  </ul>
                </td>
              </tr>
              
              {/* 국가 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">국가</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>제국/왕국</strong> 체제 형성</li>
                    <li className="text-red-600">→ 권력 집중과 시민 참여 제한</li>
                    <li className="text-green-600">→ 종교적 권위와 통치 기술</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>국민국가</strong> 체제 확립</li>
                    <li className="text-red-600">→ 관료제 비효율과 대표성 문제</li>
                    <li className="text-green-600">→ 대의민주주의와 공공 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>네트워크</strong> 국가 체제 전환</li>
                    <li className="text-red-600">→ 디지털 격차와 사이버 위협</li>
                    <li className="text-green-600">→ 데이터 기반 정책과 디지털 안보</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>분산형</strong> 거버넌스 확산</li>
                    <li className="text-red-600">→ 의사결정 복잡성과 책임 소재</li>
                    <li className="text-green-600">→ AI 보조 정책 최적화 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>초국가적</strong> 거버넌스 구축</li>
                    <li className="text-red-600">→ 국가 주권과 정체성 재정의</li>
                    <li className="text-green-600">→ 자율 조정 글로벌 협력 체계</li>
                  </ul>
                </td>
              </tr>
              
              {/* 글로벌 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">글로벌</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="space-y-1 text-amber-900">
                    <li><strong>고립된</strong> 문명권 발전</li>
                    <li className="text-red-600">→ 자원 제약과 문화적 고립</li>
                    <li className="text-green-600">→ 지역 특화 생존 기술 발달</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="space-y-1 text-emerald-900">
                    <li><strong>국제기구</strong> 체계 형성</li>
                    <li className="text-red-600">→ 국가 간 이해관계 충돌</li>
                    <li className="text-green-600">→ 국제 무역과 외교 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="space-y-1 text-blue-900">
                    <li><strong>디지털</strong> 글로벌리즘 확산</li>
                    <li className="text-red-600">→ 문화 획일화와 디지털 격차</li>
                    <li className="text-green-600">→ 국경없는 정보 공유 플랫폼</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="space-y-1 text-purple-900">
                    <li><strong>지능형</strong> 글로벌 시스템 구축</li>
                    <li className="text-red-600">→ 글로벌 자원 분배 불균형</li>
                    <li className="text-green-600">→ AI 기반 자원 최적화 시스템</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="space-y-1 text-rose-900">
                    <li><strong>글로벌 협력</strong> 네트워크 형성</li>
                    <li className="text-red-600">→ 인류 공동 생존 위기</li>
                    <li className="text-green-600">→ 초지능 기반 글로벌 협력 체계</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* 푸터 */}
        <div className="mt-6 text-right text-sm text-gray-600">
          © 2025 태재미래전략연구원 디지털 전환과 사회변혁 팀
        </div>
      </div>
    </div>
  );
};

export default SocialStructureMatrixPoster;
