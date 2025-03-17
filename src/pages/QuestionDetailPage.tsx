import React, { useState } from 'react';
import { ArrowBack, Share } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AIOpinionCard from '../components/shared/AIOpinionCard';
import UserOpinionCard from '../components/shared/UserOpinionCard';
import BottomNavigation from '../components/shared/BottomNavigation';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const QuestionDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'stats' | 'users'>('ai');

  // Sample data based on the requirements
  const questionData = {
    id: 'q1',
    title: 'AI에게 인격권을 부여해야 할까요?',
    category: '기술/윤리',
    description: '인공지능 기술이 발전하면서, AI에게 일정한 법적 권리와 책임을 부여해야 한다는 논의가 활발해지고 있습니다. 여러분은 AI에게 인격권을 부여하는 것에 대해 어떻게 생각하시나요?',
    agreePercentage: 58,
    disagreePercentage: 42,
  };

  const aiOpinions = [
    {
      id: 'ai1',
      country: '한국',
      age: 30,
      gender: '여성',
      stance: 'agree' as const,
      content: 'AI의 책임과 권리를 법적으로 정의하기 위해서는 인격권 개념 도입이 필요합니다. 하지만 인간과 동일한 수준이 아닌 특별한 범주로 구분해야 합니다.',
    },
    {
      id: 'ai2',
      country: '독일',
      age: 45,
      gender: '남성',
      stance: 'disagree' as const,
      content: '인격권은 인간 고유의 권리입니다. AI에게는 책임과 안전을 보장하는 규제가 필요하지만, 인격권 부여는 위험한 선례가 될 수 있습니다.',
    },
    {
      id: 'ai3',
      country: '일본',
      age: 28,
      gender: '남성',
      stance: 'agree' as const,
      content: 'AI 기술 발전 속도를 고려하면, 미래를 대비한 법적 프레임워크 도입은 필요합니다. 제한적 인격권 부여가 현실적 대안이라고 생각합니다.',
    },
    {
      id: 'ai4',
      country: '미국',
      age: 35,
      gender: '여성',
      stance: 'disagree' as const,
      content: '기술 발전을 저해하지 않으면서도 윤리적 기준을 유지할 수 있는 새로운 접근법이 필요합니다. 인격권보다는 \'AI 윤리 프레임워크\'가 더 적합합니다.',
    },
  ];

  const userOpinions = [
    {
      id: 'user1',
      username: '김태희',
      stance: 'agree' as const,
      content: 'AI 기술이 발전할수록 책임 소재가 모호해지는 문제가 있습니다. 제한적 인격권을 부여하고 명확한 법적 체계를 만드는 것이 미래를 위한 현명한 선택이라고 생각합니다.',
      likes: 24,
      dislikes: 3,
    },
    {
      id: 'user2',
      username: '이민수',
      stance: 'disagree' as const,
      content: 'AI는 결국 인간이 만든 도구입니다. 도구에 인격권을 부여하는 것은 법적, 철학적으로 많은 혼란을 가져올 수 있습니다. 우리는 AI에 대한 규제와 지침을 강화하는 데 집중해야 합니다.',
      likes: 18,
      dislikes: 7,
    },
  ];

  const countryStats = [
    { name: '한국', agree: 62, disagree: 38 },
    { name: '미국', agree: 47, disagree: 53 },
    { name: '독일', agree: 38, disagree: 62 },
    { name: '일본', agree: 58, disagree: 42 },
    { name: '중국', agree: 71, disagree: 29 },
  ];

  const ageStats = [
    { name: '20대', value: 65 },
    { name: '30대', value: 58 },
    { name: '40대', value: 49 },
    { name: '50대 이상', value: 42 },
  ];

  const COLORS = ['#3B82F6', '#9CA3AF', '#8B5CF6', '#10B981'];

  return (
    <div className="bg-moiza-gray-bg min-h-screen pb-16">
      <div className="max-w-mobile mx-auto">
        {/* Header */}
        <header className="bg-white p-4 flex items-center sticky top-0 z-10 shadow-sm">
          <Link to="/" className="mr-4">
            <ArrowBack />
          </Link>
          <h1 className="text-title font-bold m-0">질문 상세</h1>
        </header>

        {/* Question Section */}
        <div className="bg-white p-4 mb-4">
          <div className="mb-2">
            <span className="inline-block bg-gray-200 text-gray-700 rounded-pill px-3 py-1 text-small">
              {questionData.category}
            </span>
          </div>
          <h2 className="text-title font-bold mb-3">{questionData.title}</h2>
          <p className="text-body mb-4">{questionData.description}</p>

          {/* Vote Percentage Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-small mb-1">
              <span>찬성 {questionData.agreePercentage}%</span>
              <span>반대 {questionData.disagreePercentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-moiza-blue" 
                style={{ width: `${questionData.agreePercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-moiza-blue text-white py-2 rounded-pill font-medium">
              참여하기
            </button>
            <button className="flex items-center justify-center bg-gray-200 p-2 rounded-full" aria-label="공유하기">
              <Share fontSize="small" />
            </button>
          </div>
        </div>

        {/* Tab Menu */}
        <div className="bg-white mb-4 flex border-b">
          <button 
            className={`flex-1 py-3 text-center font-medium ${activeTab === 'ai' ? 'text-moiza-blue border-b-2 border-moiza-blue' : 'text-moiza-gray-text'}`}
            onClick={() => setActiveTab('ai')}
          >
            AI 패널 의견
          </button>
          <button 
            className={`flex-1 py-3 text-center font-medium ${activeTab === 'stats' ? 'text-moiza-blue border-b-2 border-moiza-blue' : 'text-moiza-gray-text'}`}
            onClick={() => setActiveTab('stats')}
          >
            국가별 통계
          </button>
          <button 
            className={`flex-1 py-3 text-center font-medium ${activeTab === 'users' ? 'text-moiza-blue border-b-2 border-moiza-blue' : 'text-moiza-gray-text'}`}
            onClick={() => setActiveTab('users')}
          >
            사용자 의견
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'ai' && (
            <div>
              <h3 className="text-subtitle font-bold mb-3">AI 패널 의견</h3>
              {aiOpinions.map((opinion) => (
                <AIOpinionCard
                  key={opinion.id}
                  country={opinion.country}
                  age={opinion.age}
                  gender={opinion.gender}
                  stance={opinion.stance}
                  content={opinion.content}
                />
              ))}
            </div>
          )}

          {activeTab === 'stats' && (
            <div>
              <h3 className="text-subtitle font-bold mb-3">국가별 찬반 비율</h3>
              <div className="bg-white p-4 rounded-card mb-4">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={countryStats}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={40} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="agree" name="찬성" fill="#3B82F6" stackId="stack" />
                    <Bar dataKey="disagree" name="반대" fill="#EF4444" stackId="stack" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <h3 className="text-subtitle font-bold mb-3 mt-6">연령별 찬성 비율</h3>
              <div className="bg-white p-4 rounded-card">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={ageStats}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {ageStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h3 className="text-subtitle font-bold mb-3">사용자 의견</h3>
              
              {/* Opinion Input Form */}
              <div className="bg-white p-4 rounded-card mb-4">
                <div className="flex gap-4 mb-3">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="stance" value="agree" className="accent-moiza-blue" />
                    <span>찬성</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="stance" value="disagree" className="accent-red-500" />
                    <span>반대</span>
                  </label>
                </div>
                <textarea 
                  className="w-full border border-gray-300 rounded-md p-3 mb-3 text-body"
                  placeholder="의견을 작성해주세요..."
                  rows={3}
                ></textarea>
                <button className="bg-moiza-blue text-white py-2 px-4 rounded-pill font-medium float-right">
                  등록하기
                </button>
                <div className="clear-both"></div>
              </div>

              {/* User Opinions */}
              {userOpinions.map((opinion) => (
                <UserOpinionCard
                  key={opinion.id}
                  username={opinion.username}
                  stance={opinion.stance}
                  content={opinion.content}
                  likes={opinion.likes}
                  dislikes={opinion.dislikes}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default QuestionDetailPage;
