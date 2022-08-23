import React from 'react'
import styled from 'styled-components';

import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderRight from './HeaderRight';

function Header() {
  return (
    <HeaderWrapper>
        <HeaderLogo />
        <HeaderNav />
        <HeaderRight />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default Header