/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import { Box, Flex } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import { useMainTrends } from 'contexts/MainTrendsProvider';
import slugify from 'slugify';
import axios from 'axios';
import { Quotation } from 'shared/types/Quotation';

const Header: React.FC = () => {
  const { mainTrends } = useMainTrends();
  const [quotation, setQuotation] = useState<Quotation>();

  useEffect(() => {
    const getQuotation = async () => {
      const { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
      console.log('quotationResult', data);
      setQuotation(data);
    };
    getQuotation();
  }, []);

  return (
    <Box sx={{ bg: '#b80f0d' }}>
      <Flex sx={{
        width: 1024,
        height: 512,
        margin: '0 auto',
        py: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Flex>
          <Flex sx={{
            color: 'white',
            width: '50%',
            flexDirection: 'column',
          }}
          >
            <h1 sx={{ fontSize: 38 }}>
              As principais notíciais
              <br />
              {' '}
              dos principais veículos de comunicação
            </h1>
            <h2 sx={{ fontSize: 18 }}>
              Aqui você encontra tudo relacionado aos termos
              mais pesquisados da net nas últimas 24 horas.
            </h2>
          </Flex>
          <Box sx={{ width: '50%' }}>
            <Flex sx={{
              border: '1px solid #E5E5E5',
              bg: 'white',
              flexDirection: 'column',
              borderRadius: 4,
              pb: 20,
            }}
            >
              <h2 sx={{ px: 24 }}>Principais termos pesquisados</h2>
              <ul sx={{
                px: 28,
                '> li ': {
                  listStyle: 'none',
                  borderBottom: '1px solid #E5E5E5',
                },
              }}
              >
                {mainTrends && mainTrends?.slice(0, 8).map((trend: string) => <li><a href={`#${slugify(trend)}`}>{trend}</a></li>)}
              </ul>
            </Flex>
          </Box>
        </Flex>
        {quotation && (
        <Flex sx={{
          width: '100%',
          justifyContent: 'flex-end',
          mt: 20,
          color: 'white',
          '> span': {
            ml: 20,
          },
        }}
        >
          <span>
            <strong>Dolar comercial</strong>
            {' '}
            R$
            {parseFloat(quotation?.USDBRL?.high).toFixed(2)}
          </span>
          <span>
            <strong>Euro</strong>
            {' '}
            R$
            {parseFloat(quotation?.EURBRL?.high).toFixed(2)}
          </span>
          <span>
            <strong>{quotation?.BTCBRL?.code}</strong>
            {' '}
            R$
            {parseFloat(quotation?.BTCBRL?.high).toFixed(2)}
          </span>
        </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
