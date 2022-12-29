import { useState } from "react";
import StyledButton from "../Button/StyledButton";
import StyledNav from "./StyledNav";

export default function Nav({ onNavStatus, navStatus }) {
  const [home, setHome] = useState(true);
  const [create, setCreate] = useState(false);

  return (
    <StyledNav>
      <StyledButton
        navActive={home}
        variant="nav"
        onClick={() => {
          onNavStatus("home");
          setHome(true);
          setCreate(false);
        }}
      >
        Home
      </StyledButton>
      <StyledButton
        navActive={create}
        variant="nav"
        onClick={() => {
          onNavStatus("create");
          setCreate(true);
          setHome(false);
        }}
      >
        Create
      </StyledButton>
    </StyledNav>
  );
}
