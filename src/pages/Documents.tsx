import React, { useState } from 'react';
import { Search, Star, ChevronRight } from 'lucide-react';
import { mockDeals } from '../data/mockData';

const LIFECYCLE_STAGES = [
  { id: 'Intake', name: 'Intake', color: 'bg-blue-500', icon: '📥' },
  { id: 'Coffee Chats', name: 'Coffee Chats', color: 'bg-purple-500', icon: '☕' },
  { id: 'Due Diligence', name: 'Due Diligence', color: 'bg-indigo-500', icon: '🔍' },
  { id: 'Investment Committee', name: 'Investment Committee', color: 'bg-green-500', icon: '📊' },
  { id: 'Portfolio', name: 'Portfolio', color: 'bg-amber-500', icon: '💼' }
] as const;

type LifecycleStage = typeof LIFECYCLE_STAGES[number]['id'];

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<LifecycleStage | null>(null);

  // Get starred companies
  const starredCompanies = mockDeals.filter(deal => deal.starred);

  // Filter companies based on search
  const filteredCompanies = mockDeals.filter(deal =>
    deal.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get selected company documents
  const selectedCompanyData = selectedCompany
    ? mockDeals.find(deal => deal.company === selectedCompany)
    : null;

  const getStageIndex = (status: LifecycleStage) => {
    return LIFECYCLE_STAGES.findIndex(stage => stage.id === status);
  };

  const renderLifecycleTimeline = () => {
    if (!selectedCompanyData) return null;

    const currentStageIndex = getStageIndex(selectedCompanyData.status);

    return (
      <div className="mb-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line with gradient progress */}
          <div className="absolute top-8 left-0 right-0 h-2 bg-gradient-to-r from-gray-200 to-gray-200 dark:from-gray-700 dark:to-gray-700 rounded-full" />
          <div 
            className="absolute top-8 left-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStageIndex + 1) / LIFECYCLE_STAGES.length) * 100}%` }}
          />
          
          {/* Timeline stages */}
          <div className="relative flex justify-between">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const isCompleted = index <= currentStageIndex;
              const isCurrent = index === currentStageIndex;
              
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
                  className={`flex flex-col items-center group transition-all duration-300 ${
                    selectedStage === stage.id ? 'opacity-100 scale-110' :
                    isCompleted ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  {/* Stage icon and dot */}
                  <div className={`
                    relative w-16 h-16 rounded-full flex items-center justify-center
                    transition-all duration-300 transform
                    ${isCurrent ? 'scale-110' : ''}
                    ${isCompleted ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800' : 
                    'bg-gray-100 dark:bg-gray-800'}
                    ${isCurrent ? 'ring-4 ring-indigo-200 dark:ring-indigo-900' : ''}
                    group-hover:shadow-lg
                  `}>
                    <span className="text-2xl">{stage.icon}</span>
                    <div className={`
                      absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800
                      ${isCompleted ? stage.color : 'bg-gray-300 dark:bg-gray-600'}
                      ${isCurrent ? 'animate-pulse' : ''}
                    `} />
                  </div>
                  
                  {/* Stage name */}
                  <span className={`
                    mt-2 text-sm font-medium whitespace-nowrap transition-all duration-300
                    ${isCurrent ? 'text-indigo-600 dark:text-indigo-400 font-semibold' :
                    isCompleted ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'}
                  `}>
                    {stage.name}
                  </span>

                  {/* Stage arrow */}
                  {index < LIFECYCLE_STAGES.length - 1 && (
                    <ChevronRight className={`
                      absolute top-7 left-[calc(100%+1rem)] h-5 w-5 transition-colors duration-300
                      ${isCompleted ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-300 dark:text-gray-600'}
                    `} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderStageDocuments = () => {
    if (!selectedStage || !selectedCompanyData?.documents) return null;

    // Filter documents by selected stage
    const stageDocuments = selectedCompanyData.documents.filter(doc => doc.status === selectedStage);

    return (
      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {LIFECYCLE_STAGES.find(stage => stage.id === selectedStage)?.name} Documents
        </h3>
        {stageDocuments.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {stageDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">
                    {doc.type === 'pdf' ? '📄' : doc.type === 'doc' ? '📝' : '📊'}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{doc.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Added {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                {doc.type === 'docsend' && doc.link && (
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    View Document →
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No documents found for this stage
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Company Documents</h2>
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
                        {deal.documents.length} documents
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400">
                Search for a company to view documents
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
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {deal.documents.length} documents • Last updated {new Date().toLocaleDateString()}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedCompanyData && (
          <>
            {renderLifecycleTimeline()}
            {selectedStage ? renderStageDocuments() : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Select a stage to view related documents
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Documents;