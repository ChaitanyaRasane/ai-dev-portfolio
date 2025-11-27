import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Based Vehicle Selling Web Application",
    description: "Built a dynamic pricing system with regression models and an AI negotiation chatbot to improve price recommendations and transaction efficiency.",
    tags: ["Python", "Machine Learning", "NLP", "Regression"],
    github: "https://github.com/ChaitanyaRasane"
  },
  {
    title: "Healthcare Chatbot — Symptom Checker",
    description: "Developed a healthcare assistant for symptom-based query handling using NLP classification, preprocessing, and model training.",
    tags: ["Python", "NLP", "Flask", "Healthcare AI"],
    github: "https://github.com/ChaitanyaRasane"
  },
  {
    title: "Watchman Attendance System",
    description: "Implemented face-recognition attendance using LBPH with dataset capture, training pipeline, and attendance automation.",
    tags: ["Python", "OpenCV", "Face Recognition", "Computer Vision"],
    github: "https://github.com/ChaitanyaRasane"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all flex flex-col"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
