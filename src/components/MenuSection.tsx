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

      {/* Mobile: card layout */}
      <div className="flex flex-col gap-2 md:hidden">
        {category.items.map((item) => (
          <div
            key={item.no}
            className="rounded-lg border border-border bg-card p-3 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                <span className="text-muted-foreground">{item.no}.</span>
                {item.name}
                {item.recommended && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-accent">
                    <Star className="h-2.5 w-2.5 fill-accent" />
                  </span>
                )}
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-3 text-xs font-body text-muted-foreground">
              {hasHalfKg && item.priceHalfKg && (
                <span>½kg: <strong className="text-foreground">₹{item.priceHalfKg}</strong></span>
              )}
              {hasKg && item.priceKg && (
                <span>750gm: <strong className="text-foreground">₹{item.priceKg}</strong></span>
              )}
              {hasPc && item.pricePc && (
                <span>Pc/1kg: <strong className="text-foreground">₹{item.pricePc}</strong></span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: table layout */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full text-left">
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
