import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 bg-background">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 rounded-full bg-primary-light/20 border border-primary-light/40 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary">
                  🎓 Safe for work • Built for medical students
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Master Medicine,</span>
              <span className="text-gradient">One Quest at a Time.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Duolingo-inspired gamified learning designed specifically for medical students.
              Build your knowledge through daily quests, earn XP, and conquer medical school.
            </p>

            <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary-glow glow-effect">
                <Download className="mr-2" />
                Download for Windows
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary-light/10">
                <Download className="mr-2" />
                Download for Android
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-16 justify-center">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Questions Answered</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
