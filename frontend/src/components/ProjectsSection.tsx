import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Uber Clone (Real-Time Ride System)",
      description:
        "Developed a real-time ride-hailing platform with live location tracking using Socket.IO. Optimized communication to reduce latency by ~30ms and handled 50+ concurrent users with efficient bidirectional data flow.",
      imageUrl: "/uber.png",
      tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
      codeUrl: "https://github.com/helloag-p/UBER", // update if needed
      demoUrl: "",
    },
    {
      id: 2,
      title: "CDC Website (Event Management System)",
      description:
        "Built and scaled backend services for a production website handling 500+ event registrations. Designed REST APIs with validation and optimized concurrent request handling for peak traffic stability.",
      imageUrl: "/cdc.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://cdc.mmmut.org",
    },
    {
      id: 3,
      title: "E-Commerce Platform (Internship Project)",
      description:
        "Developed a production-grade MERN e-commerce application serving 30K–40K users. Built scalable backend modules processing 1000+ API requests/day with secure authentication and role-based access control.",
      imageUrl: "/ecommerce.png",
      tags: ["MERN", "JWT", "REST APIs", "MongoDB"],
      codeUrl: "", // optional (if private, leave empty)
      demoUrl: "",
    }
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   description:
    //     "Designed and deployed a modern developer portfolio with responsive UI, dark mode, and optimized performance. Showcases projects, coding profiles, and technical expertise.",
    //   imageUrl: "/rgen.png",
    //   tags: ["React", "Tailwind", "TypeScript"],
    //   codeUrl: "https://github.com/helloag-p/portfolio",
    //   demoUrl: "",
    // },
  ];

  return (
    <section id="projects" className="newspaper-container py-12 min-h-screen">
      <h2 className="section-title">FEATURED PROJECTS</h2>

      <p className="text-center text-muted-foreground mb-10">
        Real-world systems focused on scalability, performance, and backend engineering
      </p>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`newspaper-border p-4 md:p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-lg ${
              index % 2 !== 0 ? "bg-muted" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="shadow-md border w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="article-title">{project.title}</h3>
                <p className="article-lead mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-newspaper-lightgray dark:bg-newspaper-gray/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group">
                      <Github size={16} className="mr-2" />
                      Code
                      <ArrowRight
                        size={14}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                      />
                    </Button>
                  </a>
                )}

                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                      <ArrowRight
                        size={14}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                      />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}