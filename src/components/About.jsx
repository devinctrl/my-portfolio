export default function About() {
    return (
      <section id="about" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Me</h2>
        <p className="text-gray-300 max-w-2xl">
          I’m a junior at Rutgers studying computer science and data science. I love building projects that combine code and insight, and I'm especially into AI, backend dev, and making tools that help people.
        </p>
  
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/devinctrl" target="_blank" className="underline text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/devinjcrowley" target="_blank" className="underline text-blue-400">LinkedIn</a>
          <a href="/resume.pdfow t" download className="underline text-blue-400" id="resume">Download Resume</a>
        </div>
      </section>
    )
  }
  