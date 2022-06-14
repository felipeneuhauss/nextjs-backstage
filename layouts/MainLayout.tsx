/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import MainTrendsProvider from 'contexts/MainTrendsProvider';
import { toTheme } from '@theme-ui/typography';
import grandViewTheme from 'typography-theme-grand-view';

const theme = toTheme(grandViewTheme);
const colors = {
  text: '#000',
  background: '#fff',
  primary: '#b80f0d',
  secondary: '#096E6E',
  accent: '#B85A0D',
};

const MainLayout = ({ children }: {children: React.ReactNode}) => (
  <ThemeProvider theme={{ ...theme, colors }}>
    <MainTrendsProvider>
      <Head>
        <title>Pra hoje temos</title>
        <meta
          name="description"
          content="As notícias relacionadas aos termos mais pesquisadas das últimas 24 horas na net."
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </MainTrendsProvider>
  </ThemeProvider>
);

export default MainLayout;
