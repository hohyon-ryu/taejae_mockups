import React from 'react';

const Poster = () => {
  return (
    <div className="bg-white p-6 w-full">
      <div className="max-w-4xl mx-auto text-gray-800">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">디지털 전환과 사회변혁</h1>
          <p className="text-2xl text-gray-700">디지털 기술은 어떻게 사회를 변화시키고며, 파생된 문제들을 어떻게 해결해야 하는가?</p>
          <div className="w-32 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>


        {/* DIKW 모델 범례 */}
        <div className="mb-3 border-2 border-gray-200 p-2 rounded-lg">
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
        <div className="space-y-3">
          {/* 1. 권위 기반 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">1. 권위 기반 의사 결정의 시대 <span className="text-sm font-normal text-gray-600">(필사본과 구전)</span></h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">의사 결정권의 변화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 필사본과 구전 중심의 정보 전달</li>
                    <li>• 문자와 기록 체계의 발명</li>
                    <li>• 권위자 중심의 의사결정 구조</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">공동체의 재구성</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 물리적 근접성 기반 공동체</li>
                    <li>• 가부장 중심 확대가족 구조</li>
                    <li>• 신분과 가문에 종속된 정체성</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">사회 문제의 발생</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 문해력 격차와 지식 접근성 제한</li>
                    <li>• 권력 집중과 불평등 심화</li>
                    <li>• 정보 독점으로 인한 사회 분열</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-600 pl-2">
                  <h4 className="font-semibold text-yellow-600">시스템적 해결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 계층 간 지식 전수 제도 마련</li>
                    <li>• 공동체 기반 정보 공유 체계</li>
                    <li>• 사회적 합의 기반 의사결정</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-2">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(수기 기록 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(구술 전달 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(문자 체계 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(권위자 결정 체계)</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs mt-1 text-gray-600">
                  기술은 거의 활용되지 않고, 인간이 모든 단계를 직접 처리하며 권위자의 경험과 전통에 기반한 의사결정이 이루어짐
                </p>
              </div>
            </div>
          </div>
          
          {/* 2. 정보 기반 의사결정 시대 */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-2 border-b-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">2. 전문성 기반 의사 결정의 시대 <span className="text-sm font-normal text-gray-600">(인쇄술과 대중 미디어)</span></h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">의사 결정권의 변화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 대량 인쇄술과 대중 미디어 발전</li>
                    <li>• 전문가 집단의 지식 생산 주도</li>
                    <li>• 전문성 기반 의사결정 체계</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">공동체의 재구성</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 관료제와 대의민주주의 발전</li>
                    <li>• 핵가족 중심 구조로 전환</li>
                    <li>• 관심사/계층 기반 커뮤니티 형성</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">사회 문제의 발생</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 교육 접근성과 질적 격차</li>
                    <li>• 전문가 집단의 권력 독점</li>
                    <li>• 정보 불평등과 사회적 분리</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-600 pl-2">
                  <h4 className="font-semibold text-yellow-600">시스템적 해결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 공공 교육 시스템 제도화</li>
                    <li>• 정보 접근성 보장 법제화</li>
                    <li>• 대의민주주의 의사결정 체계</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(기계식 측정 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(아날로그 분석 도구)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(대량 인쇄 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(전문가 협의 체계)</span>
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
              <h3 className="text-xl font-bold text-gray-800">3. 알고리즘 기반 의사 결정의 시대 <span className="text-sm font-normal text-gray-600">(빅데이터와 알고리즘)</span></h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">의사 결정권의 변화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 빅데이터와 클라우드 컴퓨팅</li>
                    <li>• 머신러닝과 초기 AI 알고리즘</li>
                    <li>• 알고리즘 기반 의사결정 확산</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">공동체의 재구성</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 네트워크화된 자아와 디지털 정체성</li>
                    <li>• 디지털 매개 소통과 공동체 형성</li>
                    <li>• 플랫폼 기업의 중개자 권력 강화</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">사회 문제의 발생</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 알고리즘 편향과 자동화된 차별</li>
                    <li>• 디지털 리터러시 격차 심화</li>
                    <li>• 데이터 프라이버시와 주권 문제</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-600 pl-2">
                  <h4 className="font-semibold text-yellow-600">시스템적 해결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 디지털 권리와 데이터 보호법</li>
                    <li>• 알고리즘 투명성 규제 체계</li>
                    <li>• 디지털 리터러시 교육 정책</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(디지털 센서 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(알고리즘 분석 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(컴퓨터 모델링 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(의사결정 지원 시스템)</span>
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
              <h3 className="text-xl font-bold text-gray-800">4. 가치 기반 의사 결정의 시대 <span className="text-sm font-normal text-gray-600">(생성형 AI)</span></h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">의사 결정권의 변화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 생성형 AI와 대규모 언어 모델</li>
                    <li>• 인간-AI 협업 의사결정 체계</li>
                    <li>• 가치 판단 중심의 인간 역할</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">공동체의 재구성</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 확장된 인지와 증강된 자아</li>
                    <li>• 물리-디지털 융합 공유 공간</li>
                    <li>• 관심사 기반 글로벌 커뮤니티</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">사회 문제의 발생</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• AI 기술 접근성 격차</li>
                    <li>• 인지 자율성 약화 우려</li>
                    <li>• AI 의존성 증후군 발생</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-600 pl-2">
                  <h4 className="font-semibold text-yellow-600">시스템적 해결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• AI 윤리 가이드라인 제도화</li>
                    <li>• 디지털 공공재 접근성 보장</li>
                    <li>• 인간-AI 협력 거버넌스 체계</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(IoT 센서 네트워크)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(머신러닝 분석 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(생성형 AI 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-green-600 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(인간-AI 협업 시스템)</span>
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
              <h3 className="text-xl font-bold text-gray-800">5. 초지능 의사 결정의 시대 <span className="text-sm font-normal text-gray-600">(범용 인공지능)</span></h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="border-l-4 border-blue-700 pl-2">
                  <h4 className="font-semibold text-blue-700">의사 결정권의 변화</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 범용 인공초지능(AGI) 실현</li>
                    <li>• 자가발전 알고리즘의 자율 진화</li>
                    <li>• 초지능 주도 의사결정 체계</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-700 pl-2">
                  <h4 className="font-semibold text-green-700">공동체의 재구성</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 네트워크화된 의식과 확장 자아</li>
                    <li>• 의식 스펙트럼 기반 커뮤니티</li>
                    <li>• 행성적 의식 그리드 형성</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-700 pl-2">
                  <h4 className="font-semibold text-purple-700">사회 문제의 발생</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 인간 역할의 근본적 재정의</li>
                    <li>• 초지능 결정의 불투명성 문제</li>
                    <li>• 존재론적 정체성 위기</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-600 pl-2">
                  <h4 className="font-semibold text-yellow-600">시스템적 해결</h4>
                  <ul className="text-xs mt-1 space-y-0.5 ml-2">
                    <li>• 초지능 규제 국제 협약 체계</li>
                    <li>• 인간 존엄성 보장 헌장 수립</li>
                    <li>• 범지구적 의사결정 거버넌스</li>
                  </ul>
                </div>
              </div>
              
              {/* DIKW 바 차트 */}
              <div className="mt-3">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">데이터</span>
                      <span className="text-xs">(양자 컴퓨팅 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">정보</span>
                      <span className="text-xs">(신경망 처리 기술)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지식</span>
                      <span className="text-xs">(자가학습 AI 시스템)</span>
                    </span>
                  </div>
                  <div className="h-12 bg-red-500 rounded relative">
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                      <span className="font-semibold">지혜</span>
                      <span className="text-xs">(AGI 의사결정 시스템)</span>
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
        <div className="mt-3 pt-2 border-t-2 border-gray-200 text-center text-gray-500">
          <p>© 2025 디지털 전환과 사회변혁 팀</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
