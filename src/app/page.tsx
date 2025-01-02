import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-20">
        <div className="flex items-center gap-4">
          <div className="logo">
            <Image
              src="/images/solaire_icon.png"
              alt="solaire"
              width={50}
              height={50}
              priority
            />
          </div>
          <h1 className="text-2xl text-white">andersonBee</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="#work" className="nav-link">my work</Link></li>
            <li><Link href="#personal" className="nav-link">personal</Link></li>
            <li><Link href="#resume" className="nav-link">resumé</Link></li>
          </ul>
        </nav>
      </header>

      {/* Navbar Divider */}
      <div className="w-full h-[1px] bg-white/20 mb-10"></div>

      <div className="grid grid-cols-2 gap-20 relative">
        {/* Left Column */}
        <div>
          <h2 className="welcome-text text-white">welcome!</h2>
          <p className="text-white text-lg mb-8">
            I'm a software developer, passionate about creating things<br />
            that people want, and things that work :)
          </p>
          <p className="text-white italic mb-8">
            Currently studying IT / Computer Science / Network & Security / Enterprise Systems @ QUT
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="social-link">email</Link>
            <Link href="#" className="social-link">github</Link>
            <Link href="#" className="social-link">linkedin</Link>
            <Link href="#" className="social-link">spotify</Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20 transform -translate-x-1/2"></div>

        {/* Right Column */}
        <div>
          <h2 className="selected-work mb-8">SELECTED WORK</h2>
          <div className="project-grid">
            <Link href="#" className="project-link">Project 1</Link>
            <Link href="#" className="project-link">Project 2</Link>
            <Link href="#" className="project-link">Project 3</Link>
            <Link href="#" className="project-link">Project 4</Link>
          </div>
          <p className="text-white mt-4 text-sm">select a project :)</p>
        </div>
      </div>
    </div>
  )
}
