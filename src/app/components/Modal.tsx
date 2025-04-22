"use client"
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const GithubConnectionForm = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto p-4">
        <button
          onClick={toggleDarkMode}
          className={`fixed top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <div className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gray-400 rounded-lg mr-2"></div>
            <div className="w-12 h-12 bg-gray-400 rounded-lg"></div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Connect Tradier to Github</h2>
          <p className="text-center text-sm mb-6">
            Streamline your API requests by using Github's SDK's and automate all your user tickets
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="accountName" className="block text-sm font-medium mb-1">
                Account Name
              </label>
              <input
                type="text"
                id="accountName"
                placeholder="e.g John Smith"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
                API Key
              </label>
              <input
                type="text"
                id="apiKey"
                placeholder="e.g 1231-23532FG34-A"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="workspaceUrl" className="block text-sm font-medium mb-1">
                Workspace URL
              </label>
              <div className="flex">
                <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'}`}>
                  https://
                </span>
                <input
                  type="text"
                  id="workspaceUrl"
                  placeholder="example.website.com"
                  value={workspaceUrl}
                  onChange={(e) => setWorkspaceUrl(e.target.value)}
                  className={`flex-1 p-2 rounded-r border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
          <p className="text-xs mt-4">
            By clicking "Next," you confirm your intention to connect your app to Tradier API. This action signifies you accept of the{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Terms and conditions
            </a>{' '}
            outlined.
          </p>
          <div className={`mt-4 p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-medium">Public Data</span>
            </div>
            <p className="text-sm mt-1">The data used in this connection is public data only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubConnectionForm;