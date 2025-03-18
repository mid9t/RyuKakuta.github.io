export default function Publications() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 font-heading">Publications</h2>
      
      <div className="space-y-8">
        {/* Publication 1 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Paper thumbnail" 
                className="rounded-md w-full object-cover h-[120px]"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-1">Learning Generalizable 3D Scene Representations for 6DoF Grasping</h3>
              <p className="text-muted-foreground mb-2 italic">Conference on Robot Learning (CoRL), 2023</p>
              <p className="text-sm mb-3">
                <span className="font-medium">Ishikaa Lunawat</span>, Marcus Valtonen Örnhag, Judith Butepage, Johannes Stork, Danica Kragic
              </p>
              <p className="text-sm mb-4">
                This paper presents a novel approach for learning generalizable 3D scene representations that can be effectively used for 6DoF grasping tasks in robotic environments. Our method combines geometric and semantic features to create robust representations that generalize well to novel objects and scenes.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="text-primary hover:underline text-sm">PDF</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">Code</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">BibTeX</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">Video</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Publication 2 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Paper thumbnail" 
                className="rounded-md w-full object-cover h-[120px]"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-1">Real-time Sleep Staging Using Heart Rate Variability</h3>
              <p className="text-muted-foreground mb-2 italic">IEEE Journal of Biomedical and Health Informatics, 2022</p>
              <p className="text-sm mb-3">
                <span className="font-medium">Ishikaa Lunawat</span>, Jane Smith, Alex Johnson, Robert Chen
              </p>
              <p className="text-sm mb-4">
                We propose a novel method for real-time sleep staging using Interbeat Interval (IBI) of the heart. Our approach utilizes advanced machine learning techniques to classify sleep stages with high accuracy using only heart rate variability data, making it suitable for wearable devices and home sleep monitoring.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="text-primary hover:underline text-sm">PDF</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">Code</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">BibTeX</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Publication 3 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Paper thumbnail" 
                className="rounded-md w-full object-cover h-[120px]"
              />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-1">3D ConvNets for Robust Gait Recognition Under Occlusion</h3>
              <p className="text-muted-foreground mb-2 italic">IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2021</p>
              <p className="text-sm mb-3">
                <span className="font-medium">Ishikaa Lunawat</span>, Priya Patel, David Wilson
              </p>
              <p className="text-sm mb-4">
                This paper introduces novel 3D Convolutional Neural Network architectures specifically designed to handle occlusions in gait recognition systems. Our approach demonstrates state-of-the-art performance on challenging datasets with significant occlusions, outperforming previous methods by a substantial margin.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="text-primary hover:underline text-sm">PDF</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">Code</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">BibTeX</a>
                <span className="text-muted-foreground">|</span>
                <a href="#" className="text-primary hover:underline text-sm">Video</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
