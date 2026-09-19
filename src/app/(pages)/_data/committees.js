// Maps to the "committees" + "committee_past_events" collections (see
// cms-schemas.md): key/name/icon/page_img/description on committees,
// committee_key/image/caption on committee_past_events (a child collection
// correlated by the committee's key, since a nested repeater/relation field
// type wasn't confirmed to exist in hearth).

import { cmsUrl } from "./cms";

export const committeesFallbackData = [
  {
    id: 1,
    key: "dental",
    name: "Dental Health Committee",
    icon: "/dental_health_logo_whitebg.svg",
    page_img: "/dental_health_logo.png",
    link: "/committees/dental",
    description: "The Dental Health Committee's mission is to promote oral health and dental hygiene among adolescents who utilize our clinic's services. They aim to raise awareness, organize informative workshops, provide dental care access, and create a welcoming environment for all students. Their goal is to enhance overall well-being by prioritizing dental and oral health.",
    pastEvents: [
      { image: "/history_img_1.jpg", caption: "Members leading a dental hygiene workshop for local students." },
      { image: "/history_img_2.jpg", caption: "Handing out oral care kits at a community health fair." },
      { image: "/second.jpg", caption: "Dental Health Committee tabling at the Fall Involvement Fair." },
      { image: "/third.jpg", caption: "Volunteers demonstrating proper brushing technique to kids." },
    ],
  },
  {
    id: 2,
    key: "mental",
    name: "Mental Health & Wellness Committee",
    icon: "/mental_health_logo_whitebg.svg",
    page_img: "/mental_health_and_wellness_logo.png",
    link: "/committees/mental",
    description: "The Mental Health Committee is dedicated to fostering a supportive and informed community by deconstructing the stigma surrounding mental health illnesses. Our mission includes prioritizing mental health education, reducing stigma, and enhancing awareness and resources for the well-being of youth and adolescents. The Mental Health Committee members plan events and workshops that are committed to prioritizing mental health and wellness in the community. The committee also does work to increase awareness of available resources, providing educational posts and encouraging open dialogue about mental health.",
    pastEvents: [
      { image: "/history_img_3.jpg", caption: "Members hosting a stress-relief workshop during finals week." },
      { image: "/history_img_4.jpg", caption: "Mental Health Committee at the community wellness fair." },
      { image: "/history_img_5.jpg", caption: "Volunteers sharing mental health resources on campus." },
      { image: "/fourth.jpg", caption: "Panel discussion on reducing stigma around mental illness." },
      { image: "/history_img_1.jpg", caption: "Committee members at a mindfulness and meditation session." },
    ],
  },
  {
    id: 3,
    key: "physical",
    name: "Physical & Integrated Health Committee",
    icon: "/physical_health_logo_whitebg.svg",
    page_img: "/physical_and_integrated_health_logo.png",
    link: "/committees/physical",
    description: "The Physical and Integrated Health Committee is dedicated to promoting holistic well-being for adolescents by addressing the interconnected aspects of health. As a committee we plan panels, workshops, and events that emphasize physical, mental, emotional and social health. Through education and collaboration, we aim to provide comprehensive healthcare solutions and approachable resources to the youth.",
    pastEvents: [
      { image: "/history_img_2.jpg", caption: "Committee members leading a group fitness session." },
      { image: "/history_img_3.jpg", caption: "Panel on integrated approaches to adolescent health." },
      { image: "/history_img_4.jpg", caption: "Volunteers at a community health and wellness expo." },
      { image: "/history_img_5.jpg", caption: "Members hosting a nutrition and movement workshop." },
      { image: "/second.jpg", caption: "Physical & Integrated Health Committee tabling event." },
      { image: "/third.jpg", caption: "Stretching and mobility demo for local students." },
    ],
  },
  {
    id: 4,
    key: "community",
    name: "Community Outreach Committee",
    icon: "/community_outreach_logo_whitebg.svg",
    page_img: "/community_outreach_logo.png",
    link: "/committees/community",
    description: "The Community Outreach Committee is committed to making a positive impact in the Davis/Sacramento community, enhancing patient education, and addressing public health needs. They create infographics and pamphlets to address health disparities and share information about available resources as well as lesson plans for workshops. Their goals include forging enduring connections with organizations, both locally and within UC Davis, and establishing a notable presence in the community.",
    pastEvents: [
      { image: "/history_img_1.jpg", caption: "Volunteers distributing health pamphlets in the community." },
      { image: "/history_img_2.jpg", caption: "Community Outreach Committee partnering with a local clinic." },
      { image: "/history_img_3.jpg", caption: "Members tabling at a Davis/Sacramento community event." },
      { image: "/history_img_4.jpg", caption: "Workshop lesson plan session with committee volunteers." },
      { image: "/history_img_5.jpg", caption: "Outreach booth at a UC Davis campus event." },
      { image: "/fourth.jpg", caption: "Committee members collaborating with a partner organization." },
      { image: "/JCC Tabling (10_17).jpg", caption: "Fall tabling event raising awareness for public health." },
    ],
  },
  {
    id: 5,
    key: "sexual",
    name: "Sexual & Reproductive Health Committee",
    icon: "/sexual_health_logo_whitebg.svg",
    page_img: "/sexual_and_reproductive_health_logo.png",
    link: "/committees/sexual",
    description: "The Sexual and Reproductive Health Committee is committed to promoting reproductive health, supporting the community, and fostering collaboration for a healthier future. They plan sexual health and hygiene drives and events to support underprivileged communities in Davis/Sacramento and collaborate with UC Davis organizations and clinics.ing mental health and wellness in the community. The committee also does work to increase awareness of available resources, providing educational posts and encouraging open dialogue about mental health.",
    pastEvents: [
      { image: "/history_img_5.jpg", caption: "Committee members hosting a sexual health awareness drive." },
      { image: "/history_img_1.jpg", caption: "Volunteers distributing hygiene kits in the community." },
      { image: "/history_img_2.jpg", caption: "Sexual & Reproductive Health Committee at a campus fair." },
      { image: "/history_img_3.jpg", caption: "Collaborative event with a UC Davis health organization." },
      { image: "/history_img_4.jpg", caption: "Workshop on reproductive health resources for adolescents." },
      { image: "/second.jpg", caption: "Members tabling to share educational materials." },
      { image: "/third.jpg", caption: "Community drive supporting underprivileged families." },
      { image: "/fourth.jpg", caption: "Committee volunteers at a Sacramento outreach event." },
    ],
  },
];

