import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, Users, BarChart2, FileText, Calendar, Mail, ExternalLink, Star, ChevronRight, Globe, DollarSign } from 'lucide-react';
import { mockDeals } from '../data/mockData';

const CompanyProfile = () => {
  const { id } = useParams();
  const company = mockDeals.find(deal => deal.id === id);

  if (!company) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Company not found</h2>
        <Link
          to="/dealflow"
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dealflow
        </Link>
      </div>
    );
  }

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
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Link
            to="/dealflow"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {company.company.substring(0, 2).toUpperCase()}
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{company.company}</h1>
                {company.priority === 'high' && (
                  <Star className="ml-2 h-5 w-5 text-amber-400 fill-amber-400" />
                )}
              </div>
              <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{company.industry}</span>
                <ChevronRight className="h-4 w-4" />
                <span>{company.stage}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Star className="h-4 w-4 mr-2" />
            Star
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
                  <div className={`mt-1 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(company.status)}`}>
                    {company.status}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Raise Amount</div>
                  <div className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{company.raiseAmount}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Contact</div>
                  <div className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{company.contactName}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Received</div>
                  <div className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(company.receivedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{company.description}</p>
            </div>
          </div>

          {company.metrics && (
            <>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Key Metrics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Revenue</div>
                        <DollarSign className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        ${company.metrics.revenue.current.toLocaleString()}
                      </div>
                      <div className="mt-1 text-sm text-green-600">
                        +{company.metrics.revenue.growth}% YoY
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Users</div>
                        <Users className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {company.metrics.traction.users.toLocaleString()}
                      </div>
                      <div className="mt-1 text-sm text-green-600">
                        +{company.metrics.traction.growth}% MoM
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Engagement</div>
                        <BarChart2 className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {company.metrics.traction.engagement}/10
                      </div>
                      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        User Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Market Analysis</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Competitive Landscape</h3>
                      <div className="space-y-4">
                        {company.metrics.competitors.map((competitor, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-900 dark:text-white">{competitor.name}</span>
                              <span className="text-gray-500 dark:text-gray-400">{competitor.strength}/10</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${competitor.strength * 10}%` }}
                              ></div>
                            </div>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{competitor.differentiator}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Public Market Comps</h2>
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
                        {company.metrics.marketComps.map((comp, index) => (
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
            </>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Documents</h2>
              <div className="space-y-3">
                {company.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900 dark:text-white">{doc.name}</span>
                    </div>
                    {doc.type === 'docsend' && doc.link && (
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Team Assessment</h2>
              {company.metrics && (
                <div className="space-y-4">
                  {Object.entries(company.metrics.founderAssessment).map(([key, value]) => (
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
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Meeting Notes</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Initial Pitch Meeting</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">May 15, 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Team demonstrated strong technical capabilities. Questions remain about go-to-market strategy.
                  </p>
                </div>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;