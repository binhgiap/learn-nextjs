import Content from '@/components/Content';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { getCategories } from '@/lib/categories';
import { getShares } from '@/lib/shares';
import { ListData, MenuType, ShareData } from '@/types';
import { Card } from 'antd';

const Share = ({ data, menus }: ListData<ShareData, MenuType[]>) => {
  return (
    <MainLayout>
      <Sidebar menus={menus} data={null} />
      <Content>
        <Card title={data.id}>{data.value}</Card>
      </Content>
    </MainLayout>
  );
};

export default Share;

export const getServerSideProps = async () => {
  const data = await getShares();
  const menus = await getCategories();
  return {
    props: { data, menus },
  };
};
