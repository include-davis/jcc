// Maps to the "alumni" collection (see cms-schemas.md):
// name (SHORT_TEXT), workplace (SHORT_TEXT), testimony (LONG_TEXT),
// photo (MEDIA_LIST).

export const alumniFallbackData = [
  {
    id: 1,
    name: "Alex Rivera",
    workplace: "University of California, Davis",
    testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/alumni1.png",
  },
  {
    id: 2,
    name: "Jordan Lee",
    workplace: "University of California, Davis",
    testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/alumni1.png",
  },
  {
    id: 3,
    name: "Morgan Chen",
    workplace: "University of California, Davis",
    testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/alumni1.png",
  },
  {
    id: 4,
    name: "Taylor Nguyen",
    workplace: "University of California, Davis",
    testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/alumni1.png",
  },
  {
    id: 5,
    name: "Casey Patel",
    workplace: "University of California, Davis",
    testimony: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/alumni1.png",
  },
];

export async function getAlumni() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/alumni?_published=true`,
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
