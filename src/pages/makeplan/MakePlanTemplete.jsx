import React from 'react';
import styled from 'styled-components';

const StyledMakePlanPage=styled.div`
    .makePlanPage{
        margin: 2%;
        display: flex;
        .placeInfoList{
            width: 20%;
            max-width: 20%;
            margin: 2px;
        }
        .mapRander{
            width: 60%;
            margin: 2px 20px;
        }
        .makePlanData{
            width: 20%;
        }
    };
    .placeList{
        max-height: 500px;
        overflow-y: scroll;

        ul{
            list-style: none;
            margin: 0px;
            padding: 0px;

            li{
                padding: 8px 0px;
                font-size: 14px;
            }
        }
    }
    .placeListDiv{
        margin-top: 20px;
    }
    .searchInput{
        float: left;
        width: 70%;
        padding: 5px;
        border: 1px solid #000;
        border-right: none;
        line-height: 22px;
    }
    .searchBtn{
        float: left;
        width: 30%;
        border-left: none;
        border-radius: 0px;
        margin: 0px;
        background-color: #216ba5;
    }
    .clear{
        clear: both;
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