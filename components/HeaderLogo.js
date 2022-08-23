import React from 'react';
import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>Crowd{'<>'}Funding</Logo>
  )
}

const Logo = styled.h1`
    font-weight: bold;
    margin-left: 20px;
    font-family: 'poppins';
`;

export default HeaderLogo