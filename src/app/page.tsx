'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type ProjectKey = 'another receiptify' | 'macro' | 'SolSpear';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectKey | null>(null);

  // expanded project data structure
  interface Project {
    title: ProjectKey;
    description: string;
    imageUrl?: string;
  }

  const projects: Project[] = [
    {
      title: 'another receiptify',
      description: `A fun web app that generates Spotify receipts based on your listening history.Inspired by the simplicity of physical receipts, it showcases your favorite tracks, artists and genres in a creative, shareable format\
      \n\n users must be registered by yours truly, as i am currently awaiting approval from Spotify for the site to be publically available.
       please email me your email associated with your Spotify account if you'd like to be registered, so you can `,
      imageUrl: '/images/receipt-collage.png'
    },
    {
      title: 'macro',
      description: 'macro is a  cross-platform Macro Tracking mobile app that allows seamless macronutrient and calorie tracking with additional barcode integration. Built with React Native, SQLite for offline storage, and Jest for testing,\
      \n\n STILL IN DEVELOPMENT',
    },
    {
      title: 'SolSpear',
      description: 'SolSpear is a dynamic, real-time wallet activity tracker designed for Solana,\
       offering insights into token swaps and transfers across all DEXes and aggregators.\
        It decodes SPL Token Program instructions to provide DEX-agnostic transaction details,\
         ensuring compatibility with multi-hop routes like Jupiter. By leveraging WebSocket subscriptions,\
          it delivers instant updates without polling and dynamically resolves token metadata using on-chain methods.\
           SolSpear offers a scalable and efficient solution for monitoring wallet activities directly through your Discord server\
           \n\n STILL IN DEVELOPMENT',
    },
  ];

  return (
    <div className="main-container min-h-screen bg-[var(--background)] p-4 overflow-x-hidden">
      {/* Header */}
      <header className="header-container flex flex-col sm:flex-row justify-between items-center">
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
          <ul className="header-nav-list">
            <li><Link href="/" className="header-nav-link">my work</Link></li>
            <li><Link href="/personal" className="header-nav-link">personal</Link></li>
            <li><Link href="#resume" className="header-nav-link">resumé</Link></li>
          </ul>
        </nav>
      </header>

      {/* Navbar Divider */}
      <div className="header-divider w-full h-[1px] bg-white/20 mb-5"></div>

      <div className="content-grid grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 relative py-0">
        {/* Left Column */}
        <div className="content-left-section">
          <h2 className="hero-title">welcome!</h2>
          <p className="hero-description mb-8">
            i'm a software developer, passionate about creating things<br className="hidden sm:inline" />
            that people want, and things that work :)
          </p>
          <p className="hero-subtitle mb-8">
            studying IT / computer science / network & security / enterprise systems @ QUT
          </p>
          <div className="social-links-container flex flex-wrap gap-4 sm:gap-0 sm:space-x-6 justify-center sm:justify-start">
            <Link href="mailto:andersonjbee@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">email</Link>
            <Link href="https://github.com/andybeecompsci" className="social-link" target="_blank" rel="noopener noreferrer">github</Link>
            <Link href="https://www.linkedin.com/in/anderson-be3" className="social-link" target="_blank" rel="noopener noreferrer">linkedin</Link>
            <Link href="https://open.spotify.com/user/y74axlou6bkr879jlvxsyptdt?si=af1ff70ecb36432b" className="social-link" target="_blank" rel="noopener noreferrer">spotify</Link>
          </div>
        </div>

        {/* Vertical Divider - Hide on mobile */}
        <div className="content-divider hidden sm:block absolute left-1/2 top-0 w-[1px] h-[305%] bg-white/20 transform -translate-x-1/2"></div>

        {/* Right Column */}
        <div className="content-right-section mt-10 sm:mt-0">
          <h2 className="projects-title mb-8">selected work</h2>
          {/* Top project line */}
          <div className="project-line w-full h-[1px] bg-white/20 mb-4"></div>
          
          {/* Project titles row */}
          <div className="project-titles-grid grid grid-cols-4 gap-4 mb-4">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project.title)}
                className={`project-title text-left hover:text-main-1 ${
                  selectedProject === project.title ? 'text-main-1' : ''
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Project content area */}
          <div className="project-content">
            {/* Description area */}
            <div className="project-description-area space-y-1">
              <div className="description-line w-full h-[1px] bg-white/20"></div>
              
              {/* Image placeholder - only show when project selected */}
              {selectedProject && (
                <>
                  <h2 className="projects-title mb-4">
                    {selectedProject === 'another receiptify' ? (
                      <a 
                        href="https://another-receiptify.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-main-1 transition-colors"
                      >
                        {selectedProject}
                      </a>
                    ) : (
                      selectedProject
                    )}
                  </h2>
                  <div className="project-image-placeholder w-full h-48 border border-white/20 rounded flex items-center justify-center overflow-hidden">
                    {selectedProject === 'another receiptify' ? (
                      <Image
                        src="/images/receiptify-collage.png"
                        alt="another receiptify Collage"
                        width={1600}
                        height={384}
                        quality={100}
                        className="w-full h-full object-cover object-[center_-8%] scale-150"
                        priority
                      />
                    ) : (
                      '[photo coming soon]'
                    )}
                  </div>
                </>
              )}

              <p className="project-description text-white/60 max-h-[60vh] overflow-y-auto pr-2">
                {selectedProject 
                  ? <>
                      {projects.find(p => p.title === selectedProject)?.description}
                      {selectedProject === 'another receiptify' && (
                        <span className="text-main-2">
                          <a 
                            href="https://another-receiptify.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-main-2 hover:text-main-2 transition-colors"
                          >
                            try it out
                          </a>
                          {' :)'}
                        </span>
                      )}
                    </>
                  : 'select a project :)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
