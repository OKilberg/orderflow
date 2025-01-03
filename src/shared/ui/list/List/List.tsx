import React from 'react'
import StyledList from './StyledList'
import { WithChildren } from '@/shared/types/types'

type ListProps = {

} & WithChildren

const List = ({children}:ListProps) => {
  return (
    <StyledList>
      {children}
    </StyledList>
  )
}

export default List