import React from "react";
import Posts from "../people/PostsCard/Posts";

const PostsPage = () => {
  return (
    <div className="center">
      <Posts  all={false} />
    </div>
  );
};

export default PostsPage;
