import React from "react";

import PostsCard from "./PostsCard";
import { useParams } from "react-router-dom";
import nameChanger from "../../../Utility/NameChanger";

const imageURL =
  "https://images.squarespace-cdn.com/content/v1/551cbdc5e4b0cd11d2597487/1533589774880-HYPZ5JL7P5AT9072MZXP/IMG_1070.jpg?format=2500w";

const DUMMY_POSTS = [
  {
    id: 1,
    title: "Looking Good",
    caption: "Call me salad the way I be dressing",
    image: imageURL,
    creator: "Jack Macy",
  },
  {
    id: 2,
    title: "Looking Sweet",
    caption: "YIPPEEEEE",
    image: imageURL,
    creator: "Nate",
  },
  {
    id: 3,
    title: "Looking Awesome",
    caption: "Call me a software engineer the way I be staying up too late",
    image: imageURL,
    creator: "Jack Macy",
  },
  {
    id: 4,
    title: "Looking Good",
    caption: "Call me DALI the way I be labbin'",
    image: imageURL,
    creator: "Jack Van Hooser",
  },
];

const Posts = (props) => {
  const userId = useParams().uid;
  const userPosts = DUMMY_POSTS.filter(
    (p) => nameChanger(p.creator) === userId
  );

  if (userPosts.length === 0 && props.all === false) {
    return <h2 className="center">User has no posts!</h2>;
  }

  return props.all ? (
    <div>
      {DUMMY_POSTS.map((post) => (
        <PostsCard
          key={post.id}
          creator={post.creator}
          image={post.image}
          title={post.title}
          caption={post.caption}
        />
      ))}
    </div>
  ) : (
    <div>
      {userPosts.map((post) => (
        <PostsCard
          key={post.id}
          creator={post.creator}
          image={post.image}
          title={post.title}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
