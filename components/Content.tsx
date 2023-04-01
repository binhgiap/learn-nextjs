import { Props } from '@/types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 25px;
`;

const Content = (props: Props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Content;
