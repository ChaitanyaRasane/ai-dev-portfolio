import { Card } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

const skillsData = {
  "Languages": [
    { name: "Python", level: 95 },
    { name: "Java", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "SQL", level: 85 },
  ],
  "AI/ML": [
    { name: "Scikit-learn", level: 90 },
    { name: "NLP", level: 85 },
    { name: "RASA", level: 80 },
    { name: "Deep Learning", level: 75 },
  ],
  "Tools": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "Power BI", level: 75 },
    { name: "Excel", level: 85 },
  ],
  "Backend": [
    { name: "Flask", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
  ],
  "Databases": [
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 70 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay, isVisible]);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">{width}%</span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
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
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <Card 
              key={category} 
              className="p-6 bg-gradient-card border-border hover:shadow-glow-subtle transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-6">{category}</h3>
              <div>
                {skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(categoryIndex * 100) + (skillIndex * 150)}
                  />
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
