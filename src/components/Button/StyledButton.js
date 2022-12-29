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
  background-color: var(--primary-color);
  color: var(--article-color);
  padding: 8px 16px;
  font-size: 12px;
  justify-content: center;

  ${({ variant, show, special, navActive }) => {
    if (variant === "delete") {
      return css`
        position: ${special === "deleteComment" ? "relative" : "absolute"};
        ${special === "deleteComment" ? "" : "right: 24px; top: 19px;"}

        color: var(--headline-color);
        background-color: ${special === "deleteComment"
          ? "white"
          : "var(--secondary-color)"};
        padding: ${special === "deleteComment" ? "0" : "6px 12px"};

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

    if (variant === "showComments") {
      return css`
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

    if (variant === "submit") {
      return css`
        width: 100%;
      `;
    }

    if (variant === "nav") {
      return css`
        padding: 20px 40px;
        width: 50%;
        background: ${navActive ? "var(--primary-color)" : "none"};
        color: ${navActive ? "white" : "var(--headline-color)"};
      `;
    }
  }}
`;

export default StyledButton;
