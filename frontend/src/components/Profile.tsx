import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { FileText, FolderGit2 } from "lucide-react";

const PROFILE_IMAGE_PATH = "/RyuKakuta.github.io/images/profile.jpeg";
const CV_PATH = "/RyuKakuta.github.io/cv.pdf";

export default function Profile() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold font-heading">Ryu Kakuta</h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto flex items-center gap-2"
                onClick={() => window.open(CV_PATH, '_blank')}
              >
                <FileText className="h-4 w-4" />
                View CV
              </Button>
              <Button
                variant="default"
                className="w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <Link to="/projects">
                  <FolderGit2 className="h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
          
          <p className="text-lg mb-4">
            Studying Data Science at{" "}
            <a 
              href="https://cdss.berkeley.edu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
            >
              UC Berkeley College of Computing, Data Science, and Society
            </a>
          </p>
          
          <p className="mb-4 leading-relaxed">
            Born and raised in the suburbs of <span className="text-primary/90 font-medium">Tokyo</span> and 
            spending winters and summers at my grandmother's house in <span className="text-primary/90 font-medium">Nagano, Japan</span>, 
            I grew up experiencing different cultures—from the calm of rural life to the vibrant pace of the city—
            which has given me a unique perspective on the world.
          </p>

          <p className="mb-4 leading-relaxed">
            Having moved to the <span className="text-primary/90 font-medium">US</span> in 2019, my mind and body have adapted to this dynamic change in environment.
            I am <span className="text-primary font-medium">energetic</span>, <span className="text-primary font-medium">active</span>, 
            and <span className="text-primary font-medium">full of new ideas</span>, which allow me to adapt and adjust to different situations, 
            and effectively communicate and engage with others. 
          </p>

          <p className="mb-4 leading-relaxed">
            Currently, my interests are especially drawn to applying{" "}
            <span className="text-primary font-medium">Machine Learning</span> in{" "}
            <span className="text-primary font-medium">Economics</span> and{" "}
            <span className="text-primary font-medium">Public Sector</span>. I take an interdisciplinary approach to 
            various challenges—from classic classification tasks to traffic prediction—
            by integrating <span className="text-primary/90 font-medium">ML and data science</span> applications with insights from{" "}
            <span className="text-primary/90 font-medium">economics</span>,{" "}
            <span className="text-primary/90 font-medium">cognitive science</span>, and{" "}
            <span className="text-primary/90 font-medium">public policy</span>.
          </p>
          
          <p className="mb-4 leading-relaxed">
            During my undergraduate studies, I have actively pursued opportunities to apply 
            my data science and machine learning expertise to real-world challenges.
            My recent work includes developing an{" "}
            <a 
              href="https://devpost.com/software/neuroparallel-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
            >
              AI orchestration system for multi-agent collaboration
            </a>{" "}
            where I leveraged <span className="text-primary/90 font-medium">LLM capabilities</span> via{" "}
            <span className="text-primary/90 font-medium">LangChain</span> to break down complex queries, 
            reducing redundant processing by <span className="text-primary font-medium">28%</span> and optimizing system efficiency. 
            This project deepened my understanding of scalable AI architectures and reinforced 
            my passion for designing impactful, intelligent systems.
          </p>
          
          <p className="mb-4 leading-relaxed">
            Beyond personal projects, I have engaged in public-sector-focused data science, 
            tackling issues such as predictive modeling for{" "}
            <span className="text-primary/90 font-medium">housing valuation</span> in{" "}
            <span className="text-primary/90 font-medium">Cook County</span> and{" "}
            <span className="text-primary/90 font-medium">real-time traffic estimation</span> for the{" "}
            <span className="text-primary/90 font-medium">Bay Bridge</span> in San Francisco. These experiences 
            have refined my ability to merge data-driven insights with economic and policy considerations, 
            reinforcing my belief that ML can be a transformative tool in decision-making and urban development.
          </p>
          
          <p className="mb-4 leading-relaxed">
            Additionally, my background in both <span className="text-primary/90 font-medium">Japan</span> and the{" "}
            <span className="text-primary/90 font-medium">U.S.</span> has shaped how I approach problems, 
            allowing me to bridge perspectives across different cultural and economic landscapes. 
            Whether through research, technical projects, or community engagement, I strive to 
            merge <span className="text-primary/90 font-medium">analytical rigor</span> with{" "}
            <span className="text-primary/90 font-medium">human-centered solutions</span>, ensuring that data science serves 
            not just as a tool for efficiency, but as a force for social good.
          </p>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="bg-card p-2 rounded-lg shadow-md h-full">
            <AspectRatio ratio={4/5} className="overflow-hidden rounded">
              <img 
                src={PROFILE_IMAGE_PATH}
                alt="Ryu Kakuta" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}