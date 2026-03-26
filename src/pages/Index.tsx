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
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Juvenas Bakery
        </p>
        <p className="mt-1 font-body text-sm text-muted-foreground">
          Handcrafted with love, one slice at a time.
        </p>
      </footer>
    </div>
  );
};

export default Index;
