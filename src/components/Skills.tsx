import { useState, useEffect, useRef } from "react";
import { Code, Palette, Server, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");
  const [inView, setInView] = useState(false);
  const skillsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: Code,
      color: "from-primary to-secondary",
      skills: [
        { name: "Python", level: 40, description: "ML/AI Development" },
        { name: "Java", level: 38, description: "Backend Development" },
        { name: "C++", level: 35, description: "System Programming" },
        { name: "JavaScript", level: 42, description: "Web Development" },
  { name: "HTML/CSS", level: 78, description: "Frontend Design" },
        { name: "Machine Learning", level: 41, description: "AI Algorithms" },
        { name: "System Design", level: 34, description: "Architecture Planning" },
        { name: "Git/GitHub", level: 40, description: "Version Control" }
      ]
    },
    creative: {
      title: "Creative Skills",
      icon: Palette,
      color: "from-secondary to-accent",
      skills: [
        { name: "Adobe Premiere Pro", level: 45, description: "Video Editing" },
        { name: "After Effects", level: 42, description: "Motion Graphics" },
        { name: "Photoshop", level: 40, description: "Photo Editing" },
        { name: "Video Editing", level: 44, description: "Content Creation" },
        { name: "Graphic Design", level: 38, description: "Visual Design" },
        { name: "UI/UX Design", level: 36, description: "User Experience" },
        { name: "Gaming Content", level: 40, description: "YouTube Creation" },
        { name: "Storytelling", level: 42, description: "Narrative Design" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
  <section ref={skillsRef} id="skills" className="section-padding bg-gradient-to-br from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            A perfect blend of technical proficiency and creative excellence
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-lg p-2 inline-flex">
            {categories.map((category) => {
              const categoryData = skillCategories[category as keyof typeof skillCategories];
              const Icon = categoryData.icon;
              
              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className={`mx-1 font-orbitron ${
                    activeCategory === category 
                      ? `bg-gradient-to-r ${categoryData.color} text-white shadow-lg` 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {categoryData.title}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <Card key={skill.name} className="p-6 glass-effect card-hover border-primary/20 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-bold text-primary">
                    {inView ? `${skill.level}%` : `0%`}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                        width: inView ? `${skill.level}%` : `0%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Learning", value: "3+" },
            { label: "Projects Built", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Creative Works", value: "50+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="font-inter text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;