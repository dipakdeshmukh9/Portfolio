import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-24"
    >
      {/* Section Heading */}
      <Reveal>
        <h2 className="text-3xl font-bold mb-4">
          Projects
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-gray-400 mb-12 max-w-3xl">
          Production-grade React applications showcasing real-world features,
          performance optimization, and scalable architecture.
        </p>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        <Reveal delay={0.15}>
          <ProjectCard
            title="StreamMate"
            description="Built a YouTube-like platform with live chat, nested comments, and optimized search. Focused on performance, reusable components, and scalable state management using Redux."
            tech="React, Redux, Tailwind CSS"
            live="https://your-live-link"
            github="https://github.com/dipakdeshmukh9/StreamMate"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <ProjectCard
            title="MovieGenie"
            description="Integrated TMDB API with Firebase Authentication to deliver personalized movie browsing. Added YouTube trailer support and AI-powered recommendations."
            tech="React, Firebase, Tailwind CSS"
            live="https://your-live-link"
            github="https://github.com/dipakdeshmukh9/MovieGenie"
          />
        </Reveal>

        <Reveal delay={0.25}>
          <ProjectCard
            title="QuickOrder"
            description="Developed a full-featured food ordering app with API integrations, lazy loading, shimmer UI, and optimized search — reducing load time by 20%."
            tech="React, Context API, Jest"
            live="https://your-live-link"
            github="https://github.com/dipakdeshmukh9/QuickOrder"
          />
        </Reveal>

      </div>
    </section>
  );
}
