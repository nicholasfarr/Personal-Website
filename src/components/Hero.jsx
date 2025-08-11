import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-8"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full">
        
        {/* Left: Headshot in Glass Card */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
          <div className="bg-white/10 backdrop-blur-lg border border-orange-500 rounded-xl p-4 shadow-lg">
            <img
              src="/images/headshot2.jpg"
              alt="Nick Farr headshot"
              className="w-60 h-60 object-cover object-top rounded-lg"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h1 className="h-display text-4xl md:text-5xl font-bold tracking-tight">
            Nick Farr
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Builder • CS @ UF • ML @ Lockheed
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex justify-center md:justify-start space-x-6 text-orange-500">
            <a
              href="https://www.linkedin.com/in/nicholas-farr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-transform transform hover:scale-110 hover:-rotate-3"
            >
              <FaLinkedin size={48} />
            </a>
            <a
              href="https://github.com/nicholasfarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-transform transform hover:scale-110 hover:rotate-3"
            >
              <FaGithub size={48} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}