"use client";
import React, { useState } from 'react';
import { Github, Linkedin, Codepen, Twitter, ExternalLink, Folder, Moon, Sun } from 'lucide-react';


interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  externalLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, githubLink, externalLink }) => (
  <div className="bg-[#182A46] dark:bg-[#182A46] p-6 rounded-2xl shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <Folder className="text-teal-400" size={24} />
      <div>
        {githubLink && <a href={githubLink} className="mr-2"><Github className="text-slate-400 hover:text-teal-400" size={20} /></a>}
        <a href={externalLink}><ExternalLink className="text-slate-400 hover:text-teal-400" size={20} /></a>
      </div>
    </div>
    <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
    <p className="text-slate-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="text-sm text-slate-500">{tag}</span>
      ))}
    </div>
  </div>
);

const ProjectShowcase: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const projects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      tags: ["Algolia", "WordPress", "PHP"],
      externalLink: "#"
    },
    {
      title: "Time to Have More Fun",
      description: "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS", "Firebase"],
      githubLink: "#",
      externalLink: "#"
    },
    {
      title: "Building a Headless Mobile App CMS From Scratch",
      description: "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
      tags: ["Node", "Express", "Firebase", "Vue"],
      externalLink: "#"
    },
    {
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with Vue and Firebase.",
      tags: ["Vue", "Firebase"],
      githubLink: "#",
      externalLink: "#"
    },
    {
      title: "Apple Music Embeddable Web Player Widget",
      description: "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js. Read more about this project on 9to5Mac.",
      tags: ["MusicKit.js", "JS", "SCSS"],
      externalLink: "#"
    },
    {
      title: "Apple Music Facebook Messenger Integration",
      description: "Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app. Read more about it on The Verge.",
      tags: ["Ember", "JS", "SCSS"],
      externalLink: "#"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-slate-900 dark:bg-[#09182E] px-44 pb-44 text-slate-100 min-h-screen ">
        <nav className="flex justify-between items-center mb-12">
          <div className="text-teal-400 font-bold text-2xl">B</div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-slate-400 hover:text-teal-400">01. About</a>
            <a href="#experience" className="text-slate-400 hover:text-teal-400">02. Experience</a>
            <a href="#work" className="text-slate-400 hover:text-teal-400">03. Work</a>
            <a href="#contact" className="text-slate-400 hover:text-teal-400">04. Contact</a>
            <button className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-slate-900">Resume</button>
            <button onClick={toggleTheme} className="text-teal-400">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </nav>

        <h2 className="text-3xl font-bold text-slate-100 mb-2">Other Noteworthy Projects</h2>
        <a href="#" className="text-teal-400 hover:underline mb-8 inline-block">view the archive</a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="fixed left-8 bottom-0 flex flex-col items-center space-y-6">
          <a href="#" className="text-slate-400 hover:text-teal-400"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-teal-400"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-teal-400"><Codepen size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-teal-400"><Twitter size={20} /></a>
          <div className="h-24 w-px bg-slate-400"></div>
        </div>

        <div className="fixed right-8 bottom-0 flex flex-col items-center">
{/*           <a href="mailto:brittany.chiang@gmail.com"  className=" text-slate-400 hover:text-teal-400 vertical-text mb-24">brittany.chiang@gmail.com</a>
 */}          <div className="h-24 w-px bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;