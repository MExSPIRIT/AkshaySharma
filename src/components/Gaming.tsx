import { Play, Youtube, Gamepad2, Users, Eye, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Gaming = () => {
  const channelStats = [
    { icon: Users, label: "Subscribers", value: "1+" },
    { icon: Eye, label: "Views", value: "1+" },
    { icon: Play, label: "Videos", value: "1+" },
    { icon: ThumbsUp, label: "Likes", value: "1+" }
  ];

  return (
    <section id="gaming" className="section-padding bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-4">
            Gaming & YouTube
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="font-inter text-2xl text-primary font-semibold mb-4">
            HardKnocksGMG Channel
          </p>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Where Gaming Meets Creativity - Crafting engaging content that blends entertainment with technical innovation
          </p>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {channelStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center glass-effect border-primary/20 card-hover group">
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-orbitron text-2xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Channel Description */}
        <Card className="p-8 mb-16 glass-effect border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Gamepad2 className="h-8 w-8 text-primary" />
                <h3 className="font-orbitron text-2xl font-bold text-foreground">
                  Content Creation Journey
                </h3>
              </div>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                HardKnocksGMG is where my passion for gaming meets my technical expertise. 
                I create engaging gaming content that showcases not just gameplay, but also 
                the technical artistry behind video production.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                From epic gaming montages to behind-the-scenes editing tutorials, 
                my channel bridges the gap between entertainment and education, 
                showing how AI and creativity can enhance gaming experiences.
              </p>

              <div className="flex flex-wrap gap-3">
                {"[\"Gaming Montages\", \"AI Integration\", \"Editing Tutorials\", \"Tech Reviews\"]".split(',').map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                    {tag.replace(/\"/g, '').replace(/\[/g, '').replace(/\]/g, '').trim()}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Card className="relative p-8 glass-effect text-center">
                <Youtube className="mx-auto h-16 w-16 text-red-500 mb-4 animate-float" />
                <h4 className="font-orbitron text-xl font-bold text-foreground mb-2">
                  HardKnocksGMG
                </h4>
                <p className="text-muted-foreground mb-6">
                  Gaming • Tech • Creativity
                </p>
                <a href="https://youtube.com/@hardknocksgmg?si=J35PDpU9sms83n4W" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-neon w-full">
                    <Youtube className="mr-2 h-5 w-5" />
                    Visit Channel
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 glass-effect border-primary/20 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-orbitron text-2xl font-bold text-gradient">
                Join the Gaming Journey
              </h3>
              <p className="font-inter text-lg text-muted-foreground">
                Subscribe to HardKnocksGMG for the latest gaming content, 
                tech innovations, and creative video editing tutorials!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://youtube.com/@hardknocksgmg?si=J35PDpU9sms83n4W" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-neon">
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe Now
                  </Button>
                </a>
                <a href="https://youtu.be/8UREMxK-MGM" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="glass-effect border-primary/30">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Latest Video
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gaming;