// Maps to the "alumni" collection (see cms-schemas.md):
// name (SHORT_TEXT), workplace (SHORT_TEXT), testimony (LONG_TEXT),
// photo (MEDIA_LIST).

import { cmsUrl } from "./cms";

export const alumniFallbackData = [
  {
    id: 1,
    name: "Alex Rivera",
    workplace: "University of California, Davis",
    testimony: "Joining JCC as a freshman gave me my first real taste of community health work. The mentorship and hands-on experience shaped the path I'm still on today.",
    image: "/alumni1.png",
  },
  {
    id: 2,
    name: "Jordan Lee",
    workplace: "University of California, Davis",
    testimony: "Leading a committee at JCC taught me how to organize outreach events that actually serve a community's needs — a skill I use every day now.",
    image: "/alumni1.png",
  },
  {
    id: 3,
    name: "Morgan Chen",
    workplace: "University of California, Davis",
    testimony: "The friendships and mentorship I found at JCC made the biggest difference in my undergrad years — I still keep in touch with members I met there.",
    image: "/alumni1.png",
  },
  {
    id: 4,
    name: "Taylor Nguyen",
    workplace: "University of California, Davis",
    testimony: "Volunteering with JCC's clinic partners gave me clinical exposure I couldn't have gotten anywhere else as an undergrad.",
    image: "/alumni1.png",
  },
  {
    id: 5,
    name: "Casey Patel",
    workplace: "University of California, Davis",
    testimony: "JCC showed me what it means to show up for a community consistently. That lesson has stuck with me well beyond graduation.",
    image: "/alumni1.png",
  },
];

export async function getAlumni() {
  try {
    const res = await fetch(cmsUrl("alumni"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      throw new Error("No alumni published yet");
    }
    return data.body.map((item) => ({
      id: item._id,
      name: item.name,
      workplace: item.workplace,
      testimony: item.testimony,
      image: item.photo?.[0]?.src,
    }));
  } catch (e) {
    console.error(`Failed to fetch alumni: ${e.message}`);
    return alumniFallbackData;
  }
}

// Maps to the "alumni_hero_images" collection (see cms-schemas.md) — the
// crossfade carousel shown in the Alumni page's hero section.
export const alumniHeroImagesFallbackData = [
  '/alumni.png',
  '/history_img_5.jpg',
  '/fourth.jpg',
];

export async function getAlumniHeroImages() {
  try {
    const res = await fetch(cmsUrl("alumni_hero_images"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      throw new Error("No alumni hero images published yet");
    }
    return data.body.map((item) => item.image?.[0]?.src).filter(Boolean);
  } catch (e) {
    console.error(`Failed to fetch alumni hero images: ${e.message}`);
    return alumniHeroImagesFallbackData;
  }
}
