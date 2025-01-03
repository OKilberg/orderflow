import React from 'react'
import StyledCard from './StyledCard'
import { WithChildren } from '@/shared/types/types'

type CardProps = {

} & WithChildren

const Card = ({children}:CardProps) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card