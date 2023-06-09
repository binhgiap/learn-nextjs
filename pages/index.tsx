import Content from '@/components/Content';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { getCategories } from '@/lib/categories';
import { getHomes } from '@/lib/homes';
import { HomeData, ListData, MenuType } from '@/types';
import { Card } from 'antd';

export default function Home({ data, menus }: ListData<HomeData, MenuType[]>) {
  return (
    <MainLayout>
      <Sidebar menus={menus} data={null} />
      <Content>
        <Card title={data.id}>{data.value}</Card>
      </Content>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  const data = await getHomes();
  const menus = await getCategories();
  return {
    props: { data, menus },
  };
};
