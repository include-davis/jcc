import { useRouter } from "next/router";
import { committeesData } from "./data";
import CommitteesIntro from "@/components/committees/committees-intro";
import UpcomingEvents from "@/components/committees/committees-calender";

export default function CommitteePage() {
  const router = useRouter();
  const { key } = router.query;

  // handles reload
  // waits for router to be ready so it can get contents from committeesData
  if (!key) return null;

  const committee = committeesData.find(c => c.key === key);

  return (
    <>
    <CommitteesIntro
      image={committee.image}
      title={committee.title}
      description={committee.description}
    />
    <UpcomingEvents />
    </>
  );
}