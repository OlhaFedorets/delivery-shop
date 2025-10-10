import {Metadata} from "next";
import {ProductCardProps} from "@/types/product";
import ProductPageContent from "./ProductPageContent";
import products from "@/data/productsDatabase.json";
import {notFound} from "next/navigation";

// interface PageProps {
//     params: Promise<{ id: string }>;
//     // searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }
//
// // export async function generateMetadata({
// //                                            params,
// //                                            searchParams,
// //                                        }: PageProps): Promise<Metadata> {
// //     const {id} = await params;
// //     const product = products.find((product) => product.id === +id);
// //
// //     if (!product) {
// //         throw new Error('Product not found');
// //     }
// //
// //     return {
// //         title: `${product.title}`,
// //         description: `Заказывайте ${product.title} по лучшей цене. Быстрая доставка, гарантия качества.`,
// //     };
// // }
//
// const ProductPage = async ({params}: PageProps) => {
//
//     const productId = (await params).id;
//
//     let product: ProductCardProps | undefined = products.find((product) => product.id === +productId)
//
//     if (!product) {
//         return <div>Товар не найден</div>;
//     }
//
//     return <ProductPageContent product={product} productId={productId}/>;
// };
//
// export default ProductPage;


interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;

    // Проверяем что ID валидный
    if (!id || isNaN(Number(id))) {
        return {
            title: "Товар не найден",
            description: "Неверный идентификатор товара",
        };
    }

    const product: ProductCardProps | undefined = products.find((product) => product.id === Number(id));

    if (!product) {
        return {
            title: "Товар не найден",
            description: "Запрашиваемый товар не существует",
        };
    }

    return {
        title: `${product.title || product.description || "Товар"}`,
        description: `Заказывайте ${product.title || product.description || "товар"} по лучшей цене. Быстрая доставка, гарантия качества.`,
    };
}

const ProductPage = async ({ params }: PageProps) => {
    const { id } = await params;

    // Проверяем валидность ID
    if (!id || isNaN(Number(id))) {
        notFound();
    }

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        notFound();
    }

    return <ProductPageContent product={product} productId={id} />;
};

export default ProductPage;