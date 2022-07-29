import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  selectIsLoading,
  selectHasError,
  loadPosts,
} from "./PostsSlice";
import { Link, useParams } from "react-router-dom";
import "./Posts.css";

function Posts() {
  const posts = useSelector(selectPosts);
  console.log(posts);
  const dispatch = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    dispatch(loadPosts(name));
    window.scrollTo(0, 0);
    //console.log(posts);
  }, [dispatch, name]);

  return (
    <div className="container">
      {posts.map((post, id) => {
        return (
          <div
            className="row rows mx-auto px-3 py-2 border-top rounded my-4"
            key={id}
          >
            <div className="col mt-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>

                  <div className="post-image-container mt-3 d-flex justify-content-center ">
                    {post.secure_media && post.secure_media.reddit_video && (
                      <video controls className="post-video">
                        <source
                          src={post.media.reddit_video.fallback_url}
                          type="video/webm"
                        />
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                    )}

                    <img src={post.url} alt="" className="post-image" />
                  </div>

                  <p className="card-text">
                    {post.secure_media && post.fallback_url}
                  </p>
                  <div>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>

                    <p>
                      <a
                        className="btn btn-primary"
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Link with href
                      </a>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Button with data-target
                      </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
