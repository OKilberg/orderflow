import React from 'react'
import StyledHeader from './StyledHeader'
import { WithChildren } from '@/shared/types/types'

type HeaderProps = {

} & WithChildren

const Header = ({children}:HeaderProps) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header