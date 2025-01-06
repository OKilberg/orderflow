import { styled } from "../../../../../styled-system/jsx";

const StyledGrid = styled("div", {
  base: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: {
      base: "1fr",
      sm: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
  },
});

export default StyledGrid;
