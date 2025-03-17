import React from 'react';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

interface UserOpinionCardProps {
  username: string;
  stance: 'agree' | 'disagree';
  content: string;
  likes: number;
  dislikes: number;
}

const UserOpinionCard: React.FC<UserOpinionCardProps> = ({
  username,
  stance,
  content,
  likes,
  dislikes,
}) => {
  return (
    <div className="bg-white rounded-card p-4 mb-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-body font-medium">{username}</span>
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
      <p className="text-body mb-3">{content}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-1 text-small text-moiza-gray-text hover:text-moiza-blue">
          <ThumbUp fontSize="small" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-1 text-small text-moiza-gray-text hover:text-red-500">
          <ThumbDown fontSize="small" />
          <span>{dislikes}</span>
        </button>
      </div>
    </div>
  );
};

export default UserOpinionCard;
