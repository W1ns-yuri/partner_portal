import React, { useState } from 'react';
import { Upload, FileText, Calendar, DollarSign, Building, Phone, Mail, User, CheckCircle } from 'lucide-react';

const TenderRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    tenderTitle: '',
    tenderCategory: '',
    proposedAmount: '',
    description: '',
    deadline: '',
    technicalDocuments: [],
    commercialDocuments: [],
  });


  const handleDownloadTemplate = (templateType) => {
    // Здесь будет логика скачивания шаблонов
    // В реальном приложении здесь будет API запрос

    const templates = {
      'technical-specification': {
        name: 'Техническая_спецификация.docx',
        url: '/templates/technical-specification.docx'
      },
      'technical-requirements': {
        name: 'Техническое_задание.pdf',
        url: '/templates/technical-requirements.pdf'
      },
      'quality-certificates': {
        name: 'Сертификаты_качества.pdf',
        url: '/templates/quality-certificates.pdf'
      },
      'commercial-offer': {
        name: 'Коммерческое_предложение.docx',
        url: '/templates/commercial-offer.docx'
      },
      'price-list': {
        name: 'Прайс_лист.xlsx',
        url: '/templates/price-list.xlsx'
      },
      'financial-report': {
        name: 'Финансовая_отчётность.pdf',
        url: '/templates/financial-report.pdf'
      },
      'bank-guarantee': {
        name: 'Банковская_гарантия.docx',
        url: '/templates/bank-guarantee.docx'
      }
    };

    const template = templates[templateType];

    // Временная заглушка - показываем уведомление
    console.log(`Скачивание шаблона: ${template.name}`);
    alert(`Скачивание шаблона: ${template.name}\n\nВ продакшене здесь будет реальное скачивание файла.`);

    // В реальном приложении используйте это:
    /*
    const link = document.createElement('a');
    link.href = template.url;
    link.download = template.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    */
  };



  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Строительство',
    'Поставка оборудования',
    'Консалтинговые услуги',
    'IT-услуги',
    'Транспортные услуги',
    'Техническое обслуживание',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);

    if (type === 'technical') {
      setFormData(prev => ({
        ...prev,
        technicalDocuments: [...prev.technicalDocuments, ...files]
      }));
    } else if (type === 'commercial') {
      setFormData(prev => ({
        ...prev,
        commercialDocuments: [...prev.commercialDocuments, ...files]
      }));
    }
  };


  const removeFile = (index, type) => {
    if (type === 'technical') {
      setFormData(prev => ({
        ...prev,
        technicalDocuments: prev.technicalDocuments.filter((_, i) => i !== index)
      }));
    } else if (type === 'commercial') {
      setFormData(prev => ({
        ...prev,
        commercialDocuments: prev.commercialDocuments.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tender submission:', formData);
    setSubmitted(true);

    // Сброс через 3 секунды
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        registrationNumber: '',
        contactPerson: '',
        email: '',
        phone: '',
        tenderTitle: '',
        tenderCategory: '',
        proposedAmount: '',
        description: '',
        deadline: '',
        technicalDocuments: [],
        commercialDocuments: [],
      });

    }, 3000);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Заявка отправлена!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ваша заявка на участие в тендере успешно зарегистрирована. Мы свяжемся с вами в ближайшее время.
          </p>
          <div className="inline-flex items-center space-x-2 text-petronas-primary">
            <div className="w-2 h-2 bg-petronas-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-petronas-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-petronas-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Подача заявки на тендер</h1>
          <p className="text-gray-600 dark:text-gray-400">Заполните форму для участия в тендерном процессе</p>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Информация о компании */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <div className="flex items-center mb-6">
              <Building className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Информация о компании</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Название компании *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                  placeholder="ООО 'Ваша компания'"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Регистрационный номер *
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                  placeholder="1234567890"
                />
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Контактная информация</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Контактное лицо *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Телефон *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                    placeholder="+993 XX XXX XXX"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Детали тендера */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Детали тендера</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Название тендера *
                </label>
                <input
                  type="text"
                  name="tenderTitle"
                  value={formData.tenderTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                  placeholder="Поставка оборудования для..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Категория *
                  </label>
                  <select
                    name="tenderCategory"
                    value={formData.tenderCategory}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                  >
                    <option value="">Выберите категорию</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Предлагаемая сумма *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="proposedAmount"
                      value={formData.proposedAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                      placeholder="1000000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Срок выполнения *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Описание предложения *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-petronas-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all resize-none"
                  placeholder="Подробное описание вашего предложения..."
                />
              </div>
            </div>
          </div>

          {/* Скачивание шаблонов документов */}
          <div className="bg-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 transition-colors border border-petronas-primary/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-petronas-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Шаблоны документов</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Скачайте, заполните и загрузите обратно</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Технические шаблоны */}
              <div className="space-y-4">
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-petronas-primary rounded-full mr-2"></span>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Технические документы</h3>
                </div>

                <div className="space-y-3">
                  {/* Техническая спецификация */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-petronas-primary dark:hover:border-petronas-primary transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-petronas-light dark:bg-petronas-dark rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-petronas-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Техническая спецификация</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: DOCX • Размер: 45 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('technical-specification')}
                        className="px-4 py-2 bg-petronas-primary text-white rounded-lg hover:bg-petronas-secondary transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>

                  {/* Техническое задание */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-petronas-primary dark:hover:border-petronas-primary transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-petronas-light dark:bg-petronas-dark rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-petronas-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Техническое задание</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: PDF • Размер: 120 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('technical-requirements')}
                        className="px-4 py-2 bg-petronas-primary text-white rounded-lg hover:bg-petronas-secondary transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>

                  {/* Сертификаты качества */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-petronas-primary dark:hover:border-petronas-primary transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-petronas-light dark:bg-petronas-dark rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-petronas-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Сертификаты качества</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: PDF • Размер: 85 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('quality-certificates')}
                        className="px-4 py-2 bg-petronas-primary text-white rounded-lg hover:bg-petronas-secondary transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Коммерческие шаблоны */}
              <div className="space-y-4">
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Коммерческие документы</h3>
                </div>

                <div className="space-y-3">
                  {/* Коммерческое предложение */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Коммерческое предложение</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: DOCX • Размер: 52 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('commercial-offer')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>

                  {/* Прайс-лист */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Прайс-лист</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: XLSX • Размер: 38 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('price-list')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>

                  {/* Финансовая отчётность */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Финансовая отчётность</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: PDF • Размер: 95 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('financial-report')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>

                  {/* Банковская гарантия */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Банковская гарантия</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Формат: DOCX • Размер: 42 KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDownloadTemplate('bank-guarantee')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Инструкция */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 text-sm mb-1">Инструкция по заполнению</h4>
                  <ol className="text-xs text-blue-800 dark:text-blue-400 space-y-1 list-decimal list-inside">
                    <li>Скачайте необходимые шаблоны документов</li>
                    <li>Заполните их согласно требованиям тендера</li>
                    <li>Сохраните заполненные документы</li>
                    <li>Загрузите их в соответствующие разделы ниже (Технические или Коммерческие)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>


          {/* Загрузка документов */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <div className="flex items-center mb-6">
              <Upload className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Документы</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Технические документы */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-petronas-primary rounded-full mr-2"></span>
                  Технические документы
                </h3>

                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-petronas-primary dark:hover:border-petronas-primary transition-colors">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                    Перетащите файлы сюда или нажмите для выбора
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    PDF, DOC, DOCX (макс. 10MB)
                  </p>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileUpload(e, 'technical')}
                    className="hidden"
                    id="technical-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="technical-upload"
                    className="inline-block px-4 py-2 bg-petronas-primary text-white text-sm rounded-lg cursor-pointer hover:bg-petronas-secondary transition-colors"
                  >
                    Выбрать файлы
                  </label>
                </div>

                {/* Список технических документов */}
                {formData.technicalDocuments && formData.technicalDocuments.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Загружено файлов: {formData.technicalDocuments.length}
                    </p>
                    {formData.technicalDocuments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <FileText className="w-4 h-4 text-petronas-primary flex-shrink-0" />
                          <span className="text-xs text-gray-700 dark:text-gray-300 truncate">{file.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500 flex-shrink-0">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index, 'technical')}
                          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors ml-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Коммерческие документы */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Коммерческие документы
                </h3>

                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                    Перетащите файлы сюда или нажмите для выбора
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    PDF, DOC, DOCX, XLS, XLSX (макс. 10MB)
                  </p>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileUpload(e, 'commercial')}
                    className="hidden"
                    id="commercial-upload"
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />
                  <label
                    htmlFor="commercial-upload"
                    className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
                  >
                    Выбрать файлы
                  </label>
                </div>

                {/* Список коммерческих документов */}
                {formData.commercialDocuments && formData.commercialDocuments.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Загружено файлов: {formData.commercialDocuments.length}
                    </p>
                    {formData.commercialDocuments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-xs text-gray-700 dark:text-gray-300 truncate">{file.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500 flex-shrink-0">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index, 'commercial')}
                          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors ml-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>


          {/* Кнопки действий */}
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              Сохранить черновик
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TenderRegistration;
