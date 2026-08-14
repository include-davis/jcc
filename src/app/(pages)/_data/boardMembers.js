// Maps to the "board_members" collection (see cms-schemas.md):
// name/title/email (SHORT_TEXT), photo (MEDIA_LIST).

const GENERIC_BOARD_PHOTOS = [
  '/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg',
  '/history_img_5.jpg', '/second.jpg', '/third.jpg', '/fourth.jpg',
];

const GENERIC_BOARD_TITLES = [
  "President", "Vice President", "Treasurer", "Secretary",
  "Board Member", "Board Member", "Board Member", "Board Member",
];

export const boardMembersFallbackData = Array.from({ length: 8 }, (_, i) => ({
  name: `Board Member ${i + 1}`,
  photo: GENERIC_BOARD_PHOTOS[i],
  role: GENERIC_BOARD_TITLES[i],
  email: "placeholder@jcc.org",
}));

export async function getBoardMembers() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/board_members?_published=true`,
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
      name: item.name,
      photo: item.photo?.[0]?.src,
      role: item.title,
      email: item.email,
    }));
  } catch (e) {
    console.error(`Failed to fetch board members: ${e.message}`);
    return boardMembersFallbackData;
  }
}
