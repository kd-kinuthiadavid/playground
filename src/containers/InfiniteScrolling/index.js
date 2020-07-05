import React, { useState } from "react";

import Post from "../../components/BlogPost";
import Loader from "../../components/Loader";

const InfiniteScrolling = () => {
  const [state, setState] = useState({
    showLoader: false,
  });

  const { showLoader } = state;

  return (
    <div>
      <Post />
      <Post />
      <Post />
      {showLoader && <Loader />}
    </div>
  );
};

export default InfiniteScrolling;
