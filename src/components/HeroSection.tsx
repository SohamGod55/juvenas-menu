import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heroBg}
        alt="Juvenas Bakery — freshly baked cakes and desserts"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80"
        >
          Artisan Cakes & Desserts
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl"
        >
          Juvenas Bakery
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 h-[2px] w-24 origin-center bg-accent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 max-w-md font-body text-base text-primary-foreground/70"
        >
          Handcrafted with love — explore our full menu of cakes, desserts, and sweet indulgences.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
