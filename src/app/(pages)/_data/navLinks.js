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
  join: { label: "Join Us", href: "/join" },
};
