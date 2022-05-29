import React from 'react';
import styled from 'styled-components';

const StyledInput=styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid;
    }
    &+&{
        margin-top:1rem;
    }
`;

const Input = (props) => {
    return (
        <StyledInput {...props}/>
    );
};

export default Input;