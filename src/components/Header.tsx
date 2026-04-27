import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
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
          <a href="https://www.linkedin.com/in/pooja-shreer" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-100/70 transition-all duration-300">
            <Linkedin className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href="https://github.com/POOJASHREE-17" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-100/70 transition-all duration-300">
            <Github className="w-5 h-5 hover:text-primary transition" />
          </a>
          <a href="mailto:poojashree7378409@gmail.com?subject=Portfolio Inquiry&body=Hi Pooja, I came through your portfolio..." className="p-2 rounded-full hover:bg-pink-100/70 transition-all duration-300">
            <Mail className="w-5 h-5 hover:text-primary transition" />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
