// lib/types.ts
export type FeaturedItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  imageSrc: string;
};

export type Review = {
  name: string;
  text: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type AllergenKey =
  | "gluten"      // 1
  | "crustaceans" // 2
  | "egg"         // 3
  | "fish"        // 4
  | "peanut"      // 5
  | "soy"         // 6
  | "milk"        // 7
  | "nuts"        // 8
  | "celery"      // 9
  | "mustard"     // 10
  | "sesame"      // 11
  | "sulphites"   // 12
  | "lupin"       // 13
  | "molluscs";   // 14

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  badge?: string;
  imageSrc?: string;

  allergens?: AllergenKey[]; // ✅ add this
};
