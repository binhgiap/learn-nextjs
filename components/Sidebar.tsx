import { ListData, MenuType, Props } from '@/types';
import styled from 'styled-components';
import Menu from './Menu';
import SubMenu from './SubMenu';

const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  padding: 20px;
  border-right: 1px solid whitesmoke;
  background: white;
`;

const Sidebar = ({ menus }: ListData<null, MenuType[]>) => {
  return (
    <StyledContainer>
      <Menu title='Trang chủ' href='/' />
      <Menu title='Nhận định' href='/identify' />
      <Menu title='Chọn cổ phiếu' href='/share' />
      <Menu title='Danh mục' href='/category' />
      {menus.map((menu) => (
        <SubMenu title={`Danh mục ${menu.id}`} href={`/category/${menu.id}`} key={menu.id} />
      ))}
      <Menu title='Đào tạo' href='/train' />
    </StyledContainer>
  );
};

export default Sidebar;
