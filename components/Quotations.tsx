import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex } from 'theme-ui';
import { Quotation } from 'shared/types/Quotation';
import currency from 'shared/helpers/currency';

const Quotations: React.FC = () => {
  const [quotation, setQuotation] = useState<Quotation>();
  useEffect(() => {
    const getQuotation = async () => {
      const { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL');
      setQuotation(data);
    };
    getQuotation();
  }, []);

  if (quotation) {
    return (
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
    );
  }

  return <></>;
};

export default Quotations;
