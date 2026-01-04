// lib/constants.ts
import type { FeaturedItem, NavItem, Review, AllergenKey } from "./types";

import {
  Wheat,
  Milk,
  Egg,
  Fish,
  Pen,
  Nut,
  Bean,
  Salad,
  Leaf,
  Flower2,
} from "lucide-react";


export const JUNGLE_HEX = "#16a34a";

export const NAV_LEFT: NavItem[] = [
  { href: "/", label: "Kezdőlap" },
  { href: "/menu", label: "Menü" },
  { href: "/rolunk", label: "Rólunk" },
];

export const NAV_RIGHT: NavItem[] = [
  
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export const FEATURED: FeaturedItem[] = [
  {
    name: "Jungle Smash",
    desc: "Dupla marha, cheddar, pickles, ropogós hagyma, jungle szósz, briós.",
    price: 3890,
    tag: "Signature",
    imageSrc: "/burger-image.jpg",
  },
  {
    name: "Crispy Chicken",
    desc: "Ropogós csirke, coleslaw, lime-mayo, saláta, briós.",
    price: 3690,
    tag: "Ropogós",
    imageSrc: "/burger-image.jpg",
  },
  {
    name: "Veggie Green",
    desc: "Zöldséges pogácsa, avokádó krém, rukola, paradicsom.",
    price: 3490,
    tag: "Veggie",
    imageSrc: "/burger-image.jpg",
  },
];

export const REVIEWS: Review[] = [
  { name: "Dóri", text: "A Jungle Smash brutál. Külön plusz: a szósz tényleg signature." },
  { name: "Bence", text: "Letisztult menü, gyors választás, és a vizuál nagyon egyben van." },
  { name: "Gabi", text: "A crispy chicken ropog, nem ázik el. A loaded fries kötelező." },
];


// lib/constants.ts
import type { MenuItem } from "@/lib/types";

export const MENU_CATEGORIES = [
  {
    id: "smash",
    title: "SMASHED BURGER",
    subtitle: "Signature smash vonal",
    items: [
      {
        name: "Jungle Smash",
        desc: "Dupla marha, cheddar, pickles, ropogós hagyma, jungle szósz, briós.",
        price: 3890,
        badge: "Best seller",
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "milk", "egg", "mustard"],
      },
      {
        name: "Crispy Chicken",
        desc: "Ropogós csirke, coleslaw, lime-mayo, saláta, briós.",
        price: 3690,
        badge: "Popular",
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "egg", "milk", "mustard"],
      },
      {
        name: "Veggie Green",
        desc: "Zöldséges pogácsa, avokádó krém, rukola, paradicsom.",
        price: 3490,
        badge: "Veggie",
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "soy", "sesame"],
      },
    ],
  },

  {
    id: "classic",
    title: "KLASSZIKUS HAMBURGEREK",
    subtitle: "Classic lineup",
    items: [
      {
        name: "Classic Cheese",
        desc: "Marha, cheddar, hagyma, uborka, szósz, briós.",
        price: 3590,
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "milk", "egg", "mustard"],
      },
      {
        name: "BBQ Bacon",
        desc: "BBQ szósz, bacon, cheddar, ropogós hagyma.",
        price: 3890,
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "milk", "egg", "mustard"],
      },
      {
        name: "Double Bacon",
        desc: "Dupla marha, dupla bacon, cheddar, füstös BBQ.",
        price: 4290,
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "milk", "egg", "mustard"],
      },
    ],
  },

  {
    id: "sides",
    title: "KÖRETEK",
    subtitle: "Fries & extrák",
    items: [
      {
        name: "Loaded Fries",
        desc: "Sajt, bacon, jungle szósz, újhagyma.",
        price: 1990,
        badge: "Best",
        imageSrc: "/burger-image.jpg",
        allergens: ["milk", "egg", "mustard"],
      },
      {
        name: "Sweet Potato Fries",
        desc: "Édesburgonya hasáb, fűszerezve.",
        price: 1690,
        imageSrc: "/burger-image.jpg",
        allergens: [],
      },
      {
        name: "Cheesy Fries",
        desc: "Hasábburgonya olvasztott sajttal.",
        price: 1790,
        imageSrc: "/burger-image.jpg",
        allergens: ["milk"],
      },
      {
        name: "Onion Rings",
        desc: "Rántott hagymakarika.",
        price: 1590,
        imageSrc: "/burger-image.jpg",
        allergens: ["gluten", "egg"],
      },
    ],
  },
] satisfies Array<{
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}>;



export const ALLERGENS: Record<
  AllergenKey,
  { label: string; Icon: any }
> = {
  gluten: { label: "Glutént tartalmazó gabonafélék", Icon: Wheat },
  milk: { label: "Tej és abból készült ételek", Icon: Milk },
  egg: { label: "Tojás és abból készült ételek", Icon: Egg },
  peanut: { label: "Földimogyoró és abból készült termékek", Icon: Pen },
  nuts: { label: "Diófélék", Icon: Nut },
  soy: { label: "Szójabab és abból készült ételek", Icon: Bean },
  fish: { label: "Hal és abból készült ételek", Icon: Fish },
  mustard: { label: "Mustár és a vele ízesített ételek", Icon: Salad },
  celery: { label: "Zeller és abból készült termékek", Icon: Leaf },
  sesame: { label: "Szezámmag", Icon: Flower2 },
};
