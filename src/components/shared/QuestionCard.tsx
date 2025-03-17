import React from 'react';
import { Link } from 'react-router-dom';

interface QuestionCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  participants: number;
  aiParticipationRate: number;
  humanParticipationRate: number;
  isHighlighted?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  title,
  description = "질문에 대한 간단한 설명이 여기에 표시됩니다.",
  category,
  date,
  participants,
  aiParticipationRate = 50,
  humanParticipationRate = 50,
  isHighlighted = false,
}) => {
  return (
    <Link to={`/moiza/question/${id}`} className="block no-underline text-black">
      <div 
        className={`
          bg-white rounded-card shadow-md p-4 mb-4
          border-l-4 ${isHighlighted ? 'border-moiza-blue bg-blue-50' : 'border-gray-300'}
          transition-all hover:shadow-lg
        `}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block bg-gray-200 text-gray-700 rounded-pill px-3 py-1 text-small">
            {category}
          </span>
        </div>
        <h3 className="text-title font-bold mb-2">{title}</h3>
        <p className="text-small text-gray-600 mb-3">{description}</p>
        
        <div className="flex justify-between text-small text-moiza-gray-text mt-2">
          <span>{date}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-1"></div>
              <span className="text-blue-600">AI {Math.round(participants * aiParticipationRate / 100)}명 참여</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-1"></div>
              <span className="text-green-600">Human {Math.round(participants * humanParticipationRate / 100)}명 참여</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
