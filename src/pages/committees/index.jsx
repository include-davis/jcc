import { committeesData } from "./data";
import Link from "next/link";

export default function Committees() {
  return (
    <div>
      {committeesData.map((committee) => (
        <Link key={committee.key} href={`/committees/${committee.key}`}>
          <div>
            <img src={committee.image} alt={committee.title} style={{ width: "100px", height: "100px" }} />
            <p>{committee.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}