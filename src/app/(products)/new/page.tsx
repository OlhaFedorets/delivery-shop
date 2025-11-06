import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Новинки магазина "Mypetshop"',
    description: 'Новые товары магазина "Mypetshop"',
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
                pageTitle: "Новинки",
                basePath: "/new"
            }}
        />
    );
};

export default AllNew;