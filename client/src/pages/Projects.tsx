export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 font-heading">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Computer Vision Project" 
              className="object-cover w-full h-48"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Multi Agents Orchestration System</h3>
            <p className="mb-3 text-muted-foreground">Developed an AI orchestration system that decomposed complex queries into targeted subqueries, enabling efficient collaboration among specialized AI agents.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Agent Architecture</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">LangChain</span>
            </div>
            <a href="#" className="text-primary hover:underline">View Project →</a>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src="https://images.unsplash.com/photo-1578496781379-7dcfb995de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Sleep Staging Project" 
              className="object-cover w-full h-48"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Faulty Commit Classifier: Enhancing Code Quality with Machine Learning</h3>
            <p className="mb-3 text-muted-foreground">Engineered an end-to-end machine learning pipeline for faulty commit classification that processed data.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Machine Learning</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">End-to-end ML pipeline</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PyTorch</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Scikit-learn</span>
            </div>
            <a href="#" className="text-primary hover:underline">View Project →</a>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Gait Recognition Project" 
              className="object-cover w-full h-48"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Vision Transformer (ViT) and Masked Autoencoder (MAE)</h3>
            <p className="mb-3 text-muted-foreground">Developed and deployed a hybrid transformer-based image classification pipeline on CIFAR10 dataset.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Computer Vision</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Autoencoders</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Transformer</span>
            </div>
            <a href="#" className="text-primary hover:underline">View Project →</a>
          </div>
        </div>
        
        {/* Project 4 */}
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Neural Network Project" 
              className="object-cover w-full h-48"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Predictive Modeling for Housing Valuation in Cook County Analyzing Fairness and Performance</h3>
            <p className="mb-3 text-muted-foreground">Developed a predictive model for housing valuation in Cook County, Chicago, analyzing data from over 500,000 homes and 61 features to assess the fairness of government-published valuations.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Feature Engineerign</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PCA</span>
            </div>
            <a href="#" className="text-primary hover:underline">View Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
