export default function CV() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 font-heading">CV</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Jump to</h3>
            <ul className="space-y-2">
              <li>
                <a href="#education" className="text-primary hover:underline">Education</a>
              </li>
              <li>
                <a href="#experience" className="text-primary hover:underline">Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-primary hover:underline">Skills</a>
              </li>
              <li>
                <a href="#honors" className="text-primary hover:underline">Honors & Awards</a>
              </li>
              <li>
                <a href="#service" className="text-primary hover:underline">Service</a>
              </li>
              <li>
                <a href="#download" className="text-primary hover:underline">Download CV</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-3 space-y-8">
          {/* Education Section */}
          <div id="education" className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-bold">University of California, Berkeley</h4>
                  <span className="text-muted-foreground">Sep 2023 - Present</span>
                </div>
                <p className="mb-2">B.A. in Data Science</p>
                <p className="text-sm text-muted-foreground">Relevant Coursework: Data Structure & Efficient Algorithms, Designing Deep Neural Networks, Intro to Artificial Intelligence, Data Engineering, Principles and Techniques of Data Science, Probability for Data Science, Algorithmic Economics,	Principles of Engineering Economics </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-bold">Diablo Valley College</h4>
                  <span className="text-muted-foreground">Aug 2018 - May 2022</span>
                </div>
                <p className="mb-2">Associate in Computer Science</p>
                <p className="text-sm text-muted-foreground">GPA: 4.0/4.0</p>
                <p className="text-sm text-muted-foreground">Calculus I, II, III, Advanced Programming in C++, Assembly Language Foundation</p>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div id="experience" className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Experience</h3>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-bold">Software Engineer</h4>
                  <span className="text-muted-foreground">Jan 2025 - Present</span>
                </div>
                <p className="font-medium mb-2">Fractal Analytics</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Develop a real-time alert system that detects significant market and economic events</li>
                  <li>Integrate historical impact analysis to predict changes in product demand and supply</li>
                  <li>Calculate attribution factors to quantify the influence of detected events</li>
                  <li>Generate actionable recommendations for operational strategies</li>
                  <li>Design the system with an agentic framework, ensuring autonomy and adaptive decision-making capabilities</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-bold">Business Analyst and Development Management Intern</h4>
                  <span className="text-muted-foreground">Dec 2022 - Aug 2023</span>
                </div>
                <p className="font-medium mb-2">Terra Drone Corp., USA</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Created an automated sales quotation system using Google Spreadsheet that reduced quotation lead times by 18%</li>
                  <li>Collaborated with clients to identify and implement process improvements that increase client satisfaction by 12% and boosted sales conversion rates by 8%</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-lg font-bold">Programming Instructor</h4>
                  <span className="text-muted-foreground">May 2019 - Aug 2020</span>
                </div>
                <p className="font-medium mb-2">Litalico Inc</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Designed and implemented LEGO MINDSTORMS programming curricula, increasing student engagement by 25% and boosting task completion rates by 30% among a class of 20 elementary students</li>
                  <li>Created mock A/B testing environments to simulate diverse scenarios while tracking key metrics—including lines of code, task completion, and number of faulty code—to identify improvement areas and optimize learning outcomes.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div id="skills" className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Skills</h3>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Programming Languages</h4>
                  <p className="text-sm">Python, C++, MATLAB, PyTorch, TensorFlow, Scikit-learn</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Tools & Frameworks</h4>
                  <p className="text-sm">Git, Docker, Jupyter</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Areas of Expertise</h4>
                  <p className="text-sm">Machine Learning, Neural Network</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Languages</h4>
                  <p className="text-sm">English (Fluent), Japanese (Native)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Honors & Awards Section */}
          <div id="honors" className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Honors & Awards</h3>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Assocaite Student of DVC President's Award</span> - 2021-2022
                  </div>
                </li>
              </ul>
            </div>
          </div>
        
          {/* Download CV Section */}
          <div id="download" className="scroll-mt-20">
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
              >
                Download Full CV (PDF)
              </a>
              <p className="text-sm text-muted-foreground mt-2">Last updated: March 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
