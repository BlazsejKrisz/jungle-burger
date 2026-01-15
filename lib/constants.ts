// lib/constants.ts
import type { FeaturedItem, NavItem, Review, AllergenKey, MenuItem } from "./types";

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

/* ---------------------------------
   BASIC UI CONSTANTS
---------------------------------- */

export const JUNGLE_HEX = "#16a34a";

export const NAV_LEFT: NavItem[] = [
  { href: "/", label: "Kezdőlap" },
  { href: "/menu", label: "Menü" },
  { href: "/rolunk", label: "Rólunk" },
];

export const NAV_RIGHT: NavItem[] = [{ href: "/kapcsolat", label: "Kapcsolat" }];

/* ---------------------------------
   HERO / LANDING
---------------------------------- */

export const FEATURED: FeaturedItem[] = [
  {
    name: "Jungle Smash",
    desc: "Dupla smash marha, cheddar, jungle szósz.",
    price: 3390,
    tag: "Signature",
    imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglesmash%20%E2%80%93%20nagy.jpeg",
  },
  {
    name: "Cheese’Bacon Fries",
    desc: "Hasábburgonya, sajtszósz, bacon chips",
    price: 1690,
    tag: "Loaded",
    imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/cheesefries%20%E2%80%93%20nagy.jpeg",
  },
  {
    name: "Jungle Marha Tál",
    desc: "Salátakeverék, marhahús, cheddar, édesburgonya",
    price: 3690,
    tag: "Tál",
    imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/marhatal%20%E2%80%93%20nagy.jpeg",
  },
];

export const REVIEWS: Review[] = [
  { name: "Dóri", text: "A Jungle Smash tényleg betalál. Már a felétől jól laktam!" },
  { name: "Bence", text: "Hangulatos hely, jók az árak, finomak az ételek! 10/10" },
  { name: "Gabi", text: "A sajtos baconös krumpli nálam kötelező lett." },
];

/* ---------------------------------
   MENU TYPES
---------------------------------- */

export type MenuSubCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export type MenuExtras = {
  title: string;
  items: Array<{ name: string; price?: number }>;
  note?: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  subtitle?: string;
  sections: MenuSubCategory[];
  extras?: MenuExtras;
};

/* ---------------------------------
   MENU DATA (FULL)
---------------------------------- */

