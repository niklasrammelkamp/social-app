import StyledNav from "./StyledNav";

export default function Nav({ onNavStatus }) {
  return (
    <StyledNav>
      <button
        onClick={() => {
          onNavStatus("home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          onNavStatus("create");
        }}
      >
        Create
      </button>
    </StyledNav>
  );
}
