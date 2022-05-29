import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyle=css`
    border: solid 2px;
    margin: 1px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    padding: 4px;
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
const StyledButton=styled.button`
    ${buttonStyle}  
`;
const StyledLink=styled(Link)`
    ${buttonStyle}
`;
const Button = (props) => {
    return props.to ? (
        <StyledLink {...props}/>
    ):(
        <StyledButton {...props}/>
    )
};

export default Button;