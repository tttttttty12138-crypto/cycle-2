
import React, { useState } from 'react';
import { BookOpen, FileText, Upload, Filter, Star, AlertCircle, Search } from 'lucide-react';

const Knowledge: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);

  const MOCK_DOCS = [
    { id: '1', title: 'ECON1001 Final Exam Prep 2023', faculty: 'Business', major: 'Economics', rating: 4.9, price: 20, uploader: 'John.H' },
    { id: '2', title: 'Data Structures Lab Notes (Java)', faculty: 'Engineering', major: 'CS', rating: 4.7, price: 15, uploader: 'Sarah.L' },
    { id: '3', title: 'Contemporary HK Politics Essay Sample', faculty: 'Social Sciences', major: 'Politics', rating: 4.5, price: 30, uploader: 'Wong.Y' },
    { id: '4', title: 'Architecture Studio 1 Project Report', faculty: 'Design', major: 'Arch', rating: 4.8, price: 25, uploader: 'Li.Z' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-navy-900 mb-2 flex items-center">
            虚拟知识共享库 <span className="ml-3 bg-vibrant-orange/10 text-vibrant-orange text-xs px-2 py-1 rounded-full border border-vibrant-orange/20 font-bold uppercase tracking-wider">Academic Circle</span>
          </h1>
          <p className="text-gray-500">上传高质量笔记、历年真题，让知识在校园循环，赚取“豆豆”积分。</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button 
            onClick={() => setIsUploading(true)}
            className="flex-1 md:flex-none bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center shadow-lg transition-all"
          >
            <Upload className="mr-2 w-5 h-5" /> 上传资料
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-navy-900 mb-4 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-vibrant-orange" /> 学科分类
            </h3>
            <div className="space-y-2">
              {['商学院', '工程学院', '社会科学', '艺术与人文', '理学院'].map((cat) => (
                <label key={cat} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded text-vibrant-orange focus:ring-vibrant-orange border-gray-300" />
                  <span className="ml-3 text-sm text-gray-600 group-hover:text-navy-900 transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-vibrant-orange/10 p-5 rounded-2xl border border-vibrant-orange/20">
            <h4 className="flex items-center text-sm font-bold text-navy-900 mb-2">
              <AlertCircle className="w-4 h-4 mr-2" /> 版权保护说明
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              所有上传资料经过初步审核。预览阶段采用模糊化处理，购买后可解锁高清无水印原件。请遵守学术道德规范。
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="relative mb-8">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
             <input 
              type="text" 
              placeholder="搜索课程代码、关键词或文件名..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm outline-none focus:ring-2 focus:ring-navy-900 transition-all"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_DOCS.map((doc) => (
              <div key={doc.id} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-navy-900" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-navy-900 leading-snug">{doc.title}</h4>
                    <span className="text-vibrant-orange font-bold text-sm ml-2">
                      {doc.price} <span className="text-[10px]">豆豆</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span>{doc.faculty}</span>
                    <span>•</span>
                    <span>{doc.major}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-xs font-bold text-gray-700">{doc.rating}</span>
                      <span className="text-[10px] text-gray-400 ml-2">by {doc.uploader}</span>
                    </div>
                    <button className="text-navy-900 font-bold text-xs hover:text-vibrant-orange transition-colors">查看详情</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
