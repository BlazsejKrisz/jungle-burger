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
  Shell,
  AlertTriangle,
  Sprout,
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
    imageSrc:
      "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglesmash%20%E2%80%93%20nagy.jpeg",
  },
  {
    name: "Cheese’Bacon Fries",
    desc: "Hasábburgonya, sajtszósz, bacon chips",
    price: 1690,
    tag: "Loaded",
    imageSrc:
      "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/cheesefries%20%E2%80%93%20nagy.jpeg",
  },
  {
    name: "Jungle Marha Tál",
    desc: "Salátakeverék, marhahús, cheddar, édesburgonya",
    price: 3690,
    tag: "Tál",
    imageSrc:
      "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/marhatal%20%E2%80%93%20nagy.jpeg",
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
   Updated allergens per your 1–14 list:
   - Burgers + Smash: 1,3,7,10,11
   - Bowls: 3,7,10,11
   - Strips: 1,3,7,11
   - Coleslaw: 3,10
   - Cheese’Bacon Fries: 7
   - BBQ’Smoked Fries: 10
   - Jungle sauce: 3,7,10
   - Mustard sauce: 10
   - Cheese sauce: 7
   - BBQ sauce: 10
---------------------------------- */

export const MENU_GROUPS: MenuGroup[] = [
  /* ===============================
     BURGEREK
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
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/jungleclassic%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Chili Chimp 🌶️",
            desc: "Pikáns majonéz, saláta, paradicsom, marhahús, csípős pirított kolbászchips, jalapeno, füstölt sajt",
            price: 3390,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/chilichimp%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Jungle Double",
            desc: "Jungle szósz, saláta, paradicsom, dupla marhahús, dupla bacon, dupla cheddar",
            price: 4090,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/jungledouble%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "BBQ Panther",
            desc: "BBQ szósz, sajtszósz, paradicsom, lilahagyma, marhahús, bacon, füstölt sajt",
            price: 3590,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/bbqpanther%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Jungle Vega",
            desc: "Jungle szósz, saláta, paradicsom, grillezett kecskesajt, csemegeuborka",
            price: 3690,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglevega%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Zöld Mamba",
            desc: "Zöldfűszeres majonéz, saláta, paradicsom, rántott csirkemell csíkok, csemegeuborka",
            price: 3390,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/zoldmamba%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
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
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglesmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Cheddar Smash 🌶️",
            desc: "Cheddar szósz, paradicsom, dupla smash marhahús, bacon, dupla cheddar, pirított hagyma, jalapeno",
            price: 3490,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/cheddarsmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Sárga Mamba Smash",
            desc: "Currys majonéz, paradicsom, lilahagyma, dupla smash marhahús, bacon, dupla cheddar, rántott camembert",
            price: 3590,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/sargamambasmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Classic Smash",
            desc: "Ketchup-mustár, lilahagyma, dupla smash marhahús, dupla cheddar, csemegeuborka",
            price: 2690,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/classicsmash%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "mustard", "sesame"],
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
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/marhatal%20%E2%80%93%20nagy.jpeg",
            allergens: ["egg", "milk", "mustard", "sesame"],
          },
          {
            name: "Jungle Vega Tál",
            desc: "Jungle szósz, salátakeverék, 2 grillezett kecskesajt, édesburgonya",
            price: 3890,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/kecsketal%20%E2%80%93%20nagy.jpeg",
            allergens: ["egg", "milk", "mustard", "sesame"],
          },
        ],
      },
    ],
  },

  /* ===============================
     HOTDOG
     (You did not provide allergen numbers for hotdogs, so keeping your previous keys.)
     If you want hotdogs aligned to the 1–14 list too, send the numbers and I’ll update.
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
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/jungledog%20%E2%80%93%20nagy.jpeg",
            // kept as-is (not provided in your allergen list dump)
            allergens: ["gluten", "milk", "egg", "mustard"],
          },
          {
            name: "Normál Hotdog",
            desc: "Virsli, hotdog kifli, választható 2 szósz, választható 1 feltét",
            price: 1990,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/normalhotdog%20%E2%80%93%20nagy.jpeg",
            // kept as-is (not provided in your allergen list dump)
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
          // Jungle szósz → 3,7,10
          { name: "Jungle szósz", desc: "", price: 300, allergens: ["egg", "milk", "mustard"] },
          // (not provided in your list; leaving as-is)
          { name: "Curry majonéz", desc: "", price: 300, allergens: ["egg",] },
          // Sajtszósz → 7
          { name: "Sajtszósz", desc: "", price: 300, allergens: ["milk"] },
          // (not provided in your list; leaving as-is)
          { name: "Pikáns majonéz", desc: "", price: 300, allergens: ["egg"] },
          // Chiliszósz → –
          { name: "Chili szósz", desc: "", price: 300, allergens: [] },
          // Ketchup → –
          { name: "Ketchup", desc: "", price: 300, allergens: [] },
          // BBQ szósz → 10
          { name: "BBQ szósz", desc: "", price: 300, allergens: ["mustard"] },
          // (not provided in your list; leaving as-is)
          { name: "Zöldfűszeres majonéz", desc: "", price: 300, allergens: ["egg"] },
          // Mustár → 10 (if you list it as a sauce item)
          { name: "Mustár", desc: "", price: 300, allergens: ["mustard"] },
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
          // Hasábburgonya → –
          {
            name: "Hasábburgonya",
            desc: "",
            price: 1090,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/hasabburgonya%20%E2%80%93%20nagy.jpeg",
            allergens: [],
          },
          // Édesburgonya → –
          {
            name: "Édesburgonya",
            desc: "",
            price: 1390,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/IMG_9236%20%E2%80%93%20nagy.jpeg",
            allergens: [],
          },
          // Amerikai káposztasaláta → 3,10
          {
            name: "Amerikai káposztasaláta",
            desc: "",
            price: 890,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/kapsali%20%E2%80%93%20nagy.jpeg",
            allergens: ["egg", "mustard"],
          },
          // Uborkasaláta → –
          {
            name: "Uborkasaláta",
            desc: "",
            price: 690,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/ubisali%20%E2%80%93%20nagy.jpeg",
            allergens: [],
          },
          // Jungle Strips → 1,3,7,11
          {
            name: "Jungle Strips",
            desc: "3db csirkecsík + 1 választható szósz",
            price: 1690,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglestrips%20%E2%80%93%20nagy.jpeg",
            allergens: ["gluten", "egg", "milk", "sesame"],
          },
        ],
      },
      {
        id: "loaded-fries",
        title: "LOADED FRIES",
        items: [
          // Cheese’Bacon Fries → 7
          {
            name: "Cheese’Bacon Fries",
            desc: "Hasábburgonya, sajtszósz, bacon chips",
            price: 1690,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/cheesefries%20%E2%80%93%20nagy.jpeg",
            allergens: ["milk"],
          },
          // BBQ’Smoked Fries → 10
          {
            name: "BBQ’Smoked Fries",
            desc: "Hasábburgonya, BBQ szósz, kolbász chips",
            price: 1690,
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/bbqfries%20%E2%80%93%20nagy.jpeg",
            allergens: ["mustard"],
          },
        ],
      },
    ],
  },

  /* ===============================
     DESSZERT
     (No allergen numbers provided for churros; keeping existing keys.)
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
            imageSrc:
              "https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/churros%20%E2%80%93%20nagy.jpeg",
            // kept as-is (not in your allergen dump)
            allergens: ["gluten"],
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
   ALLERGENS (HU 1–14)
---------------------------------- */

export const ALLERGENS: Record<AllergenKey, { label: string; Icon: any; code: number }> = {
  gluten: { code: 1, label: "Glutént tartalmazó gabonafélék", Icon: Wheat },
  crustaceans: { code: 2, label: "Rákfélék", Icon: Shell },
  egg: { code: 3, label: "Tojás", Icon: Egg },
  fish: { code: 4, label: "Hal", Icon: Fish },
  peanut: { code: 5, label: "Földimogyoró", Icon: Pen },
  soy: { code: 6, label: "Szójabab", Icon: Bean },
  milk: { code: 7, label: "Tej (beleértve a laktózt is)", Icon: Milk },
  nuts: { code: 8, label: "Diófélék", Icon: Nut },
  celery: { code: 9, label: "Zeller", Icon: Leaf },
  mustard: { code: 10, label: "Mustár", Icon: Salad },
  sesame: { code: 11, label: "Szezámmag", Icon: Flower2 },
  sulphites: { code: 12, label: "Kén-dioxid és szulfitok", Icon: AlertTriangle },
  lupin: { code: 13, label: "Csillagfürt (lupin)", Icon: Sprout },
  molluscs: { code: 14, label: "Puhatestűek", Icon: Shell },
};
