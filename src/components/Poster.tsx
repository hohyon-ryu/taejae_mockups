import React from 'react';

const Poster = () => {
  return (
    <div className="bg-white p-8 w-full">
      <div className="max-w-4xl mx-auto text-gray-800">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">디지털 전환과 사회변혁</h1>
          <p className="text-2xl text-gray-700">디지털 기술은 어떻게 사회를 변화시키고 어떠한 문제들을 만드는가?</p>
          <div className="w-32 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>

        {/* 통합 섹션: 기술과 사회 변화 + 분석 프레임워크 */}
        <div className="mb-6 border-2 border-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b-2 border-gray-200 pb-2">
            기술이 사회를 변화시키는 3단계 메커니즘
          </h2>
          
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="border-r-2 border-gray-200 pr-2">
              <h3 className="text-lg font-bold text-blue-700">강화 (Enhancement)</h3>
              <p className="text-sm">기술이 인간의 인지·정보 처리 능력을 확장하고 의사결정 역량을 증폭</p>
            </div>
            <div className="border-r-2 border-gray-200 pr-2">
              <h3 className="text-lg font-bold text-green-700">연결 (Connection)</h3>
              <p className="text-sm">기술이 인간과 공동체 간 관계를 재구성하고 권력 구조를 변화</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-700">시너지 (Synergy)</h3>
              <p className="text-sm">강화와 연결의 결합이 새로운 가능성을 창출하고 체계적 문제 해결</p>
            </div>
          </div>
        </div>

        {/* DIKW 모델 범례 */}
        <div className="mb-4 border-2 border-gray-200 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h4 className="font-bold text-md mr-2">DIKW 모델:</h4>
              <p className="text-sm">데이터(D) → 정보(I) → 지식(K) → 지혜(W)로 이어지는 의사결정 과정</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 mr-2"></div>
              <span className="text-sm mr-4">기술이 주도</span>
              <div className="w-4 h-4 bg-green-600 mr-2"></div>
              <span className="text-sm">인간이 주도</span>
            </div>
          </div>
        </div>

        {/* 섹션: 의사결정 권력의 다섯 시대 */}
        <div className="space-y-6">
          {/* 1. 권위 기반 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">1. 권위자 시대</h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">강화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 필사본과 구전 중심의 정보 전달</li>
                    <li>• 문자와 기록 체계의 발명</li>
                    <li>• 초기 인쇄술과 제한된 지식 복제</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">연결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 물리적 근접성 기반 공동체</li>
                    <li>• 가부장 중심 확대가족 구조</li>
                    <li>• 신분과 가문에 종속된 정체성</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">시너지</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 문해력 격차와 지식 접근성 제한</li>
                    <li>• 길드 기반 지식 전수 제도화</li>
                    <li>• 공개 낭독회를 통한 정보 공유</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(필사본, 기록)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(번역, 해석)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(교리, 법전)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(판단, 결정)</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600">
                  기술은 거의 활용되지 않고, 인간이 모든 단계를 직접 처리하며 권위자의 경험과 전통에 기반한 의사결정이 이루어짐
                </p>
              </div>
            </div>
          </div>
          
          {/* 2. 정보 기반 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">2. 전문가 시대</h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">강화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 대량 인쇄술과 대중 미디어 발전</li>
                    <li>• 표준화된 교육 체계 확립</li>
                    <li>• 전문가 집단의 지식 생산 주도</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">연결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 관료제와 대의민주주의 발전</li>
                    <li>• 핵가족 중심 구조로 전환</li>
                    <li>• 관심사/계층 기반 커뮤니티 형성</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">시너지</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 교육 접근성과 질적 격차</li>
                    <li>• 공공 지식 인프라 보편화</li>
                    <li>• 다층적 정보 접근 아키텍처 구축</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(통계, 측정)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(분석, 그래프)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(전문서적, 이론)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(정책, 전략)</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600">
                  기술이 데이터 수집을 자동화하고, 인간 전문가들이 정보 분석과 지식 생성, 의사결정을 주도하며 전문성과 경험에 기반함
                </p>
              </div>
            </div>
          </div>
          
          {/* 3. 알고리즘 기반 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">3. 분석가 시대</h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">강화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 빅데이터와 클라우드 컴퓨팅</li>
                    <li>• 인터넷과 월드와이드웹 확산</li>
                    <li>• 머신러닝과 초기 AI 알고리즘</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">연결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 네트워크화된 자아와 디지털 정체성</li>
                    <li>• 디지털 매개 소통과 공동체 형성</li>
                    <li>• 플랫폼 기업의 중개자 권력 강화</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">시너지</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 알고리즘 편향과 자동화된 차별</li>
                    <li>• 디지털 리터러시 격차 심화</li>
                    <li>• 데이터 프라이버시와 주권 문제</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(빅데이터, 센서)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(패턴, 추세)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(모델, 이론)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(의사결정, 전략)</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600">
                  기술이 데이터 수집과 정보 분석을 자동화하고, 인간은 알고리즘이 제시한 추천을 바탕으로 지식을 생성하고 최종 의사결정을 담당함
                </p>
              </div>
            </div>
          </div>
          
          {/* 4. 시너지 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">4. 가치 결정 시대</h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">강화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 생성형 AI와 대규모 언어 모델</li>
                    <li>• 증강/가상현실과 메타버스</li>
                    <li>• 뇌-컴퓨터 인터페이스 기술</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">연결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 시너지적 자아와 확장된 인지</li>
                    <li>• 물리-디지털 융합 공유 공간</li>
                    <li>• 관심사 기반 글로벌 커뮤니티</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">시너지</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 시너지 기술 접근성 격차</li>
                    <li>• 인지 자율성 약화 우려</li>
                    <li>• AI 의존성 증후군 발생</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(IoT, 실시간 감지)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(자동화 분석)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(딥러닝 모델)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(협력적 의사결정)</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600">
                  기술이 데이터부터 지식 생성까지 모든 과정을 자동화하고, 인간은 AI와 협력하여 최종 의사결정을 내리며 가치와 윤리적 판단에 집중함
                </p>
              </div>
            </div>
          </div>
          
          {/* 5. 초지능 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">5. 초지능 시대</h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">강화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 범용 인공초지능(AGI) 실현</li>
                    <li>• 퀀텀 컴퓨팅 기술의 보편화</li>
                    <li>• 자가발전 알고리즘의 자율 진화</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">연결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 네트워크화된 의식과 확장 자아</li>
                    <li>• 의식 스펙트럼 기반 커뮤니티</li>
                    <li>• 행성적 의식 그리드 형성</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">시너지</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 인간 역할의 근본적 재정의</li>
                    <li>• 초지능 결정의 불투명성 문제</li>
                    <li>• 존재론적 정체성 위기</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(양자 감지)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(초병렬 처리)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(범용 AI 모델)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(자율 의사결정)</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-600">
                  초지능 기술이 데이터 수집부터 최종 의사결정까지 전 과정을 자율적으로 처리하며, 인간은 결과를 관찰하고 공존 방식을 모색하는 역할로 전환됨
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 푸터 */}
        <div className="mt-6 pt-4 border-t-2 border-gray-200 text-center text-gray-500">
          <p>© 2025 디지털 전환과 사회변혁 팀</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
