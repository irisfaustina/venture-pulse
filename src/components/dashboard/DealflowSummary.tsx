import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Deal } from '../../types/deal';

interface DealflowSummaryProps {
  deals: Deal[];
}

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const DealflowSummary = ({ deals }: DealflowSummaryProps) => {
  // Count deals by industry
  const industryMap = deals.reduce((acc, deal) => {
    acc[deal.industry] = (acc[deal.industry] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Transform into chart data
  const chartData = Object.entries(industryMap).map(([name, value]) => ({
    name,
    value,
  }));

  // Count deals by stage
  const stageMap = deals.reduce((acc, deal) => {
    acc[deal.stage] = (acc[deal.stage] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Status distribution
  const statusData = Object.entries(stageMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Dealflow Analytics</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Industry Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]}
                      style={{ fontSize: '11px', fontWeight: '400' }}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ fontSize: '12px' }}
                  itemStyle={{ fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Stage Distribution</h3>
          <div className="space-y-3">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <div className="flex-1 flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item.name}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealflowSummary;