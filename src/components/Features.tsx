import { motion } from "framer-motion";
import { Brain, Trophy, Target, Zap, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Spaced Repetition",
    description: "Science-backed learning algorithm that optimizes retention and recall",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Gamified Learning",
    description: "Earn XP, unlock badges, and compete on leaderboards while mastering medicine",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Daily Quests",
    description: "Consistent progress through achievable daily goals and streak tracking",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get detailed explanations for every answer to reinforce learning",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Peer Competition",
    description: "Compare progress with classmates and climb the medical school leaderboard",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Custom Learning Paths",
    description: "Tailor your study plan by specialty, exam prep, or clinical focus areas",
    color: "from-indigo-500 to-purple-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Medical Students <span className="text-gradient">Love MedQuest</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed by medical professionals, powered by learning science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
