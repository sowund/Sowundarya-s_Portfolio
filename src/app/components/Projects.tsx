import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Freelancer Marketplace Platform',
    description: 'A full-stack marketplace platform where clients can post jobs, freelancers can bid on projects, and users can manage profiles and work securely.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/sowund/Freelancer_Website',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Full Stack Food App',
    description: 'A food ordering web application with user authentication, restaurant listings, cart functionality, and order tracking.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/sowund/Food-App',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Map-Based News Retrieval System',
    description: 'A location-based news retrieval system that displays relevant news articles on an interactive map using geographic filters.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React+Vite','JavaScript', 'Maps API', 'News API'],
    github: 'https://github.com/sowund/Map_Based_News_Retrieval_System',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Water Quality Prediction System',
    description: 'A machine learning system that predicts water quality based on environmental and chemical parameters to support environmental monitoring.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/sowund/water_quality_prediction',
    demo: 'https://example.com',
  },
];


export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative overflow-hidden h-56 group">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
