// Maps to the "partnerships" collection schema (see cms-schemas.md):
// main_image (MEDIA_LIST), title (SHORT_TEXT), website_link (SHORT_TEXT),
// description (LONG_TEXT).

import { cmsUrl } from "./cms";

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
    description: "Healing Grove Health Center is dedicated to promoting genuine healing through individualized, holistic healthcare that supports patients' physical, mental, and overall well-being. JCC has partnered with Healing Grove's Afghan Clinic since 2023 and its Concierge Clinic in Vacaville since 2025. Through these partnerships, JCC members volunteer at both locations to support daily clinic operations, assist with patient check-in, prepare examination rooms, help with pharmacy tasks, and contribute to patient care through additional responsibilities after training.",
    websiteLink: "https://healinggrove.org"
  },
  {
    key: "princeton_review",
    image: "/ThePrincetonReviewCarousel.png",
    title: "The Princeton Review",
    description: "The Princeton Review is an educational services organization that provides test preparation, admissions counseling, and academic support for students pursuing higher education. JCC has partnered with The Princeton Review since 2025 to provide members with discounted test preparation and admissions resources, guest presentations on pre-health pathways, and hands-on suturing workshops.",
    websiteLink: "https://www.princetonreview.com"
  },
  {
    key: "winters_middle_school",
    image: "/WintersMiddleSchoolCarousel.png",
    title: "Winters Middle School",
    description: "Winters Middle School is a local educational institution dedicated to supporting students' academic, social, and personal development. JCC has partnered with Winters Middle School since 2026, providing monthly health education presentations that emphasize holistic health, including physical, dental, mental, and overall well-being.",
    websiteLink: "https://wms.wintersjusd.org/en-US"
  },
];

export async function getPartnerships() {
  try {
    const res = await fetch(cmsUrl("partnerships"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      throw new Error("No partnerships published yet");
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

// Maps to the "partnerships_hero_images" collection (see cms-schemas.md) —
// the crossfade carousel shown in the Partnerships page's hero section.
export const partnershipsHeroImagesFallbackData = [
  '/third.jpg',
  '/history_img_1.jpg',
  '/history_img_3.jpg',
];

export async function getPartnershipsHeroImages() {
  try {
    const res = await fetch(cmsUrl("partnerships_hero_images"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      throw new Error("No partnerships hero images published yet");
    }
    return data.body.map((item) => item.image?.[0]?.src).filter(Boolean);
  } catch (e) {
    console.error(`Failed to fetch partnerships hero images: ${e.message}`);
    return partnershipsHeroImagesFallbackData;
  }
}
