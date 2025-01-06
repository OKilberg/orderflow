import { styled } from "../../../../../styled-system/jsx";

const StyledHeading = styled("h1", {
  base: {
    fontSize: "1.5rem",
  },
  variants: {
    size: {
      md: {
        fontSize: "1.25rem",
      },
    },
  },
});

export default StyledHeading;
