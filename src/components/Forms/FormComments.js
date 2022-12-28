import StyledForm from "./StyledForm";
import StyledTextarea from "./StyledTextarea";
import React, { useState, useRef, useEffect } from "react";

export default function FormComments({ id, onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    onAddComment(id, event.target.elements.comment.value);

    event.target.reset();
  }

  const [val, setVal] = useState(" ");
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit} variant="addComment">
      <label htmlFor="comment">add comment</label>

      <StyledTextarea
        name="comment"
        id="comment"
        ref={textAreaRef}
        value={val}
        onChange={onChange}
        rows={1}
        placeholder="hallo"
      />

      <button type="submit">add comment</button>
    </StyledForm>
  );
}
