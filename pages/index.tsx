/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import type { NextPage } from 'next';
import googleTrends from 'google-trends-api';
import { Flex } from 'theme-ui';
import slugify from 'slugify';

import TrendCard, { TrendingSearch } from 'components/TrendCard';
import { useEffect } from 'react';
import { useMainTrends } from '../contexts/MainTrendsProvider';

export async function getStaticProps() {
  const trends = await googleTrends.dailyTrends({
    trendDate: new Date(Date.now() - (24 * 60 * 60 * 1000)),
    geo: 'BR',
  });

  const trendList = JSON.parse(trends).default?.trendingSearchesDays[0]?.trendingSearches;

  return {
    props: {
      trends: trendList || [],
    }, // will be passed to the page component as props
    revalidate: 15 * 60,
  };
}

type Props = {
  trends: TrendingSearch[]
}

const Home: NextPage<Props> = ({ trends }: Props) => {
  const { setMainTrends } = useMainTrends();
  useEffect(() => {
    setMainTrends(trends?.map(
      (trend: { title: { query: any; }; }) => trend.title.query,
    ) || []);
  }, []);
  return (
    <>
      <Flex
        as="main"
        sx={{
          flexDirection: 'column', width: 1024, margin: '20px auto',
        }}
      >
        <Flex
          p={0}
          sx={{
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {trends?.map((trend) => (
            <TrendCard
              key={`trend-card-${slugify(trend.title.query)}`}
              trend={trend}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
