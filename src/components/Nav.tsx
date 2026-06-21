"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE, NAV } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });

    const close = () => setOpen(false);
    document.addEventListener("hh:closemenu", close);
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
      document.removeEventListener("hh:closemenu", close);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <a href="#home" data-scroll-to="home" className="nav__logo" aria-label="Hồng Hạc City">
          <Image src="/logo/honghac.svg" alt="Hồng Hạc City" width={140} height={38} priority style={{ height: "100%", width: "auto" }} />
        </a>
        <nav className="nav__links">
          {NAV.slice(1).map((n) => (
            <a key={n.id} href={`#${n.id}`} data-scroll-to={n.id} data-hover-split
              className={active === n.id ? "active" : ""}>{n.label}</a>
          ))}
        </nav>
        <div className="nav__right">
          <a href={`#contact`} data-scroll-to="contact" className="btn btn-gold nav__cta">{SITE.primaryCta}</a>
          <button className="nav__burger" aria-label="Mở menu" onClick={() => setOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile_menu${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mobile_menu__top">
          <Image src="/logo/honghac.svg" alt="Hồng Hạc City" width={130} height={36} style={{ filter: "brightness(0) invert(1)", height: "auto", width: "130px" }} />
          <button className="mobile_menu__close" aria-label="Đóng menu" onClick={() => setOpen(false)}>×</button>
        </div>
        <nav>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} data-scroll-to={n.id} onClick={() => setOpen(false)}>
              <span className="mn">{n.num}</span>{n.label}
            </a>
          ))}
        </nav>
        <div className="mobile_menu__foot">
          <a href={`tel:${SITE.hotlineTel}`} className="btn btn-outline" style={{ color: "var(--cream)" }}>Gọi ngay</a>
          <a href={`https://zalo.me/${SITE.zalo}`} className="btn btn-gold">Chat Zalo</a>
        </div>
      </div>
    </>
  );
}
