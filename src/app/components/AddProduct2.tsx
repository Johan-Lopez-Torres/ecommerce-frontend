"use client";
import React, { useState } from 'react';
import { Globe, BarChart2, ShoppingBag, PieChart, MessageSquare, User, CreditCard, HelpCircle, LogOut, Plus, Moon, Sun } from 'lucide-react';

export default function AddNewProduct() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 bg-white text-gray-900 dark:text-gray-100 min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 p-6 bg-gray-800 dark:bg-gray-950">
          <div className="flex items-center mb-8">
            <Globe className="mr-2" />
            <h1 className="text-xl font-bold">ProXduct</h1>
          </div>
          <nav>
            <h2 className="text-xs font-semibold text-gray-400 mb-4">MAIN</h2>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><BarChart2 className="mr-2" /> Overview</a></li>
              <li><a href="#" className="flex items-center bg-gray-700 text-white rounded p-2"><ShoppingBag className="mr-2" /> Products</a></li>
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><PieChart className="mr-2" /> Analytics</a></li>
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><MessageSquare className="mr-2" /> Customers</a></li>
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><MessageSquare className="mr-2" /> Reviews</a></li>
            </ul>
            <h2 className="text-xs font-semibold text-gray-400 mt-8 mb-4">ACCOUNT SETTINGS</h2>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><User className="mr-2" /> Account settings</a></li>
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><CreditCard className="mr-2" /> Subscription</a></li>
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><HelpCircle className="mr-2" /> FAQ</a></li>
              <li><a href="#" className="flex items-center text-gray-300 hover:text-white"><MessageSquare className="mr-2" /> Support</a></li>
            </ul>
            <div className="mt-8">
              <a href="#" className="flex items-center text-gray-300 hover:text-white"><LogOut className="mr-2" /> Logout</a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Add New Product</h1>
            <div className="space-x-4">
              <button className="px-4 py-2 rounded bg-gray-700 text-white">Save Draft</button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white">Publish Now</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Base Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-700" defaultValue="Loom Stars Original T-Shirt" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea className="w-full p-2 rounded bg-gray-800 border border-gray-700" rows={4} defaultValue="Short-sleeved T-shirt with round neck.&#10;Thickness: 135 - 145 g/m².&#10;Collar Style: Round Collar" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Pictures</h2>
                <div className="flex space-x-4">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg"></div>
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Plus className="text-gray-400" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Details</h2>
                <div>
                  <label className="block text-sm font-medium mb-1">Price</label>
                  <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-700" defaultValue="$ 120" />
                </div>
              </section>
            </div>

            {/* Right Column (Preview) */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div className=" rounded-lg p-4">
                <img src="https://i5.walmartimages.com/seo/Xbox-Series-X-Video-Gaming-Console-JAPAN-Version_9f8c06f5-7953-426d-9b68-ab914839cef4.5f15be430800ce4d7c3bb5694d4ab798.jpeg" alt="Product Preview" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">Loom Stars Original T-Shirt</h3>
                <p className="text-2xl font-bold mb-4">$ 120</p>
                <div className="flex justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Size</h4>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">S</button>
                      <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">M</button>
                      <button className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">L</button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Color</h4>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full bg-black"></button>
                      <button className="w-8 h-8 rounded-full bg-white"></button>
                      <button className="w-8 h-8 rounded-full bg-purple-500"></button>
                      <button className="w-8 h-8 rounded-full bg-green-500"></button>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2 rounded bg-blue-600 text-white flex items-center justify-center">
                  <ShoppingBag className="mr-2" /> Add To Cart
                </button>
                <p className="mt-4 text-sm">Short-sleeved T-shirt with round neck.</p>
                <p className="text-sm">Thickness: 135 - 145 g/m².</p>
              </div>
            </div>
          </div>
        </main>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}