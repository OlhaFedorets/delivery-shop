import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Популярное в магазине "Mypetshop"',
    description: 'Популярные товары магазина "Mypetshop"',
};

const AllPopular = async ({
                                    searchParams,
                                }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {
    const popular = products.filter((p) =>
        p.rating.rate === 5 && p.id
    );

    return (
        <GeneralListPage
            searchParams={searchParams}
            props={{
                data: popular,
                pageTitle: "Популярные товары",
                basePath: "/popular"
            }}
        />
    );
};

export default AllPopular;
