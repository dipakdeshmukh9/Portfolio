export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        
        <p className="text-gray-400 mb-4">
          Hi, I’m Dipak Deshmukh 👋
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Frontend React Developer
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          I build scalable, high-performance React applications  
          with clean architecture and strong problem-solving skills.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="./Dipak_P_Deshmukh_CV.pdf"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-white"
          >
            Download Resume
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          React • Redux • Tailwind • DSA • Performance
        </p>

      </div>
    </section>
  );
}
