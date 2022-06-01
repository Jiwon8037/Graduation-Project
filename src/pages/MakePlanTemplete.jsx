import React from 'react';
import styled from 'styled-components';

const StyledMakePlanPage=styled.div`
    .makePlanPage{
        margin: 2%;
        display: flex;
        .placeInfoList{
            max-width: 20%;
            margin: 2px;
        }
        .mapRander{
            width: 60%;
            margin: 2px;
        }
        .makePlanData{
            width: 20%;
            margin: 2px;
        }
    };
    .placeList{
        max-height: 500px;
        overflow-y: scroll;
    }
`;
const MakePlanTemplete = ({children}) => {
    return (
        <StyledMakePlanPage>
            {children}
        </StyledMakePlanPage>
    );
};

export default MakePlanTemplete;