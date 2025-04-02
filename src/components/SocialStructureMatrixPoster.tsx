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
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>혈연/지연</strong> 기반 정체성</li>
                    <li>구전/필사본 지식 접근</li>
                    <li>종교적/전통적 권위 의존</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>직업/교육</strong> 기반 정체성</li>
                    <li>인쇄물/미디어 간접 접근</li>
                    <li>전문가 의견 의존</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>다중 디지털</strong> 정체성</li>
                    <li>인터넷 직접 접근</li>
                    <li>알고리즘 추천 선택</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>AI 공생</strong> 증강 정체성</li>
                    <li>AI 기반 지식 필터링</li>
                    <li>인간-AI 협업 판단</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>고도화된 인지</strong> 네트워크</li>
                    <li>초연결 지식 시스템</li>
                    <li>AGI 지원 의사결정</li>
                  </ul>
                </td>
              </tr>
              
              {/* 가족 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">가족</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>대가족</strong> 중심 구조</li>
                    <li>생존/생계 최우선</li>
                    <li>생산/교육/돌봄 일체화</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>핵가족</strong> 중심 전환</li>
                    <li>성별 역할 분업</li>
                    <li>가정/일터 분리</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>다양한</strong> 가족 형태</li>
                    <li>디지털 소통, 유연화</li>
                    <li>원격 가족관계</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>생활 커뮤니티</strong> 가족</li>
                    <li>AI 보조 역할 자동화</li>
                    <li>온/오프라인 융합 경험</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>의식적 연결</strong> 기반</li>
                    <li>정서/가치 공유 중심</li>
                    <li>물리적 제약 없는 교감</li>
                  </ul>
                </td>
              </tr>
              
              {/* 이웃/마을 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">이웃/마을</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>자급자족</strong> 공동체</li>
                    <li>강한 상호의존성</li>
                    <li>공동 노동/상호부조</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>도시화</strong>로 약화된 공동체</li>
                    <li>약화된 이웃 관계</li>
                    <li>제한적 사회적 교류</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>온라인</strong> 커뮤니티</li>
                    <li>관심사 기반 연결망</li>
                    <li>약한 유대관계 확장</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>물리-디지털</strong> 혼합 공동체</li>
                    <li>AI 매개 유대 강화</li>
                    <li>협력적 문제해결</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>초연결</strong> 커뮤니티</li>
                    <li>거리 무관 실시간 교감</li>
                    <li>집단 지성 협업</li>
                  </ul>
                </td>
              </tr>
              
              {/* 일터 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">일터</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>장인</strong> 중심 생산</li>
                    <li>수공업과 농업 중심</li>
                    <li>도제제도, 세습적 직업</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>대규모</strong> 공장/사무실</li>
                    <li>산업화된 생산 시스템</li>
                    <li>위계적 고용 관계</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>네트워크형</strong> 조직</li>
                    <li>디지털화, 원격근무</li>
                    <li>프로젝트 중심 계약</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>AI-인간</strong> 협업 생태계</li>
                    <li>AI 보조 창의성</li>
                    <li>역량 중심 협업</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>자율</strong> 조직 시스템</li>
                    <li>인간 독창성 중심</li>
                    <li>가치 중심 협업</li>
                  </ul>
                </td>
              </tr>
              
              {/* 도시 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">도시</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>성벽</strong> 구분 소규모 도시</li>
                    <li>시장/종교/행정 중심지</li>
                    <li>도보 범위 내 구성</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>산업화</strong> 대도시</li>
                    <li>생산/소비/교육 집중</li>
                    <li>대중교통, 직주 분리</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>글로벌</strong> 네트워크 도시</li>
                    <li>정보/서비스 산업</li>
                    <li>디지털 연결성 증가</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>스마트</strong> 시티</li>
                    <li>AI 최적화 시스템</li>
                    <li>혼합현실 공간 경험</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>분산형</strong> 도시 네트워크</li>
                    <li>물리-디지털 융합</li>
                    <li>이동 경계 소멸</li>
                  </ul>
                </td>
              </tr>
              
              {/* 국가 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">국가</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>제국/왕국</strong> 체제</li>
                    <li>왕권/귀족 중심 통치</li>
                    <li>종교적 권위 결합</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>국민국가</strong> 체제</li>
                    <li>관료제, 대의민주주의</li>
                    <li>경제/교육/국방 통합</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>네트워크</strong> 국가</li>
                    <li>데이터 기반 정책</li>
                    <li>디지털 경제/안보</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>분산형</strong> 거버넌스</li>
                    <li>AI 보조 정책 최적화</li>
                    <li>초국가적 문제 중재</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>초국가적</strong> 거버넌스</li>
                    <li>자율 조정 시스템</li>
                    <li>글로벌 이슈 조정 역할</li>
                  </ul>
                </td>
              </tr>
              
              {/* 글로벌 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-bold bg-gray-100 border-r-2 border-gray-300 align-top">글로벌</td>
                <td className="p-3 align-top border-r border-gray-200 bg-amber-50">
                  <ul className="list-disc pl-4 space-y-1 text-amber-900">
                    <li><strong>고립된</strong> 문명권</li>
                    <li>제한적 교역로</li>
                    <li>지역 중심적 세계관</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-emerald-50">
                  <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>국제기구</strong> 체계</li>
                    <li>국제 무역/외교</li>
                    <li>국민국가 기반 질서</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-blue-50">
                  <ul className="list-disc pl-4 space-y-1 text-blue-900">
                    <li><strong>디지털</strong> 글로벌리즘</li>
                    <li>국경없는 정보 흐름</li>
                    <li>글로벌 시민의식</li>
                  </ul>
                </td>
                <td className="p-3 align-top border-r border-gray-200 bg-purple-50">
                  <ul className="list-disc pl-4 space-y-1 text-purple-900">
                    <li><strong>지능형</strong> 글로벌 시스템</li>
                    <li>AI 자원 최적화</li>
                    <li>공동 문제 협력 해결</li>
                  </ul>
                </td>
                <td className="p-3 align-top bg-rose-50">
                  <ul className="list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>글로벌 협력</strong> 네트워크</li>
                    <li>자원의 지능적 배분</li>
                    <li>인류 공동체 의식</li>
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
