import { motion } from "framer-motion";
import { Award, Flame, Star, TrendingUp } from "lucide-react";

const badges = [
  { emoji: "🧠", name: "Anatomy Expert", color: "bg-pink-500" },
  { emoji: "🔥", name: "10-Day Streak", color: "bg-orange-500" },
  { emoji: "🎯", name: "Perfect Round", color: "bg-blue-500" },
  { emoji: "🏆", name: "Top Scorer", color: "bg-yellow-500" },
  { emoji: "💉", name: "Clinical Skills Pro", color: "bg-green-500" },
  { emoji: "🦠", name: "Micro Master", color: "bg-purple-500" },
];

const journey = [
  { title: "Sign Up", icon: Star },
  { title: "Choose Specialty", icon: Award },
  { title: "Start Quest", icon: Flame },
  { title: "Earn XP", icon: TrendingUp },
  { title: "Unlock Levels", icon: Award },
  { title: "Join Leaderboard", icon: TrendingUp },
];

export const Gamification = () => {
  return (
    <section id="gamification" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Progress from medical student to knowledge champion
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-light via-primary to-primary-glow -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 shadow-lg relative z-10">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-medium">{step.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-3">Unlock Epic Badges</h3>
          <p className="text-muted-foreground">
            Celebrate your achievements with beautiful badges and track your progress
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -180 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
              className="group cursor-pointer"
            >
              <div className={`aspect-square rounded-2xl ${badge.color} p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="text-5xl mb-2">{badge.emoji}</div>
                <span className="text-xs font-bold text-white">{badge.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2.5K+</div>
              <div className="text-primary-foreground/80">Medical Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-primary-foreground/80">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-primary-foreground/80">Questions Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
