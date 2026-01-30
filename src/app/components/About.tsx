import { motion, useInView } from "framer-motion";

import { useRef } from 'react';

import { Code, Palette, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful and intuitive user interfaces',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Optimizing for speed and user experience',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with teams',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1765371513492-264506c3ad09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3Njk2MzM2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-lg text-slate-600 mb-4">
              I’m a Computer Science student and Full Stack Developer who enjoys building
              scalable web applications with clean, maintainable code. I focus on creating
              solutions that are both user-friendly and technically sound.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Alongside development, I actively strengthen my problem-solving skills by
              mastering Data Structures and Algorithms. I enjoy learning new technologies,
              working on real-world projects, and continuously improving my coding practices.
            </p>
            <motion.a
              href={`/resume.pdf`} // Standard React way
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon className="text-white" size={24} />
              </motion.div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
