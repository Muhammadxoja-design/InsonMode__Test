import React from "react";
import Header from "../components/header.jsx";

export default function Page() {
  return (
    <div className="app">
      <main>
        <section className="hero">
          <div className="hero-copy reveal" style={{ "--delay": "0.1s" }}>
            <p className="eyebrow">Insoniy diqqat rejimi</p>
            <h1>Inson Mode — shovqindan chiqib, ma'no bilan yashash usuli.</h1>
            <p className="lead">
              Inson Mode biz birga qurayotgan harakat: insoniy odatlar, diqqatni
              boshqarish, sog'lom munosabatlar va raqamli intizomni qayta
              tiklaydi. Bu loyiha texnologiyani to'xtatmaydi, uni maqsadga
              xizmat qildiradi.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#aloqa">
                Hamkorlikni boshlash
              </a>
              <a className="secondary-button" href="#qanday">
                Qanday ishlaydi?
              </a>
            </div>
            <ul className="hero-highlights">
              <li>Diqqatni himoya qiluvchi kundalik amaliyotlar.</li>
              <li>Oila, jamoa va ish uchun aniq raqamli qoidalar.</li>
              <li>Qadriyatga tayangan, sokin va kuchli ritm.</li>
            </ul>
          </div>
          <div className="hero-panel reveal" style={{ "--delay": "0.3s" }}>
            <div className="info-card">
              <h3>3 qatlamli yondashuv</h3>
              <p>Odat + Makon + Raqamli intizom.</p>
            </div>
            <div className="info-card">
              <h3>Muvozanat signalari</h3>
              <p>Charchoq, ortiqcha kontent va tarqoqlikni erta aniqlash.</p>
            </div>
            <div className="info-card">
              <h3>Kichik qadamlar</h3>
              <p>Har kuni 20 daqiqa ongli rejimni mustahkamlash.</p>
            </div>
          </div>
        </section>

        <section className="section" id="nima">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Nima bu?</p>
            <h2>
              Inson Mode bu yangi hayot rejimi, shaxsiy va jamoaviy tizim.
            </h2>
            <p className="lead">
              Biz insonni markazga qo'yamiz: uning diqqatini, tanasini,
              munosabatlarini va maqsadini birlashtiramiz. Bu rejim sizga
              ortiqcha shovqinlarni cheklash, mazmunli ishlarga joy ochish va
              hayotni soddalashtirishga yordam beradi.
            </p>
          </div>
          <div className="two-col">
            <p className="reveal" style={{ "--delay": "0.2s" }}>
              Inson Mode o'zini boshqarishning tiliga aylanadi: "qayerga
              qarayapman?", "nima uchun qilayapman?", "hozir men kim
              bo'lyapman?" degan savollarni kun tartibiga qaytaradi. Har bir
              blok amaliy: ko'nikma, jarayon va o'lchov mavjud.
            </p>
            <div className="quote-card reveal" style={{ "--delay": "0.3s" }}>
              "Inson Mode — faqat g'oya emas. Bu intizom, hamjamiyat va kundalik
              mikro-qarorlar tizimi. Biz ularni birga sinovdan o'tkazamiz va
              soddalashtiramiz."
            </div>
          </div>
        </section>

        <section className="section" id="nega">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Nega kerak?</p>
            <h2>Chuqur diqqat — yangi boylik. Biz uni himoya qilamiz.</h2>
          </div>
          <div className="card-grid">
            <div className="card reveal" style={{ "--delay": "0.2s" }}>
              <h3>Tarqoqlikka qarshi qalqon</h3>
              <p>
                Uzluksiz bildirishnomalar va kontent oqimi diqqatni bo'ladi.
                Inson Mode diqqat uchun yangi chegaralar yaratadi.
              </p>
            </div>
            <div className="card reveal" style={{ "--delay": "0.3s" }}>
              <h3>Munosabatlarni tiklash</h3>
              <p>
                Odamlar bilan to'liq, hushyor muloqot qilish uchun raqamli
                shovqinni pasaytiramiz.
              </p>
            </div>
            <div className="card reveal" style={{ "--delay": "0.4s" }}>
              <h3>Energiya va sog'liq</h3>
              <p>
                Uyqu, jismoniy faollik va ruhiy barqarorlikni
                qo'llab-quvvatlaydigan ritmni tiklaymiz.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="qanday">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Qanday ishlaydi?</p>
            <h2>3 bosqich: kuzatish, qayta sozlash, mustahkamlash.</h2>
          </div>
          <div className="steps">
            <div className="step reveal" style={{ "--delay": "0.2s" }}>
              <span className="step-number">01</span>
              <h3>Kuzatuv</h3>
              <p>
                Kunlik diqqat xaritasi tuziladi: vaqt, vazifa va raqamli sarf
                xaritasi.
              </p>
            </div>
            <div className="step reveal" style={{ "--delay": "0.3s" }}>
              <span className="step-number">02</span>
              <h3>Qayta sozlash</h3>
              <p>
                Keraksiz odatlar o'rniga 3 ta asosiy rejim: fokus, dam, aloqa.
              </p>
            </div>
            <div className="step reveal" style={{ "--delay": "0.4s" }}>
              <span className="step-number">03</span>
              <h3>Mustahkamlash</h3>
              <p>
                Haftalik refleksiya, jamoaviy nazorat va o'zgarishlarni
                o'lchash.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Yo'nalishlar</p>
            <h2>Inson Mode har bir hayot sohasi uchun moslashadi.</h2>
          </div>
          <div className="pill-grid">
            <span className="pill">Diqqat va fokus</span>
            <span className="pill">Oila va munosabatlar</span>
            <span className="pill">Sog'liq va uyqu</span>
            <span className="pill">O'qish va o'sish</span>
            <span className="pill">Ijod va ishlab chiqarish</span>
            <span className="pill">Raqamli gigiyena</span>
            <span className="pill">Jamoaviy ritm</span>
          </div>
        </section>

        <section className="section">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Tamoyillar</p>
            <h2>Bizni ushlab turadigan 4 asosiy ustun.</h2>
          </div>
          <div className="card-grid">
            <div className="card reveal" style={{ "--delay": "0.2s" }}>
              <h3>Ongli tanlov</h3>
              <p>
                Har bir harakatdan oldin maqsadni tekshirish. Avtopilot emas,
                ongli rejim.
              </p>
            </div>
            <div className="card reveal" style={{ "--delay": "0.3s" }}>
              <h3>Soddalik</h3>
              <p>
                Qoidalar kam, lekin aniq. Qiyin jarayonlarni kichik ritmlarga
                bo'lamiz.
              </p>
            </div>
            <div className="card reveal" style={{ "--delay": "0.4s" }}>
              <h3>Hamjamiyat</h3>
              <p>
                Birga kuzatamiz, birga o'rganamiz. Yakka emas, jamoa bilan
                mustahkamlash.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
            <p className="section-kicker">Savollar</p>
            <h2>Tez-tez so'raladigan savollar.</h2>
          </div>
          <div className="faq">
            <div className="faq-item reveal" style={{ "--delay": "0.2s" }}>
              <h4>Inson Mode kimlar uchun?</h4>
              <p>
                Diqqatini boshqarishni istagan har bir inson, jamoa yoki
                tashkilot uchun.
              </p>
            </div>
            <div className="faq-item reveal" style={{ "--delay": "0.3s" }}>
              <h4>Qancha vaqt natija beradi?</h4>
              <p>
                Birinchi yengillik 7-10 kunda seziladi, barqaror natija 6-8
                haftada.
              </p>
            </div>
            <div className="faq-item reveal" style={{ "--delay": "0.4s" }}>
              <h4>Texnologiyani butunlay tark etamizmi?</h4>
              <p>
                Yo'q. Maqsad — foydali va ma'no beradigan texnologiya ishlatish.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="aloqa">
          <div className="cta reveal" style={{ "--delay": "0.1s" }}>
            <h3>Inson Mode'ni birga quramizmi?</h3>
            <p>
              Sizning tajribangiz va ehtiyojingizga mos rejimni tuzib beramiz.
              Bizga yozing yoki hamkorlikni boshlaylik.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:hello@insonmode.uz">
                hello@insonmode.uz
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
