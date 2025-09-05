import { GraduationCap, Code, Gamepad2, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/Akshay.jpg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "AI/ML Student",
      description: "4th-year B.Tech at Sunderdeep Engineering College"
    },
    {
      icon: Code,
      title: "Tech Innovator",
      description: "Building intelligent systems with Python, ML, and AI"
    },
    {
      icon: Video,
      title: "Creative Editor",
      description: "Crafting engaging content with Adobe Suite"
    },
    {
      icon: Gamepad2,
      title: "Gaming Creator",
      description: "Content creator at HardKnocksGMG channel"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative group">
            {/* Neon glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-60 dark:opacity-45 group-hover:opacity-80 dark:group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative bg-card rounded-2xl p-8 glass-effect dark:border-2 dark:border-primary/30 dark:shadow-[0_0_20px_theme(colors.primary/30)]">
              <img
                src={profileImage}
                alt="Akshay Sharma"
                className="w-full max-w-sm mx-auto rounded-xl shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                The Journey of Innovation
              </h3>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                I'm a passionate 4th-year B.Tech AI/ML student at{" "}
                <span className="text-primary font-semibold">Sunderdeep Engineering College</span>, 
                where innovation meets creativity. With a unique blend of technical prowess and 
                artistic vision, I'm building the future one project at a time.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Skilled in both cutting-edge development ({" "}
                <span className="text-secondary">Python, ML, AI, Web Technologies</span>
                ) and creative arts ({" "}
                <span className="text-accent">video editing, design, gaming content</span>
                ), I'm passionate about creating innovative AI systems while 
                crafting engaging entertainment experiences.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                When I'm not coding intelligent algorithms, you'll find me creating 
                compelling gaming content, pushing the boundaries of what's possible 
                in both technology and creativity.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-6 glass-effect card-hover border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-orbitron font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;