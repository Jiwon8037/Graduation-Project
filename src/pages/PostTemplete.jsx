import React from 'react';
import styled from 'styled-components';

const StyledPostPage=styled.div`
    margin: 2%;
    .post{
        display: flex;
        .placeNameList{
            max-width: 20%;
            //width:30%;
            margin: 2px;
            h3{
                margin: 0;
            }
        };
        .mapRander{
            width:70%;
        };
        .liked{
            width: 10%;
            margin-top:25px;
            display: block;
        };
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