export function AboutSection() {
  return (
    <section id="about" className="newspaper-container py-12">
      <h2 className="section-title">ABOUT THE DEVELOPER</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT */}
        <div className="md:col-span-8 newspaper-column">
          <article className="prose prose-lg max-w-none">
            <h3 className="article-title">
              Building Scalable Systems & Solving Complex Problems
            </h3>

            <p className="article-lead">
              B.Tech CSE student with strong expertise in full-stack development,
              system design, and competitive programming.
            </p>

            <p className="mb-4">
              Parv Agarwal, a Computer Science undergraduate at MMMUT
              Gorakhpur, is a passionate developer focused on building scalable,
              high-performance applications. With hands-on experience in the
              MERN stack and modern web technologies, he has developed and
              deployed production-grade systems handling thousands of users.
            </p>

            <p className="mb-4">
              He has completed a full-stack developer internship where he built
              and optimized backend systems processing 1000+ API requests daily
              and contributed to applications serving 30K–40K users. His work
              emphasizes clean architecture, performance optimization, and
              secure system design.
            </p>

            <p className="mb-4">
              Alongside development, Parv is an active competitive programmer
              with 1000+ problems solved across platforms. He holds a 4★ rating
              on CodeChef and has consistently performed in global coding
              contests, strengthening his problem-solving and algorithmic
              thinking.
            </p>

            <p>
              With a deep interest in backend engineering, distributed systems,
              and optimization, he aims to build impactful, scalable solutions
              and contribute to high-growth tech environments.
            </p>
          </article>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-4">
          <div className="newspaper-card h-full flex flex-col items-center text-center p-4">
            <h3 className="text-xl font-heading font-bold mb-4 border-b pb-2 w-full">
              DEVELOPER PROFILE
            </h3>

            {/* Image */}
            <img
              src="/picture5.jpg"
              alt="Parv Agarwal"
              className="w-32 h-32 rounded-full object-cover mb-4 border shadow"
            />

            <div className="space-y-4 flex-grow text-left w-full">
              
              <div>
                <h4 className="font-bold">Name:</h4>
                <p>Parv Agarwal</p>
              </div>

              <div>
                <h4 className="font-bold">Education:</h4>
                <p>
                  B.Tech in Computer Science (2023–2027) <br />
                  MMMUT Gorakhpur (CGPA: 8.88)
                </p>
              </div>

              <div>
                <h4 className="font-bold">Tech Stack:</h4>
                <p>
                  MERN Stack, Next.js, Node.js, Express.js, MongoDB,
                  PostgreSQL, Redis
                </p>
              </div>

              <div>
                <h4 className="font-bold">Achievements:</h4>
                <p>
                  CodeChef 4★ (1811) <br />
                  Codeforces Pupil <br />
                  1000+ DSA Problems Solved
                </p>
              </div>

              <div>
                <h4 className="font-bold">Experience:</h4>
                <p>
                  Full Stack Developer Intern <br />
                  (Built systems serving 30K–40K users)
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}