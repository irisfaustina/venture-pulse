import React from 'react';
import { Mail, Database, Bell, Lock, User, Key, Import as FileImport, ArrowRight, RefreshCw } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <FileImport className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Import Data</h2>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Import your existing dealflow data from other platforms.
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Airtable</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Import dealflow data from Airtable base</p>
              </div>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Connect <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Harmonic</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Import company and market data from Harmonic</p>
              </div>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Connect <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Affinity</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Import relationships and deals from Affinity</p>
              </div>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                Connect <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <RefreshCw className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Manage Your Integrations</h2>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Connect and manage your integrations with external services.
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Gmail Integration</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Connect your Gmail account to scan for new dealflow emails.
                </p>
              </div>
              <Mail className="h-6 w-6 text-gray-400" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gmail Account
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="your.email@gmail.com"
                  />
                  <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Manage
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Scan Frequency
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <option>Every 15 minutes</option>
                  <option>Every 30 minutes</option>
                  <option>Every hour</option>
                  <option>Every 3 hours</option>
                  <option>Every 6 hours</option>
                  <option>Once daily</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Filters
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="filter-all"
                      name="filter"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      defaultChecked
                    />
                    <label htmlFor="filter-all" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                      Scan all emails
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="filter-label"
                      name="filter"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                    />
                    <label htmlFor="filter-label" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                      Only scan emails with specific label
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="filter-folder"
                      name="filter"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                    />
                    <label htmlFor="filter-folder" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                      Only scan specific folder
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Google Sheets Integration</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Connect to Google Sheets to store and organize your dealflow data.
                </p>
              </div>
              <Database className="h-6 w-6 text-gray-400" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Google Account
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    className="flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="your.email@gmail.com"
                  />
                  <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Manage
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Spreadsheet Name
                </label>
                <input
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  defaultValue="deal-flow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Auto-update Google Sheets
                </label>
                <div className="flex items-center">
                  <input
                    id="auto-update"
                    name="auto-update"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded"
                    defaultChecked
                  />
                  <label htmlFor="auto-update" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                    Automatically update spreadsheet when new dealflow is detected
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Configure how and when you want to be notified about new dealflow.
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Notifications</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Receive email notifications for new dealflow</p>
              </div>
              <div className="flex items-center">
                <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600" aria-pressed="true">
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Browser Notifications</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Receive browser notifications for new dealflow</p>
              </div>
              <div className="flex items-center">
                <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 dark:bg-gray-700" aria-pressed="false">
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">High Priority Only</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Only notify for deals marked as high priority</p>
              </div>
              <div className="flex items-center">
                <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-200 dark:bg-gray-700" aria-pressed="false">
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;