import styled from 'styled-components';

const StyledList=styled.div`
    margin: 2%;
    outline: none;
    padding: 0;
    h2{
    }
    .planList{
        text-align: center;
        table thead{
            background: #efefef;
        }
        table thead tr td{
            padding: 8px;
            font-weight: 700;
        }
        table tbody tr td{
            padding: 8px;
            font-weight: 300;
            border-bottom: 1px solid #ccc;
        }
        table tbody tr td:nth-child(2){
            width: 60%;
        }
    }
    .pagination{
        text-align: center;
        margin-top: 20px;
    }
    table{
        width: 100%;
    }
`;
const PlanListTemplete = ({children}) => {
    return (
        <StyledList>
            {children}
        </StyledList>
    );
};

export default PlanListTemplete;