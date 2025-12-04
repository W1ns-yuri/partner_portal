import React from 'react';
import { PlusCircle, FileText, Users, TrendingUp, Clock, CheckCircle, XCircle } from 'lucide-react';

const PetronasDashboard = ({ setCurrentPage }) => {
  // Mock statistics
  const stats = {
    activeTenders: 12,
    pendingReviews: 5,
    completedTenders: 48,
    totalPartners: 156,
  };

  const recentTenders = [
    {
      id: 1,
      title: 'Supply of oilfield equipment',
      status: 'active',
      participants: 8,
      deadline: '2025-12-15',
    },
    {
      id: 2,
      title: 'Construction of warehouse complex',
      status: 'review',
      participants: 12,
      deadline: '2025-11-25',
    },
    {
      id: 3,
      title: 'Equipment maintenance',
      status: 'active',
      participants: 5,
      deadline: '2025-12-01',
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-300', label: 'Active' },
      review: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-800 dark:text-yellow-300', label: 'Under review' },
      completed: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-800 dark:text-blue-300', label: 'Completed' },
    };

    const badge = badges[status];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Tender management panel
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Management of tenders and Petronas partners
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <button
          onClick={() => setCurrentPage('create-tender')}
          className="bg-gradient-to-br from-petronas-primary to-petronas-secondary text-white rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <PlusCircle className="w-8 h-8 mb-3" />
          <h3 className="text-lg font-bold mb-1">Create tender</h3>
          <p className="text-sm opacity-90">New tender proposal</p>
        </button>

        <button
          onClick={() => setCurrentPage('tenders-list')}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 text-left"
        >
          <FileText className="w-8 h-8 text-petronas-primary mb-3" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">All tenders</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">View and manage</p>
        </button>

        <button
          onClick={() => setCurrentPage('partners')}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 text-left"
        >
          <Users className="w-8 h-8 text-blue-500 mb-3" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Partners</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Partners database</p>
        </button>

        <button className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 text-left">
          <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Analytics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Reports and statistics</p>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            <span className="text-3xl font-bold text-green-900 dark:text-green-300">
              {stats.activeTenders}
            </span>
          </div>
          <p className="text-green-700 dark:text-green-400 font-medium">Active tenders</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            <span className="text-3xl font-bold text-yellow-900 dark:text-yellow-300">
              {stats.pendingReviews}
            </span>
          </div>
          <p className="text-yellow-700 dark:text-yellow-400 font-medium">Under review</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-3xl font-bold text-blue-900 dark:text-blue-300">
              {stats.completedTenders}
            </span>
          </div>
          <p className="text-blue-700 dark:text-blue-400 font-medium">Completed</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-3xl font-bold text-purple-900 dark:text-purple-300">
              {stats.totalPartners}
            </span>
          </div>
          <p className="text-purple-700 dark:text-purple-400 font-medium">Partners</p>
        </div>
      </div>

      {/* Recent tenders */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recent tenders</h2>
          <button
            onClick={() => setCurrentPage('tenders-list')}
            className="text-petronas-primary hover:text-petronas-secondary font-medium transition-colors"
          >
            View all →
          </button>
        </div>

        <div className="space-y-4">
          {recentTenders.map((tender) => (
            <div
              key={tender.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {tender.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {tender.participants} participants
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    until {new Date(tender.deadline).toLocaleDateString('en-US')}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {getStatusBadge(tender.status)}
                <button className="px-4 py-2 text-petronas-primary hover:bg-petronas-light dark:hover:bg-petronas-dark rounded-lg transition-colors">
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetronasDashboard;
