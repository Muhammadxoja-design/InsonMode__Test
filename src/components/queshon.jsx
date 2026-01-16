export default function Queshon() {
  return (
    <section className="section">
      <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
        <p className="section-kicker">Savollar</p>
        <h2>Tez-tez so'raladigan savollar.</h2>
      </div>
      <div className="faq">
        <div
          className="faq-item reveal tilt-card"
          style={{ "--delay": "0.2s" }}
        >
          <h4>Inson Mode kimlar uchun?</h4>
          <p>
            Diqqatini boshqarishni istagan har bir inson, jamoa yoki tashkilot
            uchun.
          </p>
        </div>
        <div
          className="faq-item reveal tilt-card"
          style={{ "--delay": "0.3s" }}
        >
          <h4>Qancha vaqt natija beradi?</h4>
          <p>
            Birinchi yengillik 7-10 kunda seziladi, barqaror natija 6-8 haftada.
          </p>
        </div>
        <div
          className="faq-item reveal tilt-card"
          style={{ "--delay": "0.4s" }}
        >
          <h4>Texnologiyani butunlay tark etamizmi?</h4>
          <p>
            Yo'q. Maqsad - foydali va ma'no beradigan texnologiya ishlatish.
          </p>
        </div>
      </div>
    </section>
  );
}
