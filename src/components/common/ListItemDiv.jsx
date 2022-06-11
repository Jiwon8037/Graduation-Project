import styled from "styled-components";

const StyledDiv = styled.div`
  border-bottom: solid 1px #ccc;
  padding: 8px 0px;
  font-size: 14px;
`;
const ListItemDiv = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default ListItemDiv;
