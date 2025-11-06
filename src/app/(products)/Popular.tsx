import products from "@/data/productsDatabase.json";
import ProductsSection from "@/components/ProductsSection";
import {shuffleArray} from "@/utils/shuffleArray";

const Popular = () => {
    const popularProducts = shuffleArray(products.filter((p) =>
        p.rating.rate === 5 && p.id
    ));

    return (
        <ProductsSection
            title="Популярные товары"
            viewAllButton={{text: "Все популярные товары", href: "popular"}}
            products={popularProducts}
            compact
        />
    );
};

export default Popular;
