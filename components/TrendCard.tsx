/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import {
  Box, Flex, Grid, Image as ThemeUiImage, Link, Text,
} from 'theme-ui';
import React from 'react';
import slugify from 'slugify';

export interface Title {
  query: string
  exploreLink: string
}

export interface RelatedQuery {
  query: string
  exploreLink: string
}

export interface Image {
  newsUrl: string
  source: string
  imageUrl: string
}

export interface Article {
  title: string
  timeAgo: string
  source: string
  image?: Image
  url: string
  snippet: string
}

export interface TrendingSearch {
  title: Title
  formattedTraffic: string
  relatedQueries: RelatedQuery[]
  image: Image
  articles: Article[]
  shareUrl: string
}

export interface TrendingSearchesDay {
  date: string
  formattedDate: string
  trendingSearches: TrendingSearch[]
}

export interface Trend {
  trendingSearchesDays: TrendingSearchesDay[];
  endDateForNextRequest: string;
  rssFeedPageUrl: string;
}

export interface Trends {
  default: Trend
}

type TrendCardProps = {
  trend: TrendingSearch;
}

type ArticleProps = {
  article: Article;
}

const TrendArticle: React.FC<ArticleProps> = ({ article }: ArticleProps) => (
  <Link
    href={article.url}
    sx={{
      display: 'flex',
      flexDirection: ['column', 'row'],
      gap: 12,
    }}
  >
    {article.image?.imageUrl
        && (
        <Box sx={{
          width: ['100%', 100], height: 100, minWidth: 100, textAlign: ['center', 'right'],
        }}
        >
          <ThemeUiImage
            src={article.image?.imageUrl}
            sx={{ borderRadius: 4, border: '1px solid #F7F7FC' }}
            alt={article.title}
            width="100px"
            height="100px"
          />
        </Box>
        )}
    <Flex sx={{
      flexDirection: 'column',
      alignContent: 'start',
      justifyContent: 'start',
      '&:hover': {
        textDecoration: 'underline',
      },
    }}
    >
      <Text as="span" sx={{ fontWeight: 'bold', fontSize: 12, display: 'block' }} dangerouslySetInnerHTML={{ __html: article.title }} />
      <Text as="span" sx={{ color: 'grey', fontSize: 11, display: 'block' }} dangerouslySetInnerHTML={{ __html: article.snippet }} />
    </Flex>
  </Link>
);

const TrendCard: React.FC<TrendCardProps> = ({ trend }: TrendCardProps) => {
  if (trend.articles?.length < 4) {
    return null;
  }
  return (
    <Flex
      id={slugify(trend.title.query)}
      sx={{
        borderRadius: 4,
        border: '1px solid #E5E5E5',
        padding: 8,
        flexDirection: 'column',
      }}
    >
      <Text
        as="h2"
        sx={{
          fontSize: 18,
          fontWeight: 'bold',
          width: '100%',
          px: 12,
          py: 8,
        }}
      >
        {trend.title.query}
      </Text>
      <Grid gap={2} columns={[2, '1fr 1fr']} sx={{ p: 12 }}>
        {trend.articles?.slice(0, 4)
          .map((article) => (
            <TrendArticle
              article={article}
              key={slugify(article.title)}
            />
          ))}
      </Grid>
    </Flex>
  );
};

export default TrendCard;
