/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import type { NextPage } from 'next';
import googleTrends from 'google-trends-api';
import { Flex } from 'theme-ui';
import slugify from 'slugify';

import TrendCard from 'components/TrendCard';
import { useEffect } from 'react';
import { useMainTrends } from 'contexts/MainTrendsProvider';
import { TrendingStory } from 'shared/types/Trends';

export async function getStaticProps() {
  const realTimeTrends = await googleTrends.realTimeTrends({
    // trendDate: new Date(Date.now() - (24 * 60 * 60 * 1000)),
    category: 'h',
    geo: 'BR',
  });
  const trendList = JSON.parse(realTimeTrends).storySummaries?.trendingStories;

  return {
    props: {
      trends: trendList || [],
    }, // will be passed to the page component as props
    revalidate: 15 * 60,
  };
}

type Props = {
    trends: TrendingStory[]
}

const Home: NextPage<Props> = ({ trends }: Props) => {
  const { setMainTrends } = useMainTrends();
  useEffect(() => {
    setMainTrends(trends?.map(
      (trend: { title: string }) => trend.title,
    ) || []);
  }, []);
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        maxWidth: 1024,
        margin: '20px auto',
        px: [20, null, null, 0],
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
            key={`trend-card-${slugify(trend.title)}`}
            trend={trend}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
