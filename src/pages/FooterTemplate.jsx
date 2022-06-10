import React from 'react';
import styled from 'styled-components';

const StyledFooter=styled.div`
    background-color: white;
    border-top: 2px solid #ccc;
    //border-bottom: 1px solid #ccc;
    .footerDiv{
        margin: 1% 2%;
        display: inline-flex;
    }
    h5{
        margin: 10px;
        margin-bottom: 0;
    }
    .sku{//1000,230
        width: 250px;
        height: 48px;
    }
    .git{
        margin-top:10px;
    }
`
const FooterTemplate = ({children}) => {
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    );
};

export default FooterTemplate;