import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border-radius: 17px;
  font-family: "Poppins";
  padding: 6px 12px;
  font-size: 12px;
  resize: none;
  overflow-y: hidden;
  width: 100%;
  border: 0px solid var(--font-color);
  background-color: rgba(255, 255, 255, 0.8);
  font-weight: 200;

  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    /* background-color: var(--secondary-color); */
  }

  &::placeholder {
    color: green;
  }
`;

export default StyledTextarea;
