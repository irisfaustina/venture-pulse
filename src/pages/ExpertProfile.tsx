import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Briefcase, Users, Building, Globe, Award, Calendar, Phone, ExternalLink } from 'lucide-react';
import { expertContacts } from '../data/networkData';
import { mockDeals } from '../data/mockData';
import { formatDate } from '../utils/formatDate';

const ExpertProfile = () => {
  const { id } = useParams();
  const expert = expertContacts.find(contact => contact.id === id);

  if (!expert) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Expert not found</h2>
        <Link
          to="/network"
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Network
        </Link>
      </div>
    );
  }

  const relatedDeals = expert.relatedDeals 
    ? mockDeals.filter(deal => expert.relatedDeals?.includes(deal.id))
    : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Link
            to="/network"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div className="flex items-center">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{expert.name}</h1>
              <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{expert.title}</span>
                <span>•</span>
                <span>{expert.company}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href={`mailto:${expert.email}`}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </a>
          <a
            href={expert.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Linkedin className="h-4 w-4 mr-2" />
            Connect
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">About</h2>
              <p className="text-gray-600 dark:text-gray-300">{expert.bio}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Experience Highlights</h2>
              <div className="space-y-4">
                {expert.experience.map((exp, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">{exp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Past Interactions</h2>
              <div className="space-y-4">
                {expert.pastInteractions?.map((interaction, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {interaction.type === 'meeting' && <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
                      {interaction.type === 'call' && <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />}
                      {interaction.type === 'email' && <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600 dark:text-gray-300">{interaction.summary}</p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{formatDate(interaction.date)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Related Deals</h2>
              <div className="space-y-4">
                {relatedDeals.map((deal) => (
                  <Link
                    key={deal.id}
                    to={`/company/${deal.id}`}
                    className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                          {deal.company.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-900 dark:text-white">{deal.company}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{deal.stage} • {deal.industry}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {expert.expertise.map((exp, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Industry Focus</h2>
              <div className="space-y-3">
                {expert.industry.map((ind, index) => (
                  <div key={index} className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</div>
                  <a
                    href={`mailto:${expert.email}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {expert.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</div>
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Company</div>
                  <div className="text-gray-900 dark:text-white">{expert.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;