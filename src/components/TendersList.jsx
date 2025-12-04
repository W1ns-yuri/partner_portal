import React, { useState } from 'react';
import { Search, Filter, FileText, Calendar, DollarSign, Users } from 'lucide-react';

const TendersList = ({ onTenderSelect }) => {
  const [filter, setFilter] = useState('all'); // all, active, completed, planned
  const [searchQuery, setSearchQuery] = useState('');

  const tenders = [
    {
      id: 1,
      title: 'Supply of oilfield equipment',
      category: 'Equipment Supply',
      status: 'active',
      budget: '5,000,000',
      deadline: '2025-12-15',
      participants: 8,
    },
    {
      id: 2,
      title: 'Construction of warehouse complex',
      category: 'Construction',
      status: 'active',
      budget: '12,000,000',
      deadline: '2025-11-25',
      participants: 12,
    },
    {
      id: 3,
      title: 'Equipment maintenance',
      category: 'Technical maintenance',
      status: 'completed',
      budget: '2,500,000',
      deadline: '2025-10-01',
      participants: 5,
    },
    {
      id: 4,
      title: 'IT infrastructure for office',
      category: 'IT Services',
      status: 'planned',
      budget: '3,200,000',
      deadline: '2026-01-15',
      participants: 0,
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-300', label: 'Active' },
      completed: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-800 dark:text-blue-300', label: 'Completed' },
      planned: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-800 dark:text-purple-300', label: 'Planned' },
    };

    const badge = badges[status];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    );
  };

  const filteredTenders = tenders.filter(tender => {
    const matchesFilter = filter === 'all' || tender.status === filter;
    const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">All tenders</h1>
        <p className="text-gray-600 dark:text-gray-400">Management of all system tenders</p>
      </div>

      {/* Filters and search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tenders..."
              className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-petronas-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'active'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'completed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('planned')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'planned'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Planned
            </button>
          </div>
        </div>
      </div>

      {/* Tenders list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTenders.map((tender) => (
          <div
            key={tender.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer"
            onClick={() => onTenderSelect && onTenderSelect(tender)}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white flex-1">
                {tender.title}
              </h3>
              {getStatusBadge(tender.status)}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {tender.category}
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <DollarSign className="w-4 h-4 mr-2" />
                Budget: ${tender.budget}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                Deadline: {new Date(tender.deadline).toLocaleDateString('en-US')}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Users className="w-4 h-4 mr-2" />
                Participants: {tender.participants}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="text-petronas-primary hover:text-petronas-secondary font-medium transition-colors">
                More details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTenders.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Tenders not found</p>
        </div>
      )}
    </div>
  );
};

export default TendersList;
