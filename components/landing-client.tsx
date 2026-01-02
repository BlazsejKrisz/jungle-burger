// components/landing-client.tsx
"use client";

import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Separator } from "@/components/ui/separator";

import Hero from "@/components/hero";
import FeaturedMenu from "@/components/featured-menu";
import Reviews from "@/components/reviews";
import Faq from "@/components/faq";

import { FEATURED, REVIEWS } from "@/lib/constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LandingClient() {
  const scope = useRef<HTMLDivElement | null>(null);

  const featured = useMemo(() => FEATURED, []);
  const reviews = useMemo(() => REVIEWS, []);

  useGSAP(
    () => {
      // HERO entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo("[data-anim='hero']", { opacity: 0 }, { opacity: 1, duration: 0.6 })
        .fromTo(
          "[data-anim='hero-title']",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.25"
        )
        .fromTo(
          "[data-anim='hero-sub']",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.45"
        )
        .fromTo(
          "[data-anim='hero-cta']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          "[data-anim='hero-stats'] > *",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 },
          "-=0.35"
        );

      // Sections fade in on scroll
      gsap.utils.toArray<HTMLElement>("[data-anim='section']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Grids stagger (cards)
      gsap.utils.toArray<HTMLElement>("[data-anim='grid']").forEach((grid) => {
        const cards = grid.querySelectorAll("[data-anim='card']");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: grid,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Ambient glow float (optional, used in FAQ CTA box)
      gsap.to("[data-anim='glow']", {
        y: 12,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope }
  );

  return (
    <div ref={scope} data-page="landing" >
      <Hero bgSrc="/heropl.jpg" />

      <Separator className="border-[var(--jungle)]/20" />

      <FeaturedMenu items={featured} />

      <Separator className="border-[var(--jungle)]/20" />

      <Reviews reviews={reviews} />

      <Separator className="border-[var(--jungle)]/20" />

      <Faq />
    </div>
  );
}
