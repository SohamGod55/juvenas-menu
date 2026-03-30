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
  const hasSubCategories = category.items.some((i) => i.subCategory);

  const hasHalfKg = category.items.some((i) => i.priceHalfKg);
  const hasKg = category.items.some((i) => i.priceKg);
  const hasPc = category.items.some((i) => i.pricePc);

  const groupedItems = hasSubCategories
    ? category.items.reduce<{ sub: string; items: typeof category.items }[]>((acc, item) => {
        const sub = item.subCategory || "";
        const last = acc[acc.length - 1];
        if (last && last.sub === sub) {
          last.items.push(item);
        } else {
          acc.push({ sub, items: [item] });
        }
        return acc;
      }, [])
    : null;

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
        className="group flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background px-3 py-1.5 text-center transition-all hover:bg-primary hover:text-primary-foreground shadow-sm"
      >
        <h2 className="font-display text-sm font-semibold text-primary group-hover:text-primary-foreground md:text-base">
          {category.title}
        </h2>
        <ChevronDown
          className={`h-4 w-4 text-primary group-hover:text-primary-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
            <div className="rounded-b-lg border-x-2 border-b-2 border-primary bg-background">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-primary/30 bg-primary/5">
                      <th className="px-2 py-2 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:px-4 md:text-xs">
                        #
                      </th>
                      <th className="px-2 py-2 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:px-4 md:text-xs">
                        Item
                      </th>
                      {isDesserts ? (
                        <>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs whitespace-nowrap">500 GM</th>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs whitespace-nowrap">750 GM</th>
                          <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs whitespace-nowrap">1 KG</th>
                        </>
                      ) : (
                        <>
                          {hasHalfKg && <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs whitespace-nowrap">½ KG</th>}
                          {hasKg && <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs whitespace-nowrap">1 KG</th>}
                          {hasPc && <th className="px-2 py-2 text-right font-body text-[10px] font-bold uppercase tracking-wider text-primary md:px-4 md:text-xs whitespace-nowrap">PER PC</th>}
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {groupedItems
                      ? groupedItems.map((group) => (
                          <>
                            <tr key={`sub-${group.sub}`} className="bg-primary/10">
                              <td
                                colSpan={10}
                                className="px-2 py-1.5 font-display text-xs font-bold text-primary md:px-4 md:text-sm"
                              >
                                {group.sub}
                              </td>
                            </tr>
                            {group.items.map((item, i) => (
                              <TableRow key={item.no + group.sub} item={item} i={i} isDesserts={isDesserts} hasHalfKg={hasHalfKg} hasKg={hasKg} hasPc={hasPc} isAddon={item.subCategory === "Add-ons"} />
                            ))}
                          </>
                        ))
                      : category.items.map((item, i) => (
                          <TableRow key={item.no} item={item} i={i} isDesserts={isDesserts} hasHalfKg={hasHalfKg} hasKg={hasKg} hasPc={hasPc} isAddon={false} />
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

interface TableRowProps {
  item: { no: number; name: string; recommended?: boolean; priceHalfKg?: string; priceKg?: string; pricePc?: string };
  i: number;
  isDesserts: boolean;
  hasHalfKg: boolean;
  hasKg: boolean;
  hasPc: boolean;
  isAddon: boolean;
}

const TableRow = ({ item, i, isDesserts, hasHalfKg, hasKg, hasPc, isAddon }: TableRowProps) => (
  <tr
    className={`border-b border-border/50 transition-colors hover:bg-secondary/30 ${
      isAddon ? "bg-primary/8" : i % 2 === 0 ? "bg-background" : "bg-background/60"
    }`}
  >
    <td className="px-2 py-2 font-body text-xs text-muted-foreground md:px-4 md:text-sm">{item.no}</td>
    <td className={`px-2 py-2 font-body text-xs font-medium text-foreground md:px-4 md:text-sm ${isDesserts ? "" : ""}`}>
      <span className={isDesserts ? "break-words" : ""}>{item.name}</span>
      {item.recommended && <span className="ml-1 text-sm" title="Chef's Pick">☺</span>}
    </td>
    {isDesserts ? (
      <>
        <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm whitespace-nowrap">{item.priceHalfKg ? `₹${item.priceHalfKg}` : "—"}</td>
        <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm whitespace-nowrap">{item.priceKg ? `₹${item.priceKg}` : "—"}</td>
        <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm whitespace-nowrap">{item.pricePc ? `₹${item.pricePc}` : "—"}</td>
      </>
    ) : (
      <>
        {hasHalfKg && <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm whitespace-nowrap">{item.priceHalfKg ? `₹${item.priceHalfKg}` : "—"}</td>}
        {hasKg && <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm whitespace-nowrap">{item.priceKg ? `₹${item.priceKg}` : "—"}</td>}
        {hasPc && <td className="px-2 py-2 text-right font-body text-xs text-foreground md:px-4 md:text-sm whitespace-nowrap">{item.pricePc ? `₹${item.pricePc}` : "—"}</td>}
      </>
    )}
  </tr>
);

export default MenuSection;
