import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || "your-email@example.com";
  const linkedin = import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com";
  const github = import.meta.env.VITE_GITHUB_URL || "https://github.com";

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Navigation */}
        <nav className="flex gap-4 text-sm font-medium text-foreground">
          <a href="#home" className="px-4 py-2 rounded-full hover:bg-pink-100/70 hover:text-primary transition-all duration-300 cursor-pointer">Home</a>
          <a href="#skills" className="px-4 py-2 rounded-full hover:bg-pink-100/70 hover:text-primary transition-all duration-300 cursor-pointer">Skills</a>
          <a href="#projects" className="px-4 py-2 rounded-full hover:bg-pink-100/70 hover:text-primary transition-all duration-300 cursor-pointer">Projects</a>
          <a href="#achievements" className="px-4 py-2 rounded-full hover:bg-pink-100/70 hover:text-primary transition-all duration-300 cursor-pointer">Achievements</a>
          <a href="#contact" className="px-4 py-2 rounded-full hover:bg-pink-100/70 hover:text-primary transition-all duration-300 cursor-pointer">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-2 text-foreground">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-100/70 transition-all duration-300">
            <Linkedin className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-100/70 transition-all duration-300">
            <Github className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio Inquiry&body=Hi Pooja, I came through your portfolio...`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-100/70 transition-all duration-300">
            <Mail className="w-5 h-5 hover:text-primary transition" />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
