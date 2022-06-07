import React from 'react';
import styled from 'styled-components';

const StyledHeader=styled.div`
    //position: fixed;
    width: 100%;
    background: #216ba5;
    padding: 8px 20px;
    font-size: 16px;
    color: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
    .buttons{
        display: inline-flex;
        width: 70%;
        justify-content: right;
        line-height: 80px;
    }
    .logo{
        display: inline-flex;
        width: 30%;
        line-height: 80px;
        h1{
            margin: 0px;
            padding: 0px;
            line-height: 80px;
        }
    }
    .buttonDiv{
        width: 350px;
        text-align: right;
    }
    .loginIdDiv h4 {
        margin: 0px;
        padding: 0px;
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