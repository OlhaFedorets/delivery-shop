import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Новинки магазина "Mypetshop"',
    description: 'Новые товары магазина "Mypetshop"',
};

const AllNew = async () => {
    const newProducts = products.filter((p) =>
        p.tags.includes("new")
    );

    return (
        <GeneralListPage
            props={{
                data: newProducts,
                pageTitle: "Новинки",
                basePath: "/new"
            }}
        />
    );
};

export default AllNew;