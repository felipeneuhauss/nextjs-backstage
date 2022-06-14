import React from 'react';
import { Flex } from 'theme-ui';
import slugify from 'slugify';
import ellipsis from 'shared/helpers/ellipsis';
import { useMainTrends } from 'contexts/MainTrendsProvider';

type TrendLinkProps = {
  trend: string;
}

const TrendLink: React.FC<TrendLinkProps> = ({ trend }: { trend: string }) => <li><a href={`#${slugify(trend.toLowerCase())}`}>{ellipsis(trend, 50)}</a></li>;

const MainTrends: React.FC = () => {
  const { mainTrends } = useMainTrends();
  return (
    <Flex sx={{
      border: '1px solid #E5E5E5',
      bg: 'white',
      flexDirection: 'column',
      borderRadius: 4,
      pb: 20,
      height: '360px',
      overflowY: 'auto',
    }}
    >
      <h2 sx={{ px: 24 }}>Principais termos pesquisados</h2>
      <ul sx={{
        px: 28,
        '> li ': {
          listStyle: 'none',
          borderBottom: '1px solid #E5E5E5',
          '> a:hover': {
            textDecoration: 'underline',
          },
        },
      }}
      >
        {mainTrends && mainTrends?.map((trend: string) => <TrendLink trend={trend} key={`trend-link-${slugify(trend)}`} />)}
      </ul>
    </Flex>
  );
};

export default MainTrends;
