export default function Qanday() {
  return (
    <section className="section" id="qanday">
      <div className="container">
        <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
          <p className="section-kicker">Qanday ishlaydi?</p>
          <h2>3 bosqich: kuzatish, qayta sozlash, mustahkamlash.</h2>
        </div>
        <div className="steps">
          <div className="step reveal tilt-card" style={{ "--delay": "0.2s" }}>
            <span className="step-number">01</span>
            <h3>Kuzatuv</h3>
            <p>
              Kunlik diqqat xaritasi tuziladi: vaqt, vazifa va raqamli sarf
              xaritasi.
            </p>
          </div>
          <div className="step reveal tilt-card" style={{ "--delay": "0.3s" }}>
            <span className="step-number">02</span>
            <h3>Qayta sozlash</h3>
            <p>Keraksiz odatlar o'rniga 3 ta asosiy rejim: fokus, dam, aloqa.</p>
          </div>
          <div className="step reveal tilt-card" style={{ "--delay": "0.4s" }}>
            <span className="step-number">03</span>
            <h3>Mustahkamlash</h3>
            <p>
              Haftalik refleksiya, jamoaviy nazorat va o'zgarishlarni o'lchash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
