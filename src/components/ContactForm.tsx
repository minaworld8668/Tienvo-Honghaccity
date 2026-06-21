"use client";

import { useState } from "react";
import { CONTACT, SITE } from "@/data/content";

// Dán URL Apps Script Web App vào .env.local: NEXT_PUBLIC_SHEET_ENDPOINT=...
const ENDPOINT = process.env.NEXT_PUBLIC_SHEET_ENDPOINT || "";
const PHONE_RE = /^[0-9+\s.()-]{8,}$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", product: "", time: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const upd = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Vui lòng nhập họ tên.";
    if (!form.phone.trim()) errs.phone = "Vui lòng nhập số điện thoại.";
    else if (!PHONE_RE.test(form.phone)) errs.phone = "Số điện thoại chưa hợp lệ.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setBusy(true);
    const payload = { ...form, source: "honghac-city", ts: new Date().toISOString() };
    try {
      if (ENDPOINT) {
        await fetch(ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } else {
        console.info("[Hồng Hạc] lead (chưa cấu hình endpoint):", payload);
      }
      setSent(true);
    } catch {
      // no-cors không trả response → vẫn coi như đã gửi
      setSent(true);
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <div className="form" id="lead-form">
        <div className="form__success">
          <div className="ok" aria-hidden>✓</div>
          <h3>Đã gửi thành công</h3>
          <p className="muted">{CONTACT.success}</p>
          <a href={`tel:${SITE.hotlineTel}`} className="btn btn-primary" style={{ marginTop: 18 }}>
            Gọi ngay {SITE.hotline}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="form" id="lead-form" onSubmit={submit} noValidate>
      <h3>{CONTACT.formTitle}</h3>
      <p className="muted" style={{ fontSize: "0.9rem" }}>Chỉ cần Họ tên & Số điện thoại — chúng tôi gọi lại ngay.</p>

      <div className="field">
        <label htmlFor="f-name">Họ và tên *</label>
        <input id="f-name" type="text" autoComplete="name" value={form.name} onChange={upd("name")} placeholder="Nguyễn Văn A" />
        {errors.name && <div className="err">{errors.name}</div>}
      </div>

      <div className="field">
        <label htmlFor="f-phone">Số điện thoại *</label>
        <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={upd("phone")} placeholder="09xx xxx xxx" />
        {errors.phone && <div className="err">{errors.phone}</div>}
      </div>

      <div className="field">
        <label htmlFor="f-product">Dòng sản phẩm quan tâm (tùy chọn)</label>
        <select id="f-product" value={form.product} onChange={upd("product")}>
          <option value="">— Chọn —</option>
          {CONTACT.productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-time">Thời gian tiện nhận tư vấn (tùy chọn)</label>
        <select id="f-time" value={form.time} onChange={upd("time")}>
          <option value="">— Chọn —</option>
          {CONTACT.timeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <button type="submit" className="btn btn-gold" disabled={busy}>
        {busy ? "Đang gửi…" : CONTACT.submit}
      </button>
      <p className="commit">{CONTACT.commitment}</p>
    </form>
  );
}
