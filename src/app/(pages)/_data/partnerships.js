// Maps to the "partnerships" collection schema (see cms-schemas.md):
// main_image (MEDIA_LIST), title (SHORT_TEXT), website_link (SHORT_TEXT),
// description (LONG_TEXT).

export const partnershipsFallbackData = [
  {
    key: "afghan_clinic",
    image: "/AfghanClinicCarousel.png",
    title: "Afghan Clinic",
    description: "The Afghan Clinic exists to bring about genuine healing by nurturing the restoration of the body, mind, and soul in each patient through leading-edge and individualized care. Through our partnership, JCC and the Afghan Clinic are committed to providing holistic primary care, offering specialized services to uninsured patients, and working with government and volunteer providers to ensure affordable access to essential treatment.",
    websiteLink: "https://www.afghanclinic.com"
  },
  {
    key: "carlton_senior_living",
    image: "/CarltonSeniorLivingCarousel.png",
    title: "Carlton Senior Living",
    description: "The Memory Care facility at the Carlton Senior Center offer exceptional dementia support. The memory care facility is centered around fostering meaningful relationships, upholding each resident’s dignity, and honoring their unique needs. As a volunteer you will support the staff with preparing activities for the seniors and  building connections with the seniors.",
    websiteLink: "https://www.carltonseniorliving.com"
  },
  {
    key: "healing_grove_health_center",
    image: "/HealingGroveHealthCenterCarousel.png",
    title: "Healing Grove Health Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    websiteLink: "https://healinggrove.org"
  },
  {
    key: "princeton_review",
    image: "/ThePrincetonReviewCarousel.png",
    title: "The Princeton Review",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    websiteLink: "https://www.princetonreview.com"
  },
  {
    key: "winters_middle_school",
    image: "/WintersMiddleSchoolCarousel.png",
    title: "Winters Middle School",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    websiteLink: "https://wms.wintersjusd.org/en-US"
  },
];

export async function getPartnerships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/partnerships?_published=true`,
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
      key: item._id,
      image: item.main_image?.[0]?.src,
      title: item.title,
      description: item.description,
      websiteLink: item.website_link,
    }));
  } catch (e) {
    console.error(`Failed to fetch partnerships: ${e.message}`);
    return partnershipsFallbackData;
  }
}
