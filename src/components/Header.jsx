import React from "react";
import { FaCode, FaCloud, FaBolt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-professional-50 via-white to-professional-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 lg:py-32 overflow-hidden border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Ambient Decorative Background Lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-professional-200/40 dark:bg-professional-900/20 blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[650px] h-[650px] rounded-full bg-professional-100/50 dark:bg-teal-900/15 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left animate-fade-in-up">
          
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-professional-100/90 dark:bg-teal-950/80 border border-professional-200 dark:border-teal-700/60 text-xs font-semibold text-professional-800 dark:text-teal-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Senior Engineering Roles & Architecture Projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight drop-shadow-sm transition-colors">
            Leonardo Cuaresma
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-professional-600 dark:text-teal-300 mb-6 transition-colors">
            Senior Full Stack & Cloud Developer
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed font-normal transition-colors">
            Specialized in architecting cloud-native microservices, scalable distributed systems on AWS/Azure, and modern web & mobile applications with React, NestJS, and Kubernetes.
          </p>

          {/* Quick Competency Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mb-10">
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-start">
              <FaCloud className="text-professional-600 dark:text-teal-300 mb-1.5 text-lg" />
              <span className="text-xs text-gray-500 dark:text-gray-400">Architecture</span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Cloud Native (AWS/Azure)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-start">
              <FaCode className="text-professional-600 dark:text-teal-300 mb-1.5 text-lg" />
              <span className="text-xs text-gray-500 dark:text-gray-400">Full Stack</span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">React & NestJS</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-start">
              <FaBolt className="text-professional-600 dark:text-teal-300 mb-1.5 text-lg" />
              <span className="text-xs text-gray-500 dark:text-gray-400">DevOps</span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">K8s, Docker, CI/CD</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:leonardemmanuelcuaresma@gmail.com"
              className="inline-block text-center whitespace-nowrap w-full sm:w-auto bg-professional-600 hover:bg-professional-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-block text-center whitespace-nowrap w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
