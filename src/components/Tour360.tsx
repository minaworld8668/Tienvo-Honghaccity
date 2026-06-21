"use client";

import { useState } from "react";
import Image from "next/image";
import { TOUR360 } from "@/data/content";

export default function Tour360() {
  const [open, setOpen] = useState(false);

  return (
    <div className="tour__frame" data-md-box>
      {open ? (
        <iframe
          src={TOUR360.embed}
          title="Tham quan 360° Hồng Hạc City"
          allowFullScreen
          allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
        />
      ) : (
        <button className="tour__poster" onClick={() => setOpen(true)} aria-label="Mở tour 360°">
          <Image
            src={TOUR360.poster}
            alt="Phối cảnh không gian sống Hồng Hạc City — tham quan 360°"
            fill
            sizes="(max-width:768px) 100vw, 70vw"
            style={{ objectFit: "cover" }}
          />
          <span className="tour__play">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M2 12h20M12 2c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.3-4-10s1.5-7.3 4-10z" />
            </svg>
            Mở tour 360°
          </span>
        </button>
      )}
    </div>
  );
}
