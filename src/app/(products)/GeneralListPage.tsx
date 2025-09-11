import ProductsSection from "@/components/ProductsSection";
import { GeneralListPageProps } from "@/types/generalListPageProps";
import { CONFIG } from "../../../config/config";
import PaginationWrapper from "@/components/PaginationWrapper";
import ArticleSection from "../(articles)/ArticlesSection";
import { ProductCardProps } from "@/types/product";
import { ArticleCardProps } from "@/types/articles";

const GeneralListPage = async ({
                                   searchParams,
                                   props,
                               }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
    props: GeneralListPageProps;
}) => {
    const params = await searchParams;
    const page = params?.page;
    const itemsPerPage = params?.itemsPerPage || CONFIG.ITEMS_PER_PAGE;

    const currentPage = Number(page) || 1;
    const perPage = Number(itemsPerPage);
    const startIdx = (currentPage - 1) * perPage;

        const items = props.data;
        const paginatedItems = items.slice(startIdx, startIdx + perPage);
        return (
            <>
                {!props.contentType ? (
                    <ProductsSection
                        title={props.pageTitle}
                        products={paginatedItems as ProductCardProps[]}
                    />
                ) : (
                    <ArticleSection
                        title={props.pageTitle}
                        articles={paginatedItems as ArticleCardProps[]}
                    />
                )}

                {items.length > perPage && (
                    <PaginationWrapper
                        totalItems={items.length}
                        currentPage={currentPage}
                        basePath={props.basePath}
                        contentType={props.contentType}
                    />
                )}
            </>
        );
    };

export default GeneralListPage;
