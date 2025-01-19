"use client";

import CardOrderButton from "@/shared/ui/card/Card/components/CardButton";
import {
  clearLocally,
  getLocally,
  storeLocally,
} from "@/shared/utility/localStorage";
import { useQueryState } from "nuqs";
import React, { useState, useEffect } from "react";

type AddAddonButtonProps = {
  addonId: string;
  productGroup: string;
};

const AddAddonButton = ({ addonId, productGroup }: AddAddonButtonProps) => {
  const addonString = `addon${addonId}`;
  const [addon, setAddon] = useQueryState(addonString);
  const [hover, setHover] = useState(false);

  const onClick = () => {
    if (addon) {
      setAddon(null);
      return;
    }

    setAddon("true");
  };

  const getLabel = () => {
    if (addon && hover) {
      return "❌Remove";
    }

    if (addon && !hover) {
      return "✔️Added";
    }

    if (!addon) {
      return "➕Add";
    }
  };

  return (
    <CardOrderButton
      variant={addon ? "added" : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {getLabel()}
    </CardOrderButton>
  );
};

export default AddAddonButton;
