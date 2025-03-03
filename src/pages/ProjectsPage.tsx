import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NeuralPallale.ai',
    description: 'NeuralPallale.ai is an orchestration platform that employs specialized AI agents to break down, distribute, and execute complex tasks.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    challenge: 'Developing a scalable architecture that could handle real-time processing of large datasets while maintaining low latency.',
    solution: 'Implemented a microservices architecture using Docker and Kubernetes, with Redis for caching and Apache Kafka for stream processing.',
    impact: 'Reduced data processing time by 60% and improved system reliability to 99.9% uptime.',
    tech: ['Python', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/XayHanmonty/NeuroParallel.ai',
    demo: 'https://youtu.be/F8wy_Tchb3o'
  },
  {
    title: 'Faulty Commit Classifier: Enhancing Code Quality with Machine Learning',
    description: 'This project involves the implementation of an end-to-end Machine Learning (ML) pipeline to detect faulty commits in software development.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
    challenge: 'The primary obstacles are: Handling Imbalanced Data, Data Preprocessing, Model Performance.',
    solution: 'Data Preprocessing: Implement a data loader and preprocessor to clean and prepare the dataset for modeling, including handling missing values and normalizing features. Modeling: Develop a simple model (SingleLayerNN), which will be trained on the preprocessed data. The model will be evaluated based on its accuracy in detecting faulty commits. Offline Evaluation: After training, the model will be evaluated on a test set using metrics such as Precision-Recall curves and Average Precision (AP). Improvements and Optimization: Using the results from the initial model, efforts will be made to enhance the model by trying more complex architectures.',
    impact: 'The model processed data at 34,700 rows/sec —significantly outperforming benchmark by over 600%— and reduced training loss to 0.191; enhanced model architecture boosted test average precision by 35%',
    tech: ['Python', 'PyTorch', 'Scikit-learn', 'Redis', 'MongoDB', 'AWS'],
    github: 'https://github.com/mid9t/FaultyCommitsDetection',
    demo: 'https://demo.com'
  },
  {
    title: 'Vision Transformer and Masked Auto Encoder',
    description: 'Real-time analytics and inventory management system',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    challenge: 'Creating a unified dashboard that could handle multiple data sources and provide real-time insights.',
    solution: 'Built a React-based dashboard with GraphQL for efficient data fetching and WebSocket for real-time updates.',
    impact: 'Increased inventory turnover by 40% and reduced stockouts by 75%.',
    tech: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker'],
    github: 'https://github.com/mid9t/ViT_AutoMaskedEncoder/blob/main/Vit_and_AutoMaskedEncoder.ipynb',
    demo: 'https://demo.com'
  },
];

function ProjectsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure smooth scrolling after navigation
        setTimeout(() => {
          const headerOffset = 96; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">Case Studies</h1>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <article key={index} id={
              index === 0 ? 'neural-parallel' :
              index === 1 ? 'faulty-commit' :
              'vit-and-masked-autoencoder'
            } className="grid md:grid-cols-2 gap-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-xl"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">The Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.challenge}</p>
                  
                  <h3 className="text-xl font-semibold">The Solution</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
                  
                  <h3 className="text-xl font-semibold">Impact</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.impact}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
