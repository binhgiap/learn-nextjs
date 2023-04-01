import Content from '@/components/Content';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { getCategories } from '@/lib/categories';
import { getTrains } from '@/lib/trains';
import { ListData, MenuType, TrainData } from '@/types';
import { Card } from 'antd';

const Train = ({ data, menus }: ListData<TrainData, MenuType[]>) => {
  return (
    <MainLayout>
      <Sidebar menus={menus} data={null} />
      <Content>
        <Card title={data.id}>{data.value}</Card>
      </Content>
    </MainLayout>
  );
};

export default Train;

export const getServerSideProps = async () => {
  const data = await getTrains();
  const menus = await getCategories();
  return {
    props: { data, menus },
  };
};
