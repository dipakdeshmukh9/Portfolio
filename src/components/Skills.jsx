export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-24 border-t border-gray-800">
      
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-gray-400 mb-12">
        Technologies and concepts I use to build scalable, performant frontend applications.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <ul className="text-gray-400 space-y-2">
            <li>React.js, Redux Toolkit</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS, HTML, CSS</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Architecture & Performance</h3>
          <ul className="text-gray-400 space-y-2">
            <li>State Management, Component Reusability</li>
            <li>Lazy Loading, Code Splitting</li>
            <li>Memoization, Rendering Optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Testing & Tools</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Jest, React Testing Library</li>
            <li>Git, GitHub</li>
            <li>Chrome DevTools</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">DSA & CS Fundamentals</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Arrays, Trees, Graphs</li>
            <li>Dynamic Programming, Backtracking</li>
            <li>Binary Search, OOP Concepts</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
