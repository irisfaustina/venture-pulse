import React from 'react';
import { ArrowUp, ArrowDown, PieChart, BarChart, Inbox, Clock, Zap, Target } from 'lucide-react';
import DealflowSummary from '../components/dashboard/DealflowSummary';
import RecentDeals from '../components/dashboard/RecentDeals';
import StatsCard from '../components/ui/StatsCard';
import { mockDeals } from '../data/mockData';

const Dashboard = () => {
  // Calculate some mock statistics
  const totalDeals = mockDeals.length;
  const newDealsThisWeek = mockDeals.filter(deal => 
    new Date(deal.receivedDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;
  const dealsInReview = mockDeals.filter(deal => deal.status === 'review').length;
  const avgResponseTime = 14; // hours

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-4 py-2 flex items-center">
          <span className="text-gray-500 dark:text-gray-400 mr-2">Last sync:</span>
          <span className="text-gray-700 dark:text-gray-200">Today, 10:45 AM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Dealflow" 
          value={totalDeals.toString()} 
          icon={<Inbox />}
          change={`+${newDealsThisWeek}`}
          changeLabel="this week"
          changeType="positive"
        />
        <StatsCard 
          title="Response Rate" 
          value="89%" 
          icon={<Zap />}
          change="12%"
          changeLabel="vs last month"
          changeType="positive"
        />
        <StatsCard 
          title="Avg. Response Time" 
          value={`${avgResponseTime}h`} 
          icon={<Clock />}
          change="2h"
          changeLabel="faster"
          changeType="positive"
        />
        <StatsCard 
          title="Deals in Pipeline" 
          value={dealsInReview.toString()} 
          icon={<Target />}
          change="3"
          changeLabel="meetings scheduled"
          changeType="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentDeals deals={mockDeals.slice(0, 5)} />
        </div>
        <div>
          <DealflowSummary deals={mockDeals} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;