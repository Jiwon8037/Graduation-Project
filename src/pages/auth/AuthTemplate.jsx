import React from 'react';
import styled from 'styled-components';

const StyledAuthTemplate=styled.div`
    //position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    //background: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;
const WhiteBox=styled.div`
    .loga-area{
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0,0,0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 6px;

    h3{
        margin: 0;
        color:black;
        margin-bottom: 1px;
    }
    .success{
        background: lightgreen;
        
    }
    .fail{
        background: red;
    }
`;

const AuthTemplate = ({children}) => {
    return (
        <StyledAuthTemplate>
            <WhiteBox>
            <div className='logo-area'>
                Viva La Trip
            </div>
            {children}
            </WhiteBox>
        </StyledAuthTemplate>
    );
};

export default AuthTemplate;