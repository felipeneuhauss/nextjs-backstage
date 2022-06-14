/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */

import {
  Flex, Grid, Image, Link, Text,
} from 'theme-ui';
import React from 'react';
import slugify from 'slugify';
import { Article, TrendingStory } from 'shared/types/Trends';
import ellipsis from 'shared/helpers/ellipsis';

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
    <Flex sx={{
      flexDirection: 'column',
      alignContent: 'start',
      justifyContent: 'start',
      '&:hover': {
        textDecoration: 'underline',
      },
    }}
    >
      <Text as="span" sx={{ fontWeight: 'bold', fontSize: 12, display: 'block' }} dangerouslySetInnerHTML={{ __html: article.articleTitle }} />
      <Text as="span" sx={{ color: 'grey', fontSize: 11, display: 'block' }} dangerouslySetInnerHTML={{ __html: article.snippet }} />
      <Text
        as="span"
        sx={{
          color: 'accent', fontSize: 11, fontWeight: 'bold', display: 'block',
        }}
      >
        {article.source}
        {' - '}
        {article.time}
      </Text>
    </Flex>
  </Link>
);

type TrendCardProps = {
  trend: TrendingStory
}

const TrendCard: React.FC<TrendCardProps> = ({ trend }: TrendCardProps) => {
  if (trend.articles?.length < 4) {
    return null;
  }
  return (
    <Flex
      id={slugify(trend.title)}
      sx={{
        borderRadius: 4,
        border: '1px solid #E5E5E5',
        padding: 12,
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <Flex sx={{
        width: '100%',
        gap: 12,
        alignItems: 'center',
        px: 12,
        py: 12,
      }}
      >
        <Image
          src={trend.image.imgUrl}
          height="160px"
          width="160px"
          alt={trend.title}
          sx={{ minWidth: 160 }}
        />
        <Text
          as="h3"
          sx={{
            fontWeight: 'bold',
            color: 'secondary',
            pl: 12,
            fontSize: [18, null, 32],
            width: ['50%', null, '100%'],
            maxHeight: [160, null, '15ch'],
            py: [0, null, 20],
          }}
        >
          {ellipsis(trend.title, 120)}
        </Text>
      </Flex>
      <Grid gap={2} columns={[2, '1fr 1fr']} sx={{ p: 12 }}>
        {trend.articles?.slice(0, 4)
          .map((article: Article) => (
            <TrendArticle
              article={article}
              key={slugify(article.articleTitle)}
            />
          ))}
      </Grid>
    </Flex>
  );
};

export default TrendCard;
