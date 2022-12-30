import StyledButton from "../Button/StyledButton";
import StyledNav from "./StyledNav";

export default function Nav({ onNavStatus, navStatus, home, create }) {
  return (
    <StyledNav navStatus={navStatus}>
      <StyledButton
        navActive={home}
        variant="nav"
        onClick={() => {
          onNavStatus("home");
        }}
      >
        Home
      </StyledButton>
      <StyledButton
        navActive={create}
        variant="nav"
        onClick={() => {
          onNavStatus("create");
        }}
      >
        Create
      </StyledButton>
      <div className="nav--background"></div>
    </StyledNav>
  );
}
