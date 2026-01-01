export default function Navbar() {
  return (
    <nav className="w-full py-6 flex justify-between items-center max-w-6xl mx-auto px-4">
      <h1 className="text-xl font-bold">Dipak.dev</h1>

      <div className="space-x-6 text-gray-400">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </nav>
  );
}
