import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border-radius: 17px;
  font-family: "Poppins";
  padding: 6px 12px;
  font-size: 14px;
  resize: none;
  overflow-y: hidden;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: green;
  }
`;

export default StyledTextarea;
