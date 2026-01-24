import React, { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-mark">IM</div>
          <div className="brand-text">
            <span className="brand-title">Inson Mode</span>
            <span className="brand-subtitle">insoniy odatlarni tiklash</span>
          </div>
        </div>
        <nav className="site-nav" id="primary-navigation" aria-label="Primary">
          <a href="#nima" onClick={handleNavClick}>
            Nima bu?
          </a>
          <a href="#nega" onClick={handleNavClick}>
            Nega kerak?
          </a>
          <a href="#qanday" onClick={handleNavClick}>
            Qanday ishlaydi?
          </a>
          <a href="#aloqa" onClick={handleNavClick}>
            Aloqa
          </a>
        </nav>
        <a className="ghost-button" href="https://t.me/InsonMode">
          Telegram
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Navigatsiya menyusini ochish</span>
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>
    </header>
  );
}
