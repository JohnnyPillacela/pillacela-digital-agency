/** Non-translatable site config: brand, contact, social, URLs */
export const shared = {
    siteName: "Pillacela Solutions",
    siteDescription:
        "Online presence and SEO for local businesses — contractors, bakeries, shops, and more. More than a digital business card.",
    url: "https://example.com",
    contact: {
        email: "hello@example.com",
        phone: "(555) 123-4567",
        phoneHref: "tel:+15551234567",
        address: "123 Business Street, City, State",
    },
    social: {
        instagram: "",
        facebook: "",
        linkedin: "",
    },
    images: {
        ogImage: "/website-screenshots/pillacela-hero.png",
    },
    navCta: {
        label: "Book a Call",
        href:  "#contact",
    },
} as const
