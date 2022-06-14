/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import { Box, Flex } from 'theme-ui';
import React from 'react';
import { useMainTrends } from 'contexts/MainTrendsProvider';
import slugify from 'slugify';
import dynamic from 'next/dynamic';
import ellipsis from '../shared/helpers/ellipsis';

const Quotations = dynamic(() => import('./Quotations'));

type TrendLinkProps = {
  trend: string;
}

const TrendLink: React.FC<TrendLinkProps> = ({ trend }: { trend: string }) => <li><a href={`#${slugify(trend.toLowerCase())}`}>{ellipsis(trend, 50)}</a></li>;

const Header: React.FC = () => {
  const { mainTrends } = useMainTrends();

  return (
    <Box sx={{
      bg: 'primary',
      width: '100%',
      px: [20, null, null, 0],
      py: [20, null, null, 80],
    }}
    >
      <Flex
        sx={{
          width: ['100%', null, null, 1024],
          margin: '0 auto',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Flex sx={{ flexDirection: ['column', null, null, 'row'], gap: 20 }}>
          <Flex sx={{
            color: 'white',
            width: ['100%', null, null, null, '50%'],
            flexDirection: 'column',
          }}
          >
            <h1 sx={{ fontSize: 38 }}>
              As notíciais
              dos principais veículos de comunicação pesquisados na net
            </h1>
            <h2 sx={{ fontSize: 18 }}>
              Aqui você encontra as melhores matérias dos termos mais
              pesquisados na net nas últimas 24 horas
            </h2>
          </Flex>
          <Box sx={{ width: ['100%', null, null, null, '50%'] }}>
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
          </Box>
        </Flex>
        <Quotations />
      </Flex>
    </Box>
  );
};

export default Header;
