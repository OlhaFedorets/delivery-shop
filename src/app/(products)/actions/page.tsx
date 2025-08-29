import products from "@/data/productsDatabase.json";
import ProductsSection from "@/components/ProductsSection";
import {shuffleArray} from "@/utils/shuffleArray";

export const metadata = {
    title: 'Акции магазина "Северяночка"',
    description: 'Акционные товары магазина "Северяночка"',
};

const AllActions = () => {
    const actionProducts = shuffleArray(products.filter((p) =>
        p.categories.includes("actions")
    ));

    return (
        <ProductsSection
            title="All actions"
            viewAllButton={{text: "Go to main", href: "/"}}
            products={actionProducts}
        />
    );
};

export default AllActions;