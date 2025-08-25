import ProductCard from "./ProductCard";
import products from "@/data/productsDatabase.json";
import ViewAllButton from "@/components/ViewAllButton";

const Actions = () => {
    const actionProducts = products.filter((p) =>
        p.categories.includes("actions")
    );

    return (
        <section>
            <div className="flex flex-col justify-center xl:max-w-[1208px]">
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Акции</h2>
                    <ViewAllButton btnText="All actions" href="actions"/>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                    {actionProducts.slice(0, 4).map((item, index) => (
                        <li
                            key={item.id}
                            className={`${index >= 4 ? "hidden" : ""}
            ${index >= 3 ? "md:hidden xl:block" : ""}
            ${index >= 4 ? "xl:hidden" : ""}
            `}
                        >
                            <ProductCard {...item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Actions;