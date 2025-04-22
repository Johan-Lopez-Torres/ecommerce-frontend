"use client";

import React, { useState } from 'react';
import { Moon, Sun, Bell, ChevronDown, Search, MoreHorizontal } from 'lucide-react';

export default function OrdersDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const orderStats = [
    { title: 'Active Orders', value: '1 046', color: 'bg-blue-100 dark:bg-blue-900', chart: 'blue' },
    { title: 'Unfulfilled', value: '159', color: 'bg-yellow-100 dark:bg-yellow-900', chart: 'yellow' },
    { title: 'Pending Rece...', value: '624', color: 'bg-purple-100 dark:bg-purple-900', chart: 'purple' },
    { title: 'Fulfilled', value: '263', color: 'bg-green-100 dark:bg-green-900', chart: 'green' },
  ];

  const orders = [
    { id: '121 091', created: 'Aug 1, 2019', customer: 'Harriet Santiago', fulfillment: 'Unfulfilled', total: '$604.50', profit: '$182.50', status: 'Authorized', updated: 'Today' },
    { id: '121 090', created: 'Jul 21, 2019', customer: 'Sara Graham', fulfillment: 'Pending Receipt', total: '$1,175.50', profit: '$524.25', status: 'Paid', updated: 'Today' },
    { id: '121 058', created: 'Jul 16, 2019', customer: 'Elmer McGee', fulfillment: 'Fulfilled', total: '$175.50', profit: '$78', status: 'Authorized', updated: 'Yesterday' },
    { id: '120 999', created: 'Jul 17, 2019', customer: 'Victor Arnold', fulfillment: 'Fulfilled', total: '$402.50', profit: '$83', status: 'Authorized', updated: 'Jul 26, 2019' },
    { id: '121 049', created: 'Jul 19, 2019', customer: 'Harriett Scott', fulfillment: 'Fulfilled', total: '$178', profit: '$27.15', status: 'Paid', updated: 'Jul 26, 2019' },
    { id: '121 094', created: 'Jul 27, 2019', customer: 'Patricia Vaughn', fulfillment: 'Pending Receipt', total: '$824.50', profit: '$113.50', status: 'Paid', updated: 'Jul 26, 2019' },
    { id: '121 001', created: 'Jul 19, 2019', customer: 'Earl Hopkins', fulfillment: 'Unfulfilled', total: '$175.50', profit: '$18.50', status: 'Paid', updated: 'Jul 26, 2019' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <header className="py-4 flex justify-between items-center border-b dark:border-gray-700">
          <div className="flex items-center space-x-8">
            <div className="text-blue-500 text-2xl">⬜</div>
            <nav>
              <ul className="flex space-x-4">
                <li>Dashboards</li>
                <li className="text-blue-500">Orders</li>
                <li>Customers</li>
                <li>Inventory</li>
                <li>Settings</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Bell className="h-5 w-5" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </header>

        <main className="py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Orders list</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Create order</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {orderStats.map((stat, index) => (
              <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
                <h3 className="text-sm font-medium mb-2">{stat.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <div className="w-16 h-8 bg-white rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="flex border-b dark:border-gray-700 p-4">
              <button className="mr-4 text-blue-500">All orders</button>
              <button className="mr-4">Active</button>
              <button className="mr-4">Unpaid</button>
              <button>Unfulfilled</button>
              <div className="ml-auto">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 text-left">
                  <th className="p-4">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Created</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Fulfillment</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Profit</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Updated</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-t dark:border-gray-700">
                    <td className="p-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-4 text-blue-500">{order.id}</td>
                    <td className="p-4">{order.created}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                        {order.customer}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.fulfillment === 'Unfulfilled' ? 'bg-yellow-200 text-yellow-800' :
                        order.fulfillment === 'Pending Receipt' ? 'bg-purple-200 text-purple-800' :
                        'bg-green-200 text-green-800'
                      }`}>
                        {order.fulfillment}
                      </span>
                    </td>
                    <td className="p-4">{order.total}</td>
                    <td className="p-4">{order.profit}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Authorized' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">{order.updated}</td>
                    <td className="p-4">
                      <MoreHorizontal className="h-5 w-5 text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}