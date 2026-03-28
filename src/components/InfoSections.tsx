import { motion } from "framer-motion";
import { Lightbulb, Phone, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const buttons = [
  { label: "Concept", icon: Lightbulb, to: "/concept" },
  { label: "Contact Us", icon: Phone, to: "/contact" },
  { label: "Payment", icon: CreditCard, to: "/payment" },
];

const InfoSections = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-3"
      >
        {buttons.map((btn) => (
          <Link
            key={btn.label}
            to={btn.to}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-3 font-display text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md md:text-base"
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
