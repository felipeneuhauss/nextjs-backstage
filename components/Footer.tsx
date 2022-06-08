/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import { Box, Flex } from 'theme-ui';
import React from 'react';

const Header: React.FC = () => (
  <Box sx={{ bg: '#b80f0d' }}>
    <Flex sx={{
      width: 1024,
      height: 512,
      margin: '0 auto',
      py: 20,
      alignItems: 'center',
    }}
    >
      <Box sx={{ color: 'white', width: '50%' }}>
        <h1 sx={{ fontSize: 38 }}>
          As principais notíciais
          <br />
          {' '}
          dos principais veículos de comunicação
        </h1>
        <h2 sx={{ fontSize: 18 }}>
          Aqui você encontra tudo relacionado aos termos mais pesquisados nas últimas 24 horas.
        </h2>
      </Box>
      <Box sx={{ width: '50%' }} />
    </Flex>
  </Box>
);

export default Header;
