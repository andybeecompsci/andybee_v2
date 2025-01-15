'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type InterestKey = 'coming soon' | 'coming sooon' | 'coming soooon' | 'coming sooooon';

export default function Personal() {
  const [selectedInterest, setSelectedInterest] = useState<InterestKey | null>(null);

  const interests: Record<InterestKey, string> = {
    'coming soon': 'coming soon',
    'coming sooon': 'coming soon',
    'coming soooon': 'coming soon',
    'coming sooooon': 'coming soon',
  };

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
          <h2 className="hero-title">personal!</h2>
          <p className="hero-description mb-8 text-sm sm:text-base">
            this is where i share my personal interests<br className="hidden sm:inline" />
            and things i'm passionate about!
          </p>
          <p className="hero-subtitle mb-8 text-sm sm:text-base">
            gaming, music, art, and more...
          </p>
          <div className="social-links-container flex flex-wrap gap-4 sm:gap-0 sm:space-x-6 justify-center sm:justify-start">
            <Link href="mailto:andersonjbee@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">email</Link>
            <Link href="https://github.com/andybeecompsci" className="social-link" target="_blank" rel="noopener noreferrer">github</Link>
            <Link href="https://www.linkedin.com/in/anderson-be3" className="social-link" target="_blank" rel="noopener noreferrer">linkedin</Link>
            <Link href="https://open.spotify.com/user/y74axlou6bkr879jlvxsyptdt?si=af1ff70ecb36432b" className="social-link" target="_blank" rel="noopener noreferrer">spotify</Link>
          </div>
        </div>

        {/* Vertical Divider - Hide on mobile */}
        <div className="content-divider hidden sm:block absolute left-1/2 top-0 w-[1px] h-[265%] bg-white/20 transform -translate-x-1/2"></div>

        {/* Right Column */}
        <div className="content-right-section mt-10 sm:mt-0">
          <h2 className="projects-title mb-8">interests</h2>
          {/* Top project line */}
          <div className="project-line w-full h-[1px] bg-white/20 mb-4"></div>
          
          <div className="project-grid">
            {Object.keys(interests).map((interest) => (
              <button
                key={interest}
                onClick={() => setSelectedInterest(interest as InterestKey)}
                className={`project-item text-left ${selectedInterest === interest ? 'text-main-1' : ''}`}
              >
                {interest}
              </button>
            ))}
          </div>

          {/* Bottom project line */}
          <div className="project-line w-full h-[1px] bg-white/20 mt-4 mb-4"></div>
          <p className="project-helper max-h-[60vh] overflow-y-auto pr-2">
            {selectedInterest ? interests[selectedInterest] : 'select an interest :)'}
          </p>
        </div>
      </div>
    </div>
  )
} 