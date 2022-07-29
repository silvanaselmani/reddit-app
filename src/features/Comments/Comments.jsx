import React from "react";
import { useSelector } from "react-redux";
import { selectComments, selectIsLoading } from "./CommentSlice";
import ReactMarkdown from "react-markdown";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { selectPosts } from "../Posts/PostsSlice";
import { formatTimestamp } from "../../helpers/helpers";
import { TbArrowBack } from "react-icons/tb";
import { useHistory } from "react-router-dom";
import "./Comments.css";

function Comments() {
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading);
  const posts = useSelector(selectPosts);
  const history = useHistory();

  let title = "";

  posts.map((post) => {
    if (
      comments[0] &&
      comments[0].parent_id &&
      comments[0].parent_id.includes(post.id)
    ) {
      title = post.title;
    }
  });

  return (
    <SkeletonTheme baseColor="" highlightColor="#00000026">
      <div className="container mt-4">
        <h4 className="card-title mt-2 m-auto">
          {!isLoading ? (
            <ReactMarkdown className="text-center">{title}</ReactMarkdown>
          ) : (
            <Skeleton height={30} className="" />
          )}
        </h4>
        {comments.length > 0 &&
          comments.map((comment, index) => {
            if (comment.author) {
              return (
                <div
                  className="row border rounded my-4 rows m-auto p-2"
                  key={index}
                >
                  <div className="col border rounded border-dark my-1 bg-white pt-0">
                    <p className="mt-3">
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <ReactMarkdown className="markdown">
                          {comment.body}
                        </ReactMarkdown>
                      )}
                    </p>
                    {!isLoading && (
                      <p className="card-text mt-2 d-inline mr-2">
                        <small className="text-muted">
                          {`Posted by `}{" "}
                          <span className="author" href="">
                            {comment.author}
                          </span>{" "}
                          {comment.created &&
                            `${formatTimestamp(comment.created)}`}
                        </small>
                      </p>
                    )}
                  </div>
                  {comment.replies &&
                    comment.replies.data.children.map(
                      (replies, indexReplies) => {
                        if (replies.data.body) {
                          return (
                            <div
                              className="row justify-content-end"
                              key={indexReplies}
                            >
                              <div className="col border rounded border-dark sub-comments bg-white mb-2">
                                {isLoading ? (
                                  <Skeleton />
                                ) : (
                                  <p className="mt-3">
                                    <ReactMarkdown className="markdown">
                                      {replies.data.body}
                                    </ReactMarkdown>
                                  </p>
                                )}

                                {!isLoading && (
                                  <p className="card-text  d-inline">
                                    <small className="text-muted">
                                      {`Posted by `}{" "}
                                      <span className="author" href="">
                                        {replies.data.author}
                                      </span>{" "}
                                      {replies.data.created &&
                                        `${formatTimestamp(
                                          replies.data.created
                                        )}`}
                                    </small>
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        }
                      }
                    )}
                </div>
              );
            }
          })}
        <div className="col d-flex justify-content-end my-4">
          <button
            type="button "
            className="btn btn-outline-primary btn-orange mr-0"
            onClick={() => history.goBack()}
          >
            <TbArrowBack /> Back
          </button>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Comments;
