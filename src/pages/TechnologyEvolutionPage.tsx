import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Define the eras
const eras = [
  {
    id: 1,
    title: "경험 기반 의사 결정의 시대",
    period: "~3000 BCE - 1450 CE",
    description: "필사본과 구전, 권위자 중심",
    color: "amber",
    bgColor: "from-amber-50 to-amber-100"
  },
  {
    id: 2,
    title: "데이터 기반 의사 결정의 시대",
    period: "1450 - 1990",
    description: "인쇄술과 대중 미디어, 전문가 중심",
    color: "emerald",
    bgColor: "from-emerald-50 to-emerald-100"
  },
  {
    id: 3,
    title: "정보 기반 의사 결정의 시대",
    period: "1990 - 2020",
    description: "인터넷, 빅데이터, 알고리즘, 시민 참여 확대",
    color: "blue",
    bgColor: "from-blue-50 to-blue-100"
  },
  {
    id: 4,
    title: "지식 기반 의사 결정의 시대",
    period: "2020 - 현재",
    description: "생성형 AI, AI로 인해 전문성이 높아진 시민 주도",
    color: "purple",
    bgColor: "from-purple-50 to-purple-100"
  },
  {
    id: 5,
    title: "지혜 기반 의사 결정의 시대",
    period: "2030 이후 예상",
    description: "범용 인공지능, AI Agent가 주도하는 준직접민주주의",
    color: "rose",
    bgColor: "from-rose-50 to-rose-100"
  }
];

// Define the social dimensions
const dimensions = [
  { id: "individual", label: "개인", icon: "👤" },
  { id: "family", label: "가정", icon: "👪" },
  { id: "neighborhood", label: "이웃/마을", icon: "🏘️" },
  { id: "workplace", label: "일터", icon: "🏢" },
  { id: "city", label: "도시", icon: "🌆" },
  { id: "nation", label: "국가", icon: "🏛️" },
  { id: "global", label: "글로벌", icon: "🌐" }
];

