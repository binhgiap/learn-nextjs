import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;
const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <StyledContainer>
      <Spin indicator={antIcon} />
    </StyledContainer>
  );
};

export default Loading;
