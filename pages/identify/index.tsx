import Content from '@/components/Content';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { getCategories } from '@/lib/categories';
import { getIdentifies } from '@/lib/identifies';
import { IdentifyData, ListData, MenuType } from '@/types';
import { Card } from 'antd';

const Identify = ({ data, menus }: ListData<IdentifyData, MenuType[]>) => {
  return (
    <MainLayout>
      <Sidebar menus={menus} data={null} />
      <Content>
        <Card title={data.id}>{data.value}</Card>
      </Content>
    </MainLayout>
  );
};

export default Identify;

export const getServerSideProps = async () => {
  const data = await getIdentifies();
  const menus = await getCategories();
  return {
    props: { data, menus },
  };
};
