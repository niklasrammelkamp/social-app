import styled, { css } from "styled-components";
import trashIcon from "./img/trash-solid.svg";
import angleIcon from "./img/angle-up-solid.svg";

const StyledButton = styled.button`
  background: none;
  border: none;
  display: flex;
  font-family: "Poppins";
  border-radius: 50px;
  align-items: center;

  ${({ show }) => {
    console.log(show);
  }}

  ${({ variant, show }) => {
    if (variant === "delete") {
      return css`
        position: absolute;
        right: 24px;
        top: 19px;
        color: var(--headline-color);
        background-color: var(--secondary-color);
        padding: 6px 12px;
        font-size: 12px;

        font-weight: 200;

        &::after {
          content: "";
          background-image: url(${trashIcon});
          background-size: 15px 15px;
          height: 15px;
          width: 15px;
          margin-left: 4px;
        }
      `;
    }

    if (variant === "comments") {
      return css`
        background-color: var(--primary-color);
        color: var(--article-color);
        padding: 8px 16px;
        font-size: 12px;

        &::before {
          content: "";
          background-image: url(${angleIcon});
          background-size: 15px 15px;
          height: 15px;
          width: 15px;
          margin-right: 4px;
          transform: rotate(${show ? "0" : "180deg"});
        }
      `;
    }
  }}
`;

export default StyledButton;
