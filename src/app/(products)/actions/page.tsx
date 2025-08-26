import ProductCard from "@/components/ProductCard";
import products from "@/data/productsDatabase.json";
import ViewAllButton from "@/components/ViewAllButton";

const AllActions = () => {
    const actionProducts = products.filter((p) =>
        p.categories.includes("actions")
    );

    return (
        <section>
            <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col mt-20">
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Все акции</h2>
                    <ViewAllButton btnText="Go to main" href="/"/>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                    {actionProducts.map((item) => (
                        <li
                            key={item.id}
                        >
                            <ProductCard {...item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AllActions;