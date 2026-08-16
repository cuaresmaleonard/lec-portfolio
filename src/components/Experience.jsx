import React from 'react';
import ascendionLogo from '../assets/ascendion_logo.jpg';
import pwsLogo from '../assets/pws_logo.jpg';
import manulifeLogo from '../assets/manulife_logo.webp';
import skycableLogo from '../assets/skycable_logo.svg';

const experiences = [
  {
    company: "Ascendion",
    logo: ascendionLogo,
    location: "Remote",
    title: "Senior Full Stack Developer",
    date: "Feb 2026 - Present",
    responsibilities: [
      <>Led backend optimization initiatives, implementing <strong>microservices and event-driven architectures</strong> to support high-throughput, real-time applications.</>,
      <>Designed and deployed cloud-native solutions on <strong>AWS and Azure</strong>, leveraging <strong>Kubernetes, Docker, and Terraform</strong> for infrastructure automation and CI/CD pipelines.</>,
      <>Developed robust full-stack and mobile applications leveraging <strong>Java Spring Boot</strong> and <strong>React Native</strong> to deliver seamless, cross-platform user experiences.</>,
      <>Collaborated with cross-functional teams to deliver data-driven features, integrating <strong>SQL and NoSQL databases</strong> (PostgreSQL, MongoDB, Redis) with optimized indexing and caching strategies.</>,
      <>Mentored junior developers, established coding standards, and improved onboarding documentation to streamline team productivity.</>,
      <>Spearheaded initiatives to integrate <strong>AI-powered monitoring and DevOps automation</strong>, reducing downtime and improving deployment efficiency.</>
    ]
  },
  {
    company: "People Work Smart Pty Ltd",
    logo: pwsLogo,
    location: "Remote",
    title: "Full Stack Developer",
    date: "Oct 2024 - Feb 2026",
    responsibilities: [
      <>Led feature development for <strong>React.js</strong> web platforms and built mobile applications from the ground up using <strong>React Native and Expo</strong>, enabling seamless cross-platform functionality.</>,
      <>Engineered robust RESTful APIs with <strong>Node.js, Express.js, and NestJS</strong>, leveraging modular architecture and dependency injection to deliver scalable, maintainable backend services.</>,
      <>Optimized server-side logic and operations, achieving reduction in response times and improving overall application performance.</>,
      <>Implemented secure authentication and authorization mechanisms using <strong>JWT and passkey authentication</strong>, reducing unauthorized access incidents.</>,
      <>Designed and optimized scalable data architectures using relational databases (<strong>MySQL, PostgreSQL</strong>) and NoSQL solutions (<strong>MongoDB, Cosmos DB, Redis</strong>).</>,
      <>Crafted responsive, accessible user interfaces using <strong>Tailwind CSS</strong> and modern UI libraries.</>
    ]
  },
  {
    company: "Manulife IT Delivery Center Asia Inc.",
    logo: manulifeLogo,
    location: "Quezon City, PH",
    title: "Associate Full Stack Software Engineer",
    date: "May 2021 - Oct 2024",
    responsibilities: [
      <>Led the development and maintenance of scalable front-end and back-end applications using <strong>React, Node.js</strong>, and modern web technologies.</>,
      <>Automated deployment workflows using <strong>Jenkins, GitHub Actions, and Terraform</strong> for provisioning and managing <strong>Azure</strong> cloud resources.</>,
      <>Implemented automated testing frameworks including <strong>Cypress</strong> and integrated with JIRA for test management, reducing manual testing efforts.</>,
      <>Provisioned and orchestrated cloud infrastructure on Azure, including Key Vault, databases, networking, APIM, and <strong>Kubernetes clusters (AKS)</strong>.</>,
      <>Provided on-call production support and proactively monitored server processes, executing corrective actions to maintain system health.</>
    ]
  },
  {
    company: "Skycable Corporation",
    logo: skycableLogo,
    location: "Quezon City, PH",
    title: "NOC Associate",
    date: "Sep 2017 - May 2021",
    responsibilities: [
      <>Designed, developed, and maintained internal web applications for server monitoring, troubleshooting, and report generation, using <strong>PHP and MySQL</strong> for backend logic and <strong>jQuery/AngularJS</strong> for front-end.</>,
      <>Developed and maintained secure, modular web applications using <strong>Laravel and CodeIgniter</strong>, integrating RESTful APIs and authentication flows.</>,
      <>Leveraged <strong>Laravel's ORM (Eloquent)</strong>, middleware, and queue systems to optimize performance and maintainability.</>,
      <>Engineered and optimized <strong>MySQL schemas and queries</strong> to support high-throughput applications, implementing indexing strategies and data normalization.</>
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Professional Experience
          <span className="absolute left-0 -bottom-2 w-1/2 h-1 bg-professional-500 rounded-md"></span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card dark:bg-gray-900 dark:border-gray-700 p-5 md:p-8 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-100 dark:border-gray-800 gap-4">
                <div className="flex items-center gap-5">
                  {exp.logo && (
                    <div className="w-20 h-20 rounded-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2 shadow-sm shrink-0">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="text-lg font-medium text-professional-600 dark:text-teal-300 mt-1">
                      {exp.company} <span className="text-gray-400 dark:text-gray-600 mx-2">&bull;</span> <span className="text-gray-500 dark:text-gray-400 text-base">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm whitespace-nowrap">
                  {exp.date}
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-professional-500 dark:text-teal-400 mr-3 mt-1.5">&bull;</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
