import { salon } from "../config.js";
import { getFullAddress } from "../utils/address.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        {/* width/height (matching the real 640x640 file) let the browser
            reserve this box's height before the image loads, so nothing
            below it jumps around — the CSS width still wins visually. */}
        <img
          src="/assets/logo.webp"
          alt={salon.name}
          className="site-footer__logo"
          loading="lazy"
          width={640}
          height={640}
        />
        <div className="site-footer__meta">
          <span>{salon.hoursSummary}</span>
          <span>
            {getFullAddress(salon.address)} ·{" "}
            {salon.phoneDisplay}
          </span>
        </div>
      </div>
    </footer>
  );
}
