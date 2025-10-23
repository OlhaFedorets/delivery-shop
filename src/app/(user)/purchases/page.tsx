import userDatabase from "@/data/userDatabase.json";
import productsDatabase from "@/data/productsDatabase.json";
import GeneralListPage from "@/app/(products)/GeneralListPage";

const AllUserPurchases = async ({
                                    searchParams,
                                }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
}) => {

    const user = userDatabase[0]
    const priductsId = user.purchases.map((p: { id: number }) => p.id)
    const products = productsDatabase.filter((p) => priductsId.includes(p.id));
    if (!products) return undefined;
    products.map((product) => {
        const {discountPercent, ...rest} = product;
        void discountPercent;
        return rest;
    })

    return (
        <GeneralListPage
            searchParams={searchParams}
            props={{
                data: products,
                pageTitle: "All purchases",
                basePath: "/purchases"
            }}
        />
    );
};

export default AllUserPurchases;