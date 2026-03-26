import { useState } from "react";
import { motion } from "framer-motion";
import { Cake, Search } from "lucide-react";
import HeroSection from "@/components/HeroSection";
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

      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Cake className="h-5 w-5 text-accent" />
            <span className="font-body text-sm uppercase tracking-[0.2em]">
              Our Menu
            </span>
            <Cake className="h-5 w-5 text-accent" />
          </div>
          <p className="text-center font-display text-lg italic text-muted-foreground">
            All prices in Indian Rupees (₹)
          </p>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cakes & desserts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
        </motion.div>

        {/* Menu sections */}
        {filteredCategories.map((cat, i) => (
          <MenuSection key={cat.title} category={cat} index={i} />
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
          className="mt-16 rounded-xl border border-border bg-card p-8 shadow-sm"
        >
          <p className="mb-3 font-display text-lg font-semibold text-foreground">
            Kindly specify if you need the order to be eggless.
          </p>
          <p className="mb-2 font-body text-base text-foreground">
            Eggless cakes (Rs 100/Kg extra charge)
          </p>
          <p className="mb-2 font-body text-base text-foreground">
            Fancy Cakes &amp; Wedding Cakes (25-40% Extra Charge)
          </p>
          <p className="mb-2 font-body text-base text-foreground">
            ☺ Chef Recommends.
          </p>
          <p className="mb-6 font-body text-base text-foreground">
            * Indicates seasonal availability of Products.
          </p>
          <p className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Mo. 9227104646, 9724870015
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Juvenas Bakery
        </p>
        <p className="mt-1 font-body text-sm text-muted-foreground">
          Quality &amp; Hygiene - we never compromise
        </p>
      </footer>
    </div>
  );
};

export default Index;
