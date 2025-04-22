"use client";
import React, { useState } from 'react';
import { X, Copy, Moon, Sun } from 'lucide-react';

const ShareModal = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailTo, setEmailTo] = useState(['diana@fintory.com', 'kevin.d@finto']);
  const [subject, setSubject] = useState('I want to share design_proposal.pdf');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Share</h2>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <X size={20} />
          </button>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Direct link</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">You can share the direct link to your file.</p>
          <div className="flex">
            <input
              type="text"
              value="cloudsolution.co/#2403/allprojects/fintoryproje..."
              readOnly
              className={`flex-grow p-2 text-sm rounded-l border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
            />
            <button className={`px-3 py-2 rounded-r ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
              <Copy size={16} />
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Send as an email attachment</h3>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">To</label>
            <div className="flex flex-wrap gap-2 p-2 rounded border border-gray-300 dark:border-gray-600">
              {emailTo.map((email, index) => (
                <div key={index} className={`flex items-center rounded px-2 py-1 text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  {email}
                  <button className="ml-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <X size={14} />
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add email"
                className={`flex-grow outline-none ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Attachment(s)</label>
            <div className={`flex items-center p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
              <div className={`w-8 h-8 mr-2 flex items-center justify-center rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                <span className="text-xs">PDF</span>
              </div>
              <span className="text-sm">design_proposal.pdf</span>
              <span className="text-xs text-gray-500 ml-2">1.5 KB</span>
            </div>
          </div>
          <button className={`w-full py-2 rounded ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;