import { ReactNode } from "react";

export type WithChildren = {
  children?: ReactNode;
};

export type Product = {
  productId: string;
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  paymentInterval: string;
  slug: string;
};

export type Addon = {
  id: string;
  productId: string;
  slug: string;
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  paymentInterval: string;
  productGroup: string;
};
