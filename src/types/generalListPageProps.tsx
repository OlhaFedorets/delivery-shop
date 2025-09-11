import { ArticleCardProps } from "./articles";
import { ProductCardProps } from "./product";

type ContentItem = ProductCardProps | ArticleCardProps;

export interface GeneralListPageProps {
    data:ContentItem[];
    pageTitle: string;
    basePath: string;
    contentType?: "articles";
}