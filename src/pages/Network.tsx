import React, { useState } from 'react';
import { Search, Send, Filter, Briefcase, Users, Mail, Linkedin, Calendar, Clock, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { expertContacts } from '../data/networkData';
import { mockDeals } from '../data/mockData';
import type { Contact } from '../types/contact';
import { formatDate } from '../utils/formatDate';

const Network = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [chatQuery, setChatQuery] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [filteredContacts, setFilteredContacts] = useState(expertContacts);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;

    const newMessage = { role: 'user' as const, content: chatQuery };
    setChatMessages(prev => [...prev, newMessage]);
    setChatQuery('');

    // Simulate AI response
    setTimeout(() => {
      const response = {
        role: 'assistant' as const,
        content: `Based on your request for "${chatQuery}", I recommend connecting with our experts in this field. Would you like me to make specific introductions?`
      };
      setChatMessages(prev => [...prev, response]);
    }, 1000);
  };

  React.useEffect(() => {
    const filtered = expertContacts.filter(contact => 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      contact.industry.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredContacts(filtered);
  }, [searchQuery]);

  const getRelatedDeals = (contact: Contact) => {
    if (!contact.relatedDeals) return [];
    return mockDeals.filter(deal => contact.relatedDeals?.includes(deal.id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Expert Network</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          <Users className="h-4 w-4 mr-2" />
          Invite Expert
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Search experts by name, expertise, or industry..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Filter className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredContacts.map((contact) => (
                <Link
                  key={contact.id}
                  to={`/network/expert/${contact.id}`}
                  className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">{contact.name}</h2>
                        <div className="flex space-x-2">
                          <a
                            href={`mailto:${contact.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                          <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center">
                        <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {contact.title} • {contact.company}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {contact.bio}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {contact.expertise.map((exp, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>

                      {(contact.relatedDeals?.length ?? 0) > 0 && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Related Deals</h3>
                          <div className="flex flex-wrap gap-2">
                            {getRelatedDeals(contact).map((deal) => (
                              <Link
                                key={deal.id}
                                to={`/company/${deal.id}`}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                              >
                                {deal.company}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {(contact.pastInteractions?.length ?? 0) > 0 && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Recent Interactions</h3>
                          <div className="space-y-2">
                            {contact.pastInteractions?.map((interaction, index) => (
                              <div key={index} className="flex items-center text-sm">
                                {interaction.type === 'meeting' && <Calendar className="h-4 w-4 text-gray-400 mr-2" />}
                                {interaction.type === 'call' && <Phone className="h-4 w-4 text-gray-400 mr-2" />}
                                {interaction.type === 'email' && <Mail className="h-4 w-4 text-gray-400 mr-2" />}
                                <span className="text-gray-600 dark:text-gray-300">{interaction.summary}</span>
                                <span className="ml-2 text-xs text-gray-400">
                                  • {formatDate(interaction.date)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">AI Assistant</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Ask about expert recommendations or introductions
            </p>
          </div>

          <div className="flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'assistant'
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Ask about expert recommendations..."
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;