import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="border-b-2 border-primary py-4 px-4">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link to="/" className="text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-display text-xl font-bold text-primary">About Us</h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl px-4 py-8"
      >
        <div className="rounded-xl border-2 border-primary bg-background/80 backdrop-blur-sm p-6 shadow-sm space-y-4 font-body text-sm text-foreground leading-relaxed">
          <p>
            At Juvenas, we bring you an exclusive dial-up experience for specialty cakes, desserts, and handcrafted chocolates—each creation made only upon order, with the promise of absolute freshness.
          </p>
          <p>
            Rooted in a passion for perfection, we uphold the highest standards of quality and hygiene, ensuring every bite reflects care, purity, and fine craftsmanship.
          </p>
          <p>
            From birthday and theme cakes to elegant wedding creations, from fresh fruit gateaux to delicate teatime cakes and handcrafted chocolates—our collection is thoughtfully curated to celebrate every occasion with grace.
          </p>
          <p className="font-display font-semibold text-primary italic">
            Crafted Fresh. Served with Elegance. Made to be Remembered.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
