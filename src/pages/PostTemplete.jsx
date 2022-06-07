import React from 'react';
import styled from 'styled-components';

const StyledPostPage=styled.div`
    margin: 2%;
    .post{
        display: flex;
        .placeNameList{
            max-width: 40%;
            width:40%;
            padding-right: 20px;
            margin-top: 20px;
            h3{
                margin: 0;
            }
        };
        .mapRander{
            width:60%;
            margin-top: 20px;
        };
    }
    .liked{
        width: 100%;
        margin-top:10px;
        display: block;
        text-align: right;
        span{
            margin-right: 10px;
        }
    };
    .titleDiv{
        position: relative;
        border-bottom: 1px solid #ccc;
    }
    .editBtnDiv{
        width: 10%;
        position: absolute;
        top: 5px;
        right: 0px;
        text-align: right;
    }
    .placeList{
        padding: 8px 0px;
        font-size: 14px;
    }
`;
const PostTemplete = ({children}) => {
    return (
        <StyledPostPage>
            {children}
        </StyledPostPage>
    );
};

export default PostTemplete;