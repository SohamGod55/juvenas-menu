import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import type { MenuCategory } from "@/data/menuData";
import { categoryIcons, type CategoryColor } from "@/data/menuData";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
  defaultOpen?: boolean;
}

const colorMap: Record<CategoryColor, string> = {
  cakes: "var(--cat-cakes)",
  fruit: "var(--cat-fruit)",
  coffee: "var(--cat-coffee)",
  desserts: "var(--cat-desserts)",
  pies: "var(--cat-pies)",
  muffins: "var(--cat-muffins)",
  chocolates: "var(--cat-chocolates)",
  teatime: "var(--cat-teatime)",
  addons: "var(--cat-addons)",
};

const MenuSection = ({ category, index, defaultOpen = false }: MenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasHalfKg = category.items.some((i) => i.priceHalfKg);
  const hasKg = category.items.some((i) => i.priceKg);
  const hasPc = category.items.some((i) => i.pricePc);

  const catInfo = categoryIcons[category.title] || { emoji: "🍴", color: "cakes" as CategoryColor };
  const catColor = colorMap[catInfo.color];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4"
    >
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-3 rounded-xl px-5 py-4 text-left transition-all hover:brightness-110"
        style={{
          background: `linear-gradient(135deg, hsl(${catColor}) , hsl(${catColor} / 0.85))`,
        }}
      >
        <span className="text-2xl">{catInfo.emoji}</span>
        <h2 className="flex-1 font-display text-lg font-semibold text-white md:text-xl">
          {category.title}
        </h2>
        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold text-white">
          {category.items.length}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="rounded-b-xl border-x border-b bg-card"
              style={{ borderColor: `hsl(${catColor} / 0.25)` }}
            >
              {/* Mobile: card layout */}
              <div className="flex flex-col gap-1 p-2 md:hidden">
                {category.items.map((item) => (
                  <div
                    key={item.no}
                    className="flex items-start justify-between gap-2 rounded-lg px-3 py-2.5 odd:bg-secondary/40"
                  >
                    <span className="font-body text-sm font-medium text-foreground flex items-center gap-1.5 flex-1 min-w-0">
                      <span className="text-muted-foreground text-xs">{item.no}.</span>
                      <span className="truncate">{item.name}</span>
                      {item.recommended && (
                        <Star className="h-3 w-3 flex-shrink-0 fill-accent text-accent" />
                      )}
                    </span>
                    <span className="flex flex-col items-end gap-0.5 text-xs font-body whitespace-nowrap">
                      {hasHalfKg && item.priceHalfKg && (
                        <span className="text-muted-foreground">½kg: <strong className="text-foreground">₹{item.priceHalfKg}</strong></span>
                      )}
                      {hasKg && item.priceKg && (
                        <span className="text-muted-foreground">750g: <strong className="text-foreground">₹{item.priceKg}</strong></span>
                      )}
                      {hasPc && item.pricePc && (
                        <span className="text-muted-foreground">Pc/1kg: <strong className="text-foreground">₹{item.pricePc}</strong></span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Desktop: table layout */}
              <div className="hidden md:block">
                <table className="w-full text-left">
                  <thead>
                    <tr
                      className="border-b"
                      style={{
                        borderColor: `hsl(${catColor} / 0.15)`,
                        background: `hsl(${catColor} / 0.06)`,
                      }}
                    >
                      <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        #
                      </th>
                      <th className="px-4 py-3 font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Item
                      </th>
                      {hasHalfKg && (
                        <th className="px-4 py-3 text-right font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          ½ kg
                        </th>
                      )}
                      {hasKg && (
                        <th className="px-4 py-3 text-right font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          750GM
                        </th>
                      )}
                      {hasPc && (
                        <th className="px-4 py-3 text-right font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          PER PC / 1KG
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, i) => (
                      <tr
                        key={item.no}
                        className={`border-b border-border/50 transition-colors hover:bg-secondary/30 ${
                          i % 2 === 0 ? "bg-card" : "bg-card/60"
                        }`}
                      >
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">
                          {item.no}
                        </td>
                        <td className="px-4 py-3 font-body text-sm font-medium text-foreground">
                          <span className="flex items-center gap-2">
                            {item.name}
                            {item.recommended && (
                              <span
                                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                                style={{ background: `hsl(${catColor})` }}
                              >
                                <Star className="h-3 w-3 fill-white" />
                                Chef's Pick
                              </span>
                            )}
                          </span>
                        </td>
                        {hasHalfKg && (
                          <td className="px-4 py-3 text-right font-body text-sm text-foreground">
                            {item.priceHalfKg ? `₹${item.priceHalfKg}` : "—"}
                          </td>
                        )}
                        {hasKg && (
                          <td className="px-4 py-3 text-right font-body text-sm text-foreground">
                            {item.priceKg ? `₹${item.priceKg}` : "—"}
                          </td>
                        )}
                        {hasPc && (
                          <td className="px-4 py-3 text-right font-body text-sm text-foreground">
                            {item.pricePc ? `₹${item.pricePc}` : "—"}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default MenuSection;
