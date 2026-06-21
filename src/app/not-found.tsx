import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--forest)",
        color: "var(--cream)",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.15rem", opacity: 0.8, marginBottom: "2rem" }}>
        Trang bạn tìm kiếm không tồn tại.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.9rem 2.4rem",
          background: "linear-gradient(135deg, #c9a85a, #a8893e)",
          color: "#1a1a1a",
          fontWeight: 600,
          borderRadius: "4px",
          textDecoration: "none",
          letterSpacing: "0.04em",
        }}
      >
        Về trang chủ
      </Link>
    </div>
  );
}
