// The street line and zip are optional in config.js (some salons don't
// publish a street address), so every component formats the address
// through here instead of concatenating the fields itself.

export function getLocality(address) {
  return [`${address.city}, ${address.state}`, address.zip].filter(Boolean).join(" ");
}

export function getFullAddress(address) {
  return [address.line1, getLocality(address)].filter(Boolean).join(", ");
}
