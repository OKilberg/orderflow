import { styled } from "../../../styled-system/jsx";

const StyledRow = styled("div", {
  base: {
    display: "flex",
    paddingTop: "12px",
    gap: '8px'
  },
  variants: {
    direction: {
      reverse: {
        flexDirection: "row-reverse",
      },
    },
  },
});

export default StyledRow;
