import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    padding: 1px 4px;
    color:black;
    outline: none;
    cursor: pointer;
    background: white;
    &:hover{
        color:white;
        background: black;
        border-color: white;
    }
`;
const Button = (props) => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;