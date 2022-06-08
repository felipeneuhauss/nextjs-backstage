/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import { Box, Flex } from 'theme-ui';
import React from 'react';

const Footer: React.FC = () => (
  <Box sx={{ bg: '#b80f0d' }}>
    <Flex sx={{
      width: 1024,
      height: 130,
      margin: '0 auto',
      py: 20,
      alignItems: 'center',
    }}
    />
  </Box>
);

export default Footer;