export async function getCommittees() {
  try {
    const res = await fetch(cmsUrl("committees"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    if (data.body.length === 0) {
      throw new Error("No committees published yet");
    }
    return data.body.map((item) => ({
      id: item._id,
      key: item.key,
      name: item.name,
      icon: item.icon?.[0]?.src,
      page_img: item.page_img?.[0]?.src,
      link: `/committees/${item.key}`,
      description: item.description,
      calendarId: item.calendar_id || null,
    }));
  } catch (e) {
    console.error(`Failed to fetch committees: ${e.message}`);
    return committeesFallbackData;
  }
}

// Returns a single committee with its past-event photos merged in.
export async function getCommittee(key) {
  const committees = await getCommittees();
  const committee = committees.find((c) => c.key === key);
  if (!committee) return null;

  try {
    const res = await fetch(cmsUrl("committee_past_events"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    const pastEvents = data.body
      .filter((p) => p.committee_key === key)
      .map((p) => ({ image: p.image?.[0]?.src, caption: p.caption }));
    if (pastEvents.length === 0) {
      throw new Error(`No past events published yet for ${key}`);
    }
    return { ...committee, pastEvents };
  } catch (e) {
    console.error(`Failed to fetch past events for ${key}: ${e.message}`);
    const fallback = committeesFallbackData.find((c) => c.key === key);
    return { ...committee, pastEvents: fallback?.pastEvents || [] };
  }
}

// Maps to the "committee_members" collection (see cms-schemas.md) — one
// collection for both leads and regular members, split here by is_lead.
const GENERIC_MEMBER_PHOTOS = [
  '/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg',
  '/history_img_5.jpg', '/second.jpg', '/third.jpg', '/fourth.jpg',
];

function buildFallbackMembers() {
  return {
    leads: [
      { name: "Lead Member 1", photo: GENERIC_MEMBER_PHOTOS[0], role: "President", email: "placeholder@jcc.org" },
      { name: "Lead Member 2", photo: GENERIC_MEMBER_PHOTOS[1], role: "Vice President", email: "placeholder@jcc.org" },
    ],
    members: Array.from({ length: 6 }, (_, i) => ({
      name: `Committee Member ${i + 1}`,
      photo: GENERIC_MEMBER_PHOTOS[(i + 2) % GENERIC_MEMBER_PHOTOS.length],
    })),
  };
}

export const committeeMembersFallbackData = {
  dental: buildFallbackMembers(),
  mental: buildFallbackMembers(),
  physical: buildFallbackMembers(),
  community: buildFallbackMembers(),
  sexual: buildFallbackMembers(),
};

// Returns { leads: [...], members: [...] } for a given committee key.
// leads is expected to be 1-3 people (rendered as a single row); members
// is the rest (rendered as a grid, name-only).
export async function getCommitteeMembers(key) {
  try {
    const res = await fetch(cmsUrl("committee_members"), { next: { tags: ["cms"] } });
    const data = await res.json();
    if (!data.ok || !data.body) {
      throw new Error(data.error);
    }
    const all = data.body
      .filter((m) => m.committee_key === key)
      .map((m) => ({
        name: m.name,
        photo: m.photo?.[0]?.src,
        role: m.role || undefined,
        email: m.email || undefined,
        isLead: m.is_lead === "true" || m.is_lead === true,
      }));
    if (all.length === 0) {
      throw new Error(`No members published yet for ${key}`);
    }
    return {
      leads: all.filter((m) => m.isLead).map(({ isLead, ...rest }) => rest),
      members: all.filter((m) => !m.isLead).map(({ isLead, ...rest }) => rest),
    };
  } catch (e) {
    console.error(`Failed to fetch committee members for ${key}: ${e.message}`);
    return committeeMembersFallbackData[key] || { leads: [], members: [] };
  }
}
