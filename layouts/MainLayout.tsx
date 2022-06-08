/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';

const MainLayout: React.FC = ({ children }: any) => (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Pra hoje temos</title>
          <meta
            name="description"
            content="prahojetemos.com.br - As notícias mais pesquisadas das últimas 24 horas."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
);

export default MainLayout;
