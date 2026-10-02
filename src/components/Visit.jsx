import { salon } from "../config.js";
import { getWeekRows } from "../utils/hours.js";
import { getLocality } from "../utils/address.js";

export default function Visit() {
  const rows = getWeekRows(salon.hours);
  const hasStreet = Boolean(salon.address.line1);
  const encodedQuery = encodeURIComponent(salon.mapsQuery);

  return (
    <section id="visit" className="container visit-section">
      <div className="visit-info">
        <span className="section-label">Hours &amp; location</span>
        <h2 className="section-title">Come see us</h2>

        <div className="hours-list">
          {rows.map((row) => (
            <div
              key={row.day}
              className={
                "hours-row" +
                (row.isToday ? " hours-row--today" : "") +
                (row.isClosed ? " hours-row--closed" : "")
              }
            >
              <span>{row.day}</span>
              <span>{row.hoursLabel}</span>
            </div>
          ))}
        </div>

        <div className="visit-contact">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`}
            target="_blank"
            rel="noopener"
          >
            {hasStreet && (
              <>
                {salon.address.line1}
                <br />
              </>
            )}
            {getLocality(salon.address)}
          </a>
          {!hasStreet && salon.addressNote && (
            <span className="visit-contact__note">{salon.addressNote}</span>
          )}
          <a href={`tel:${salon.phone}`} className="visit-contact__phone">
            {salon.phoneDisplay}
          </a>
        </div>

        {hasStreet ? (
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}`}
            target="_blank"
            rel="noopener"
            className="btn btn-outline"
          >
            Get directions
          </a>
        ) : (
          <a href={`tel:${salon.phone}`} className="btn btn-outline">
            Call for the address
          </a>
        )}
      </div>

      <div className="map-frame">
        <iframe
          title={`Map of ${getLocality(salon.address)}`}
          src={`https://maps.google.com/maps?q=${encodedQuery}&z=${hasStreet ? 14 : 12}&output=embed`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
