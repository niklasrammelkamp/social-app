import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 20px;
  width: 85%;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(20px);
  /* background-color: antiquewhite; */
  justify-content: space-between;
  border-radius: 80px;
`;

export default StyledNav;
