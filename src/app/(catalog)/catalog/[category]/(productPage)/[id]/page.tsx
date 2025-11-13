import {Metadata} from "next";
import ProductPageContent from "./ProductPageContent";
import products from "@/data/productsDatabase.json";
import {notFound} from "next/navigation";


interface PageProps {
    params: Promise<{ id: string }>;
}

const isValidProductId = (id: string): boolean => {
    return !!id && !isNaN(Number(id));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;

    // Проверяем что ID валидный
    if (!isValidProductId(id)) {
        return {
            title: "Товар не найден",
            description: "Неверный идентификатор товара",
        };
    }

    const product = products.find((product) => product.id === Number(id));

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

    if (!isValidProductId(id)) {
        notFound();
    }

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        notFound();
    }

    return <ProductPageContent product={product} productId={id} />;
};

export default ProductPage;