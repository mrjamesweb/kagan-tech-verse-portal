
import { Youtube, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com/playlist?list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      color: "hover:text-red-500"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/kagantech/",
      color: "hover:text-pink-500"
    },
    {
      icon: Twitter,
      url: "https://x.com/KaganTech",
      color: "hover:text-blue-500"
    }
  ];

  const tiktokIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1.04 0z"/>
    </svg>
  );

  return (
    <footer className="py-12 border-t border-white/10 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-white">KaganTech</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering minds through technology, education, and storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-tech-blue transition-colors text-sm">
                About
              </a>
              <a href="#content" className="text-muted-foreground hover:text-tech-blue transition-colors text-sm">
                Content
              </a>
              <a href="#connect" className="text-muted-foreground hover:text-tech-blue transition-colors text-sm">
                Social Media
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-tech-blue transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${social.color} transition-colors`}
                >
                  <social.icon size={24} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@kagantech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                {tiktokIcon()}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} KaganTech. Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
