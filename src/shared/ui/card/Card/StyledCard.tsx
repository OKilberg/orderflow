import { styled } from "../../../../../styled-system/jsx";

const StyledCard = styled("article", {
  base: {
    width: "1/3",
    border: "1px solid",
    height: "200px",
  },
  variants: {
    variant: {
      product: {
        width: "auto",
        height: "auto",
        border: "1px solid #E2E8F0", // Gray.200
        borderRadius: "0.5rem", // lg
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // sm shadow
        transition: "box-shadow 0.2s",
        _hover: { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }, // md shadow
      },
    },
  },
});

export default StyledCard;
