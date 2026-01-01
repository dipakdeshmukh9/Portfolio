import Reveal from "./Reveal";

export default function DSA() {
  return (
    <section className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-24">

        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Problem Solving & DSA
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-gray-400 mb-10 max-w-3xl">
            Strong foundation in data structures and algorithms, backed by
            competitive programming performance and real-world problem solving.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* LeetCode */}
          <Reveal delay={0.15}>
            <a
              href="https://leetcode.com/u/DipakDeshmukh2/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                LeetCode Guardian
              </h3>
              <p className="text-gray-400">
                Top <span className="text-white font-medium">0.7%</span> globally
              </p>
            </a>
          </Reveal>

          {/* Contest Rating */}
          <Reveal delay={0.2}>
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Contest Rating
              </h3>
              <p className="text-gray-400">
                Rating <span className="text-white font-medium">2247</span>
              </p>
            </div>
          </Reveal>

          {/* YouTube Live */}
          <Reveal delay={0.25}>
            <a
              href="https://www.youtube.com/live/_HEoU7vNHXc?si=QtIhQbpZpE-kQ3Ef"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                Live DSA Session
              </h3>
              <p className="text-gray-400">
                Solved <span className="text-white font-medium">150+</span>{" "}
                problems in a 6-hour live session
              </p>
            </a>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
