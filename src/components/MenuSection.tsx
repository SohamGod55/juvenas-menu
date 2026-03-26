import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { MenuCategory } from "@/data/menuData";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

const MenuSection = ({ category, index }: MenuSectionProps) => {
  const hasHalfKg = category.items.some((i) => i.priceHalfKg);
  const hasKg = category.items.some((i) => i.priceKg);
  const hasPc = category.items.some((i) => i.pricePc);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-14"
    >
      <div className="mb-6 flex items-center gap-4">
        <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
          {category.title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full min-w-[500px] text-left">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
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
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                        <Star className="h-3 w-3 fill-accent" />
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
    </motion.section>
  );
};

export default MenuSection;
