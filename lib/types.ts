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
  | "gluten"
  | "milk"
  | "egg"
  | "peanut"
  | "nuts"
  | "soy"
  | "fish"
  | "mustard"
  | "celery"
  | "sesame";

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  badge?: string;
  imageSrc: string;

  allergens?: AllergenKey[]; // ✅ add this
};
