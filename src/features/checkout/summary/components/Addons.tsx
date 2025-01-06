import AddAddonButton from "@/features/addons/AddAddonButton";
import { Addon } from "@/shared/types/types";
import Card from "@/shared/ui/card/Card/Card";
import CardButton from "@/shared/ui/card/Card/components/CardButton";
import CardDescription from "@/shared/ui/card/Card/components/CardDescription";
import CardImage from "@/shared/ui/card/Card/components/CardImage";
import CardPrice from "@/shared/ui/card/Card/components/CardPrice";
import CardTitle from "@/shared/ui/card/Card/components/CardTitle";
import Header from "@/shared/ui/layout/Header/Header";
import Section from "@/shared/ui/layout/Section/Section";
import List from "@/shared/ui/list/List/List";
import Heading from "@/shared/ui/text/Heading/Heading";
import HeadingSubtitle from "@/shared/ui/text/HeadingSubtitle/HeadingSubtitle";

const Addons = ({ addons }: { addons: Array<Addon> }) => {
  //List of upgrades or addons for main checkout product

  return (
    <Section>
      <Header>
        <Heading size="md">Addons</Heading>
        <HeadingSubtitle>
          Consider these additional products or upgrades for your order.
        </HeadingSubtitle>
      </Header>
      <List variant="row">
        {addons.map((addon) => (
          <Card key={addon.id} variant="product">
            <CardImage src={addon.imageSrc} />
            <CardTitle>{addon.title}</CardTitle>
            <CardDescription>{addon.description}</CardDescription>
            <CardPrice>
              ${addon.price} {addon.paymentInterval}
            </CardPrice>
            <AddAddonButton
              addonId={addon.id}
              productGroup={addon.productGroup}
            />
          </Card>
        ))}
      </List>
    </Section>
  );
};

export default Addons;
