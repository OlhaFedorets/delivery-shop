import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Новинки магазина "Северяночка"',
    description: 'Новые товары магазина "Северяночка"',
};

const AllNew = async ({
                          searchParams,
                      }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
    const newProducts = products.filter((p) =>
        p.tags.includes("new")
    );

    return (
        <GeneralListPage
            searchParams={searchParams}
            props={{
                data: newProducts,
                pageTitle: "New",
                basePath: "/new"
            }}
        />
        // <ProductsSection
        //     title="New"
        //     viewAllButton={{text: "Go to main", href: "/"}}
        //     products={newProducts}
        // />
    );
};

export default AllNew;