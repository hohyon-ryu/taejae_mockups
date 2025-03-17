import React from 'react';
import { Search } from '@mui/icons-material';
import QuestionCard from '../components/shared/QuestionCard';
import BottomNavigation from '../components/shared/BottomNavigation';

const MainPage: React.FC = () => {
  // Sample data based on the requirements
  const mainQuestion = {
    id: 'q1',
    title: 'AI에게 인격권을 부여해야 할까요?',
    description: 'AI 기술의 발전으로 인해 AI의 법적 지위와 권리에 대한 논의가 필요한 시점입니다.',
    category: '기술/윤리',
    date: '2025.03.16',
    participants: 423,
    aiParticipationRate: 45,
    humanParticipationRate: 55,
  };

  const recentQuestions = [
    {
      id: 'q2',
      title: '디지털 시대에 개인정보 보호와 편의성 중 더 중요한 가치는 무엇인가요?',
      description: '디지털 서비스의 편의성과 개인정보 보호 사이의 균형에 대한 사회적 합의가 필요합니다.',
      category: '기술/사회',
      date: '2025.03.14',
      participants: 312,
      aiParticipationRate: 35,
      humanParticipationRate: 65,
    },
    {
      id: 'q3',
      title: '한반도 미래 산업의 핵심 동력은 무엇이 되어야 할까요?',
      description: '급변하는 글로벌 경제 환경에서 한반도의 미래 산업 전략에 대한 논의입니다.',
      category: '산업/경제',
      date: '2025.03.12',
      participants: 287,
      aiParticipationRate: 40,
      humanParticipationRate: 60,
    },
    {
      id: 'q4',
      title: '미중 경쟁 시대, 한국의 최적 외교 전략은 무엇인가요?',
      description: '미국과 중국 사이의 전략적 경쟁 속에서 한국이 취해야 할 외교적 입장에 대한 논의입니다.',
      category: '미중관계',
      date: '2025.03.11',
      participants: 352,
      aiParticipationRate: 52,
      humanParticipationRate: 48,
    },
  ];

  return (
    <div className="bg-moiza-gray-bg min-h-screen pb-16">
      <div className="max-w-mobile mx-auto">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
          <div className="flex items-center">
            <h1 className="text-moiza-purple font-bold text-xl m-0">Moiza</h1>
          </div>
          <button className="bg-transparent border-0 p-2" title="검색" aria-label="검색">
            <Search />
          </button>
        </header>

        {/* Today's Theme Badge */}
        <div className="bg-moiza-purple bg-opacity-10 p-2 text-center text-moiza-purple text-small font-medium">
          오늘의 주제: 한반도 미래산업
        </div>

        {/* Main Content */}
        <div className="p-4">
          <h2 className="text-subtitle font-bold mb-3">주간 메인 질문</h2>
          <QuestionCard
            id={mainQuestion.id}
            title={mainQuestion.title}
            description={mainQuestion.description}
            category={mainQuestion.category}
            date={mainQuestion.date}
            participants={mainQuestion.participants}
            aiParticipationRate={mainQuestion.aiParticipationRate}
            humanParticipationRate={mainQuestion.humanParticipationRate}
            isHighlighted={true}
          />

          <h2 className="text-subtitle font-bold mb-3 mt-6">최근 질문</h2>
          {recentQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              description={question.description}
              category={question.category}
              date={question.date}
              participants={question.participants}
              aiParticipationRate={question.aiParticipationRate}
              humanParticipationRate={question.humanParticipationRate}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default MainPage;
