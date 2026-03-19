import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // ✅ Smooth scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error(data.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

return (
  <section id="contact" className="newspaper-container py-12">
    <h2 className="section-title">CONTACT ME</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Panel */}
      <div>
        <h3 className="article-title">LET’S CONNECT</h3>
        <p className="mb-6">
          I’m open to internships, collaborations, and exciting opportunities.
          Feel free to reach out — I’ll get back to you as soon as possible.
        </p>

        <div className="space-y-4">
          
          <div className="flex items-center">
            <Mail size={20} className="mr-3" />
            <a
              href="mailto:parvagarwal04@gmail.com"
              className="hover:underline"
            >
              parvagarwal04@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <Github size={20} className="mr-3" />
            <a
              href="https://github.com/helloag-p"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/helloag-p
            </a>
          </div>

          <div className="flex items-center">
            <Linkedin size={20} className="mr-3" />
            <a
              href="https://linkedin.com/in/parv-agarwal-09b042215"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/parv-agarwal
            </a>
          </div>

        </div>
      </div>

      {/* Right Panel */}
      <form
        onSubmit={handleSubmit}
        className="newspaper-card hover:shadow-lg transition-all duration-300"
      >
        <h3 className="article-title mb-4">SEND A MESSAGE</h3>

        <div className="space-y-4">
          
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="bg-newspaper-lightgray dark:bg-newspaper-gray/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="bg-newspaper-lightgray dark:bg-newspaper-gray/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message..."
              className="bg-newspaper-lightgray dark:bg-newspaper-gray/20 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

        </div>
      </form>
    </div>
  </section>
);
}
