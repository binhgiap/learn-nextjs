import Content from '@/components/Content';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { getCategories } from '@/lib/categories';
import { CategoryData, ListData, MenuType } from '@/types';
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-bottom: 15px;
`;

const Category = ({ data, menus }: ListData<CategoryData[], MenuType[]>) => {
  return (
    <MainLayout>
      <Sidebar menus={menus} data={null} />
      <Content>
        {data.map((item) => (
          <StyledCard key={item.id} title={item.title}>
            {item.body}
          </StyledCard>
        ))}
      </Content>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const data = await getCategories(10);
  const menus = await getCategories();
  return {
    props: { data, menus },
  };
};

export default Category;
