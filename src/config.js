// ============================================================================
// SALON CONFIG — everything specific to THIS business lives here.
//
// To reuse this whole site for a different grooming salon: change the values
// in this file (and swap the files in /public/assets), then update the two
// SEO tags at the top of index.html. You should not need to touch any file
// inside src/components/ or src/utils/.
// ============================================================================

export const salon = {
  name: "Doghonest Grooming",
  shortName: "Doghonest",

  // Used in the hero heading as: "Pet grooming {highlight} {city}"
  heroKicker: "Small dog grooming",
  heroHighlight: "in",
  heroCity: "Coachella",

  tagline: "Small dogs under 25 lb · Coachella, CA",

  description:
    "Unhurried, one-on-one grooming with Maria, who specializes in small dogs under 25 lb. Nervous rescues and heavy shedders are welcome. Every pup gets her full attention and goes home clean, trimmed and happy.",

  // E.164 format — used for tel: / sms: links.
  phone: "+17602382167",
  phoneDisplay: "(760) 238-2167",

  email: "", // leave blank to hide the "send by email" fallback link

  // line1/zip are blank because the salon doesn't publish a street address —
  // components fall back to showing just the city and `addressNote`.
  address: {
    line1: "",
    city: "Coachella",
    state: "CA",
    zip: "",
  },
  addressNote: "Call or text for the exact location.",

  // Google Maps embed + link query. Kept separate from the address object
  // so you can hand-tune the query string without reformatting the address.
  mapsQuery: "Coachella, CA",

  // 0 = Sunday ... 6 = Saturday, matching Date#getDay().
  hours: [
    { day: "Sunday", open: null, close: null },
    { day: "Monday", open: "9:00 am", close: "5:00 pm" },
    { day: "Tuesday", open: "9:00 am", close: "5:00 pm" },
    { day: "Wednesday", open: "9:00 am", close: "5:00 pm" },
    { day: "Thursday", open: "9:00 am", close: "5:00 pm" },
    { day: "Friday", open: "9:00 am", close: "5:00 pm" },
    { day: "Saturday", open: null, close: null },
  ],
  hoursSummary: "Mon–Fri, 9am–5pm · Closed weekends",

  // Options for the "Preferred drop-off" select in the booking form.
  dropOffTimes: ["9–11 am", "11 am–1 pm", "1–3 pm"],

  // Toggle to show/hide "from $X" price labels next to each service.
  // Prices are unset — add real ones before turning this on.
  showPrices: false,

  // Keyed by species. Only species listed here appear in the booking form
  // (a single species hides the Dog/Cat toggle). Add an optional `group` to
  // split a species' services into separately titled cards.
  services: {
    dog: [
      { name: "Full service grooming" },
      { name: "Grooming and styling" },
      { name: "Bathing and blow dry" },
      { name: "Nail trimming" },
      { name: "Ear cleaning" },
      { name: "Anal gland expression" },
      { name: "Flea and tick treatment" },
    ],
  },

  // [label, sublabel] pairs shown as size-picker buttons in the booking form.
  sizes: {
    dog: [
      ["Toy", "under 10 lb"],
      ["Small", "10–25 lb"],
      ["Larger", "over 25 lb"],
    ],
  },
  // Optional line shown under the size picker. Leave blank to hide it.
  sizeNote: "Maria specializes in small dogs under 25 lb. For larger dogs, we’ll confirm availability when we reply.",

  // The first three photos also appear in the hero.
  gallery: [
    { src: "/assets/dog-bichon.webp", alt: "Fluffy white dog after a groom, wearing a leaf-print bandana" },
    { src: "/assets/dog-pomeranians.webp", alt: "Two Pomeranians on the grooming table wearing a red and a blue bow tie" },
    { src: "/assets/dog-frenchie.webp", alt: "Blue French Bulldog wearing a pumpkin-print bandana" },
  ],

  // Google reviews.
  reviews: [
    {
      name: "Laura G.",
      when: "3 months ago",
      text: "Love Dog Honest Grooming. The absolute best hair cut my sweet Bella has ever had.",
    },
    {
      name: "Moises L.",
      when: "a year ago",
      text: "I recently took my dog to Dog Honest Grooming LLC and was thoroughly impressed! Maria was gentle and attentive, leaving my pup looking clean, well-trimmed, and happy. The service was quick, and Maria genuinely cared about my dog's comfort. Highly recommend for any pet parent!",
    },
    {
      name: "Jennifer B.",
      when: "2 years ago",
      text: "Maria was amazing. Friendly and professional. I have two dogs and one is a recent rescue who is still nervous. Maria handled her perfectly and was able to complete Rosie’s first professional grooming. Both dogs look amazing. I would highly recommend Maria. I will definitely be a repeat customer.",
    },
    {
      name: "Gloria B.",
      when: "2 years ago",
      text: "We drive from AZ just to get our two goldens groomed. Our dogs did not have the best experience with groomers prior to us finding Dog Honest. Our dogs love Maria. Her attention to detail and love for these animals is unmatched.",
    },
    {
      name: "Guadalupe R.",
      when: "2 years ago",
      text: "We got Dog Honest for the first time to groom our babies (frenchies) and we were absolutely amazed with the awesome service provided. We absolutely loved the service and customer service. No more PetSmart — Dog Honest is now the family’s new dog groomer. We loved the tie included in the service, made my babies look super adorable ♥️",
    },
    {
      name: "Aaron G.",
      when: "2 years ago",
      text: "I have a Husky Akita mix that has a ton of fur. I have tried so many groomers and was never satisfied with the result. Maria is by far the best groomer to ever work on my dog and I likely will never use another groomer as long as she is available. She took her time and did not rush the service and my boy came out looking fresh! I couldn’t recommend her enough if you’re considering trying out her service!!!",
    },
    {
      name: "Sabrina C.",
      when: "a year ago",
      text: "Maria is great! My Frenchie sheds a lot and I love that she takes her time with him by giving him a deshedding bath! He was nervous the first time but she made him feel comfortable and now he doesn’t mind the process. She’s great with communicating as well! Highly recommend especially if you have a dog that sheds a lot!",
    },
  ],

  // Palette pulled from the logo: paw-pad orange, leaf green and the
  // olive-brown wordmark on its cream background. Applied at runtime as CSS
  // custom properties (see src/main.jsx), so this object is the ONE place
  // that defines the site's colors. accentStrong/accentDeep/accentLabel are
  // deepened versions of the logo hues so text set in them clears WCAG AA
  // (large text 3:1, small text 4.5:1) against the light backgrounds.
  colors: {
    bg: "#FFFCED",
    surface: "#FFFFFF",
    surfaceAlt: "#EEF7E4",
    placeholder: "#F5EDD3",
    ink: "#3B3215",
    inkHover: "#564A22",
    inkSoft: "#5A5132",
    inkMute: "#6B6345",
    onDarkSoft: "#D9CFB0",
    border: "rgba(59,50,21,.12)",
    borderStrong: "rgba(59,50,21,.22)",
    accent: "#FF8434",
    accentHover: "#FF9A55",
    accentStrong: "#C8550C",
    accentDeep: "#A9460A",
    accentLabel: "#3D7A22",
    leaf: "#6BC748",
    leafSoft: "#DDF0CF",
    highlight: "#FFE9D3",
    selection: "#FFD0AE",
    onDark: "#FFFCED",
    error: "#B3261E",
    openDot: "#4FA82E",
    closedDot: "#D6A27A",
  },

  fonts: {
    display: "'Fredoka', 'Nunito', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
    // Keep in sync with the <link> in index.html.
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;600;700;800&display=swap",
  },
};
