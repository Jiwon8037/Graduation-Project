import React from 'react';
import styled from 'styled-components';

const StyledHeader=styled.div`
    //position: fixed;
    width: 100%;
    background: black;
    padding: 16px;
    font-size: 24px;
    color: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
    .buttons{
        display: flex;
    }
    .logo{
        display: flex;
        justify-content: space-between;
    }
`;
const Spacer=styled.div`
    height: 20rem;
`;
const HeaderTemplate = ({children}) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
};

export default HeaderTemplate;