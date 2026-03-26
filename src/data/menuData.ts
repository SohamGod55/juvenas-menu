export interface MenuItem {
  no: number;
  name: string;
  recommended?: boolean;
  priceHalfKg?: string;
  priceKg?: string;
  pricePc?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Cakes / Gateaux – Chocolate Delicacies",
    items: [
      { no: 1, name: "Chocolate Temptation", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 2, name: "White Forest", priceHalfKg: "1,010", priceKg: "2,020" },
      { no: 3, name: "Chocolate Truffle", priceHalfKg: "1,040", priceKg: "2,080" },
      { no: 4, name: "Choc Ferrero Rocher", priceHalfKg: "1,140", priceKg: "2,280" },
      { no: 5, name: "Choc Rum n Raisin", priceHalfKg: "1,090", priceKg: "2,180" },
      { no: 6, name: "Choc Walnut / Roasted Almond", priceHalfKg: "1,040", priceKg: "2,080" },
      { no: 7, name: "Belgian Choc Ganache", recommended: true, priceHalfKg: "1,325", priceKg: "2,650" },
      { no: 8, name: "Black Forest", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 9, name: "Choc Butter Scotch", priceHalfKg: "980", priceKg: "1,960" },
      { no: 10, name: "Chocolate Nougat", priceHalfKg: "1,170", priceKg: "2,340" },
      { no: 11, name: "Ultimate Choc Gateaux", priceHalfKg: "1,170", priceKg: "2,340" },
      { no: 12, name: "Choc Orange Gateaux", priceHalfKg: "1,060", priceKg: "2,120" },
      { no: 13, name: "Choc Strawberry Gateaux", priceHalfKg: "1,090", priceKg: "2,180" },
      { no: 14, name: "Choc Salted Caramel", priceHalfKg: "1,170", priceKg: "2,340" },
      { no: 15, name: "Red Velvet Gateaux", priceHalfKg: "1,150", priceKg: "2,300" },
      { no: 16, name: "Crunchy Chocolate", priceHalfKg: "1,230", priceKg: "2,460" },
      { no: 17, name: "Chocolate All Over", priceHalfKg: "1,150", priceKg: "2,300" },
      { no: 18, name: "Lotus Biscoff", priceHalfKg: "1,250", priceKg: "2,500" },
    ],
  },
  {
    title: "Fresh Fruit Gateaux",
    items: [
      { no: 1, name: "Tangy Orange Gateaux", priceHalfKg: "990", priceKg: "1,980" },
      { no: 2, name: "Fresh Pineapple", priceHalfKg: "950", priceKg: "1,900" },
      { no: 3, name: "Fresh Strawberry", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 4, name: "White Choc & Raspberry", recommended: true, priceHalfKg: "1,180", priceKg: "2,360" },
      { no: 5, name: "Apple Caramel", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 6, name: "Raspberry Apple", priceHalfKg: "1,100", priceKg: "2,200" },
      { no: 7, name: "Kiwi-Strawberry", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 8, name: "Blueberry Gateaux", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 9, name: "Fresh Mango Gateaux", recommended: true, priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 10, name: "Rose Pistachio", priceHalfKg: "1,090", priceKg: "2,180" },
    ],
  },
  {
    title: "Coffee Options",
    items: [
      { no: 1, name: "Mocha", priceHalfKg: "1,010", priceKg: "2,020" },
      { no: 2, name: "Choc Irish Coffee", recommended: true, priceHalfKg: "1,010", priceKg: "2,020" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { no: 1, name: "Dark Chocolate Sin", priceKg: "1,950", pricePc: "2,600" },
      { no: 2, name: "Irish Coffee Biscotti", priceKg: "1,785", pricePc: "2,380" },
      { no: 3, name: "Exotic Fruit Trifle Pudding", recommended: true, priceKg: "1,695", pricePc: "2,260" },
      { no: 4, name: "Cheese Cake (Strawberry / Blueberry / Lemon / Choc)", priceHalfKg: "1,230", pricePc: "2,460" },
      { no: 5, name: "Tiramisu", recommended: true, priceKg: "1,800", pricePc: "2,400" },
      { no: 6, name: "Crème Brûlée (min 8)", pricePc: "180/pc" },
      { no: 7, name: "Banoffee Pie", priceHalfKg: "1,100", pricePc: "2,200" },
      { no: 8, name: "Tres Leches Gold", priceKg: "1,785", pricePc: "2,380" },
      { no: 9, name: "Molten Choc with Sauce", priceHalfKg: "1,110", pricePc: "2,220" },
      { no: 10, name: "Choc Orange Trifle (or Strawberry)", priceKg: "1,785", pricePc: "2,380" },
      { no: 11, name: "Choc Nougat Biscotti", recommended: true, priceKg: "1,845", pricePc: "2,460" },
      { no: 12, name: "Éclairs / Profiteroles (min 9pc)", pricePc: "2,320" },
      { no: 13, name: "New York Cheese Cake", priceHalfKg: "1,260", pricePc: "2,520" },
      { no: 14, name: "Citrus Yogi Bliss", priceHalfKg: "1,550" },
      { no: 15, name: "Choc Hazelnut Swiss Rolls", priceHalfKg: "1,190", pricePc: "2,380" },
      { no: 16, name: "Choc Tuxedo Cheese Cake", recommended: true, pricePc: "3,500" },
      { no: 17, name: "Choc Mud Pie", priceKg: "1,875", pricePc: "2,500" },
      { no: 18, name: "Lotus Biscoff Cheese Cake", priceHalfKg: "1,350", pricePc: "2,700" },
    ],
  },
  {
    title: "Pies & Tarts",
    items: [
      { no: 1, name: "Dark Chocolate Walnut Pie", priceHalfKg: "1,200", priceKg: "2,400" },
      { no: 2, name: "Apple Pie", priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 3, name: "Sinful Choc Tarts", pricePc: "210/pc" },
      { no: 4, name: "Apple Crumble", recommended: true, priceHalfKg: "1,090", priceKg: "2,180" },
    ],
  },
  {
    title: "Cupcakes / Muffins",
    items: [
      { no: 1, name: "Choc Dipped Colorful / Fancy Cupcakes", pricePc: "145/pc" },
      { no: 2, name: "Strawberry / Blueberry Cupcakes", pricePc: "145/pc" },
      { no: 3, name: "Marble Cup Cakes (12pc)", pricePc: "850" },
    ],
  },
  {
    title: "Tea Time Companions",
    items: [
      { no: 1, name: "Nuts n Caramel", priceHalfKg: "800", priceKg: "1,600" },
      { no: 2, name: "Marble Cake", priceHalfKg: "800", priceKg: "1,600" },
      { no: 3, name: "Date n Walnut", priceHalfKg: "820", priceKg: "1,640" },
      { no: 4, name: "Choc Walnut Brownie", priceHalfKg: "850", priceKg: "1,700" },
      { no: 5, name: "Gooey Brownie", priceHalfKg: "1,020", priceKg: "2,040" },
      { no: 6, name: "Carrot Cake", priceHalfKg: "820", priceKg: "1,640" },
      { no: 7, name: "Banana Walnut", priceHalfKg: "820", priceKg: "1,640" },
      { no: 8, name: "Honey n Raisin", priceHalfKg: "820", priceKg: "1,640" },
      { no: 9, name: "Pineapple Upside Down", priceHalfKg: "880", priceKg: "1,760" },
      { no: 10, name: "Crusty Marble", priceHalfKg: "930", priceKg: "1,860" },
      { no: 11, name: "Pound Cake", priceHalfKg: "750", priceKg: "1,500" },
      { no: 12, name: "Plum Cake", priceHalfKg: "810", priceKg: "1,620" },
      { no: 13, name: "Orange Rind / Orange Marble", priceHalfKg: "830", priceKg: "1,660" },
      { no: 14, name: "Whole Wheat Date n Almond", priceHalfKg: "850", priceKg: "1,700" },
      { no: 15, name: "Lemon Cake", priceHalfKg: "800", priceKg: "1,600" },
      { no: 16, name: "Parsee Mava Cake", priceHalfKg: "900", priceKg: "1,800" },
      { no: 17, name: "Apple Cinnamon", priceHalfKg: "820", priceKg: "1,640" },
      { no: 18, name: "Cookie Dough Brownie", priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 19, name: "Fig Honey n Walnut", recommended: true, priceHalfKg: "920", priceKg: "1,840" },
      { no: 20, name: "Humming Bird Cake", priceHalfKg: "920", priceKg: "1,840" },
      { no: 21, name: "Fig Date Walnut (Sugar Free / Gluten Free / Dairy Free)", priceHalfKg: "900", priceKg: "1,800" },
    ],
  },
  {
    title: "Hand Crafted Chocolates",
    items: [
      { no: 1, name: "Roasted Nuts", priceKg: "2,500" },
      { no: 2, name: "Rum n Raisin", priceKg: "2,500" },
      { no: 3, name: "Orange Rind", priceKg: "2,500" },
      { no: 4, name: "Irish Coffee", priceKg: "2,500" },
      { no: 5, name: "Premium Nuts", priceKg: "3,000" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { no: 1, name: "Cream Cheese Frosting", priceHalfKg: "250", priceKg: "500" },
      { no: 2, name: "Extra Nuts", priceHalfKg: "60", priceKg: "120" },
    ],
  },
];
