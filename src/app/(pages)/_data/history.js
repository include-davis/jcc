// Maps to the "history_years" + "history_year_photos" collections (see
// cms-schemas.md): year/timeline_image/description on history_years, and
// year/image on history_year_photos (a child collection correlated by year).
// Previously these were two separate frontend arrays (timelineData,
// additionalInfoData) keyed by the same year — merged here into one shape
// so there's a single source of truth per year.

import { cmsUrl } from "./cms";

export const historyYearsFallbackData = [
  {
    year: '2021',
    timelineImage: '/history_img_1.jpg',
    side: 'left',
    description: '2021 was the year JCC began.',
    images: ['/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg'],
  },
  {
    year: '2022',
    timelineImage: '/history_img_2.jpg',
    side: 'right',
    description: 'At the height of the COVID-19 pandemic, students from Aggie Public Health Ambassadors established the Juvenile Caduceus Clinic as a registered student organization at UC Davis, with the mission of increasing access to health education and resources for youth in the greater Sacramento and Yolo County areas. The organization began with forty undergraduate student volunteers, structured into subcommittees focused on mental health, dental health, physical and integrated health, and community outreach.',
    images: ['/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg', '/history_img_5.jpg'],
  },
  {
    year: '2023',
    timelineImage: '/history_img_3.jpg',
    side: 'left',
    description: 'JCC took a wider approach to reducing toxic stress within our communities, expanding support for families alongside youth and adolescents. This year marked the beginning of the Sexual and Reproductive Health Committee working closely with partner Planned Parenthood Mar Monte, and the launch of the ROOTS program with the UC Davis MIND Institute’s Redwood SEED Scholars Program.',
    images: ['/history_img_3.jpg', '/history_img_4.jpg', '/history_img_5.jpg', '/history_img_1.jpg'],
  },
  {
    year: '2024',
    timelineImage: '/history_img_4.jpg',
    side: 'right',
    description: 'A period of growth and consolidation for JCC, focused on expanding programming, strengthening community partnerships, and refining the organization’s mission of youth health education, prevention, and service. Committees played an increasingly important role in planning workshops, coordinating outreach events, and building relationships with community partners.',
    images: ['/history_img_4.jpg', '/history_img_5.jpg', '/history_img_1.jpg', '/history_img_2.jpg'],
  },
  {
    year: '2025',
    timelineImage: '/history_img_5.jpg',
    side: 'left',
    description: 'The year JCC began working with the Winters community to provide health education workshops and community events supporting preventative health education in underserved communities. Members led interactive workshops for Winters Middle School students on oral health, mental health, and sleep hygiene, and JCC established new collaborations with the City of Davis and the Davis Respite Center.',
    images: ['/history_img_5.jpg', '/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg'],
  },
];

export async function getHistoryYears() {
  try {
    const [yearsRes, photosRes] = await Promise.all([
      fetch(cmsUrl("history_years"), { next: { tags: ["cms"] } }),
      fetch(cmsUrl("history_year_photos"), { next: { tags: ["cms"] } }),
    ]);
    const yearsData = await yearsRes.json();
    const photosData = await photosRes.json();
    if (!yearsData.ok || !yearsData.body) {
      throw new Error(yearsData.error);
    }
    if (yearsData.body.length === 0) {
      // CMS reachable, but no years published yet — fall back instead of
      // showing an empty section.
      throw new Error("No history years published yet");
    }
    const photosByYear = (photosData.body || []).reduce((acc, p) => {
      const src = p.image?.[0]?.src;
      if (!src) return acc;
      (acc[p.year] ||= []).push(src);
      return acc;
    }, {});

    // side alternates left/right by order, same as the fallback data — not
    // a CMS-authored field.
    return yearsData.body
      .sort((a, b) => a.year.localeCompare(b.year))
      .map((item, index) => ({
        year: item.year,
        timelineImage: item.timeline_image?.[0]?.src,
        side: index % 2 === 0 ? 'left' : 'right',
        description: item.description,
        images: photosByYear[item.year] || [],
      }));
  } catch (e) {
    console.error(`Failed to fetch history years: ${e.message}`);
    return historyYearsFallbackData;
  }
}

// Maps to the "history_hero_images" collection (see cms-schemas.md) —
// the crossfade carousel shown in the History page's hero section.
export const historyHeroImagesFallbackData = [
  '/second.jpg',
  '/history_img_2.jpg',
  '/history_img_4.jpg',
];

export async function getHistoryHeroImages() {
  try {
    const res = await fetch(cmsUrl("history_hero_images"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      throw new Error("No history hero images published yet");
    }
    return data.body.map((item) => item.image?.[0]?.src).filter(Boolean);
  } catch (e) {
    console.error(`Failed to fetch history hero images: ${e.message}`);
    return historyHeroImagesFallbackData;
  }
}
