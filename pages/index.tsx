/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import googleTrends from 'google-trends-api';
import styles from '../../styles/Home.module.css';

export async function getServerSideProps() {
  const trends = await googleTrends.dailyTrends({
    trendDate: new Date(Date.now() - (24 * 60 * 60 * 1000)),
    geo: 'BR',
  });

  console.log('trends', trends);
  return {
    props: {
      trends,
    }, // will be passed to the page component as props
  };
}

type Props = {
  trends: any
}

const Home: NextPage<Props> = ({ trends }: Props) => {
  console.log('trends', trends);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pra hoje temos</title>
        <meta name="description" content="prahojetemos.com.br - Site com as notícias mais pesquisadas do Brasil nas últimas 24 horas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Flex sx={{ flexDirection: 'column', gap: '20px' }}> */}
        {/*  {!!trends?.map((trend, key) => <TrendCard key={key} trend={trend} />)} */}
        {/* </Flex> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
