import styled from 'styled-components';

const StyledDiv=styled.div`
    border-bottom: solid 1px;
`;
const ListItemDiv = ({children}) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
};

export default ListItemDiv;