import React from 'react'
import StyledHeadingSubtitle from './StyledHeadingSubtitle'
import { WithChildren } from '@/shared/types/types'

type HeadingSubtitleProps = {

} & WithChildren

const HeadingSubtitle = ({children}:HeadingSubtitleProps) => {
  return (
    <StyledHeadingSubtitle>
      {children}
    </StyledHeadingSubtitle>
  )
}

export default HeadingSubtitle