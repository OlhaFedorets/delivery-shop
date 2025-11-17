"use client"

import ProductsSection from "@/components/ProductsSection";
import { GeneralListPageProps } from "@/types/generalListPageProps";
import { CONFIG } from "../../../config/config";
import PaginationWrapper from "@/components/PaginationWrapper";
import ArticleSection from "../(articles)/ArticlesSection";
import { ProductCardProps } from "@/types/product";
import { ArticleCardProps } from "@/types/articles";
import {useSearchParams} from "next/navigation";

const GeneralListPageContent = ({
                             props,
                         }: {
    props: GeneralListPageProps;
}) => {
    const searchParams = useSearchParams();

    const page = searchParams?.get('page');
    const itemsPerPageParam = searchParams?.get('itemsPerPage');

    const defaultItemsPerPage =
        props.contentType === "category"
            ? CONFIG.ITEMS_PER_PAGE_CATEGORY
            : CONFIG.ITEMS_PER_PAGE;

    const itemsPerPage = itemsPerPageParam  || defaultItemsPerPage;

    const currentPage = Number(page) || 1;
    const perPage = Number(itemsPerPage);
    const startIdx = (currentPage - 1) * perPage;

    const items = props.data;
    const paginatedItems = items.slice(startIdx, startIdx + perPage);
    return (
        <>
            {!props.contentType || props.contentType === "category" ? (
                <ProductsSection
                    title={props.pageTitle}
                    products={paginatedItems as ProductCardProps[]}
                    applyIndexStyles={props.contentType !== "category"}
                    contentType={props.contentType}
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

export default GeneralListPageContent;