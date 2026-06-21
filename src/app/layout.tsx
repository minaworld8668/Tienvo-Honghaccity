import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

// Tiêu đề: Playfair Display — serif tương phản cao, đài các, sang trọng.
const serif = Playfair_Display({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Thân chữ: Lora — serif ấm, thanh lịch, editorial (thay cho sans phẳng).
const sans = Lora({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://honghaccity.example"),
  title: "Hồng Hạc City — Di sản để sống. Tài sản để truyền đời.",
  description:
    "Hồng Hạc City Zone F1-2 (phân khu Hồng Phát) — đại đô thị kiến tạo bởi Phú Mỹ Hưng & Nomura. Biệt thự, shophouse, townhouse giữa tâm điểm xanh.",
  openGraph: {
    title: "Hồng Hạc City — Di sản để sống. Tài sản để truyền đời.",
    description:
      "Đại đô thị kiến tạo bởi Phú Mỹ Hưng & Nomura, giữa tâm điểm xanh phía Bắc.",
    images: ["/images/hero-banner.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A3822",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
