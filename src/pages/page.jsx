import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import WhatIs from "../components/whatis";
import What from "../components/why";
import Qanday from "../components/qanday";
import Queshon from "../components/queshon";
import Yonalishlar from "../components/yonalishlar";

export default function Page() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      return;
    }

    let observer;
    const ctx = gsap.context(() => {
      gsap.set(".reveal", {
        opacity: 0,
        y: 24,
        rotateX: 6,
        transformPerspective: 800,
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const delayValue = parseFloat(
              getComputedStyle(entry.target).getPropertyValue("--delay")
            );
            const delay = Number.isNaN(delayValue) ? 0 : delayValue;

            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              ease: "power3.out",
              delay,
            });
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.2 }
      );

      gsap.utils.toArray(".reveal").forEach((el) => observer.observe(el));

      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      heroTl
        .from(".site-header", { y: -30, opacity: 0 })
        .from(".hero-copy > *", { opacity: 0, y: 20, stagger: 0.08 }, "-=0.4")
        .from(
          ".hero-panel .info-card",
          { opacity: 0, x: 24, y: 12, stagger: 0.12 },
          "-=0.6"
        );

      gsap.to(".hero-panel", {
        rotateY: 4,
        rotateX: -2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb", {
        y: -12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });
    }, rootRef);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      ctx.revert();
    };
  }, []);

  return (
    <div className="app" ref={rootRef}>
      <main>
        <section className="hero">
          <div className="hero-orb orb-1" aria-hidden="true" />
          <div className="hero-orb orb-2" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Insoniy diqqat rejimi</p>
            <h1>Inson Mode - shovqindan chiqib, ma'no bilan yashash usuli.</h1>
            <p className="lead">
              Inson Mode biz birga qurayotgan harakat: insoniy odatlar, diqqatni
              boshqarish, sog'lom munosabatlar va raqamli intizomni qayta
              tiklaydi. Bu loyiha texnologiyani to'xtatmaydi, uni maqsadga
              xizmat qildiradi.
            </p>
            <div className="hero-actions">
              <a href="https://t.me/InsonMode" className="primary-button">
                Hamkorlikni boshlash
              </a>
              <a href="#qanday" className="secondary-button">
                Qanday ishlaydi?
              </a>
            </div>
            <ul className="hero-highlights">
              <li>Diqqatni himoya qiluvchi kundalik amaliyotlar.</li>
              <li>Oila, jamoa va ish uchun aniq raqamli qoidalar.</li>
              <li>Qadriyatga tayangan, sokin va kuchli ritm.</li>
            </ul>
          </div>
          <div className="hero-panel">
            <div className="info-card tilt-card">
              <h3>3 qatlamli yondashuv</h3>
              <p>Odat + Makon + Raqamli intizom.</p>
            </div>
            <div className="info-card tilt-card">
              <h3>Muvozanat signalari</h3>
              <p>Charchoq, ortiqcha kontent va tarqoqlikni erta aniqlash.</p>
            </div>
            <div className="info-card tilt-card">
              <h3>Kichik qadamlar</h3>
              <p>Har kuni 20 daqiqa ongli rejimni mustahkamlash.</p>
            </div>
            <div className="info-card info-contact tilt-card">
              <h3>Tez aloqa</h3>
              <p>Telegram: @InsonMode</p>
              <p>Email: coderkimyonazarov@gmail.com</p>
            </div>
          </div>
        </section>
        <WhatIs />
        <What />
        <Qanday />
        <Yonalishlar />

        <section className="section">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Tamoyillar</p>
            <h2>Bizni ushlab turadigan 4 asosiy ustun.</h2>
          </div>
          <div className="card-grid">
            <div
              className="card reveal tilt-card"
              style={{ "--delay": "0.2s" }}
            >
              <h3>Ongli tanlov</h3>
              <p>
                Har bir harakatdan oldin maqsadni tekshirish. Avtopilot emas,
                ongli rejim.
              </p>
            </div>
            <div
              className="card reveal tilt-card"
              style={{ "--delay": "0.3s" }}
            >
              <h3>Soddalik</h3>
              <p>
                Qoidalar kam, lekin aniq. Qiyin jarayonlarni kichik ritmlarga
                bo'lamiz.
              </p>
            </div>
            <div
              className="card reveal tilt-card"
              style={{ "--delay": "0.4s" }}
            >
              <h3>Hamjamiyat</h3>
              <p>
                Birga kuzatamiz, birga o'rganamiz. Yakka emas, jamoa bilan
                mustahkamlash.
              </p>
            </div>
          </div>
        </section>

        <Queshon />

        <section className="section" id="aloqa">
          <div className="cta reveal" style={{ "--delay": "0.1s" }}>
            <h3>Inson Mode'ni birga quramizmi?</h3>
            <p>
              Sizning tajribangiz va ehtiyojingizga mos rejimni tuzib beramiz.
              Bizga yozing yoki hamkorlikni boshlaylik.
            </p>
            <div className="contact-grid">
              <a
                className="contact-card tilt-card"
                href="mailto:coderkimyonazarov@gmail.com"
              >
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  coderkimyonazarov@gmail.com
                </span>
              </a>
              <a
                className="contact-card tilt-card"
                href="https://t.me/InsonMode"
              >
                <span className="contact-label">Telegram</span>
                <span className="contact-value">@InsonMode</span>
              </a>
            </div>
            <div className="hero-actions">
              <a
                className="primary-button"
                href="mailto:coderkimyonazarov@gmail.com"
              >
                Xat yozish
              </a>
              <a className="secondary-button" href="#nima">
                Manifestga qaytish
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
