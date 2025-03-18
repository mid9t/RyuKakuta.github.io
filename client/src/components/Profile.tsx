import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Profile() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-1 font-heading">Ryu Kakuta</h1>
          <p className="text-lg mb-4">
            Studying Data Science at{" "}
            <a href="https://cdss.berkeley.edu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              UC Berkeley College of Computing, Data Science, and Society.
            </a>
          </p>

          <p className="mb-4">
            Born and raised in the suburbs of Tokyo and spending winters and summers at 
            my grandmother's house in Nagano, Japan, I grew up experiencing different cultures, 
            from the calm of rural life to the vibrant pace of the city, 
            which has given me a unique perspective on the world.
          </p>

          <p className="mb-4">
            Having moved to the US in 2019, my mind and body have adapted to this dynamic change in environment. 
            I am energetic, active, and full of new ideas, which allow me to adapt and adjust to different situations, 
            and effectively communicate and engage with others.
          </p>
          
          <p className="mb-4">
          My interests are especially drawn to applying{" "}
            <span className="text-primary">Machine Learning</span>, in{" "}
            <span className="text-primary">Economics</span> and{" "}
            <span className="text-primary">Public Sector</span>. 
             take an interdisciplinary approach to various challenges 
             ,from classic classification tasks to traffic prediction,
             by integrating ML and data science applications with insights from economics, cognitive science, and public policy.
          </p>
          
          <p className="mb-4">
            Currently, I'm interning at{" "}
            <a href="https://www.asper.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Asper.ai
            </a>{" "}
            , where I am developing predictive models using historical data to assess impacts on product demand and supply, 
            calculating attribution factors and integrating them into an autonomous agent-based framework that proactively 
            recommends strategic operational responses.
          </p>
          
          <p className="mb-4">
            During my undergraduate studies, I have actively pursued opportunities to apply my data science and machine learning 
            expertise to real-world challenges. My recent work includes developing an{" "}
            <a href="https://devpost.com/software/neuroparallel-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            AI orchestration system for multi-agent collaboration
            </a>{" "}
            where I leveraged LLM capabilities via LangChain to break down complex queries, reducing redundant processing 
            by 28% and optimizing system efficiency. This project deepened my understanding of scalable AI architectures 
            and reinforced my passion for designing impactful, intelligent systems.
          </p>
          
          <p className="mb-4">
          Beyond personal projects, I have engaged in public-sector-focused data science, 
          tackling issues such as predictive modeling for housing valuation in Cook County and real-time traffic estimation for 
          the Bay Bridge in San Francisco. These experiences have refined my ability to merge data-driven insights with 
          economic and policy considerations, reinforcing my belief that ML can be a transformative tool in decision-making and urban development.
          </p>
          
          <p className="mb-4">
          Additionally, my background in both Japan and the U.S. has shaped how I approach problems, 
          allowing me to bridge perspectives across different cultural and economic landscapes. 
          Whether through research, technical projects, or community engagement, I strive to merge analytical rigor 
          with human-centered solutions, ensuring that data science serves not just as a tool for efficiency, but as a force for social good.
          </p>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="bg-card p-2 rounded-lg shadow-md h-full">
            <AspectRatio ratio={4/5} className="overflow-hidden rounded">
              <img 
                src="/images/profile.jpeg" 
                alt="Profile Picture" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
