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
            <h3 className="text-xl font-bold mb-2">Scene Representation for 6DoF Grasping</h3>
            <p className="mb-3 text-muted-foreground">Developed a vision model that learns a generalizable 3D scene representation for 6DoF grasping tasks in robotic environments.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Computer Vision</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PyTorch</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Robotics</span>
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
            <h3 className="text-xl font-bold mb-2">Real-time Sleep Staging using IBI</h3>
            <p className="mb-3 text-muted-foreground">Researched and implemented real-time sleep staging algorithms using Interbeat Interval (IBI) of heart in collaboration with Qmyric Inc.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Machine Learning</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Signal Processing</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">TensorFlow</span>
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
            <h3 className="text-xl font-bold mb-2">Gait Recognition with 3D Convolution</h3>
            <p className="mb-3 text-muted-foreground">Developed novel 3D Convolution models to tackle issues with occluded frames in gait recognition systems.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Computer Vision</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Deep Learning</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Keras</span>
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
            <h3 className="text-xl font-bold mb-2">Advanced Neural Network Architectures</h3>
            <p className="mb-3 text-muted-foreground">Researched and implemented cutting-edge neural network architectures for computer vision applications.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Deep Learning</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PyTorch</span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Research</span>
            </div>
            <a href="#" className="text-primary hover:underline">View Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
