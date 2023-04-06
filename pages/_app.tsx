// import 'antd/dist/reset.css';
import '@/styles/antd-theme.less';
import '@/styles/styles.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
