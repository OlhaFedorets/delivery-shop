import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Популярное в магазине "Mypetshop"',
    description: 'Популярные товары магазина "Mypetshop"',
};

const AllPopular = async () => {
    const popular = products.filter((p) =>
        p.rating.rate === 5 && p.id
    );

    return (
        <GeneralListPage
            props={{
                data: popular,
                pageTitle: "Популярные товары",
                basePath: "/popular"
            }}
        />
    );
};

export default AllPopular;
