// Maps to the "history_years" + "history_year_photos" collections (see
// cms-schemas.md): year/timeline_image/description on history_years, and
// year/image on history_year_photos (a child collection correlated by year).
// Previously these were two separate frontend arrays (timelineData,
// additionalInfoData) keyed by the same year — merged here into one shape
// so there's a single source of truth per year.

export const historyYearsFallbackData = [
  {
    year: '2021',
    timelineImage: '/history_img_1.jpg',
    side: 'left',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    images: ['/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg'],
  },
  {
    year: '2022',
    timelineImage: '/history_img_2.jpg',
    side: 'right',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    images: ['/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg', '/history_img_5.jpg'],
  },
  {
    year: '2023',
    timelineImage: '/history_img_3.jpg',
    side: 'left',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    images: ['/history_img_3.jpg', '/history_img_4.jpg', '/history_img_5.jpg', '/history_img_1.jpg'],
  },
  {
    year: '2024',
    timelineImage: '/history_img_4.jpg',
    side: 'right',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    images: ['/history_img_4.jpg', '/history_img_5.jpg', '/history_img_1.jpg', '/history_img_2.jpg'],
  },
  {
    year: '2025',
    timelineImage: '/history_img_5.jpg',
    side: 'left',
    description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio.',
    images: ['/history_img_5.jpg', '/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg'],
  },
];

export async function getHistoryYears() {
  try {
    const [yearsRes, photosRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/history_years?_published=true`, {
        next: { tags: ["cms"] },
      }),
      fetch(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/history_year_photos?_published=true`, {
        next: { tags: ["cms"] },
      }),
    ]);
    const yearsData = await yearsRes.json();
    const photosData = await photosRes.json();
    if (!yearsData.ok || !yearsData.body) {
      throw new Error(yearsData.error);
    }
    if (yearsData.body.length === 0) {
      return [];
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
