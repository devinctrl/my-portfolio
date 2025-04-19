const projects = [
    {
      title: "Thera.py",
      description: "A wellness assistant powered by LLMs",
      link: "https://github.com/devinctrl/thera.py"
    },
    {
      title: "Last.fm Music Stats",
      description: "My personal music listening trends, clusters, and graphs",
      link: "https://github.com/devinctrl/lastfm-stats"
    },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <a
              key={proj.title}
              href={proj.link}
              target="_blank"
              className="bg-gray-700 p-4 rounded-xl hover:bg-gray-600 transition"
            >
              <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
              <p className="text-sm text-gray-300">{proj.description}</p>
            </a>
          ))}
        </div>
      </section>
    )
  }
  