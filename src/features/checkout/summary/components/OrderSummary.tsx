import Header from "@/shared/ui/layout/Header/Header"
import Section from "@/shared/ui/layout/Section/Section"
import Item from "@/shared/ui/list/Item/Item"
import List from "@/shared/ui/list/List/List"
import Heading from "@/shared/ui/text/Heading/Heading"
import HeadingSubtitle from "@/shared/ui/text/HeadingSubtitle/HeadingSubtitle"

const OrderSummary =()=>{
    //Show checkout product and potential addon products
    return (
        <Section>
            <Header>
                <Heading>Order Summary</Heading>
                <HeadingSubtitle>Review your cart and supplemental products for checkout.</HeadingSubtitle>
            </Header>
            <List>
                <Item>My Item 1</Item>
                <Item>My Item 2</Item>
                <Item>My Item 3</Item>
            </List>
        </Section>
    )
}

export default OrderSummary