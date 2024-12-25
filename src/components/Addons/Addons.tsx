import React from "react";
import Row from "../Row/Row";
import { styled } from "../../../styled-system/jsx";
import { fetchAddonsData } from "./query";
import Button from "../Button/Button";

type Props = {};

const Addons = async (props: Props) => {
  const addons = await fetchAddonsData();
  const firstAddon = addons[0];

  return (
    <Row>
      <StyledCard>
        {firstAddon.addonName}
        <Button/>
        </StyledCard>
      <StyledCard></StyledCard>
      <StyledCard></StyledCard>
    </Row>
  );
};

export default Addons;

const StyledCard = styled("div", {
  base: {
    width: "1/3",
    border: "1px solid",
    height: "200px",
  },
});
