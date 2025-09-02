import {Article} from "@/types/articlesListPageProps";

export interface ArticleSectionProps {
    title: string;
    viewAllButton: {
        text: string;
        href: string;
    };
    articles: Article[];
    compact?: boolean;
}