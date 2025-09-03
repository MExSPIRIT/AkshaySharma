import { Github, Linkedin, Youtube, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshay-sharma-867138263/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/MExSPIRIT?tab=repositories", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@hardknocksgmg", label: "YouTube" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=akshayxsharma4%40gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "Gaming", href: "#gaming" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-card to-background border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-gradient mb-2">
                  Akshay Sharma
                </h3>
                <p className="text-muted-foreground font-inter">
                  AI/ML Student • Creative Developer • Gaming Content Creator
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Passionate about blending artificial intelligence with creativity 
                to build innovative solutions that make a difference.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={social.label}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-110">
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-orbitron text-lg font-semibold text-foreground mb-6">
                Quick Navigation
              </h4>
              <nav className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-orbitron text-lg font-semibold text-foreground">
                Get In Touch
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayxsharma4%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    akshayxsharma4@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">
                    Hapur, Uttar Pradesh
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Fresher — Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© {currentYear} Akshay Sharma. Built with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>and lots of</span>
                <Code className="h-4 w-4 text-primary" />
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;