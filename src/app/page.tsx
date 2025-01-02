'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type ProjectKey = 'project 1' | 'project 2' | 'project 3' | 'project 4';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectKey | null>(null);

  const projects: Record<ProjectKey, string> = {
    'project 1': 'description for project 1 goes here',
    'project 2': 'description for project 2 goes here',
    'project 3': 'description for project 3 goes here',
    'project 4': 'description for project 4 goes here',
  };

  return (
    <div className="main-container min-h-screen bg-[var(--background)] p-8">
      {/* Header */}
      <header className="header-container flex justify-between items-center mb-5">
        <div className="header-left-section flex items-center gap-4">
          <div className="header-logo-container">
            <Image
              src="/images/solaire_icon.png"
              alt="solaire"
              width={75}
              height={75}
              priority
            />
          </div>
          <h1 className="header-title">andersonBee</h1>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list flex space-x-8">
            <li><Link href="/" className="header-nav-link">my work</Link></li>
            <li><Link href="/personal" className="header-nav-link">personal</Link></li>
            <li><Link href="#resume" className="header-nav-link">resumé</Link></li>
          </ul>
        </nav>
      </header>

      {/* Navbar Divider */}
      <div className="header-divider w-full h-[1px] bg-white/20 mb-10"></div>

      <div className="content-grid grid grid-cols-2 gap-20 relative py-0">
        {/* Left Column */}
        <div className="content-left-section">
          <h2 className="hero-title">welcome!</h2>
          <p className="hero-description mb-8">
            i'm a software developer, passionate about creating things<br />
            that people want, and things that work :)
          </p>
          <p className="hero-subtitle mb-8">
            studying IT / computer science / network & security / enterprise systems @ QUT
          </p>
          <div className="social-links-container flex space-x-6">
            <Link href="#" className="social-link">email</Link>
            <Link href="#" className="social-link">github</Link>
            <Link href="#" className="social-link">linkedin</Link>
            <Link href="#" className="social-link">spotify</Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="content-divider absolute left-1/2 top-0 w-[1px] h-[265%] bg-white/20 transform -translate-x-1/2"></div>

        {/* Right Column */}
        <div className="content-right-section">
          <h2 className="projects-title mb-8">selected work</h2>
          {/* Top project line */}
          <div className="project-line w-full h-[1px] bg-white/20 mb-4"></div>
          
          <div className="project-grid">
            {Object.keys(projects).map((project) => (
              <button
                key={project}
                onClick={() => setSelectedProject(project as ProjectKey)}
                className={`project-item text-left ${selectedProject === project ? 'text-main-1' : ''}`}
              >
                {project}
              </button>
            ))}
          </div>

          {/* Bottom project line */}
          <div className="project-line w-full h-[1px] bg-white/20 mt-4 mb-4"></div>
          <p className="project-helper">
            {selectedProject ? projects[selectedProject] : 'select a project :)'}
          </p>
        </div>
      </div>
    </div>
  )
}
