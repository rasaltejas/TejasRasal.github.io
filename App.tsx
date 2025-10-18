import React from 'react';
import ProjectCard from './components/ProjectCard';
import SocialLink from './components/SocialLink';
import { GithubIcon, LinkedInIcon, MailIcon, TwitterIcon } from './constants';

const projects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'A smart code assistant that provides real-time suggestions and bug detection. Currently in development.',
  },
  {
    title: 'Machine Learning Model Visualizer',
    description: 'An interactive web tool to visualize and understand the inner workings of various ML models. Work in progress.',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This very website, built with React, TypeScript, and Tailwind CSS to showcase my skills and projects.',
  }
];

const socialLinks = [
  {
    href: 'https://linkedin.com/in/tejas-rasal-9a1202260',
    ariaLabel: 'LinkedIn profile',
    icon: <LinkedInIcon />,
  },
  {
    href: 'https://github.com/rasaltejas',
    ariaLabel: 'GitHub profile',
    icon: <GithubIcon />,
  },
  {
    href: 'https://twitter.com/TejasRasal11',
    ariaLabel: 'Twitter profile',
    icon: <TwitterIcon />,
  },
  {
    href: 'mailto:rasalt366@gmail.com',
    ariaLabel: 'Email address',
    icon: <MailIcon />,
  }
];

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <main className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Tejas Mukund Rasal</h1>
        </section>

        <section className="mb-12">
          <img 
            src=""C:\Users\tejas\Downloads\OneDrive\Desktop\PROJECT ENVIRONMENT\tejas portfolio\IMG-20250629-WA0042.jpg"" 
            alt="Tejas Rasal standing on a rock overlooking a lush green valley with overcast skies."
            className="w-full h-96 rounded-lg shadow-md object-cover"
          />
        </section>

        <section className="mb-12 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Studied Artificial intelligences and machine learning at Mumbai University.
          </p>
          <p>
            I love building with AI, and am fascinated by how machines and humans learn.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Projects</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} title={project.title} description={project.description} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a href="mailto:rasalt366@gmail.com" className="text-blue-600 hover:underline">
              rasalt366@gmail.com
            </a>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.href} href={link.href} ariaLabel={link.ariaLabel}>
                  {link.icon}
                </SocialLink>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
