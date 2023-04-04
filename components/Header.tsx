import styled from 'styled-components';
import alignLeft from '../assets/icons/align-left.svg';
import { Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const StyledContainer = styled.div``;
const StyledWrapRight = styled.div``;
const StyledWrapNotify = styled.div``;
const StyledImage = styled.img``;

const Header = () => {
  return (
    <StyledContainer>
      <h1>MyFinashark</h1>
      <StyledImage src={alignLeft} alt='Menu' />
      <StyledWrapRight>
        <h5>Hướng dẫn sử dụng</h5>
        <Divider type='vertical' />
        <StyledWrapNotify></StyledWrapNotify>
        <StyledImage></StyledImage>
        <h5>Username </h5>
        <DownOutlined />
      </StyledWrapRight>
    </StyledContainer>
  );
};

export default Header;
