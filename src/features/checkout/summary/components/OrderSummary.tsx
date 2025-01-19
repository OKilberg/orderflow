import AddonsList from "@/features/addons/AddonsList";
import { Addon, Product } from "@/shared/types/types";
import Header from "@/shared/ui/layout/Header/Header";
import Section from "@/shared/ui/layout/Section/Section";
import Item from "@/shared/ui/list/Item/Item";
import List from "@/shared/ui/list/List/List";
import Heading from "@/shared/ui/text/Heading/Heading";
import HeadingSubtitle from "@/shared/ui/text/HeadingSubtitle/HeadingSubtitle";
import Title from "@/shared/ui/text/Title/Title";

const OrderSummary = ({
  products,
  addons,
}: {
  products: Array<Product>;
  addons: Array<Addon>;
}) => {
  //Show checkout product and potential addon products

  return (
    <Section>
      <Header>
        <Heading>Order Summary</Heading>
        <HeadingSubtitle>
          Review your cart and supplemental products for checkout.
        </HeadingSubtitle>
      </Header>
      <List>
        <Title>Products</Title>
        {products.map((product) => (
          <Item key={product.productId}>{product.title}</Item>
        ))}
      </List>
      <AddonsList addons={addons} />
    </Section>
  );
};

export default OrderSummary;
