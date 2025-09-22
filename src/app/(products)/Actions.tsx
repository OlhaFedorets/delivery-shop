import products from "@/data/productsDatabase.json";
import ProductsSection from "@/components/ProductsSection";
import {shuffleArray} from "@/utils/shuffleArray";

const Actions = () => {
    const actionProducts = shuffleArray(products.filter((p) =>
        p.tags.includes("actions")
    ));

    return (
        <ProductsSection
            title="Actions"
            viewAllButton={{text: "All actions", href: "actions"}}
            products={actionProducts}
            compact
        />
    );
};

export default Actions;