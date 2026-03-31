import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ResumeSection() {
  const handleDownload = async () => {
    const toastId = toast.loading("Downloading resume...");

    try {
      const response = await fetch("/Parvsre.pdf"); // ✅ fixed
      if (!response.ok) throw new Error("Failed to fetch resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Parv_Agarwal_Resume.pdf"; // ✅ fixed name
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Download complete", { id: toastId });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      toast.error("Failed to download resume", { id: toastId });
    }
  };

  return (
    <section id="resume" className="newspaper-container py-12 bg-muted">
      <h2 className="section-title">CAREER OPPORTUNITIES</h2>

      <div className="newspaper-border p-6 md:p-8 bg-newspaper-white dark:bg-newspaper-black">
        
        <div className="text-center mb-6">
          <h3 className="article-title text-2xl md:text-3xl">
            SOFTWARE DEVELOPMENT ENGINEER (SDE)
          </h3>
          <p className="text-lg font-medium">
            Full Stack Developer • Competitive Programmer • Open to Opportunities
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-heading font-bold mb-2">HIGHLIGHTS:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Built scalable full-stack applications using React, Node.js,
              Express, and MongoDB
            </li>
            <li>
              Solved 1000+ DSA problems across LeetCode, CodeChef, and Codeforces
            </li>
            <li>
              Experience in backend systems handling high request loads and
              real-time communication
            </li>
            <li>
              Strong foundation in Data Structures, Algorithms, and System Design
            </li>
            <li>
              Developed and deployed production-ready applications with secure
              authentication and API integration
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="group"
            onClick={handleDownload}
          >
            <Download size={16} className="mr-2" />
            Download Resume (PDF)
          </Button>
        </div>

      </div>
    </section>
  );
}