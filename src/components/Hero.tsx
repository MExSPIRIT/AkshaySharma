import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {theme === 'dark' ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Light mode geometric pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-xl"></div>
              <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-lg"></div>
              <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-lg"></div>
            </div>
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-6" style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 dark:from-background/90 dark:via-background/70 dark:to-background/90 light:from-background/80 light:via-background/60 light:to-background/80" />
      </div>

      {/* Wavy Animated particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-40 animate-wave-particle ${
              i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              '--wave-offset': `${Math.random() * 360}deg`,
              '--wave-speed': `${0.5 + Math.random() * 1.5}`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Additional wave layers for depth */}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full opacity-30 animate-wave-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              '--wave-phase': `${Math.random() * 2 * Math.PI}`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center section-padding max-w-6xl mx-auto">
        <div className="animate-float">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6">
            <span className="text-shimmer">Hi, I'm</span>
            <br />
            <span className="text-gradient">Akshay Sharma</span>
          </h1>
        </div>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto">
          Blending{" "}
          <span className="text-primary font-semibold">AI</span>,{" "}
          <span className="text-secondary font-semibold">Gaming</span>, and{" "}
          <span className="text-accent font-semibold">Creativity</span>{" "}
          into Innovation
        </p>
        
        <p className="font-inter text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Computer Science Engineering Student • AI/ML Specialist • Creative Innovator
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-neon group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-effect hover:bg-primary/20 dark:hover:bg-white/10 border-primary/30 hover:border-primary/60 transition-all duration-300 text-foreground hover:text-foreground"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

  {/* scroll indicator removed */}
      </div>
    </section>
  );
};

export default Hero;