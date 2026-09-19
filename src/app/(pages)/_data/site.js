import { cmsUrl } from "./cms";

export const LOGO_SRC = "/Dark_Blue_Logo.svg";

// Maps to the "site_settings" singleton (see cms-schemas.md). Only the link
// fields are actually fetched for now — logo stays the hardcoded LOGO_SRC
// above, since switching it to CMS-driven would mean making every page
// that imports LOGO_SRC async, which is out of scope right now.
export const siteSettingsFallbackData = {
  partnershipFormLink: "#",
  joinFormLink: "#",
  alumniFormLink: "#",
};

export async function getSiteSettings() {
  try {
    const res = await fetch(cmsUrl("site_settings"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    const item = data.body[0];
    return {
      partnershipFormLink: item.partnership_form_link || siteSettingsFallbackData.partnershipFormLink,
      joinFormLink: item.join_form_link || siteSettingsFallbackData.joinFormLink,
      alumniFormLink: item.alumni_form_link || siteSettingsFallbackData.alumniFormLink,
    };
  } catch (e) {
    console.error(`Failed to fetch site settings: ${e.message}`);
    return siteSettingsFallbackData;
  }
}
