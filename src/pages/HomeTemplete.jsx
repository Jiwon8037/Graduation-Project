import React from 'react';
import styled from 'styled-components';

const StyledHome=styled.div`
    .title{
        text-align:center;
        height : 80px;
        color: #216ba5;
    };
    .subtitle{
        text-align:center;
        height:0px;
        font-size:20px;
        color: #ef5350;
    };
    .text{
        white-space: pre-line;
        margin-top: -2.0%;
        color : #216ba5;
        font-size: larger;
        font-weight: bold;
        line-height: 200%;
        text-align : center;
    };
    .homeBtn{
        border:3px solid #216ba5;
        background-color:rgba(0,0,0,0);
        color : #216ba5;
        padding :5px;
        height : 200px;
        width : 200px;
        margin : 80px 40px 40px 40px;
        display : inline-block;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
    };
    .homeBtn:hover{
        background-color: #216ba5;
        color:white;
    };
    .homeBtn:focus{
        background-color: #216ba5;
        color:white;
        font-weight: bold;
    };
    .button-region{
        width : 100%;
        text-align: center;
    };
`;

const HomeTemplete = ({children}) => {
    return (
        <StyledHome>
            {children}
        </StyledHome>
    );
};

export default HomeTemplete;