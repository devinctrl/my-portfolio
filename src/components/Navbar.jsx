export default function Navbar() {
    return (
      <nav className="bg-gray-800 sticky top-0 z-50 px-6 py-4 flex justify-between shadow">
        <h1 className="font-bold text-lg">Devin Crowley</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#resume" className="hover:text-yellow-400">Resume</a>
        </div>
      </nav>
    )
  }
  