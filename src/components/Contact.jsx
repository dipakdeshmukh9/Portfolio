export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-24 border-t border-gray-800 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>

      <p className="text-gray-400 mb-10">
        Open to frontend React opportunities and challenging projects.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:dipak.deshmukh1911@gmail.com"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white"
        >
          Email
        </a>

        <a
          href="https://github.com/dipakdeshmukh9"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dipakdeshmukh19/"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white"
        >
          LinkedIn
        </a>

        <a
          href="/Dipak_P_Deshmukh_CV.pdf"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
