import React from 'react'
import OrderSummary from '@/features/checkout/summary/components/OrderSummary'
import Main from '@/shared/ui/layout/Main/Main'
import Addons from '@/features/checkout/summary/components/Addons'

const Summary = () => {
  return (
    <Main>
        <OrderSummary/>
        <Addons/>
    </Main>
  )
}

export default Summary