import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import logo from "@/assets/juvenas-logo.png";

const HeroSection = () => {
  return (
    <section className="pt-4 pb-6 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.img
          src={logo}
          alt="Juvenas - Cakes & Desserts"
          className="mx-auto mb-2 h-28 w-auto md:h-36"
          style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.a
          href="https://www.instagram.com/juvenasdesserts/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-1 text-primary hover:underline mb-3"
        >
          <Instagram className="h-4 w-4" />
          <span className="font-body text-xs">@juvenasdesserts</span>
        </motion.a>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-sm italic text-primary md:text-base"
        >
          Where Every Creation is Crafted Fresh, Just for You
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-3 flex items-center justify-center gap-3 font-body text-sm text-primary"
        >
          <a href="tel:+919227104646" className="hover:underline">+91 9227104646</a>
          <span className="text-muted-foreground">|</span>
          <a href="tel:+919724870015" className="hover:underline">+91 9724870015</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
