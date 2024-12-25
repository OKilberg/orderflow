import { styled } from "../../../styled-system/jsx";

const StyledButton = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    padding: "0 15px",
    fontSize: "15px",
    lineHeight: "1",
    fontWeight: "500",
    height: "35px",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "blue.500",
        color: "white",
        "&:hover": {
          backgroundColor: "blue.600",
        },
      },
      secondary: {
        backgroundColor: "gray",
        color: "black",
      },
    },
  },
});

export default StyledButton;
