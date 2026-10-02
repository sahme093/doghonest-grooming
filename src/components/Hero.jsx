import { useEffect, useState } from "react";
import { salon } from "../config.js";
import { getStatusLabel, isOpenNow } from "../utils/hours.js";
import { getFullAddress } from "../utils/address.js";

export default function Hero() {
  // Open/closed status depends on the current time, so it's computed after
  // mount (useState + useEffect) rather than during render, to avoid a
  // server/client mismatch if this is ever pre-rendered.
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const update = () =>
      setStatus({ open: isOpenNow(salon.hours), label: getStatusLabel(salon.hours) });
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="container hero">
      <div className="hero__copy">
        <div className="hero__badges">
          <span className="pill">
            <span
              className="status-dot"
              style={{
                background: status
                  ? status.open
                    ? "var(--color-openDot)"
                    : "var(--color-closedDot)"
                  : "transparent",
              }}
              aria-hidden="true"
            />
            {status ? status.label : "Checking hours…"}
          </span>
          <span className="pill">{salon.tagline}</span>
        </div>

        <h1>
          {salon.heroKicker} <em>{salon.heroHighlight}</em> {salon.heroCity}
        </h1>

        <p className="hero__description">{salon.description}</p>

        <div className="hero__actions">
          <a href="#book" className="btn btn-dark">
            Request appointment
          </a>
          <a href={`tel:${salon.phone}`} className="btn btn-accent">
            Call {salon.phoneDisplay}
          </a>
        </div>

        <p className="hero__fine-print">
          {salon.hoursSummary} · {getFullAddress(salon.address)}
        </p>
      </div>

      {/* Paw-print arrangement echoing the logo: round "pads" holding the
          first three gallery photos, plus solid pads and a leaf sprig. */}
      <div className="hero__art" aria-hidden="true">
        <div className="pad" style={{ left: "4%", top: "8%", width: "62%", background: "var(--color-accent)" }} />
        <div
          className="pad pad--photo"
          style={{ left: "10%", top: "14%", width: "54%", backgroundImage: `url(${salon.gallery[0].src})`, backgroundPosition: "center 30%" }}
        />
        <div
          className="pad pad--photo pad--ring"
          style={{ right: "2%", top: "2%", width: "33%", backgroundImage: `url(${salon.gallery[1].src})`, backgroundPosition: "center 35%" }}
        />
        <div
          className="pad pad--photo pad--ring"
          style={{ right: "4%", top: "44%", width: "38%", backgroundImage: `url(${salon.gallery[2].src})`, backgroundPosition: "center 30%" }}
        />
        <div className="pad" style={{ left: "2%", bottom: "6%", width: "17%", background: "var(--color-accent)" }} />
        <div className="pad" style={{ left: "24%", bottom: "0%", width: "11%", background: "var(--color-highlight)" }} />
        <svg viewBox="0 0 120 100" className="hero__leaves">
          <path d="M58 92 C30 86 14 60 22 30 C46 38 64 62 58 92Z" fill="var(--color-leaf)" />
          <path d="M62 92 C66 62 84 40 112 34 C116 64 94 88 62 92Z" fill="var(--color-leaf)" />
          <path d="M60 90 C56 60 60 34 74 8 C90 30 82 66 60 90Z" fill="var(--color-leafSoft)" stroke="var(--color-leaf)" strokeWidth="3" />
        </svg>
      </div>
    </section>
  );
}
