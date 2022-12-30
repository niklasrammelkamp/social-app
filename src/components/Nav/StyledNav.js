import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 20px;
  width: 85%;
  height: 60px;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);

  backdrop-filter: blur(20px) brightness(95%);

  /* background-color: antiquewhite; */
  justify-content: space-around;
  border-radius: 80px;

  .nav--background {
    transition: 0.5s ease;
    background-color: var(--primary-color);
    width: 50%;
    position: absolute;
    height: 60px;
    border-radius: 80px;
    z-index: 0;

    ${({ navStatus }) => {
      if (navStatus === "home") {
        return css`
          left: 0;
        `;
      }
      if (navStatus === "create") {
        return css`
          left: 50%;
        `;
      }
    }}
  }
`;

export default StyledNav;
