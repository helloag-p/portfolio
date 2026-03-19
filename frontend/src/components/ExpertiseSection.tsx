export function ExpertiseSection() {
  const skills = {
    "Programming Languages": ["C", "C++", "JavaScript", "TypeScript", "Python"],

    "Frontend Development": [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],

    "Backend Development": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "System Design (Basics)",
    ],

    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],

    "Core Concepts": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
    ],

    "Tools & Technologies": [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Render",
      "Vercel",
    ],
  };

  return (
    <section className="newspaper-container py-12 bg-muted">
      <h2 className="section-title">TECHNICAL EXPERTISE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="newspaper-card hover:shadow-lg transition-all duration-300"
          >
            <h3 className="article-title border-b pb-2 mb-4">
              {category}
            </h3>

            {/* 🔥 Badge style instead of bullets */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border rounded-full bg-newspaper-lightgray dark:bg-newspaper-gray/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="decorative-divider mt-8">
        <span className="text-xl font-heading px-4">★</span>
      </div>
    </section>
  );
}