import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import screenProfile from "@/assets/screen-profile.png";
import screenOnboarding from "@/assets/screen-onboarding.png";
import screenCustomize from "@/assets/screen-customize.png";
import screenQuiz from "@/assets/screen-quiz.png";
import screenDashboard from "@/assets/screen-dashboard.png";
import screenAchievements from "@/assets/screen-achievements.png";

const screens = [
  {
    image: screenOnboarding,
    title: "Welcome to MedQuest",
    description: "Start your medical learning journey with gamified onboarding",
  },
  {
    image: screenCustomize,
    title: "Customize Your Path",
    description: "Choose subjects and set daily goals that fit your schedule",
  },
  {
    image: screenDashboard,
    title: "Daily Quest Dashboard",
    description: "Track your progress with streaks, XP, and personalized learning paths",
  },
  {
    image: screenQuiz,
    title: "Interactive Quizzes",
    description: "Answer questions with instant feedback and detailed explanations",
  },
  {
    image: screenProfile,
    title: "Progress Tracker",
    description: "View comprehensive stats, streaks, and weekly performance",
  },
  {
    image: screenAchievements,
    title: "Unlock Achievements",
    description: "Earn badges and compete on leaderboards as you learn",
  },
];

export const PhoneCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section id="features" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the <span className="text-gradient">MedQuest Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore key features that make learning medicine engaging and effective
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Phone mockup */}
          <div className="flex items-center justify-center gap-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-primary hover:bg-primary hover:text-primary-foreground hidden md:flex shrink-0"
            >
              <ChevronLeft />
            </Button>

            <div className="relative flex-1 flex justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Phone frame */}
                <div className="relative w-[320px] h-[650px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl glow-effect">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10" />
                    
                    {/* Screen content */}
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={screens[currentIndex].image}
                        alt={screens[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature description below phone */}
              <motion.div
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-center w-full"
              >
                <h3 className="text-2xl font-bold mb-2">{screens[currentIndex].title}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {screens[currentIndex].description}
                </p>
              </motion.div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-primary hover:bg-primary hover:text-primary-foreground hidden md:flex shrink-0"
            >
              <ChevronRight />
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary"
            >
              <ChevronRight />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
