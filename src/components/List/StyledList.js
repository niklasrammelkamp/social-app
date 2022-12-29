import styled, { css } from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-top: 10px;
  gap: 6px;

  li p {
    color: var(--headline-color);
  }

  li {
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 12px;
  }

  ${({ variant }) => {
    if (variant === "hashtags") {
      return css`
        flex-wrap: wrap;
        li {
          background-color: var(--body-color);

          color: var(--font-color);
        }
      `;
    }
    if (variant === "comments") {
      return css`
        flex-direction: column;
        gap: 12px;

        li {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 12px 16px;
          font-size: 12px;
          border-radius: 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        li p {
          width: 90%;
          word-wrap: break-word;
        }
      `;
    }
  }}
`;

export default StyledList;
