/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import { Box, Flex } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import { useMainTrends } from 'contexts/MainTrendsProvider';
import slugify from 'slugify';
import axios from 'axios';
import { Quotation } from 'shared/types/Quotation';
import currency from 'shared/helpers/currency';

type TrendLinkProps = {
  trend: string;
}

const TrendLink: React.FC<TrendLinkProps> = ({ trend }: { trend: string }) => <li><a href={`#${slugify(trend)}`}>{trend}</a></li>;

const Header: React.FC = () => {
  const { mainTrends } = useMainTrends();
  const [quotation, setQuotation] = useState<Quotation>();

  useEffect(() => {
    const getQuotation = async () => {
      const { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
      setQuotation(data);
    };
    getQuotation();
  }, []);

  return (
    <Box sx={{
      bg: 'primary',
      width: '100%',
      px: [20, null, null, null, 0],
      py: [20, null, null, null, 0],
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
              Aqui você encontra tudo relacionado aos termos
              mais pesquisados da net nas últimas 24 horas e onde encontrar a melhor matéria
            </h2>
          </Flex>
          <Box sx={{ width: ['100%', null, null, null, '50%'] }}>
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
                  '> a:hover': {
                    textDecoration: 'underline',
                  },
                },
              }}
              >
                {mainTrends && mainTrends?.slice(0, 8).map((trend: string) => <TrendLink trend={trend} key={`trend-link-${slugify(trend)}`} />)}
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
            {currency(Number(quotation?.USDBRL?.high))}
          </span>
          <span>
            <strong>Euro</strong>
            {' '}
            {currency(Number(quotation?.EURBRL?.high))}
          </span>
        </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
