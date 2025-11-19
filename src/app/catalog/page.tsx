import catalog from "@/data/catalogDatabase.json";
import GridCategoryBlock from "@/app/catalog/GridCategoryBlock";

export const metadata = {
    title: 'Каталог товаров магазина "Mypetshop"',
    description: 'Каталог всех товаров магазина "Mypetshop"',
};

interface Category {
    id: number;
    order: number;
    title: string;
    slug: string;
    img: string;
}

const Catalog = () => {

    const categories = catalog.sort((a, b) => a.order - b.order)

    const getColSpan = (category: Category) => {
        if (category.id === 1 || category.id === 10) {
            return "col-span-2 md:col-span-2"; // Широкие на всех экранах
        }
        if (category.id === 12) {
            return "col-span-1 xl:col-span-2"; // Широкий только на десктопе
        }
        if (category.id === 13) {
            return "col-span-2 md:col-span-1"; // Широкий только на мобильных
        }
        // По умолчанию - 1 колонка
        return "col-span-1 md:col-span-1";
    };

    return (
        <section className="px-[max(12px,calc((100%-1208px)/2))] mx-auto mb-20">
            <h1 className="mb-4 md:mb-8 xl:mb-10 flex flex-row text-4xl mb:text-5xl xl:text-[64px] text-[#414141] font-bold">
                Каталог
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                {categories.map((category, index) => (
                    <div
                        key={category.id}
                        className={`
                        ${getColSpan(category)} 
                        bg-gray-100 rounded overflow-hidden min-h-[200px] h-full`}
                    >
                        <div className="h-full w-full">
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