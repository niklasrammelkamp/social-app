import startPosts from "./db";
import Nav from "./components/Nav/Nav";
import Form from "./components/Forms/Form";
import { useState } from "react";
import PostingList from "./components/PostingList/PostingList";
import { uid } from "uid";

function App() {
  const [navStatus, setNavStatus] = useState("home");
  const [postings, setPostings] = useState(startPosts);

  // havigationBar function
  function handleNavStatus(status) {
    setNavStatus(status);
  }

  // adding new posts
  function handleAddPost({ headline, text, hashtags }) {
    const date = new Date().toLocaleDateString("de-DE", {
      dateStyle: "medium",
    });
    setPostings([
      { id: uid(), date, headline, text, hashtags, showComments: false },
      ...postings,
    ]);
  }

  // adding comment
  function handleAddComment(id, comment) {
    setPostings(
      postings.map((post) => {
        if (post.id === id) {
          post.comments.push({ commentId: uid(), comment });
        }
        return post;
      })
    );
  }

  //delete comment
  function handleDeleteComment(id, commentId) {
    console.log(commentId);

    setPostings(
      postings.map((post) => {
        if (post.id === id) {
          post.comments.filter((comment) => {
            console.log(comment.commentId !== commentId);
            return comment.commentId !== commentId;
          });
        }
        return post;
      })
    );
  }

  // show comments
  function handleShowComments(id) {
    setPostings(
      postings.map((post) => {
        if (post.id === id) {
          post.showComments = !post.showComments;
        }
        return post;
      })
    );
  }

  return (
    <>
      <Nav onNavStatus={handleNavStatus} />
      <main>
        {navStatus === "home" && (
          <PostingList
            postings={postings}
            onShowComments={handleShowComments}
            onAddComment={handleAddComment}
            onDeleteComment={handleDeleteComment}
          />
        )}
        {navStatus === "create" && <Form onAddPost={handleAddPost} />}
      </main>
    </>
  );
}

export default App;
