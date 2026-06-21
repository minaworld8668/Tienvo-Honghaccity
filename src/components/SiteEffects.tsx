"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("fc-reveal-ready");
    if (reduce) return; // tôn trọng prefers-reduced-motion

    gsap.registerPlugin(ScrollTrigger);
    const cleanups: Array<() => void> = [];
    const splits: SplitType[] = [];

    // 1) Lenis smooth scroll synced with ScrollTrigger
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
    (window as any).lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => { gsap.ticker.remove(raf); lenis.destroy(); });

    // anchor scrolling via Lenis
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-scroll-to]');
      if (!a) return;
      const id = a.getAttribute("data-scroll-to");
      const tgt = id ? document.getElementById(id) : null;
      if (!tgt) return;
      e.preventDefault();
      lenis.scrollTo(tgt, { offset: -8, duration: 1.3 });
      document.dispatchEvent(new CustomEvent("hh:closemenu"));
    };
    document.addEventListener("click", onAnchor);
    cleanups.push(() => document.removeEventListener("click", onAnchor));

    // 2) Reveal gating
    gsap.utils.toArray<HTMLElement>("[data-md-box], [data-md-reveal]").forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, yPercent: 12, filter: "blur(8px)" },
        { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" } });
    });

    // 3) split-text line reveal (skip heritage which has its own timeline)
    gsap.utils.toArray<HTMLElement>("[data-split]")
      .filter((el) => !el.closest(".heritage_section"))
      .forEach((el) => {
        const st = new SplitType(el, { types: "lines", tagName: "div" });
        splits.push(st);
        if (st.lines) {
          gsap.fromTo(st.lines,
            { opacity: 0, yPercent: 35, filter: "blur(10px)" },
            { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: 1, stagger: 0.06,
              ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
        }
      });

    // 4) Link hover — per-letter blur stagger
    document.querySelectorAll<HTMLElement>("[data-hover-split]").forEach((link) => {
      if ((link as any).dataset.splitDone) return;
      (link as any).dataset.splitDone = "1";
      const text = link.textContent || "";
      link.textContent = "";
      const frag = document.createDocumentFragment();
      [...text].forEach((ch) => {
        const s = document.createElement("span");
        s.className = "char"; s.textContent = ch;
        frag.appendChild(s);
      });
      link.appendChild(frag);
      const chars = link.querySelectorAll(".char");
      gsap.set(chars, { willChange: "filter" });
      const onEnter = () => {
        gsap.killTweensOf(chars);
        gsap.set(chars, { filter: "blur(0px)" });
        gsap.to(chars, {
          keyframes: [{ filter: "blur(2px)", duration: 0.2 }, { filter: "blur(0px)", duration: 0.2 }],
          stagger: { each: 0.035 }, ease: "power2.out",
        });
      };
      link.addEventListener("mouseenter", onEnter);
      cleanups.push(() => link.removeEventListener("mouseenter", onEnter));
    });

    // 5) Heritage pinned scrubbed timeline (desktop only)
    if (window.innerWidth >= 768) {
      const section = document.querySelector<HTMLElement>(".heritage_section");
      if (section) {
        const h1 = section.querySelector<HTMLElement>(".heritage_heading");
        const h2 = section.querySelector<HTMLElement>(".heritage_heading_2");
        const cap = section.querySelector<HTMLElement>(".heritage_caption");
        const imgs = gsap.utils.toArray<HTMLElement>(".heritage_img", section);
        const center = imgs[1], left = imgs[0], right = imgs[2];

        const sh1 = h1 ? new SplitType(h1, { types: "lines", tagName: "div" }) : null;
        const sh2 = h2 ? new SplitType(h2, { types: "lines", tagName: "div" }) : null;
        const scap = cap ? new SplitType(cap, { types: "lines", tagName: "div" }) : null;
        [sh1, sh2, scap].forEach((s) => s && splits.push(s));

        const set = (lines: any) => lines && gsap.set(lines, { opacity: 0, yPercent: 35, filter: "blur(10px)" });
        set(sh1?.lines); set(sh2?.lines); set(scap?.lines);
        if (center) gsap.set(center, { scale: 0.8, yPercent: 14 });
        if (left) gsap.set(left, { autoAlpha: 0, xPercent: 30, scale: 0.85 });
        if (right) gsap.set(right, { autoAlpha: 0, xPercent: -30, scale: 0.85 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: "top top", end: "+=2200", scrub: 1.1, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
        });
        if (sh1?.lines) {
          tl.to(sh1.lines, { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: 1, stagger: 0.08, ease: "power3.out" }, 0);
          tl.to(sh1.lines, { opacity: 0, yPercent: -30, filter: "blur(10px)", duration: 0.8, stagger: 0.06, ease: "power3.in" }, 1.0);
        }
        if (center) tl.to(center, { scale: 1, yPercent: 0, duration: 1.1, ease: "power2.out" }, 0);
        if (left) tl.to(left, { autoAlpha: 1, xPercent: 0, scale: 1, duration: 0.9, ease: "power2.inOut" }, 1.0);
        if (right) tl.to(right, { autoAlpha: 1, xPercent: 0, scale: 1, duration: 0.9, ease: "power2.inOut" }, 1.0);
        if (center) tl.to(center, { scale: 0.9, duration: 1, ease: "power2.inOut" }, 1.3);
        if (sh2?.lines) tl.to(sh2.lines, { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: 1, stagger: 0.08, ease: "power3.out" }, 1.25);
        if (scap?.lines) tl.to(scap.lines, { opacity: 1, yPercent: 0, filter: "blur(0px)", duration: 1, stagger: 0.05, ease: "power3.out" }, 1.9);
      }
    } else {
      // mobile: simple reveal for heritage text
      gsap.utils.toArray<HTMLElement>(".heritage_section [data-split]").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" } });
      });
    }

    // 6) Parallax on media
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const amt = Number(el.dataset.parallax || 8);
      gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });

    // 7) Count-up
    gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
      const end = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || "";
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end, duration: 1.6, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
      });
    });

    // Refresh trigger positions sau khi layout ổn định (ảnh/fonts tải xong làm
    // chiều cao trang thay đổi → tránh trigger lệch khiến section kẹt ẩn)
    ScrollTrigger.refresh();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    const t1 = window.setTimeout(refresh, 600);
    const t2 = window.setTimeout(refresh, 1800);
    document.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", refresh, { once: true });
    });
    cleanups.push(() => {
      window.removeEventListener("load", refresh);
      clearTimeout(t1); clearTimeout(t2);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      splits.forEach((s) => s.revert());
    };
  }, []);

  return null;
}
