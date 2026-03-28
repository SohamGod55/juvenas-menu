import { motion } from "framer-motion";
import { ArrowLeft, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const ConceptPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-4 px-4">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link to="/" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-display text-xl font-bold text-primary-foreground">Concept</h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl px-4 py-8"
      >
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Our Concept</h2>
          <ul className="list-disc pl-5 space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
            <li>All our creations are made fresh to order. Kindly place orders at least one day in advance and specify if you require an eggless option.</li>
            <li>We request orders to be placed via <strong className="text-foreground">phone call only</strong>, to ensure clarity and personal attention. <em>Kindly do not WhatsApp or message your orders.</em></li>
            <li>
              For pictures and our latest creations, follow us on Instagram at{" "}
              <a href="https://www.instagram.com/juvenas_desserts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
                <Instagram className="h-3.5 w-3.5" />@juvenas_desserts
              </a>
            </li>
            <li>While we offer a wide menu, we are happy to create cakes and desserts as per your preferences.</li>
            <li>Same-day orders may be accepted depending on availability.</li>
            <li>Clients outside Baroda can place orders for their loved ones in the city.</li>
            <li>We curate gift hampers for special occasions such as Diwali, New Year, baby announcements, and weddings.</li>
            <li>Select items, including tea-time cakes and hampers, can be couriered across India (charges applicable).</li>
            <li>Prices are subject to change without prior notice.</li>
            <li>Juvenas maintains the highest standards of quality and hygiene.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ConceptPage;
