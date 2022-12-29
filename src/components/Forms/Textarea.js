import StyledLabel from "./StyledLabel";
import StyledTextarea from "./StyledTextarea";

export default function Textarea({ id, name, label, pressSubmit }) {
  function autoResize(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextarea id={id} name={name} onInput={autoResize} rows={1} />
    </>
  );
}
