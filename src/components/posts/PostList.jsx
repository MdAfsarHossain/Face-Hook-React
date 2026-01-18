import { PostCard } from "./PostCard";

export const PostList = ({ posts }) => {
  console.log("Post List");
  return !!posts && posts.map((post) => <PostCard key={post.id} post={post} />);
};
