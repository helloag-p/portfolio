import { ExternalLink } from "lucide-react";

export function CodingProfilesSection() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "parv12_ag",
      stats: "1000+ Problems Solved",
      extra: "Strong in DSA & Problem Solving",
      url: "https://leetcode.com/u/parv12_ag/",
    },
    {
      platform: "CodeChef",
      username: "hello_48",
      stats: "4★ Rating (Max 1811)",
      extra: "Global Competitive Programmer",
      url: "https://www.codechef.com/users/hello_48",
    },
    {
      platform: "Codeforces",
      username: "parvag34_",
      stats: "Pupil (Max 1338)",
      extra: "Active Contest Participant",
      url: "https://codeforces.com/profile/parvag34_",
    },
  ];

  return (
    <section id="profiles" className="newspaper-container py-12">
      <h2 className="section-title">COMPETITIVE PROGRAMMING</h2>

      {/* 🔥 Highlight Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10 text-center">
        <div>
          <h3 className="text-2xl font-bold">1000+</h3>
          <p className="text-sm text-muted-foreground">Problems Solved</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">4★</h3>
          <p className="text-sm text-muted-foreground">CodeChef Rating</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">1338</h3>
          <p className="text-sm text-muted-foreground">Codeforces Max</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.platform}
            className="newspaper-card flex flex-col hover:shadow-lg transition-all duration-300"
          >
            <h3 className="article-title">{profile.platform}</h3>

            <div className="flex-grow space-y-1">
              <p className="font-semibold">{profile.username}</p>

              <p className="text-sm font-medium text-green-600">
                {profile.stats}
              </p>

              <p className="text-xs text-muted-foreground">
                {profile.extra}
              </p>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-newspaper-sepia hover:underline mt-auto font-medium"
            >
              Visit Profile
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}