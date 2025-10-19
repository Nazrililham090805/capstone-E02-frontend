import React from 'react';
import { TrendingUp, XCircle, CheckCircle } from 'lucide-react';

const DataCard = ({ count, label, type }) => {
  const getIconAndColors = () => {
    switch (type) {
      case 'total':
        return { icon: TrendingUp, iconBg: 'bg-blue-500', cardBg: 'bg-blue-50' };
      case 'not-compliant':
        return { icon: XCircle, iconBg: 'bg-orange-500', cardBg: 'bg-orange-50' };
      case 'compliant':
        return { icon: CheckCircle, iconBg: 'bg-green-500', cardBg: 'bg-green-50' };
      default:
        return { icon: TrendingUp, iconBg: 'bg-gray-500', cardBg: 'bg-gray-50' };
    }
  };

  const { icon: Icon, iconBg, cardBg } = getIconAndColors();

  return (
    <div className={`flex items-center gap-4 p-5 rounded-lg shadow ${cardBg}`}>
      <div className={`${iconBg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-800">{String(count).padStart(2, '0')}</div>
        <div className="text-sm text-gray-700">{label}</div>
      </div>
    </div>
  );
};

export default DataCard;