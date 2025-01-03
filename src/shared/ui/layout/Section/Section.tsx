import React from 'react'
import { WithChildren } from '@/shared/types/types'
import StyledSection from './StyledSection'

type SectionProps = {

} & WithChildren

const Section = ({children}: SectionProps) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section