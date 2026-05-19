import { useRouter } from "next/router";
import { committeesData } from "../../components/committees-general-cards/data/committeesData";
import CommitteesIntro from "@/components/committees/committees-intro";

export default function CommitteePage() {
  const router = useRouter();
  const { key } = router.query;

  // handles reload
  // waits for router to be ready so it can get contents from committeesData
  if (!key) return null;

  const committee = committeesData.find(c => c.key === key);

  if (!committee) {
    return <div style={{ padding: "4rem", textAlign: "center" }}>Committee not found</div>;
  }

  return (
    <CommitteesIntro
      image={committee.page_img}
      title={committee.name}
      description={committee.description}
    />
  );
}