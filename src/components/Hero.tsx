import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-ai-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Chaitanya Umesh Rasane
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full animate-glow-pulse" />
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Python & AI Engineer
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in Machine Learning pipelines, NLP systems, and scalable backend applications. 
            Transforming data into intelligent solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-subtle transition-all"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/ChaitanyaRasane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/chaitanya-rasane-194130234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:rasanechaitanya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+919403723058"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
