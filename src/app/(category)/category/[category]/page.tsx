import {TRANSLATIONS} from "@/utils/translations";
import GeneralListPage from "@/app/(products)/GeneralListPage";
import products from "@/data/productsDatabase.json";

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ category: string }>;
}) {
    const {category} = await params;
    // let TRANSLATIONS;
    return {
        title: TRANSLATIONS[category] || category,
        description: `Описание категории товаров "${
            TRANSLATIONS[category] || category
        }" магазина "Северяночка"`,
    };
}

const CategoryPage = async ({
                                searchParams,
                                params,
                            }: {
    searchParams: Promise<{ page?: string; itemsPerPage?: string }>;
    params: Promise<{ category: string }>;
}) => {
    console.log('CategoryPage params:', params);
    console.log('CategoryPage searchParams:', searchParams);

    const {category} = await params;

    const productsByCategory = products.filter((p) =>
        p.categories.includes(category)
    );


    return (
        <GeneralListPage
            searchParams={searchParams}
            props={{
                data: productsByCategory,
                pageTitle: TRANSLATIONS[category],
                basePath: `/category/${category}`,
                contentType: "category",
            }}
        />
    );
};

export default CategoryPage;



//
// console.log('Category from URL:', category);
// console.log('All categories in products:', [...new Set(products.flatMap(p => p.categories))]);

// const categoryItem = catalog.map(c=> c.slug === category)

// console.log('CategoryItem:', categoryItem);




//     const productsByCategory1 = () => {
//         const groupedByCategory: Record<string, SearchProduct[]> = {};
//
//         for (const product of products) {
//             for (const category of product.categories) {
//                 const normalizedCategory = category.toLowerCase();
//
//                 if (!groupedByCategory[normalizedCategory]) {
//                     groupedByCategory[normalizedCategory] = [];
//                 }
//
//                 groupedByCategory[normalizedCategory].push(product);
//             }
//         }
//
//         const result = Object.entries(groupedByCategory).map(
//             ([category, products]) => ({
//                 category,
//                 products,
//             })
//         );
//
//         return result;
//     }
//
// const productsByCategory2 = productsByCategory1()
// console.log(productsByCategory2)
// const productsByCategory3 = productsByCategory2.filter(p=>p.category===category)
//     console.log(productsByCategory3)
//     const productsByCategory4 = productsByCategory3.map(p=> p.products)
//     console.log(productsByCategory4)
// const catalogItem = catalog.find(
//     item => item.slug === category
// );
//
// const realCategory = catalogItem?.slug || category;
//
// const productsByCategory = products.filter((p) =>
//     p.categories.includes(realCategory)
// );


