import { Props } from '@/types';
import styled from 'styled-components';
import Content from './Content';
import Sidebar from './Sidebar';
import Head from 'next/head';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: whitesmoke;
`;

const MainLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Learn Nextjs | Giáp Nguyễn</title>
        <meta name='description' content='Learn NextJS + Typescript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledContainer>{props.children}</StyledContainer>
    </>
  );
};

export default MainLayout;
