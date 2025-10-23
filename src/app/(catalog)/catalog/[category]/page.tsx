import GeneralListPage from "@/app/(products)/GeneralListPage";
import {TRANSLATIONS} from "@/utils/translations";
import productsData from "@/data/productsDatabase.json"

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
        }" магазина "Северяночка"`,
    };
}

const CategoryPage = async ({
                                searchParams,
                                params,
                            }: {
    searchParams: Promise<{
        page?: string;
        itemsPerPage?: string;
        filter?: string | string[];
        priceFrom?: string;
        priceTo?: string;
        inStock?: string;
    }>;
    params: Promise<{ category: string }>;
}) => {
    const {category} = await params;
    const resolvedSearchParams = await searchParams;

    const data = productsData.filter(p => p.categories[0] === category);

    return (
        <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col mx-auto">
            {/*<h1 className="ml-3 xl:ml-0 text-4xl md:text-5xl text-left font-bold text-main-text mb-8 md:mb-10 xl:mb-15 max-w-[336px] md:max-w-max leading-[150%]">*/}
            {/*    {TRANSLATIONS[category] || category}*/}
            {/*</h1>*/}
            <GeneralListPage
                searchParams={Promise.resolve(resolvedSearchParams)}
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