import React from 'react';
import { ExternalLink, Mail, Calendar, Star, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Deal } from '../../types/deal';
import { formatDate } from '../../utils/formatDate';

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({ deal }: DealCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Intake':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Coffee Chats':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Due Diligence':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'Investment Committee':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Portfolio':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold mr-4">
              {deal.company.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <Link 
                to={`/company/${deal.id}`}
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center"
              >
                {deal.company}
                {deal.priority === 'high' && (
                  <Star className="ml-1 h-4 w-4 text-amber-400 fill-amber-400" />
                )}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">{deal.contactName}</p>
            </div>
          </div>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(deal.status)}`}>
            {deal.status}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{deal.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Industry</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{deal.industry}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Stage</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{deal.stage}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Raise Amount</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{deal.raiseAmount}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Date Received</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(deal.receivedDate)}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 flex justify-center items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Mail className="h-3 w-3 mr-1" />
            Email
          </button>
          <button className="flex-1 flex justify-center items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar className="h-3 w-3 mr-1" />
            Schedule
          </button>
          <Link
            to={`/company/${deal.id}`}
            className="flex items-center justify-center p-1.5 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <ExternalLink className="h-3 w-3" />
          </Link>
          <button className="flex items-center justify-center p-1.5 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <MoreHorizontal className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;