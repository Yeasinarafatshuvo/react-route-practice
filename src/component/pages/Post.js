import { useParams, useSearchParams } from "react-router-dom";
const Post = () => {
  let { category, id } = useParams();
  let [searchParams, setSearchparams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("price"));
  return (
    <div>
      <h1>This is Post Page - {(category, id)}</h1>
    </div>
  );
};

export default Post;
