import {Article} from "@/types/articles";

export interface ArticleSectionProps {
    title: string;
    viewAllButton: {
        text: string;
        href: string;
    };
    articles: Article[];
    compact?: boolean;
}