import styled, { css } from "styled-components";

const StyledArticle = styled.article`
  background-color: var(--article-color);
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  .date {
    color: var(--font-color);
    font-weight: 200;
    font-size: 12px;
  }

  p {
    color: var(--font-color);
    font-weight: 200;
  }

  h2 {
    color: var(--headline-color);
    margin-top: 10px;
    font-size: 20px;
  }

  .noComments {
    text-align: center;
    color: var(--headline-color);
    font-size: 12px;
  }

  .comments {
    display: flex;
    background-color: var(--secondary-color);
    border-radius: 50px;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
    margin-top: 15px;
    z-index: 10;
    transition: 0.5s ease;

    ${({ showComments }) => {
      if (showComments) {
        return css`
          box-shadow: 0 0 16px var(--primary-color-shadow);
          margin-left: 0px;
          margin-right: 0px;
        `;
      } else {
        return css`
          box-shadow: 0 0 16px white;
          margin-left: 10px;
          margin-right: 10px;
        `;
      }
    }}
  }

  .comments p {
    padding-left: 16px;
    color: var(--headline-color);
  }

  .addComments {
    background-color: var(--secondary-color);
    outline: 24px solid var(--secondary-color);
    border-radius: 1px;
    z-index: 0;
    overflow: hidden;
    transition: 0.5s ease;
  }
`;

export default StyledArticle;
