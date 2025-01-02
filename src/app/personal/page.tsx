'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type InterestKey = 'gaming' | 'music' | 'art' | 'travel';

export default function Personal() {
  const [selectedInterest, setSelectedInterest] = useState<InterestKey | null>(null);

  const interests: Record<InterestKey, string> = {
    'gaming': 'souls and tactifps 5v5',
    'music': 'hiphop',
    'art': 'manga',
    'travel': 'mmm',
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
          <h2 className="hero-title">personal!</h2>
          <p className="hero-description mb-8">
            this is where i share my personal interests<br />
            and things i'm passionate about!
          </p>
          <p className="hero-subtitle mb-8">
            gaming, music, art, and more...
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
          <p className="project-helper">
            {selectedInterest ? interests[selectedInterest] : 'select an interest :)'}
          </p>
        </div>
      </div>
    </div>
  )
} 