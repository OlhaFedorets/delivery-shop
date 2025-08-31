import userDatabase from "@/data/userDatabase.json";
import productsDatabase from "@/data/productsDatabase.json";
import ProductsSection from "@/components/ProductsSection";

const AllUserPurchases = () => {

    const user = userDatabase[0]
    const priductsId = user.purchases.map((p: {id: number}) => p.id)
    const products = productsDatabase.filter((p) => priductsId.includes(p.id));
    if (!products) return undefined;
    products.map((product) => {

        const { discountPercent, ...rest } = product;
        void discountPercent;
        return rest;
    })

    return (
        <ProductsSection
            title="All purchases"
            viewAllButton={{text:"Go to main", href:"/"}}
            products={products}
        />
    );
};

export default AllUserPurchases;