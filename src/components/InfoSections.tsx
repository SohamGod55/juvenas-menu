import { motion } from "framer-motion";
import { Lightbulb, CreditCard, Info } from "lucide-react";
import { Link } from "react-router-dom";

const buttons = [
  { label: "About Us", icon: Info, to: "/about" },
  { label: "Concept", icon: Lightbulb, to: "/concept" },
  { label: "Payment", icon: CreditCard, to: "/payment" },
];

const InfoSections = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-2"
      >
        {buttons.map((btn) => (
          <Link
            key={btn.label}
            to={btn.to}
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background px-3 py-3 font-display text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md md:text-base"
          >
            <btn.icon className="h-4 w-4" />
            {btn.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default InfoSections;
