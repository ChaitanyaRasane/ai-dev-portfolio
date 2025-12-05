import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering for code blocks
  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith("```")) {
        const codeContent = part.replace(/```\w*\n?/, "").replace(/```$/, "");
        return (
          <pre 
            key={index} 
            className="bg-secondary/50 border border-border rounded-lg p-4 overflow-x-auto my-4 text-sm"
          >
            <code className="text-foreground">{codeContent.trim()}</code>
          </pre>
        );
      }
      
      // Process headings and paragraphs
      const lines = part.split("\n").filter(Boolean);
      return lines.map((line, lineIndex) => {
        if (line.startsWith("# ")) {
          return (
            <h1 key={`${index}-${lineIndex}`} className="text-3xl font-bold text-foreground mt-8 mb-4">
              {line.replace("# ", "")}
            </h1>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={`${index}-${lineIndex}`} className="text-2xl font-bold text-foreground mt-6 mb-3">
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("- **")) {
          const text = line.replace("- **", "").replace("**", " -");
          return (
            <li key={`${index}-${lineIndex}`} className="text-muted-foreground ml-4 mb-2 list-disc">
              <strong className="text-foreground">{text.split(" -")[0]}</strong>
              {text.split(" -")[1]}
            </li>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <li key={`${index}-${lineIndex}`} className="text-muted-foreground ml-4 mb-2 list-disc">
              {line.replace("- ", "")}
            </li>
          );
        }
        if (line.match(/^\d+\./)) {
          return (
            <li key={`${index}-${lineIndex}`} className="text-muted-foreground ml-4 mb-2 list-decimal">
              {line.replace(/^\d+\.\s*/, "")}
            </li>
          );
        }
        if (line.trim()) {
          return (
            <p key={`${index}-${lineIndex}`} className="text-muted-foreground leading-relaxed mb-4">
              {line}
            </p>
          );
        }
        return null;
      });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              asChild 
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Header */}
            <header className="space-y-6 mb-12 animate-fade-in">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="h-px bg-border" />
            </header>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {renderContent(post.content)}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
