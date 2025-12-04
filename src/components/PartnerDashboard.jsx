import React, { useState } from 'react';
import { FileText, Calendar, DollarSign, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const PartnerDashboard = ({ onTenderSelect }) => {
  // Mock tender data (in real app will be from API)
  const [tenders] = useState([
    {
      id: 1,
      title: 'Supply of oilfield equipment',
      category: 'Equipment Supply',
      deadline: '2025-12-15',
      budget: '5,000,000',
      status: 'pending', // pending, accepted, declined
      invitedDate: '2025-11-10',
      description: 'High-quality equipment supply required for oil production',
    },
    {
      id: 2,
      title: 'Construction of warehouse complex',
      category: 'Construction',
      deadline: '2025-11-25',
      budget: '12,000,000',
      status: 'pending',
      invitedDate: '2025-11-15',
      description: 'Construction of modern warehouse complex with area of 5000 sq.m',
    },
    {
      id: 3,
      title: 'Equipment maintenance',
      category: 'Technical maintenance',
      deadline: '2025-12-01',
      budget: '2,500,000',
      status: 'accepted',
      invitedDate: '2025-11-01',
      description: 'Regular maintenance of production equipment',
    },
  ]);

  const getStatusBadge = (status) => {
    const badges = {
      pending: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-800 dark:text-yellow-300',
        icon: Clock,
        label: 'Waiting for response',
      },
      accepted: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-800 dark:text-green-300',
        icon: CheckCircle,
        label: 'Accepted',
      },
      declined: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-800 dark:text-red-300',
        icon: AlertCircle,
        label: 'Declined',
      },
    };

    const badge = badges[status];
    const Icon = badge.icon;

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        <Icon className="w-3 h-3 mr-1" />
        {badge.label}
      </span>
    );
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { text: 'Overdue', color: 'text-red-600 dark:text-red-400' };
    if (diffDays === 0) return { text: 'Today', color: 'text-orange-600 dark:text-orange-400' };
    if (diffDays <= 3) return { text: `${diffDays} days`, color: 'text-orange-600 dark:text-orange-400' };
    return { text: `${diffDays} days`, color: 'text-gray-600 dark:text-gray-400' };
  };

  const pendingTenders = tenders.filter(t => t.status === 'pending');
  const activeTenders = tenders.filter(t => t.status === 'accepted');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Tender invitations
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your invitations and active tenders
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium mb-1">Waiting for response</p>
              <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-300">{pendingTenders.length}</p>
            </div>
            <Clock className="w-12 h-12 text-yellow-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 dark:text-green-400 text-sm font-medium mb-1">Active tenders</p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-300">{activeTenders.length}</p>
            </div>
            <CheckCircle className="w-12 h-12 text-green-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-petronas-light to-petronas-secondary/20 dark:from-petronas-dark/20 dark:to-petronas-primary/20 rounded-xl p-6 border border-petronas-primary/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-petronas-dark dark:text-petronas-secondary text-sm font-medium mb-1">Total tenders</p>
              <p className="text-3xl font-bold text-petronas-dark dark:text-petronas-primary">{tenders.length}</p>
            </div>
            <FileText className="w-12 h-12 text-petronas-primary opacity-50" />
          </div>
        </div>
      </div>

      {/* Pending invitations */}
      {pendingTenders.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
            Require your attention
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pendingTenders.map((tender) => {
              const daysLeft = getDaysLeft(tender.deadline);
              return (
                <div
                  key={tender.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {tender.title}
                        </h3>
                        {getStatusBadge(tender.status)}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {tender.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FileText className="w-4 h-4 mr-1" />
                          {tender.category}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          Deadline: {new Date(tender.deadline).toLocaleDateString('en-US')}
                          <span className={`ml-2 font-semibold ${daysLeft.color}`}>
                            ({daysLeft.text})
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <DollarSign className="w-4 h-4 mr-1" />
                          Budget: ${tender.budget}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onTenderSelect(tender)}
                      className="px-6 py-2 bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Participate
                    </button>
                    <button
                      className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => onTenderSelect(tender)}
                      className="px-6 py-2 text-petronas-primary hover:text-petronas-secondary font-semibold transition-colors"
                    >
                      More details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}


      {/* Active tenders */}
      {activeTenders.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            Active tenders
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeTenders.map((tender) => {
              const daysLeft = getDaysLeft(tender.deadline);
              return (
                <div
                  key={tender.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => onTenderSelect(tender)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {tender.title}
                    </h3>
                    {getStatusBadge(tender.status)}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {tender.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      Deadline: {new Date(tender.deadline).toLocaleDateString('en-US')}
                      <span className={`ml-2 font-semibold ${daysLeft.color}`}>
                        ({daysLeft.text})
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Budget: ${tender.budget}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerDashboard;
