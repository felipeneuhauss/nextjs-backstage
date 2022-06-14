export interface Image {
    newsUrl: string
    source: string
    imgUrl: string
}

export interface Article {
    articleTitle: string
    url: string
    source: string
    time: string
    snippet: string
}

export interface TrendingStory {
    image: Image
    shareUrl: string
    articles: Article[]
    idsForDedup: string[]
    id: string
    title: string
    entityNames: string[]
}

export interface StorySummaries {
    featuredStories: any[]
    trendingStories: TrendingStory[]
}

export interface Trend {
    featuredStoryIds: any[]
    trendingStoryIds: string[]
    storySummaries: StorySummaries
    date: string
    hideAllImages: boolean
}
