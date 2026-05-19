import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../../data";
import useLanguage from "../../i18n/useLanguage";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { content, language, languages, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "is-scrolled" : undefined}>
      <a className="nav-logo" href="#hero" aria-label={content.nav.home}>
        {`<${PROFILE.shortName} />`}
      </a>

      <div className="nav-right">
        <ul className="nav-links">
          {NAV_LINKS.map(({ key, id }, index) => (
            <li key={id} className={index === 0 ? "nav-language-slot" : undefined}>
              {index === 0 && (
                <div className="language-switcher" aria-label={content.nav.languageLabel}>
                  {languages.map((item) => (
                    <button
                      className={item.code === language ? "language-button is-active" : "language-button"}
                      type="button"
                      key={item.code}
                      onClick={() => setLanguage(item.code)}
                      aria-label={`${content.nav.languageLabel}: ${item.label} - ${item.country}`}
                      aria-pressed={item.code === language}
                      title={`${item.label} - ${item.country}`}
                    >
                      <img
                        className="language-flag"
                        src={item.flagSrc}
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              )}
              <a href={`#${id}`}>{content.nav[key]}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
