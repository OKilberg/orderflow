"use client";

import CardOrderButton from "@/shared/ui/card/Card/components/CardButton";
import {
  clearLocally,
  getLocally,
  storeLocally,
} from "@/shared/utility/localStorage";
import React, { useState, useEffect } from "react";

type AddAddonButtonProps = {
  addonId: string;
  productGroup: string;
};

const AddAddonButton = ({ addonId, productGroup }: AddAddonButtonProps) => {
  const [added, setAdded] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const isAdded = getLocally(addonId);

    if (isAdded) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, []);

  const onClick = () => {
    if (added) {
      clearLocally(addonId);
      setAdded(false);
      return;
    }

    storeLocally(addonId, { productGroup });
    setAdded(true);
  };

  const getLabel = () => {
    if (added && hover) {
      return "❌Remove";
    }

    if (added && !hover) {
      return "✔️Added";
    }

    if (!added) {
      return "➕Add";
    }
  };

  return (
    <CardOrderButton
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {getLabel()}
    </CardOrderButton>
  );
};

export default AddAddonButton;
