import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Chat, Public, Person } from '@mui/icons-material';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    {
      icon: <Chat />,
      label: 'Big Questions',
      path: '/moiza',
      active: path === '/moiza',
    },
    {
      icon: <Public />,
      label: 'Next Questions',
      path: '/moiza/explore',
      active: path === '/moiza/explore',
    },
    {
      icon: <Person />,
      label: 'My Profile',
      path: '/moiza/profile',
      active: path === '/moiza/profile',
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 max-w-mobile mx-auto">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex flex-col items-center no-underline"
        >
          <div className={`${item.active ? 'text-moiza-blue' : 'text-moiza-gray-text'}`}>
            {item.icon}
          </div>
          <span className={`text-small ${item.active ? 'text-moiza-blue' : 'text-moiza-gray-text'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
