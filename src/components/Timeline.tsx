import { GraduationCap, BookOpen, Code, Trophy, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2020",
      title: "Academic Foundation",
      subtitle: "Completed 10th Grade",
      description: "Achieved 78.67% marks, building strong fundamentals in science and mathematics",
      icon: BookOpen,
      status: "completed",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      year: "2022",
      title: "Higher Secondary",
      subtitle: "Completed 12th Grade",
      description: "Secured 70% in PCM stream, developing analytical thinking and problem-solving skills",
      icon: GraduationCap,
      status: "completed",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      year: "2022",
      title: "University Journey Begins",
      subtitle: "Started B.Tech AI/ML",
      description: "Enrolled at Sunderdeep Engineering College, beginning the journey into Artificial Intelligence and Machine Learning",
      icon: Code,
      status: "completed",
      gradient: "from-primary to-secondary"
    },
    {
      year: "2023-2025",
      title: "Skills & Innovation",
      subtitle: "Project Development Era",
      description: "Built multiple projects, explored gaming content creation, mastered video editing, and developed AI systems",
      icon: Trophy,
      status: "current",
      gradient: "from-secondary to-accent"
    },
    {
      year: "2026",
      title: "Future Vision",
      subtitle: "Graduation & Career",
      description: "Goal: Become an AI/ML Engineer, contributing to cutting-edge technology while creating impactful digital content",
      icon: Target,
      status: "future",
      gradient: "from-accent to-primary"
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 border-green-500/50 text-green-400";
      case "current":
        return "bg-primary/20 border-primary/50 text-primary animate-glow-pulse";
      case "future":
        return "bg-purple-500/20 border-purple-500/50 text-purple-400";
      default:
        return "bg-muted/20 border-muted/50 text-muted-foreground";
    }
  };

  return (
    <section id="timeline" className="section-padding bg-gradient-to-br from-card to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-4">
            Journey Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            From academic foundations to future innovation - the path of continuous learning and growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30 shadow-lg shadow-primary/20" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full border-4 ${getStatusStyles(event.status)} flex items-center justify-center relative group animate-breathe`}>
                    <event.icon className="h-4 w-4 relative z-10" />
                    {/* Inner breathing glow */}
                    <div className={`absolute inset-0 rounded-full animate-breathe-slow ${
                      event.status === "completed" ? "bg-green-500/40" :
                      event.status === "current" ? "bg-primary/50 shadow-lg shadow-primary/60" :
                      "bg-purple-500/40"
                    }`} />
                    {/* Middle breathing ring */}
                    <div className={`absolute -inset-1 rounded-full animate-breathe-medium ${
                      event.status === "completed" ? "bg-green-500/25" :
                      event.status === "current" ? "bg-primary/35 shadow-md shadow-primary/50" :
                      "bg-purple-500/25"
                    }`} />
                    {/* Outer breathing ring */}
                    <div className={`absolute -inset-3 rounded-full animate-breathe-fast opacity-60 ${
                      event.status === "completed" ? "bg-green-500/15" :
                      event.status === "current" ? "bg-primary/25 shadow-sm shadow-primary/40" :
                      "bg-purple-500/15"
                    }`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                  <Card className="p-8 glass-effect border-primary/20 card-hover group">
                    {/* Year Badge */}
                    <div 
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${event.gradient} text-white font-orbitron font-bold text-sm mb-4`}
                    >
                      {event.year}
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="font-inter text-primary font-semibold">
                          {event.subtitle}
                        </p>
                      </div>
                      
                      <p className="font-inter text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(event.status)}`}>
                        {event.status === "completed" && "✓ Completed"}
                        {event.status === "current" && "⚡ In Progress"}
                        {event.status === "future" && "🎯 Planned"}
                      </span>
                    </div>

                    {/* Decorative gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
                  </Card>
                </div>

                {/* Year Display for larger screens */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} md:w-1/2`}>
                  <div className={`text-right ${index % 2 === 0 ? '' : 'text-left'}`}>
                    <div className={`inline-block font-orbitron text-6xl font-black text-gradient opacity-20 ${index % 2 === 0 ? '' : 'text-left'}`}>
                      {event.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 glass-effect border-primary/20 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-orbitron text-2xl font-bold text-gradient">
                Vision 2026 & Beyond
              </h3>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Aspiring to become a leading AI/ML Engineer, contributing to revolutionary 
                technologies that shape the future while continuing to create engaging 
                content that bridges the gap between technology and entertainment.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {["AI Research", "ML Engineering", "Content Creation", "Innovation"].map((goal, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-inter font-medium"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;