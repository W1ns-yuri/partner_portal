import React, { useState } from 'react';
import { ArrowLeft, Calendar, DollarSign, FileText, Users, Save } from 'lucide-react';

const CreateTender = ({ onBack }) => {
  const [tenderData, setTenderData] = useState({
    title: '',
    category: '',
    budget: '',
    deadline: '',
    description: '',
    requirements: '',
    selectedPartners: [],
  });

  const categories = [
    'Construction',
    'Equipment Supply',
    'Consulting Services',
    'IT Services',
    'Transportation Services',
    'Technical Maintenance',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTenderData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating tender:', tenderData);
    alert('Tender created successfully!');
    onBack();
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <button
          onClick={onBack}
          className="flex items-center text-petronas-primary hover:text-petronas-secondary mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to dashboard</span>
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Creating a new tender
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fill in the tender information and select partners for participation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Основная информация */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Basic information</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tender title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={tenderData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="For example: Supply of equipment for oil production"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={tenderData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget (USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="budget"
                      value={tenderData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="1000000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Deadline *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="deadline"
                      value={tenderData.deadline}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tender description *
                </label>
                <textarea
                  name="description"
                  value={tenderData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none"
                  placeholder="Detailed description of tender requirements and conditions..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technical requirements
                </label>
                <textarea
                  name="requirements"
                  value={tenderData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none"
                  placeholder="Specific technical requirements for participants..."
                />
              </div>
            </div>
          </div>

          {/* Выбор партнёров */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Invite partners</h2>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 dark:text-blue-400">
                Select partners who will receive an invitation to participate in the tender
              </p>
            </div>

            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Partner selection function will be added</p>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Create tender</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTender;
