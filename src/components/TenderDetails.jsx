import React, { useState } from 'react';
import { ArrowLeft, Upload, FileText, Calendar, DollarSign, Building, Phone, Mail, User, CheckCircle } from 'lucide-react';

const TenderDetails = ({ tender, onBack }) => {
  const [formData, setFormData] = useState({
    technicalDocuments: [],
    commercialDocuments: [],
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleDownloadTemplate = (templateType) => {
    const templates = {
      'technical-specification': {
        name: 'Technical_Specification.docx',
        url: '/templates/technical-specification.docx'
      },
      'technical-requirements': {
        name: 'Technical_Requirements.pdf',
        url: '/templates/technical-requirements.pdf'
      },
      'quality-certificates': {
        name: 'Quality_Certificates.pdf',
        url: '/templates/quality-certificates.pdf'
      },
      'commercial-offer': {
        name: 'Commercial_Offer.docx',
        url: '/templates/commercial-offer.docx'
      },
      'price-list': {
        name: 'Price_List.xlsx',
        url: '/templates/price-list.xlsx'
      },
      'financial-report': {
        name: 'Financial_Report.pdf',
        url: '/templates/financial-report.pdf'
      },
      'bank-guarantee': {
        name: 'Bank_Guarantee.docx',
        url: '/templates/bank-guarantee.docx'
      }
    };

    const template = templates[templateType];
    console.log(`Downloading template: ${template.name}`);
    alert(`Downloading template: ${template.name}\n\nIn production, there will be real file download here.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tender submission:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      onBack();
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Application sent!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Your tender participation application has been successfully registered. We will contact you soon.
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
      <div className="w-full mx-auto">
        {/* Кнопка назад */}
        <button
          onClick={onBack}
          className="flex items-center text-petronas-primary hover:text-petronas-secondary mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to tenders list</span>
        </button>

        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {tender?.title || 'Tender details'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Tender participation application submission</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Информация о тендере */}
          <div className="bg-gradient-to-br from-petronas-light to-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 border border-petronas-primary/20">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Tender information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <FileText className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Category</span>
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {tender?.category || 'Not specified'}
                </p>
              </div>

              {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Budget</span>
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  ${tender?.budget || '0'}
                </p>
              </div> */}

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Deadline</span>
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {tender?.deadline ? new Date(tender.deadline).toLocaleDateString('en-US') : 'Not specified'}
                </p>
              </div>
            </div>

            {tender?.description && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Description:</h3>
                <p className="text-gray-600 dark:text-gray-400">{tender.description}</p>
              </div>
            )}
          </div>

          {/* Скачивание шаблонов документов */}
          <div className="bg-gradient-to-br from-petronas-light to-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 transition-colors border border-petronas-primary/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-petronas-primary rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Document templates</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Download, fill out and upload back</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Технические шаблоны */}
              <div className="space-y-4">
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-petronas-primary rounded-full mr-2"></span>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Technical documents</h3>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Technical specification</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: DOCX • Size: 45 KB</p>
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
                        <span>Download</span>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Technical requirements</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: PDF • Size: 120 KB</p>
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
                        <span>Download</span>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Quality certificates</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: PDF • Size: 85 KB</p>
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
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Коммерческие шаблоны */}
              <div className="space-y-4">
                <div className="flex items-center mb-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Commercial documents</h3>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Commercial offer</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: DOCX • Size: 52 KB</p>
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
                        <span>Download</span>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Price list</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: XLSX • Size: 38 KB</p>
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
                        <span>Download</span>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Financial report</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: PDF • Size: 95 KB</p>
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
                        <span>Download</span>
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
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Bank guarantee</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Format: DOCX • Size: 42 KB</p>
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
                        <span>Download</span>
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
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 text-sm mb-1">Filling instructions</h4>
                  <ol className="text-xs text-blue-800 dark:text-blue-400 space-y-1 list-decimal list-inside">
                    <li>Download the necessary document templates</li>
                    <li>Fill them out according to tender requirements</li>
                    <li>Save the filled documents</li>
                    <li>Upload them to the appropriate sections below (Technical or Commercial)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Загрузка документов */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">
            <div className="flex items-center mb-6">
              <Upload className="w-6 h-6 text-petronas-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Document upload</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Технические документы */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-petronas-primary rounded-full mr-2"></span>
                  Technical documents
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-petronas-primary dark:hover:border-petronas-primary transition-colors">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                    Drag files here or click to select
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    PDF, DOC, DOCX (max. 10MB)
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
                    Select files
                  </label>
                </div>

                {/* Список технических документов */}
                {formData.technicalDocuments && formData.technicalDocuments.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Files uploaded: {formData.technicalDocuments.length}
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
                  Commercial documents
                </h3>
                
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                    Drag files here or click to select
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    PDF, DOC, DOCX, XLS, XLSX (max. 10MB)
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
                    Select files
                  </label>
                </div>

                {/* Список коммерческих документов */}
                {formData.commercialDocuments && formData.commercialDocuments.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Files uploaded: {formData.commercialDocuments.length}
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
              onClick={onBack}
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-petronas-primary to-petronas-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Send application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TenderDetails;
