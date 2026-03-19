import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="newspaper-container pt-6 md:pt-10">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* 🔥 Status + Theme */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-green-600 font-medium">
            ● Open to Opportunities
          </span>
          <ThemeToggle />
        </div>
      </div>

      {/* Title */}
      <div className="text-center py-8 border-y-2 border-newspaper-black dark:border-newspaper-white my-4">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
          THE DEV TIMES
        </h1>

        <div className="mt-2 italic text-muted-foreground">
          Software Development Engineer Portfolio • Est. 2025
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-3 border-b border-newspaper-gray">
        
        <h2 className="font-heading text-xl md:text-2xl font-bold">
          Parv Agarwal
        </h2>

        <p className="italic text-sm md:text-base text-muted-foreground text-center md:text-right">
          Software Development Engineer • Scalable Systems • Competitive Programmer
        </p>

      </div>

    </header>
  );
}