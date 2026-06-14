import type { CampsiteConfig } from "../types";

/**
 * Camping Bella Austria — St. Peter am Kammersberg, Steiermark.
 * Inhalte zu 100 % aus raw/digest abgeleitet (4-Sterne Glamping-/Campingplatz,
 * Lagunenpool, Wellness, Mobilheime „Happy Camp", Restaurant). Bilder: nur
 * eigene, provenienzgebundene Fotos des Platzes. Original-Template-Palette,
 * heroVariant „center".
 */
const IMG = "/campsites/camping-bellaustria";

const campingBellaustria: CampsiteConfig = {
  name: "Camping Bella Austria",
  shortName: "Bella Austria",
  slug: "camping-bellaustria",
  ort: "St. Peter am Kammersberg",
  region: "Steiermark",
  brandKind: "Glamping & Camping",
  regionLong: "Murtal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Klein, aber mit großem Herz",
  claimEmphasis: "großem Herz",
  emailDetail: "euer Lagunenpool vor der steirischen Bergkulisse",

  intro:
    "Ein kleiner 4-Sterne-Glamping-Platz in den Bergen von St. Peter am Kammersberg: beheizter Lagunenpool, Wellness mit Sauna und Mobilheime mitten im steirischen Grün — hier kommst du wirklich an.",

  logo: { src: `${IMG}/logo-b23929245a.png`, alt: "Logo Camping Bella Austria" },

  statement: {
    text: "Auf unserem Platz umgibt dich der Duft des Waldes, das Rauschen der Bäche und der Blick auf die höchsten Gipfel.",
    emphasis: "höchsten Gipfel",
  },

  pillars: [
    {
      title: "Lagunenpool mit Bergblick",
      text: "Der beheizte Lagunenpool liegt mitten im Grünen, ringsum die bewaldeten Hänge — daneben ein flacher Pool für die Kleinen.",
      image: { src: `${IMG}/gallery-852c0557be.webp`, alt: "Lagunenpool von Camping Bella Austria vor bewaldeten Bergen" },
    },
    {
      title: "Glamping im Mobilheim",
      text: "Charmante Mobilheime „Happy Camp“ mit Küche, Bad und überdachter Terrasse — Komfort wie zu Hause, mitten in der Natur.",
      image: { src: `${IMG}/gallery-3c9d96f2e3.webp`, alt: "Mobilheim mit Terrasse am Camping Bella Austria, Berge im Hintergrund" },
    },
    {
      title: "Persönlich geführt",
      text: "Ein kleiner Platz mit großem Herz: Hier wirst du herzlich empfangen und die Wege sind kurz — vom Stellplatz bis zum Restaurant.",
      image: { src: `${IMG}/gallery-68d2dff508.webp`, alt: "Herzlicher Empfang an der Rezeption von Camping Bella Austria" },
    },
  ],

  usps: [
    "4-Sterne-Glamping",
    "Beheizter Lagunenpool",
    "Wellness mit Sauna",
    "Restaurant am Platz",
    "Hunde willkommen",
    "Animation im Sommer",
  ],

  trust: {
    heading: "Darauf ist am Bella Austria Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Ein familiärer 4-Sterne-Platz im steirischen Murtal: beheizter Lagunenpool und Wellness, ehrliche österreichische Küche und ringsum Berge, Wasserfälle und Seen zum Entdecken — dein Hund darf mit.",
  },

  awards: [],

  saison: { von: "April", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/gallery-31d9656e11.webp`, alt: "Blick über das Mobilheim-Dorf von Camping Bella Austria im grünen Tal" },
  },

  breather: {
    image: { src: `${IMG}/gallery-8980612a1e.webp`, alt: "Beheizter Pool von Camping Bella Austria mit Sommerblumen im Vordergrund und bewaldeten Hügeln" },
    line: "Das grüne Herz Österreichs — Berge, so weit du schaust.",
  },

  camping: {
    heading: "Camping am Bella Austria",
    intro:
      "Großzügige, schattige Stellplätze, ein beheizter Pool und ein Wellnessbereich — alles, was einen entspannten Campingtag in den Bergen ausmacht.",
    features: [
      {
        title: "Geräumige Stellplätze",
        text: "Schattige 10 × 11-Meter-Plätze mit 16-Ampere-Strom, Wasser- und Abwasseranschluss — für Zelt, Wohnwagen oder Wohnmobil.",
        image: { src: `${IMG}/gallery-647be596e8.webp`, alt: "Stellplätze und Mobilheime am Camping Bella Austria von oben" },
      },
      {
        title: "Beheizter Lagunenpool",
        text: "Der Pool ist von einer Liegewiese umgeben; ein zweiter, flacher Lagunenpool ist ideal für den Badespaß der Kleinen.",
        image: { src: `${IMG}/gallery-16a7b40fe5.webp`, alt: "Badegäste im Pool von Camping Bella Austria mit Bergblick" },
      },
      {
        title: "Wellness mit drei Saunen",
        text: "Im Wellnessbereich warten eine Bio-Sauna, eine finnische Sauna und eine Infrarot-Sauna auf entspannte Stunden.",
        image: { src: `${IMG}/gallery-4be05e68f5.webp`, alt: "Sauna im Wellnessbereich von Camping Bella Austria" },
      },
      {
        title: "Restaurant im Bergstil",
        text: "Lokale österreichische und europäische Küche, Bio-Menüs mit frischem Gemüsebuffet — und für Pizzafans echte italienische Pizza.",
        image: { src: `${IMG}/gallery-7b4e8b4bec.webp`, alt: "Restaurant im Bergstil mit Holzmöbeln am Camping Bella Austria" },
      },
      {
        title: "Hunde willkommen",
        text: "Dein Vierbeiner darf mit: Es gibt einen eigenen Agility-Parcours und eine Hundetoilette direkt am Platz.",
        image: { src: `${IMG}/gallery-a719d07489.webp`, alt: "Gast mit Hund am Camping Bella Austria" },
      },
      {
        title: "Bar, Eisdiele & Minimarkt",
        text: "Im Mittelpunkt der Anlage findest du Restaurant, Bar mit Eisdiele und einen Minimarkt für die kleinen Besorgungen.",
        image: { src: `${IMG}/gallery-e089ac4f2e.webp`, alt: "Shop & Minimarkt von Camping Bella Austria" },
      },
    ],
  },

  mobilheime: {
    heading: "Unsere Mobilheime „Happy Camp“",
    intro:
      "Kleine, charmante Mobilheime, voll ausgestattet mit Küche, eigenem Bad und überdachter Terrasse — Haustiere willkommen, das Auto parkt direkt daneben.",
    items: [
      {
        name: "Happy Easy",
        kind: "Mobilheim · 2 Schlafzimmer",
        text: "24 m² mit zwei Schlafzimmern, Küchenzeile, Bad und Schlafsofa — Platz für bis zu 6 Personen.",
        image: { src: `${IMG}/gallery-240069c80a.webp`, alt: "Mobilheim Happy Easy mit überdachter Terrasse am Camping Bella Austria" },
        priceFrom: 45,
        features: ["24 m²", "Bis 6 Personen", "Küche, Bad & WLAN", "Überdachte Terrasse"],
      },
      {
        name: "Happy Plus",
        kind: "Mobilheim · 3 Schlafzimmer",
        text: "32 m² mit drei Schlafzimmern, Küche, Klimaanlage und WLAN — für bis zu 7 Personen, mit überdachter Terrasse.",
        image: { src: `${IMG}/accommodation-2201925165.webp`, alt: "Mobilheim Happy Plus mit Terrasse und Gartenmöbeln" },
        priceFrom: 55,
        features: ["32 m²", "Bis 7 Personen", "Klimaanlage & WLAN", "Überdachte Terrasse"],
      },
    ],
  },

  kinder: {
    heading: "Für kleine Gäste",
    intro:
      "Flacher Lagunenpool, Spielplatz und ein kleiner Streichelzoo — und im Sommer sechs Tage die Woche Animation.",
    features: [
      {
        title: "Lagunenpool für die Kleinen",
        text: "Ein eigener, flacher Lagunenpool ist nur einen Meter tief — ideal zum Planschen und für die ersten Schwimmversuche.",
        image: { src: `${IMG}/gallery-00019303ac.webp`, alt: "Flacher Lagunenpool für Kinder am Camping Bella Austria" },
      },
      {
        title: "Spielplatz",
        text: "Klettergerüst, Schaukeln und viel Platz zum Toben — mitten in der Natur und mit Blick auf die Berge.",
        image: { src: `${IMG}/gallery-35b5279772.webp`, alt: "Spielplatz mit Klettergerüst am Camping Bella Austria" },
      },
      {
        title: "Kleiner Mini-Zoo",
        text: "Ziegen und andere Tiere zum Anschauen: Der kleine Mini-Zoo am Platz ist bei Kindern besonders beliebt.",
        image: { src: `${IMG}/gallery-7b666d4d9b.webp`, alt: "Ziege im Mini-Zoo von Camping Bella Austria" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Murtal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S36 Murtal-Schnellstraße bis Scheifling, dann auf der B96 Richtung Murau bis St. Peter am Kammersberg — der Platz ist ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Bahn bis Unzmarkt und weiter mit der Murtalbahn; die letzten Kilometer gern per Abholung auf Anfrage.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Graz (rund 130 km) und Salzburg (rund 170 km) erreichst du in gut zwei Stunden.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Bella Austria",
    headingEmphasis: "Sommer",
    intro:
      "Pool, Mobilheime und lange Sommertage zwischen den steirischen Bergen — ein paar Eindrücke von Camping Bella Austria.",
    tag: "April bis September",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-407b0aa7cf.webp`, alt: "Wohnbereich eines Mobilheims mit Küche und Sitzecke" },
      { src: `${IMG}/gallery-ffd8de0def.webp`, alt: "Überdachte Terrasse eines Mobilheims mit gedecktem Tisch" },
      { src: `${IMG}/gallery-ae8263722f.webp`, alt: "Kinderanimation mit Bienen-Maskottchen auf dem Spielplatz von Camping Bella Austria" },
      { src: `${IMG}/gallery-64622bc434.webp`, alt: "Gedeckter Tisch mit Blick auf Mobilheime und Berge" },
    ],
  },

  booking: {
    heading: "Dein Platz in der steirischen Bergwelt",
    headingEmphasis: "steirischen Bergwelt",
    intro:
      "Wähle Zeitraum und Unterkunft — wir melden uns persönlich mit deiner Verfügbarkeit und einem Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz inkl. 2 Personen (Nebensaison) · Mobilheim-Preise pro Nacht · Hund € 8 pro Nacht · in der Hochsaison höher",
    highlight: {
      title: "Alles am Platz",
      text: "Lagunenpool, Wellness und Restaurant sind nur ein paar Schritte entfernt.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 23, perExtraGuest: 6 },
      { id: "happy-easy", label: "Mobilheim Happy Easy", perNight: 45 },
      { id: "happy-plus", label: "Mobilheim Happy Plus", perNight: 55 },
    ],
  },

  kontakt: {
    tel: "+43 664 1680977",
    telHref: "tel:+436641680977",
    mail: "info@camping-bellaustria.com",
    facebook: "https://www.facebook.com/Camping-Bella-Austria-196101353736874/",
    adresse: "Peterdorf 100 · 8842 Sankt Peter am Kammersberg · Steiermark",
    coords: { lat: 47.1804685, lng: 14.2158513 },
  },

  languages: ["DE", "IT", "EN", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Pool & Wellness", href: "#camping" },
      ],
    },
    { label: "Mobilheime", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingBellaustria;
