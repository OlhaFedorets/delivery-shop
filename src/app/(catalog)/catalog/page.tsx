import catalog from "@/data/catalogDatabase.json";
import GridCategoryBlock from "@/app/(catalog)/GridCategoryBlock";

export const metadata = {
    title: 'Каталог товаров магазина "Mypetshop"',
    description: 'Каталог всех товаров магазина "Mypetshop"',
};

const Catalog = () => {

    const categories = catalog.sort((a, b) => a.order - b.order)

    return (
        <section className="px-[max(12px,calc((100%-1208px)/2))] mx-auto mb-20">
            <h1 className="mb-4 md:mb-8 xl:mb-10 flex flex-row text-4xl mb:text-5xl xl:text-[64px] text-[#414141] font-bold">
                Каталог
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={`${category.mobileColSpan} ${category.tabletColSpan} ${
                            category.colSpan
                        } bg-gray-100 rounded overflow-hidden min-h-50 h-full`}
                    >
                        <div className={`h-full w-full`}>
                            <GridCategoryBlock
                                slug={category.slug}
                                title={category.title}
                                img={category.img}
                                priority={index < 4}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Catalog;