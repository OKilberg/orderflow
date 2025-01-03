import React from 'react'
import { WithChildren } from '@/shared/types/types'
import StyledItem from './StyledItem'

type ItemProps = {

} & WithChildren

const Item = ({children}:ItemProps) => {
  return (
    <StyledItem>
      {children}
    </StyledItem>
  )
}

export default Item