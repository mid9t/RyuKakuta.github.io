import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

function HomePage() {
  const [isVisible, setIsVisible] = useState({
    projects: false,
    about: false,
  });
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsRef.current) {
            setIsVisible(prev => ({ ...prev, projects: entry.isIntersecting }));
          } else if (entry.target === aboutRef.current) {
            setIsVisible(prev => ({ ...prev, about: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 transform transition-all duration-700 translate-y-0">
              <h2 className="text-5xl font-bold leading-tight">
                Building{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Full-stack developer specializing in creating innovative and accessible web solutions 
                that push the boundaries of user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/mid9t" 
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/kakury/" 
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:kakuryu@berkeley.edu" 
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Email Contact"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      <section 
        ref={projectsRef as React.RefObject<HTMLElement>}
        className={`py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-all duration-700 ${
          isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-labelledby="projects-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 id="projects-heading" className="text-3xl font-bold mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NeuralPallale.ai',
                description: 'NeuralPallale.ai is an orchestration platform that employs specialized AI agents to break down, distribute, and execute complex tasks.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
                id: 'neural-parallel'
              },
              {
                title: 'Faulty Commit Classifier: Enhancing Code Quality with Machine Learning',
                description: 'An end-to-end machine learning pipeline for faulty commit classification',
                image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
                id: 'faulty-commit'
              },
              {
                title: 'Vision Transformer and Masked Auto Encoder',
                description: 'Transformer-based image classification pipeline on CIFAR10',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                id: 'vit-and-masked-autoencoder'
              }
            ].map((project, index) => (
              <article 
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => navigate(`/projects#${project.id}`)}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group/link"
                    aria-label={`View ${project.title} details`}
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={aboutRef as React.RefObject<HTMLElement>}
        className={`py-20 px-4 transition-all duration-700 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} 
        aria-labelledby="contact-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 id="contact-heading" className="text-3xl font-bold mb-12">
            Let's Collaborate
          </h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 hover:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 hover:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
