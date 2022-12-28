import { useEffect, useRef, useState } from "react";

export default function Form({
  onAddPost,
  submitType,
  onAddComment,
  id,
  onPressSubmit,
  children,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    onPressSubmit(" hallo");

    if (submitType === "comment") {
      onAddComment(id, event.target.elements.comment.value);
      event.target.reset();
    }

    if (submitType === "posting") {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      const hashtags = data.hashtags.split("#");

      const filteredHashtags = hashtags.filter((hashtag) => {
        return hashtag; //removing empty string elements
      });

      const finalHashtags = filteredHashtags.map((hashtag) => {
        const finalHashtag = "#" + hashtag; //adding #
        return finalHashtag;
      });

      onAddPost({
        headline: data.headline,
        text: data.text,
        hashtags: finalHashtags,
      });

      event.target.reset();
      event.target.elements.headline.focus();
    }
  }

  return <form onSubmit={handleSubmit}>{children}</form>;
}

// function handleSubmitPosting(event) {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   console.log(data);

//   const hashtags = data.hashtags.split("#");

//   const filteredHashtags = hashtags.filter((hashtag) => {
//     return hashtag; //removing empty string elements
//   });

//   const finalHashtags = filteredHashtags.map((hashtag) => {
//     const finalHashtag = "#" + hashtag; //adding #
//     return finalHashtag;
//   });

//   onAddPost({
//     headline: data.headline,
//     text: data.text,
//     hashtags: finalHashtags,
//   });

//   event.target.reset();
//   event.target.elements.headline.focus();
// }

// function handleSubmitComment(event) {
//   event.preventDefault();

//   onAddComment(id, event.target.elements.comment.value);

//   event.target.reset();
// }
