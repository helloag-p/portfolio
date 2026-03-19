
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="newspaper-container py-8 border-t border-newspaper-black dark:border-newspaper-white">
      <div className="text-center">
        <p>© {currentYear} Parv Agarwal's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
