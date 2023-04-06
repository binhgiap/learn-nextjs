import { DownOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';
import MenuIcon from '../assets/icons/align-left.svg';
import UserIcon from '../assets/icons/user.svg';

const StyledContainer = styled(Row)`
  width: 100%;
  height: 72px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
`;
const StyledRow = styled(Row)`
  width: 100%;
  height: 100%;
`;
const StyledWrapLeft = styled(Col)``;
const StyledH1 = styled.h1`
  margin: 0px 54px 0px 28px;
  font-family: 'Aleo';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  tex-align: 'center';

  color: #d11919;
`;
const StyledWrapCenter = styled(Col)``;
const StyledWrapRight = styled(Col)`
  width: 340px;
`;
const StyledWrapNotify = styled.div``;
const StyledMenuIcon = styled(MenuIcon)`
  width: 24px;
  height: 24px;
`;
const StyledUserIcon = styled(UserIcon)``;
const StyledH5 = styled.h5`
  color: #828282;
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledWrapLeft>
        <StyledRow align={'middle'}>
          <StyledH1>MyFinashark</StyledH1>
          <StyledMenuIcon />
        </StyledRow>
      </StyledWrapLeft>
      <StyledWrapCenter flex={4}></StyledWrapCenter>
      <StyledWrapRight>
        <StyledRow align={'middle'}>
          <StyledH5>Hướng dẫn sử dụng</StyledH5>
          <Divider type='vertical' />
          <StyledWrapNotify></StyledWrapNotify>
          <StyledUserIcon></StyledUserIcon>
          <h5>Username </h5>
          <DownOutlined />
        </StyledRow>
      </StyledWrapRight>
    </StyledContainer>
  );
};

export default Header;
