export const navLinks = {
  home: { label: "Home", href: "/" },
  about: {
    label: "About",
    href: "/about",
    items: [
      { label: "History", href: "/history" },
      { label: "Partnership", href: "/partnerships" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  committees: {
    label: "Committees",
    href: "/committees",
    items: [
      { label: "Dental Committee", href: "/committees/dental" },
      { label: "Mental Health & Wellness Committee", href: "/committees/mental" },
      { label: "Physical Integrated Health Committee", href: "/committees/physical" },
      { label: "Community Outreach Committee", href: "/committees/community" },
      { label: "Sexual & Reproductive Committee", href: "/committees/sexual" },
    ],
  },
  contact: { label: "Contact Us", href: "/contact" },
  // "Join Us" no longer points at an internal page — its href comes from
  // site_settings.join_form_link (see _data/site.js, cms-schemas.md), a
  // Google Form URL, passed into navBar.jsx as a prop from the root layout.
  join: { label: "Join Us" },
};
