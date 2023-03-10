import startPosts from "./db";
import Nav from "./components/Nav/Nav";
import Form from "./components/Forms/Form";
import { useState } from "react";
import PostingList from "./components/PostingList/PostingList";
import { uid } from "uid";
import Textarea from "./components/Forms/Textarea";
import StyledButton from "./components/Button/StyledButton";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [navStatus, setNavStatus] = useState("home");
  const [home, setHome] = useState(true);
  const [create, setCreate] = useState(false);
  const [postings, setPostings] = useLocalStorageState("postings", {
    defaultValue: startPosts,
  });

  // havigationBar function
  function handleNavStatus(status) {
    //set all showComment to false
    if (status === "home") {
      setHome(true);
      setCreate(false);
      setPostings(
        postings.map((post) => {
          post.showComments = false;
          return post;
        })
      );
    }
    if (status === "create") {
      setHome(false);
      setCreate(true);
    }
    setNavStatus(status);
  }

  // adding new posts
  function handleAddPost({ headline, text, hashtags }) {
    const date = new Date().toLocaleDateString("de-DE", {
      dateStyle: "medium",
    });
    setPostings([
      {
        id: uid(),
        date,
        headline,
        text,
        hashtags,
        showComments: false,
        comments: [],
      },
      ...postings,
    ]);
  }

  // delete post
  function handleDeletePost(id) {
    setPostings(
      postings.filter((post) => {
        return post.id !== id;
      })
    );
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
    setPostings(
      postings.map((post) => {
        if (post.id === id) {
          const filteredComments = post.comments.filter((comment) => {
            return comment.commentId !== commentId;
          });
          post.comments = filteredComments;
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
      <Nav
        onNavStatus={handleNavStatus}
        navStatus={navStatus}
        home={home}
        create={create}
      />
      <main>
        {navStatus === "home" && (
          <>
            <h1>Social App </h1>
            <PostingList
              postings={postings}
              onShowComments={handleShowComments}
              onDeletePost={handleDeletePost}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
            />
          </>
        )}
        {navStatus === "create" && (
          <>
            <h1>Crate a new Posting</h1>
            <Form onAddPost={handleAddPost} submitType={"posting"}>
              <Textarea id="headlineInput" name="headline" label={"headline"} />
              <Textarea id="postInput" name="text" label={"post"} />
              <Textarea id="hashtagInput" name="hashtags" label={"hashtags"} />

              <StyledButton variant="submit" type="submit">
                Submit
              </StyledButton>
            </Form>
          </>
        )}
      </main>
    </>
  );
}

export default App;
