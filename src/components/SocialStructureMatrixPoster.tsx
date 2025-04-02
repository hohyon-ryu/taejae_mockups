import React from 'react';

const SocialStructureMatrixPoster = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 - 더 강조된 디자인 */}
        <div className="text-center mb-8 bg-white rounded-xl shadow-lg p-6 border-b-4 border-indigo-600">
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-900 tracking-tight">디지털 전환에 따른 사회 구조의 진화</h1>
          <p className="text-2xl text-indigo-700 font-semibold">시대별 의사결정 변화 매트릭스</p>
          <p className="mt-3 text-lg text-gray-700">기술 발전에 따른 의사결정 방식의 변화와 사회 구조 진화 과정</p>
        </div>

        {/* 매트릭스 테이블 - 시각적으로 더 강조된 디자인 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm shadow-lg bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 w-1/7">층위</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-amber-800 bg-opacity-80 w-1/7">권위 기반 의사결정 시대<br/>(필사본과 구전)</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-emerald-800 bg-opacity-80 w-1/7">전문성 기반 의사결정 시대<br/>(인쇄술과 대중 미디어)</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-blue-800 bg-opacity-80 w-1/7">알고리즘 기반 의사결정 시대<br/>(빅데이터와 초기 AI)</th>
                <th className="p-3 text-left font-bold border-r-2 border-gray-700 bg-purple-800 bg-opacity-80 w-1/7">가치 기반 의사결정 시대<br/>(생성형 AI)</th>
                <th className="p-3 text-left font-bold bg-rose-800 bg-opacity-80 w-1/7">초지능 의사결정 시대<br/>(범용 인공지능)</th>
              </tr>
            </thead>
            <tbody>
              {/* 개인 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">개인</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>권위자(종교지도자, 귀족)에 의존한 지식 접근</p>
                    <p className="text-red-600">→ 문해력 부족과 지식 접근성 제한</p>
                    <p className="text-green-600">→ <strong>활판 인쇄술과 대중 교육 시스템</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>인쇄술 기반 전문가 매개</strong> 정보 습득</p>
                    <p className="text-red-600">→ 정보 과부하와 전문성 장벽</p>
                    <p className="text-green-600">→ <strong>인터넷과 검색 엔진</strong> 개발</p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>인터넷 기반 개인화된</strong> 정보 필터링과 추천</p>
                    <p className="text-red-600">→ 에코챔버와 정보 편향</p>
                    <p className="text-green-600">→ <strong>생성형 AI와 개인 맞춤형 지식 비서</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>생성형 AI 기반 증강된</strong> 인지와 AI 협업</p>
                    <p className="text-red-600">→ AI 의존성과 인지 능력 약화</p>
                    <p className="text-green-600">→ <strong>뇌-컴퓨터 인터페이스</strong>와 하이브리드 사고</p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>인터페이스 기반 네트워크화된</strong> 의식과 초인지</p>
                    <p className="text-red-600">→ 인간 정체성과 자율성 위기</p>
                    <p className="text-green-600">→ <strong>의식 통합 네트워크</strong>와 정체성 보존 기술</p>
                  </div>
                </td>
              </tr>
              
              {/* 가정 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">가정</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>가부장 중심 확대가족</p>
                    <p className="text-red-600">→ 지식 전수의 비효율성, 세대 간 단절</p>
                    <p className="text-green-600">→ <strong>인쇄 매체와 가정 교육 자료</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>인쇄 매체 기반 핵가족화</strong>와 미디어 중심 가정생활</p>
                    <p className="text-red-600">→ 가족 소통 약화와 세대 간 지식 격차</p>
                    <p className="text-green-600">→ <strong>개인 컴퓨터와 인터넷</strong> 보급</p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>인터넷 기반 디지털 연결</strong> 가족과 원격 소통</p>
                    <p className="text-red-600">→ 물리적 유대감 약화와 디지털 피로</p>
                    <p className="text-green-600">→ <strong>실감형 소통 기술과 가상 공유 공간</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>실감형 기술 기반 스마트홈</strong>과 AI 가족 구성원</p>
                    <p className="text-red-600">→ 프라이버시 침해와 가족 역학 변화</p>
                    <p className="text-green-600">→ <strong>감성 인식 AI</strong>와 가족 유대 증진 기술</p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>감성 AI 기반 시공간 초월</strong> 가족 네트워크</p>
                    <p className="text-red-600">→ 실체성 상실과 인간 본질 희석</p>
                    <p className="text-green-600">→ <strong>혼합 현실 기반 유대감</strong> 복원 시스템</p>
                  </div>
                </td>
              </tr>
              
              {/* 이웃/마을 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">이웃/마을</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>물리적 근접성 기반 공동체</p>
                    <p className="text-red-600">→ 제한된 정보 공유와 폐쇄성</p>
                    <p className="text-green-600">→ <strong>우편 시스템과 지역 신문</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>우편과 신문 기반 계층/관심사</strong> 커뮤니티 형성</p>
                    <p className="text-red-600">→ 지역 공동체 약화와 소속감 상실</p>
                    <p className="text-green-600">→ <strong>온라인 포럼과 소셜 미디어</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>소셜 미디어 기반 관심사</strong> 디지털 커뮤니티</p>
                    <p className="text-red-600">→ 실제 이웃과의 단절과 양극화</p>
                    <p className="text-green-600">→ <strong>지역 기반 소셜 플랫폼과 공유 경제 앱</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>지역 소셜 플랫폼 기반 물리-디지털 융합</strong> 커뮤니티</p>
                    <p className="text-red-600">→ 현실과 가상 간 정체성 혼란</p>
                    <p className="text-green-600">→ <strong>몰입형 로컬 네트워크와 증강 현실 커뮤니티</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>증강 현실 기반 다차원</strong> 커뮤니티 네트워크</p>
                    <p className="text-red-600">→ 초연결로 인한 주의력 분산과 소속감 상실</p>
                    <p className="text-green-600">→ <strong>다층적 정체성 통합 관리</strong> 시스템</p>
                  </div>
                </td>
              </tr>
              
              {/* 일터 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">일터</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>도제식 훈련과 세습적 직업</p>
                    <p className="text-red-600">→ 기술 발전 지체와 경직된 직업 구조</p>
                    <p className="text-green-600">→ <strong>직업 전문 학교와 표준화된 훈련</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>표준화된 훈련 기반 산업화된</strong> 일터와 관료제 조직</p>
                    <p className="text-red-600">→ 소외와 창의성 억압, 획일화</p>
                    <p className="text-green-600">→ <strong>디지털 협업 도구와 원격 근무 기술</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>디지털 협업 기반 플랫폼</strong> 일자리와 원격 협업</p>
                    <p className="text-red-600">→ 고용 불안정과 워라밸 붕괴</p>
                    <p className="text-green-600">→ <strong>AI 생산성 도구와 자동화 시스템</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>AI 자동화 기반 협업 중심</strong> 업무 환경</p>
                    <p className="text-red-600">→ AI 대체 불안과 역할 재정의 혼란</p>
                    <p className="text-green-600">→ <strong>창의성 증폭 도구와 직업 재발명 플랫폼</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>창의성 증폭 기반 목적 중심</strong> 프로젝트와 유동적 조직</p>
                    <p className="text-red-600">→ 인간 고유 가치의 재정의 필요성</p>
                    <p className="text-green-600">→ <strong>의미 창출 활동과 인간-AI 공동체</strong></p>
                  </div>
                </td>
              </tr>
              
              {/* 도시 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">도시</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>종교/권력 중심 도시 설계</p>
                    <p className="text-red-600">→ 비효율적 자원 분배와 위생 문제</p>
                    <p className="text-green-600">→ <strong>도시 계획 기술과 공중 보건 시스템</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>체계적 도시계획 기반 산업과 기능 중심</strong> 도시 구조</p>
                    <p className="text-red-600">→ 환경 오염과 사회적 분리</p>
                    <p className="text-green-600">→ <strong>인터넷 인프라와 스마트 시티 기술</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>스마트 시티 기술 기반 센서 네트워크</strong>와 데이터 기반 도시</p>
                    <p className="text-red-600">→ 개인정보 침해와 디지털 격차</p>
                    <p className="text-green-600">→ <strong>AI 도시 관리 시스템과 실시간 최적화</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>AI 관리 기반 지능형 적응 도시</strong>와 디지털 트윈</p>
                    <p className="text-red-600">→ 과도한 시스템 의존성과 취약성</p>
                    <p className="text-green-600">→ <strong>자율 진화형 도시 시스템과 회복탄력성 기술</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>자율 진화 기반 분산형 네트워크</strong> 도시와 메타시티</p>
                    <p className="text-red-600">→ 물리적 실체와 디지털 환경의 경계 붕괴</p>
                    <p className="text-green-600">→ <strong>양자 컴퓨팅 기반 초연결 도시 관리</strong> 시스템</p>
                  </div>
                </td>
              </tr>
              
              {/* 국가 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">국가</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>중앙집권적 왕정/귀족 체제</p>
                    <p className="text-red-600">→ 느린 의사결정과 지방과의 단절</p>
                    <p className="text-green-600">→ <strong>인쇄 매체 기반 국가 행정 시스템</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>인쇄 매체 행정 기반 관료제</strong>와 대의 민주주의</p>
                    <p className="text-red-600">→ 관료주의적 비효율과 시민 참여 제한</p>
                    <p className="text-green-600">→ <strong>디지털 정부 서비스와 온라인 투표 시스템</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>디지털 서비스 기반 데이터 중심</strong> 정책과 전자정부</p>
                    <p className="text-red-600">→ 알고리즘 편향과 감시 국가 우려</p>
                    <p className="text-green-600">→ <strong>AI 정책 분석 도구와 시민 참여 플랫폼</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>AI 정책 분석 기반 분산형 거버넌스</strong>와 직접 참여</p>
                    <p className="text-red-600">→ 민주적 정당성과 책임성 약화</p>
                    <p className="text-green-600">→ <strong>집단지성 의사결정 시스템과 투명성 기술</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>집단지성 시스템 기반 글로컬 거버넌스</strong> 네트워크</p>
                    <p className="text-red-600">→ 국가 주권과 경계의 재정의 필요</p>
                    <p className="text-green-600">→ <strong>초국가적 협력 지원 AI 시스템</strong></p>
                  </div>
                </td>
              </tr>
              
              {/* 글로벌 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">글로벌</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <div className="space-y-2 text-amber-900">
                    <p>분리된 문명권과 제한적 교류</p>
                    <p className="text-red-600">→ 상호 이해 부족과 충돌</p>
                    <p className="text-green-600">→ <strong>항해 기술과 국제 외교 체계</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <div className="space-y-2 text-emerald-900">
                    <p><strong>국제 외교 체계 기반 국제 기구</strong>와 글로벌 미디어</p>
                    <p className="text-red-600">→ 국가 간 불평등과 문화 획일화</p>
                    <p className="text-green-600">→ <strong>인터넷과 실시간 글로벌 통신 기술</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <div className="space-y-2 text-blue-900">
                    <p><strong>글로벌 통신 기반 디지털 세계화</strong>와 글로벌 플랫폼</p>
                    <p className="text-red-600">→ 디지털 식민주의와 문화적 지배</p>
                    <p className="text-green-600">→ <strong>탈중앙화 기술과 글로벌 디지털 공공재</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <div className="space-y-2 text-purple-900">
                    <p><strong>탈중앙화 기술 기반 초국가적 문제 해결</strong> 네트워크</p>
                    <p className="text-red-600">→ 글로벌 거버넌스 결핍과 조정 실패</p>
                    <p className="text-green-600">→ <strong>범지구적 AI 조정 시스템과 협력 플랫폼</strong></p>
                  </div>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <div className="space-y-2 text-rose-900">
                    <p><strong>AI 조정 시스템 기반 행성적 의식</strong> 그리드</p>
                    <p className="text-red-600">→ 인류 집단지성의 한계와 방향성 상실</p>
                    <p className="text-green-600">→ <strong>범용 AI 기반 글로벌 조정 메커니즘</strong></p>
                  </div>
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
