import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark">IM</div>
        <div className="brand-text">
          <span className="brand-title">Inson Mode</span>
          <span className="brand-subtitle">insoniy odatlarni tiklash</span>
        </div>
      </div>
      <nav className="site-nav">
        <a href="#nima">Nima bu?</a>
        <a href="#nega">Nega kerak?</a>
        <a href="#qanday">Qanday ishlaydi?</a>
        <a href="#aloqa">Aloqa</a>
      </nav>
      <a className="ghost-button" href="https://t.me/InsonMode">
        Telegram
      </a>
    </header>
  );
}
