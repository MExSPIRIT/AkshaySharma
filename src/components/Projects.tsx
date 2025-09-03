import { ExternalLink, Github, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI Emergency Response System",
      description: "Advanced computer vision system that automatically detects emergency situations and alerts authorities in real-time.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "ML"],
      category: "AI/ML",
      status: "In Development",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Tourism Trails - 7 Sisters",
      description: "A comprehensive tourism website showcasing the beautiful Seven Sister states of India (Assam, Arunachal Pradesh, Mizoram, Tripura, Manipur, Meghalaya, Nagaland) with detailed information, payment system, and photo gallery features.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design", "UI/UX", "Payment Integration"],
      category: "Web Development",
      status: "Live",
      gradient: "from-secondary to-accent",
      websiteUrl: "https://mexspirit.github.io/TourismTrails/",
      githubUrl: "https://github.com/MExSPIRIT/TourismTrails.git"
    },
    {
      title: "Diet Plan Customizer App",
      description: "Intelligent Android application that creates personalized diet plans based on user preferences and health goals.",
      technologies: ["Java", "Android", "SQLite", "UI/UX", "Mobile Dev"],
      category: "Mobile App",
      status: "In Development",
      gradient: "from-accent to-primary"
    },
    {
      title: "Futuristic Portfolio Website",
      description: "This very portfolio website - a showcase of modern web development with stunning animations and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind", "Vite", "Modern Web"],
      category: "Web Development",
      status: "Active",
      gradient: "from-primary via-secondary to-accent"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-4">
            Project Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining cutting-edge technology with creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden glass-effect border-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}
              />

              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-orbitron text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{project.category}</p>
                  </div>
                  
                  {/* GitHub Icon */}
                  <div className="flex-shrink-0">
                    {project.githubUrl ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-primary/10 transition-colors duration-200"
                        title="View on GitHub"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-primary/10 transition-colors duration-200 opacity-50 cursor-not-allowed"
                        title="GitHub repository not available"
                        disabled
                      >
                        <Github className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="font-orbitron font-semibold text-sm text-foreground">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8">
                  {project.websiteUrl ? (
                    <Button 
                      className="w-full btn-neon"
                      onClick={() => window.open(project.websiteUrl, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" /> Visit Live Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="w-full btn-neon">
                      <Eye className="mr-2 h-4 w-4" /> View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>


            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Want to see more projects or collaborate?
          </p>
          <Button 
            size="lg" 
            className="btn-neon"
            onClick={() => window.open('https://github.com/MExSPIRIT?tab=repositories', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;