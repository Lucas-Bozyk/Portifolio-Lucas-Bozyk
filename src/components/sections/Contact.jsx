import { CONTACT_LINKS } from "../../data";
import useLanguage from "../../i18n/useLanguage";
import { IconArrow, IconGithub, IconLinkedin, IconMail } from "../icons";
import SectionHeader from "../ui/SectionHeader";

const ICON_MAP = {
  mail: <IconMail />,
  github: <IconGithub />,
  linkedin: <IconLinkedin />,
};

export default function Contact() {
  const { content } = useLanguage();

  return (
    <section id="contato">
      <div className="contact-wrapper">
        <SectionHeader
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          align="center"
        />

        <p className="contact-intro">{content.contact.intro}</p>

        <div className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <a
              className="contact-link"
              href={link.href}
              key={link.label}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <div className="contact-link-left">
                <div
                  className="contact-icon"
                  style={{ background: link.iconBg, color: link.iconColor }}
                >
                  {ICON_MAP[link.iconKey]}
                </div>
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  <div className="contact-link-value">{link.value}</div>
                </div>
              </div>
              <div className="contact-arrow">
                <IconArrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
