import { salon } from "../config.js";

const SPECIES_TITLES = { dog: "Dogs", cat: "Cats" };

// One card per `group` in config.js; services without a group fall back to a
// card named after their species ("Dogs", "Cats").
function groupServices() {
  const groups = new Map();
  Object.entries(salon.services).forEach(([species, items]) => {
    items.forEach((item) => {
      const title = item.group || SPECIES_TITLES[species] || species;
      if (!groups.has(title)) groups.set(title, []);
      groups.get(title).push(item);
    });
  });
  return [...groups.entries()];
}

function ServiceList({ title, items }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      {items.map((item) => (
        <div className="service-row" key={item.name}>
          <span className="service-row__name">{item.name}</span>
          {salon.showPrices && item.price != null && (
            <span className="service-row__price">from ${item.price}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container section-inner">
        <div className="section-heading">
          <div className="section-heading__text">
            <span className="section-label">Services</span>
            <h2 className="section-title">From a quick nail trim to the full spa day</h2>
          </div>
        </div>

        <div className="service-groups">
          {groupServices().map(([title, items]) => (
            <ServiceList key={title} title={title} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
