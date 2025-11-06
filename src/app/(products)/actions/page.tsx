import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Акции магазина "Mypetshop"',
    description: 'Акционные товары магазина "Mypetshop"',
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
                pageTitle: "Акционные товары",
                basePath: "/actions",
            }}
        />
    );
};

export default AllActions;