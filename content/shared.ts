/** Non-translatable site config: brand, contact, social, URLs */
export const shared = {
    siteName: "Pillacela Solutions",
    siteDescription:
        "Online presence and SEO for local businesses — contractors, bakeries, shops, and more. More than a digital business card.",
    url: "https://pillacela.com",
    contact: {
        email: "johnnybelesaca@gmail.com",
        phone: "(908) 451-0788",
        phoneHref: "tel:+19084510788",
        address: "Elizabeth, NJ, USA",
    },
    social: {
        instagram: "",
        facebook: "",
        linkedin: "",
    },
    images: {
        ogImage: "/website-screenshots/pillacela-hero.png",
        /** Tab / bookmark icon; PNG is fine for modern browsers. */
        favicon: "/page-images/ps-logo.png",
    },
    navCta: {
        label: "Book a Call",
        href:  "#contact",
    },
} as const
