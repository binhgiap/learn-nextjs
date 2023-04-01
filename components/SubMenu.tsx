import { MenuType } from '@/types';
import Link from 'next/link';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 10px 20px;
`;
const StyledIcon = styled.div``;
const StyledTitle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SubMenu = (props: MenuType) => {
  return (
    <StyledContainer>
      <StyledIcon />
      <StyledTitle href={props.href}>{props.title}</StyledTitle>
    </StyledContainer>
  );
};

export default SubMenu;
