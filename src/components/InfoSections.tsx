import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MapPin, Instagram, Lightbulb, CreditCard } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, icon, children, defaultOpen = false }: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-2 px-4 py-3 text-left font-display text-base font-semibold text-foreground hover:bg-secondary/30 transition-colors"
      >
        {icon}
        <span className="flex-1">{title}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InfoSections = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        {/* Concept */}
        <CollapsibleSection title="Concept" icon={<Lightbulb className="h-4 w-4 text-accent" />}>
          <div className="space-y-3 font-body text-sm text-foreground leading-relaxed">
            <p className="font-display text-base font-semibold">Our Concept</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>All our creations are made fresh to order. Kindly place orders at least one day in advance and specify if you require an eggless option.</li>
              <li>We request orders to be placed via <strong className="text-foreground">phone call only</strong>, to ensure clarity and personal attention. <em>Kindly do not WhatsApp or message your orders.</em></li>
              <li>For pictures and our latest creations, follow us on Instagram at <a href="https://www.instagram.com/juvenas_desserts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"><Instagram className="h-3.5 w-3.5" />@juvenas_desserts</a></li>
              <li>While we offer a wide menu, we are happy to create cakes and desserts as per your preferences.</li>
              <li>Same-day orders may be accepted depending on availability.</li>
              <li>Clients outside Baroda can place orders for their loved ones in the city.</li>
              <li>We curate gift hampers for special occasions such as Diwali, New Year, baby announcements, and weddings.</li>
              <li>Select items, including tea-time cakes and hampers, can be couriered across India (charges applicable).</li>
              <li>Prices are subject to change without prior notice.</li>
              <li>Juvenas maintains the highest standards of quality and hygiene.</li>
            </ul>
          </div>
        </CollapsibleSection>

        {/* Contact Us */}
        <CollapsibleSection title="Contact Us" icon={<Phone className="h-4 w-4 text-accent" />}>
          <div className="space-y-3 font-body text-sm text-foreground">
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">
                  <a href="tel:+919227104646" className="hover:text-accent">+91 9227104646</a>
                  {" , "}
                  <a href="tel:+919724870015" className="hover:text-accent">+91 9724870015</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">3rd floor, Shalin Apartment, near Toprani lab, Mirch Masala Lane, 52, Old Padra Rd, Haribhakti Colony, Vadodara, Gujarat 390007</p>
                <a
                  href="https://www.google.com/maps?daddr=3+rd+floor,+Shalin+Apartment,+near+Toprani+lab,+mirch+masala+lane,+52,+Old+Padra+Rd,+Haribhakti+Colony,+Vadodara,+Gujarat+390007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-accent text-xs font-semibold hover:underline"
                >
                  <MapPin className="h-3 w-3" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Payment */}
        <CollapsibleSection title="Payment" icon={<CreditCard className="h-4 w-4 text-accent" />}>
          <div className="space-y-3 font-body text-sm text-foreground">
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Kindly share the screenshot after payment</li>
              <li>Do not pay before getting confirmation</li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default InfoSections;
