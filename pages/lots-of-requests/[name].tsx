import { useRouter } from "next/dist/client/router";

const LotsOfRequests = () => {
  const {
    query: { name },
  } = useRouter();

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default LotsOfRequests;
