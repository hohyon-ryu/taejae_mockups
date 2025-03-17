import React, { useState } from 'react';
import BottomNavigation from '../components/shared/BottomNavigation';

interface NextQuestionProps {
  id: string;
  title: string;
  category: string;
  votes: number;
}

const NextQuestion: React.FC<NextQuestionProps> = ({ title, category, votes }) => {
  return (
    <div className="bg-white rounded-card shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <span className="inline-block bg-gray-200 text-gray-700 rounded-pill px-3 py-1 text-small">
          {category}
        </span>
        <span className="text-small text-moiza-gray-text">{votes}표</span>
      </div>
      <h3 className="text-title font-bold mb-2">{title}</h3>
      <button className="bg-moiza-blue bg-opacity-10 text-moiza-blue py-1 px-4 rounded-pill text-small font-medium">
        투표하기
      </button>
    </div>
  );
};

const ExplorationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newQuestionCategory, setNewQuestionCategory] = useState('');

  // Sample data based on the requirements
  const categories = [
    '기술/윤리',
    '산업/경제',
    '정치/사회',
    '환경/에너지',
    '교육/문화',
    '한반도 미래',
    '디지털 전환',
    '초일류 역량',
  ];

  const nextQuestions = [
    {
      id: 'nq1',
      title: '디지털 ID는 프라이버시와 보안 사이에서 어떤 균형을 찾아야 할까요?',
      category: '기술/사회',
      votes: 287,
    },
    {
      id: 'nq2',
      title: '기후변화 대응을 위한 한반도 에너지 전환 전략은 무엇인가요?',
      category: '환경/에너지',
      votes: 243,
    },
    {
      id: 'nq3',
      title: '디지털 전환 시대, 교육은 어떻게 변화해야 할까요?',
      category: '교육/문화',
      votes: 221,
    },
  ];

  const filteredQuestions = selectedCategory
    ? nextQuestions.filter((q) => q.category === selectedCategory)
    : nextQuestions;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the question to a backend
    alert(`질문 "${newQuestion}" (${newQuestionCategory}) 제안이 완료되었습니다.`);
    setNewQuestion('');
    setNewQuestionCategory('');
  };

  return (
    <div className="bg-moiza-gray-bg min-h-screen pb-16">
      <div className="max-w-mobile mx-auto">
        {/* Header */}
        <header className="bg-white p-4 sticky top-0 z-10 shadow-sm">
          <h1 className="text-title font-bold m-0 mb-3">다음 질문 탐색</h1>
          
          {/* Category Filter */}
          <div className="overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
            <div className="inline-flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`
                    px-3 py-1 rounded-pill text-small font-medium whitespace-nowrap
                    ${selectedCategory === category
                      ? 'bg-moiza-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                  `}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-4">
          {/* Deadline Notice */}
          <div className="bg-moiza-purple bg-opacity-10 p-2 text-center text-moiza-purple text-small font-medium mb-4 rounded-md">
            이번 주 금요일 오후 6시 마감
          </div>

          <h2 className="text-subtitle font-bold mb-3">다음 질문 투표</h2>
          {filteredQuestions.map((question) => (
            <NextQuestion
              key={question.id}
              id={question.id}
              title={question.title}
              category={question.category}
              votes={question.votes}
            />
          ))}

          {/* New Question Suggestion */}
          <h2 className="text-subtitle font-bold mb-3 mt-6">새로운 질문 제안하기</h2>
          <form onSubmit={handleSubmitQuestion} className="bg-white rounded-card shadow-md p-4">
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 mb-3 text-body"
              placeholder="사회적으로 의미 있는 질문을 제안해 보세요..."
              rows={3}
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              required
            ></textarea>
            
            <div className="mb-3">
              <label htmlFor="category-select" className="sr-only">카테고리 선택</label>
              <select
                id="category-select"
                className="w-full border border-gray-300 rounded-md p-2 text-body"
                value={newQuestionCategory}
                onChange={(e) => setNewQuestionCategory(e.target.value)}
                required
                aria-label="카테고리 선택"
              >
                <option value="">카테고리 선택</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="bg-moiza-blue text-white py-2 px-4 rounded-pill font-medium float-right"
            >
              제안하기
            </button>
            <div className="clear-both"></div>
          </form>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default ExplorationPage;
