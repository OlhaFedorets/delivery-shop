import products from "@/data/productsDatabase.json";
import ProductsSection from "@/components/ProductsSection";
import {shuffleArray} from "@/utils/shuffleArray";

export const metadata = {
    title: 'Новинки магазина "Северяночка"',
    description: 'Новые товары магазина "Северяночка"',
};

const AllNew = () => {
    const newProducts = shuffleArray(products.filter((p) =>
        p.categories.includes("new")
    ));

    return (
        <ProductsSection
            title="New"
            viewAllButton={{text: "Go to main", href: "/"}}
            products={newProducts}
        />
    );
};

export default AllNew;