import React from 'react';

const projects = [
  {
    title: "Cloud-Native Microservices Platform",
    company: "Ascendion",
    description: "Architected and deployed a highly scalable event-driven microservices ecosystem using AWS and Azure. Orchestrated containerized deployments via Kubernetes and Docker, significantly improving system throughput and deployment efficiency.",
    technologies: ["Node.js", "Kubernetes", "AWS", "Azure", "MongoDB"],
  },
  {
    title: "Cross-Platform Startup Application",
    company: "People Work Smart Pty Ltd",
    description: "Led the end-to-end development of a robust mobile and web platform. Built native mobile experiences using React Native and Expo, powered by a high-performance NestJS backend with JWT authentication and PostgreSQL.",
    technologies: ["React Native", "React.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Enterprise Test Automation & CI/CD",
    company: "Manulife IT Delivery Center",
    description: "Automated critical deployment pipelines and testing workflows. Leveraged Terraform to provision Azure infrastructure, implemented Cypress testing integrated with JIRA, and secured secrets management via Azure Key Vault.",
    technologies: ["Terraform", "Cypress", "Jenkins", "Azure AKS"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Key Projects
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-professional-500 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card dark:bg-gray-900 dark:border-gray-700 p-4 sm:p-5 md:p-6 flex flex-col h-full hover:-translate-y-2">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-professional-600 dark:text-professional-400 font-medium text-sm">{project.company}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 flex-grow mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-professional-50 dark:bg-gray-800 text-professional-700 dark:text-professional-300 text-xs font-semibold rounded border border-professional-100 dark:border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
