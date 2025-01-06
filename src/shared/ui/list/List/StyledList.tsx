import { styled } from "../../../../../styled-system/jsx";

const StyledList = styled("ul", {
  base: {
    display: "flex",
    flexDir: "column",
    gap: "4px",
  },
  variants: {
    variant: {
      row: {
        flexDir: "row",
        gap: "1rem",
      },
    },
  },
});

export default StyledList;
