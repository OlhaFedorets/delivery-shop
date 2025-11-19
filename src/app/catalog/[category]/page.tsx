import GeneralListPage from "@/app/(products)/GeneralListPage";
import {TRANSLATIONS} from "@/utils/translations";
import products from "@/data/productsDatabase.json";


export async function generateStaticParams() {
    const categories = [...new Set(products.map(product => product.category))];

    return categories.map((category) => ({
        category: category,
    }));
}

export const dynamic = 'auto';

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ category: string }>;
}) {
    const {category} = await params;
    return {
        title: TRANSLATIONS[category] || category,
        description: `Описание категории товаров "${
            TRANSLATIONS[category] || category
        }" магазина "Mypetshop"`,
    };
}

const CategoryPage = async ({
                                params,
                            }: {
    params: Promise<{ category: string }>;
}) => {
    const {category} = await params;

    const data = products.filter(p => p.category === category);

    return (
        <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col mx-auto">
            <GeneralListPage
                props={{
                    data: data,
                    pageTitle: TRANSLATIONS[category] || category,
                    basePath: `/catalog/${category}`,
                    contentType: "category",
                }}
            />
        </div>
    );
};

export default CategoryPage;