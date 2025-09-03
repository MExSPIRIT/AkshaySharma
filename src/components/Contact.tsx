import { useState } from "react";
import { Github, Linkedin, Youtube, Send, MapPin, Phone, Mail, MessageSquare, User, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
// ...existing code...

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [receivedMessages, setReceivedMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      message: "Hi Akshay! I'm impressed by your AI/ML projects. Would love to collaborate on a computer vision project.",
      timestamp: new Date("2024-01-15T10:30:00"),
      read: false
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@techcorp.com",
      message: "Your portfolio is amazing! We're looking for a fresher AI developer. Are you interested in an internship opportunity?",
      timestamp: new Date("2024-01-14T15:45:00"),
      read: true
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@startup.io",
      message: "Love your gaming content! Would you be interested in creating tech tutorials for our platform?",
      timestamp: new Date("2024-01-13T09:20:00"),
      read: true
    }
  ]);
  const { toast } = useToast();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/akshay-sharma-867138263/",
      color: "hover:text-blue-400",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/MExSPIRIT?tab=repositories",
      color: "hover:text-purple-400",
      description: "Code Repository"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@hardknocksgmg",
      color: "hover:text-red-400",
      description: "Gaming Content"
    },
    {
      name: "Email",
      icon: Mail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=akshayxsharma4%40gmail.com",
      color: "hover:text-green-400",
      description: "Direct Contact"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshayxsharma4@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=akshayxsharma4%40gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hapur, Uttar Pradesh",
      link: null
    },
    {
      icon: Phone,
      label: "Status",
      value: "Fresher — Available for opportunities",
      link: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Add new message to received messages for demo purposes
        const newMessage = {
          id: receivedMessages.length + 1,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date(),
          read: false
        };
        
        setReceivedMessages(prev => [newMessage, ...prev]);

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const markAsRead = (messageId: number) => {
    setReceivedMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI/ML and creative technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 glass-effect border-primary/20">
            <div className="space-y-6">
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                  Send a Message
                </h3>
                <p className="text-muted-foreground">
                  Let's discuss your ideas and how we can work together
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-inter font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-effect border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-inter font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-effect border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-effect border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-neon group">
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-8 glass-effect border-primary/20">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-inter font-medium text-foreground">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 glass-effect border-primary/20">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-6">
                Follow My Journey
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 glass-effect border-primary/20 card-hover text-center">
                      <div className="space-y-3">
                        <div className={`mx-auto w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${social.color}`}>
                          <social.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors">
                            {social.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="p-8 glass-effect border-green-500/20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-orbitron font-semibold text-green-400">
                    Fresher — Available for opportunities
                  </span>
                </div>
                <p className="font-inter text-sm text-muted-foreground">
                  Open to internships, entry-level positions, and collaborations in AI/ML, 
                  web development, and creative content creation
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Messages Display Section */}
        <div className="mt-16">
          <Card className="p-8 glass-effect border-primary/20">
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Received Messages
              </h3>
              <div className="ml-auto">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {receivedMessages.filter(msg => !msg.read).length} unread
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              {receivedMessages.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No messages yet. Be the first to reach out!</p>
                </div>
              ) : (
                receivedMessages.map((message) => (
                  <Card 
                    key={message.id} 
                    className={`p-6 glass-effect border-primary/20 cursor-pointer transition-all duration-200 hover:border-primary/40 ${
                      !message.read ? 'border-l-4 border-l-primary bg-primary/5' : ''
                    }`}
                    onClick={() => markAsRead(message.id)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-orbitron font-semibold text-foreground">
                              {message.name}
                            </h4>
                            <p className="text-sm text-primary hover:text-secondary transition-colors">
                              {message.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(message.timestamp)}</span>
                          {!message.read && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      </div>
                      
                      <div className="pl-13">
                        <p className="font-inter text-muted-foreground leading-relaxed">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 glass-effect border-primary/20 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-orbitron text-2xl font-bold text-gradient">
                Ready to Build Something Amazing?
              </h3>
              <p className="font-inter text-lg text-muted-foreground">
                Whether it's an AI project, creative collaboration, or just a tech chat - 
                I'm always excited to connect with fellow innovators!
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayxsharma4%40gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-neon">
                    <Mail className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Button>
                </a>
                <a href="https://github.com/MExSPIRIT?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="glass-effect border-primary/30">
                    <Github className="mr-2 h-5 w-5" />
                    View My Code
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

export default Contact;