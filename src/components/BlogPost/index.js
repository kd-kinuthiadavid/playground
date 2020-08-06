import React, { useState } from "react";
import PropTypes from "prop-types";

import { PostNumber, Post } from "./styles";

const BlogPost = ({ number, title, body }) => {
  const [state, setState] = useState({
    showBody: false,
  });

  const { showBody } = state;

  const expandPost = () =>
    setState((state) => ({ ...state, showBody: !showBody }));
  return (
    <Post
      className="bg-pink-200 relative text-dark rounded sm:mx-auto my-5 max-w-md shadow-md mx-2 p-5"
      onClick={expandPost}
    >
      <PostNumber>{number}</PostNumber>
      <div className="text-lg mb-3 capitalize font-semibold pt-5">{title}</div>
      {showBody && <div className="text-base">{body}</div>}
    </Post>
  );
};

BlogPost.defaultProps = {
  number: 1,
  title: "Lorem ipsum dolor sit amet",
  body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil.`,
};

BlogPost.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default BlogPost;
