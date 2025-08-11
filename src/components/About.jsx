export default function About() {
    return (
      <section id="about" className="py-0 -mt-65">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          
          {/* Glass Card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-lg">
            <p className="text-white/90 leading-relaxed">
              I am a rising sophomore Computer Science student at the University of Florida studying Computer Science. 
              My current interests lie in Machine Learning, Web3, Quantitative Finance, and Startups.
              <br /><br />
              This summer, I am interning at Lockheed Martin as a Software Engineer Intern, as a part of their 
              Test Data Analytics and Modeling team, where I am building pipelines for manufacturing anomaly detection.
            </p>
          </div>
        </div>
      </section>
    );
  }