// Content data for each era and dimension
const contentData = {
  1: {
    individual: {
      technology: "권위자(종교지도자, 귀족)에 의존한 지식 접근",
      problems: "문해력 부족과 지식 접근성 제한",
      solutions: "활판 인쇄술과 대중 교육 시스템",
      dikw: {
        data: { label: "데이터", tech: "수기 기록 기술", isHuman: true },
        info: { label: "정보", tech: "구술 전달 기술", isHuman: true },
        knowledge: { label: "지식", tech: "문자 체계 기술", isHuman: true },
        wisdom: { label: "지혜", tech: "권위자 결정 체계", isHuman: true }
      }
    },
    family: {
      technology: "가부장 중심 확대가족",
      problems: "지식 전수의 비효율성, 세대 간 단절",
      solutions: "인쇄 매체와 가정 교육 자료",
      dikw: {
        data: { label: "데이터", tech: "구전 전통", isHuman: true },
        info: { label: "정보", tech: "가족 내 전승", isHuman: true },
        knowledge: { label: "지식", tech: "가문 지식 체계", isHuman: true },
        wisdom: { label: "지혜", tech: "가장 중심 결정", isHuman: true }
      }
    },
    neighborhood: {
      technology: "물리적 근접성 기반 공동체",
      problems: "제한된 정보 공유와 폐쇄성",
      solutions: "우편 시스템과 지역 신문",
      dikw: {
        data: { label: "데이터", tech: "공동체 기록", isHuman: true },
        info: { label: "정보", tech: "마을 회의", isHuman: true },
        knowledge: { label: "지식", tech: "장로 지식 체계", isHuman: true },
        wisdom: { label: "지혜", tech: "공동체 의사결정", isHuman: true }
      }
    },
    workplace: {
      technology: "도제식 훈련과 세습적 직업",
      problems: "기술 발전 지체와 경직된 직업 구조",
      solutions: "직업 전문 학교와 표준화된 훈련",
      dikw: {
        data: { label: "데이터", tech: "도제 관찰", isHuman: true },
        info: { label: "정보", tech: "기술 전수", isHuman: true },
        knowledge: { label: "지식", tech: "장인 지식", isHuman: true },
        wisdom: { label: "지혜", tech: "장인 판단", isHuman: true }
      }
    },
    city: {
      technology: "종교/권력 중심 도시 설계",
      problems: "비효율적 자원 분배와 위생 문제",
      solutions: "도시 계획 기술과 공중 보건 시스템",
      dikw: {
        data: { label: "데이터", tech: "도시 기록", isHuman: true },
        info: { label: "정보", tech: "도시 공지", isHuman: true },
        knowledge: { label: "지식", tech: "도시 계획", isHuman: true },
        wisdom: { label: "지혜", tech: "통치자 결정", isHuman: true }
      }
    },
    nation: {
      technology: "중앙집권적 왕정/귀족 체제",
      problems: "느린 의사결정과 지방과의 단절",
      solutions: "인쇄 매체 기반 국가 행정 시스템",
      dikw: {
        data: { label: "데이터", tech: "왕실 기록", isHuman: true },
        info: { label: "정보", tech: "사신 전달", isHuman: true },
        knowledge: { label: "지식", tech: "왕실 도서관", isHuman: true },
        wisdom: { label: "지혜", tech: "왕권 결정", isHuman: true }
      }
    },
    global: {
      technology: "분리된 문명권과 제한적 교류",
      problems: "상호 이해 부족과 충돌",
      solutions: "항해 기술과 국제 외교 체계",
      dikw: {
        data: { label: "데이터", tech: "탐험가 기록", isHuman: true },
        info: { label: "정보", tech: "외교 사절", isHuman: true },
        knowledge: { label: "지식", tech: "문명 교류", isHuman: true },
        wisdom: { label: "지혜", tech: "제국 결정", isHuman: true }
      }
    }
  },
  2: {
    individual: {
      technology: "인쇄술 기반 전문가 매개 정보 습득",
      problems: "정보 과부하와 전문성 장벽",
      solutions: "인터넷과 검색 엔진 개발",
      dikw: {
        data: { label: "데이터", tech: "기계식 측정 기술", isHuman: false },
        info: { label: "정보", tech: "아날로그 분석 도구", isHuman: true },
        knowledge: { label: "지식", tech: "대량 인쇄 기술", isHuman: true },
        wisdom: { label: "지혜", tech: "관료제 의사결정 체계", isHuman: true }
      }
    },
    family: {
      technology: "인쇄 매체 기반 핵가족화와 미디어 중심 가정생활",
      problems: "가족 소통 약화와 세대 간 지식 격차",
      solutions: "개인 컴퓨터와 인터넷 보급",
      dikw: {
        data: { label: "데이터", tech: "가정 기록", isHuman: false },
        info: { label: "정보", tech: "대중 매체", isHuman: true },
        knowledge: { label: "지식", tech: "학교 교육", isHuman: true },
        wisdom: { label: "지혜", tech: "가족 회의", isHuman: true }
      }
    },
    neighborhood: {
      technology: "우편과 신문 기반 계층/관심사 커뮤니티 형성",
      problems: "지역 공동체 약화와 소속감 상실",
      solutions: "온라인 포럼과 소셜 미디어",
      dikw: {
        data: { label: "데이터", tech: "지역 통계", isHuman: false },
        info: { label: "정보", tech: "지역 신문", isHuman: true },
        knowledge: { label: "지식", tech: "지역 도서관", isHuman: true },
        wisdom: { label: "지혜", tech: "지역 위원회", isHuman: true }
      }
    },
    workplace: {
      technology: "표준화된 훈련 기반 산업화된 일터와 관료제 조직",
      problems: "소외와 창의성 억압, 획일화",
      solutions: "디지털 협업 도구와 원격 근무 기술",
      dikw: {
        data: { label: "데이터", tech: "산업 측정", isHuman: false },
        info: { label: "정보", tech: "업무 보고서", isHuman: true },
        knowledge: { label: "지식", tech: "업무 매뉴얼", isHuman: true },
        wisdom: { label: "지혜", tech: "관리자 결정", isHuman: true }
      }
    },
    city: {
      technology: "체계적 도시계획 기반 산업과 기능 중심 도시 구조",
      problems: "환경 오염과 사회적 분리",
      solutions: "인터넷 인프라와 스마트 시티 기술",
      dikw: {
        data: { label: "데이터", tech: "도시 통계", isHuman: false },
        info: { label: "정보", tech: "도시 계획", isHuman: true },
        knowledge: { label: "지식", tech: "도시 연구", isHuman: true },
        wisdom: { label: "지혜", tech: "도시 행정", isHuman: true }
      }
    },
    nation: {
      technology: "인쇄 매체 행정 기반 관료제와 대의 민주주의",
      problems: "관료주의적 비효율과 시민 참여 제한",
      solutions: "디지털 정부 서비스와 온라인 투표 시스템",
      dikw: {
        data: { label: "데이터", tech: "국가 통계", isHuman: false },
        info: { label: "정보", tech: "정부 보고서", isHuman: true },
        knowledge: { label: "지식", tech: "국가 아카이브", isHuman: true },
        wisdom: { label: "지혜", tech: "의회 결정", isHuman: true }
      }
    },
    global: {
      technology: "국제 외교 체계 기반 국제 기구와 글로벌 미디어",
      problems: "국가 간 불평등과 문화 획일화",
      solutions: "인터넷과 실시간 글로벌 통신 기술",
      dikw: {
        data: { label: "데이터", tech: "국제 통계", isHuman: false },
        info: { label: "정보", tech: "국제 보도", isHuman: true },
        knowledge: { label: "지식", tech: "국제 연구", isHuman: true },
        wisdom: { label: "지혜", tech: "국제기구 결정", isHuman: true }
      }
    }
  },
  3: {
    individual: {
      technology: "인터넷 기반 개인화된 정보 필터링과 추천",
      problems: "에코챔버와 정보 편향",
      solutions: "생성형 AI와 개인 맞춤형 지식 비서",
      dikw: {
        data: { label: "데이터", tech: "디지털 센서 기술", isHuman: false },
        info: { label: "정보", tech: "알고리즘 분석 기술", isHuman: false },
        knowledge: { label: "지식", tech: "컴퓨터 모델링 기술", isHuman: true },
        wisdom: { label: "지혜", tech: "의사결정 지원 시스템", isHuman: true }
      }
    },
    family: {
      technology: "인터넷 기반 디지털 연결 가족과 원격 소통",
      problems: "물리적 유대감 약화와 디지털 피로",
      solutions: "실감형 소통 기술과 가상 공유 공간",
      dikw: {
        data: { label: "데이터", tech: "디지털 기록", isHuman: false },
        info: { label: "정보", tech: "소셜 미디어", isHuman: false },
        knowledge: { label: "지식", tech: "온라인 교육", isHuman: true },
        wisdom: { label: "지혜", tech: "디지털 소통", isHuman: true }
      }
    },
    neighborhood: {
      technology: "소셜 미디어 기반 관심사 디지털 커뮤니티",
      problems: "실제 이웃과의 단절과 양극화",
      solutions: "지역 기반 소셜 플랫폼과 공유 경제 앱",
      dikw: {
        data: { label: "데이터", tech: "지역 센서", isHuman: false },
        info: { label: "정보", tech: "지역 앱", isHuman: false },
        knowledge: { label: "지식", tech: "온라인 포럼", isHuman: true },
        wisdom: { label: "지혜", tech: "커뮤니티 플랫폼", isHuman: true }
      }
    },
    workplace: {
      technology: "디지털 협업 기반 플랫폼 일자리와 원격 협업",
      problems: "고용 불안정과 워라밸 붕괴",
      solutions: "AI 생산성 도구와 자동화 시스템",
      dikw: {
        data: { label: "데이터", tech: "업무 추적", isHuman: false },
        info: { label: "정보", tech: "데이터 분석", isHuman: false },
        knowledge: { label: "지식", tech: "지식 관리", isHuman: true },
        wisdom: { label: "지혜", tech: "협업 결정", isHuman: true }
      }
    },
    city: {
      technology: "스마트 시티 기술 기반 센서 네트워크와 데이터 기반 도시",
      problems: "개인정보 침해와 디지털 격차",
      solutions: "AI 도시 관리 시스템과 실시간 최적화",
      dikw: {
        data: { label: "데이터", tech: "IoT 센서", isHuman: false },
        info: { label: "정보", tech: "빅데이터 분석", isHuman: false },
        knowledge: { label: "지식", tech: "도시 모델링", isHuman: true },
        wisdom: { label: "지혜", tech: "데이터 기반 정책", isHuman: true }
      }
    },
    nation: {
      technology: "디지털 서비스 기반 데이터 중심 정책과 전자정부",
      problems: "알고리즘 편향과 감시 국가 우려",
      solutions: "AI 정책 분석 도구와 시민 참여 플랫폼",
      dikw: {
        data: { label: "데이터", tech: "국가 데이터베이스", isHuman: false },
        info: { label: "정보", tech: "정부 알고리즘", isHuman: false },
        knowledge: { label: "지식", tech: "정책 모델링", isHuman: true },
        wisdom: { label: "지혜", tech: "데이터 기반 거버넌스", isHuman: true }
      }
    },
    global: {
      technology: "글로벌 통신 기반 디지털 세계화와 글로벌 플랫폼",
      problems: "디지털 식민주의와 문화적 지배",
      solutions: "탈중앙화 기술과 글로벌 디지털 공공재",
      dikw: {
        data: { label: "데이터", tech: "글로벌 센서 네트워크", isHuman: false },
        info: { label: "정보", tech: "국제 알고리즘", isHuman: false },
        knowledge: { label: "지식", tech: "글로벌 지식 베이스", isHuman: true },
        wisdom: { label: "지혜", tech: "국제 협력 체계", isHuman: true }
      }
    }
  },
  4: {
    individual: {
      technology: "생성형 AI 기반 증강된 인지와 AI 협업",
      problems: "AI 의존성과 인지 능력 약화",
      solutions: "뇌-컴퓨터 인터페이스와 하이브리드 사고",
      dikw: {
        data: { label: "데이터", tech: "IoT 센서 네트워크", isHuman: false },
        info: { label: "정보", tech: "머신러닝 분석 기술", isHuman: false },
        knowledge: { label: "지식", tech: "생성형 AI 기술", isHuman: false },
        wisdom: { label: "지혜", tech: "인간-AI 협업 시스템", isHuman: true }
      }
    },
    family: {
      technology: "실감형 기술 기반 스마트홈과 AI 가족 구성원",
      problems: "프라이버시 침해와 가족 역학 변화",
      solutions: "감성 인식 AI와 가족 유대 증진 기술",
      dikw: {
        data: { label: "데이터", tech: "가정 센서", isHuman: false },
        info: { label: "정보", tech: "AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "AI 어시스턴트", isHuman: false },
        wisdom: { label: "지혜", tech: "가족-AI 협업", isHuman: true }
      }
    },
    neighborhood: {
      technology: "지역 소셜 플랫폼 기반 물리-디지털 융합 커뮤니티",
      problems: "현실과 가상 간 정체성 혼란",
      solutions: "몰입형 로컬 네트워크와 증강 현실 커뮤니티",
      dikw: {
        data: { label: "데이터", tech: "지역 IoT", isHuman: false },
        info: { label: "정보", tech: "지역 AI", isHuman: false },
        knowledge: { label: "지식", tech: "지역 디지털 트윈", isHuman: false },
        wisdom: { label: "지혜", tech: "커뮤니티-AI 협업", isHuman: true }
      }
    },
    workplace: {
      technology: "AI 자동화 기반 협업 중심 업무 환경",
      problems: "AI 대체 불안과 역할 재정의 혼란",
      solutions: "창의성 증폭 도구와 직업 재발명 플랫폼",
      dikw: {
        data: { label: "데이터", tech: "업무 센서", isHuman: false },
        info: { label: "정보", tech: "업무 AI", isHuman: false },
        knowledge: { label: "지식", tech: "AI 코파일럿", isHuman: false },
        wisdom: { label: "지혜", tech: "인간-AI 협업", isHuman: true }
      }
    },
    city: {
      technology: "AI 관리 기반 지능형 적응 도시와 디지털 트윈",
      problems: "과도한 시스템 의존성과 취약성",
      solutions: "자율 진화형 도시 시스템과 회복탄력성 기술",
      dikw: {
        data: { label: "데이터", tech: "도시 센서망", isHuman: false },
        info: { label: "정보", tech: "도시 AI", isHuman: false },
        knowledge: { label: "지식", tech: "도시 디지털 트윈", isHuman: false },
        wisdom: { label: "지혜", tech: "인간-AI 도시 관리", isHuman: true }
      }
    },
    nation: {
      technology: "AI 정책 분석 기반 분산형 거버넌스와 직접 참여",
      problems: "민주적 정당성과 책임성 약화",
      solutions: "집단지성 의사결정 시스템과 투명성 기술",
      dikw: {
        data: { label: "데이터", tech: "국가 센서망", isHuman: false },
        info: { label: "정보", tech: "정책 AI", isHuman: false },
        knowledge: { label: "지식", tech: "거버넌스 AI", isHuman: false },
        wisdom: { label: "지혜", tech: "인간-AI 거버넌스", isHuman: true }
      }
    },
    global: {
      technology: "탈중앙화 기술 기반 초국가적 문제 해결 네트워크",
      problems: "글로벌 거버넌스 결핍과 조정 실패",
      solutions: "범지구적 AI 조정 시스템과 협력 플랫폼",
      dikw: {
        data: { label: "데이터", tech: "글로벌 센서망", isHuman: false },
        info: { label: "정보", tech: "글로벌 AI", isHuman: false },
        knowledge: { label: "지식", tech: "글로벌 지식 AI", isHuman: false },
        wisdom: { label: "지혜", tech: "인간-AI 글로벌 협력", isHuman: true }
      }
    }
  },
  5: {
    individual: {
      technology: "인터페이스 기반 네트워크화된 의식과 초인지",
      problems: "인간 정체성과 자율성 위기",
      solutions: "의식 통합 네트워크와 정체성 보존 기술",
      dikw: {
        data: { label: "데이터", tech: "양자 컴퓨팅 기술", isHuman: false },
        info: { label: "정보", tech: "신경망 처리 기술", isHuman: false },
        knowledge: { label: "지식", tech: "자가학습 AI 시스템", isHuman: false },
        wisdom: { label: "지혜", tech: "AGI 의사결정 시스템", isHuman: false }
      }
    },
    family: {
      technology: "감성 AI 기반 시공간 초월 가족 네트워크",
      problems: "실체성 상실과 인간 본질 희석",
      solutions: "혼합 현실 기반 유대감 복원 시스템",
      dikw: {
        data: { label: "데이터", tech: "가족 양자 센서", isHuman: false },
        info: { label: "정보", tech: "가족 AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "가족 AGI", isHuman: false },
        wisdom: { label: "지혜", tech: "가족 AGI 결정", isHuman: false }
      }
    },
    neighborhood: {
      technology: "증강 현실 기반 다차원 커뮤니티 네트워크",
      problems: "초연결로 인한 주의력 분산과 소속감 상실",
      solutions: "다층적 정체성 통합 관리 시스템",
      dikw: {
        data: { label: "데이터", tech: "커뮤니티 양자 센서", isHuman: false },
        info: { label: "정보", tech: "커뮤니티 AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "커뮤니티 AGI", isHuman: false },
        wisdom: { label: "지혜", tech: "커뮤니티 AGI 결정", isHuman: false }
      }
    },
    workplace: {
      technology: "창의성 증폭 기반 목적 중심 프로젝트와 유동적 조직",
      problems: "인간 고유 가치의 재정의 필요성",
      solutions: "의미 창출 활동과 인간-AI 공동체",
      dikw: {
        data: { label: "데이터", tech: "업무 양자 센서", isHuman: false },
        info: { label: "정보", tech: "업무 AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "업무 AGI", isHuman: false },
        wisdom: { label: "지혜", tech: "업무 AGI 결정", isHuman: false }
      }
    },
    city: {
      technology: "자율 진화 기반 분산형 네트워크 도시와 메타시티",
      problems: "물리적 실체와 디지털 환경의 경계 붕괴",
      solutions: "양자 컴퓨팅 기반 초연결 도시 관리 시스템",
      dikw: {
        data: { label: "데이터", tech: "도시 양자 센서", isHuman: false },
        info: { label: "정보", tech: "도시 AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "도시 AGI", isHuman: false },
        wisdom: { label: "지혜", tech: "도시 AGI 결정", isHuman: false }
      }
    },
    nation: {
      technology: "집단지성 시스템 기반 글로컬 거버넌스 네트워크",
      problems: "국가 주권과 경계의 재정의 필요",
      solutions: "초국가적 협력 지원 AI 시스템",
      dikw: {
        data: { label: "데이터", tech: "국가 양자 센서", isHuman: false },
        info: { label: "정보", tech: "국가 AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "국가 AGI", isHuman: false },
        wisdom: { label: "지혜", tech: "국가 AGI 결정", isHuman: false }
      }
    },
    global: {
      technology: "AI 조정 시스템 기반 행성적 의식 그리드",
      problems: "인류 집단지성의 한계와 방향성 상실",
      solutions: "범용 AI 기반 글로벌 조정 메커니즘",
      dikw: {
        data: { label: "데이터", tech: "글로벌 양자 센서", isHuman: false },
        info: { label: "정보", tech: "글로벌 AI 분석", isHuman: false },
        knowledge: { label: "지식", tech: "글로벌 AGI", isHuman: false },
        wisdom: { label: "지혜", tech: "글로벌 AGI 결정", isHuman: false }
      }
    }
  }
};

const TechnologyEvolutionPage: React.FC = () => {
  const [currentEra, setCurrentEra] = useState<number>(1);
  const [currentDimension, setCurrentDimension] = useState<string>("individual");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // SEO setup
  useEffect(() => {
    document.title = "기술 진화와 사회 변혁 - 태재미래전략연구원";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '기술의 발전이 사회를 어떻게 변화시켰는지, 어떤 문제가 발생했고 어떻게 해결했는지 보여주는 인터랙티브 타임라인');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = '기술의 발전이 사회를 어떻게 변화시켰는지, 어떤 문제가 발생했고 어떻게 해결했는지 보여주는 인터랙티브 타임라인';
      document.head.appendChild(newMeta);
    }
  }, []);

  // Handle era change with animation
  const changeEra = (eraId: number) => {
    if (eraId === currentEra || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentEra(eraId);
      setIsTransitioning(false);
    }, 500);
  };

  // Get color classes based on current era
  const getEraColorClasses = () => {
    const era = eras.find(e => e.id === currentEra);
    return {
      primary: `text-${era?.color}-800`,
      secondary: `text-${era?.color}-600`,
      border: `border-${era?.color}-500`,
      bg: `bg-${era?.color}-500`,
      bgLight: `bg-${era?.color}-100`,
      bgGradient: `bg-gradient-to-br ${era?.bgColor}`,
    };
  };

  // Get current content based on era and dimension
  const getCurrentContent = () => {
    return contentData[currentEra as keyof typeof contentData]?.[currentDimension as keyof (typeof contentData)[1]];
  };

  const colors = getEraColorClasses();
  const content = getCurrentContent();

  return (
    <div className={`min-h-screen ${colors.bgGradient} transition-colors duration-1000 overflow-hidden`}>
      {/* Header */}
      <header className="pt-6 pb-4 px-4 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${colors.primary} transition-colors duration-700`}>
          기술 진화와 사회 변혁
        </h1>
        <p className={`text-xl md:text-2xl ${colors.secondary} transition-colors duration-700`}>
          기술은 어떻게 사회를 변화시키고, 문제를 해결해 왔는가?
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20">
        {/* Era Timeline */}
        <div 
          ref={timelineRef}
          className="relative mb-8 mt-4 py-4 overflow-x-auto hide-scrollbar"
        >
          <div className="flex space-x-2 md:space-x-4 min-w-max px-4">
            {eras.map(era => (
              <button
                key={era.id}
                onClick={() => changeEra(era.id)}
                className={`px-4 py-3 rounded-lg transition-all duration-500 ${
                  currentEra === era.id 
                    ? `bg-${era.color}-100 border-2 border-${era.color}-500 shadow-lg scale-105` 
                    : 'bg-white/80 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <h3 className={`font-bold ${currentEra === era.id ? `text-${era.color}-800` : 'text-gray-700'}`}>
                  {era.title}
                </h3>
                <p className={`text-sm ${currentEra === era.id ? `text-${era.color}-600` : 'text-gray-500'}`}>
                  {era.period}
                </p>
                <p className="text-xs text-gray-500 mt-1">{era.description}</p>
              </button>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div 
              className={`h-full ${colors.bg} transition-all duration-500`}
              style={{ width: `${(currentEra / eras.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content Area with Transition */}
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Dimension Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {dimensions.map(dim => (
              <button
                key={dim.id}
                onClick={() => setCurrentDimension(dim.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  currentDimension === dim.id
                    ? `${colors.bgLight} ${colors.border} border-2 shadow-md`
                    : 'bg-white/80 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{dim.icon}</span>
                <span className={currentDimension === dim.id ? colors.primary : 'text-gray-700'}>
                  {dim.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Technology Card */}
            <div className="bg-white/90 rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105">
              <h3 className={`text-xl font-bold mb-3 ${colors.primary} flex items-center`}>
                <span className="text-2xl mr-2">💡</span> 기술 발전
              </h3>
              <p className="text-gray-700">{content?.technology}</p>
            </div>

            {/* Problems Card */}
            <div className="bg-white/90 rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-red-600 flex items-center">
                <span className="text-2xl mr-2">⚠️</span> 사회적 문제
              </h3>
              <p className="text-gray-700">{content?.problems}</p>
            </div>

            {/* Solutions Card */}
            <div className="bg-white/90 rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-green-600 flex items-center">
                <span className="text-2xl mr-2">✅</span> 해결책
              </h3>
              <p className="text-gray-700">{content?.solutions}</p>
            </div>
          </div>

          {/* DIKW Model Visualization */}
          <div className="bg-white/90 rounded-xl shadow-lg p-6 mb-8">
            <h3 className={`text-xl font-bold mb-4 ${colors.primary}`}>
              데이터-정보-지식-지혜 모델 변화
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {content?.dikw && Object.entries(content.dikw).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center">
                  <div 
                    className={`w-full h-16 rounded-lg flex items-center justify-center ${
                      value.isHuman ? 'bg-green-600' : 'bg-red-500'
                    }`}
                  >
                    <div className="text-center text-white">
                      <div className="font-bold">{value.label}</div>
                      <div className="text-xs">{value.tech}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-center text-xs text-gray-500">
                    {value.isHuman ? '인간 주도' : '기술 주도'}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-600 mr-2"></div>
                <span>인간이 주도</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 mr-2"></div>
                <span>기술이 주도</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link 
            to="/posters" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← 포스터 목록으로
          </Link>
          <div className="text-sm text-gray-500">
            © 2025 태재미래전략연구원
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnologyEvolutionPage;
