import React from 'react';
import styled from 'styled-components';

const HeaderNav = () => {
  return (
    <HeaderNavWrapper>
        <HeaderNavLinks>
            Dashboards
        </HeaderNavLinks>
        <HeaderNavLinks>
            My Campaign
        </HeaderNavLinks>
        <HeaderNavLinks>
            Create Campaign
        </HeaderNavLinks>
    </HeaderNavWrapper>
  )
} 

const HeaderNavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.bgDiv};
    padding: 6px;
    height: 50%;
    border-radius: 10px;
`

const HeaderNavLinks = styled.div`
    font-family: 'roboto';
    margin: 5px;
    height: 100%;
    cursor: pointer;
    background-color: ${(props) => props.theme.bgSubDiv};
    display: flex;
    align-items: center;
    border-radius: 7px;
    padding: 0px 4px 0px 4px;
    text-transform: uppercase;
    font-weight: 600;
`

export default HeaderNav;