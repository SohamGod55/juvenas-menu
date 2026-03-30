import { useState } from "react";
import { motion } from "framer-motion";
import { Cake, Search, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import InfoSections from "@/components/InfoSections";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menuData";

const Index = () => {
  const [search, setSearch] = useState("");

  const filteredCategories = menuData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <InfoSections />

      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-primary">
            <span className="font-display text-lg font-bold uppercase tracking-[0.15em] md:text-xl">
              Menu
            </span>
          </div>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cakes & desserts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border-2 border-primary bg-background py-2.5 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </motion.div>

        {/* Menu sections */}
        {filteredCategories.map((cat, i) => (
          <MenuSection key={cat.title} category={cat} index={i} defaultOpen={false} />
        ))}

        {filteredCategories.length === 0 && (
          <p className="py-20 text-center font-body text-muted-foreground">
            No items found for "{search}"
          </p>
        )}

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-xl border-2 border-primary bg-background p-6 shadow-sm"
        >
          <p className="mb-2 font-display text-base font-semibold text-foreground">
            Kindly specify if you need your order to be eggless.
          </p>
          <p className="mb-1.5 font-body text-sm text-foreground">
            Eggless cakes (Rs 100/Kg extra charge)
          </p>
          <p className="mb-1.5 font-body text-sm text-foreground">
            Fancy Cakes &amp; Wedding Cakes (25-40% Extra Charge)
          </p>
          <p className="mb-1.5 font-body text-sm text-foreground">
            ☺ — Our top recommendations
          </p>
          <p className="mb-4 font-body text-sm text-foreground">
            * - Indicates seasonal availability of Products.
          </p>
          <div className="mt-4 font-body text-xs text-foreground leading-relaxed text-center">
            <a
              href="https://www.google.com/maps?rlz=1CAPXCU_enIN1158&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGDwyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDsyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzkyOGowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KXVU5BOjyF85MSHXCkEoAHvw&daddr=3+rd+floor,+Shalin+Apartment,+near+Toprani+lab,+mirch+masala+lane,+52,+Old+Padra+Rd,+Haribhakti+Colony,+Vadodara,+Gujarat+390007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <MapPin className="h-3.5 w-3.5" />
              3rd floor, Shalin Apartment, 52 Haribhakti Colony, Old Padra Rd, Near Baroda Heart Hospital, Mirch Masala Lane, Vadodara, Gujarat 390007
            </a>
          </div>
          <div className="mt-3 flex flex-col items-center gap-1 text-center font-display text-xl font-bold text-primary md:text-2xl">
            <a href="tel:+919227104646" className="hover:underline">+91 9227104646</a>
            <a href="tel:+919724870015" className="hover:underline">+91 9724870015</a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary bg-background py-6 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-base font-semibold text-primary">
            Juvenas Bakery
          </p>
          <p className="mt-1 font-body text-xs text-muted-foreground">
            Quality &amp; Hygiene - we never compromise
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
