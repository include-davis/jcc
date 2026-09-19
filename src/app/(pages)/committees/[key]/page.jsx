import CommitteesIntro from "@/app/(pages)/_components/committees/committees-intro";
import UpcomingEvents from "@/app/(pages)/_components/committees/committees-calender";
import PastEvents from "@/app/(pages)/_components/committees/committees-past-events";
import CommitteeMembers from "@/app/(pages)/_components/committees/CommitteeMembers";
import { getCommittee, getCommitteeMembers } from "@/app/(pages)/_data/committees";

export default async function CommitteePage({ params }) {
  const { key } = await params;
  const [committee, { leads, members }] = await Promise.all([
    getCommittee(key),
    getCommitteeMembers(key),
  ]);

  if (!committee) {
    return <div style={{ padding: "4rem", textAlign: "center" }}>Committee not found</div>;
  }

  return (
    <>
      <CommitteesIntro
        image={committee.page_img}
        title={committee.name}
        description={committee.description}
      />
      <UpcomingEvents calendarId={committee.calendarId} />
      <PastEvents images={committee.pastEvents} />
      <CommitteeMembers leads={leads} members={members} />
    </>
  );
}
