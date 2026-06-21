"use client";

import { useState } from "react";
import Image from "next/image";
import { AMENITIES } from "@/data/content";

// Icon line-art tinh giản cho từng nhóm tiện ích
const ICONS = [
  // Central Park — lá / cây
  <path key="p" d="M12 22v-7M12 15c-3.5 0-6-2.5-6-6 0-3 2.5-6 6-7 3.5 1 6 4 6 7 0 3.5-2.5 6-6 6z" strokeLinecap="round" strokeLinejoin="round" />,
  // Clubhouse — giọt nước/hồ bơi
  <path key="c" d="M12 3c3 3.5 5 6.3 5 9a5 5 0 0 1-10 0c0-2.7 2-5.5 5-9z" strokeLinecap="round" strokeLinejoin="round" />,
  // Cộng đồng — người
  <path key="g" d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM4 20c0-2.8 2.2-5 5-5s5 2.2 5 5M16 6.5a2.5 2.5 0 1 1 .01 5M20 20c0-2.4-1.6-4.4-3.8-4.9" strokeLinecap="round" strokeLinejoin="round" />,
  // Thể thao — vợt
  <path key="s" d="M14.5 9.5a5 5 0 1 0-5 5M13 13l6 6M11 11l1.5 1.5" strokeLinecap="round" strokeLinejoin="round" />,
];

export default function Amenities() {
  const [i, setI] = useState(0);
  return (
    <div className="am__grid">
      <div className="am__left">
        <div className="list_hovers">
          {AMENITIES.items.map((it, idx) => (
            <button
              key={it.name}
              className={`interactive_line${i === idx ? " active" : ""}`}
              onMouseEnter={() => setI(idx)}
              onClick={() => setI(idx)}
              aria-pressed={i === idx}
            >
              <span className="il__num">{String(idx + 1).padStart(2, "0")}</span>
              <span className="il__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>{ICONS[idx]}</svg>
              </span>
              <span className="il__name">{it.name}</span>
              <svg className="il__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
        <div className="caption_b">
          {AMENITIES.items.map((it, idx) => (
            <p key={it.name} className="p_interactive body-lg muted" style={{ opacity: i === idx ? 1 : 0, position: idx === 0 ? "relative" : "absolute" }}>
              {it.desc}
            </p>
          ))}
        </div>
      </div>
      <div className="right_s">
        {AMENITIES.items.map((it, idx) => (
          <div className="hover_image" key={it.name} style={{ opacity: i === idx ? 1 : 0, filter: i === idx ? "blur(0)" : "blur(10px)", transition: "opacity .6s ease, filter .6s ease" }}>
            <Image src={it.image} alt={`Tiện ích ${it.name} — Hồng Hạc City`} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
