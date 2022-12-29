import styled, { css } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ variant }) => {
    if (variant === "comment") {
      return css`
        background-color: var(--secondary-color);
        margin-bottom: 24px;
        border-radius: 12px;

        label {
          color: var(--headline-color);
        }
      `;
    }
  }}
`;

export default StyledForm;
