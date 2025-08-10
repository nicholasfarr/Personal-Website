import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-8"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full">
        
        {/* Left: Headshot */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
          <img
            src="/images/headshot2.jpg"
            alt="Nick Farr headshot"
            className="w-56 h-56 object-cover object-top rounded-full shadow-lg border-4 border-orange-500"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Nick Farr</h1>
          <p className="mt-4 text-lg text-gray-300">
            Builder • CS @ UF • ML @ Lockheed
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex justify-center md:justify-start space-x-6 text-orange-500">
            <a
              href= "https://www.linkedin.com/in/nicholas-farr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://github.com/nicholasfarr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <FaGithub size={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}