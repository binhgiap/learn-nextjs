import Content from '@/components/Content';
import Loading from '@/components/Loading';
import MainLayout from '@/components/MainLayout';
import Sidebar from '@/components/Sidebar';
import { getCategories, getCategoryById, getCategoryIds } from '@/lib/categories';
import { CategoryData, ListData, MenuType } from '@/types';
import { Card } from 'antd';
import { useRouter } from 'next/router';

const DetailCategory = ({ data, menus }: ListData<CategoryData, MenuType[]>) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Sidebar menus={menus} data={null} />
      <Content>
        <Card title={data.title}>{data.body}</Card>
      </Content>
    </MainLayout>
  );
};

export default DetailCategory;

export const getStaticPaths = async () => {
  const paths = await getCategoryIds();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const data = await getCategoryById(params.id);
  const menus = await getCategories();
  return {
    props: { data, menus },
    revalidate: 1
  };
};
