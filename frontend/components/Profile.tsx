import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Profile() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-1 font-heading">Ishikaa Lunawat</h1>
          <p className="text-lg mb-4">
            Master's student in Electrical Engineering at{" "}
            <a href="https://stanford.edu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Stanford University
            </a>
          </p>
          
          <p className="mb-4">
            My passion lies in solving complex problems at the intersection of{" "}
            <span className="text-primary">Computer Vision</span>,{" "}
            <span className="text-primary">Machine Learning</span> and{" "}
            <span className="text-primary">Robotics</span>. I thrive on crafting 
            innovative solutions towards embodied and intelligent systems and robots.
          </p>
          
          <p className="mb-4">
            Currently, I'm a master's student in Electrical Engineering at Stanford
            University, in the <em>Information Systems and Science</em> track. I completed my
            undergraduate degree in Electrical and Electronics Engineering at the
            National Institute of Technology Tiruchirappalli, India.
          </p>
          
          <p className="mb-4">
            Previously, I pursued my summer internship as a Robotic Perception Intern
            at the{" "}
            <a href="https://www.ias.informatik.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              RRSG group
            </a>{" "}
            (Intelligent Autonomous Systems Lab) at Technische Universität Darmstadt,
            Germany. My work revolved around a vision model that learns a
            generalizable 3D scene representation for 6DoF grasping.
          </p>
          
          <p className="mb-4">
            I also worked on real-time sleep staging using Interbeat Interval (IBI) of
            Heart in collaboration with{" "}
            <a href="#" className="text-primary hover:underline">
              Qmyric Inc., USA
            </a>{" "}
            as a part of my bachelor's thesis. Additionally, I conducted research at
            the{" "}
            <a href="#" className="text-primary hover:underline">
              Pattern Recognition Laboratory
            </a>{" "}
            in IIT-BHU as a Computer Vision Intern on gait recognition and developed
            novel 3D Convolution models to tackle issues with occluded frames.
          </p>
          
          <p className="mb-4">
            During my undergraduate study, I was a part of the{" "}
            <a href="#" className="text-primary hover:underline">
              Spider R&D Club
            </a>{" "}
            as a Machine Learning Researcher. My role involved contributing to
            interdisciplinary projects, organizing knowledge-sharing sessions and
            mentoring juniors.
          </p>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="bg-card p-2 rounded-lg shadow-md h-full">
            <AspectRatio ratio={4/5} className="overflow-hidden rounded">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ishikaa Lunawat" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
