import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SiteEffects from "@/components/SiteEffects";
import Amenities from "@/components/Amenities";
import Tour360 from "@/components/Tour360";
import ContactForm from "@/components/ContactForm";
import FloatingCTA from "@/components/FloatingCTA";
import {
  SITE, STORY, HERITAGE, AMENITIES, LOCATION, COLLECTION, TOUR360,
  INVESTMENT, DEVELOPERS, CTA, CONTACT, NAV, LEGAL, FOOTER_TAGLINE,
} from "@/data/content";

// Caption ảnh đã bỏ theo yêu cầu — disclaimer pháp lý vẫn ở footer.
const ImgNote = () => null;

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* ============ HERO (carousel 2 slide) ============ */}
        <Hero />

        {/* ============ STORY ============ */}
        <section className="section the_story" id="story">
          <div className="wrap story__grid">
            <div>
              <span className="tag" data-md-reveal><span className="dot" />{STORY.overline}</span>
              <h2 className="display story__title" data-split>{STORY.title}</h2>
              <p className="body-lg muted" data-split>{STORY.body}</p>
              <p className="body-lg muted" data-split style={{ marginTop: "1rem" }}>{STORY.body2}</p>
              <a href="#developers" data-scroll-to="developers" className="btn btn-outline story__cta" data-md-reveal>{STORY.cta}</a>
            </div>
            <div className="story__media" data-md-box>
              <Image src={STORY.image} alt="Đại cảnh Zone F1-2 Hồng Hạc City" width={900} height={675} sizes="(max-width:768px) 100vw, 50vw" data-parallax="5" />
              <ImgNote />
            </div>
          </div>
        </section>

        {/* ============ HERITAGE (pinned scrub) ============ */}
        <section className="heritage_section">
          <div className="wrap heritage_inner">
            <span className="overline" data-md-reveal style={{ color: "#c9a85a" }}>{HERITAGE.overline}</span>
            <h2 className="display heritage_heading" data-split>{HERITAGE.title1}</h2>
            <div className="heritage_stage">
              {HERITAGE.images.map((src, idx) => (
                <div className="heritage_img" key={src}>
                  <Image src={src} alt={`Kiến trúc Indochine × Modern Classic — Hồng Hạc City ${idx + 1}`} width={760} height={520} sizes="(max-width:768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
            <h2 className="display heritage_heading_2" data-split style={{ marginTop: "2.2rem" }}>{HERITAGE.title2}</h2>
            <p className="body-lg heritage_caption" data-split>{HERITAGE.caption}</p>
            <ImgNote />
          </div>
        </section>

        {/* ============ AMENITIES (interactive list) ============ */}
        <section className="section space_side" id="amenities">
          <div className="wrap">
            <div className="am__head" data-md-box>
              <span className="overline">{AMENITIES.overline}</span>
              <h2 className="display">{AMENITIES.title}</h2>
              <p className="lead" style={{ marginTop: "0.8rem" }}>{AMENITIES.subtitle}</p>
            </div>
            <Amenities />
            <div className="am__urban">
              <h3 className="display" data-md-reveal>{AMENITIES.urbanTitle}</h3>
              <p className="body-lg muted" data-md-reveal>{AMENITIES.urban}</p>
            </div>
          </div>
        </section>

        {/* ============ LOCATION ============ */}
        <section className="section" id="location">
          <div className="wrap loc__grid">
            <div>
              <span className="overline" data-md-reveal>{LOCATION.overline}</span>
              <h2 className="display loc__title" data-split>{LOCATION.title}</h2>
              <p className="body-lg muted" data-md-reveal>{LOCATION.body}</p>
              <ul className="loc__list">
                {LOCATION.connections.map((c) => (
                  <li className="loc__item" key={c.place} data-md-reveal>
                    <span className="loc__place">{c.place}</span>
                    <span className="loc__time"><small className="loc__only">chỉ</small><span data-count={c.time}>0</span><small>{c.unit}</small></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="loc__media" data-md-box>
              <Image src={LOCATION.image} alt="Bản đồ kết nối Hồng Hạc City tới Hà Nội, Vành đai 4, sân bay" width={820} height={547} sizes="(max-width:768px) 100vw, 45vw" />
              <ImgNote />
            </div>
          </div>
        </section>

        {/* ============ COLLECTION ============ */}
        <section className="section" id="collection" style={{ background: "var(--cream-2)" }}>
          <div className="wrap">
            <div data-md-box>
              <span className="overline">{COLLECTION.overline}</span>
              <h2 className="display">{COLLECTION.title}</h2>
              <p className="lead" style={{ marginTop: "0.8rem" }}>
                <span className="coll__total">{COLLECTION.total}</span> không gian sống. Không gian nào cũng là duy nhất.
              </p>
              <p className="body-lg muted coll__intro">{COLLECTION.intro}</p>
            </div>
            {COLLECTION.products.map((p, idx) => (
              <article className={`product${idx % 2 === 1 ? " rev" : ""}`} key={p.name}>
                <div className="product__media" data-md-box>
                  <Image src={p.image} alt={`${p.name} — ${p.en} — Hồng Hạc City`} width={900} height={563} sizes="(max-width:768px) 100vw, 50vw" data-parallax="4" />
                  <ImgNote />
                </div>
                <div data-md-reveal>
                  <span className="overline">{p.tag}</span>
                  <h3 className="display product__name">{p.name}</h3>
                  <p className="product__head">{p.headline}</p>
                  <p className="body-lg muted">{p.desc}</p>
                  <div className="product__stats">
                    {p.stats.map((s) => (
                      <div className="pstat" key={s.u}>
                        <span className="pstat__v">{s.v}</span>
                        <span className="pstat__u">{s.u}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            <div className="handover" data-md-box>
              <span className="overline">HANDOVER</span>
              <h3 className="display" style={{ color: "var(--cream)" }}>{COLLECTION.handoverTitle}</h3>
              <p className="body-lg" style={{ color: "rgba(242,234,218,0.82)", marginTop: "0.8rem" }}>{COLLECTION.handover}</p>
            </div>
          </div>
        </section>

        {/* ============ TOUR 360 ============ */}
        <section className="section tour" id="tour360">
          <div className="wrap">
            <div className="tour__head" data-md-box>
              <span className="overline">{TOUR360.overline}</span>
              <h2 className="display">{TOUR360.title}</h2>
              <p className="body-lg" style={{ color: "rgba(242,234,218,0.82)", marginTop: "0.8rem" }}>{TOUR360.subtitle}</p>
            </div>
            <Tour360 />
            <div className="tour__foot">
              <p className="imgnote" style={{ margin: 0 }}>Tour 360° chính thức của chủ đầu tư</p>
              <a className="btn btn-gold" href={TOUR360.embed} target="_blank" rel="noopener noreferrer">{TOUR360.cta}</a>
            </div>
          </div>
        </section>

        {/* ============ INVESTMENT (dark) ============ */}
        <section className="section dark" id="investment">
          <div className="wrap">
            <div data-md-box>
              <span className="overline">{INVESTMENT.overline}</span>
              <h2 className="display">{INVESTMENT.title}</h2>
              <p className="lead" style={{ marginTop: "0.6rem", color: "#d8c79a" }}>{INVESTMENT.subtitle}</p>
            </div>
            <div className="inv__pillars">
              {INVESTMENT.pillars.map((p) => (
                <div className="inv__pillar" key={p.num} data-md-reveal>
                  <div className="n">{p.num}</div>
                  <h4>{p.key}</h4>
                  <p className="muted" style={{ fontSize: "0.94rem" }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="inv__stats">
              {INVESTMENT.stats.map((s) => (
                <div className="inv__stat" key={s.label} data-md-reveal>
                  <div className="num"><span data-count={s.n} data-suffix={s.suffix}>0</span></div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="inv__narr">
              <div data-md-reveal>
                <h3 className="display" style={{ color: "var(--cream)" }}>{INVESTMENT.growthTitle}</h3>
                <p className="body-lg muted" style={{ marginTop: "0.8rem" }}>{INVESTMENT.growth}</p>
              </div>
              <div data-md-reveal>
                <h3 className="display" style={{ color: "var(--cream)" }}>{INVESTMENT.legacyTitle}</h3>
                <p className="body-lg muted" style={{ marginTop: "0.8rem" }}>{INVESTMENT.legacy}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DEVELOPERS ============ */}
        <section className="section" id="developers">
          <div className="wrap dev__grid">
            <div>
              <span className="overline" data-md-reveal>{DEVELOPERS.overline}</span>
              <h2 className="display" data-split style={{ whiteSpace: "pre-line" }}>{DEVELOPERS.title}</h2>
              <div className="dev__logos" data-md-reveal>
                <Image className="dev__logo-pmh" src="/logo/phumyhung.png" alt="Logo Phú Mỹ Hưng" width={220} height={88} quality={100} style={{ height: 72, width: "auto" }} />
                <span className="dev__logo-x">×</span>
                <Image className="dev__logo-nomura" src="/logo/nomura.png" alt="Logo Nomura" width={200} height={70} quality={100} style={{ height: 40, width: "auto" }} />
              </div>
              <p className="body-lg muted" data-md-reveal>{DEVELOPERS.subtitle}</p>
              {DEVELOPERS.blocks.map((b) => (
                <div className="dev__block" key={b.name} data-md-reveal>
                  <div className="role">{b.role}</div>
                  <h3 className="display" style={{ fontSize: "1.5rem", margin: "0.3rem 0 0.5rem" }}>{b.name}</h3>
                  <p className="muted">{b.body}</p>
                </div>
              ))}
            </div>
            <div className="dev__media" data-md-box>
              <Image src={DEVELOPERS.image} alt="Không gian sống chuẩn Phú Mỹ Hưng tại Hồng Hạc City" width={760} height={570} sizes="(max-width:768px) 100vw, 45vw" data-parallax="5" />
              <ImgNote />
            </div>
          </div>
        </section>

        {/* ============ CTA BOX ============ */}
        <section className="section cta_box">
          <div className="wrap">
            <span className="overline" data-md-reveal>{CTA.overline}</span>
            <h2 className="display" data-md-box>{CTA.title}</h2>
            <p className="body-lg" data-md-reveal style={{ color: "rgba(242,234,218,0.82)", maxWidth: "52ch", margin: "0 auto" }}>{CTA.body}</p>
            <div className="cta_box__btns" data-md-reveal>
              <a href="#contact" data-scroll-to="contact" className="btn btn-gold">{SITE.primaryCta}</a>
              <a href={`tel:${SITE.hotlineTel}`} className="btn btn-outline" style={{ color: "var(--cream)" }}>Gọi đường dây ưu tiên</a>
            </div>
          </div>
        </section>

        {/* ============ CONTACT + FORM ============ */}
        <section className="section contact" id="contact">
          <div className="contact__bg">
            <Image src="/images/aerial-zone-dusk.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} aria-hidden />
          </div>
          <div className="wrap contact__grid">
            <div data-md-box>
              <span className="overline" style={{ color: "#c9a85a" }}>{CONTACT.overline}</span>
              <h2 className="display">{CONTACT.title}</h2>
              <p className="body-lg" style={{ color: "rgba(242,234,218,0.82)" }}>{CTA.subtitle}</p>
              <div className="vipcard">
                <div className="vipcard__edge" />
                <div className="vipcard__label">{CONTACT.vipLabel}</div>
                <div className="vipcard__id">
                  <span className="vipcard__crest" aria-hidden>
                    <img src="/logo/honghac.svg" alt="" />
                  </span>
                  <div>
                    <div className="vipcard__name">{CONTACT.vipName}</div>
                    <div className="vipcard__role">{CONTACT.vipRole}</div>
                    <div className="vipcard__org">{CONTACT.vipOrg}</div>
                  </div>
                </div>
                <a className="vipcard__phone" href={`tel:${SITE.hotlineTel}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {SITE.hotline}
                </a>
              </div>
              <div className="contact__offices">
                {CONTACT.offices.map((o) => (
                  <div className="contact__office" key={o.name}>
                    <div className="nm">{o.name}</div>
                    <div style={{ fontSize: "0.92rem", color: "rgba(242,234,218,0.82)" }}>{o.addr}</div>
                  </div>
                ))}
              </div>
            </div>
            <div data-md-box>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <Image src="/logo/honghac.svg" alt="Hồng Hạc City" width={160} height={44} style={{ filter: "brightness(0) invert(1)", height: "auto", width: "160px" }} />
            <p className="footer__tag">{FOOTER_TAGLINE}</p>
            <p className="muted" style={{ fontSize: "0.86rem" }}>Phát triển bởi {SITE.developers}</p>
          </div>
          <div>
            <div className="footer__contact"><div className="h">Sơ đồ trang</div></div>
            <ul className="footer__map">
              {NAV.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} data-scroll-to={n.id}><span className="mn">{n.num}</span>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__contact">
            <div className="h">Liên hệ</div>
            <a className="big" href={`tel:${SITE.hotlineTel}`}>{SITE.hotline}</a>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <a href={`tel:${SITE.hotlineTel}`} className="btn btn-outline" style={{ color: "var(--cream)", flex: 1 }}>Gọi ngay</a>
              <a href={`https://zalo.me/${SITE.zalo}`} className="btn btn-gold" style={{ flex: 1 }}>Zalo</a>
            </div>
          </div>
        </div>
        <div className="wrap">
          <p className="footer__legal">{LEGAL}</p>
          <div className="footer__copy">
            <span>© {new Date().getFullYear()} Hồng Hạc City. Bảo lưu mọi quyền.</span>
            <span>{SITE.zone}</span>
          </div>
        </div>
      </footer>

      <FloatingCTA />
      <SiteEffects />
    </>
  );
}
