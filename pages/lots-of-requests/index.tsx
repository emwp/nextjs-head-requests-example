import Link from "next/link";
import Data from "../../data";

const LotsOfRequests = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "8px" }}>
      {Data.map((name) => (
        <div style={{ padding: "8px" }} key={name}>
          <Link href={`/lots-of-requests/${name}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default LotsOfRequests;
