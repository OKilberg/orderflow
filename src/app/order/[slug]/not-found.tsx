"use client";

import Main from "@/shared/ui/layout/Main/Main";
import Heading from "@/shared/ui/text/Heading/Heading";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const NotFound = () => {
  const params = useParams();

  return (
    <Main>
      <Heading>Could not find product {params.slug}</Heading>
      <Link href={'/products'}>Back to Products</Link>
    </Main>
  );
};

const NotFoundSlug = () => {};

export default NotFound;
