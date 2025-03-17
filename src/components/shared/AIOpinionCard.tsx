import React from 'react';
import { SmartToy } from '@mui/icons-material';

interface AIOpinionCardProps {
  country: string;
  age: number;
  gender: string;
  stance: 'agree' | 'disagree';
  content: string;
}

const AIOpinionCard: React.FC<AIOpinionCardProps> = ({
  country,
  age,
  gender,
  stance,
  content,
}) => {
  return (
    <div className="bg-gray-100 rounded-card p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <SmartToy className="text-moiza-purple" />
          <span className="text-body font-medium">
            {country} {age}대 {gender}
          </span>
        </div>
        <span 
          className={`
            inline-block rounded-pill px-3 py-1 text-small text-white
            ${stance === 'agree' ? 'bg-moiza-blue' : 'bg-red-500'}
          `}
        >
          {stance === 'agree' ? '찬성' : '반대'}
        </span>
      </div>
      <p className="text-body">{content}</p>
      <div className="flex gap-2 mt-3">
        <button className="text-small text-moiza-gray-text hover:text-moiza-blue">
          동의해요
        </button>
        <button className="text-small text-moiza-gray-text hover:text-red-500">
          동의하지 않아요
        </button>
        <button className="text-small text-moiza-gray-text hover:text-moiza-purple ml-auto">
          의견 남기기
        </button>
      </div>
    </div>
  );
};

export default AIOpinionCard;
