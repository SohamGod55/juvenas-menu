import { motion } from "framer-motion";
import logo from "@/assets/juvenas-logo.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-primary/90 py-10 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.img
          src={logo}
          alt="Juvenas - Cakes & Desserts"
          className="mx-auto mb-6 h-24 w-auto md:h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-3xl font-bold text-primary-foreground md:text-5xl"
        >
          Juvenas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-3 font-display text-base italic text-primary-foreground/80 md:text-lg"
        >
          Where Every Creation is Crafted Fresh, Just for You
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 space-y-4 font-body text-sm text-primary-foreground/75 leading-relaxed md:text-base"
        >
          <p>
            At Juvenas, we bring you an exclusive dial-up experience for specialty cakes, desserts, and handcrafted chocolates—each creation made only upon order, with the promise of absolute freshness.
          </p>
          <p>
            Rooted in a passion for perfection, we uphold the highest standards of quality and hygiene, ensuring every bite reflects care, purity, and fine craftsmanship.
          </p>
          <p>
            From birthday and theme cakes to elegant wedding creations, from fresh fruit gateaux to delicate teatime cakes and handcrafted chocolates—our collection is thoughtfully curated to celebrate every occasion with grace.
          </p>
          <p className="font-display font-semibold text-primary-foreground/90 italic">
            Crafted Fresh. Served with Elegance. Made to be Remembered.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
