import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  console.log(router.query);

  return (
    <>
      <h1>Module</h1>
    </>
  );
};

export default Comment;
