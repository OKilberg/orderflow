import { styled } from "../../../styled-system/jsx";

const StyledButton = styled("button", {
  base: {
    backgroundColor: "#fff",
    border: "1px solid #000",
    color: "#000",
    padding: "0.5rem 1rem",
    width: "100px",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "blue.500",
        color: "white",
      },
      secondary: {
        backgroundColor: "gray",
        color: "black",
      },
    },
  },
});

export default StyledButton;
