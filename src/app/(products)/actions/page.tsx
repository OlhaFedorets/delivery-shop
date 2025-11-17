import products from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

export const metadata = {
    title: 'Акции магазина "Mypetshop"',
    description: 'Акционные товары магазина "Mypetshop"',
};

const AllActions = async () => {
    const actionProducts = products.filter((p) =>
        p.tags.includes("actions")
    );

    return (
        <GeneralListPage
            props={{
                data: actionProducts,
                pageTitle: "Акционные товары",
                basePath: "/actions",
            }}
        />
    );
};

export default AllActions;