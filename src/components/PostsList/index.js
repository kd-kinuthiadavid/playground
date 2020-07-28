import React from "react";
import PropTypes from "prop-types";

import Post from "../BlogPost";

const PostsList = ({ postsList }) => {
  return (
    <div>
      {postsList.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          number={post.id}
        />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  postsList: PropTypes.array.isRequired,
};

export default PostsList;
