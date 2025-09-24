import products from "@/data/productsDatabase.json";
import {shuffleArray} from "@/utils/shuffleArray";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Акции магазина "Северяночка"',
    description: 'Акционные товары магазина "Северяночка"',
};

const AllActions = async ({
                              searchParams,
                          }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
    const actionProducts = products.filter((p) =>
        p.tags.includes("actions")
    );

    return (
        <GeneralListPage
            searchParams={searchParams}
            props={{
                data: actionProducts,
                pageTitle: "All actions",
                basePath: "/actions",
            }}
        />
        // <ProductsSection
        //     title="All actions"
        //     viewAllButton={{text: "Go to main", href: "/"}}
        //     products={actionProducts}
        // />
    );
};

export default AllActions;