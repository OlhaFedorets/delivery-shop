import ProductCard from "../../components/ProductCard";
import database from "@/data/productsDatabase.json";
import ViewAllButton from "@/components/ViewAllButton";

const NewProducts = () => {
    const newProducts = database.filter((p) =>
        p.categories?.includes("new")
    );

    return (
        <section>
            <div className="flex flex-col ">
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
                        Новинки
                    </h2>
                    <ViewAllButton btnText="All new" href="new"/>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                    {newProducts.slice(0, 4).map((item, index) => (
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

export default NewProducts;