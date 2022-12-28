import { useEffect, useRef, useState } from "react";
import StyledLabel from "./StyledLabel";
import StyledTextarea from "./StyledTextarea";

export default function Textarea({ id, name, label, pressSubmit }) {
  const [val, setVal] = useState(pressSubmit);
  const textAreaRef = useRef(pressSubmit);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextarea
        id={id}
        name={name}
        ref={textAreaRef}
        value={val}
        onChange={onChange}
        rows={1}
      >
        {val}
      </StyledTextarea>
    </>
  );
}
