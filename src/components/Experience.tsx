import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Projectverse.in",
    period: "Mar 2024 – Apr 2024",
    description: "Built backend automation features using Python and MySQL, supported deployments, and contributed to scalable module development and debugging in Agile sprints.",
    tags: ["Python", "MySQL", "Backend", "Agile"]
  },
  {
    title: "Data Science Intern",
    company: "Codesoft",
    period: "Jan 2024 – Feb 2024",
    description: "Developed ML models and NLP-based sentiment analysis workflows. Improved accuracy using feature engineering and created a recommendation engine.",
    tags: ["Machine Learning", "NLP", "Python", "Feature Engineering"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border hover:shadow-glow-subtle transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
