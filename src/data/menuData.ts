export interface MenuItem {
  no: number;
  name: string;
  recommended?: boolean;
  priceHalfKg?: string;
  priceKg?: string;
  pricePc?: string;
  subCategory?: string;
  subItems?: string[];
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Cake / Gateaux",
    items: [
      // Chocolate
      { no: 1, name: "Chocolate Temptation", subCategory: "Chocolate", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 2, name: "White Forest", subCategory: "Chocolate", priceHalfKg: "1,010", priceKg: "2,020" },
      { no: 3, name: "Chocolate Truffle", subCategory: "Chocolate", priceHalfKg: "1,040", priceKg: "2,080" },
      { no: 4, name: "Choc Ferrero Rocher", subCategory: "Chocolate", priceHalfKg: "1,140", priceKg: "2,280" },
      { no: 5, name: "Choc Rum n Raisin", subCategory: "Chocolate", priceHalfKg: "1,090", priceKg: "2,180" },
      { no: 6, name: "Choc Walnut/Roasted Almond", subCategory: "Chocolate", priceHalfKg: "1,040", priceKg: "2,080" },
      { no: 7, name: "Belgian Choc Ganache", subCategory: "Chocolate", recommended: true, priceHalfKg: "1,325", priceKg: "2,650" },
      { no: 8, name: "Black Forest", subCategory: "Chocolate", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 9, name: "Choc Butter Scotch", subCategory: "Chocolate", priceHalfKg: "980", priceKg: "1,960" },
      { no: 10, name: "Chocolate Nougat", subCategory: "Chocolate", priceHalfKg: "1,170", priceKg: "2,340" },
      { no: 11, name: "Ultimate Choc Gateaux", subCategory: "Chocolate", priceHalfKg: "1,170", priceKg: "2,340" },
      { no: 12, name: "Choc Orange Gateaux", subCategory: "Chocolate", priceHalfKg: "1,060", priceKg: "2,120" },
      { no: 13, name: "Choc Strawberry Gateaux", subCategory: "Chocolate", priceHalfKg: "1,090", priceKg: "2,180" },
      { no: 14, name: "Choc Salted Caramel", subCategory: "Chocolate", priceHalfKg: "1,170", priceKg: "2,340" },
      { no: 15, name: "Red Velvet Gateaux", subCategory: "Chocolate", priceHalfKg: "1,150", priceKg: "2,300" },
      { no: 16, name: "Crunchy Chocolate", subCategory: "Chocolate", priceHalfKg: "1,230", priceKg: "2,460" },
      { no: 17, name: "Chocolate All over", subCategory: "Chocolate", priceHalfKg: "1,150", priceKg: "2,300" },
      { no: 18, name: "Lotus Biscoff", subCategory: "Chocolate", priceHalfKg: "1,250", priceKg: "2,500" },
      // Fresh Fruit
      { no: 19, name: "Tangy Orange Gateaux", subCategory: "Fresh Fruit*", priceHalfKg: "990", priceKg: "1,980" },
      { no: 20, name: "Fresh Pineapple", subCategory: "Fresh Fruit*", priceHalfKg: "950", priceKg: "1,900" },
      { no: 21, name: "Fresh Strawberry", subCategory: "Fresh Fruit*", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 22, name: "White Choc & Raspberry", subCategory: "Fresh Fruit*", recommended: true, priceHalfKg: "1,180", priceKg: "2,360" },
      { no: 23, name: "Apple Caramel", subCategory: "Fresh Fruit*", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 24, name: "Raspberry Apple", subCategory: "Fresh Fruit*", priceHalfKg: "1,100", priceKg: "2,200" },
      { no: 25, name: "Kiwi-Strawberry", subCategory: "Fresh Fruit*", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 26, name: "Blueberry Gateaux", subCategory: "Fresh Fruit*", priceHalfKg: "1,000", priceKg: "2,000" },
      { no: 27, name: "Fresh Mango Gateaux", subCategory: "Fresh Fruit*", recommended: true, priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 28, name: "Rose Pistachio", subCategory: "Fresh Fruit*", priceHalfKg: "1,090", priceKg: "2,180" },
      // Coffee
      { no: 29, name: "Mocha", subCategory: "Coffee", priceHalfKg: "1,010", priceKg: "2,020" },
      { no: 30, name: "Choc Irish Coffee", subCategory: "Coffee", recommended: true, priceHalfKg: "1,010", priceKg: "2,020" },
    ],
  },
  {
    title: "Tea Cakes",
    items: [
      { no: 1, name: "Nuts n Caramel", priceHalfKg: "800", priceKg: "1,600" },
      { no: 2, name: "Marble cake", priceHalfKg: "800", priceKg: "1,600" },
      { no: 3, name: "Date n Walnut", priceHalfKg: "820", priceKg: "1,640" },
      { no: 4, name: "Choc Walnut Brownie", priceHalfKg: "850", priceKg: "1,700" },
      { no: 5, name: "Gooey Brownie", priceHalfKg: "1,020", priceKg: "2,040" },
      { no: 6, name: "Carrot Cake", priceHalfKg: "820", priceKg: "1,640" },
      { no: 7, name: "Banana Walnut", priceHalfKg: "820", priceKg: "1,640" },
      { no: 8, name: "Honey n Raisin", priceHalfKg: "820", priceKg: "1,640" },
      { no: 9, name: "Pineapple Upside Down", priceHalfKg: "880", priceKg: "1,760" },
      { no: 10, name: "Crusty Marble", priceHalfKg: "930", priceKg: "1,860" },
      { no: 11, name: "Pound cake", priceHalfKg: "750", priceKg: "1,500" },
      { no: 12, name: "Plum Cake*", priceHalfKg: "810", priceKg: "1,620" },
      { no: 13, name: "Orange Rind/Orange Marble", priceHalfKg: "830", priceKg: "1,660" },
      { no: 14, name: "Whole Wheat Date n Almond", priceHalfKg: "850", priceKg: "1,700" },
      { no: 15, name: "Lemon cake", priceHalfKg: "800", priceKg: "1,600" },
      { no: 16, name: "Parsee Mava Cake", priceHalfKg: "900", priceKg: "1,800" },
      { no: 17, name: "Apple Cinnamon", priceHalfKg: "820", priceKg: "1,640" },
      { no: 18, name: "Cookie Dough Brownie", priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 19, name: "Fig Honey n Walnut", priceHalfKg: "920", priceKg: "1,840" },
      { no: 20, name: "Humming bird cake", priceHalfKg: "920", priceKg: "1,840" },
      { no: 21, name: "Fig Date Walnut (Sugar free/Gluten Free/Dairy free)", priceHalfKg: "900", priceKg: "1,800" },
      // Add-ons
      { no: 1, name: "Cream Cheese Frosting", subCategory: "Add-ons", priceHalfKg: "250", priceKg: "500" },
      { no: 2, name: "Extra Nuts", subCategory: "Add-ons", priceHalfKg: "60", priceKg: "120" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { no: 1, name: "Dark Chocolate Sin", priceKg: "1,950", pricePc: "2,600" },
      { no: 2, name: "Irish Coffee Biscotti", priceKg: "1,785", pricePc: "2,380" },
      { no: 3, name: "Exotic Fruit\nTrifle Pudding", recommended: true, priceKg: "1,695", pricePc: "2,260" },
      { no: 4, name: "Cheese Cake", subItems: ["Strawberry", "Blueberry", "Raspberry"], priceHalfKg: "1,230", pricePc: "2,460" },
      { no: 5, name: "Tiramisu", recommended: true, priceKg: "1,830", pricePc: "2,440" },
      { no: 6, name: "Crème Brûlée (min 8)", pricePc: "180/pc" },
      { no: 7, name: "Banoffee Pie", priceHalfKg: "1,100", pricePc: "2,200" },
      { no: 8, name: "Tres Leches Gold", priceKg: "1,785", pricePc: "2,380" },
      { no: 9, name: "Molten Choc with sauce", priceHalfKg: "1,110", pricePc: "2,220" },
      { no: 10, name: "Choc Orange/Strawberry\nTrifle", priceKg: "1,785", pricePc: "2,380" },
      { no: 11, name: "Choc Nougat Biscotti", recommended: true, priceKg: "1,845", pricePc: "2,460" },
      { no: 12, name: "Éclairs/Profet rolls (min 9pc)", pricePc: "2,320" },
      { no: 13, name: "New York\nCheese Cake", priceHalfKg: "1,260", pricePc: "2,520" },
      { no: 14, name: "Citrus Yogi bliss", priceHalfKg: "1,550" },
      { no: 15, name: "Choc Hazelnut Swiss Rolls", priceHalfKg: "1,190", pricePc: "2,380" },
      { no: 16, name: "Choc Tuxedo\nCheese Cake", recommended: true, pricePc: "3,500" },
      { no: 17, name: "Choc Mud Pie", priceKg: "1,875", pricePc: "2,500" },
      { no: 18, name: "Lotus Biscoff Cheese cake", priceHalfKg: "1,350", pricePc: "2,700" },
    ],
  },
  {
    title: "Pies & Tarts",
    items: [
      { no: 1, name: "Dark Chocolate walnut Pie", priceHalfKg: "1,200", priceKg: "2,400" },
      { no: 2, name: "Apple Pie", priceHalfKg: "1,050", priceKg: "2,100" },
      { no: 3, name: "Sinful Choc Tarts", pricePc: "210/pc" },
      { no: 4, name: "Apple Crumble", recommended: true, priceHalfKg: "1,090", priceKg: "2,180" },
    ],
  },
  {
    title: "Cupcakes / Muffins",
    items: [
      { no: 1, name: "Choc dipped Colorful / Fancy Cupcakes", pricePc: "145/pc" },
      { no: 2, name: "Strawberry / Blueberry Cupcakes", pricePc: "145/pc" },
      { no: 3, name: "Marble Cup Cakes (12pc)", pricePc: "850" },
    ],
  },
  {
    title: "Hand Crafted Chocolates",
    items: [
      { no: 1, name: "Roasted Nuts", priceKg: "2,600" },
      { no: 2, name: "Rum n Raisin", priceKg: "2,600" },
      { no: 3, name: "Orange Rind", priceKg: "2,600" },
      { no: 4, name: "Irish Coffee", priceKg: "2,600" },
      { no: 5, name: "Premium Nuts", recommended: true, priceKg: "3,000" },
    ],
  },
];
