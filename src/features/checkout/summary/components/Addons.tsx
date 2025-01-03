import Card from "@/shared/ui/card/Card/Card"
import Header from "@/shared/ui/layout/Header/Header"
import Section from "@/shared/ui/layout/Section/Section"
import List from "@/shared/ui/list/List/List"
import Heading from "@/shared/ui/text/Heading/Heading"
import HeadingSubtitle from "@/shared/ui/text/HeadingSubtitle/HeadingSubtitle"

const Addons =()=>{
    //List of upgrades or addons for main checkout product
    return (
        <Section>
            <Header>
                <Heading>Addons</Heading>
                <HeadingSubtitle>Consider these additional products or upgrades for your order.</HeadingSubtitle>
            </Header>
            <List>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </List>
        </Section>
    )
}

export default Addons