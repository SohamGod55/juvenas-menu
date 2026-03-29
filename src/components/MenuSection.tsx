import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { MenuCategory } from "@/data/menuData";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
  defaultOpen?: boolean;
}

const MenuSection = ({ category, index, defaultOpen = false }: MenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-left transition-all hover:brightness-110 shadow-sm bg-primary"
      >
        <h2 className="flex-1 font-display text-sm font-semibold text-primary-foreground md:text-base">
          {category.title}
        </h2>
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-bold text-primary-foreground backdrop-blur-sm">
          {category.items.length}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-primary-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="rounded-b-lg border-x border-b border-primary/30 bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-primary/20 bg-primary/5">
                      <th className="px-2 py-2 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:px-4 md:text-xs">
                        #
                      </th>
                      <th className="px-2 py-2 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:px-4 md:text-xs">
                        Item
                      </th>
                      {isDesserts ? (
                        <>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs">
                            500 GM
                          </th>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs">
                            750 GM
                          </th>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs">
                            1 KG
                          </th>
                        </>
                      ) : (
                        <>
                          {hasHalfKg && (
                            <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs">
                              ½ KG
                            </th>
                          )}
                          {hasKg && (
                            <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs">
                              1 KG
                            </th>
                          )}
                          {hasPc && (
                            <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs">
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
                        style={item.recommended ? { background: "hsl(var(--primary) / 0.06)" } : undefined}
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