export const MENU_GROUPS: MenuGroup[] = [
  /* ===============================
     BURGEREK
     - Classic + Smash
     - Extras at bottom as stylish plain text
  =============================== */
  {
    id: "burgerek",
    title: "BURGEREK",
    subtitle: "Classic & smashed",
    sections: [
      {
        id: "classic",
        title: "KLASSZIKUS HAMBURGEREK",
        subtitle: "Classic lineup",
        items: [
          {
            name: "Jungle Classic",
            desc: "Jungle szósz, saláta, paradicsom, marhahús, cheddar",
            price: 2990,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/jungleclassic%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Chili Chimp 🌶️",
            desc: "Pikáns majonéz, saláta, paradicsom, marhahús, csípős pirított kolbászchips, jalapeno, füstölt sajt",
            price: 3390,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/chilichimp%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Jungle Double",
            desc: "Jungle szósz, saláta, paradicsom, dupla marhahús, dupla bacon, dupla cheddar",
            price: 4090,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/jungledouble%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "BBQ Panther",
            desc: "BBQ szósz, sajtszósz, paradicsom, lilahagyma, marhahús, bacon, füstölt sajt",
            price: 3590,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/bbqpanther%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Jungle Vega",
            desc: "Jungle szósz, saláta, paradicsom, grillezett kecskesajt, csemegeuborka",
            price: 3690,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglevega%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Zöld Mamba",
            desc: "Zöldfűszeres majonéz, saláta, paradicsom, rántott csirkemell csíkok, csemegeuborka",
            price: 3390,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/zoldmamba%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard"],
          },
        ],
      },
      {
        id: "smash",
        title: "SMASHED BURGER",
        subtitle: "Signature smash vonal",
        items: [
          {
            name: "Jungle Smash",
            desc: "Jungle szósz, paradicsom, dupla smash marhahús, dupla cheddar, grill mozzarella, csemegeuborka",
            price: 3390,
            badge: "Signature",
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglesmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Cheddar Smash 🌶️",
            desc: "Cheddar szósz, paradicsom, dupla smash marhahús, bacon, dupla cheddar, pirított hagyma, jalapeno",
            price: 3490,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/cheddarsmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Sárga Mamba Smash",
            desc: "Currys majonéz, paradicsom, lilahagyma, dupla smash marhahús, bacon, dupla cheddar, rántott camembert",
            price: 3590,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/sargamambasmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Classic Smash",
            desc: "Ketchup-mustár, lilahagyma, dupla smash marhahús, dupla cheddar, csemegeuborka",
            price: 2690,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/classicsmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
        ],
      },
    ],
    extras: {
      title: "EXTRA FELTÉTEK",
      note: "Ár / feltét",
      items: [
        { name: "Marhahús", price: 1090 },
        { name: "Kecskesajt", price: 890 },
        { name: "Grill mozzarella", price: 790 },
        { name: "Füstölt sajt", price: 390 },
        { name: "Jalapeno", price: 300 },
        { name: "Pirított hagyma", price: 300 },
        { name: "Bacon", price: 300 },
        { name: "Cheddar", price: 300 },
        { name: "Csemegeuborka", price: 300 },
      ],
    },
  },

  /* ===============================
     TÁLAK
  =============================== */
  {
    id: "talak",
    title: "TÁLAK",
    sections: [
      {
        id: "bowls",
        title: "TÁLAK",
        items: [
          {
            name: "Jungle Marha Tál",
            desc: "Jungle szósz, salátakeverék, marhahús, cheddarral, édesburgonya",
            price: 3690,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/marhatal%20%E2%80%93%20nagy.jpeg",
            allergens: ["milk", "egg", "mustard"],
          },
          {
            name: "Jungle Vega Tál",
            desc: "Jungle szósz, salátakeverék, 2 grillezett kecskesajt, édesburgonya",
            price: 3890,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/kecsketal%20%E2%80%93%20nagy.jpeg",
            allergens: ["milk", "egg", "mustard"],
          },
        ],
      },
    ],
  },

  /* ===============================
     HOTDOG
  =============================== */
  {
    id: "hotdog",
    title: "HOTDOG",
    sections: [
      {
        id: "hotdogs",
        title: "HOTDOG",
        items: [
          {
            name: "Jungle Dog",
            desc: "Marhahús, hotdog kifli, ketchup-mustár, cheddar, pirított hagyma, csemegeuborka",
            price: 2390,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/jungledog%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Normál Hotdog",
            desc: "Virsli, hotdog kifli, választható 2 szósz, választható 1 feltét",
            price: 1990,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/normalhotdog%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "mustard"],
          },
        ],
      },
    ],
    extras: {
      title: "VÁLASZTHATÓK",
      note: "A Normál Hotdoghoz",
      items: [
        {
          name: "Választható szósz: Jungle szósz, ketchup, mustár, sajtszósz, chiliszósz, BBQ szósz",
        },
        { name: "Választható feltét: pirított hagyma, jalapeno, csemegeuborka" },
      ],
    },
  },

  /* ===============================
     MÁRTOGATÓS (NO IMAGES)
  =============================== */
  {
    id: "martogatos",
    title: "MÁRTOGATÓS",
    subtitle: "300 Ft",
    sections: [
      {
        id: "sauces",
        title: "SZÓSZOK",
        items: [
          { name: "Jungle szósz", desc: "", price: 300, allergens: ["egg", "mustard"] },
          { name: "Curry majonéz", desc: "", price: 300, allergens: ["egg", "mustard"] },
          { name: "Sajtszósz", desc: "", price: 300, allergens: ["milk"] },
          { name: "Pikáns majonéz", desc: "", price: 300, allergens: ["egg", "mustard"] },
          { name: "Chili szósz", desc: "", price: 300, allergens: [] },
          { name: "Ketchup", desc: "", price: 300, allergens: [] },
          { name: "BBQ szósz", desc: "", price: 300, allergens: [] },
          { name: "Zöldfűszeres majonéz", desc: "", price: 300, allergens: ["egg", "mustard"] },
        ],
      },
    ],
  },

  /* ===============================
     KÖRETEK + LOADED FRIES
  =============================== */
  {
    id: "koretek",
    title: "KÖRETEK",
    sections: [
      {
        id: "sides",
        title: "KÖRETEK",
        items: [
          { name: "Hasábburgonya", desc: "", price: 1090, imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/hasabburgonya%20%E2%80%93%20nagy.jpeg", allergens: [] },
          { name: "Édesburgonya", desc: "", price: 1390, imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/IMG_9236%20%E2%80%93%20nagy.jpeg", allergens: [] },
          { name: "Káposztasaláta", desc: "", price: 890, imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/kapsali%20%E2%80%93%20nagy.jpeg", allergens: ["egg", "mustard"] },
          { name: "Uborkasaláta", desc: "", price: 690, imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/ubisali%20%E2%80%93%20nagy.jpeg", allergens: [] },
          {
            name: "Jungle Strips",
            desc: "3db csirkecsík + 1 választható szósz",
            price: 1690,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglestrips%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg"],
          },
        ],
      },
      {
        id: "loaded-fries",
        title: "LOADED FRIES",
        items: [
          {
            name: "Cheese’Bacon Fries",
            desc: "Hasábburgonya, sajtszósz, bacon chips",
            price: 1690,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/cheesefries%20%E2%80%93%20nagy.jpeg",
            allergens: ["milk", "egg", "mustard"],
          },
          {
            name: "BBQ’Smoked Fries",
            desc: "Hasábburgonya, BBQ szósz, kolbász chips",
            price: 1690,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/bbqfries%20%E2%80%93%20nagy.jpeg",
            allergens: ["egg", "mustard"],
          },
        ],
      },
    ],
  },

  /* ===============================
     DESSZERT
  =============================== */
  {
    id: "desszert",
    title: "DESSZERT",
    sections: [
      {
        id: "sweet",
        title: "DESSZERT",
        items: [
          {
            name: "Churros",
            desc: "6 db churros, csokoládé szósszal",
            price: 1490,
            imageSrc: "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/churros%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk"],
          },
        ],
      },
    ],
  },

  /* ===============================
     ITALOK (NO IMAGES)
  =============================== */
  {
    id: "italok",
    title: "ITALOK",
    sections: [
      {
        id: "drinks",
        title: "ITALOK",
        items: [
          { name: "Limonádé 0,4L", desc: "Citrusos, epres", price: 690, allergens: [] },
          { name: "Üdítő 0,5L", desc: "", price: 790, allergens: [] },
          { name: "Víz 0,5L", desc: "", price: 390, allergens: [] },
        ],
      },
    ],
  },
];

/* ---------------------------------
   ALLERGENS
---------------------------------- */

export const ALLERGENS: Record<AllergenKey, { label: string; Icon: any }> = {
  gluten: { label: "Glutént tartalmazó gabonafélék", Icon: Wheat },
  milk: { label: "Tej és abból készült ételek", Icon: Milk },
  egg: { label: "Tojás és abból készült ételek", Icon: Egg },
  peanut: { label: "Földimogyoró", Icon: Pen },
  nuts: { label: "Diófélék", Icon: Nut },
  soy: { label: "Szójabab", Icon: Bean },
  fish: { label: "Hal", Icon: Fish },
  mustard: { label: "Mustár", Icon: Salad },
  celery: { label: "Zeller", Icon: Leaf },
  sesame: { label: "Szezámmag", Icon: Flower2 },
};
