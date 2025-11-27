import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-border hover:shadow-glow-subtle transition-all">
            <h3 className="text-2xl font-semibold text-primary mb-4">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              Python and AI Engineer skilled in ML pipelines, NLP systems, and backend applications. 
              Currently pursuing B.Tech in Computer Science & Engineering at Dr. D. Y. Patil College 
              of Engineering and Innovation with a CGPA of 8.5/10.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-card border-border hover:shadow-glow-subtle transition-all">
            <h3 className="text-2xl font-semibold text-primary mb-4">Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in Python, Machine Learning, Data Analysis, and deployment workflows with 
              strong foundations in DSA and applied AI. Passionate about building intelligent systems 
              that solve real-world problems.
            </p>
          </Card>
        </div>
        
        <Card className="mt-8 p-8 bg-gradient-card border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8.5</div>
              <div className="text-muted-foreground">CGPA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Internships</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
