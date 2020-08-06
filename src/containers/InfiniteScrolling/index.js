import React, { useState, useEffect } from "react";
import axios from "axios";

import PostsList from "../../components/PostsList";
import Loader from "../../components/Loader";
import Btn from "../../components/Button";
import Alert from "../../components/Alert";
import enums from "../../enums";
import config from "../../config";

const InfiniteScrolling = () => {
  const [state, setState] = useState({
    showBtn: false,
    showLoader: false,
    posts: [],
    filteredPosts: [],
    showFiltered: false,
    urlLimit: 10,
    urlPage: 1,
    showAlert: {
      status: false,
      title: "",
      content: "",
    },
  });

  const {
    showBtn,
    showLoader,
    posts,
    urlLimit,
    urlPage,
    showAlert: { status, title, content },
    filteredPosts,
    showFiltered,
  } = state;

  // destructure enums
  const {
    messages: { alerts },
  } = enums;

  useEffect(() => {
    const fetchPosts = async (limit, page) => {
      setState((state) => ({ ...state, showLoader: true }));
      let url = `${config.apiURL}/posts?_limit=${limit}&_page=${page}`;
      const res = await axios.get(url);
      const data = res.data;
      // if there're no more posts from the user, notify them
      if (!data.length) {
        setState((state) => ({
          ...state,
          showAlert: {
            status: true,
            title: alerts.NO_POSTS_TITLE,
            content: alerts.NO_POSTS_CONTENT,
          },
        }));
      }
      console.log(`*** res **** ${JSON.stringify(data)}`);
      data.length &&
        setState((state) => ({
          ...state,
          posts: [...posts, ...res.data],
          showLoader: false,
        }));
    };

    fetchPosts(urlLimit, urlPage);
  }, [urlPage]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = document.documentElement;
      if (clientHeight + scrollTop >= scrollHeight - 5) {
        console.log(`*** end of page ***`);
        setState((state) => ({ ...state, showBtn: true }));
      }
    });

    return function cleanUp() {
      window.removeEventListener("scroll", () => {
        console.log(`*** clean up: remove eventlistener ***`);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMorePosts = () => {
    setState((state) => ({
      ...state,
      showBtn: false,
      showLoader: true,
      showFiltered: false,
    }));

    setTimeout(() => {
      setState((state) => ({
        ...state,
        urlPage: urlPage + 1,
        showLoader: false,
      }));
    }, 3000);
  };

  const filterPosts = (e) => {
    const searchTerm = e.target.value.toUpperCase();
    const filtered = posts.filter(
      (post) =>
        post.title.toUpperCase().indexOf(searchTerm) > -1 ||
        post.body.toUpperCase().indexOf(searchTerm) > -1
    );
    setState((state) => ({
      ...state,
      showFiltered: true,
      filteredPosts: filtered,
    }));
  };

  return (
    <div>
      <div className="sm:mx-auto max-w-md mt-5 mx-2">
        <input
          className="bg-pink-100 appearance-none border-2 border-pink-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500"
          id="inline-full-name"
          type="text"
          placeholder="Filter posts ..."
          onChange={filterPosts}
        />
      </div>
      {status && (
        <div className="fixed z-10">
          <Alert title={title} content={content} />
        </div>
      )}
      {showFiltered ? (
        <PostsList postsList={filteredPosts} />
      ) : (
        <PostsList postsList={posts} />
      )}
      {/* {posts.length ? <PostsList postsList={posts} /> : null} */}
      {showBtn && <Btn text="Load More" handleClick={loadMorePosts} />}
      {showLoader && <Loader />}
    </div>
  );
};

export default InfiniteScrolling;
