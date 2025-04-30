import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { mockDeals } from '../data/mockData';

const Analytics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  // Get starred companies
  const starredCompanies = mockDeals.filter(deal => deal.starred);

  // Filter companies based on search
  const filteredCompanies = mockDeals.filter(deal =>
    deal.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get selected company data
  const selectedCompanyData = selectedCompany
    ? mockDeals.find(deal => deal.company === selectedCompany)
    : null;

  const renderCompanyMetrics = () => {
    if (!selectedCompanyData?.metrics) return null;

    const { metrics } = selectedCompanyData;

    return (
      <div className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {selectedCompanyData.company} Metrics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Financial Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Current Revenue</span>
                  <span className="text-gray-900 dark:text-white">${metrics.revenue.current.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Revenue Growth</span>
                  <span className="text-green-600">{metrics.revenue.growth}% YoY</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Projected Revenue</span>
                  <span className="text-gray-900 dark:text-white">${metrics.revenue.projection.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Traction Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Total Users</span>
                  <span className="text-gray-900 dark:text-white">{metrics.traction.users.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">User Growth</span>
                  <span className="text-green-600">{metrics.traction.growth}% MoM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Engagement Score</span>
                  <span className="text-gray-900 dark:text-white">{metrics.traction.engagement}/10</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Founder Assessment</h3>
            <div className="space-y-4">
              {Object.entries(metrics.founderAssessment).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-gray-900 dark:text-white">{value}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${(value / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Competitive Landscape</h3>
            <div className="space-y-4">
              {metrics.competitors.map((competitor, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-gray-400">{competitor.name}</span>
                    <span className="text-gray-900 dark:text-white">{competitor.strength}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${(competitor.strength / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {competitor.differentiator}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Public Market Comps</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ticker</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Market Cap</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Multiple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {metrics.marketComps.map((comp, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{comp.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{comp.ticker}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{comp.marketCap}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{comp.revenue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{comp.growth}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{comp.multiple}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Company Analysis</h2>
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {!searchQuery && !selectedCompany && (
          <div className="text-center py-12">
            {starredCompanies.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Starred Companies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {starredCompanies.map((deal) => (
                    <button
                      key={deal.id}
                      onClick={() => setSelectedCompany(deal.company)}
                      className="bg-white dark:bg-gray-750 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">{deal.company}</span>
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {deal.industry} • {deal.stage}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400">
                Search for a company to view analysis
              </div>
            )}
          </div>
        )}

        {searchQuery && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Search Results</h3>
            <div className="space-y-2">
              {filteredCompanies.map((deal) => (
                <button
                  key={deal.id}
                  onClick={() => setSelectedCompany(deal.company)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    selectedCompany === deal.company
                      ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <div className="font-medium">{deal.company}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{deal.industry} • {deal.stage}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {renderCompanyMetrics()}
      </div>
    </div>
  );
};

export default Analytics;