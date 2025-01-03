import React from 'react'
import { WithChildren } from '@/shared/types/types'
import StyledMain from './StyledMain'

type MainProps = {

} & WithChildren

const Main = ({children}: MainProps) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

export default Main