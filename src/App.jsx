import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  ExternalLink,
  FileText,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  fitPoints,
  navItems,
  resources,
  site,
  specialties,
} from "./siteContent";
import jesPhoto from "./assets/jes-coleman.jpg";

function LogoMark() {
  return (
    <svg
      className="logo-mark refined-logo"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="isseaLogoFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8fbfd" />
          <stop offset="100%" stopColor="#e3edf4" />
        </linearGradient>

        <linearGradient id="isseaLogoStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f5d86" />
          <stop offset="100%" stopColor="#87a7c2" />
        </linearGradient>
      </defs>

      <circle
        cx="32"
        cy="32"
        r="29"
        fill="url(#isseaLogoFill)"
        stroke="rgba(27,67,98,.18)"
        strokeWidth="1.2"
      />

      <path
        d="M19.5 21.5 L31.7 16.7 L44.2 24.8 L39.1 43.2 L24 39.1 Z"
        fill="none"
        stroke="url(#isseaLogoStroke)"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M19.5 21.5 L24 39.1 M31.7 16.7 L39.1 43.2"
        fill="none"
        stroke="url(#isseaLogoStroke)"
        strokeWidth="1.05"
        strokeLinecap="round"
      />

      <circle cx="19.5" cy="21.5" r="3.25" fill="#2f5d86" />
      <circle cx="31.7" cy="16.7" r="2.7" fill="#7895ae" />
      <circle cx="44.2" cy="24.8" r="3" fill="#afa6c2" />
      <circle cx="24" cy="39.1" r="2.85" fill="#95aaa5" />
      <circle cx="39.1" cy="43.2" r="3.35" fill="#4e7699" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-lede">{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="utility-bar">
        <div className="utility-inner">
          <div className="utility-left">
            <span>{site.location}</span>
            <span className="utility-divider" />
            <span>{site.availability}</span>
          </div>

          <div className="utility-right">
            <a href={site.phoneHref}>
              <Phone size={14} strokeWidth={1.8} />
              {site.phoneDisplay}
            </a>

            <a href={site.portalUrl}>
              Client Portal <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      <header className={`main-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="ISSEA home">
            <LogoMark />

            <div className="brand-text">
              <strong>{site.practiceName}</strong>
              <span className="brand-mini">
                Intervention Services of Southeast Alabama
              </span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-ghost portal-button" href={site.portalUrl}>
              Client Portal
            </a>

            <a className="btn btn-primary" href={site.requestUrl}>
              Request Appointment
            </a>

            <button
              className="menu-button"
              type="button"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              className="mobile-portal"
              href={site.portalUrl}
              onClick={() => setMenuOpen(false)}
            >
              Client Portal
            </a>

            <a
              className="btn btn-primary"
              href={site.requestUrl}
              onClick={() => setMenuOpen(false)}
            >
              Request Appointment
            </a>
          </div>
        )}
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="hero-kicker">
                <span className="kicker-dot" />
                Specialized therapy • Enterprise, Alabama
              </div>

              <h1>
                Serious care.
                <br />
                <span>Without the clinical coldness.</span>
              </h1>

              <p className="hero-text">
                Thoughtful, specialized therapy for trauma, stress, sexual
                health concerns, first responders, veterans, and people who
                need a therapist comfortable with complex conversations.
              </p>

              <p className="hero-values">
                Integration • Strength • Support • Empowerment • Alignment
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary btn-large" href="#contact">
                  Request an Appointment
                  <ArrowRight size={17} />
                </a>

                <a className="btn btn-text btn-large" href="#services">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">
                <span>
                  <Check size={14} />
                  In-person
                </span>

                <span>
                  <Check size={14} />
                  Telehealth
                </span>

                <span>
                  <Check size={14} />
                  Specialized assessment
                </span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-portrait-card">
                <img
                  src={jesPhoto}
                  alt="Jes Coleman"
                  className="hero-portrait"
                />

                <div className="molecule-overlay" aria-hidden="true">
                  <svg
                    viewBox="0 0 220 220"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      fill="none"
                      stroke="rgba(255,255,255,.72)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M64 74 L92 58 L120 74 L120 106 L92 122 L64 106 Z" />
                      <path d="M120 74 L148 58 L176 74 L176 106 L148 122 L120 106" />
                      <path d="M92 58 L92 31" />
                      <path d="M148 122 L148 151" />
                      <path d="M176 74 L198 61" />
                    </g>

                    <g fill="rgba(255,255,255,.9)">
                      <circle cx="64" cy="74" r="4" />
                      <circle cx="92" cy="58" r="4" />
                      <circle cx="120" cy="74" r="4" />
                      <circle cx="120" cy="106" r="4" />
                      <circle cx="92" cy="122" r="4" />
                      <circle cx="64" cy="106" r="4" />
                      <circle cx="148" cy="58" r="4" />
                      <circle cx="176" cy="74" r="4" />
                      <circle cx="176" cy="106" r="4" />
                      <circle cx="148" cy="122" r="4" />
                    </g>

                    <g
                      fill="rgba(255,255,255,.9)"
                      fontFamily="Arial, sans-serif"
                      fontSize="11"
                      fontWeight="700"
                    >
                      <text x="84" y="25">
                        NH₂
                      </text>
                      <text x="141" y="167">
                        HO
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="portrait-caption">
                  <strong>Jes Coleman</strong>
                  <span>LICSW-S, LISW, CTAPSB, CPAS, CFRC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-info-row" id="insurance">
            <a className="info-tile" href="#contact">
              <span className="info-icon">
                <CalendarDays size={20} />
              </span>

              <span>
                <small>New here?</small>
                <strong>Request an appointment</strong>
              </span>

              <ChevronRight size={18} />
            </a>

            <a className="info-tile" href={site.portalUrl}>
              <span className="info-icon">
                <ShieldCheck size={20} />
              </span>

              <span>
                <small>Current client?</small>
                <strong>Open secure portal</strong>
              </span>

              <ChevronRight size={18} />
            </a>

            <a className="info-tile" href="#contact">
              <span className="info-icon">
                <FileText size={20} />
              </span>

              <span>
                <small>Insurance / Medicare?</small>
                <strong>Check coverage options</strong>
              </span>

              <ChevronRight size={18} />
            </a>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="content-wrap">
            <SectionHeading
              eyebrow="Specialized services"
              title="Care for the things that do not fit neatly into a checkbox."
              text="You should not have to translate your experience into generic language before a therapist can understand it. These are areas where specialized knowledge matters."
            />

            <div className="specialty-grid">
              {specialties.map((item, index) => (
                <article className="specialty-card" key={item.title}>
                  <div className="card-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="card-eyebrow">{item.eyebrow}</p>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <a href="#contact">
                    Learn more <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fit-section">
          <div className="content-wrap fit-grid">
            <div className="fit-copy">
              <SectionHeading
                eyebrow="A thoughtful fit"
                title="Therapy works better when you do not have to perform being okay."
                text="The goal is not to force your experience into a script. It is to understand what is happening, make sense of the patterns, and build a plan that fits the person in front of us."
              />

              <a className="btn btn-outline" href="#about">
                Meet Jes
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="fit-list">
              {fitPoints.map((item, index) => (
                <div className="fit-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section lifespan-section" id="lifespan">
          <div className="content-wrap lifespan-grid">
            <div className="lifespan-visual">
              <div className="timeline-panel">
                <span className="timeline-label">PAST</span>

                <div className="timeline-line">
                  <span />
                  <span />
                  <span />
                  <span className="timeline-now" />
                </div>

                <span className="timeline-label align-end">PRESENT</span>
              </div>

              <div className="signal-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="lifespan-copy">
              <p className="eyebrow">Lifespan Integration</p>

              <h2>
                Helping the nervous system understand:
                <br />
                <em>that happened then. This is now.</em>
              </h2>

              <p>
                Lifespan Integration is a gentle, body- and brain-based therapy
                that helps people recognize that difficult experiences are in
                the past, even when the nervous system still reacts as if they
                are happening now.
              </p>

              <p>
                It can be especially useful when trauma, chronic stress,
                illness, or injury continues to affect daily life after the
                immediate event has ended.
              </p>

              <a className="text-link" href="#resources">
                Read about Lifespan Integration
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="responder-section">
          <div className="content-wrap responder-grid">
            <div className="responder-copy">
              <p className="eyebrow eyebrow-light">
                First responders • veterans • military families
              </p>

              <h2>
                Some jobs ask the nervous system to stay ready all the time.
              </h2>

              <p>
                Repeated exposure, responsibility, adrenaline, loss, shift
                work, moral stress, and the expectation to keep functioning can
                accumulate quietly. Therapy should understand the culture and
                the demands — not make you explain them from scratch.
              </p>

              <a className="btn btn-light" href="#contact">
                Ask about specialized support
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="responder-mark" aria-hidden="true">
              <div className="mark-grid">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index % 7 === 0 || index % 11 === 0 ? "active" : ""
                    }
                  />
                ))}
              </div>

              <div className="mark-caption">
                <span>calm</span>
                <span>clarity</span>
                <span>capacity</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="content-wrap about-grid">
            <div className="portrait-placeholder real-photo">
              <img
                src={jesPhoto}
                alt="Jes Coleman"
                className="about-photo"
              />

              <div className="credential-card">
                <strong>{site.provider}</strong>
                <span>{site.credentials}</span>
              </div>
            </div>

            <div className="about-copy">
              <SectionHeading
                eyebrow="About Jes"
                title="Warm enough to be human. Direct enough to be useful."
              />

              <p>
                Jes Coleman is a Licensed Independent Clinical Social Worker
                Supervisor in Alabama and a Licensed Independent Social Worker
                in Iowa. She works with people who feel overwhelmed, stuck, or
                affected by experiences that keep showing up in their bodies,
                relationships, or everyday lives.
              </p>

              <p>
                Her style is collaborative, knowledgeable, and comfortable with
                topics that can be difficult to talk about. Treatment is paced
                thoughtfully, with practical tools and individualized planning
                rather than a one-size-fits-all approach.
              </p>

              <div className="credential-chips">
                <span>Trauma-informed</span>
                <span>First responder counseling</span>
                <span>Psychosexual assessment</span>
                <span>Lifespan Integration</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section resources-section" id="resources">
          <div className="content-wrap">
            <div className="resources-head">
              <SectionHeading
                eyebrow="Resources & articles"
                title="Mental health information in plain language."
                text="A growing library for clients, families, professionals, and anyone trying to understand what is happening without wading through a clinical textbook."
              />

              <a className="btn btn-outline" href="#resources">
                Browse all resources
              </a>
            </div>

            <div className="resource-grid">
              {resources.map((item) => (
                <article className="resource-card" key={item.title}>
                  <span>{item.tag}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <a href="#resources" aria-label={`Read ${item.title}`}>
                    Read article <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="content-wrap contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Start here</p>

              <h2>You do not need to know exactly what to say.</h2>

              <p>
                Tell us the basics, and we can help you figure out the right
                next step. For private clinical details, please use the secure
                client portal rather than this general contact form.
              </p>

              <div className="contact-cards">
                <a href={site.phoneHref}>
                  <Phone size={19} />

                  <span>
                    <small>Call</small>
                    <strong>{site.phoneDisplay}</strong>
                  </span>
                </a>

                <a href={site.portalUrl}>
                  <ShieldCheck size={19} />

                  <span>
                    <small>Current clients</small>
                    <strong>Secure Client Portal</strong>
                  </span>
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="form-row">
                <label>
                  Name
                  <input type="text" placeholder="Your name" />
                </label>

                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
              </div>

              <div className="form-row">
                <label>
                  What are you looking for?
                  <select defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>Therapy</option>
                    <option>Psychosexual assessment</option>
                    <option>Professional / agency consultation</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label>
                  Preferred format
                  <select defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>In-person</option>
                    <option>Telehealth</option>
                    <option>Either</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>
                  Area of interest
                  <select defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>Trauma / PTSD</option>
                    <option>First responder / veteran support</option>
                    <option>Sexual health</option>
                    <option>Problematic sexual behaviors</option>
                    <option>Lifespan Integration</option>
                    <option>Assessment services</option>
                    <option>Other / not sure</option>
                  </select>
                </label>

                <label>
                  How did you find us?
                  <select defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>Psychology Today</option>
                    <option>Google</option>
                    <option>Referral</option>
                    <option>Attorney / agency</option>
                    <option>Friend / family</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label>
                Anything general you'd like us to know?
                <textarea
                  rows="4"
                  placeholder="Please keep this brief and avoid private medical details."
                />
              </label>

              <label className="checkbox-row">
                <input type="checkbox" />

                <span>
                  I understand this form is for general inquiries and is not a
                  secure place to send private health information.
                </span>
              </label>

              <button className="btn btn-primary btn-submit" type="submit">
                Send Request
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="content-wrap footer-grid">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home">
              <LogoMark />

              <div className="brand-text">
                <strong>{site.practiceName}</strong>
                <span className="brand-mini">
                  Intervention Services of Southeast Alabama
                </span>
              </div>
            </a>

            <p>
              Integration • Strength • Support • Empowerment • Alignment
            </p>

            <p>
              Specialized therapy and assessment services in Enterprise,
              Alabama, with telehealth options available.
            </p>
          </div>

          <div className="footer-column">
            <strong>Explore</strong>
            <a href="#about">About Jes</a>
            <a href="#services">Services</a>
            <a href="#lifespan">Lifespan Integration</a>
            <a href="#resources">Resources</a>
          </div>

          <div className="footer-column">
            <strong>Need help?</strong>
            <a href="#contact">Request Appointment</a>
            <a href={site.portalUrl}>Client Portal</a>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a href="#insurance">Insurance & Medicare</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="content-wrap footer-bottom-inner">
            <span>© 2026 ISSEA. Mockup concept.</span>

            <span>
              This website does not provide emergency services. If you are in
              immediate danger, call 911 or 988.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
