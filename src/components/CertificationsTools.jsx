import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const tools = [
  { name: "React / Native", category: "Frontend & Mobile", Icon: FaReact },
  { name: "Node.js & NestJS", category: "Backend", Icon: FaNodeJs },
  { name: "Amazon Web Services", category: "Cloud Infrastructure", Icon: FaAws },
  { name: "Microsoft Azure", category: "Cloud Infrastructure", Icon: VscAzure },
  { name: "Docker", category: "Containerization", Icon: FaDocker },
  { name: "Kubernetes", category: "Orchestration", Icon: SiKubernetes }
];

const CertificationsTools = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block text-center w-full">
          Tools & Platforms
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-professional-500 rounded-md"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-5 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mb-5 bg-professional-100 dark:bg-professional-900/50 rounded-full flex items-center justify-center">
                <tool.Icon className="w-10 h-10 text-professional-600 dark:text-professional-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">{tool.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsTools;
