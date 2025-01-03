import Header from "@/shared/ui/layout/Header/Header"
import Main from "@/shared/ui/layout/Main/Main"
import Section from "@/shared/ui/layout/Section/Section"
import Item from "@/shared/ui/list/Item/Item"
import List from "@/shared/ui/list/List/List"
import Heading from "@/shared/ui/text/Heading/Heading"
import HeadingSubtitle from "@/shared/ui/text/HeadingSubtitle/HeadingSubtitle"
import OrderSummary from "./components/OrderSummary"

const Summary =()=>{
    return (
        <Main>
            <OrderSummary/>

        </Main>
    )
}

export default Summary;

const Addons =()=>{
    //List of upgrades or addons for main checkout product
    return (
        <section>

        </section>
    )
}

const Actions =()=>{
    // Back and Continue buttons
    return (
        <section>
            
        </section>
    )
}