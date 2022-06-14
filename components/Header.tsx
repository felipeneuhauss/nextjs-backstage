/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import { Box, Flex } from 'theme-ui';
import React from 'react';
import dynamic from 'next/dynamic';

const Quotations = dynamic(() => import('./Quotations'));
const MainTrends = dynamic(() => import('./MainTrends'));

const Header: React.FC = () => (
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
          <MainTrends />
        </Box>
      </Flex>
      <Quotations />
    </Flex>
  </Box>
);

export default Header;
