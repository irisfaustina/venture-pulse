import React, { ReactNode } from 'react';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  change?: string;
  changeLabel?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeLabel, 
  changeType = 'neutral' 
}: StatsCardProps) => {
  const getChangeIcon = () => {
    switch (changeType) {
      case 'positive':
        return <ArrowUp className="h-3 w-3 text-green-500" />;
      case 'negative':
        return <ArrowDown className="h-3 w-3 text-red-500" />;
      default:
        return <ArrowRight className="h-3 w-3 text-gray-500" />;
    }
  };

  const getChangeTextColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600 dark:text-green-400';
      case 'negative':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
        </div>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        {change && (
          <div className={`ml-2 flex items-center text-xs ${getChangeTextColor()}`}>
            {getChangeIcon()}
            <span className="ml-1">{change}</span>
            {changeLabel && <span className="ml-1 text-gray-500 dark:text-gray-400">{changeLabel}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;