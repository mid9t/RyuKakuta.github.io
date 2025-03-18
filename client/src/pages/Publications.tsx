export default function Publications() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 font-heading">Publications</h2>
      
      <div className="space-y-8">
        {/* Coming Soon Message */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              I am currently working on research projects and will update this section with publications as they become available.
            </p>
            <p className="text-sm">
              My research interests include Machine Learning applications in Economics and Public Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}