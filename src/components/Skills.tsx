import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Languages": ["Python", "Java", "JavaScript", "SQL"],
  "AI/ML": ["Scikit-learn", "NLP", "RASA", "Deep Learning"],
  "Tools": ["Git", "Docker", "Power BI", "Excel"],
  "Backend": ["Flask", "HTML", "CSS"],
  "Databases": ["MySQL", "Firebase"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card 
              key={category} 
              className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
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

export default Skills;
