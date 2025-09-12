import {ArticleCardProps} from "@/types/articles";

export interface ArticleSectionProps {
    title: string;
    viewAllButton?: {
        text: string;
        href: string;
    };
    articles: ArticleCardProps[];
    compact?: boolean;
}