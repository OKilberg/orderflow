"use client";

import { Addon } from "@/shared/types/types";
import Item from "@/shared/ui/list/Item/Item";
import List from "@/shared/ui/list/List/List";
import Title from "@/shared/ui/text/Title/Title";
import { useSearchParams } from "next/navigation";
import React from "react";

const AddonsList = ({ addons }: { addons: Array<Addon> }) => {
  const searchParams = useSearchParams();

  const showAddons = addons.filter((addon) =>
    searchParams.get(`addon${addon.id}`)
  );

  return (
    <List>
      <Title>Addons</Title>
      {showAddons.map((addon) => (
        <Item key={addon.id}>{addon.title}</Item>
      ))}
    </List>
  );
};

export default AddonsList;
