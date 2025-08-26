import ProductCard from "@/components/ProductCard";
import userDatabase from "@/data/userDatabase.json";
import productsDatabase from "@/data/productsDatabase.json";
import ViewAllButton from "@/components/ViewAllButton";

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
        <section>
            <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col mt-20">
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between text-[#414141]">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold">
                        Покупали раньше
                    </h2>
                    <ViewAllButton btnText="Go to main" href="/" />
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                    {products.map((item, index) => (
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

export default AllUserPurchases;