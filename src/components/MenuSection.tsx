import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
};

const MenuSection = ({ category, index, defaultOpen = false }: MenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const catInfo = categoryIcons[category.title] || { emoji: "🍴", color: "cakes" as CategoryColor };
  const catColor = colorMap[catInfo.color];

  const isDesserts = category.title === "Desserts";

  const hasHalfKg = category.items.some((i) => i.priceHalfKg);
  const hasKg = category.items.some((i) => i.priceKg);
  const hasPc = category.items.some((i) => i.pricePc);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="mb-2"
    >
      {/* Accordion Header — smaller */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-left transition-all hover:brightness-110 shadow-sm"
        style={{
          background: `linear-gradient(135deg, hsl(${catColor}), hsl(${catColor} / 0.8))`,
          boxShadow: `0 2px 8px -2px hsl(${catColor} / 0.3)`,
        }}
      >
        <h2 className="flex-1 font-display text-sm font-semibold text-white md:text-base">
          {category.title}
        </h2>
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
          {category.items.length}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="rounded-b-lg border-x border-b bg-card"
              style={{ borderColor: `hsl(${catColor} / 0.3)` }}
            >
              {/* Table layout for both mobile and desktop */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr
                      className="border-b"
                      style={{
                        borderColor: `hsl(${catColor} / 0.2)`,
                        background: `hsl(${catColor} / 0.08)`,
                      }}
                    >
                      <th className="px-2 py-2 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:px-4 md:text-xs">
                        #
                      </th>
                      <th className="px-2 py-2 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:px-4 md:text-xs">
                        Item
                      </th>
                      {isDesserts ? (
                        <>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs" style={{ color: `hsl(${catColor})` }}>
                            500 GM
                          </th>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs" style={{ color: `hsl(${catColor})` }}>
                            750 GM
                          </th>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs" style={{ color: `hsl(${catColor})` }}>
                            1 KG
                          </th>
                        </>
                      ) : (
                        <>
                          {hasHalfKg && (
                            <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs" style={{ color: `hsl(${catColor})` }}>
                              ½ KG
                            </th>
                          )}
                          {hasKg && (
                            <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs" style={{ color: `hsl(${catColor})` }}>
                              1 KG
                            </th>
                          )}
                          {hasPc && (
                            <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs" style={{ color: `hsl(${catColor})` }}>
                              PER PC
                            </th>
                          )}
                        </>
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
                        style={item.recommended ? { background: `hsl(${catColor} / 0.06)` } : undefined}
                      >
                        <td className="px-2 py-2 font-body text-xs text-muted-foreground md:px-4 md:text-sm">
                          {item.no}
                        </td>
                        <td className="px-2 py-2 font-body text-xs font-medium text-foreground md:px-4 md:text-sm">
                          {item.name}
                          {item.recommended && <span className="ml-1 text-sm" title="Chef's Pick">☺</span>}
                        </td>
                        {isDesserts ? (
                          <>
                            <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm">
                              {item.priceHalfKg ? `₹${item.priceHalfKg}` : "—"}
                            </td>
                            <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm">
                              {item.priceKg ? `₹${item.priceKg}` : "—"}
                            </td>
                            <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm">
                              {item.pricePc ? `₹${item.pricePc}` : "—"}
                            </td>
                          </>
                        ) : (
                          <>
                            {hasHalfKg && (
                              <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm">
                                {item.priceHalfKg ? `₹${item.priceHalfKg}` : "—"}
                              </td>
                            )}
                            {hasKg && (
                              <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm">
                                {item.priceKg ? `₹${item.priceKg}` : "—"}
                              </td>
                            )}
                            {hasPc && (
                              <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm">
                                {item.pricePc ? `₹${item.pricePc}` : "—"}
                              </td>
                            )}
                          </>
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
