import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="main-container min-h-screen bg-[var(--background)] p-8">
      {/* Header */}
      <header className="header-container flex justify-between items-center mb-5">
        <div className="header-left-section flex items-center gap-4">
          <div className="header-logo-container">
            <Image
              src="/images/solaire_icon.png"
              alt="solaire"
              width={50}
              height={50}
              priority
            />
          </div>
          <h1 className="header-title">andersonBee</h1>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list flex space-x-8">
            <li><Link href="#work" className="header-nav-link">my work</Link></li>
            <li><Link href="#personal" className="header-nav-link">personal</Link></li>
            <li><Link href="#resume" className="header-nav-link">resumé</Link></li>
          </ul>
        </nav>
      </header>

      {/* Navbar Divider */}
      <div className="header-divider w-full h-[1px] bg-white/20 mb-10"></div>

      <div className="content-grid grid grid-cols-2 gap-20 relative py-10">
        {/* Left Column */}
        <div className="content-left-section">
          <h2 className="hero-title">welcome!</h2>
          <p className="hero-description mb-8">
            I'm a software developer, passionate about creating things<br />
            that people want, and things that work :)
          </p>
          <p className="hero-subtitle mb-8">
            Currently studying IT / Computer Science / Network & Security / Enterprise Systems @ QUT
          </p>
          <div className="social-links-container flex space-x-6">
            <Link href="#" className="social-link">email</Link>
            <Link href="#" className="social-link">github</Link>
            <Link href="#" className="social-link">linkedin</Link>
            <Link href="#" className="social-link">spotify</Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="content-divider absolute left-1/2 top-0 w-[1px] h-[175%] bg-white/20 transform -translate-x-1/2"></div>

        {/* Right Column */}
        <div className="content-right-section">
          <h2 className="projects-title mb-8">SELECTED WORK</h2>
          <div className="project-grid">
            <Link href="#" className="project-item">Project 1</Link>
            <Link href="#" className="project-item">Project 2</Link>
            <Link href="#" className="project-item">Project 3</Link>
            <Link href="#" className="project-item">Project 4</Link>
          </div>
          <p className="project-helper mt-4">select a project :)</p>
        </div>
      </div>
    </div>
  )
}
