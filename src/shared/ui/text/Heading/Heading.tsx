import React from 'react'
import StyledHeading from './StyledHeading'
import { WithChildren } from '@/shared/types/types'

type HeadingProps = {

} & WithChildren

const Heading = ({children}:HeadingProps) => {
  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  )
}

export default Heading