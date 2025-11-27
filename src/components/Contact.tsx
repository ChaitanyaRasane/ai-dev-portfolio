import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a 
              href="mailto:rasanechaitanya@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
            >
              rasanechaitanya@gmail.com
            </a>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a 
              href="tel:+919403723058"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +91-9403723058
            </a>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">
              Talegaon Dabhade, Maharashtra, India
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Github className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <a 
              href="https://github.com/ChaitanyaRasane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              @ChaitanyaRasane
            </a>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-subtle transition-all"
              asChild
            >
              <a href="mailto:rasanechaitanya@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="https://linkedin.com/in/chaitanya-rasane-194130234" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
