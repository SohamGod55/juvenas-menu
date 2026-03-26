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
    title: "Signature Cakes",
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
      { no: 19, name: "Tangy Orange Gateaux", priceHalfKg: "990", priceKg: "1,980" },
      { no: 20, name: "Fresh Pineapple", priceHalfKg: "950", priceKg: "1,900" },
    ],
  },
  {
    title: "Fruit & Specialty Cakes",
    items: [
      { no: 21, name: "Fresh Strawberry", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 22, name: "White Choc & Raspberry", recommended: true, priceHalfKg: "1,180", priceKg: "2,360" },
      { no: 23, name: "Apple Caramel", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 24, name: "Raspberry Apple", priceHalfKg: "1,100", priceKg: "2,200" },
      { no: 25, name: "Kiwi-Strawberry", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 26, name: "Blueberry Gateaux", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 27, name: "Fresh Mango Gateaux", recommended: true, priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 28, name: "Rose Pistachio", priceHalfKg: "1,090", priceKg: "2,180" },
      { no: 29, name: "Mocha", priceHalfKg: "1,010", priceKg: "2,020" },
      { no: 30, name: "Choc Irish Coffee", recommended: true, priceHalfKg: "1,010", priceKg: "2,020" },
    ],
  },
  {
    title: "Premium Desserts",
    items: [
      { no: 31, name: "Dark Chocolate Sin", pricePc: "2,600", priceKg: "1,950" },
      { no: 32, name: "Irish Coffee Biscotti", pricePc: "2,380", priceKg: "1,785" },
      { no: 33, name: "Exotic Fruit Trifle Pudding", recommended: true, pricePc: "2,260", priceKg: "1,695" },
      { no: 34, name: "Cheese Cake (Strawberry / Blueberry / Lemon / Choc)", priceHalfKg: "1,230", priceKg: "2,460" },
      { no: 35, name: "Tiramisu", recommended: true, pricePc: "2,400", priceKg: "1,800" },
      { no: 36, name: "Crème Brûlée (min 8)", pricePc: "180/pc" },
      { no: 37, name: "Banoffee Pie", priceHalfKg: "1,100", priceKg: "2,200" },
      { no: 38, name: "Tres Leches Gold", pricePc: "2,380", priceKg: "1,785" },
      { no: 39, name: "Molten Choc with Sauce", priceHalfKg: "1,110", priceKg: "2,220" },
      { no: 40, name: "Choc Orange Trifle (or Strawberry)", pricePc: "2,380", priceKg: "1,785" },
    ],
  },
  {
    title: "Pies, Tarts & Cheesecakes",
    items: [
      { no: 41, name: "Choc Nougat Biscotti", recommended: true, pricePc: "2,460", priceKg: "1,845" },
      { no: 42, name: "Éclairs / Profiteroles (min 9pc)", pricePc: "2,320" },
      { no: 43, name: "New York Cheese Cake", priceHalfKg: "1,260", priceKg: "2,520" },
      { no: 44, name: "Citrus Yogi Bliss", priceKg: "1,550" },
      { no: 45, name: "Choc Hazelnut Swiss Rolls", priceHalfKg: "1,190", priceKg: "2,380" },
      { no: 46, name: "Choc Tuxedo Cheese Cake", recommended: true, priceKg: "3,500" },
      { no: 47, name: "Choc Mud Pie", pricePc: "2,500", priceKg: "1,875" },
      { no: 48, name: "Lotus Biscoff Cheese Cake", priceHalfKg: "1,350", priceKg: "2,700" },
      { no: 49, name: "Dark Chocolate Walnut Pie", priceHalfKg: "1,200", priceKg: "2,400" },
      { no: 50, name: "Apple Pie", priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 51, name: "Sinful Choc Tarts", pricePc: "210/pc" },
      { no: 52, name: "Apple Crumble", recommended: true, priceHalfKg: "1,090", priceKg: "2,180" },
    ],
  },
  {
    title: "Cupcakes & Brownies",
    items: [
      { no: 53, name: "Choc Dipped Colorful / Fancy Cupcakes", pricePc: "145/pc" },
      { no: 54, name: "Strawberry / Blueberry Cupcakes", pricePc: "145/pc" },
      { no: 55, name: "Marble Cup Cakes (12pc)", pricePc: "850" },
      { no: 56, name: "Nuts n Caramel", priceHalfKg: "800", priceKg: "1,600" },
      { no: 57, name: "Marble Cake", priceHalfKg: "800", priceKg: "1,600" },
      { no: 58, name: "Date n Walnut", priceHalfKg: "820", priceKg: "1,640" },
      { no: 59, name: "Choc Walnut Brownie", priceHalfKg: "850", priceKg: "1,700" },
      { no: 60, name: "Gooey Brownie", priceHalfKg: "1,020", priceKg: "2,040" },
    ],
  },
  {
    title: "Tea Cakes & Loaves",
    items: [
      { no: 61, name: "Carrot Cake", priceHalfKg: "820", priceKg: "1,640" },
      { no: 62, name: "Banana Walnut", priceHalfKg: "820", priceKg: "1,640" },
      { no: 63, name: "Honey n Raisin", priceHalfKg: "820", priceKg: "1,640" },
      { no: 64, name: "Pineapple Upside Down", priceHalfKg: "880", priceKg: "1,760" },
      { no: 65, name: "Crusty Marble", priceHalfKg: "930", priceKg: "1,860" },
      { no: 66, name: "Pound Cake", priceHalfKg: "750", priceKg: "1,500" },
      { no: 67, name: "Plum Cake", priceHalfKg: "810", priceKg: "1,620" },
      { no: 68, name: "Orange Rind / Orange Marble", priceHalfKg: "830", priceKg: "1,660" },
      { no: 69, name: "Whole Wheat Date n Almond", priceHalfKg: "850", priceKg: "1,700" },
      { no: 70, name: "Lemon Cake", priceHalfKg: "800", priceKg: "1,600" },
      { no: 71, name: "Parsee Mava Cake", priceHalfKg: "900", priceKg: "1,800" },
      { no: 72, name: "Apple Cinnamon", priceHalfKg: "820", priceKg: "1,640" },
      { no: 73, name: "Cookie Dough Brownie", priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 74, name: "Fig Honey n Walnut", recommended: true, priceHalfKg: "920", priceKg: "1,840" },
      { no: 75, name: "Humming Bird Cake", priceHalfKg: "920", priceKg: "1,840" },
      { no: 76, name: "Fig Date Walnut (Free-from)", priceHalfKg: "900", priceKg: "1,800" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { no: 77, name: "Cream Cheese Frosting", priceHalfKg: "250", priceKg: "500" },
      { no: 78, name: "Extra Nuts", priceHalfKg: "60", priceKg: "120" },
    ],
  },
];
