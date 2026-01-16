export default function What() {
  return (
    <section className="section" id="nega">
      <div className="section-header reveal" style={{ "--delay": "0.1s" }}>
        <p className="section-kicker">Nega kerak?</p>
        <h2>Chuqur diqqat - yangi boylik. Biz uni himoya qilamiz.</h2>
      </div>
      <div className="card-grid">
        <div className="card reveal tilt-card" style={{ "--delay": "0.2s" }}>
          <h3>Tarqoqlikka qarshi qalqon</h3>
          <p>
            Uzluksiz bildirishnomalar va kontent oqimi diqqatni bo'ladi. Inson
            Mode diqqat uchun yangi chegaralar yaratadi.
          </p>
        </div>
        <div className="card reveal tilt-card" style={{ "--delay": "0.3s" }}>
          <h3>Munosabatlarni tiklash</h3>
          <p>
            Odamlar bilan to'liq, hushyor muloqot qilish uchun raqamli shovqinni
            pasaytiramiz.
          </p>
        </div>
        <div className="card reveal tilt-card" style={{ "--delay": "0.4s" }}>
          <h3>Energiya va sog'liq</h3>
          <p>
            Uyqu, jismoniy faollik va ruhiy barqarorlikni qo'llab-quvvatlaydigan
            ritmni tiklaymiz.
          </p>
        </div>
      </div>
    </section>
  );
}
