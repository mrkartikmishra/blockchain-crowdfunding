import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdBrightnessHigh } from 'react-icons/md';
import { AppContext } from './Layout';
import Wallet from './Wallet';

const HeaderRight = () => {
    const toggleTheme = useContext(AppContext);
  return (
    <HeaderRightWrapper>
        <Wallet />
        <ToggleTheme>
            <MdBrightnessHigh onClick={toggleTheme} />
        </ToggleTheme>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ToggleTheme = styled.div`
    background-color: ${(props) => props.theme.bgDiv};
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 10px;
`

export default HeaderRight