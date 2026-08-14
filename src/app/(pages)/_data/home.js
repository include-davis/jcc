// Maps to the "hero_slides" collection (see cms-schemas.md): image
// (MEDIA_LIST), label/title/button_text/button_link (SHORT_TEXT),
// subtitle (LONG_TEXT), tags (comma-separated SHORT_TEXT, split on the
// frontend — no confirmed list-of-strings field type).
//
// Note: the homepage's committee grid intentionally does NOT have its own
// data here — it reuses getCommittees() from ./committees so there isn't a
// 4th copy of committee names/images floating around the codebase.

export const heroSlidesFallbackData = [
  {
    img: "/first.svg",
    label: "OUR MISSION",
    title: "High-quality care for those who need it most.",
    subtitle: "We deliver care and assistance to underprivileged communities facing higher risk for toxic stress — using an intersectional approach that acknowledges the signs, symptoms, and risks of trauma..",
    btnText: "Apply to Join",
    tags: ["Leadership", "Humility", "Empathy", "Responsibility"],
    btnLink: "/join",
  },
  {
    img: "/second.jpg",
    label: "OUR ALUMNI",
    title: "The clinic stays with you.",
    subtitle: "See where our alumni are today — from residencies to research, and the paths they carved after graduation.",
    btnText: "Meet Our Alumni",
    btnLink: "/events",
    align: "left",
  },
  {
    img: "/third.jpg",
    label: "COMMITTEES",
    title: "Every team keeps the clinic running.",
    subtitle: "From outreach to operations, our committees are student-led groups that power every part of the clinic experience.",
    btnText: "View Our Committees",
    btnLink: "/committees",
    align: "left",
  },
  {
    img: "/JCC Tabling (10_17).jpg",
    label: "OUR HISTORY",
    title: "Founded by students. Still is.",
    subtitle: "Learn how this clinic started, who built it, and the milestones that shaped what it is today.",
    btnText: "Read Our History",
    btnLink: "/history",
    align: "left",
    position: "center 70%",
  },
];

export async function getHeroSlides() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/hero_slides?_published=true`,
      { next: { tags: ["cms"] } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      return [];
    }
    return data.body.map((item) => ({
      img: item.image?.[0]?.src,
      label: item.label,
      title: item.title,
      subtitle: item.subtitle,
      btnText: item.button_text,
      btnLink: item.button_link,
      tags: item.tags ? item.tags.split(",").map((t) => t.trim()).filter(Boolean) : undefined,
    }));
  } catch (e) {
    console.error(`Failed to fetch hero slides: ${e.message}`);
    return heroSlidesFallbackData;
  }
}
