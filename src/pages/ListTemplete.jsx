import styled from 'styled-components';

const StyledList=styled.div`
    margin: 2%;
    outline: none;
    padding: 0;
    .placeList{
        text-align: center;
    }
    .pagination{
        text-align: center;
        margin-top: 20px;
    }
`;
const ListTemplete = ({children}) => {
    return (
        <StyledList>
            {children}
        </StyledList>
    );
};

export default ListTemplete;