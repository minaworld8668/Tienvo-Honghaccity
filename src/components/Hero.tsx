"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SITE, HERO } from "@/data/content";

const AUTOPLAY_MS = 7000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const n = HERO.slides.length;
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % n);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [n]);

  const Dots = () => (
    <div className="hero__dots" role="tablist" aria-label="Chuyển slide">
      {HERO.slides.map((_, i) => (
        <button
          key={i}
          type="button"
          className={`hero__dot${i === active ? " is-active" : ""}`}
          aria-label={`Slide ${i + 1}`}
          aria-selected={i === active}
          onClick={() => setActive(i)}
        />
      ))}
    </div>
  );

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {HERO.slides.map((s, i) => (
        <div key={i} className={`hero__slide${i === active ? " is-active" : ""}`} aria-hidden={i !== active}>
          <div className="hero__media">
            {s.kind === "video" ? (
              <video className="hero__video" autoPlay muted loop playsInline poster={s.poster}>
                <source src={HERO.video} type="video/mp4" />
                <source src={HERO.videoWebm} type="video/webm" />
              </video>
            ) : (
              <Image
                src={s.image!}
                alt="Phối cảnh tổng thể Hồng Hạc City"
                fill
                priority={i === 0}
                sizes="100vw"
                className="hero__kb"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          <div className="hero__overlay" />
          <div className="hero__inner">
            <div className="hero__textwrap">
              <h1 className="display">{s.title}</h1>
              {s.paragraphs.map((p, k) => (
                <p key={k} className={`hero__p${k === 0 ? " hero__p--lead" : ""}`}>{p}</p>
              ))}
            </div>
            <div className="hero__cta">
              <a href="#contact" data-scroll-to="contact" className="btn btn-gold">{SITE.primaryCta}</a>
              <a href="#story" data-scroll-to="story" className="btn btn-outline" style={{ color: "var(--cream)" }}>Khám phá hành trình</a>
            </div>
            <div className="hero__bottom">
              <div className="hero__scroll">
                <svg className="arrows_icon" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
                  <path d="M7 1v18M1 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {HERO.scroll}
              </div>
              <Dots />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
