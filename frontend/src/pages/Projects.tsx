import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Badge } from "../components/ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "NeuroParallel AI Orchestration",
    description: "An AI orchestration system for multi-agent collaboration using LangChain. Implemented advanced query breakdown techniques, reducing redundant processing by 28% and optimizing system efficiency through intelligent task distribution. The system leverages LLM capabilities to coordinate multiple AI agents for complex problem-solving.",
    tags: ["LangChain", "Python", "AI", "LLM", "System Design", "Multi-agent"],
    demoUrl: "https://devpost.com/software/neuroparallel-ai",
    githubUrl: "https://github.com/RyuKakuta/neuroparallel",
    image: "/RyuKakuta.github.io/images/projects/neuroparallel.png"
  },
  {
    title: "Cook County Housing Valuation",
    description: "Developed predictive models for housing valuation in Cook County, integrating economic indicators and geographical data to improve assessment accuracy and fairness in property taxation. The project uses machine learning to analyze historical property data, market trends, and socioeconomic factors to provide more equitable valuations.",
    tags: ["Machine Learning", "Python", "Economics", "Data Analysis", "Public Policy", "Scikit-learn"],
    githubUrl: "https://github.com/RyuKakuta/housing-valuation",
    image: "/RyuKakuta.github.io/images/projects/housing.png"
  },
  {
    title: "Bay Bridge Traffic Estimation",
    description: "Real-time traffic estimation system for the San Francisco Bay Bridge using deep learning models to predict traffic patterns and congestion points. The system analyzes historical traffic data, weather conditions, and real-time sensor data to provide accurate traffic predictions and help optimize traffic flow.",
    tags: ["Deep Learning", "Python", "Traffic Analysis", "Real-time Data", "Public Infrastructure", "TensorFlow"],
    githubUrl: "https://github.com/RyuKakuta/bridge-traffic",
    image: "/RyuKakuta.github.io/images/projects/traffic.png"
  },
  {
    title: "Data Science Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features include dark mode support, responsive design, and integration with GitHub projects. The site showcases my data science projects and professional experience in machine learning and public policy.",
    tags: ["React", "TypeScript", "TailwindCSS", "Web Development", "UI/UX"],
    githubUrl: "https://github.com/RyuKakuta/RyuKakuta.github.io",
    image: "/RyuKakuta.github.io/images/projects/portfolio.png"
  }
];

const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort();

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      )
    : projects;

  return (
    <div className="space-y-8">
      <section>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-heading">Projects</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A collection of my data science and machine learning projects, focusing on the intersection of 
            technology, economics, and public policy.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-3">Filter by Technology</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/90 transition-colors"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">
                No projects match the selected filters.
                {selectedTags.length > 0 && " Try removing some filters."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
