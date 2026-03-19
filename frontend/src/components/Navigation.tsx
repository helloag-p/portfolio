import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Profiles", href: "#profiles" },
    { name: "Resume", href: "/ParvClgres.pdf" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 150) setActiveLink("#home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
  .filter((entry) => entry.isIntersecting)
  .sort(
    (a, b) =>
      a.target.getBoundingClientRect().top -
      b.target.getBoundingClientRect().top
  );

        if (visibleSections.length > 0) {
          const topId = visibleSections[0].target.id;
          if (window.scrollY > 150 || topId === "contact") {
            setActiveLink(`#${topId}`);
          }
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

   const sectionElements = navLinks
  .filter((link) => link.href.startsWith("#")) // ✅ only sections
  .map((link) => document.getElementById(link.href.replace("#", "")))
  .filter(Boolean);

    sectionElements.forEach((el) => observer.observe(el));
    return () => sectionElements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleLinkClick = (href: string) => {
    // 🔥 handle external resume
    if (href.startsWith("/")) return;

    const target = document.querySelector(href);
    if (target) {
      const offset = -70;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`newspaper-container sticky top-0 z-50 border-b border-newspaper-gray transition-all duration-300 ${
        isScrolled
          ? "bg-newspaper-white/90 dark:bg-newspaper-black/90 backdrop-blur-md shadow-md"
          : "bg-newspaper-white dark:bg-newspaper-black"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="font-heading text-lg font-bold tracking-wide"
        >
          The Dev Times
        </a>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                target={link.href.startsWith("/") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`font-medium transition-all duration-200 ${
                  activeLink === link.href
                    ? "text-newspaper-sepia underline underline-offset-4"
                    : "hover:text-newspaper-sepia"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col px-4 py-2 space-y-2 bg-newspaper-white dark:bg-newspaper-black border-t">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                target={link.href.startsWith("/") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`block font-medium rounded-md transition-all px-2 py-2 ${
                  activeLink === link.href
                    ? "text-newspaper-sepia bg-newspaper-lightgray dark:bg-newspaper-gray/20"
                    : "hover:text-newspaper-sepia"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}