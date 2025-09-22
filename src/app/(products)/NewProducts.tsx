import database from "@/data/productsDatabase.json";
import ProductsSection from "@/components/ProductsSection";
import {shuffleArray} from "@/utils/shuffleArray";

const NewProducts = () => {
    const newProducts = shuffleArray(database.filter((p) =>
        p.tags?.includes("new")
    ));

    return (
        <ProductsSection
            title="New"
            viewAllButton={{text: "All new", href: "new"}}
            products={newProducts}
            compact
        />
    );
};

export default NewProducts;