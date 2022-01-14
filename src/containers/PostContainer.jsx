import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/reducers/posts";
import PostList from "../components/PostList";

const PostContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // api 요청
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostContainer;
